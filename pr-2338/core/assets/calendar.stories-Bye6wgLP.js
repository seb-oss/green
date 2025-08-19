import{x as y}from"./lit-element-Bx14lxc-.js";import{a as b}from"./argTableProps-eWBuMs-s.js";import{G as D}from"./calendar.component-BgfyaL49.js";import"./flex-DGQBzie1.js";import"./option-C_Qxcsv1.js";import"./menu-heading-CSruhI5C.js";import"./custom-elements-D4gDCRcE.js";import"./runtime-CNluP0A8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./tokens.style-Bfj-148u.js";import"./transitional-styles-Be9e-Il_.js";import"./watch-tFciLXSI.js";import"./flex.component-C2WvVTnp.js";import"./div.component-BeQ16hT1.js";import"./declarative-layout-mixins-DHam8wVT.js";import"./dropdown.component-D_ByRN5P.js";import"./query-async-MEroNOeJ.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-al3WWrdw.js";import"./form-control-header.component-BP9NuxsR.js";import"./badge.component-Dle24o4i.js";import"./triangle-exclamation.component-CEo389zf.js";import"./icon-CFIW748J.js";import"./button.component-B89ZvrSV.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BD3SJk3O.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-L-kB66To.js";import"./checkmark.component-ChE7koGo.js";import"./rbcb-toggle.template-Cq50h8O1.js";import"./chevron-bottom.component-DN5XA5hc.js";import"./popover.component-C_taiQpZ.js";import"./cross-small.component-Bs9N37Jb.js";import"./menu-heading.component-wPQgXUvX.js";D.define();var d=Object.freeze,w=Object.defineProperty,C=(t,E)=>d(w(t,"raw",{value:d(t.slice())})),r;const ue={title:"Components/Calendar",component:"gds-calendar",parameters:{layout:"centered",disabledWeekends:!0,docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/calendar)

The calendar displays a grid of selectable dates.`}}},tags:["autodocs"],argTypes:{...b("gds-calendar")}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},a={...n,args:{label:"Calendar"}},o={...n,render:t=>y`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  `},e={...n,render:t=>y(r||(r=C([`
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
  `])))};var s,i,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Calendar'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,g,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  \`
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,m,v,h,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(m=e.parameters)==null?void 0:m.docs)==null?void 0:v.source},description:{story:`This is an example of a simple inline datepicker using the calendar
component. It demonstrates how to control the view in the calendar,
how to react to changes and how to customize dates.

This example is written in plain vanilla js/html, but you can adapt it to your
framework of choice.`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};const me=["Basic","Minimal","Usage"];export{a as Basic,o as Minimal,e as Usage,me as __namedExportsOrder,ue as default};
