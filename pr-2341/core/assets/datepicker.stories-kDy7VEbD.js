import{x as a}from"./lit-element-Bx14lxc-.js";import{a as le}from"./argTableProps-BMKzG8B0.js";import"./datepicker--p8IrLq9.js";import"./custom-elements-ARe_Ayds.js";import"./datepicker.component-BIbi90Eq.js";import"./runtime-CNluP0A8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./when-BR7zwNJC.js";import"./button.component-B89ZvrSV.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./tokens.style-Bfj-148u.js";import"./transitional-styles-Be9e-Il_.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DHam8wVT.js";import"./watch-tFciLXSI.js";import"./dropdown.component-D_ByRN5P.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-al3WWrdw.js";import"./form-control-header.component-BP9NuxsR.js";import"./badge.component-Dle24o4i.js";import"./flex.component-C2WvVTnp.js";import"./div.component-BeQ16hT1.js";import"./triangle-exclamation.component-CEo389zf.js";import"./icon-CFIW748J.js";import"./card.component-BD3SJk3O.js";import"./unwrap-slots-L-kB66To.js";import"./checkmark.component-ChE7koGo.js";import"./rbcb-toggle.template-Cq50h8O1.js";import"./chevron-bottom.component-DN5XA5hc.js";import"./popover.component-C_taiQpZ.js";import"./cross-small.component-Bs9N37Jb.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CWB7Vve2.js";import"./calender-add.component-CslBRhin.js";import"./chevron-right.component-ChTxT53E.js";const ra={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

The datepicker allows users to select a date.

The datepicker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"],argTypes:{...le("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date",supportingText:"Supporting text",innherHTML:`
      <span slot="extended-supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      `}},m={...e},t={...e,render:r=>a`
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
  `},u={...e,render:r=>a`
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
  `},l={...e,render:r=>a`
    <gds-datepicker
      label="A smaller calendar popover"
      calendarSize="small"
    ></gds-datepicker>
  `};var b,g,h;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,w,y,f,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  \`
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and\na `supporting-text` attribute for setting the supporting text below the label.\n\nWhen the value is changed by a user, a `change` event is fired.",...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var v,D,S,P,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...(S=(D=s.parameters)==null?void 0:D.docs)==null?void 0:S.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(T=(P=s.parameters)==null?void 0:P.docs)==null?void 0:T.description}}};var A,U,z,W,M;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(z=(U=n.parameters)==null?void 0:U.docs)==null?void 0:z.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(M=(W=n.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};var C,I,F,B,J;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(F=(I=i.parameters)==null?void 0:I.docs)==null?void 0:F.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(J=(B=i.parameters)==null?void 0:B.docs)==null?void 0:J.description}}};var L,N,O,_,j;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source},description:{story:"The date picker has two sizes: `small` and `large`. The default size is `large`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(j=(_=d.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};var q,E,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  \`
}`,...(G=(E=u.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,K,Q,R,V;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(V=(R=o.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var X,Y,Z,$,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="A clearable datepicker" clearable></gds-datepicker>
  \`
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"The selected date can be clearable by using the 'clearable` attribute (was default on before).",...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var ae,re,te,se,ne;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A no today buttom datepicker"
      hide-today-button
    ></gds-datepicker>
  \`
}`,...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:"The today button can be hidden by using the `hide-today-button` attribute.",...(ne=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var ie,de,oe,pe,ce;l.parameters={...l.parameters,docs:{...(ie=l.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A smaller calendar popover"
      calendarSize="small"
    ></gds-datepicker>
  \`
}`,...(oe=(de=l.parameters)==null?void 0:de.docs)==null?void 0:oe.source},description:{story:'Use `calendarSize="small"` attribute for a smaller popover version.',...(ce=(pe=l.parameters)==null?void 0:pe.docs)==null?void 0:ce.description}}};const ta=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize","Invalid","DisabledField","Clearable","Simplified","Small"];export{m as Basic,p as Clearable,i as Disabled,o as DisabledField,d as InputFieldSize,u as Invalid,n as MinMaxDates,c as Simplified,l as Small,t as Usage,s as WeekNumbers,ta as __namedExportsOrder,ra as default};
