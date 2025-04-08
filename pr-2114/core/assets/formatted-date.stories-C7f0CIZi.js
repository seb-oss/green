import{n as l,g as v}from"./custom-element-scoping-b4c89-hi.js";import{G as x}from"./formatted-text-CXGohUQ8.js";import"./card-VanqcJEE.js";import"./container-Cwb2897u.js";import"./flex-DTBzRj2-.js";import"./divider-D1LCDXE2.js";import{x as g}from"./lit-element-Bx14lxc-.js";import{a as y}from"./argTableProps-CY9EIQke.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./text-BhQaTdoS.js";import"./text.component-B4D18gL7.js";import"./static-B8S6DEnV.js";import"./tokens.style-C9bLefPj.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./div.component-DQzJWx6E.js";import"./card.component-URb5HL5V.js";import"./flex.component-QD4FtwzU.js";import"./custom-elements-DA1pzCtE.js";const a=e=>typeof e=="string"?new Date(e):e,f={dateOnlyNumbers:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"short"}).format(a(e)),dateLong:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"long"}).format(a(e)),dateLongWithWeekday:(e,t)=>new Intl.DateTimeFormat(t,{dateStyle:"full"}).format(a(e)),dateShort:(e,t)=>{const r=new Intl.DateTimeFormat(t,{dateStyle:"medium"});return(t==null?void 0:t.toLowerCase())==="sv-se"?r.format(a(e)).replace(".",""):r.format(a(e))},dateShortWithWeekday:(e,t)=>{const r=new Intl.DateTimeFormat(t,{weekday:"short",year:"numeric",month:"short",day:"numeric"}).format(a(e));return(t==null?void 0:t.toLowerCase())==="sv-se"?r.replace(".",""):(t==null?void 0:t.toLowerCase())==="en-gb"?r.replace(",",""):r},timeShort:(e,t)=>new Intl.DateTimeFormat(t,{timeStyle:"short"}).format(a(e)),timeLong:(e,t)=>new Intl.DateTimeFormat(t,{timeStyle:"medium"}).format(a(e))};var w=Object.defineProperty,D=Object.getOwnPropertyDescriptor,d=(e,t,r,n)=>{for(var o=n>1?void 0:n?D(t,r):t,i=e.length-1,p;i>=0;i--)(p=e[i])&&(o=(n?p(t,r,o):p(o))||o);return n&&o&&w(t,r,o),o};let s=class extends x{get formattedValue(){var e,t;return this.format&&this.format in f?f[this.format](this.value??((e=this.element)==null?void 0:e.textContent)??void 0,this.locale):((t=this.value)==null?void 0:t.toString())??""}firstUpdated(e){super.firstUpdated(e),!this.value&&this.element&&(this.value=this.element.textContent??void 0)}};d([l({attribute:!1})],s.prototype,"value",2);d([l({type:String})],s.prototype,"format",2);d([l({type:String})],s.prototype,"locale",2);s=d([v("gds-formatted-date")],s);s.define();const q={title:"Components/Formatted Text/Date and time",component:"gds-formatted-date",tags:["autodocs"],argTypes:{...y("gds-formatted-date")},parameters:{docs:{description:{component:"`gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.\n\nStyle expression properties apply to the outer element unless otherwise specified.\n\n@beta"}}}},F={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{locale:"sv-SE",value:new Date(2025,1,25,14,17,30)}},S=Object.keys(f).map(e=>{const t=e.replace(/([a-z])([A-Z])/g,"$1 $2");return{name:t.charAt(0).toUpperCase()+t.slice(1),value:e}}),m={...F,name:"Formats",render:e=>g`<gds-flex flex-direction="column" gap="m">
      ${S.map(t=>g`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${t.name}:</gds-text>
              <gds-formatted-date
                .value=${e.value}
                .locale=${e.locale}
                .format=${t.value}
              ></gds-formatted-date>
            </gds-flex>

            <gds-divider></gds-divider>`)}
    </gds-flex>`};var u,c,h;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Formats',
  render: args => html\`<gds-flex flex-direction="column" gap="m">
      \${formats.map(format => html\`<gds-flex gap="l" justify-content="space-between">
              <gds-text>\${format.name}:</gds-text>
              <gds-formatted-date
                .value=\${args.value}
                .locale=\${args.locale}
                .format=\${format.value}
              ></gds-formatted-date>
            </gds-flex>

            <gds-divider></gds-divider>\`)}
    </gds-flex>\`
}`,...(h=(c=m.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const B=["Formats"];export{m as Formats,B as __namedExportsOrder,q as default};
