import{x as r}from"./iframe-DijEw74_.js";import"./pagination-CWiF_j0U.js";import"./card-DlAGLCTJ.js";import"./text-OGOlOyOf.js";import"./flex-DROMuK8R.js";import"./localized-decorator-Cue1qFC5.js";import"./popover.component-Dh7zNXtg.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cr5f3_bC.js";import"./icon.component-ZyiLm2zQ.js";import"./context-menu.component-cBU2g5r8.js";import"./unwrap-slots-CYhaXYjY.js";import"./ref-BIzzhEfv.js";import"./dot-grid-one-horizontal-CulHYwue.js";import"./menu-heading.component-DlmY0O3f.js";import"./dropdown.component-Bq7HSYyv.js";import"./query-async-Cffx9de5.js";import"./form-control-host.style-CVtUowK0.js";import"./form-control-header.component-CAC8Ys7l.js";import"./badge.component-DBObLPaO.js";import"./flex.component-BmJ0jVPN.js";import"./triangle-exclamation.component-w-VWHqr5.js";import"./card.component-GP9cGCKF.js";import"./checkmark.component-JDHpl_9I.js";import"./rbcb-toggle.template-CDQavUAb.js";import"./chevron-bottom.component-gI35QfTx.js";import"./chevron-right-small.component-CshFO-8T.js";import"./chevron-right.component-CiG2-JeT.js";import"./input.component-CPK1GBuw.js";import"./textarea.component-BpgdMzgX.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-VcMigb_n.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
