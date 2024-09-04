import * as Icons from './icons/index'
import { useState } from 'react'
import { IconBank, IconRocket } from './icons/index'

const Template = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const handleIconClick = (iconName) => {
    const importStatement = `import { ${iconName} } from '@sebgroup/green-react/src/lib/icon/icons/${iconName}.js'`
    const jsxCode = `<${iconName} />`
    const template = `${importStatement}\n\n${jsxCode}`
    navigator.clipboard.writeText(template)
    alert(`Copied to clipboard:\n${template}`)
  }

  const filteredIcons = Object.keys(Icons).filter((iconName) =>
    iconName.toLowerCase().includes(searchTerm),
  )

  return (
    <div className="custom-card-storybook">
      <Styles />
      <input
        type="text"
        id="icon-search"
        placeholder="Search icons..."
        onChange={handleSearch}
      />
      <div className="icon-showcase">
        {filteredIcons.map((iconName) => {
          const IconComponent = Icons[iconName]
          return (
            <div
              key={iconName}
              className="icon-container"
              onClick={() => handleIconClick(iconName)}
            >
              <IconComponent />
              <code>
                {`<`}
                {iconName}
                {`/>`}
              </code>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Styles = () => (
  <style>
    {`
    .custom-card-storybook .icon-showcase {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 24px;
    }
    .custom-card-storybook .icon-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      gap: 20px;
      border-radius: 8px;
      border: 1px solid #ececec;
      padding: 32px 24px;
    }

    code {
      font-size: 10px;
    }

    .custom-card-storybook input#icon-search {
      margin-bottom: 1rem;
      padding: 0.5rem;
      width: 100%;
      box-sizing: border-box;
    }
  `}
  </style>
)

export default {
  title: 'Components/Icon',
}

export const Default = {
  render: Template.bind({}),
  name: 'Icons',
}
