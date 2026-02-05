import{x as a}from"./iframe-BCOtacgH.js";import"./pagination-B6cbF-Hi.js";import"./card-nZssAVCL.js";import"./text-oQdNJpzm.js";import"./flex-Cs0TqMWW.js";import"./localized-decorator-CIpPe7g5.js";import"./popover.component-BCAZnbzh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CrzDKx9b.js";import"./icon.component-c9NQRHfL.js";import"./context-menu.component-B37W68ND.js";import"./unwrap-slots-BS9Pw_Bk.js";import"./ref-BWiAg8y6.js";import"./dot-grid-one-horizontal-DJ8okQQR.js";import"./menu-heading.component-PZ5CnUAa.js";import"./dropdown.component-B3rlHAqj.js";import"./query-async-D0SVm6bL.js";import"./form-control-host.style-DF6TFAHR.js";import"./form-control-header.component-Bj2gYdEo.js";import"./badge.component-DBOqF6t3.js";import"./flex.component-DluP1aJt.js";import"./triangle-exclamation.component-CqQT7Eou.js";import"./card.component-Vxn5B0q8.js";import"./checkmark.component-BZie8MS8.js";import"./rbcb-toggle.template-CpXC2UOn.js";import"./chevron-bottom.component-DGO1CSpm.js";import"./chevron-right-small.component-BJz-2rrT.js";import"./chevron-right.component-BigCkDud.js";import"./input.component-CbAau3HC.js";import"./textarea.component-Dt1prFUZ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B4ATXj5_.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
