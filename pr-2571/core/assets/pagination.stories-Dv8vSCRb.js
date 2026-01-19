import{x as a}from"./iframe-Bs7dWGrf.js";import"./pagination-Bh3wAZhU.js";import"./card-DfZnDjcF.js";import"./text-BNn59ZVb.js";import"./flex-B_bhn7LZ.js";import"./localized-decorator-ChgUp2NR.js";import"./popover.component-BBUhdmLZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BbvrmRvy.js";import"./icon.component-Rskfci6k.js";import"./context-menu.component-CeoRJXzi.js";import"./unwrap-slots-J51lp1Fw.js";import"./ref-BgBQWSkV.js";import"./dot-grid-one-horizontal-BD0-yB3S.js";import"./menu-heading.component-DE0QHvmH.js";import"./dropdown.component-D42Q61SB.js";import"./query-async-5Iv8BDB1.js";import"./form-control-host.style-CAe_dWvk.js";import"./form-control-header.component-BuofbzHq.js";import"./badge.component-CpMx3oxv.js";import"./flex.component-Dqm4oVBu.js";import"./triangle-exclamation.component-YpdPYQCy.js";import"./card.component--9p-OJX3.js";import"./checkmark.component-BELo2V_g.js";import"./rbcb-toggle.template-B1CYoWCF.js";import"./chevron-bottom.component-BfJ_Dz1W.js";import"./chevron-right-small.component-CCVyFqdo.js";import"./chevron-right.component-B7d0vDpO.js";import"./input.component-QkjaoBqC.js";import"./textarea.component-BpAQWxTh.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-TQR90ZrP.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
