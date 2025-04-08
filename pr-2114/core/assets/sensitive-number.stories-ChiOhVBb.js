import{x as h}from"./lit-element-Bx14lxc-.js";import{h as f,n as b,g}from"./custom-element-scoping-b4c89-hi.js";import{n as v}from"./when-BR7zwNJC.js";import{G as y}from"./blur.component-By-0qWsb.js";import{G as w,n as $,D}from"./formatted-number.stories-C2l-Hq3R.js";import{a as u}from"./argTableProps-CY9EIQke.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-CXGohUQ8.js";import"./query-p8xgzTDt.js";import"./text-BhQaTdoS.js";import"./text.component-B4D18gL7.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./div.component-DQzJWx6E.js";import"./card-VanqcJEE.js";import"./card.component-URb5HL5V.js";import"./container-Cwb2897u.js";import"./flex-DTBzRj2-.js";import"./flex.component-QD4FtwzU.js";import"./divider-D1LCDXE2.js";import"./custom-elements-DA1pzCtE.js";var _=Object.defineProperty,P=Object.getOwnPropertyDescriptor,d=(e,t,a,s)=>{for(var r=s>1?void 0:s?P(t,a):t,i=e.length-1,m;i>=0;i--)(m=e[i])&&(r=(s?m(t,a,r):m(r))||r);return s&&r&&_(t,a,r),r};let o=class extends w{constructor(){super(...arguments),this.hide=!1}get formattedValue(){return this.hide&&!this.currency?"0":this.hide?$[this.format](0,this.locale,this.currency):super.formattedValue}render(){return v(this.hide,()=>f`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};d([b({type:Boolean})],o.prototype,"hide",2);o=d([g("gds-sensitive-number",{dependsOn:[y]})],o);o.define();const R={title:"Components/Sensitive/Number",component:"gds-sensitive-number",tags:["autodocs"],argTypes:{...u("gds-formatted-number"),...u("gds-sensitive-number")},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitiv/number)

Coachmarks are contextual tips that focus on making the user
aware of a new feature, the benefits of an existing one or a moved feature within an interface.

The component is primarily a container that follows the targeted element.
The coachmark will be invisible and disabled if another element covered the targeted element or its simply out of view.
The coachmark will close and dispatch a CustomEvent of \`gds-ui-state\`

Note: the component can only view one coachmark at the time therefore the tooltip won't be
rendered in second storybook panel and testing the tooltip behaviour will be in the first panel only

@status beta`}}}},x={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...D.args,currency:"SEK",hide:!0}},n={...x,render:e=>h`<gds-sensitive-number
      .hide=${e.hide}
      .value=${e.value}
      .locale=${e.locale}
      .currency=${e.currency}
    ></gds-sensitive-number>`};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-number
      .hide=\${args.hide}
      .value=\${args.value}
      .locale=\${args.locale}
      .currency=\${args.currency}
    ></gds-sensitive-number>\`
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const U=["Default"];export{n as Default,U as __namedExportsOrder,R as default};
