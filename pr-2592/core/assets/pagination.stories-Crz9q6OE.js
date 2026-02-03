import{x as a}from"./iframe-B9gqZTf9.js";import"./pagination-BkQYm1Ts.js";import"./card-Bz3dCPWv.js";import"./text-ChrTVsCc.js";import"./flex-Ce0-a2IN.js";import"./localized-decorator-DtQpAqut.js";import"./popover.component-D41CJr2_.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CeTXbQTx.js";import"./icon.component-VxoP50OR.js";import"./context-menu.component-CPkxwQNI.js";import"./unwrap-slots-BdgIzyb8.js";import"./ref-agaVxYZB.js";import"./dot-grid-one-horizontal-CpowNEqs.js";import"./menu-heading.component-D-JmFAgV.js";import"./dropdown.component-BaUKhydJ.js";import"./query-async-BV4Ig6pP.js";import"./form-control-host.style-oF5L89RV.js";import"./form-control-header.component-D8hihKBK.js";import"./badge.component-DKS0LfWP.js";import"./flex.component-BFFdnvB3.js";import"./triangle-exclamation.component-D52Pi_rO.js";import"./card.component-7KNh_NNT.js";import"./checkmark.component-F2frys7D.js";import"./rbcb-toggle.template-BX87NMmH.js";import"./chevron-bottom.component-OzjayCq4.js";import"./chevron-right-small.component-LiJQHXdk.js";import"./chevron-right.component-O5DMpBBa.js";import"./input.component-Da97YKeA.js";import"./textarea.component-BNHFJVyx.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Dwz4F_-H.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
