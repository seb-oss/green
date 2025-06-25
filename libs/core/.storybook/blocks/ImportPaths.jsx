import React, { useContext, useState } from 'react'
import { Source, useOf } from '@storybook/blocks'

import {
  GdsSegment,
  GdsSegmentedControl,
  GdsText,
  GdsTheme,
} from '../../../../dist/libs/core/src/generated/react'
import customElements from '../../custom-elements.json'

function importsFor(tagName) {
  const manifest = customElements.modules.find((m) =>
    m.declarations.find((d) => d.tagName === tagName),
  )

  console.log('IM HERE!')
  console.log(manifest)

  return manifest.exports.map((e) => ({
    name: e.declaration.name,
    path: manifest.path.replace(/src\//, '@sebgroup/green-core/'),
  }))
}

export const ImportPaths = (props) => {
  const { of } = props
  const [viewSource, setViewSource] = useState('web')

  if ('of' in props && of === undefined) {
    throw new Error(
      'Unexpected `of={undefined}`, did you mistype a CSF file reference?',
    )
  }
  const resolvedOf = useOf(of || 'meta')

  const importInfo = importsFor(resolvedOf.preparedMeta.component)

  return (
    <GdsTheme designVersion="2023">
      <h2>Import</h2>
      <GdsSegmentedControl
        max-width="500px"
        value={viewSource}
        onChange={(e) => setViewSource(e.target.value)}
      >
        <GdsSegment value="web">Web component (Angular and others)</GdsSegment>
        <GdsSegment value="react">React JSX</GdsSegment>
      </GdsSegmentedControl>
      {importInfo.map((info) => (
        <div key={info.name}>
          {viewSource === 'web' ? (
            <Source
              language="javascript"
              dark
              code={`import { ${info.name} } from '@sebgroup/green-core/pure'
            ${info.name}.define()

            // or, from direct path:
            import { ${info.name} } from '${info.path}'
            ${info.name}.define()`}
            />
          ) : (
            <Source
              language="javascript"
              dark
              code={`// This import can be used as a JSX element in React
              import { ${info.name} } from '@sebgroup/green-core/react'`}
            />
          )}
        </div>
      ))}
    </GdsTheme>
  )
}
