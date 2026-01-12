import{x as r}from"./iframe-CPczCUo-.js";import"./pagination-Czol2aoa.js";import"./card-Dcw4VhlC.js";import"./text-CmL7eINf.js";import"./flex-BDBlis32.js";import"./localized-decorator-DGBuiHzn.js";import"./popover.component-LxFOtxzO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-QYZ17nsG.js";import"./icon.component-Cq2Pzy0j.js";import"./context-menu.component-BZj2I9oY.js";import"./unwrap-slots-CAxlB3Q3.js";import"./ref-YhhlN1ET.js";import"./dot-grid-one-horizontal-C-Bybcpz.js";import"./menu-heading.component-D2JHeG_X.js";import"./dropdown.component-Bn-Ryu23.js";import"./query-async-DL9niDG8.js";import"./form-control-host.style-Dpb460lW.js";import"./form-control-header.component-Ch3RAMa7.js";import"./badge.component-Bfkh2LqK.js";import"./flex.component-BjCQub8k.js";import"./triangle-exclamation.component-MFmsziZI.js";import"./card.component-C9FLvbvX.js";import"./checkmark.component-CBuN5FYj.js";import"./rbcb-toggle.template-DaJS27Ke.js";import"./chevron-bottom.component-BpX0uoYU.js";import"./chevron-right-small.component-Cd4FeunS.js";import"./chevron-right.component-Db-7hrHc.js";import"./input.component-wt73QZNA.js";import"./textarea.component-BlVxu9Ev.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CEojdXoX.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
