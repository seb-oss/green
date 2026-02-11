import{x as a}from"./iframe-CQq7046-.js";import"./pagination-Br1jiA0t.js";import"./card-moc6iWiJ.js";import"./text-C-9GmmKD.js";import"./flex-CF_tJaOy.js";import"./localized-decorator-CbvQAhQB.js";import"./popover.component-DIiUus2u.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Bwr3kRkD.js";import"./icon.component-DyWYKULO.js";import"./context-menu.component-DLVoPoC5.js";import"./unwrap-slots-CYlrFtb7.js";import"./ref-CjOSATE7.js";import"./dot-grid-one-horizontal-Bzrm6JMB.js";import"./menu-heading.component-D1xVGKsR.js";import"./dropdown.component-iK0P77OZ.js";import"./query-async-CcorEOtD.js";import"./form-control-host.style-mE3f1gJn.js";import"./form-control-header.component-C_gB3-2W.js";import"./badge.component-D_3kNL1E.js";import"./flex.component-CxtwwoO6.js";import"./triangle-exclamation.component-D3KzfzTi.js";import"./card.component-Cx6vq4fa.js";import"./checkmark.component-DSXUKqrT.js";import"./rbcb-toggle.template-BOcAtw3m.js";import"./chevron-bottom.component-CYASL9OQ.js";import"./chevron-right-small.component-iEyXz1hF.js";import"./chevron-right.component-DrJ95scj.js";import"./input.component-DwOIb8Ip.js";import"./textarea.component-B3DUZeyE.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D2yvnV8Q.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
