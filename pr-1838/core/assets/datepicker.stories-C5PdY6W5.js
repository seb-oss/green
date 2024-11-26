import{x as i}from"./lit-element-C_s9q329.js";import"./datepicker-DtBCHMP1.js";import"./runtime-CMQcyTl6.js";import"./localized-decorator-B8fm5KIw.js";import"./custom-element-scoping-b4lD3laR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-C6DiESt7.js";import"./ref-D_ho-JAG.js";import"./when-BR7zwNJC.js";import"./tokens.style-Y0rrifyK.js";import"./transitional-styles-D3kSUer7.js";import"./watch-tFciLXSI.js";import"./attribute-converters-CdI0trPX.js";import"./button-D_NsDDjd.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./observe-light-dom-CmJPHUQ4.js";import"./dropdown-Ce3v3dug.js";import"./icon-BAGUC4Iy.js";import"./popover-BrIkCRfy.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small-CgIxxlLH.js";import"./backdrop-BGzK9qgd.js";import"./chevron-bottom-CTTxLLl8.js";import"./checkmark-D62oMl69.js";import"./menu-heading-DsDkZq7g.js";import"./calendar-CYuRsRbq.js";import"./calendar-qXEpmrDX.js";import"./chevron-right-BwEVIrUT.js";const ge={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

Date pickers simplify the task of selecting a date in a visual representation of a calendar.
The date picker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"]},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date"}},d={...e},a={...e,render:o=>i`
    <gds-datepicker label="Using slots" onchange="console.log(this.value)">
      <span slot="sub-label">
        A sub-label can be added as additional description
      </span>
      <span slot="message">
        Instructive message. Will turn red if there is a validation error
      </span>
    </gds-datepicker>
  `},s={...e,render:o=>i`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  `},t={...e,name:"Min and max dates",render:o=>i`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},r={...e,render:o=>i`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},n={...e,render:o=>i`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  `};var c,p,l;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(l=(p=d.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,b,h,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Using slots" onchange="console.log(this.value)">
      <span slot="sub-label">
        A sub-label can be added as additional description
      </span>
      <span slot="message">
        Instructive message. Will turn red if there is a validation error
      </span>
    </gds-datepicker>
  \`
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and has two slots for adding\nadditional information.\n\nThe `sub-label` slot sits between the label and the input, and the `message` slot sits below the\ninput. The `message` slot is used to display instructions and/or validation errors.\n\nWhen the value is changed by a user, a `change` event is fired.",...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var k,w,f,y,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var D,x,S,W,T;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(T=(W=t.parameters)==null?void 0:W.docs)==null?void 0:T.description}}};var U,P,z,M,A;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(z=(P=r.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(A=(M=r.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};var C,I,B,F,J;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(B=(I=n.parameters)==null?void 0:I.docs)==null?void 0:B.source},description:{story:"The date picker has two sizes: `small` and `medium`. The default size is `medium`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(J=(F=n.parameters)==null?void 0:F.docs)==null?void 0:J.description}}};const ke=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize"];export{d as Basic,r as Disabled,n as InputFieldSize,t as MinMaxDates,a as Usage,s as WeekNumbers,ke as __namedExportsOrder,ge as default};
