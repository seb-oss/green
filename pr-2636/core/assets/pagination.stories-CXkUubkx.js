import{x as n}from"./iframe-tImQFrgz.js";import"./pagination-Ci_2wwHo.js";import"./card-TlR4uAsW.js";import"./text-B4EHldaL.js";import"./flex-D1p8Ohbi.js";import"./localized-decorator-BgbdySY8.js";import"./popover.component-BwY7kHCN.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CGs_8iOa.js";import"./icon.component-DBBujEUI.js";import"./context-menu.component-ChYwRBpf.js";import"./unwrap-slots-B_Rwm1l6.js";import"./ref-DWJ7wBZL.js";import"./dot-grid-one-horizontal-Cg-MOpnf.js";import"./menu-heading.component-BZ1Qfimw.js";import"./dropdown.component-Dj3Bbw3x.js";import"./query-async-D1dbojKb.js";import"./form-control-host.style-CqcVWd7T.js";import"./form-control-header.component-DsTn42kv.js";import"./badge.component-BCUp-ihJ.js";import"./flex.component-C_UUgzzz.js";import"./triangle-exclamation.component-BJxkxXlo.js";import"./card.component-DYvjSiD3.js";import"./checkmark.component-CRlRBo3w.js";import"./rbcb-toggle.template-BXwmZKtt.js";import"./chevron-bottom.component-Cj_ZEdcO.js";import"./chevron-right-small.component-DUAAnctq.js";import"./chevron-right.component-CIB4DvtA.js";import"./input.component-DqPUNllm.js";import"./textarea.component-CWt2qRxS.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CcORt9NA.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return n`
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
