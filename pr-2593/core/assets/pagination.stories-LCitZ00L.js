import{x as a}from"./iframe-DeD76d6T.js";import"./pagination-CEjfOQA8.js";import"./card-C69xqXUD.js";import"./text-D6Z6RL40.js";import"./flex-DDqUgCky.js";import"./localized-decorator-DxP51tC8.js";import"./popover.component--feL6tVk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BMf3X43J.js";import"./icon.component-BpXojplS.js";import"./context-menu.component-gWQo9Y79.js";import"./unwrap-slots-COKnDPsA.js";import"./ref-CYTLOdz7.js";import"./dot-grid-one-horizontal-D0rMlCGU.js";import"./menu-heading.component-DxvbXdK-.js";import"./dropdown.component-B7t2CnRh.js";import"./query-async-BwgGfV7U.js";import"./form-control-host.style-sNIHzeql.js";import"./form-control-header.component-Deh2G95f.js";import"./badge.component-CCjmsGqI.js";import"./flex.component-BHtdtXy8.js";import"./triangle-exclamation.component-BdGP46Xc.js";import"./card.component-BqkU3JX6.js";import"./checkmark.component-BqLmm-35.js";import"./rbcb-toggle.template-OTMyfMyu.js";import"./chevron-bottom.component-D25eiucy.js";import"./chevron-right-small.component-DxwdBuMb.js";import"./chevron-right.component-BRrb8b8N.js";import"./input.component-BHxrsbAj.js";import"./textarea.component-CAVrv_8o.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-OTLSTH63.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
