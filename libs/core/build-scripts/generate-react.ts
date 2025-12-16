import * as fs from 'fs'
import * as path from 'node:path'
import * as prettier from 'prettier'

import prettierConfig from '../../../prettier.config.mjs'
import { CemParser } from '../src/utils/helpers/component-meta'

import type { ComponentData } from '../src/utils/helpers/component-meta.types'

const reactDir = path.join('libs/core/src/generated/react')

/**
 * Converts a kebab-case event name to a React event handler name
 * @example 'gds-close' -> 'onGdsClose'
 * @example 'gds-ui-state' -> 'onGdsUiState'
 */
function toReactEventName(eventName: string): string {
  // Split by hyphen and convert to PascalCase
  const parts = eventName.split('-')
  const pascalCase = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
  return `on${pascalCase}`
}

/**
 * Generates TypeScript type definitions for event handlers
 */
function generateEventHandlerTypes(component: ComponentData): string {
  const isFormControl = component.isFormControl
  const hasCustomEvents = component.events && component.events.length > 0

  if (!isFormControl && !hasCustomEvents) {
    return ''
  }

  // Build the custom event handlers
  // For form controls, filter out onChange and onInput since we handle those specially
  const customEventHandlers = hasCustomEvents
    ? component.events
        .filter((event) => {
          const handlerName = toReactEventName(event.name)
          // Skip onChange and onInput for form controls as we add properly typed versions
          return !(
            isFormControl &&
            (handlerName === 'onChange' || handlerName === 'onInput')
          )
        })
        .map((event) => {
          const handlerName = toReactEventName(event.name)
          const eventType = event.type || 'Event'
          const jsDoc = event.description
            ? `  /** ${event.description.replace(/\*\//g, '*\\/')} */\n`
            : ''
          return `${jsDoc}  ${handlerName}?: (event: ${eventType}) => void;`
        })
        .join('\n')
    : ''

  // For form controls, add properly typed onChange and onInput handlers
  // Use component meta descriptions for onChange/onInput if available, otherwise use standard React descriptions
  const formControlHandlers = isFormControl
    ? `  /** Callback fired when the value changes. In React, this fires on every input (following React conventions). */
  onChange?: (event: Event & { target: EventTarget & ${component.className}Class }) => void;
  /** Callback fired on input events. */
  onInput?: (event: Event & { target: EventTarget & ${component.className}Class }) => void;`
    : ''

  const allHandlers = [formControlHandlers, customEventHandlers]
    .filter(Boolean)
    .join('\n')

  // For form controls, omit onChange and onInput from base props to avoid union types
  const basePropsType = isFormControl
    ? `Omit<React.ComponentProps<ReturnType<typeof getReactComponent<${component.className}Class>>>, 'onChange' | 'onInput'>`
    : `React.ComponentProps<ReturnType<typeof getReactComponent<${component.className}Class>>>`

  return `
type ${component.className}Props = ${basePropsType} & {
${allHandlers}
};
`
}

/**
 * Determines the props type to use based on whether the component has events or is a form control
 */
function getPropsType(component: ComponentData): string {
  if (
    component.isFormControl ||
    (component.events && component.events.length > 0)
  ) {
    return `${component.className}Props`
  }
  return `React.ComponentProps<ReturnType<typeof getReactComponent<${component.className}Class>>>`
}

/**
 * Generates the controlled form component logic using hooks
 */
function generateControlledFormComponent(
  component: ComponentData,
  levels: string,
  importPath: string,
  propsType: string,
  jsDoc: string,
): string {
  const isCheckbox = component.isCheckboxComponent
  const hookName = isCheckbox ? 'useControlledChecked' : 'useControlledValue'
  const valueProp = isCheckbox ? 'checked' : 'value'
  const defaultValueProp = isCheckbox ? 'defaultChecked' : 'defaultValue'

  return `
    import { getReactComponent, ${hookName} } from '${levels}/utils/react';
    import { ${component.className} as ${component.className}Class } from '${levels}/${importPath}';

    // eslint-disable-next-line import/no-extraneous-dependencies
    import { createElement, useRef } from 'react';

    ${jsDoc}
    export const ${component.className} = (props: ${propsType} & { ref?: React.Ref<${component.className}Class> }) => {
      ${component.className}Class.define();
      const JSXElement = getReactComponent<${component.className}Class>('${component.tagName}');
      const internalRef = useRef<${component.className}Class | null>(null);
      const ref = (props.ref as React.RefObject<${component.className}Class>) || internalRef;

      // Use controlled form hook to sync ${valueProp} and handle input events
      ${hookName}<${component.className}Class>(ref, props.${valueProp}, props.${defaultValueProp}, props.onChange, props.onInput);

      // Remove onChange, onInput, and ref from props before passing to createElement
      // to avoid type conflicts with React's standard event handlers
      const { onChange, onInput, ref: _ref, ...restProps } = props;
      const propsWithClass = {...restProps, class: props.className, ref};
      return createElement(JSXElement, propsWithClass);
    };

    ${component.className}.displayName = '${component.className}';
  `
}

/**
 * Generates a simple component without controlled form logic
 */
function generateSimpleComponent(
  component: ComponentData,
  levels: string,
  importPath: string,
  propsType: string,
  jsDoc: string,
): string {
  return `
    import { getReactComponent } from '${levels}/utils/react';
    import { ${component.className} as ${component.className}Class } from '${levels}/${importPath}';

    // eslint-disable-next-line import/no-extraneous-dependencies
    import { createElement } from 'react';

    ${jsDoc}
    export const ${component.className} = (props: ${propsType} & { ref?: React.Ref<${component.className}Class> }) => {
      ${component.className}Class.define();
      const JSXElement = getReactComponent<${component.className}Class>('${component.tagName}');
      const propsWithClass = {...props, class: props.className, ref: props.ref}
      return createElement(JSXElement, propsWithClass);
    };

    ${component.className}.displayName = '${component.className}';
  `
}

async function generateReactComponents() {
  // Clear build directory
  if (fs.existsSync(reactDir)) {
    fs.rmSync(reactDir, { recursive: true })
  }
  fs.mkdirSync(reactDir, { recursive: true })

  console.log('> Parsing component metadata...')

  // Fetch component metadata using CemParser
  // No path needed - uses default path relative to component-meta.ts location
  const { components } = await CemParser.parseAllComponents()

  console.log(`> Found ${components.length} components`)

  // Filter components that have tag names
  const filteredComponents = components.filter(
    (component: ComponentData) => component.tagName,
  )

  console.log(
    `> Generating React wrappers for ${filteredComponents.length} components...`,
  )

  const index: string[] = []
  let completedCount = 0

  for (const component of filteredComponents) {
    const tagWithoutPrefix = component.tagName.replace(/^gds-/, '')
    const subDir = component.tagName.includes('icon') ? 'icons/' : ''
    const componentDir = path.join(
      path.join(reactDir, subDir),
      tagWithoutPrefix,
    )
    const componentFile = path.join(componentDir, 'index.ts')
    const importPath = component.sourcePath
      .replace(/^src\//, '')
      .replace(/\.ts$/, '')

    fs.mkdirSync(componentDir, { recursive: true })

    const jsDoc = component.description
      ? `/** ${component.description.replace(/\*\//g, '*\\/')} */`
      : ''

    const levels = subDir.length > 0 ? '../../../..' : '../../..'
    const eventHandlerTypes = generateEventHandlerTypes(component)
    const propsType = getPropsType(component)

    // Generate controlled form component for form controls, simple component for others
    const componentCode = component.isFormControl
      ? generateControlledFormComponent(
          component,
          levels,
          importPath,
          propsType,
          jsDoc,
        )
      : generateSimpleComponent(component, levels, importPath, propsType, jsDoc)

    // We allow the use of react as an extraneous dependency here because we expect any consumer
    // that imports React components from Green Core to already have React as a dependency.
    const formattedSource = await prettier.format(
      `${eventHandlerTypes}\n${componentCode}`,
      Object.assign({}, prettierConfig, {
        parser: 'babel-ts',
      }),
    )

    index.push(`export * from './${subDir}${tagWithoutPrefix}/index.js';`)

    fs.writeFileSync(componentFile, formattedSource, 'utf8')

    completedCount++

    if (completedCount === filteredComponents.length) {
      fs.writeFileSync(
        path.join(reactDir, 'index.ts'),
        index.join('\n'),
        'utf8',
      )
      console.log(`> ✓ Generated ${completedCount} React components`)
    }
  }
}

// Execute the generator
generateReactComponents().catch((error) => {
  console.error('! Error generating React components:', error)
  process.exit(1)
})
