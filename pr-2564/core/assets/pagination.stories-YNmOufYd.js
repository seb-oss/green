import{x as r}from"./iframe-DDb3w5d7.js";import"./pagination-CaEhBHvJ.js";import"./card-CKMzaqPQ.js";import"./text-B0SvEfg3.js";import"./flex-B-1ILSHc.js";import"./localized-decorator-DSRvGx50.js";import"./popover.component-DslyRozF.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CgP5_gcJ.js";import"./icon.component-CD2cfMZJ.js";import"./context-menu.component-CCY6klJh.js";import"./unwrap-slots-CA0oo7m3.js";import"./ref-hl5vgOqk.js";import"./dot-grid-one-horizontal-BlnJhU9y.js";import"./menu-heading.component-oA3gF1F2.js";import"./dropdown.component-MpkAKgfm.js";import"./query-async-Dw4TYh5I.js";import"./form-control-host.style-DPVY2M0L.js";import"./form-control-header.component-Nm1KI9aj.js";import"./badge.component-CB4IR_3W.js";import"./flex.component-18DRtNZW.js";import"./triangle-exclamation.component-DJ3HG2wa.js";import"./card.component-BZZVbkVx.js";import"./checkmark.component-BvgoueWp.js";import"./rbcb-toggle.template-DanuwE7G.js";import"./chevron-bottom.component-Num5oAq0.js";import"./chevron-right-small.component-p7pYZ5ud.js";import"./chevron-right.component-Dzcik_rD.js";import"./input.component-DtPwIXgq.js";import"./textarea.component-BYyUP1v8.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Bn5dhJi-.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
