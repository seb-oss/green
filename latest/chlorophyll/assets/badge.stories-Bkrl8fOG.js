const e={title:"Components/Badge",tags:["autodocs"],parameters:{componentIds:["component-badge"]},argTypes:{variant:{control:"select",options:["","info","success","warning","danger","light","dark"]},dismissible:{control:"boolean"},text:{control:"text"}}},t={render:s=>`
    <span class="badge ${s.variant}">
      <strong>${s.text}</strong>
      ${s.dismissible?`<button class="close">
          <span class="sr-only">Remove</span>
          <i></i>
        </button>`:""}
    </span>`,args:{text:"Badge",dismissible:!1}},o=["Badge"];export{t as Badge,o as __namedExportsOrder,e as default};
