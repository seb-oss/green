import{x as r}from"./iframe-C-vSePkR.js";import"./pagination-Dmr6PoVn.js";import"./card-B79GTse1.js";import"./text-D3fs0Szs.js";import"./flex-C4J0xRk9.js";import"./localized-decorator-KpgV2Yt6.js";import"./popover.component-DqaIpsq4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-svKLtk3x.js";import"./icon.component-Ca-hYHGF.js";import"./context-menu.component-BWUci0ZP.js";import"./unwrap-slots-CzPAGoEk.js";import"./ref-Dwt_4f_g.js";import"./dot-grid-one-horizontal-BhWMYs7D.js";import"./menu-heading.component-0ZFJAxq3.js";import"./dropdown.component-DR4sNBE_.js";import"./query-async-CIIJoAyw.js";import"./form-control-host.style-DTG53aFA.js";import"./form-control-header.component-Cf7raF4a.js";import"./badge.component-DMC4L3IL.js";import"./flex.component-C5LxecxV.js";import"./triangle-exclamation.component-BVj8rc2f.js";import"./card.component-dplERBBH.js";import"./checkmark.component-Cb_OXouL.js";import"./rbcb-toggle.template-BypwAjd-.js";import"./chevron-bottom.component-DtmY9UfK.js";import"./chevron-right-small.component-xMFhKn_-.js";import"./chevron-right.component-N5pmJV0M.js";import"./input.component-ZkrOLmaG.js";import"./textarea.component-CNA6MW-P.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BCLwmegz.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
          @gds-page-change=${e}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},z=["Default"];export{k as Default,z as __namedExportsOrder,j as default};
