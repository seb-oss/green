import{x as a}from"./iframe-Cg-uRGyf.js";import"./pagination-DoIixQ0f.js";import"./card-C42GUX1E.js";import"./text-BMteJ2zy.js";import"./flex-DMo5xvlQ.js";import"./localized-decorator-CzsJr5KX.js";import"./popover.component-Cw1WA-tO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C1ztOO65.js";import"./icon.component-BnwNMKHB.js";import"./context-menu.component-B0-N64Gf.js";import"./unwrap-slots-CHUlCgbm.js";import"./ref-DIVWHMuw.js";import"./dot-grid-one-horizontal-BQXSsD0c.js";import"./menu-heading.component-DoRAI7nX.js";import"./dropdown.component-DzempDK7.js";import"./query-async-CkyB6I37.js";import"./form-control-host.style-DTTP2Qy0.js";import"./form-control-header.component-INLnmZWo.js";import"./badge.component-Dxd1vt4f.js";import"./flex.component-DTgxc_ij.js";import"./triangle-exclamation.component-Ch8gMZqz.js";import"./card.component-Bp9JCaYI.js";import"./checkmark.component-DjDjAcmF.js";import"./rbcb-toggle.template-CX6IQ43u.js";import"./chevron-bottom.component-Dvl7g3VO.js";import"./chevron-right-small.component-DVreYWOj.js";import"./chevron-right.component-CsTDfmIQ.js";import"./input.component-BRvO8urI.js";import"./textarea.component-ByONCzRK.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CAa_femO.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
