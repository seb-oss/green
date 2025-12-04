import{x as a}from"./iframe-Cv5Y80HS.js";import{a as le}from"./argTableProps-DLoS4gKv.js";import"./datepicker-5_hPTTQK.js";import"./preload-helper-Dp1pzeXC.js";import"./query-async-DXWBLg5W.js";import"./ref-OiiUls6i.js";import"./dropdown.component-DUAZbGgl.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-COFMsqRM.js";import"./form-control-header.component-CckDzel2.js";import"./badge.component-DQ1gYmJ_.js";import"./flex.component-D3qOof_c.js";import"./triangle-exclamation.component-BgcKdESn.js";import"./icon.component-zg9hLbbf.js";import"./card.component-BfYeWanc.js";import"./unwrap-slots-DdKEnr5-.js";import"./checkmark.component-BozHGBcO.js";import"./rbcb-toggle.template-DuzKNPTA.js";import"./chevron-bottom.component-zbUnPhoX.js";import"./cross-small.component-CvssPlAz.js";import"./popover.component-S9KiRBW6.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DNqwpy9d.js";import"./calender-add.component-BZqeEmyo.js";import"./chevron-left.component-BIAd88G3.js";import"./chevron-right.component-B_mfWhX4.js";const Ne={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
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
    <gds-datepicker label="Week numbers" show-week-numbers></gds-datepicker>
  `},n={...e,name:"Min and max dates",render:r=>a`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},d={...e,render:r=>a`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},i={...e,render:r=>a`
    <gds-datepicker
      label="A small input"
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
  `},c={...e,render:r=>a`
    <gds-datepicker label="Clearable on" clearable></gds-datepicker>
  `},p={...e,render:r=>a`
    <gds-datepicker label="Today hidden" hide-today-button></gds-datepicker>
  `},l={...e,render:r=>a`
    <gds-datepicker
      label="Label"
      supporting-text="Supporting text"
      clearable
      disabled-weekends
      show-week-numbers
    ></gds-datepicker>
  `};var g,b,h;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(h=(b=m.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,w,y,x,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  \`
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and\na `supporting-text` attribute for setting the supporting text below the label.\n\nWhen the value is changed by a user, a `change` event is fired.",...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var D,v,S,T,P;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Week numbers" show-week-numbers></gds-datepicker>
  \`
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(P=(T=s.parameters)==null?void 0:T.docs)==null?void 0:P.description}}};var U,C,W,F,M;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(W=(C=n.parameters)==null?void 0:C.docs)==null?void 0:W.source},description:{story:"Setting `min` and `max` date you can choose.",...(M=(F=n.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};var z,A,I,L,B;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(B=(L=d.parameters)==null?void 0:L.docs)==null?void 0:B.description}}};var J,N,O,_,j;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small input"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source},description:{story:"The date picker has two sizes: `small` and `large`. The default size is `large`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(j=(_=i.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};var q,E,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(V=(R=o.parameters)==null?void 0:R.docs)==null?void 0:V.description}}};var X,Y,Z,$,ee;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Clearable on" clearable></gds-datepicker>
  \`
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"The selected date can be clearable by using the 'clearable` attribute (was default on before).",...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var ae,re,te,se,ne;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Today hidden" hide-today-button></gds-datepicker>
  \`
}`,...(te=(re=p.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:"The today button can be hidden by using the `hide-today-button` attribute.",...(ne=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var de,ie,oe,ce,pe;l.parameters={...l.parameters,docs:{...(de=l.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Label"
      supporting-text="Supporting text"
      clearable
      disabled-weekends
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...(oe=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:"An example with things turned on.",...(pe=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};const Oe=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize","Invalid","DisabledField","Clearable","Simplified","Full"];export{m as Basic,c as Clearable,d as Disabled,o as DisabledField,l as Full,i as InputFieldSize,u as Invalid,n as MinMaxDates,p as Simplified,t as Usage,s as WeekNumbers,Oe as __namedExportsOrder,Ne as default};
