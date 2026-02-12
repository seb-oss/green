import{x as a}from"./iframe-BVQPmz1L.js";import"./pagination-Dk4sKSo0.js";import"./card-DneoacvF.js";import"./text-DjV4SDUl.js";import"./flex-bRBOWHRh.js";import"./localized-decorator-zDTKedmw.js";import"./popover.component-BCjzx3NQ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CyTi_bLP.js";import"./icon.component-BfrKEkWA.js";import"./context-menu.component-a5VEfThk.js";import"./unwrap-slots-C-a-c3l8.js";import"./ref-EqxnW758.js";import"./dot-grid-one-horizontal-Cp4mK9XB.js";import"./menu-heading.component-DebEiIXA.js";import"./dropdown.component-EBoeCuAM.js";import"./query-async-DTBI0fuf.js";import"./form-control-host.style-2z4bNcWN.js";import"./form-control-header.component-Cri6FS4C.js";import"./badge.component-gHl_-C7K.js";import"./flex.component-CN3TaWsZ.js";import"./triangle-exclamation.component-BTodIY5z.js";import"./card.component-ubTEhPvl.js";import"./checkmark.component-D7U7iqOQ.js";import"./rbcb-toggle.template-CkJ4vrMq.js";import"./chevron-bottom.component-BG0j2l11.js";import"./chevron-right-small.component-vd4jov-f.js";import"./chevron-right.component-DA8dB7_i.js";import"./input.component-5ufJeLyi.js";import"./textarea.component-BF7IZK6G.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BWuvEL70.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return a`
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
