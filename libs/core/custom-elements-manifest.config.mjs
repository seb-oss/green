import { pascalCase } from 'change-case'

export default {
  // ...
  plugins: [
    // Filter private fields
    {
      name: 'web-components-private-fields-filter',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText()
            const classDoc = moduleDoc?.declarations?.find(
              (declaration) => declaration.name === className,
            )

            if (classDoc?.members) {
              classDoc.members = classDoc.members.filter(
                (member) => !member.privacy,
              )
            }
          }
        }
      },
    },
    {
      name: 'web-components-subcomponent-extractor',
      analyzePhase({ ts, node, moduleDoc }) {
        // Only process class declarations
        if (!ts.isClassDeclaration(node)) {
          return
        }

        // Get JSDoc tags
        const jsDocs = ts.getJSDocTags(node)
        const subcomponents = []

        // Look for @subcomponent tags
        for (const tag of jsDocs) {
          if (tag.tagName.text === 'subcomponent') {
            // Parse the tag text: "@subcomponent gds-segment - Description here"
            const commentText = tag.comment || ''
            const text = typeof commentText === 'string'
              ? commentText
              : commentText.map(part => part.text || part).join('')

            // Extract tag name and description
            // Format: "gds-segment - Description of the subcomponent"
            const match = text.match(/^([\w-]+)\s*-?\s*(.*)/)

            if (match) {
              subcomponents.push({
                tagName: match[1].trim(),
                description: match[2].trim() || ''
              })
            }
          }
        }

        // If we found subcomponents, add them to the declaration
        if (subcomponents.length > 0) {
          const className = node.name?.getText()

          // Find the class declaration in the module
          const classDeclaration = moduleDoc?.declarations?.find(
            declaration => declaration.name === className
          )

          if (classDeclaration) {
            // Add subcomponents array to the declaration
            classDeclaration.subcomponents = subcomponents
          }
        }
      }
    },
    {
      name: 'web-components-section-categorizer',
      analyzePhase({ moduleDoc }) {
        if (!moduleDoc?.declarations) return

        moduleDoc.declarations.forEach((declaration) => {
          if (declaration.attributes) {
            declaration.attributes = declaration.attributes.map((attr) => ({
              ...attr,
              category: getCategory(attr.name),
            }))
          }

          if (declaration.members) {
            declaration.members = declaration.members.map((member) => ({
              ...member,
              category: getCategory(member.name),
            }))
          }
        })
      },
    },
  ],
}

function getCategory(name) {
  if (
    [
      `width`,
      `height`,
      `'max-width'`,
      `'max-height'`,
      `'min-width'`,
      `'min-height'`,
      `'block-size'`,
      `'inline-size'`,
      `'min-block-size'`,
      `'min-inline-size'`,
      `'max-block-size'`,
      `'max-inline-size'`,
      `'box-sizing'`,
      `'z-index'`,
      `transform`,
      `margin`,
      `padding`,
      `'padding-inline'`,
      `'padding-block'`,
      `'margin-inline'`,
      `'margin-block'`,
      `gap`,
      `border`,
      `'border-radius'`,
      `'border-width'`,
      `'border-color'`,
      `'border-style'`,
      `'box-shadow'`,
      `background`,
      `'background-color'`,
      `flex`,
      `'flex-grow'`,
      `'flex-shrink'`,
      `'flex-basis'`,
      `'flex-direction'`,
      `'flex-wrap'`,
      `'justify-content'`,
      `'justify-items'`,
      `'justify-self'`,
      `'align-items'`,
      `'align-content'`,
      `'align-self'`,
      `'place-content'`,
      `'place-items'`,
      `'place-self'`,
      `'grid-area'`,
      `order`,
      `grid`,
      `'grid-column'`,
      `'grid-row'`,
      `display`,
      `position`,
      `inset`,
      `color`,
      `opacity`,
      `overflow`,
      `'font-size'`,
      `'font-weight'`,
      `'text-align'`,
      `'text-wrap'`,
    ].includes(name)
  ) {
    return 'Declarative layout / Style expression properties'
  }
  return undefined // Unchanged if no category is found
}
