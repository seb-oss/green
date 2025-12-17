import{x as r}from"./iframe-Drqb4zoq.js";import{a as M}from"./argTableProps-DkzfaA7i.js";import{G as z}from"./calendar.component-CIY-Lz0Y.js";import"./flex-CpnTKbz1.js";import"./dropdown-zWaJo6kM.js";import"./option-D_SKmRkp.js";import"./menu-heading-CaXP40Uk.js";import"./preload-helper-Dp1pzeXC.js";import"./flex.component-BtbIyUVZ.js";import"./dropdown.component-BxDEqEgQ.js";import"./query-async-Be2D3Htr.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CbPVxIzV.js";import"./form-control-header.component-BCwD3ciQ.js";import"./badge.component-CcbNC8eU.js";import"./triangle-exclamation.component-Ms8awHqD.js";import"./icon.component-bP2ONWTl.js";import"./card.component-CsXoU9c-.js";import"./ref-Bkmm0YJ0.js";import"./unwrap-slots-Cvnnko9v.js";import"./checkmark.component-Bb1Cv6-j.js";import"./rbcb-toggle.template-BGDvORW4.js";import"./chevron-bottom.component-Bk_oaD4Q.js";import"./cross-small.component-DQ1sfjht.js";import"./popover.component-DkglKzzK.js";import"./menu-heading.component-iqw4OISt.js";z.define();var s=Object.freeze,P=Object.defineProperty,Y=(e,B)=>s(P(e,"raw",{value:s(e.slice())})),i;const ne={title:"Components/Calendar",component:"gds-calendar",parameters:{layout:"centered",disabledWeekends:!0,docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/calendar)

The calendar displays a grid of selectable dates.`}}},tags:["autodocs"],argTypes:{...M("gds-calendar")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},n={...d,args:{label:"Calendar"}},a={...d,render:e=>r`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  `},t={...d,render:e=>r`
    <gds-calendar
      label="Pick a day"
      size="small"
      showWeekNumbers
    ></gds-calendar>
  `},o={...d,render:e=>r(i||(i=Y([`
    <div style="width: 362px">
      <gds-flex gap="m">
        <gds-dropdown id="year" label="Year" size="small">
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
          <gds-option value="2027">2027</gds-option>
        </gds-dropdown>
        <gds-dropdown id="month" max-height="200" label="Month" size="small">
          <gds-option value="0">Jan</gds-option>
          <gds-option value="1">Feb</gds-option>
          <gds-option value="2">Mar</gds-option>
          <gds-option value="3">Apr</gds-option>
          <gds-option value="4">May</gds-option>
          <gds-option value="5">Jun</gds-option>
          <gds-option value="6">Jul</gds-option>
          <gds-option value="7">Aug</gds-option>
          <gds-option value="8">Sep</gds-option>
          <gds-option value="9">Oct</gds-option>
          <gds-option value="10">Nov</gds-option>
          <gds-option value="11">Dec</gds-option>
        </gds-dropdown>
      </gds-flex>
      <gds-calendar id="cal" label="Calendar"></gds-calendar>
      <div>
        Selected date:
        <span id="selected-date" style="font-weight: bold"></span>
      </div>
    </div>
    <script>
      var cal = document.getElementById('cal')
      var year = document.getElementById('year')
      var month = document.getElementById('month')

      var customizedDates = [
        {
          date: new Date('2025-08-25'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2025-08-27'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2025-08-28'),
          color: 'var(--intent-danger-background)',
          indicator: 'icon',
        },
        {
          date: new Date('2025-08-29'),
          disabled: true,
        },
        {
          date: new Date('2025-09-15'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2025-09-17'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2025-09-18'),
          color: 'var(--intent-danger-background)',
          indicator: 'icon',
        },
        {
          date: new Date('2025-09-19'),
          disabled: true,
        },
      ]

      function setYear(e) {
        cal.focusedYear = e.target.value
      }

      function setMonth(e) {
        cal.focusedMonth = e.target.value
      }

      function onCalFocusChange(e) {
        year.value = String(e.target.focusedYear)
        month.value = String(e.target.focusedMonth)
      }

      function onCalChange() {
        const selectedDate = cal.value
        document.getElementById('selected-date').innerText =
          selectedDate.toDateString()
      }

      cal.addEventListener('gds-date-focused', onCalFocusChange)
      cal.addEventListener('change', onCalChange)
      cal.customizedDates = customizedDates

      year.addEventListener('change', setYear)
      year.value = String(cal.focusedYear)

      month.addEventListener('change', setMonth)
      month.value = String(cal.focusedMonth)
    <\/script>
  `])))};var l,c,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Calendar'
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,u,m,v,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  \`
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Use the `hideDayNames` and `hideExtraneousDays` attribute for a condenced version.",...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.description}}};var f,b,y,w,D;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-calendar
      label="Pick a day"
      size="small"
      showWeekNumbers
    ></gds-calendar>
  \`
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:'Use the `size="small` attribute for a smaller version and `showWeekNumbers` to show\nthe week numbers on the left side.',...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.description}}};var k,C,S,E,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="width: 362px">
      <gds-flex gap="m">
        <gds-dropdown id="year" label="Year" size="small">
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
          <gds-option value="2027">2027</gds-option>
        </gds-dropdown>
        <gds-dropdown id="month" max-height="200" label="Month" size="small">
          <gds-option value="0">Jan</gds-option>
          <gds-option value="1">Feb</gds-option>
          <gds-option value="2">Mar</gds-option>
          <gds-option value="3">Apr</gds-option>
          <gds-option value="4">May</gds-option>
          <gds-option value="5">Jun</gds-option>
          <gds-option value="6">Jul</gds-option>
          <gds-option value="7">Aug</gds-option>
          <gds-option value="8">Sep</gds-option>
          <gds-option value="9">Oct</gds-option>
          <gds-option value="10">Nov</gds-option>
          <gds-option value="11">Dec</gds-option>
        </gds-dropdown>
      </gds-flex>
      <gds-calendar id="cal" label="Calendar"></gds-calendar>
      <div>
        Selected date:
        <span id="selected-date" style="font-weight: bold"></span>
      </div>
    </div>
    <script>
      var cal = document.getElementById('cal')
      var year = document.getElementById('year')
      var month = document.getElementById('month')

      var customizedDates = [
        {
          date: new Date('2025-08-25'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2025-08-27'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2025-08-28'),
          color: 'var(--intent-danger-background)',
          indicator: 'icon',
        },
        {
          date: new Date('2025-08-29'),
          disabled: true,
        },
        {
          date: new Date('2025-09-15'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2025-09-17'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2025-09-18'),
          color: 'var(--intent-danger-background)',
          indicator: 'icon',
        },
        {
          date: new Date('2025-09-19'),
          disabled: true,
        },
      ]

      function setYear(e) {
        cal.focusedYear = e.target.value
      }

      function setMonth(e) {
        cal.focusedMonth = e.target.value
      }

      function onCalFocusChange(e) {
        year.value = String(e.target.focusedYear)
        month.value = String(e.target.focusedMonth)
      }

      function onCalChange() {
        const selectedDate = cal.value
        document.getElementById('selected-date').innerText =
          selectedDate.toDateString()
      }

      cal.addEventListener('gds-date-focused', onCalFocusChange)
      cal.addEventListener('change', onCalChange)
      cal.customizedDates = customizedDates

      year.addEventListener('change', setYear)
      year.value = String(cal.focusedYear)

      month.addEventListener('change', setMonth)
      month.value = String(cal.focusedMonth)
    <\/script>
  \`
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source},description:{story:`This is an example of a simple inline datepicker using the calendar
component. It demonstrates how to control the view in the calendar,
how to react to changes and how to customize dates. It has customizedDates
which makes the grid larger to give space for the indicators.

This example is written in plain vanilla js/html, but you can adapt it to your
framework of choice.`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.description}}};const de=["Basic","Minimal","Small","Usage"];export{n as Basic,a as Minimal,t as Small,o as Usage,de as __namedExportsOrder,ne as default};
