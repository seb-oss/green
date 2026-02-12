import{x as a}from"./iframe-CcvMqXI-.js";import"./pagination-ClmkjVtY.js";import"./card-CrawVU_y.js";import"./text-94HkcXzq.js";import"./flex-Cpv9R__z.js";import"./localized-decorator-CcBU_CAK.js";import"./popover.component-DZRsbvj9.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CjZ5drxH.js";import"./icon.component-BR3AQAfI.js";import"./context-menu.component-ClTQ3kCd.js";import"./unwrap-slots-BKNu2ecK.js";import"./ref-Ddr22G-w.js";import"./dot-grid-one-horizontal-CtwrIBdQ.js";import"./menu-heading.component-uaJ__I0A.js";import"./dropdown.component-_keX6z65.js";import"./query-async-D669dU0Y.js";import"./form-control-host.style-Bz8EO9vv.js";import"./form-control-header.component-D4W5s5Oq.js";import"./badge.component-8SLUm_cv.js";import"./flex.component-BaaDi53W.js";import"./triangle-exclamation.component-C4HqkNi0.js";import"./card.component-DkMiRKkN.js";import"./checkmark.component-Ca-HOx5N.js";import"./rbcb-toggle.template-B5t8zDU2.js";import"./chevron-bottom.component-C67dq27V.js";import"./chevron-right-small.component-CqxQcuV9.js";import"./chevron-right.component-66-Dg2b8.js";import"./input.component-DjEeONXv.js";import"./textarea.component-DQAlc7OP.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C0seU7ww.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
