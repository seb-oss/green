import{x as r}from"./iframe-B1vn8YXe.js";import"./pagination-uFilUIM7.js";import"./card-B7tt4U0J.js";import"./text-uaQIhtX6.js";import"./flex-CGtGE8o9.js";import"./localized-decorator-BdxueW-j.js";import"./popover.component-DoozZEIJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-uYxDBT0P.js";import"./icon.component-DRbd6nhQ.js";import"./context-menu.component-Bm7Ji6Ia.js";import"./unwrap-slots-CZaIt_jG.js";import"./ref-DKN74vO1.js";import"./dot-grid-one-horizontal-cfb2_xmr.js";import"./menu-heading.component-cjGFVCjJ.js";import"./dropdown.component-QchkDKK3.js";import"./query-async-B9vJ_jZ8.js";import"./form-control-host.style-DXuMCPKj.js";import"./form-control-header.component-BbohXbvt.js";import"./badge.component-PYCdsreq.js";import"./flex.component-zgxE1oym.js";import"./triangle-exclamation.component-BHeD1EO-.js";import"./card.component-ByvfZq7l.js";import"./checkmark.component-DzF2rl0h.js";import"./rbcb-toggle.template-CYrKYovl.js";import"./chevron-bottom.component-C5j4RYM-.js";import"./chevron-right-small.component-D7PTK5l5.js";import"./chevron-right.component-Di7OjHum.js";import"./input.component-f9nLwtRz.js";import"./textarea.component-hsVQQGiu.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BwBH7Z3x.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
          @gds-page-change=${e}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},z=["Default"];export{k as Default,z as __namedExportsOrder,j as default};
