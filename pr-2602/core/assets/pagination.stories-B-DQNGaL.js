import{x as a}from"./iframe-uFM-9jO7.js";import"./pagination-rVkvMuyh.js";import"./card--tQoBkji.js";import"./text-BF7Svg2b.js";import"./flex-DogaCPPn.js";import"./localized-decorator-D2lbi3u2.js";import"./popover.component-DayMdRIy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-_sEEpKeU.js";import"./icon.component-Bdewz2mt.js";import"./context-menu.component-DK42ke-7.js";import"./unwrap-slots-BnypA7Pz.js";import"./ref-B_j-NGy-.js";import"./dot-grid-one-horizontal-aNqCdC6N.js";import"./menu-heading.component-sy6_szNT.js";import"./dropdown.component-DtDBkF50.js";import"./query-async-qwTdlRZU.js";import"./form-control-host.style-B76HKWRU.js";import"./form-control-header.component-Bz0w6FI3.js";import"./badge.component-BQesnHXD.js";import"./flex.component-DwjWo8Me.js";import"./triangle-exclamation.component-CQEEgJmk.js";import"./card.component-DDHYM_lm.js";import"./checkmark.component-DZs5g4lF.js";import"./rbcb-toggle.template-B-nbSl3N.js";import"./chevron-bottom.component-DECGS1lp.js";import"./chevron-right-small.component-C4j68ufw.js";import"./chevron-right.component-mm4Ypwme.js";import"./input.component-CQUR45w5.js";import"./textarea.component-yjMGQI3V.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BQ3GHWCQ.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
