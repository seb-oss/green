import{x as a}from"./lit-element-Bx14lxc-.js";import{a as me}from"./argTableProps-DiezJtHc.js";import"./yearpicker-BHcQzbe0.js";import"./popover-BhT9Rd4Q.js";import"./backdrop-no-Dw6HI.js";import"./button-Bm284tJa.js";import"./calendar-CtXkqo6G.js";import"./chevron-left-BYTEWGzA.js";import"./chevron-right-_dHDiyto.js";import"./flex---FK__lW.js";import"./custom-elements-CG6FqC8J.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./gds-element-DTROifYq.js";import"./gridpicker.styles-DaXVpxxi.js";import"./tokens.style-BS_h03Rl.js";import"./transitional-styles-D2m6PuZd.js";import"./watch-tFciLXSI.js";import"./attribute-converters-CdI0trPX.js";import"./popover.component-C7ifnrUG.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-dzuPrqzv.js";import"./icon-BDarXmWU.js";import"./unsafe-html-CYO4avEf.js";import"./declarative-layout-mixins-XrCARJjW.js";import"./button.component-CpGiPPR4.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./calendar.component-CovVAr7W.js";import"./chevron-right.component-DPxyyuvR.js";import"./flex.component-CK9zIHJP.js";import"./div.component-DevXYBKS.js";var g=Object.freeze,le=Object.defineProperty,de=(e,ge)=>g(le(e,"raw",{value:g(e.slice())})),y,u;const We={title:"Components/Yearpicker",component:"gds-yearpicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/yearpicker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...me("gds-yearpicker")}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},l={...r,args:{label:"Yearpicker"}},s={...r,name:"No current month",render:e=>a` <gds-yearpicker no-current-year></gds-yearpicker> `},t={...r,render:e=>a` <gds-yearpicker size="small"></gds-yearpicker> `},o={...r,name:"Min and max",render:e=>a`
    <gds-yearpicker min="2023-01-01" max="2032-01-01"></gds-yearpicker>
  `},n={...r,render:e=>a`
    <gds-yearpicker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-yearpicker>
  `},c={...r,render:e=>a`
    <gds-yearpicker columns="4" rows="3"></gds-yearpicker>
  `},i={...r,render:e=>a`
    <gds-yearpicker
      min="1900-01-01"
      max="${new Date().toISOString().split("T")[0]}"
    ></gds-yearpicker>
  `},p={...r,render:e=>a(y||(y=de([`
    <gds-popover id="pop">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <div style="padding: 1rem 0 0 1.5rem">Choose a year</div>
      <gds-yearpicker id="yearp"> </gds-yearpicker>
    </gds-popover>
    <script>
      var yearp = document.getElementById('yearp')
      function onYearChange() {
        const selectedDate = yearp.value
        document.getElementById('selected-year').innerText =
          selectedDate.getFullYear()
        document.getElementById('pop').open = false
      }
      yearp.addEventListener('change', onYearChange)
    <\/script>
  `])))},d={...r,render:e=>a`
    <gds-yearpicker min="1950-01-01" max="2100-01-01" controls="always">
    </gds-yearpicker>
  `},m={...r,render:e=>a(u||(u=de([`
    <gds-popover id="popchange">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year2">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <gds-yearpicker
        id="yearp2"
        min="1950-01-01"
        max="2100-01-01"
        controls="ifneeded"
      >
      </gds-yearpicker>
    </gds-popover>
    <script>
      var yearp2 = document.getElementById('yearp2')
      function onYearChange2() {
        document.getElementById('selected-year2').innerText =
          yearp2.value.getFullYear()
        document.getElementById('popchange').open = false
      }
      yearp2.addEventListener('change', onYearChange2)
    <\/script>
  `])))};var h,k,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Yearpicker'
  }
}`,...(f=(k=l.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var v,x,b,C,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No current month',
  render: args => html\` <gds-yearpicker no-current-year></gds-yearpicker> \`
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:"Use the `no-current-year` attribute so the month right\nnow does not have a outer ring around it.",...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var D,Y,P,S,w;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\` <gds-yearpicker size="small"></gds-yearpicker> \`
}`,...(P=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:P.source},description:{story:"Use the `small` attribute to use a smaller and condenced styling.",...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var B,I,T,_,M;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max',
  render: args => html\`
    <gds-yearpicker min="2023-01-01" max="2032-01-01"></gds-yearpicker>
  \`
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source},description:{story:"Use `min` and `max` attributes to limit the months you can choose from.\nThe rest is greyed out. Note that by default it uses from the current year -10\nto current year +10 years.",...(M=(_=o.parameters)==null?void 0:_.docs)==null?void 0:M.description}}};var L,U,F,N,O;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-yearpicker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-yearpicker>
  \`
}`,...(F=(U=n.parameters)==null?void 0:U.docs)==null?void 0:F.source},description:{story:"Use `hide-extraneous-years` in combination with `min` and `max` attributes\nto to fully hide the non-selectable years.",...(O=(N=n.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var z,j,A,H,$;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-yearpicker columns="4" rows="3"></gds-yearpicker>
  \`
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source},description:{story:"Use `columns` and `rows` to override the default 5x5 cell table.",...($=(H=c.parameters)==null?void 0:H.docs)==null?void 0:$.description}}};var K,q,G,J,Q;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-yearpicker
      min="1900-01-01"
      max="\${new Date().toISOString().split('T')[0]}"
    ></gds-yearpicker>
  \`
}`,...(G=(q=i.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Example of choosing a birth year.",...(Q=(J=i.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var R,V,W,X,Z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-popover id="pop">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <div style="padding: 1rem 0 0 1.5rem">Choose a year</div>
      <gds-yearpicker id="yearp"> </gds-yearpicker>
    </gds-popover>
    <script>
      var yearp = document.getElementById('yearp')
      function onYearChange() {
        const selectedDate = yearp.value
        document.getElementById('selected-year').innerText =
          selectedDate.getFullYear()
        document.getElementById('pop').open = false
      }
      yearp.addEventListener('change', onYearChange)
    <\/script>
  \`
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"Example of a button that opens up the yearpicker.",...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,re,ae,se,te;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-yearpicker min="1950-01-01" max="2100-01-01" controls="always">
    </gds-yearpicker>
  \`
}`,...(ae=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:"Use `change-years-controls` to show controls for selecting previous and next years.",...(te=(se=d.parameters)==null?void 0:se.docs)==null?void 0:te.description}}};var oe,ne,ce,ie,pe;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-popover id="popchange">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year2">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <gds-yearpicker
        id="yearp2"
        min="1950-01-01"
        max="2100-01-01"
        controls="ifneeded"
      >
      </gds-yearpicker>
    </gds-popover>
    <script>
      var yearp2 = document.getElementById('yearp2')
      function onYearChange2() {
        document.getElementById('selected-year2').innerText =
          yearp2.value.getFullYear()
        document.getElementById('popchange').open = false
      }
      yearp2.addEventListener('change', onYearChange2)
    <\/script>
  \`
}`,...(ce=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ce.source},description:{story:"Example of a button that opens up the yearpicker.",...(pe=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:pe.description}}};const Xe=["Default","NoCurrentMonth","Small","MinAndMax","Hide","LessCells","BirthYear","Popover","ChangeYear","PopoverChange"];export{i as BirthYear,d as ChangeYear,l as Default,n as Hide,c as LessCells,o as MinAndMax,s as NoCurrentMonth,p as Popover,m as PopoverChange,t as Small,Xe as __namedExportsOrder,We as default};
