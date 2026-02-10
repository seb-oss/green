import{x as a}from"./iframe-Dza7UAsM.js";import"./pagination-YyXy-Pf4.js";import"./card-CBDSn0H4.js";import"./text-B4bgFZwc.js";import"./flex-DmHqFVk8.js";import"./localized-decorator-D9HKVfyR.js";import"./popover.component-BmKY8279.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-ByaUsE3o.js";import"./icon.component-DjJydk4a.js";import"./context-menu.component-BGSynnBm.js";import"./unwrap-slots-DvHP2LjV.js";import"./ref-B8mzLGhC.js";import"./dot-grid-one-horizontal-BhJZyvRr.js";import"./menu-heading.component-CZVBhmUZ.js";import"./dropdown.component-BuG2DxhO.js";import"./query-async-742Oplf1.js";import"./form-control-host.style-CdXQB53z.js";import"./form-control-header.component-Cluus4jN.js";import"./badge.component-JAfqJv81.js";import"./flex.component-C5bD0V58.js";import"./triangle-exclamation.component-Cgq5g-yd.js";import"./card.component-BH5v5fQe.js";import"./checkmark.component-Bq-JLvxO.js";import"./rbcb-toggle.template-D85wlM5Z.js";import"./chevron-bottom.component-B3G4AtmQ.js";import"./chevron-right-small.component-B4ALXm3i.js";import"./chevron-right.component-CInCjTGT.js";import"./input.component-BUM2OdYW.js";import"./textarea.component-DDrHTafv.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-VV6fcM2w.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
          @gds-page-change=${e}
          @gds-rows-change=${i}
        ></gds-pagination>
      </gds-flex>
    `}},z=["Default"];export{k as Default,z as __namedExportsOrder,j as default};
