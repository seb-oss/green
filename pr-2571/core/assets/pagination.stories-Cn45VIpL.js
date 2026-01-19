import{x as a}from"./iframe-DFZq2VWP.js";import"./pagination-CIADmQPM.js";import"./card-NNUU_LPK.js";import"./text-BUdUDL_i.js";import"./flex-CgDHQ9ZX.js";import"./localized-decorator-Dan9MByZ.js";import"./popover.component-Df4oTtqD.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CViC3XPB.js";import"./icon.component-BHY8V_GK.js";import"./context-menu.component-BzV5eixk.js";import"./unwrap-slots-uGz6TXMq.js";import"./ref-CwOpbij1.js";import"./dot-grid-one-horizontal-CB8-pz4Z.js";import"./menu-heading.component-D-9ZvanR.js";import"./dropdown.component-Dki5S8D9.js";import"./query-async-CM3JUfJK.js";import"./form-control-host.style-DN27_GY5.js";import"./form-control-header.component-AXbKLZOp.js";import"./badge.component-C8YW7v_1.js";import"./flex.component-DFWMQkZC.js";import"./triangle-exclamation.component-C0JQNJFX.js";import"./card.component-BBtAMepo.js";import"./checkmark.component-YWGA1cj8.js";import"./rbcb-toggle.template-Jp48QIFh.js";import"./chevron-bottom.component-_x5qAqmS.js";import"./chevron-right-small.component-COW3i9zO.js";import"./chevron-right.component-BrpOF0Hf.js";import"./input.component-mYj75r47.js";import"./textarea.component-CV7IVRDV.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DOMDS0Zr.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
