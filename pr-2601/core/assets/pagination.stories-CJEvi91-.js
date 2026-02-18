import{x as a}from"./iframe-Yrp1X1kH.js";import"./pagination-Coao5CIo.js";import"./card-B237yGwG.js";import"./text-orXs0WSO.js";import"./flex-RKQ-72Se.js";import"./localized-decorator-D1--hSX5.js";import"./popover.component-BeW8a-TS.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BJLzlvaP.js";import"./icon.component-BMfChpE-.js";import"./context-menu.component-DBcQPum2.js";import"./unwrap-slots-Xmrgap8b.js";import"./ref-D36q4JPL.js";import"./dot-grid-one-horizontal-D4ZbQut2.js";import"./menu-heading.component-D8R9l5O8.js";import"./dropdown.component-BITSizrK.js";import"./query-async-BE025uLc.js";import"./form-control-host.style-C2z54FLN.js";import"./form-control-header.component-6t_FC4ph.js";import"./badge.component-COxR4wtN.js";import"./flex.component-B1o462z2.js";import"./triangle-exclamation.component-CZ1nL60p.js";import"./card.component-Cy1jwRe-.js";import"./checkmark.component-BzUpgAM-.js";import"./rbcb-toggle.template-DlVFkpzQ.js";import"./chevron-bottom.component-BveTuSkR.js";import"./chevron-right-small.component-8CatxE-_.js";import"./chevron-right.component-ilcfxG-Y.js";import"./input.component-lfekBu9Y.js";import"./textarea.component-Brqj65OX.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BjloZD7Z.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
