import{x as r}from"./iframe-R-UOI5Ct.js";import"./pagination-rA1vUxwk.js";import"./card-Do8AxK4z.js";import"./text-DSWNST7C.js";import"./flex-CB30nh8h.js";import"./localized-decorator-pYJBvnT-.js";import"./popover.component-DROGwjFC.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CfsKXyHM.js";import"./icon.component-DkM0gJ3v.js";import"./context-menu.component-BLjLSMcv.js";import"./unwrap-slots-CjsSP3WS.js";import"./ref-CrpU28mu.js";import"./dot-grid-one-horizontal-BAiDehKu.js";import"./menu-heading.component-Dk0SuUap.js";import"./dropdown.component-lxW3qsHp.js";import"./query-async-xnEuN8FF.js";import"./form-control-host.style-IAE_TVfb.js";import"./form-control-header.component-FoZzj2_c.js";import"./badge.component-D4pVHao9.js";import"./flex.component-Dx7fs3aT.js";import"./triangle-exclamation.component-eNxex7bN.js";import"./card.component-CWlpHV50.js";import"./checkmark.component-B9PxApyq.js";import"./rbcb-toggle.template-wxfey3Bh.js";import"./chevron-bottom.component-dliDxXlV.js";import"./chevron-right-small.component-Ch3mCc9M.js";import"./chevron-right.component-DPjXbPJs.js";import"./input.component-DWo6PtQo.js";import"./textarea.component-DgDfpqVb.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-gzHz-hfz.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
