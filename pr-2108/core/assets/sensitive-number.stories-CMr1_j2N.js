import{x as d}from"./lit-element-Bx14lxc-.js";import{a as h}from"./argTableProps-DZ--ND6n.js";import{G as f,n as b,D as g}from"./formatted-number.stories-DGtuytvW.js";import{h as v,n as y,g as w}from"./custom-element-scoping-b4c89-hi.js";import{n as $}from"./when-BR7zwNJC.js";import{G as D}from"./blur.component-By-0qWsb.js";import"./formatted-account-DO1Wn321.js";import"./formatted-date-D0TOqk3Y.js";import"./custom-elements-CFdwLepk.js";import"./formatted-text-CXGohUQ8.js";import"./query-p8xgzTDt.js";import"./text-BhQaTdoS.js";import"./text.component-B4D18gL7.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./div.component-DQzJWx6E.js";import"./flex-DTBzRj2-.js";import"./flex.component-QD4FtwzU.js";import"./_commonjsHelpers-Cpj98o6Y.js";var _=Object.defineProperty,P=Object.getOwnPropertyDescriptor,c=(e,r,a,s)=>{for(var t=s>1?void 0:s?P(r,a):r,i=e.length-1,m;i>=0;i--)(m=e[i])&&(t=(s?m(r,a,t):m(t))||t);return s&&t&&_(r,a,t),t};let o=class extends f{constructor(){super(...arguments),this.hide=!1}get formattedValue(){return this.hide?b[this.format](0,this.locale,this.currency):super.formattedValue}render(){return $(this.hide,()=>v`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}updated(e){super.updated(e),this.element&&(this.element.ariaLabel=super.formattedValue)}};c([y({type:Boolean})],o.prototype,"hide",2);o=c([w("gds-sensitive-number",{dependsOn:[D]})],o);o.define();const M={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...h("gds-sensitive-number"),currency:{type:"string"}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitiv/number)

Coachmarks are contextual tips that focus on making the user
aware of a new feature, the benefits of an existing one or a moved feature within an interface.

The component is primarily a container that follows the targeted element.
The coachmark will be invisible and disabled if another element covered the targeted element or its simply out of view.
The coachmark will close and dispatch a CustomEvent of \`gds-ui-state\`

Note: the component can only view one coachmark at the time therefore the tooltip won't be
rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only

@status beta`}}}},x={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...g.args,hide:!0}},n={...x,render:e=>d`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
    ></gds-sensitive-number>`};var u,l,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
    ></gds-sensitive-number>\`
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const Q=["Default"];export{n as Default,Q as __namedExportsOrder,M as default};
