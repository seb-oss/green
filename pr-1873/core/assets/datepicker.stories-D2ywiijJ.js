import{x as a}from"./lit-element-C_s9q329.js";import"./datepicker-Dba-cNgO.js";import"./runtime-CMQcyTl6.js";import"./localized-decorator-iufJoRiP.js";import"./custom-element-scoping-b4lD3laR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./field-base-CFZmEFh8.js";import"./when-BR7zwNJC.js";import"./button-B9A_K7SP.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./static-_ukc2i0J.js";import"./tokens.style-B6Zq2CtY.js";import"./transitional-styles-Cqy2bL4h.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./triangle-exclamation-di0WtSeu.js";import"./icon-BAGUC4Iy.js";import"./card-XqiHdOAu.js";import"./style-expression-property-CYg4CGI6.js";import"./container-C9hIB2Az.js";import"./badge-B7pEuVzS.js";import"./flex-DnAdyWkx.js";import"./directive-helpers-C6DiESt7.js";import"./ref-D_ho-JAG.js";import"./attribute-converters-CdI0trPX.js";import"./dropdown-CaBrqJoZ.js";import"./menu-heading-D8KKPZuu.js";import"./checkmark-D62oMl69.js";import"./chevron-bottom-CTTxLLl8.js";import"./popover-CbbcoX27.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small-CgIxxlLH.js";import"./backdrop-BGzK9qgd.js";import"./calendar-DCq2z6_3.js";import"./calender-add-BZH2uut0.js";import"./chevron-right-BwEVIrUT.js";const Ce={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

Date pickers simplify the task of selecting a date in a visual representation of a calendar.
The date picker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"]},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date",supportingText:"Supporting text",innherHTML:`
      <span slot="extended-supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      `}},p={...e},t={...e,render:s=>a`
    <gds-datepicker label="Using slots" onchange="console.log(this.value)">
      <span slot="sub-label">
        A sub-label can be added as additional description
      </span>
      <span slot="message">
        Instructive message. Will turn red if there is a validation error
      </span>
    </gds-datepicker>
  `},r={...e,render:s=>a`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  `},n={...e,name:"Min and max dates",render:s=>a`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},i={...e,render:s=>a`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},d={...e,render:s=>a`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  `},c={...e,render:s=>a`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  `},o={...e,name:"Disabled",render:s=>a`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
      disabled
    ></gds-datepicker>
  `};var l,m,u;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(u=(m=p.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,g,h,k,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and has two slots for adding\nadditional information.\n\nThe `sub-label` slot sits between the label and the input, and the `message` slot sits below the\ninput. The `message` slot is used to display instructions and/or validation errors.\n\nWhen the value is changed by a user, a `change` event is fired.",...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};var v,f,y,D,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(x=(D=r.parameters)==null?void 0:D.docs)==null?void 0:x.description}}};var S,U,T,P,W;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(T=(U=n.parameters)==null?void 0:U.docs)==null?void 0:T.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(W=(P=n.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var I,M,z,A,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};var F,B,J,L,N;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(J=(B=d.parameters)==null?void 0:B.docs)==null?void 0:J.source},description:{story:"The date picker has two sizes: `small` and `medium`. The default size is `medium`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};var O,_,j;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  \`
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,E,G,H,K;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
      disabled
    ></gds-datepicker>
  \`
}`,...(G=(E=o.parameters)==null?void 0:E.docs)==null?void 0:G.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(K=(H=o.parameters)==null?void 0:H.docs)==null?void 0:K.description}}};const Fe=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize","Invalid","DisabledField"];export{p as Basic,i as Disabled,o as DisabledField,d as InputFieldSize,c as Invalid,n as MinMaxDates,t as Usage,r as WeekNumbers,Fe as __namedExportsOrder,Ce as default};
