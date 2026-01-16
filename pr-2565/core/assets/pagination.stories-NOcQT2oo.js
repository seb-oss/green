import{x as r}from"./iframe--vWvZ7y_.js";import"./pagination-DSA7CXKN.js";import"./card-Cbn3eHsn.js";import"./text-BHEoZvPg.js";import"./flex-DxJoojJE.js";import"./localized-decorator-DFTApz3b.js";import"./popover.component-HKG-Ha3y.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B4nl_1Ce.js";import"./icon.component-CY3ew2P1.js";import"./context-menu.component-DGwFML0s.js";import"./unwrap-slots-C2-RXtB_.js";import"./ref-CqdQ0_Cl.js";import"./dot-grid-one-horizontal-BmXobZK6.js";import"./menu-heading.component-QOMUt2tA.js";import"./dropdown.component-Cni0BbgY.js";import"./query-async-DWZxqPii.js";import"./form-control-host.style-D0q-mwUm.js";import"./form-control-header.component-Dw9skxrI.js";import"./badge.component-DNWv_Tpe.js";import"./flex.component-Bu9Fk6VG.js";import"./triangle-exclamation.component-ClxGBMmW.js";import"./card.component-DVsY5IqQ.js";import"./checkmark.component-BeqLxXbm.js";import"./rbcb-toggle.template-BGLxDsUr.js";import"./chevron-bottom.component-DtNdPb5B.js";import"./chevron-right-small.component-K-rZUL1l.js";import"./chevron-right.component-DWWdOAki.js";import"./input.component-WNIDM5uW.js";import"./textarea.component-C9ywXU2Y.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BLmgj2CW.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
