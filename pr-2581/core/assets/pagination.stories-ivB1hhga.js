import{x as a}from"./iframe-BvJ9qi3m.js";import"./pagination-B7seTU8D.js";import"./card-D0gGr3w1.js";import"./text-BrMLrS7G.js";import"./flex-Ci9-TNGk.js";import"./localized-decorator-yX1kdmUL.js";import"./popover.component-DaoLQkhy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Yr8S-wkI.js";import"./icon.component-HY8skLgu.js";import"./context-menu.component-CDT-izy0.js";import"./unwrap-slots-Dpp5OLBx.js";import"./ref-BSgoetkx.js";import"./dot-grid-one-horizontal-DlPoYP_k.js";import"./menu-heading.component-CrRl1wkC.js";import"./dropdown.component-Bew90JJJ.js";import"./query-async-BHcjGrBE.js";import"./form-control-host.style-D_HUnaog.js";import"./form-control-header.component-FtaGESf-.js";import"./badge.component-BsyDWdgM.js";import"./flex.component-D0FPoO6_.js";import"./triangle-exclamation.component-CQsyXOD_.js";import"./card.component-Bekm9NNJ.js";import"./checkmark.component-CwZ40GRR.js";import"./rbcb-toggle.template-DHd-Bp_2.js";import"./chevron-bottom.component-ykSuG9hw.js";import"./chevron-right-small.component-GzHdvND2.js";import"./chevron-right.component-DJex8r26.js";import"./input.component-C9qJm53i.js";import"./textarea.component-46oxajJo.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B98YBXGb.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
