import{x as a}from"./iframe--EOx3dpz.js";import"./pagination-Dq4b0o6p.js";import"./card-Cl-UjOq3.js";import"./text-B_bMLspb.js";import"./flex-CPqD0gaj.js";import"./localized-decorator-DKJ1UTxE.js";import"./popover.component-DpGJv4lM.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-oRxrF3J3.js";import"./icon.component-nGk6d9tl.js";import"./context-menu.component-wuLbM6_v.js";import"./unwrap-slots-Dc5uQENf.js";import"./ref-oeS0gsEV.js";import"./dot-grid-one-horizontal-BA0aycNq.js";import"./menu-heading.component-B68ycaLQ.js";import"./dropdown.component-C63c-GoK.js";import"./query-async-CHvc8cpL.js";import"./form-control-host.style-B5UIi6Gn.js";import"./form-control-header.component-nSJFRdZu.js";import"./badge.component-BUErVDr-.js";import"./flex.component-DRomwThP.js";import"./triangle-exclamation.component-BdwN9oik.js";import"./card.component-CEO7KvUT.js";import"./checkmark.component-Bz_LTYJV.js";import"./rbcb-toggle.template-3i3638qX.js";import"./chevron-bottom.component-B4gz4TfP.js";import"./chevron-right-small.component-BXMNRT5w.js";import"./chevron-right.component-C1fKoim0.js";import"./input.component-M14VGWOC.js";import"./textarea.component-DmJ37bCp.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-ClFV1wzF.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
