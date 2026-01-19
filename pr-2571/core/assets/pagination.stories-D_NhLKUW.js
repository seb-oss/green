import{x as a}from"./iframe-DuOxvxMM.js";import"./pagination-Bi9OjEEJ.js";import"./card-DQQpCBDO.js";import"./text-Dasdv0et.js";import"./flex-Df0myY6a.js";import"./localized-decorator-w0AHHsgk.js";import"./popover.component-DqcSBbha.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component--QHBwLvf.js";import"./icon.component-CUEcHyr6.js";import"./context-menu.component-D8xuDdU-.js";import"./unwrap-slots-QgelGEyB.js";import"./ref-8r6n27it.js";import"./dot-grid-one-horizontal-BdIGzdZu.js";import"./menu-heading.component-BjBC8wPC.js";import"./dropdown.component-B-vhxiYz.js";import"./query-async-BkcgD29f.js";import"./form-control-host.style-D7xVh_Gm.js";import"./form-control-header.component-DZw6gUf-.js";import"./badge.component-DIwENjkK.js";import"./flex.component-Fp2Ol_1y.js";import"./triangle-exclamation.component-DtUO3APk.js";import"./card.component-D_CSQy-c.js";import"./checkmark.component-gaTjbr3B.js";import"./rbcb-toggle.template-DCM1uqub.js";import"./chevron-bottom.component-B0I98ULO.js";import"./chevron-right-small.component-BdK_PA4E.js";import"./chevron-right.component-Bz6-tiAW.js";import"./input.component-st0gsF6r.js";import"./textarea.component--u_tUltj.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CGfQ2Uxj.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
