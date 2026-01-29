import{x as a}from"./iframe-ivbVTJxO.js";import"./pagination-_v6Unbvw.js";import"./card-DL9HiaeH.js";import"./text-CMuIXejt.js";import"./flex-B4A_ZbgA.js";import"./localized-decorator-Dy8Y3IuT.js";import"./popover.component-B5YD9oEZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-qAO5-i7n.js";import"./icon.component-C_b0KA3_.js";import"./context-menu.component-CirfUHcB.js";import"./unwrap-slots-D_UBRg3l.js";import"./ref-CxzvHTEZ.js";import"./dot-grid-one-horizontal-Cg7WcXQ-.js";import"./menu-heading.component-CheRuLTM.js";import"./dropdown.component-B24lVbMA.js";import"./query-async-PdZjGRyo.js";import"./form-control-host.style-DndNl1AN.js";import"./form-control-header.component-t8LzGRfg.js";import"./badge.component-BghjOjIZ.js";import"./flex.component-B_f8mxUu.js";import"./triangle-exclamation.component-CB8jYMzh.js";import"./card.component-YCIPbX_E.js";import"./checkmark.component-ITYfGB-c.js";import"./rbcb-toggle.template-BJb7U6x1.js";import"./chevron-bottom.component-BtksPL3l.js";import"./chevron-right-small.component-CCUVLgqE.js";import"./chevron-right.component-BVT1kM4l.js";import"./input.component-C5rBh3_V.js";import"./textarea.component-BsX1su7z.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C4jeh2De.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
