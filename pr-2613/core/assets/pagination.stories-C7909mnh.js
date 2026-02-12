import{x as a}from"./iframe-NCz73qay.js";import"./pagination-YTmJUZCh.js";import"./card-LVAbUMcb.js";import"./text-BfBjpbow.js";import"./flex-DshQ0Vz1.js";import"./localized-decorator-C5ligKZT.js";import"./popover.component-e7EQGf9e.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-b-I7GJb2.js";import"./icon.component-CTR8jJcj.js";import"./context-menu.component-4h7Y43jw.js";import"./unwrap-slots-BPzla03k.js";import"./ref-D0tBR-H0.js";import"./dot-grid-one-horizontal-afFpcLRu.js";import"./menu-heading.component-DdegQC1v.js";import"./dropdown.component-C410EKOc.js";import"./query-async-_CqqRNsH.js";import"./form-control-host.style-BCeTBtt0.js";import"./form-control-header.component-BmkdQjMr.js";import"./badge.component-C5TmWNFX.js";import"./flex.component-CD_9lWUd.js";import"./triangle-exclamation.component-8Z38ZavA.js";import"./card.component-DjJvOxIE.js";import"./checkmark.component-BwxafSfA.js";import"./rbcb-toggle.template-ChUG7UvJ.js";import"./chevron-bottom.component-BRPLdPfd.js";import"./chevron-right-small.component-k2SVUSXf.js";import"./chevron-right.component-C0k0iLF1.js";import"./input.component-rTXeTXOl.js";import"./textarea.component-WgEMojSd.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DtvMYO7g.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
