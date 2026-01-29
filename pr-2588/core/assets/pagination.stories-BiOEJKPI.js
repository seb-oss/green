import{x as a}from"./iframe-CV4VHgIs.js";import"./pagination-BA7fU_t7.js";import"./card-DkcJ51CH.js";import"./text-Ws9LobyT.js";import"./flex-BOWnRG1i.js";import"./localized-decorator-BYopzF03.js";import"./popover.component-eRyrg-hO.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BxQZD6Dp.js";import"./icon.component-XFsSxgDJ.js";import"./context-menu.component-C77dfBZA.js";import"./unwrap-slots-kF7JcEL9.js";import"./ref-BS34vG_D.js";import"./dot-grid-one-horizontal-BZQok8ON.js";import"./menu-heading.component-DpsqNNxl.js";import"./dropdown.component-DAs5LhS4.js";import"./query-async-ClNjxWu4.js";import"./form-control-host.style-Cp0QlK_U.js";import"./form-control-header.component-C5EUPN7x.js";import"./badge.component-jtBRX4dI.js";import"./flex.component-DNymDvNk.js";import"./triangle-exclamation.component-Bdd4f_8w.js";import"./card.component-B47VLAgL.js";import"./checkmark.component-B3Tp8Bhr.js";import"./rbcb-toggle.template-DX7gwhr2.js";import"./chevron-bottom.component-BWXqEo_b.js";import"./chevron-right-small.component-DgQiDhXm.js";import"./chevron-right.component-7bFTBViW.js";import"./input.component-XQW_0tIJ.js";import"./textarea.component-BUS7VmpM.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DFTKGamX.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
