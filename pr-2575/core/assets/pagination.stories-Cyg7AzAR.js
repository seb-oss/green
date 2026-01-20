import{x as a}from"./iframe-CdkNm90d.js";import"./pagination-BrKuFXpT.js";import"./card-B0dlcJPg.js";import"./text-DolJvl3u.js";import"./flex-Dqx94wbI.js";import"./localized-decorator-ManM-QDy.js";import"./popover.component-B6k9T_hf.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C7uVfe56.js";import"./icon.component-CSACcb-9.js";import"./context-menu.component-DsBxc13i.js";import"./unwrap-slots-P7U3d2VX.js";import"./ref-BWoTEewu.js";import"./dot-grid-one-horizontal-D3-WObik.js";import"./menu-heading.component-8vLXKI1A.js";import"./dropdown.component-CI5ZZbA9.js";import"./query-async-BzEtScRC.js";import"./form-control-host.style-C31hnt3t.js";import"./form-control-header.component-BO-JWNyf.js";import"./badge.component-BORcxns_.js";import"./flex.component-CR4a_v6h.js";import"./triangle-exclamation.component-CzO9M-TC.js";import"./card.component-BzQ8QK_Z.js";import"./checkmark.component-2KXnux_7.js";import"./rbcb-toggle.template-B8KzoDP3.js";import"./chevron-bottom.component-CuhqLLWj.js";import"./chevron-right-small.component-DxO6SfER.js";import"./chevron-right.component-acYSFc-g.js";import"./input.component-8VUu-Wws.js";import"./textarea.component-CHtHCEAF.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C4zuZ3To.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
