import{x as a}from"./iframe-DkyjKK95.js";import"./pagination-Di2csdYN.js";import"./card-BmwMTyKe.js";import"./text-D-oP4EoO.js";import"./flex-BUhw6Tiy.js";import"./localized-decorator-i059Ztse.js";import"./popover.component-DZqZsUKQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B8nDVD9k.js";import"./icon.component-CmrnUAyG.js";import"./context-menu.component-D7MvT-ZX.js";import"./unwrap-slots-DrI21ODK.js";import"./ref-BQo6aNEH.js";import"./dot-grid-one-horizontal-CzGWx3pa.js";import"./menu-heading.component-DCxW2Kus.js";import"./dropdown.component-BfMbM-Pg.js";import"./query-async-fnatDoiD.js";import"./form-control-host.style-BG05e5YA.js";import"./form-control-header.component-xzdOStiD.js";import"./badge.component-CV-V3Cux.js";import"./flex.component-u7T-zljG.js";import"./triangle-exclamation.component-CZNQIorz.js";import"./card.component-PNJ1cq8S.js";import"./checkmark.component-CJPX354Q.js";import"./rbcb-toggle.template-MO0s_iOj.js";import"./chevron-bottom.component-CwWgniJ9.js";import"./chevron-right-small.component-BLv37YKI.js";import"./chevron-right.component-D3LbrGKw.js";import"./input.component-7ak90dT8.js";import"./textarea.component-ChkmkHaO.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BiVwMkpM.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
