import{x as a}from"./iframe-CvkrKpPT.js";import"./pagination-Cb_gSI04.js";import"./card-CThgPxvs.js";import"./text-Bi4GUguR.js";import"./flex-BVlaU2K7.js";import"./localized-decorator-2DBRLQZG.js";import"./popover.component-DC9k34bS.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BgnfA2oV.js";import"./icon.component-6kdDZ56N.js";import"./context-menu.component-CV4NbLDG.js";import"./unwrap-slots-DejeiwFb.js";import"./ref-9FgQuRaw.js";import"./dot-grid-one-horizontal-CziqS03F.js";import"./menu-heading.component-q-T1yTff.js";import"./dropdown.component-DMMQbOdB.js";import"./query-async-BciRu8vV.js";import"./form-control-host.style-BNaR_t-T.js";import"./form-control-header.component-D1tR04bs.js";import"./badge.component-D1qOn2Rh.js";import"./flex.component-3WlUjBhB.js";import"./triangle-exclamation.component-CkmAZHAf.js";import"./card.component-Ba_9DfXW.js";import"./checkmark.component-BDkwvF2I.js";import"./rbcb-toggle.template-DK8rNCp7.js";import"./chevron-bottom.component-DEjR8Jve.js";import"./chevron-right-small.component-C7CGJN91.js";import"./chevron-right.component-DeDpcLSV.js";import"./input.component-COXB2No7.js";import"./textarea.component-D6MiozLb.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Y5hFK-zl.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
