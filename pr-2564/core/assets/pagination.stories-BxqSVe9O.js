import{x as r}from"./iframe-Dlk9HGlt.js";import"./pagination-BCaei598.js";import"./card-lWrALUqK.js";import"./text-CbxdQR_-.js";import"./flex-BMB7yFFS.js";import"./localized-decorator-CvGVJdnX.js";import"./popover.component-DlvXccuF.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-SWtRA0Ps.js";import"./icon.component-961nimN5.js";import"./context-menu.component-iJGsQ6RX.js";import"./unwrap-slots-C87Kyzet.js";import"./ref-DGGtWZkl.js";import"./dot-grid-one-horizontal-sXtS7guT.js";import"./menu-heading.component-CWKypds7.js";import"./dropdown.component-CWc4rcTj.js";import"./query-async-BFYJcPJX.js";import"./form-control-host.style-lmFa04ba.js";import"./form-control-header.component-Cu2OpOwm.js";import"./badge.component-Bopfhuuf.js";import"./flex.component-BLhwhawA.js";import"./triangle-exclamation.component-ZmIKszHF.js";import"./card.component-lSzL9WaE.js";import"./checkmark.component-BxUHIKLe.js";import"./rbcb-toggle.template-BoX28PFm.js";import"./chevron-bottom.component-B0ucCfNQ.js";import"./chevron-right-small.component-NVEvRvHn.js";import"./chevron-right.component-fTF5gatX.js";import"./input.component-qXZa42VL.js";import"./textarea.component-Cf9nHBKk.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-yCm1dJ4e.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
          @gds-page-change=${e}
          @gds-rows-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}},z=["Default"];export{k as Default,z as __namedExportsOrder,j as default};
