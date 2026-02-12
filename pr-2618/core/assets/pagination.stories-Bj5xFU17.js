import{x as a}from"./iframe-D81rLJ6U.js";import"./pagination-CrNHoZPi.js";import"./card-YWWFpWCm.js";import"./text-JPxX7fDf.js";import"./flex-CIgC-9Fp.js";import"./localized-decorator-Cm8IE26K.js";import"./popover.component-CQwKH93c.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Sa-v6soQ.js";import"./icon.component-DTpz19Q-.js";import"./context-menu.component-CrJlnMHO.js";import"./unwrap-slots-QTO2xSow.js";import"./ref-Dj7Aile1.js";import"./dot-grid-one-horizontal-DPAPpUQA.js";import"./menu-heading.component-BFwNGK9D.js";import"./dropdown.component-CFO-eYQR.js";import"./query-async-cb3_WM7h.js";import"./form-control-host.style-By9lxb75.js";import"./form-control-header.component-Cmft-EZt.js";import"./badge.component-Dt6rerHJ.js";import"./flex.component-BR9MmH-R.js";import"./triangle-exclamation.component-DMZw8QUd.js";import"./card.component-BUCoIXfd.js";import"./checkmark.component-CwNeZKJH.js";import"./rbcb-toggle.template-Cp8aMKgQ.js";import"./chevron-bottom.component-bO-Ior0Z.js";import"./chevron-right-small.component-38R4uADp.js";import"./chevron-right.component-Fi3Rfnga.js";import"./input.component-n-N_6_kb.js";import"./textarea.component-DeIs2S7H.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CX69FEly.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
