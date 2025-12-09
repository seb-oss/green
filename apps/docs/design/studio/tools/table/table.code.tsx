'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTable } from './table.provider'

export default function TableCode() {
  const { activePreset, customColumns, tableSettings } = useTable()
  const [framework, setFramework] = useState<'react' | 'angular' | 'lit'>(
    'react',
  )

  const columns =
    activePreset === 'users'
      ? [
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' },
        ]
      : activePreset === 'feedback'
        ? [
            { key: 'name', label: 'Name' },
            { key: 'feedback', label: 'Feedback' },
            { key: 'department', label: 'Department' },
            { key: 'status', label: 'Status' },
          ]
        : customColumns

  const generateCode = () => {
    const columnsStr = JSON.stringify(columns, null, 2)

    if (framework === 'react') {
      return `import * as Core from '@sebgroup/green-core/react'

const columns = ${columnsStr}

const dataProvider = async (request) => {
  // Your data fetching logic here
  return { rows: [], total: 0 }
}

export default function MyTable() {
  return (
    <Core.GdsTable
      columns={columns}
      data={dataProvider}
      density="${tableSettings.density}"
      variant="${tableSettings.variant}"
      ${tableSettings.selectable ? 'selectable={true}' : ''}
      ${tableSettings.searchable ? 'searchable={true}' : ''}
      ${tableSettings.settings ? 'settings={true}' : ''}
      ${tableSettings.striped ? 'striped={true}' : ''}
      rows={${tableSettings.rows}}
    />
  )
}`
    }

    if (framework === 'angular') {
      return `import { Component } from '@angular/core'

@Component({
  selector: 'app-my-table',
  template: \`
    <gds-table
      [columns]="columns"
      [data]="dataProvider"
      density="${tableSettings.density}"
      variant="${tableSettings.variant}"
      ${tableSettings.selectable ? '[selectable]="true"' : ''}
      ${tableSettings.searchable ? '[searchable]="true"' : ''}
      ${tableSettings.settings ? '[settings]="true"' : ''}
      ${tableSettings.striped ? '[striped]="true"' : ''}
      [rows]="${tableSettings.rows}"
    ></gds-table>
  \`
})
export class MyTableComponent {
  columns = ${columnsStr}

  async dataProvider(request: any) {
    // Your data fetching logic here
    return { rows: [], total: 0 }
  }
}`
    }

    if (framework === 'lit') {
      return `import { html } from 'lit'

const columns = ${columnsStr}

const dataProvider = async (request) => {
  // Your data fetching logic here
  return { rows: [], total: 0 }
}

export const MyTable = () => html\`
  <gds-table
    .columns=\${columns}
    .data=\${dataProvider}
    density="${tableSettings.density}"
    variant="${tableSettings.variant}"
    ${tableSettings.selectable ? '?selectable=\${true}' : ''}
    ${tableSettings.searchable ? '?searchable=\${true}' : ''}
    ${tableSettings.settings ? '?settings=\${true}' : ''}
    ${tableSettings.striped ? '?striped=\${true}' : ''}
    rows="${tableSettings.rows}"
  ></gds-table>
\``
    }

    return ''
  }

  const code = generateCode()

  return (
    <Core.GdsCard gap="s" width="100%" padding="0">
      <Core.GdsFlex align-items="center" gap="s">
        <Core.GdsDropdown
          size="small"
          plain
          value={framework}
          onChange={(e: React.FormEvent<HTMLElement>) => {
            const customElement = e.target as HTMLElement & {
              value: string
            }
            setFramework(customElement.value as any)
          }}
        >
          <Core.GdsOption value="react">React</Core.GdsOption>
          <Core.GdsOption value="angular">Angular</Core.GdsOption>
          <Core.GdsOption value="lit">Lit</Core.GdsOption>
        </Core.GdsDropdown>

        <Core.GdsButton
          size="small"
          rank="secondary"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          <Core.IconCopy />
        </Core.GdsButton>
      </Core.GdsFlex>

      <Core.GdsCard variant="secondary">
        <pre
          style={{
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            flex: 1,
          }}
        >
          <code>{code}</code>
        </pre>
      </Core.GdsCard>
    </Core.GdsCard>
  )
}
