const a={title:"Components/Textarea",tags:["autodocs"],parameters:{componentIds:["component-input"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},label:{control:"text"},formInfo:{control:"text"}}},o={render:e=>`
    <div class="form-group">
      <label for="exampleTextarea">${e.label}</label>
      ${e.formInfo?'<span class="form-info">'+e.formInfo+"</span>":""}
      <textarea id="exampleTextarea" class="${e.validation}" ${e.disabled}></textarea>
      <span class="form-info">${e.validation?e.validation:"Neutral"}</span>
    </div>`,args:{label:"Textarea label",formInfo:"Lorem ipsum very long description of textarea and what should be entered"}},t=["Textarea"];export{o as Textarea,t as __namedExportsOrder,a as default};
