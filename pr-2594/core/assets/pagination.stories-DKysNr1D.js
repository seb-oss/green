import{x as a}from"./iframe-B5XfIKHB.js";import"./pagination-BRHNth1Y.js";import"./card-BWPS_XN9.js";import"./text-DJtXkNo6.js";import"./flex-CwsvSK0H.js";import"./localized-decorator-C2Lx7U-P.js";import"./popover.component-UorKMUgR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CXwO99n7.js";import"./icon.component-B3TdVrm3.js";import"./context-menu.component-DFvkPj8A.js";import"./unwrap-slots-N2-XD1XG.js";import"./ref-D2kl9lm_.js";import"./dot-grid-one-horizontal-BdIYeWDW.js";import"./menu-heading.component-CPTfaidA.js";import"./dropdown.component-1VU8Hqy1.js";import"./query-async-BOHmAeau.js";import"./form-control-host.style-CbofzfBd.js";import"./form-control-header.component-DsjCfaae.js";import"./badge.component-hhMOH56Z.js";import"./flex.component-DV0l-Z1E.js";import"./triangle-exclamation.component-8r66r9on.js";import"./card.component-CxWAuNko.js";import"./checkmark.component-CYgKs90B.js";import"./rbcb-toggle.template-B0z_tn6z.js";import"./chevron-bottom.component-D9hvDDKD.js";import"./chevron-right-small.component-CBhsjAke.js";import"./chevron-right.component-DnMZppbj.js";import"./input.component-x2pl1vhg.js";import"./textarea.component-DCzlXMUk.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-MX8jWe3a.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
