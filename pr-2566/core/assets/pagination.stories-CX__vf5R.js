import{x as r}from"./iframe-BQQroKqS.js";import"./pagination-CG06bMkX.js";import"./card-lbjjOHp9.js";import"./text-DuJw4k1K.js";import"./flex-AsELAJlj.js";import"./localized-decorator-CI8jsUR1.js";import"./popover.component-C9W5Jwe2.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CLHea3N6.js";import"./icon.component-CIBcNMH6.js";import"./context-menu.component-BfDY3B3O.js";import"./unwrap-slots-Dn5lYdo2.js";import"./ref-WluDU2rw.js";import"./dot-grid-one-horizontal-dCewJo35.js";import"./menu-heading.component-C56s1uiT.js";import"./dropdown.component-BSDt2ntF.js";import"./query-async-DvRQ1_SU.js";import"./form-control-host.style-BvG71WkV.js";import"./form-control-header.component-BB2LzGxg.js";import"./badge.component-BXHBr3D9.js";import"./flex.component-7T4du4Zy.js";import"./triangle-exclamation.component-BSJKkn0y.js";import"./card.component-CqlmFwU6.js";import"./checkmark.component-j9gXlqgl.js";import"./rbcb-toggle.template-AgKXFyOB.js";import"./chevron-bottom.component-eOWu3Mhh.js";import"./chevron-right-small.component-BhVbKFVu.js";import"./chevron-right.component-BQd7GJKB.js";import"./input.component-Ci4_KES6.js";import"./textarea.component-Ankn8Az-.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C_Gvzbyq.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
