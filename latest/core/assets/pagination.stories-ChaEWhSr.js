import{x as n}from"./iframe-iTp6uJWY.js";import"./pagination-Cx-VNWYx.js";import"./card-DN2oGusX.js";import"./text-CcUR_mMe.js";import"./flex-CCIVfaSE.js";import"./localized-decorator-D-ZR5rvT.js";import"./popover.component-BKRREik1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-1Q6k81jQ.js";import"./icon.component-CSYMpqUX.js";import"./context-menu.component-D2M3Yn6y.js";import"./unwrap-slots-CBihBcDN.js";import"./ref-BnnJJm8y.js";import"./dot-grid-one-horizontal-C51RMmDc.js";import"./menu-heading.component-BWRV4Sa3.js";import"./dropdown.component-DsAI-Fqp.js";import"./query-async-CFvxKBdj.js";import"./form-control-host.style-DqoH8_kl.js";import"./form-control-header.component-DbLzSa97.js";import"./badge.component-Bj8lzOla.js";import"./flex.component-nuwIDH92.js";import"./triangle-exclamation.component-hwL9C4Du.js";import"./card.component-DGl-TPP7.js";import"./checkmark.component-BelWeuNX.js";import"./rbcb-toggle.template-DvL6hZE9.js";import"./chevron-bottom.component-C2LDygFW.js";import"./chevron-right-small.component-BQD-8MSE.js";import"./chevron-right.component-tuaMakc8.js";import"./input.component-C8AhcNEL.js";import"./textarea.component-BMkqsYc0.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CdOQY8qz.js";const W={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},j={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return n`
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
    `}},k={args:{page:1,rows:8,total:100,options:[8],hideOptions:!1,label:"1-8 of 100"},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page-single]").innerHTML=String(t.page),document.querySelector("[data-pagination-single]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows-single]").innerHTML=String(t.rows),document.querySelector("[data-page-single]").innerHTML="1",document.querySelector("[data-pagination-single]").setAttribute("page","1"),document.querySelector("[data-pagination-single]").setAttribute("rows",String(t.rows))};return n`
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
    `}},z={args:{page:1,rows:10,total:8,options:[5,10,20,50,100],hideOptions:!1,label:"1-8 of 8"},parameters:{docs:{description:{story:`
 When all items fit on a single page (total ≤ rows), the entire pagination is automatically hidden since there is nothing to paginate.
        `}}},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page-one]").innerHTML=String(t.page),document.querySelector("[data-pagination-one]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows-one]").innerHTML=String(t.rows),document.querySelector("[data-page-one]").innerHTML="1",document.querySelector("[data-pagination-one]").setAttribute("page","1"),document.querySelector("[data-pagination-one]").setAttribute("rows",String(t.rows))};return n`
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
    `}},B=["Default","SingleOption","OnePage"];export{j as Default,z as OnePage,k as SingleOption,B as __namedExportsOrder,W as default};
