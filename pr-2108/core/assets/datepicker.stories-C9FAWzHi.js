import{x as a}from"./lit-element-Bx14lxc-.js";import{a as $}from"./argTableProps-al9GZ1Fk.js";import"./datepicker-Cni-01NP.js";import"./custom-elements-gCglBj8B.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./field-base.component-u2-leZ5O.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./transitional-styles-Dj-EwcI7.js";import"./tokens.style-BScLRl5F.js";import"./watch-tFciLXSI.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./when-BR7zwNJC.js";import"./button.component-Z9yRxVMZ.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-BB4ZLY5n.js";import"./dropdown.component-DHqd9JKt.js";import"./icon-TXeUf8MR.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-header.component-CS8g-3iX.js";import"./badge.component-DR6UPN8j.js";import"./flex.component-d_gd050y.js";import"./div.component-C28DYOrM.js";import"./triangle-exclamation.component-BC2b4__3.js";import"./card.component-BfRmn0Qs.js";import"./option.styles-OvFRlCj3.js";import"./checkmark.component-CyUx_gWJ.js";import"./chevron-bottom.component-HDbW-OqF.js";import"./popover.component-y_i0MF4L.js";import"./cross-small.component-DGKi69Og.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DsbTAFAi.js";import"./calender-add.component-BLLrnMIY.js";import"./chevron-right.component-DJR0jIYA.js";const qe={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

Date pickers simplify the task of selecting a date in a visual representation of a calendar.
The date picker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"],argTypes:{...$("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date",supportingText:"Supporting text",innherHTML:`
      <span slot="extended-supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      `}},c={...e},t={...e,render:r=>a`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  `},s={...e,render:r=>a`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  `},i={...e,name:"Min and max dates",render:r=>a`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},n={...e,render:r=>a`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},d={...e,render:r=>a`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  `},m={...e,render:r=>a`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  `},o={...e,name:"Disabled",render:r=>a`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
      disabled
    ></gds-datepicker>
  `},p={...e,render:r=>a`
    <gds-datepicker
      label="A simplified datepicker"
      hide-clear
      hide-today
    ></gds-datepicker>
  `};var l,u,g;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,h,k,w,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  \`
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and\na `supporting-text` attribute for setting the supporting text below the label.\n\nWhen the value is changed by a user, a `change` event is fired.",...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var f,x,v,D,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var P,T,U,W,A;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(U=(T=i.parameters)==null?void 0:T.docs)==null?void 0:U.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(A=(W=i.parameters)==null?void 0:W.docs)==null?void 0:A.description}}};var M,z,I,F,C;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(C=(F=n.parameters)==null?void 0:F.docs)==null?void 0:C.description}}};var B,J,L,N,O;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(L=(J=d.parameters)==null?void 0:J.docs)==null?void 0:L.source},description:{story:"The date picker has two sizes: `small` and `medium`. The default size is `medium`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var _,j,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  \`
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var E,G,H,K,Q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var R,V,X,Y,Z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A simplified datepicker"
      hide-clear
      hide-today
    ></gds-datepicker>
  \`
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:"The clear and today button can be hidden by using the `hide-clear` and `hide-today` attribute.",...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const Ee=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize","Invalid","DisabledField","Simplified"];export{c as Basic,n as Disabled,o as DisabledField,d as InputFieldSize,m as Invalid,i as MinMaxDates,p as Simplified,t as Usage,s as WeekNumbers,Ee as __namedExportsOrder,qe as default};
