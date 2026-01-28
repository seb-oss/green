const e={title:"Components/Stepper",tags:["autodocs"],parameters:{componentIds:["component-stepper"]},argTypes:{validation:{control:"select",options:["","is-valid","is-invalid"]},disabled:{control:"boolean"},text:{control:"text"},formInfo:{control:"text"}}},o={render:t=>`
    <div class="form-group">
        <label for="stepperInput">${t.text}</label>
        ${t.formInfo?'<span class="form-info">'+t.formInfo+"</span>":""}
        <div class="group group-border group-stepper ${t.validation} ${t.disabled}">
            <button class="tertiary" ${t.attrEnabled}>-</button>
            <input id="stepperInput" type="number" placeholder="0" ${t.attrEnabled} />
            <button class="tertiary" ${t.attrEnabled}>+</button>
        </div>
        <span class="form-info">${t.validation?t.validation:"Neutral"}</span>
    </div>`,args:{text:"Stepper label",formInfo:"Lorem ipsum very long supporting text of what should be entered",enabled:!0}},n=["Stepper"];export{o as Stepper,n as __namedExportsOrder,e as default};
