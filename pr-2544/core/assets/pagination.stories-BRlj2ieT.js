import{x as r}from"./iframe-DOJZ23y4.js";import"./pagination-DxfSjY5R.js";import"./card-BudnkC4K.js";import"./text-Du_y_I2w.js";import"./flex-205Umq_N.js";import"./localized-decorator-BbXVxjad.js";import"./popover.component-BVV1u9fe.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DANNROAF.js";import"./icon.component-BlpY1Aja.js";import"./context-menu.component-tpteBe1B.js";import"./unwrap-slots-B9zDo62J.js";import"./ref-x54S0qmx.js";import"./dot-grid-one-horizontal-Bd1SmUh0.js";import"./menu-heading.component-DSyW6156.js";import"./dropdown.component-BfsWOHXM.js";import"./query-async-DqBxOevM.js";import"./form-control-host.style-BxnI6BzZ.js";import"./form-control-header.component-PyK2CiLc.js";import"./badge.component-68tZ5p0d.js";import"./flex.component-CiPQ6f85.js";import"./triangle-exclamation.component-DcP9TMzR.js";import"./card.component-DKolGwEG.js";import"./checkmark.component-CjUgeTzt.js";import"./rbcb-toggle.template-DjjSGjdM.js";import"./chevron-bottom.component-D_J2RiH1.js";import"./chevron-right-small.component-CNfeGAGj.js";import"./chevron-right.component-D09XzU8J.js";import"./input.component-BdJyoiEw.js";import"./textarea.component-BBvoFfWe.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CJsGbX1h.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
