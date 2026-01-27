import{x as a}from"./iframe-C6yopx4X.js";import"./pagination-BgM5ht1P.js";import"./card-jEXrgteg.js";import"./text-DFW5w57T.js";import"./flex-cb4YjZNH.js";import"./localized-decorator-D6Rh7gKc.js";import"./popover.component-cbo_Ijzz.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-M3MMFohu.js";import"./icon.component-Dc2cITEB.js";import"./context-menu.component-DMfDUq8A.js";import"./unwrap-slots-DEIV-pCz.js";import"./ref-Dih8Q4Cx.js";import"./dot-grid-one-horizontal-C63tF1Pq.js";import"./menu-heading.component-DsScYgPk.js";import"./dropdown.component-R9_4HtAI.js";import"./query-async-C4udv9lV.js";import"./form-control-host.style-BYi3Os3g.js";import"./form-control-header.component-BYhi0Ahn.js";import"./badge.component-DO93KdEe.js";import"./flex.component-Crx3jgrH.js";import"./triangle-exclamation.component-DmCnuzny.js";import"./card.component-DahQZrjv.js";import"./checkmark.component-eW_EMrWz.js";import"./rbcb-toggle.template-BdTSvxAt.js";import"./chevron-bottom.component-OIqsn2hV.js";import"./chevron-right-small.component-DdFtzrZB.js";import"./chevron-right.component-CVo-bx2C.js";import"./input.component-CCXIzkpW.js";import"./textarea.component-DhGCmMwr.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Bn-Zfr9G.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
