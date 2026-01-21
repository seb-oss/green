import{x as a}from"./iframe-BQ8Xjw8d.js";import"./pagination-S66VHDJA.js";import"./card-BYV7RZUJ.js";import"./text-B0enSeDh.js";import"./flex-4r-oBX8S.js";import"./localized-decorator-Dv8nsHvA.js";import"./popover.component-BXOkNRrJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DnL56KOG.js";import"./icon.component-BVf0S7fu.js";import"./context-menu.component-Cj5IIsXh.js";import"./unwrap-slots-BRR1URhB.js";import"./ref-CEPs8A2F.js";import"./dot-grid-one-horizontal-DbFsz7gH.js";import"./menu-heading.component-D8qOEzL5.js";import"./dropdown.component-BkdvjRzt.js";import"./query-async-B4id_wJ0.js";import"./form-control-host.style-eLmB68Wv.js";import"./form-control-header.component-DVTPcJ-_.js";import"./badge.component-D-cDdBON.js";import"./flex.component--lZWSZDD.js";import"./triangle-exclamation.component-CyF5Wldf.js";import"./card.component-CHHobmy3.js";import"./checkmark.component-DrD5dzjU.js";import"./rbcb-toggle.template-D6ARypqG.js";import"./chevron-bottom.component-CDpf4dKA.js";import"./chevron-right-small.component-NOG2LvU0.js";import"./chevron-right.component-Dpkawji3.js";import"./input.component-DtNP_CLW.js";import"./textarea.component-_eEFpHx6.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-JpAfgxcb.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
