import{x as a}from"./iframe-Bco6RhSF.js";import"./pagination-BWKA5oxC.js";import"./card-C8KN8YZ9.js";import"./text-D0_BBeE3.js";import"./flex-hlHbYuYh.js";import"./localized-decorator-CR2PmnBm.js";import"./popover.component-BwXNAIMk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Wgk3m4Q6.js";import"./icon.component-Csrpw-lX.js";import"./context-menu.component-DZRtMifp.js";import"./unwrap-slots-HLkw7L9g.js";import"./ref-pmhfsp5R.js";import"./dot-grid-one-horizontal-C62gqINX.js";import"./menu-heading.component-Bl-9dBsQ.js";import"./dropdown.component-BKCGQmZo.js";import"./query-async-D1WKx4eb.js";import"./form-control-host.style-cU88byQR.js";import"./form-control-header.component-CJaDfMgs.js";import"./badge.component-FCthXmj1.js";import"./flex.component-Cm2le16w.js";import"./triangle-exclamation.component-lK1rOnsM.js";import"./card.component-DWwOkFKS.js";import"./checkmark.component-DFzR7Pxw.js";import"./rbcb-toggle.template-fY0rAVoD.js";import"./chevron-bottom.component-C1kA2Rc3.js";import"./chevron-right-small.component-DgbrIMut.js";import"./chevron-right.component-Z_E_r9Pd.js";import"./input.component-BvC-Oikd.js";import"./textarea.component-DGzUM65t.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B_G-Yi4l.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
