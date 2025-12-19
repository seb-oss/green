const n={title:"Components/Input",tags:["autodocs"],parameters:{componentIds:["component-input"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},enabled:{control:"boolean"},text:{control:"text"},formInfo:{control:"text"}}},o={render:t=>`
    <div class="form-group">
      <label for="inputInvalid">${t.text}</label>
      ${t.formInfo?'<span class="form-info">'+t.formInfo+"</span>":""}
      <input id="inputInvalid" type="text" ${t.validation?'class="'+t.validation+'"':""} ${t.disabled?"disabled":""} />
      <span class="form-info">${t.validation?t.validation:""}</span>
    </div>`,args:{text:"Input label",formInfo:"Lorem ipsum very long description of input and what should be entered",enabled:!0}},e=["Input"];export{o as Input,e as __namedExportsOrder,n as default};
