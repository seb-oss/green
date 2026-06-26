const t={title:"Components/Links",tags:["autodocs"],parameters:{componentIds:["component-inlinelinks"]}},i={render:e=>`
    <a href="#" class="gds-link">Normal link</a>    
    <a href="https://www.seb.se" class="gds-link">
      Go to seb.se
    </a>
    <a>Disabled link</a>`,decorators:[e=>`<div style="display:flex;flex-direction: column;gap:1rem;">${e()}</div>`]},n={render:e=>`
  <a href="#" class="gds-link link-underline" aria-label="Link Label">
    Basic inline with underline
  </a>`},a={render:e=>`
  <a href="#" class="gds-link link-icon" aria-label="Link Label">
    <svg viewBox="0 0 12 17" aria-hidden="true">
      <path d="M11.56 4.06 8.936 1.436a1.5 1.5 0 0 0-1.059-.44H1.5C.672 1 0 1.672 0 2.5v13A1.5 1.5 0 0 0 1.5 17h9a1.5 1.5 0 0 0 1.5-1.5V5.122c0-.397-.16-.781-.44-1.063ZM10.377 5H8V2.622L10.378 5ZM1.5 15.5v-13h5v3.25c0 .416.334.75.75.75h3.25v9h-9Z" />
    </svg>
    Icon on the left
  </a>  
  <a href="#" class="gds-link link-icon" aria-label="Link Label">
    Icon on the right
    <svg viewBox="0 0 12 14" aria-hidden="true">
      <path d="m10.89 6.253-4.624 4.638a.375.375 0 0 1-.532 0L1.11 6.253a.375.375 0 0 1 0-.531l.613-.613a.37.37 0 0 1 .534.007L5.184 8.15V.375c0-.206.17-.375.375-.375h.875c.207 0 .375.169.375.375V8.15l2.929-3.034a.376.376 0 0 1 .534-.007l.612.613a.37.37 0 0 1 .007.531Zm.735 6.122H.375A.376.376 0 0 0 0 12.75v.875c0 .206.169.375.375.375h11.25a.376.376 0 0 0 .375-.375v-.875a.376.376 0 0 0-.375-.375Z" />
    </svg>
  </a>`,decorators:[e=>`<div style="display:flex;flex-direction: column;gap:1rem;">${e()}</div>`]},r={render:()=>`
  <a href="#" class="gds-link link-arrow" aria-label="External link">
    Link with arrow
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </a>`,decorators:[e=>`<div style="display:flex;flex-direction: column;gap:1rem;">${e()}</div>`]},s={render:()=>`
    <a href="#" class="gds-button tertiary" style={{ marginBottom: '16px' }}>Link button</a>  
    <a href="#" class="gds-button primary" style={{ marginBottom: '16px' }}>Primary link button</a>  
    <a href="#" class="gds-button secondary" style={{ marginBottom: '16px' }}>Secondary link button</a>  
    <a href="#" class="gds-button ghost-dark">Ghost link button</a>`,decorators:[e=>`<div style="display:flex;flex-direction: column;gap:1rem;">${e()}</div>`]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => \`
    <a href="#" class="gds-link">Normal link</a>    
    <a href="https://www.seb.se" class="gds-link">
      Go to seb.se
    </a>
    <a>Disabled link</a>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`]
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => \`
  <a href="#" class="gds-link link-underline" aria-label="Link Label">
    Basic inline with underline
  </a>\`
}`,...n.parameters?.docs?.source},description:{story:"Basic link when you want to apply `underline` style by adding the class `link-underline`.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => \`
  <a href="#" class="gds-link link-icon" aria-label="Link Label">
    <svg viewBox="0 0 12 17" aria-hidden="true">
      <path d="M11.56 4.06 8.936 1.436a1.5 1.5 0 0 0-1.059-.44H1.5C.672 1 0 1.672 0 2.5v13A1.5 1.5 0 0 0 1.5 17h9a1.5 1.5 0 0 0 1.5-1.5V5.122c0-.397-.16-.781-.44-1.063ZM10.377 5H8V2.622L10.378 5ZM1.5 15.5v-13h5v3.25c0 .416.334.75.75.75h3.25v9h-9Z" />
    </svg>
    Icon on the left
  </a>  
  <a href="#" class="gds-link link-icon" aria-label="Link Label">
    Icon on the right
    <svg viewBox="0 0 12 14" aria-hidden="true">
      <path d="m10.89 6.253-4.624 4.638a.375.375 0 0 1-.532 0L1.11 6.253a.375.375 0 0 1 0-.531l.613-.613a.37.37 0 0 1 .534.007L5.184 8.15V.375c0-.206.17-.375.375-.375h.875c.207 0 .375.169.375.375V8.15l2.929-3.034a.376.376 0 0 1 .534-.007l.612.613a.37.37 0 0 1 .007.531Zm.735 6.122H.375A.376.376 0 0 0 0 12.75v.875c0 .206.169.375.375.375h11.25a.376.376 0 0 0 .375-.375v-.875a.376.376 0 0 0-.375-.375Z" />
    </svg>
  </a>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`]
}`,...a.parameters?.docs?.source},description:{story:"Optional icon position on the left or the right, width and height should not be specified since they are set in the CSS, including the space between the icon and the text.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
  <a href="#" class="gds-link link-arrow" aria-label="External link">
    Link with arrow
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </a>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`]
}`,...r.parameters?.docs?.source},description:{story:"The animated link with arrow used new color as base which is the `--gds-sys-color-text-primary` and same applies for the `visited` state which is `--gds-sys-color-text-primary`.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <a href="#" class="gds-button tertiary" style={{ marginBottom: '16px' }}>Link button</a>  
    <a href="#" class="gds-button primary" style={{ marginBottom: '16px' }}>Primary link button</a>  
    <a href="#" class="gds-button secondary" style={{ marginBottom: '16px' }}>Secondary link button</a>  
    <a href="#" class="gds-button ghost-dark">Ghost link button</a>\`,
  decorators: [story => \`<div style="display:flex;flex-direction: column;gap:1rem;">\${story()}</div>\`]
}`,...s.parameters?.docs?.source},description:{story:"Sometimes you want to use links but style them as buttons, just add the class `button` and optionally a variant like `primary` or `ghost` and voilà - now you've got a link which looks and behaves like a button!",...s.parameters?.docs?.description}}};const o=["Links","Link","LinkWithIcon","LinkWithArrow","LinkAsButton"];export{n as Link,s as LinkAsButton,r as LinkWithArrow,a as LinkWithIcon,i as Links,o as __namedExportsOrder,t as default};
