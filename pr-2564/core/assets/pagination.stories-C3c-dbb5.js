import{x as r}from"./iframe-DKGp6tbF.js";import"./pagination-CroEQ_8C.js";import"./card-wmZYKVU6.js";import"./text-CSq6BBmh.js";import"./flex-E-ylyy_d.js";import"./localized-decorator-CRfYRl6h.js";import"./popover.component-B74XK85v.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CjzBIs-o.js";import"./icon.component-DGVk6XJy.js";import"./context-menu.component-C9wuE68U.js";import"./unwrap-slots-C5fuViZI.js";import"./ref-DalgA91g.js";import"./dot-grid-one-horizontal-DNNrkVKe.js";import"./menu-heading.component-COf7Gx0b.js";import"./dropdown.component-CLtQ9P4A.js";import"./query-async-B7bF_jEv.js";import"./form-control-host.style-CPhYF0Ty.js";import"./form-control-header.component-BTgBjYlm.js";import"./badge.component-D_4hXUkY.js";import"./flex.component-GdH1hCnE.js";import"./triangle-exclamation.component-CplQt61S.js";import"./card.component-CiyntDtf.js";import"./checkmark.component-kdUOqK4W.js";import"./rbcb-toggle.template-DSctgtSb.js";import"./chevron-bottom.component-C_TYGvB4.js";import"./chevron-right-small.component-BHu6tmlZ.js";import"./chevron-right.component-DeCZjbiM.js";import"./input.component-DEsqOCLP.js";import"./textarea.component-DQkYINyL.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DsYNgk23.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
