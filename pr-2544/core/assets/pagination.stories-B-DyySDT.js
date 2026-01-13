import{x as r}from"./iframe-Bt1Yqfo9.js";import"./pagination-D3CuesVs.js";import"./card-WXW6Uczh.js";import"./text-G6ryxO7f.js";import"./flex-CBF_aTZD.js";import"./localized-decorator-Db2hDNTS.js";import"./popover.component-BG6Eo2Dm.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CiXN725I.js";import"./icon.component-CnGrBf1q.js";import"./context-menu.component-C41p1dky.js";import"./unwrap-slots-DfPGwicF.js";import"./ref-CzezdJpn.js";import"./dot-grid-one-horizontal-Ccw5tBj6.js";import"./menu-heading.component-8IWrnQGW.js";import"./dropdown.component-DjynnbDI.js";import"./query-async-DM0653X1.js";import"./form-control-host.style-Cqcn58iH.js";import"./form-control-header.component-A0iCm6Vi.js";import"./badge.component-2bTKzWsP.js";import"./flex.component-B24ezWRH.js";import"./triangle-exclamation.component-WLdhP4d6.js";import"./card.component-Qe0x4vpY.js";import"./checkmark.component-DarZtqqo.js";import"./rbcb-toggle.template-BH_VgFqU.js";import"./chevron-bottom.component-BAfo35JF.js";import"./chevron-right-small.component--VfNP1J6.js";import"./chevron-right.component-CmHdyCbX.js";import"./input.component-H3Mb-sCc.js";import"./textarea.component-Cb_ome0M.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CXDKqlWj.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
