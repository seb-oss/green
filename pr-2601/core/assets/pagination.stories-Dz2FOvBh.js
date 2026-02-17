import{x as a}from"./iframe-B9-JWcQZ.js";import"./pagination-CR2ORQUP.js";import"./card-BI2jVI3U.js";import"./text-DlBTdAx1.js";import"./flex-DQiX8vKb.js";import"./localized-decorator-iEOzc6E3.js";import"./popover.component-SHtaSH6i.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-xQ-AhMCD.js";import"./icon.component-CYx4zgop.js";import"./context-menu.component-BZIAaIeW.js";import"./unwrap-slots-DVEiINUO.js";import"./ref-Cg1lMp3d.js";import"./dot-grid-one-horizontal-rOcMAh57.js";import"./menu-heading.component-BTkS-uGp.js";import"./dropdown.component--jVzYVav.js";import"./query-async-aLAkRcbT.js";import"./form-control-host.style-CMV431zo.js";import"./form-control-header.component-DemSV4kG.js";import"./badge.component-CXbWycvp.js";import"./flex.component-Bn7BNe8a.js";import"./triangle-exclamation.component-BVJ2cWtG.js";import"./card.component-D5Ge48lT.js";import"./checkmark.component-sWwaGEhi.js";import"./rbcb-toggle.template-BY5Gvj9-.js";import"./chevron-bottom.component-Bt9bWNz8.js";import"./chevron-right-small.component-DhJeMu9F.js";import"./chevron-right.component-BTTw7tJ9.js";import"./input.component-CgZ0Z7lY.js";import"./textarea.component-CtOGVklu.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Cd6ZlkfV.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
