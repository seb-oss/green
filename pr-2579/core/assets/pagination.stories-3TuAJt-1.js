import{x as a}from"./iframe-nlDDYvqR.js";import"./pagination-DeGN-Vyc.js";import"./card-Zyckcsda.js";import"./text-CktAJ6tc.js";import"./flex-B5d_sXwG.js";import"./localized-decorator-D8mSi4IG.js";import"./popover.component-5Vks968w.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-stdcHKqp.js";import"./icon.component-DuAs_fth.js";import"./context-menu.component-DUFIBhXo.js";import"./unwrap-slots-jrnTcDNu.js";import"./ref-BAbXWXqC.js";import"./dot-grid-one-horizontal-BrQIgXcy.js";import"./menu-heading.component-rGP8n0qN.js";import"./dropdown.component-BROSMnJY.js";import"./query-async-Y7PtwARm.js";import"./form-control-host.style-Dtx-2fvI.js";import"./form-control-header.component-CX8XVARb.js";import"./badge.component-DopIgadB.js";import"./flex.component-CnLDL-8K.js";import"./triangle-exclamation.component-m6a9idBp.js";import"./card.component-BOnsqJuP.js";import"./checkmark.component-Dmd-fNGK.js";import"./rbcb-toggle.template-DPtXkoBM.js";import"./chevron-bottom.component-B-aOrEpy.js";import"./chevron-right-small.component-DZCIe386.js";import"./chevron-right.component-Ck9dh_Jx.js";import"./input.component-MU2COccJ.js";import"./textarea.component-CxYFAPOE.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BNrcQ6g-.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
