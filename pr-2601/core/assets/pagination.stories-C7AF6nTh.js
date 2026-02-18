import{x as a}from"./iframe-CQ6C5171.js";import"./pagination-BgmjQo9p.js";import"./card-BZV32SAu.js";import"./text-CszMod1C.js";import"./flex-CPbiCARk.js";import"./localized-decorator-Dv1M8wEZ.js";import"./popover.component-CtKQiClK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dvrn8N-F.js";import"./icon.component-DN5ag0d3.js";import"./context-menu.component-DbKBzRdH.js";import"./unwrap-slots-CFg4IoNk.js";import"./ref-NAIIJLYI.js";import"./dot-grid-one-horizontal-DjwrX6HI.js";import"./menu-heading.component-B6fRrMiQ.js";import"./dropdown.component-Do81YfNH.js";import"./query-async-DAnI5z5h.js";import"./form-control-host.style-DdStfeXc.js";import"./form-control-header.component-D-oZMTqh.js";import"./badge.component-DTrdNATK.js";import"./flex.component-DFXFpgUj.js";import"./triangle-exclamation.component-CgvfOWt_.js";import"./card.component-C6dS-oCl.js";import"./checkmark.component-C0sGJdQl.js";import"./rbcb-toggle.template-wtX0uZhO.js";import"./chevron-bottom.component-DoOuMjBM.js";import"./chevron-right-small.component-DCy-tgE_.js";import"./chevron-right.component-CZsC5BFd.js";import"./input.component-D-VAUhLz.js";import"./textarea.component-Dkkfbt_U.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DVh8uprT.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
