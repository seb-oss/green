import{x as a}from"./iframe-BjnJkqwv.js";import"./pagination-DQz3fOcU.js";import"./card-CqrK2LMs.js";import"./text-DZoM2kOk.js";import"./flex-ClMKmKgJ.js";import"./localized-decorator-a78JXZiA.js";import"./popover.component-DOMOHAY4.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dn4ni-OB.js";import"./icon.component-CfBnFFAe.js";import"./context-menu.component-B5Ez_6Ly.js";import"./unwrap-slots-CcvspIou.js";import"./ref-CgmV0QwQ.js";import"./dot-grid-one-horizontal-BRgTdOBN.js";import"./menu-heading.component-DRLtB96W.js";import"./dropdown.component-C_rO_kCK.js";import"./query-async-CRo97lGl.js";import"./form-control-host.style-CEnnvJAb.js";import"./form-control-header.component-D_dahNtb.js";import"./badge.component-DER1NVRx.js";import"./flex.component-DYRxf4FB.js";import"./triangle-exclamation.component-CvGBSwO1.js";import"./card.component-CNRv87Ji.js";import"./checkmark.component-DS5LjRpw.js";import"./rbcb-toggle.template-CKiIJmEB.js";import"./chevron-bottom.component-bZzMooNd.js";import"./chevron-right-small.component-C0nQBumv.js";import"./chevron-right.component-DH4cr6NG.js";import"./input.component-C3Vkao3e.js";import"./textarea.component-BhGwS7JA.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Ck7kK6xS.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
