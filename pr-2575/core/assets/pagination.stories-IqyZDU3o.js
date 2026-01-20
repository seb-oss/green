import{x as a}from"./iframe-Ckb5JYy8.js";import"./pagination-VkXbZsCb.js";import"./card-5h2avVJV.js";import"./text-DbqlWi-X.js";import"./flex-C2S1XgmO.js";import"./localized-decorator-BKTLIKfh.js";import"./popover.component-B1YvKzTR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-sli8Z06C.js";import"./icon.component-4t6GFlNj.js";import"./context-menu.component-DFUtn2oo.js";import"./unwrap-slots-NTTsYF-G.js";import"./ref-CByMp4gX.js";import"./dot-grid-one-horizontal-aiYcdl7W.js";import"./menu-heading.component-Bqovk5Bc.js";import"./dropdown.component-DT0LWzMQ.js";import"./query-async-BurFEgP8.js";import"./form-control-host.style-endqD0Oj.js";import"./form-control-header.component-D8ZpFBPV.js";import"./badge.component-CUqc9JKw.js";import"./flex.component-bq63keLP.js";import"./triangle-exclamation.component-BdyI1rwo.js";import"./card.component-y7GisDGl.js";import"./checkmark.component-C-Qy47Nt.js";import"./rbcb-toggle.template-_EW_2Czd.js";import"./chevron-bottom.component-52ydG2uN.js";import"./chevron-right-small.component-DGr-KfuM.js";import"./chevron-right.component-CD1ukb72.js";import"./input.component-Crpiipdz.js";import"./textarea.component-OFRKAqg-.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-LjEH_hAg.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
