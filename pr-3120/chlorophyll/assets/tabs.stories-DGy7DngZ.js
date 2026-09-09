const r={title:"Components/Tabs",tags:["autodocs"],parameters:{componentIds:["component-tab"]}},a={render:()=>`
    <div>
      <nav role="tablist">
        <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true">
          Tab 1
        </a>
        <a href="#tab2" aria-controls="tab-content-2" role="tab">
          Tab 2
        </a>
        <a href="#tab3" aria-controls="tab-content-3" role="tab">
          Tab 3
        </a>
      </nav>
      <section aria-live="polite">
        <article id="tab-content-1" role="tabpanel" aria-hidden="false">
          <p class="pt-5">Content for tab 1, note that padding needs to be added to content, in this case we've used <code>pt-5</code> padding top with spacing unit 5.</p>
        </article>
        <article id="tab-content-2" role="tabpanel" aria-hidden="true">
          Content for tab 2
        </article>
        <article id="tab-content-3" role="tabpanel" aria-hidden="true">
          Content for tab 3
        </article>
      </section>
    </div>`},t={render:()=>`
  <nav role="tablist">
    <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true">Tab 1</a>
    <a href="#tab2" aria-controls="tab-content-2" role="tab">Tab 2</a>
    <a aria-controls="tab-content-3" role="tab" aria-disabled>Tab 3</a>
  </nav>`},e={render:()=>`
  <nav role="tablist" class="gds-tabs--fluid">
    <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true">Tab 1</a>
    <a href="#tab2" aria-controls="tab-content-2" role="tab">Tab 2</a>
  </nav>`},n={render:()=>`
  <nav role="tablist" class="gds-tabs--fluid">
    <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true" class="flex align-items-center justify-content-between">
      More tabs label
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8094 9.22817L18.1906 8.60942C18.0437 8.46255 17.8062 8.46255 17.6594 8.60942L12 14.2563L6.3406 8.60942C6.19373 8.46255 5.95623 8.46255 5.80935 8.60942L5.1906 9.22817C5.04373 9.37505 5.04373 9.61255 5.1906 9.75942L11.7344 16.3032C11.8812 16.45 12.1187 16.45 12.2656 16.3032L18.8094 9.75942C18.9562 9.61255 18.9562 9.37505 18.8094 9.22817Z" fill="#333333" />
      </svg>
    </a>
  </nav>`};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div>
      <nav role="tablist">
        <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true">
          Tab 1
        </a>
        <a href="#tab2" aria-controls="tab-content-2" role="tab">
          Tab 2
        </a>
        <a href="#tab3" aria-controls="tab-content-3" role="tab">
          Tab 3
        </a>
      </nav>
      <section aria-live="polite">
        <article id="tab-content-1" role="tabpanel" aria-hidden="false">
          <p class="pt-5">Content for tab 1, note that padding needs to be added to content, in this case we've used <code>pt-5</code> padding top with spacing unit 5.</p>
        </article>
        <article id="tab-content-2" role="tabpanel" aria-hidden="true">
          Content for tab 2
        </article>
        <article id="tab-content-3" role="tabpanel" aria-hidden="true">
          Content for tab 3
        </article>
      </section>
    </div>\`
}`,...a.parameters?.docs?.source},description:{story:"Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <nav role="tablist">
    <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true">Tab 1</a>
    <a href="#tab2" aria-controls="tab-content-2" role="tab">Tab 2</a>
    <a aria-controls="tab-content-3" role="tab" aria-disabled>Tab 3</a>
  </nav>\`
}`,...t.parameters?.docs?.source},description:{story:"Omit the href attribute to disable a tab and add aria-disabled to let screen readers know it's disabled.",...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <nav role="tablist" class="gds-tabs--fluid">
    <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true">Tab 1</a>
    <a href="#tab2" aria-controls="tab-content-2" role="tab">Tab 2</a>
  </nav>\`
}`,...e.parameters?.docs?.source},description:{story:"The tabs can take up as they are allowed by adding the `.gds-tabs--fluid` class. This should be used on smaller screens. [Check the documentation for mobile](https://designlibrary.sebgroup.com/components/component-tab)",...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <nav role="tablist" class="gds-tabs--fluid">
    <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true" class="flex align-items-center justify-content-between">
      More tabs label
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8094 9.22817L18.1906 8.60942C18.0437 8.46255 17.8062 8.46255 17.6594 8.60942L12 14.2563L6.3406 8.60942C6.19373 8.46255 5.95623 8.46255 5.80935 8.60942L5.1906 9.22817C5.04373 9.37505 5.04373 9.61255 5.1906 9.75942L11.7344 16.3032C11.8812 16.45 12.1187 16.45 12.2656 16.3032L18.8094 9.75942C18.9562 9.61255 18.9562 9.37505 18.8094 9.22817Z" fill="#333333" />
      </svg>
    </a>
  </nav>\`
}`,...n.parameters?.docs?.source},description:{story:"On smaller screen where it's not possible to show all tabs they should be collapsed into a dropdown. [Check the documentation for mobile](https://designlibrary.sebgroup.com/components/component-tab)",...n.parameters?.docs?.description}}};const o=["Tabs","Disabled","Fluid","Collapse"];export{n as Collapse,t as Disabled,e as Fluid,a as Tabs,o as __namedExportsOrder,r as default};
