import{x as a}from"./lit-element-Bx14lxc-.js";import{a as ne}from"./argTableProps-B6bdKpNz.js";import"./datepicker-CwqUxvaX.js";import"./custom-elements-C16zDm4a.js";import"./datepicker.component-BJg8l745.js";import"./runtime-CNluP0A8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./when-BR7zwNJC.js";import"./button.component-CP7I7SJN.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./tokens.style-Khpz0lp_.js";import"./transitional-styles-BiORlPgX.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./watch-tFciLXSI.js";import"./dropdown.component-DmnwdBza.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-DbYCwU_E.js";import"./form-control-header.component-C4etZZao.js";import"./badge.component-D4FxP9Pi.js";import"./flex.component-C1NAGQHk.js";import"./div.component-BCGMV-IS.js";import"./triangle-exclamation.component-DxMbHztY.js";import"./icon-BPdtWFmz.js";import"./card.component-UD91Xhmi.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-BAJhRoLg.js";import"./chevron-bottom.component-B8Nj_Ub-.js";import"./popover.component-2Azy5OjP.js";import"./cross-small.component-CF8Pyq63.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CkSn8wOc.js";import"./calender-add.component-CXOtcCBm.js";import"./chevron-right.component-Be7TENGg.js";const Ve={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

The datepicker allows users to select a date.

The datepicker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"],argTypes:{...ne("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date",supportingText:"Supporting text",innherHTML:`
      <span slot="extended-supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      `}},l={...e},t={...e,render:r=>a`
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
  `},n={...e,name:"Min and max dates",render:r=>a`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},i={...e,render:r=>a`
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
    <gds-datepicker label="A clearable datepicker" clearable></gds-datepicker>
  `},c={...e,render:r=>a`
    <gds-datepicker
      label="A no today buttom datepicker"
      hide-today-button
    ></gds-datepicker>
  `};var u,b,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,k,w,y,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  \`
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and\na `supporting-text` attribute for setting the supporting text below the label.\n\nWhen the value is changed by a user, a `change` event is fired.",...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var x,D,v,S,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...(v=(D=s.parameters)==null?void 0:D.docs)==null?void 0:v.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var P,U,A,W,M;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(A=(U=n.parameters)==null?void 0:U.docs)==null?void 0:A.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(M=(W=n.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};var z,C,I,F,B;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var J,L,N,O,_;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source},description:{story:"The date picker has two sizes: `small` and `medium`. The default size is `medium`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.description}}};var j,q,E;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  \`
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var G,H,K,Q,R;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(H=o.parameters)==null?void 0:H.docs)==null?void 0:K.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(R=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var V,X,Y,Z,$;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="A clearable datepicker" clearable></gds-datepicker>
  \`
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"The selected date can be clearable by using the 'clearable` attribute (was default on before).",...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ae,re,te,se;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A no today buttom datepicker"
      hide-today-button
    ></gds-datepicker>
  \`
}`,...(re=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:"The today button can be hidden by using the `hide-today-button` attribute.",...(se=(te=c.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};const Xe=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize","Invalid","DisabledField","Clearable","Simplified"];export{l as Basic,p as Clearable,i as Disabled,o as DisabledField,d as InputFieldSize,m as Invalid,n as MinMaxDates,c as Simplified,t as Usage,s as WeekNumbers,Xe as __namedExportsOrder,Ve as default};
