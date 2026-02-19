import{x as n}from"./iframe-BNlHJcLe.js";import"./pagination-CeFewCjh.js";import"./card-Cip1Dznm.js";import"./text-C515lem5.js";import"./flex-CWGmE_P8.js";import"./localized-decorator-nkBLdZC8.js";import"./popover.component-CWwxesGR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CSJq7CvR.js";import"./icon.component-CRA7X51f.js";import"./context-menu.component-CdPxXib6.js";import"./unwrap-slots-BXhp0ped.js";import"./ref-DaTgdWjt.js";import"./dot-grid-one-horizontal-DmbRWdjY.js";import"./menu-heading.component-BKKSWC50.js";import"./dropdown.component-Cg4VHq9f.js";import"./query-async-iSl_OEEc.js";import"./form-control-host.style-BQylr88J.js";import"./form-control-header.component-CGTD9_8C.js";import"./badge.component-DCnCpv4X.js";import"./flex.component-Bcx4JsMO.js";import"./triangle-exclamation.component-Jo1OQ4TZ.js";import"./card.component-DN0lPKKU.js";import"./checkmark.component-ChtnQmvm.js";import"./rbcb-toggle.template-DCB_xfuq.js";import"./chevron-bottom.component-pEWo6HgD.js";import"./chevron-right-small.component-Dsi3E7t3.js";import"./chevron-right.component-ByN0salo.js";import"./input.component-Brb55gS4.js";import"./textarea.component-XWzaZAcu.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CLZsTHM9.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return n`
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
          @gds-page-change=${o}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},z={args:{page:1,rows:8,total:100,options:[8],hideOptions:!1,label:"1-8 of 100"},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page-single]").innerHTML=String(t.page),document.querySelector("[data-pagination-single]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows-single]").innerHTML=String(t.rows),document.querySelector("[data-page-single]").innerHTML="1",document.querySelector("[data-pagination-single]").setAttribute("page","1"),document.querySelector("[data-pagination-single]").setAttribute("rows",String(t.rows))};return n`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-single>${t.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-single>${t.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${t.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-single
          page="${t.page}"
          rows="${t.rows}"
          .total=${t.total}
          .options=${t.options}
          ?hide-options="${t.hideOptions}"
          label="${t.label}"
          @gds-page-change=${o}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},B={args:{page:1,rows:10,total:8,options:[5,10,20,50,100],hideOptions:!1,label:"1-8 of 8"},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page-one]").innerHTML=String(t.page),document.querySelector("[data-pagination-one]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows-one]").innerHTML=String(t.rows),document.querySelector("[data-page-one]").innerHTML="1",document.querySelector("[data-pagination-one]").setAttribute("page","1"),document.querySelector("[data-pagination-one]").setAttribute("rows",String(t.rows))};return n`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-one>${t.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-one>${t.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${t.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-one
          page="${t.page}"
          rows="${t.rows}"
          .total=${t.total}
          .options=${t.options}
          ?hide-options="${t.hideOptions}"
          label="${t.label}"
          @gds-page-change=${o}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},F=["Default","SingleOption","OnePage"];export{k as Default,B as OnePage,z as SingleOption,F as __namedExportsOrder,j as default};
