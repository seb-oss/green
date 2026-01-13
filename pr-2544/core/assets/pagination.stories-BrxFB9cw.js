import{x as r}from"./iframe-BuI_3Mva.js";import"./pagination-mnYkL5IR.js";import"./card-DbQsAO0o.js";import"./text-CnP7Ryfb.js";import"./flex-CfDPvhY7.js";import"./localized-decorator-WRRZVpPy.js";import"./popover.component-wX-3OT-k.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CjanmNQ-.js";import"./icon.component-5RBNwOY8.js";import"./context-menu.component-D7deClgB.js";import"./unwrap-slots-CuRJd9cS.js";import"./ref-56KXTwPO.js";import"./dot-grid-one-horizontal-DNRku_NL.js";import"./menu-heading.component-JVW8EMUs.js";import"./dropdown.component-CyN7dhkl.js";import"./query-async-CdxZ0fl2.js";import"./form-control-host.style-CtgavwA-.js";import"./form-control-header.component-Bgm7ADf7.js";import"./badge.component-BB8O2jBS.js";import"./flex.component-eYoLGB_i.js";import"./triangle-exclamation.component-Bq7pD_SP.js";import"./card.component-BbIheG_I.js";import"./checkmark.component-n9cFHEMB.js";import"./rbcb-toggle.template-DaNDhQrE.js";import"./chevron-bottom.component-xho7-Fap.js";import"./chevron-right-small.component-B4Ycv5qv.js";import"./chevron-right.component-BsFV37ke.js";import"./input.component-CgjkxIKk.js";import"./textarea.component-QE59j3rA.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BQYP8mX0.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
