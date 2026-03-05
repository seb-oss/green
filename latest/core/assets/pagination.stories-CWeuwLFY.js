import{x as n}from"./iframe-CoeSBRAZ.js";import"./pagination-COTbqWXE.js";import"./card-Sogq0cj6.js";import"./text-DuxmBuJm.js";import"./flex-C0fWOohi.js";import"./localized-decorator-DaoG_-Rv.js";import"./popover.component-Cz3ytIi8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BvME2u8o.js";import"./icon.component-uTRHruiP.js";import"./context-menu.component-BL9DVU80.js";import"./unwrap-slots-DR7M_yFN.js";import"./ref-DMQVQu_A.js";import"./dot-grid-one-horizontal-7pHzGm4F.js";import"./menu-heading.component-nAh1JP_d.js";import"./dropdown.component-DJzrtv9G.js";import"./query-async-BgFuwShq.js";import"./form-control-host.style-DZx-Fxuz.js";import"./form-control-header.component-Bw3t1sjR.js";import"./badge.component-BMg7_mr0.js";import"./flex.component-DzRSufS9.js";import"./triangle-exclamation.component-CUw8G_FR.js";import"./card.component-ScuPZKxv.js";import"./checkmark.component-FhL0iKav.js";import"./rbcb-toggle.template-3BCUL8Ac.js";import"./chevron-bottom.component-MOMidbSj.js";import"./chevron-right-small.component-BzDAmg6m.js";import"./chevron-right.component-t9WCVZ0H.js";import"./input.component-B3gHBm0g.js";import"./textarea.component-C7NysXpi.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BFvv6EPf.js";const W={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},j={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const o=e=>{t.page=e.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=e=>{t.rows=e.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return n`
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
