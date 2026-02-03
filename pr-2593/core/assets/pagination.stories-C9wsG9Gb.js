import{x as a}from"./iframe-_PQ_MQ83.js";import"./pagination-CJ9Fgvl-.js";import"./card-DmmPjolo.js";import"./text-CheufDxn.js";import"./flex-BtqjTgzz.js";import"./localized-decorator-CKkXdIcu.js";import"./popover.component-D49V2AAG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-LsWUtBer.js";import"./icon.component-YkGRoZnr.js";import"./context-menu.component-DYmKqfci.js";import"./unwrap-slots-DImcpoIx.js";import"./ref-BOlffJwg.js";import"./dot-grid-one-horizontal-Cs_w8nN9.js";import"./menu-heading.component-DUPBfmTF.js";import"./dropdown.component-BbgJQ1vF.js";import"./query-async-Bf4cayK0.js";import"./form-control-host.style-CJao-jLu.js";import"./form-control-header.component-E1bpEEc4.js";import"./badge.component-CsPrU0mK.js";import"./flex.component-Do-3NNAq.js";import"./triangle-exclamation.component-JgM4-4ql.js";import"./card.component-DvQLO9ot.js";import"./checkmark.component-BirZscFi.js";import"./rbcb-toggle.template-Dkm2GgmN.js";import"./chevron-bottom.component-tX0DGFur.js";import"./chevron-right-small.component-B_tj_A31.js";import"./chevron-right.component-CP-7DvcB.js";import"./input.component-CNxvWEyq.js";import"./textarea.component-DZ9enclg.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BhDMmH33.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
