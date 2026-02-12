import{x as a}from"./iframe-CDmSi8W6.js";import"./pagination-CYTXLbPW.js";import"./card-B8ewlVFS.js";import"./text-Dm7bqOmx.js";import"./flex-t22LT-cv.js";import"./localized-decorator-CV3CwOWD.js";import"./popover.component-DXvOnWwT.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C3r-1Q2S.js";import"./icon.component-ZJ0CFeFx.js";import"./context-menu.component-DDnGTfe7.js";import"./unwrap-slots-ClX7HkZI.js";import"./ref-B85JCLfN.js";import"./dot-grid-one-horizontal-CT_2PyCL.js";import"./menu-heading.component-Cs2ERqSg.js";import"./dropdown.component-Bd2pFs4F.js";import"./query-async-C8aIsxTH.js";import"./form-control-host.style-DAxOIUHW.js";import"./form-control-header.component-DAG67txe.js";import"./badge.component-5jGHgOF2.js";import"./flex.component-vI19mTc0.js";import"./triangle-exclamation.component-GhY_4JgD.js";import"./card.component-D1FWN4fX.js";import"./checkmark.component-Be44zSMi.js";import"./rbcb-toggle.template-Duo2J5hV.js";import"./chevron-bottom.component-CVtWNg5m.js";import"./chevron-right-small.component-Cz01gZxE.js";import"./chevron-right.component-6U39xlui.js";import"./input.component-DFKWHerL.js";import"./textarea.component-B057Bv9n.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-9sG9NIyK.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
