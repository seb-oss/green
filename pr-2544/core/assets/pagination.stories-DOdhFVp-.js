import{x as a}from"./iframe-C3UwppBg.js";import"./pagination-BUfVms1l.js";import"./card-BIOnC_Md.js";import"./text-Ddneac50.js";import"./flex-Dq56nI52.js";import"./localized-decorator-r9IxuSjn.js";import"./popover.component--pZ90zgR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C-AwTQGo.js";import"./icon.component-B-gqN3-z.js";import"./context-menu.component-C-_gjyg9.js";import"./unwrap-slots-vBIjKyVl.js";import"./ref-D6iPKaT3.js";import"./dot-grid-one-horizontal-Dh-TLCLE.js";import"./menu-heading.component-DIGZZOmy.js";import"./dropdown.component-BnMxFZx_.js";import"./query-async-Byi0_PpA.js";import"./form-control-host.style-PofDYVrL.js";import"./form-control-header.component-f0HosiAl.js";import"./badge.component-JJr195X_.js";import"./flex.component-Cm_b3atb.js";import"./triangle-exclamation.component-DUu1oM0L.js";import"./card.component-Cjw_WW6s.js";import"./checkmark.component-CAZuEC_P.js";import"./rbcb-toggle.template-CwAi53Nk.js";import"./chevron-bottom.component-DKl-Cj7Z.js";import"./chevron-right-small.component-CB89vnbl.js";import"./chevron-right.component-DSqmkrnj.js";import"./input.component-Br4bfKU1.js";import"./textarea.component-wHrwnD2m.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C9C139HU.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
