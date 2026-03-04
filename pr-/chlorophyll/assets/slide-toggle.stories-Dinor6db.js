const l={title:"Components/Slide Toggle",tags:["autodocs"],parameters:{componentIds:["component-slidetoggle"]},argTypes:{label:{control:"text"},checked:{control:"boolean"}}},t={render:e=>`
  <div class="d-flex align-items-center">
    <span id="slide-toggle-label-1">${e.label}</span>
    <button role="switch" aria-checked="${e.checked}" aria-labelledby="slide-toggle-label-1"></button>
  </div>`,args:{label:"Toggle me",checked:!1}},a={render:e=>`
  <div class="d-flex align-items-center">
  <button role="switch" aria-checked="${e.checked}" aria-labelledby="slide-toggle-label-1"></button>
  <span id="slide-toggle-label-1">${e.label}</span>
  </div>`,args:{label:"Toggle me",checked:!1}},o=["SlideToggle","LabelRight"];export{a as LabelRight,t as SlideToggle,o as __namedExportsOrder,l as default};
