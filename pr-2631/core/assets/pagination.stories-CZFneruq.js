import{x as n}from"./iframe-CCr7BfDW.js";import"./pagination-HL4FJODF.js";import"./card--yDNoFx8.js";import"./text-CgonV9pW.js";import"./flex-oQ2J-TUY.js";import"./localized-decorator-Cdz-T05e.js";import"./popover.component--HwsGcuD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DIdjbBdr.js";import"./icon.component-Ds_8Hvh-.js";import"./context-menu.component-6sO_ZbVo.js";import"./unwrap-slots-CyWlommC.js";import"./ref-DLu8ds5c.js";import"./dot-grid-one-horizontal-Cc-8Ad7o.js";import"./menu-heading.component-8UDvr1ls.js";import"./dropdown.component-1CImT0lE.js";import"./query-async-C9Hm29pF.js";import"./form-control-host.style-BjZtw9qD.js";import"./form-control-header.component-CNeADrrw.js";import"./badge.component-BTZuO071.js";import"./flex.component-DBdVvVF4.js";import"./triangle-exclamation.component-BAG9VFIE.js";import"./card.component-QkFY-_-4.js";import"./checkmark.component-f96Ym55_.js";import"./rbcb-toggle.template-BxL05P3g.js";import"./chevron-bottom.component-CZd6XTvP.js";import"./chevron-right-small.component-HRj2Rt8-.js";import"./chevron-right.component-DlvjAyVZ.js";import"./input.component-DLSOWMFr.js";import"./textarea.component-BikMIRzF.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DfN_BO-m.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return n`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page>${t.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows>${t.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${t.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination
          page="${t.page}"
          rows="${t.rows}"
          .total=${t.total}
          .options=${t.options}
          ?hide-options="${t.hideOptions}"
          @gds-page-change=${o}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},z={args:{page:1,rows:8,total:100,options:[8],hideOptions:!1,label:"1-8 of 100"},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page-single]").innerHTML=String(t.page),document.querySelector("[data-pagination-single]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows-single]").innerHTML=String(t.rows),document.querySelector("[data-page-single]").innerHTML="1",document.querySelector("[data-pagination-single]").setAttribute("page","1"),document.querySelector("[data-pagination-single]").setAttribute("rows",String(t.rows))};return n`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-single>${t.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-single>${t.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${t.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-single
          page="${t.page}"
          rows="${t.rows}"
          .total=${t.total}
          .options=${t.options}
          ?hide-options="${t.hideOptions}"
          label="${t.label}"
          @gds-page-change=${o}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},B={args:{page:1,rows:10,total:8,options:[5,10,20,50,100],hideOptions:!1,label:"1-8 of 8"},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page-one]").innerHTML=String(t.page),document.querySelector("[data-pagination-one]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows-one]").innerHTML=String(t.rows),document.querySelector("[data-page-one]").innerHTML="1",document.querySelector("[data-pagination-one]").setAttribute("page","1"),document.querySelector("[data-pagination-one]").setAttribute("rows",String(t.rows))};return n`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-one>${t.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-one>${t.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${t.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-one
          page="${t.page}"
          rows="${t.rows}"
          .total=${t.total}
          .options=${t.options}
          ?hide-options="${t.hideOptions}"
          label="${t.label}"
          @gds-page-change=${o}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},F=["Default","SingleOption","OnePage"];export{k as Default,B as OnePage,z as SingleOption,F as __namedExportsOrder,j as default};
