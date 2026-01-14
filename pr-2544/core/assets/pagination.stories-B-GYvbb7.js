import{x as r}from"./iframe-CqMRxf4t.js";import"./pagination-BTPEWIJF.js";import"./card-DmvFaZ-3.js";import"./text-CB7_rb84.js";import"./flex-DFeOhYoa.js";import"./localized-decorator-BUOryX8v.js";import"./popover.component-C443CdSQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BeTsQhGl.js";import"./icon.component-DG8vwsfl.js";import"./context-menu.component-BsUeFrkN.js";import"./unwrap-slots-BTt_Zr5R.js";import"./ref-Dncwfagt.js";import"./dot-grid-one-horizontal-CippJVBX.js";import"./menu-heading.component-DeRQB5el.js";import"./dropdown.component-CXdsU2jn.js";import"./query-async-a7Ay_F5d.js";import"./form-control-host.style-Z2Cf2-m4.js";import"./form-control-header.component-BdN3Fegb.js";import"./badge.component-xzcpzSW_.js";import"./flex.component-D01Szg88.js";import"./triangle-exclamation.component-BZ96A-0s.js";import"./card.component-C5zEme9g.js";import"./checkmark.component-CsZgBC2L.js";import"./rbcb-toggle.template-C2Htw1nK.js";import"./chevron-bottom.component-CrtoyzLd.js";import"./chevron-right-small.component-Dezzkquk.js";import"./chevron-right.component-CRrajsRZ.js";import"./input.component-9qwkVZ3A.js";import"./textarea.component-Q8P9pFcr.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-EquihxG1.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
