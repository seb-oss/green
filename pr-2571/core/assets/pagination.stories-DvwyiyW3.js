import{x as a}from"./iframe-OlsBgo_r.js";import"./pagination-CR1HJZ2j.js";import"./card-BvYojY3X.js";import"./text-BYAIfBXO.js";import"./flex-BytvadFX.js";import"./localized-decorator-C6p1g9cH.js";import"./popover.component-DKa76RI0.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BXwdOc5M.js";import"./icon.component-DeTz_6Cg.js";import"./context-menu.component-DoaJuich.js";import"./unwrap-slots-CMWqG-V8.js";import"./ref-DvYhXRe2.js";import"./dot-grid-one-horizontal-8o38YWL_.js";import"./menu-heading.component-CKrl2Juk.js";import"./dropdown.component-qSvMQCIf.js";import"./query-async-sMJztgIg.js";import"./form-control-host.style-DWksh68R.js";import"./form-control-header.component-BMpy16-Q.js";import"./badge.component-C9ENFnkv.js";import"./flex.component-Dh4lRNXB.js";import"./triangle-exclamation.component-B5JkVR_x.js";import"./card.component-B6VtkSNZ.js";import"./checkmark.component-DcompkXR.js";import"./rbcb-toggle.template-DholKlBY.js";import"./chevron-bottom.component-CUD5kGRa.js";import"./chevron-right-small.component-BVkQKJPf.js";import"./chevron-right.component-CU_HSeEw.js";import"./input.component-DZ9xe-kf.js";import"./textarea.component-DmgsLTsZ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-W7pRaHw0.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
