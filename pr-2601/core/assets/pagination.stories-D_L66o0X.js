import{x as a}from"./iframe-BGqbqd8h.js";import"./pagination-D8-dVZo6.js";import"./card-CQASjhSQ.js";import"./text-Qt3Pb9-c.js";import"./flex-Dp-86o0X.js";import"./localized-decorator-CZpYH3pp.js";import"./popover.component-CiOdcKGa.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DRQk991G.js";import"./icon.component-B9o9Bgs_.js";import"./context-menu.component-Df1k1d1Z.js";import"./unwrap-slots-VccFsCol.js";import"./ref-BuJ8qdGF.js";import"./dot-grid-one-horizontal-D6Kb5Du9.js";import"./menu-heading.component-CLfWRJ0G.js";import"./dropdown.component-BgLSB8BE.js";import"./query-async-sXK7zbxy.js";import"./form-control-host.style-Mz2dZFOh.js";import"./form-control-header.component-CVmzNQWI.js";import"./badge.component-BMZKX0Nx.js";import"./flex.component-5Rea7j4r.js";import"./triangle-exclamation.component-Bt9k34gv.js";import"./card.component-DFTXL_Rs.js";import"./checkmark.component-CndTtyW9.js";import"./rbcb-toggle.template-DBEKuSI6.js";import"./chevron-bottom.component-BbyIDVMU.js";import"./chevron-right-small.component-Ct4R8uuD.js";import"./chevron-right.component-UdsLkm7n.js";import"./input.component-CCh5S8vE.js";import"./textarea.component-BObyMc5N.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-7b6NmtYf.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
