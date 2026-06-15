import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as a}from"./accordion-Brzx8n6N.js";const o=r=>e.jsx(a,{...r}),t={title:"Components/Accordion",component:a},n={render:o.bind({}),name:"Accordion",parameters:{componentIds:["component-accordion"]},args:{items:[{label:"First accordion heading",subLabel:"First accordion sublabel",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"In such a case, we can debounce the resize handling and thus the re-rendering. This will mean to throttle or wait between calls to our handleResize function. There are solid debounce implementations. Let's add a short and simple one to our example"}),e.jsx("a",{class:"gds-link",href:"#",children:"And this is a link"})]}),labelElementLevel:2,defaultOpen:!0},{label:"Second accordion heading",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"When adding an event listener, such as we are for the resize event, we should make sure to clean up after ourselves. In the example so far, we haven't, and that could cause our app problems later."}),e.jsx("a",{href:"#",children:"And this is a link"})]}),labelElementLevel:2},{label:"Third accordion heading",subLabel:"Third accordion sublabel",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is a paragraph in the thrid accordion."}),e.jsx("a",{href:"#",children:"This is the second link example"})]}),labelElementLevel:2}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Accordion',
  parameters: {
    componentIds: ['component-accordion']
  },
  args: {
    items: [{
      label: 'First accordion heading',
      subLabel: 'First accordion sublabel',
      content: <>
            <p>
              In such a case, we can debounce the resize handling and thus the
              re-rendering. This will mean to throttle or wait between calls to
              our handleResize function. There are solid debounce
              implementations. Let's add a short and simple one to our example
            </p>
            <a class="gds-link" href="#">
              And this is a link
            </a>
          </>,
      labelElementLevel: 2,
      defaultOpen: true
    }, {
      label: 'Second accordion heading',
      content: <>
            <p>
              When adding an event listener, such as we are for the resize
              event, we should make sure to clean up after ourselves. In the
              example so far, we haven't, and that could cause our app problems
              later.
            </p>
            <a href="#">And this is a link</a>
          </>,
      labelElementLevel: 2
    }, {
      label: 'Third accordion heading',
      subLabel: 'Third accordion sublabel',
      content: <>
            <p>This is a paragraph in the thrid accordion.</p>
            <a href="#">This is the second link example</a>
          </>,
      labelElementLevel: 2
    }]
  }
}`,...n.parameters?.docs?.source}}};const s=["Default"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:s,default:t},Symbol.toStringTag,{value:"Module"}));export{c as A,n as D};
