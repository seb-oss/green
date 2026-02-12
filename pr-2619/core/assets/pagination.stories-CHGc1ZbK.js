import{x as a}from"./iframe-CFqsouBd.js";import"./pagination-D20nqP1q.js";import"./card-DEDbIsel.js";import"./text-CKpd57ZT.js";import"./flex-D96bEdk7.js";import"./localized-decorator-CrkrOgMj.js";import"./popover.component-BP-p6y6g.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DaeMSyXp.js";import"./icon.component-C4uR9Pan.js";import"./context-menu.component-CkffUH1G.js";import"./unwrap-slots-CVJYM5ig.js";import"./ref-hPvsANdd.js";import"./dot-grid-one-horizontal-DXH-vbCV.js";import"./menu-heading.component-DDixvslx.js";import"./dropdown.component-t1UdhdVt.js";import"./query-async-C_zNZPUA.js";import"./form-control-host.style-DVoGQNQ-.js";import"./form-control-header.component-DwMFiINn.js";import"./badge.component-Bg2xgNEL.js";import"./flex.component-DW9Blz64.js";import"./triangle-exclamation.component-BWoyINbA.js";import"./card.component-C-3XsPe0.js";import"./checkmark.component-BrcLlYHp.js";import"./rbcb-toggle.template-DM0CGBDN.js";import"./chevron-bottom.component-COVRAEMq.js";import"./chevron-right-small.component-CeDrGTjV.js";import"./chevron-right.component-XHQdH7_v.js";import"./input.component-cKnb4Cdf.js";import"./textarea.component-DyFXM5Sy.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BKWNFBB3.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
