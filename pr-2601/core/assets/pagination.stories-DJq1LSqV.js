import{x as a}from"./iframe-BRqPtqKR.js";import"./pagination-BwiLPfcT.js";import"./card-RljX6YKj.js";import"./text-DowpWU4n.js";import"./flex-CkQlgCzk.js";import"./localized-decorator-Cf9UBoAU.js";import"./popover.component-Dt-wMr7o.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CGXAVpKW.js";import"./icon.component-DDxzZsAf.js";import"./context-menu.component-BW0cY7SX.js";import"./unwrap-slots-D2zxe4U9.js";import"./ref-BoPkz9_G.js";import"./dot-grid-one-horizontal-DWXPNrOx.js";import"./menu-heading.component-DxTvzuPW.js";import"./dropdown.component-DkrRrzQm.js";import"./query-async-B2T5bMhY.js";import"./form-control-host.style-BhKN81Oi.js";import"./form-control-header.component-BTMe7an3.js";import"./badge.component-DyYR49nS.js";import"./flex.component-BjuBNezR.js";import"./triangle-exclamation.component-BzKeq43k.js";import"./card.component-DzI4v2FQ.js";import"./checkmark.component-By5OQgHU.js";import"./rbcb-toggle.template-6JcBh9CH.js";import"./chevron-bottom.component--NquNWGl.js";import"./chevron-right-small.component-CF-Y5RJ0.js";import"./chevron-right.component-CdKSA1Ta.js";import"./input.component-BUYah_3s.js";import"./textarea.component-Ba2Bx50D.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CCxG5D8D.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
