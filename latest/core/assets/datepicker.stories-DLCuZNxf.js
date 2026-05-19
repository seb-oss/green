import{b as a}from"./iframe-BfjVQBhS.js";import{a as ke}from"./argTableProps-Qs7z-sFD.js";import"./datepicker-CG6RXbG8.js";import"./preload-helper-Dp1pzeXC.js";import"./datepicker.component-B8zonOlM.js";import"./localized-decorator-BcwMFhzh.js";import"./query-async-DoOeR5E9.js";import"./ref-BddKMkQt.js";import"./dropdown.component-DtaaeMzu.js";import"./icon.component-3GLbOB5p.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./form-control-host.style-BU-hyWGr.js";import"./form-control-header.component-CLuwxSq3.js";import"./badge.component-CR-q8Pvq.js";import"./flex.component-C3_-0YKv.js";import"./triangle-exclamation.component-wXhuPvu0.js";import"./card.component-S9m9p97C.js";import"./unwrap-slots-BmZuA9MO.js";import"./checkmark.component-CWbIvAVU.js";import"./rbcb-toggle.template-DMyWnMmw.js";import"./chevron-bottom.component-BvRY5pS_.js";import"./cross-small.component-LD7gsb2L.js";import"./popover.component-D5XlO4V2.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cy1K8UKb.js";import"./calender-add.component-BNKXBR3V.js";import"./chevron-left.component-B7yLvhmg.js";import"./chevron-right.component-BHf1gS4C.js";const He={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

The datepicker allows users to select a date.

The datepicker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"],argTypes:{...ke("gds-datepicker")}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date",supportingText:"Supporting text",innherHTML:`
      <span slot="extended-supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      `}},u={...e},t={...e,render:r=>a`
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
  `},i={...e,render:r=>a`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},d={...e,render:r=>a`
    <gds-datepicker
      label="A small input"
      hide-label
      size="small"
    ></gds-datepicker>
  `},g={...e,render:r=>a`
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
  `},l={...e,render:r=>a`
    <gds-datepicker label="Today hidden" hide-today-button></gds-datepicker>
  `},p={...e,render:r=>a`
    <gds-datepicker
      label="Label"
      supporting-text="Supporting text"
      clearable
      disabled-weekends
      show-week-numbers
    ></gds-datepicker>
  `},m={...e,name:"ARIA Forwarding",render:()=>a`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="datepicker-description">
        Select the date the transaction was made
      </div>
      <gds-datepicker
        label="Transaction date"
        gds-aria-describedby="datepicker-description"
      ></gds-datepicker>
    </gds-flex>
  `};var b,h,k;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(k=(h=u.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var w,y,f,x,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  \`
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and\na `supporting-text` attribute for setting the supporting text below the label.\n\nWhen the value is changed by a user, a `change` event is fired.",...(D=(x=t.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};var v,S,T,A,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Week numbers" show-week-numbers></gds-datepicker>
  \`
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(P=(A=s.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};var I,F,M,U,C;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(M=(F=n.parameters)==null?void 0:F.docs)==null?void 0:M.source},description:{story:"Setting `min` and `max` date you can choose.",...(C=(U=n.parameters)==null?void 0:U.docs)==null?void 0:C.description}}};var W,z,L,O,R;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(L=(z=i.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var B,J,N,_,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small input"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(N=(J=d.parameters)==null?void 0:J.docs)==null?void 0:N.source},description:{story:"The date picker has two sizes: `small` and `large`. The default size is `large`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(j=(_=d.parameters)==null?void 0:_.docs)==null?void 0:j.description}}};var q,E,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  \`
}`,...(G=(E=g.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,K,Q,V,X;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(X=(V=o.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};var Y,Z,$,ee,ae;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Clearable on" clearable></gds-datepicker>
  \`
}`,...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"The selected date can be clearable by using the 'clearable` attribute (was default on before).",...(ae=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var re,te,se,ne,ie;l.parameters={...l.parameters,docs:{...(re=l.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Today hidden" hide-today-button></gds-datepicker>
  \`
}`,...(se=(te=l.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"The today button can be hidden by using the `hide-today-button` attribute.",...(ie=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var de,oe,ce,le,pe;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ce.source},description:{story:"An example with things turned on.",...(pe=(le=p.parameters)==null?void 0:le.docs)==null?void 0:pe.description}}};var me,ue,ge,be,he;m.parameters={...m.parameters,docs:{...(me=m.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'ARIA Forwarding',
  render: () => html\`
    <gds-flex flex-direction="column" gap="s" width="320px">
      <div id="datepicker-description">
        Select the date the transaction was made
      </div>
      <gds-datepicker
        label="Transaction date"
        gds-aria-describedby="datepicker-description"
      ></gds-datepicker>
    </gds-flex>
  \`
}`,...(ge=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:ge.source},description:{story:`In some cases it may be necessary to label or describe the datepicker using elements
outside of the component. For those cases, you can use \`gds-aria-*\` attributes
to forward ARIA attributes to the internal spinner elements. This works for
regular text attributes, and for ID association attributes. ID association is
handled internally via the ARIAMixins API, which allows DOM reference association
across shadow DOM boundaries.

The forwarding applies to all date-part spinners (day, month, year) simultaneously.

It is also possible to use regular \`aria-*\` attributes, but in that case it will
also apply to the host element (gds-datepicker), and not only the inner spinners.
Prefer \`gds-aria-*\` attributes over regular \`aria-*\` attributes to
ensure they are only applied to the internal elements.`,...(he=(be=m.parameters)==null?void 0:be.docs)==null?void 0:he.description}}};const Ke=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize","Invalid","DisabledField","Clearable","Simplified","Full","AriaForwarding"];export{m as AriaForwarding,u as Basic,c as Clearable,i as Disabled,o as DisabledField,p as Full,d as InputFieldSize,g as Invalid,n as MinMaxDates,l as Simplified,t as Usage,s as WeekNumbers,Ke as __namedExportsOrder,He as default};
