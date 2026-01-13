import{x as r}from"./iframe-hOF0QXhq.js";import"./pagination-ywuYMSG7.js";import"./card-BmMytm5A.js";import"./text-5qFwuNkx.js";import"./flex-CyDx8GLH.js";import"./localized-decorator-Bg9TnhtJ.js";import"./popover.component-_RgAKYqt.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BtSanF3R.js";import"./icon.component-10D176rT.js";import"./context-menu.component-DZEO9l5M.js";import"./unwrap-slots-BZYFDt5d.js";import"./ref-Dn3iUkse.js";import"./dot-grid-one-horizontal-BSf34gBr.js";import"./menu-heading.component-D_A7p4V6.js";import"./dropdown.component--TK6FBWg.js";import"./query-async-BkQQwkHw.js";import"./form-control-host.style-Z_Xsnuy-.js";import"./form-control-header.component-Eg4MEFdJ.js";import"./badge.component-DHoRWkqn.js";import"./flex.component-CBkQFOb4.js";import"./triangle-exclamation.component-C-OuuYdS.js";import"./card.component-CKkLG6yj.js";import"./checkmark.component-D_sDeeKc.js";import"./rbcb-toggle.template-DOKNCFpi.js";import"./chevron-bottom.component-DdzaduyI.js";import"./chevron-right-small.component-CTOhsTs2.js";import"./chevron-right.component-C2wysJWd.js";import"./input.component-DRHilbIJ.js";import"./textarea.component-Bd9Cejzq.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-SVwKX1G6.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
