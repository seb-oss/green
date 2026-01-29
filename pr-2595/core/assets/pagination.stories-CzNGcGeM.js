import{x as a}from"./iframe-BOpMewhg.js";import"./pagination-TxN2jmfn.js";import"./card-BOJJk3in.js";import"./text-Chqa-7h0.js";import"./flex-IKmaGDmd.js";import"./localized-decorator-wGmHp73-.js";import"./popover.component-D23Z55Xh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BajC_76i.js";import"./icon.component-c7RjI47s.js";import"./context-menu.component-L3--GouP.js";import"./unwrap-slots-q2i_mraR.js";import"./ref-DdQ_JXNw.js";import"./dot-grid-one-horizontal-B9oczEO6.js";import"./menu-heading.component-CtNmP9Td.js";import"./dropdown.component-Dp5R0qI6.js";import"./query-async-DX9zlT2u.js";import"./form-control-host.style-DqzLzqb8.js";import"./form-control-header.component-Dk2SIutn.js";import"./badge.component-lLxZyYDo.js";import"./flex.component-CiLmuYhc.js";import"./triangle-exclamation.component-Bk_n8iVe.js";import"./card.component-CaDj0kgd.js";import"./checkmark.component-D3llMa0p.js";import"./rbcb-toggle.template-CRSkUznp.js";import"./chevron-bottom.component-K7QtWJYq.js";import"./chevron-right-small.component-BdC7WpsK.js";import"./chevron-right.component-CEGW8eew.js";import"./input.component-D6c0Plz8.js";import"./textarea.component-DYX0Mbez.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BOZ0_len.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
