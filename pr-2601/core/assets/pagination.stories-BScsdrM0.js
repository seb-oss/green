import{x as a}from"./iframe-DuvJJPsW.js";import"./pagination-C9bX7Fjg.js";import"./card-BOdU0Smv.js";import"./text-CNqf1oDO.js";import"./flex-CnOBYc0X.js";import"./localized-decorator-xYYjw7_4.js";import"./popover.component-C1xFQGTT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CVu18ij_.js";import"./icon.component-3WNa7gns.js";import"./context-menu.component-DxqAVhh6.js";import"./unwrap-slots-D0tzxiDM.js";import"./ref-DbDUt8Hp.js";import"./dot-grid-one-horizontal-CaYU2aYd.js";import"./menu-heading.component-TLOMQcwC.js";import"./dropdown.component-BTB24xUJ.js";import"./query-async-QMn40S2Z.js";import"./form-control-host.style-z3OmOgRf.js";import"./form-control-header.component-BdOCn00k.js";import"./badge.component-BpHM24cZ.js";import"./flex.component-Bqj0RcrB.js";import"./triangle-exclamation.component-G5VeGOpV.js";import"./card.component-DGQRvjJW.js";import"./checkmark.component-0GF1xo9w.js";import"./rbcb-toggle.template-9VHv85pH.js";import"./chevron-bottom.component-3qeEjqYA.js";import"./chevron-right-small.component-BZ05WYUS.js";import"./chevron-right.component-VMMkhwEJ.js";import"./input.component-SMDqqBzr.js";import"./textarea.component-CGFz8xXZ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BCJ4fFJf.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
