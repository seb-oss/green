import{x as y}from"./lit-element-Bx14lxc-.js";import{a as b}from"./argTableProps-DmDeDC2m.js";import{G as D}from"./calendar.component-DLz6-WcN.js";import"./flex-CXYJXTeQ.js";import"./dropdown-D2WOYmZ-.js";import"./option-BLyFyXeE.js";import"./menu-heading-CLLofeDc.js";import"./custom-elements-BGoKcT9Q.js";import"./runtime-BL31MtW8.js";import"./localized-decorator-DtmrKsyB.js";import"./custom-element-scoping-CNGU1oQ0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./tokens.style-vQBwQv71.js";import"./transitional-styles-CD1mMrWO.js";import"./watch-tFciLXSI.js";import"./index-C4WLrI9v.js";import"./flex.component-Apgiyuoj.js";import"./div.component-CrCsvFNO.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./dropdown.component-CXyQZ7rO.js";import"./query-async-MEroNOeJ.js";import"./icon-CMjDogij.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-Dv6R5DZz.js";import"./form-control-header.component-DPzHdoLg.js";import"./badge.component-DwshZFaZ.js";import"./triangle-exclamation.component-Dn2q-7Yn.js";import"./button.component-6nvmO9qk.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BqSibp9P.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-BCrUGdY2.js";import"./chevron-bottom.component-puvYO4hP.js";import"./popover.component-BVGC3wlQ.js";import"./cross-small.component-COJXRAdt.js";import"./menu-heading.component-B3FdIqc8.js";D.define();var d=Object.freeze,w=Object.defineProperty,C=(t,E)=>d(w(t,"raw",{value:d(t.slice())})),s;const ue={title:"Components/Calendar",component:"gds-calendar",parameters:{layout:"centered",disabledWeekends:!0,docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/calendar)

The calendar displays a grid of selectable dates.`}}},tags:["autodocs"],argTypes:{...b("gds-calendar")}},n={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},o={...n,args:{label:"Calendar"}},a={...n,render:t=>y`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  `},e={...n,render:t=>y(s||(s=C([`
    <div style="width: 320px">
      <gds-flex gap="m">
        <gds-dropdown id="year" label="Year" size="small">
          <gds-option value="2024">2024</gds-option>
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
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
      const cal = document.getElementById('cal')
      const year = document.getElementById('year')
      const month = document.getElementById('month')

      const customizedDates = [
        {
          date: new Date('2024-06-04'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2024-06-06'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2024-07-06'),
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
  `])))};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Calendar'
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-calendar
      label="Pick a day"
      hideDayNames="true"
      hideExtraneousDays="true"
    ></gds-calendar>
  \`
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,v,h,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="width: 320px">
      <gds-flex gap="m">
        <gds-dropdown id="year" label="Year" size="small">
          <gds-option value="2024">2024</gds-option>
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
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
      const cal = document.getElementById('cal')
      const year = document.getElementById('year')
      const month = document.getElementById('month')

      const customizedDates = [
        {
          date: new Date('2024-06-04'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2024-06-06'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2024-07-06'),
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
}`,...(v=(u=e.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:`This is an example of a simple inline datepicker using the calendar
component. It demonstrates how to control the view in the calendar,
how to react to changes and how to customize dates.

This example is written in plain vanilla js/html, but you can adapt it to your
framework of choice.`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};const ve=["Basic","Minimal","Usage"];export{o as Basic,a as Minimal,e as Usage,ve as __namedExportsOrder,ue as default};
