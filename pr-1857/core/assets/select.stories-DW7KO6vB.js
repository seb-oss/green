import{g as f,G as y,h as _}from"./custom-element-scoping-b4lD3laR.js";import{T as b}from"./transitional-styles-6hf7tRoc.js";import{i as g}from"./lit-element-C_s9q329.js";import"./_commonjsHelpers-Cpj98o6Y.js";const v=g`
  @layer base, reset, transitional-styles;
  @layer base {
  }
`;var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,C=(n,t,a,r)=>{for(var e=r>1?void 0:r?P(t,a):t,o=n.length-1,c;o>=0;o--)(c=n[o])&&(e=(r?c(t,a,e):c(e))||e);return r&&e&&O(t,a,e),e};let l=class extends y{connectedCallback(){super.connectedCallback(),b.instance.apply(this,"gds-select")}render(){return _`<select>
      <option value="" disabled selected>Select...</option>
      <slot></slot>
    </select> `}};l.styles=[v];l=C([f("gds-select")],l);const G={title:"Components/Select",component:"gds-select",tags:["autodocs"]},D={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...D,name:"select"};var d,m,p,i,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'select'
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"TODO: Add documentation",...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.description}}};const T=["select"];export{T as __namedExportsOrder,G as default,s as select};
