import React, { useContext, useState } from 'react'
import { Source, useOf } from '@storybook/addon-docs/blocks'

import {
  GdsDiv,
  GdsSegment,
  GdsSegmentedControl,
  GdsTheme,
} from '../../../../dist/libs/core/src/generated/react'
import customElements from '../../custom-elements.json'

function importsFor(tagName) {
  const manifest = customElements.modules.find((m) =>
    m.declarations.find((d) => d.tagName === tagName),
  )

  return manifest.exports.map((e) => ({
    name: e.declaration.name,
    path: manifest.path.replace(/src\//, '@sebgroup/green-core/'),
  }))
}

export const ImportPaths = (props) => {
  const { of } = props
  const [viewSource, setViewSource] = useState('web')
  const resolvedOf = useOf(of || 'meta')

  const importInfo = importsFor(resolvedOf.preparedMeta.component)
  const subComponents = Object.keys({
    ...resolvedOf.preparedMeta.subcomponents,
  })

  return (
    <GdsTheme designVersion="2023">
      <GdsDiv margin="0 0 2xl 0">
        <h2>Import</h2>
        <GdsSegmentedControl
          max-width="500px"
          value={viewSource}
          onChange={(e) => setViewSource(e.target.value)}
        >
          <GdsSegment value="web">
            Web component
          </GdsSegment>
          <GdsSegment value="angular">
            Angular
          </GdsSegment>
          <GdsSegment value="react">React JSX</GdsSegment>
        </GdsSegmentedControl>
        {importInfo
          .filter((info) => info.name !== '*')
          .map((info) => (
            <div key={info.name}>
              {viewSource === 'web' && (
                <Source
                  language="javascript"
                  dark
                  code={`import { ${info.name} } from '@sebgroup/green-core/pure'
${info.name}.define()

// or, from direct path:
import { ${info.name} } from '${info.path}'
${info.name}.define()`}
                />
              )}
              {viewSource === 'angular' && (
                <Source
                  language="javascript"
                  dark
                  code={`import { ${info.name}Component } from '@sebgroup/green-core-ng'`}
                />
              )}
              { viewSource === 'react' && (
                <Source
                  language="javascript"
                  dark
                  code={`// Use as JSX element(s) in React
import { ${info.name}${subComponents.length > 0 ? subComponents.map((subComp) => `, ${subComp}`) : ''} } from '@sebgroup/green-core/react'`}
                />
              )}
            </div>
          ))}
      </GdsDiv>
    </GdsTheme>
  )
}
