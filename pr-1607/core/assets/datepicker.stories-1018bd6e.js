import{k as i}from"./lit-element-1d72f0ce.js";import"./datepicker-30699943.js";import"./gds-element-86064462.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./when-748fcf30.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./class-map-f04c1558.js";import"./runtime-c06dc943.js";import"./button-7f889fcf.js";import"./static-c0094392.js";import"./if-defined-5f576255.js";import"./constrain-slots-08d8606c.js";import"./transitional-styles-8ea9588a.js";import"./tokens.style-01187a75.js";import"./watch-c4961afe.js";import"./attribute-converters-ae269b4b.js";import"./popover-dd11fc1b.js";import"./floating-ui.dom-7bad3c97.js";import"./cross-small-7e719cb3.js";import"./icon-a640baec.js";import"./backdrop-0315f321.js";import"./calendar-ab2f5821.js";import"./dropdown-bfce914a.js";import"./chevron-bottom-2d87aad2.js";import"./checkmark-da617071.js";import"./ref-f16d4147.js";import"./menu-heading-59143ba4.js";import"./calendar-cdd5732a.js";import"./chevron-right-f371f6a8.js";const ke={title:"Docs/Components/Form/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
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
}`,...(z=(P=r.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(A=(M=r.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};var C,I,F,B,J;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(F=(I=n.parameters)==null?void 0:I.docs)==null?void 0:F.source},description:{story:"The date picker has two sizes: `small` and `medium`. The default size is `medium`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(J=(B=n.parameters)==null?void 0:B.docs)==null?void 0:J.description}}};const we=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize"];export{d as Basic,r as Disabled,n as InputFieldSize,t as MinMaxDates,a as Usage,s as WeekNumbers,we as __namedExportsOrder,ke as default};