"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[6414],{"./libs/chlorophyll/scss/components/link/link.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Link:()=>Link,LinkAsButton:()=>LinkAsButton,LinkWithArrow:()=>LinkWithArrow,LinkWithIcon:()=>LinkWithIcon,Links:()=>Links,__namedExportsOrder:()=>__namedExportsOrder,default:()=>link_stories}),(0,__webpack_require__("storybook/internal/client-logger").deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");const link_stories={title:"Components/Links",tags:["autodocs"],parameters:{componentIds:["component-inlinelinks"]}},Links={render:args=>'\n    <a href="#">Normal link</a>    \n    <a href="https://www.seb.se" class="link-history">\n      Go to seb.se\n    </a>\n    <a>Disabled link</a>',decorators:[story=>`<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`]},Link={render:args=>'\n  <a href="#" class="gds-link-underline" aria-label="Link Label">\n    Basic inline with underline\n  </a>'},LinkWithIcon={render:args=>'\n  <a href="#" class="gds-link-icon" aria-label="Link Label">\n    <svg viewBox="0 0 12 17" aria-hidden="true">\n      <path d="M11.56 4.06 8.936 1.436a1.5 1.5 0 0 0-1.059-.44H1.5C.672 1 0 1.672 0 2.5v13A1.5 1.5 0 0 0 1.5 17h9a1.5 1.5 0 0 0 1.5-1.5V5.122c0-.397-.16-.781-.44-1.063ZM10.377 5H8V2.622L10.378 5ZM1.5 15.5v-13h5v3.25c0 .416.334.75.75.75h3.25v9h-9Z" />\n    </svg>\n    Icon on the left\n  </a>  \n  <a href="#" class="gds-link-icon" aria-label="Link Label">\n    Icon on the right\n    <svg viewBox="0 0 12 14" aria-hidden="true">\n      <path d="m10.89 6.253-4.624 4.638a.375.375 0 0 1-.532 0L1.11 6.253a.375.375 0 0 1 0-.531l.613-.613a.37.37 0 0 1 .534.007L5.184 8.15V.375c0-.206.17-.375.375-.375h.875c.207 0 .375.169.375.375V8.15l2.929-3.034a.376.376 0 0 1 .534-.007l.612.613a.37.37 0 0 1 .007.531Zm.735 6.122H.375A.376.376 0 0 0 0 12.75v.875c0 .206.169.375.375.375h11.25a.376.376 0 0 0 .375-.375v-.875a.376.376 0 0 0-.375-.375Z" />\n    </svg>\n  </a>',decorators:[story=>`<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`]},LinkWithArrow={render:()=>'\n  <a href="#" class="link gds-link-arrow" aria-label="External link">\n    Link with arrow\n    <svg\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke="currentColor"\n      stroke-width="2"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <line x1="5" y1="12" x2="19" y2="12"></line>\n      <polyline points="12 5 19 12 12 19"></polyline>\n    </svg>\n  </a>',decorators:[story=>`<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`]},LinkAsButton={render:()=>'\n    <a href="#" class="button" style={{ marginBottom: \'16px\' }}>Link button</a>  \n    <a href="#" class="button primary" style={{ marginBottom: \'16px\' }}>Primary link button</a>  \n    <a href="#" class="button secondary" style={{ marginBottom: \'16px\' }}>Secondary link button</a>  \n    <a href="#" class="button ghost">Ghost link button</a>',decorators:[story=>`<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`]},__namedExportsOrder=["Links","Link","LinkWithIcon","LinkWithArrow","LinkAsButton"];Links.parameters={...Links.parameters,docs:{...Links.parameters?.docs,source:{originalSource:'{\n  render: args => `\n    <a href="#">Normal link</a>    \n    <a href="https://www.seb.se" class="link-history">\n      Go to seb.se\n    </a>\n    <a>Disabled link</a>`,\n  decorators: [story => `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`]\n}',...Links.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'{\n  render: args => `\n  <a href="#" class="gds-link-underline" aria-label="Link Label">\n    Basic inline with underline\n  </a>`\n}',...Link.parameters?.docs?.source},description:{story:"Basic link when you want to apply `underline` style by adding the class `gds-link-underline`.",...Link.parameters?.docs?.description}}},LinkWithIcon.parameters={...LinkWithIcon.parameters,docs:{...LinkWithIcon.parameters?.docs,source:{originalSource:'{\n  render: args => `\n  <a href="#" class="gds-link-icon" aria-label="Link Label">\n    <svg viewBox="0 0 12 17" aria-hidden="true">\n      <path d="M11.56 4.06 8.936 1.436a1.5 1.5 0 0 0-1.059-.44H1.5C.672 1 0 1.672 0 2.5v13A1.5 1.5 0 0 0 1.5 17h9a1.5 1.5 0 0 0 1.5-1.5V5.122c0-.397-.16-.781-.44-1.063ZM10.377 5H8V2.622L10.378 5ZM1.5 15.5v-13h5v3.25c0 .416.334.75.75.75h3.25v9h-9Z" />\n    </svg>\n    Icon on the left\n  </a>  \n  <a href="#" class="gds-link-icon" aria-label="Link Label">\n    Icon on the right\n    <svg viewBox="0 0 12 14" aria-hidden="true">\n      <path d="m10.89 6.253-4.624 4.638a.375.375 0 0 1-.532 0L1.11 6.253a.375.375 0 0 1 0-.531l.613-.613a.37.37 0 0 1 .534.007L5.184 8.15V.375c0-.206.17-.375.375-.375h.875c.207 0 .375.169.375.375V8.15l2.929-3.034a.376.376 0 0 1 .534-.007l.612.613a.37.37 0 0 1 .007.531Zm.735 6.122H.375A.376.376 0 0 0 0 12.75v.875c0 .206.169.375.375.375h11.25a.376.376 0 0 0 .375-.375v-.875a.376.376 0 0 0-.375-.375Z" />\n    </svg>\n  </a>`,\n  decorators: [story => `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`]\n}',...LinkWithIcon.parameters?.docs?.source},description:{story:"Optional icon position on the left or the right, width and height should not be specified since they are set in the CSS, including the space between the icon and the text.",...LinkWithIcon.parameters?.docs?.description}}},LinkWithArrow.parameters={...LinkWithArrow.parameters,docs:{...LinkWithArrow.parameters?.docs,source:{originalSource:'{\n  render: () => `\n  <a href="#" class="link gds-link-arrow" aria-label="External link">\n    Link with arrow\n    <svg\n      viewBox="0 0 24 24"\n      fill="none"\n      stroke="currentColor"\n      stroke-width="2"\n      stroke-linecap="round"\n      stroke-linejoin="round"\n    >\n      <line x1="5" y1="12" x2="19" y2="12"></line>\n      <polyline points="12 5 19 12 12 19"></polyline>\n    </svg>\n  </a>`,\n  decorators: [story => `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`]\n}',...LinkWithArrow.parameters?.docs?.source},description:{story:"The animated link with arrow used new color as base which is the `dark-gray-1100` and same applies for the `visited` state which is `dark-gray-1000`.",...LinkWithArrow.parameters?.docs?.description}}},LinkAsButton.parameters={...LinkAsButton.parameters,docs:{...LinkAsButton.parameters?.docs,source:{originalSource:'{\n  render: () => `\n    <a href="#" class="button" style={{ marginBottom: \'16px\' }}>Link button</a>  \n    <a href="#" class="button primary" style={{ marginBottom: \'16px\' }}>Primary link button</a>  \n    <a href="#" class="button secondary" style={{ marginBottom: \'16px\' }}>Secondary link button</a>  \n    <a href="#" class="button ghost">Ghost link button</a>`,\n  decorators: [story => `<div style="display:flex;flex-direction: column;gap:1rem;">${story()}</div>`]\n}',...LinkAsButton.parameters?.docs?.source},description:{story:"Sometimes you want to use links but style them as buttons, just add the class `button` and optionally a variant like `primary` or `ghost` and voilà - now you've got a link which looks and behaves like a button!",...LinkAsButton.parameters?.docs?.description}}}}}]);