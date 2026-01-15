import{x as r}from"./iframe-B2ZAK5ky.js";import"./pagination-CRnHTFXl.js";import"./card-Dnw6ZMKi.js";import"./text-Dqmmy3JR.js";import"./flex-BgzwqeWg.js";import"./localized-decorator-CNiVa-Zr.js";import"./popover.component-BfSSblA7.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-uPD9hBCo.js";import"./icon.component-CkR84q4C.js";import"./context-menu.component-BGkz9_u7.js";import"./unwrap-slots-Ds3J0naJ.js";import"./ref-Uu8HQ8ao.js";import"./dot-grid-one-horizontal-iOjOWKBb.js";import"./menu-heading.component-D2XEFdYa.js";import"./dropdown.component-yWGNXUeO.js";import"./query-async-0ijGk4-W.js";import"./form-control-host.style-DbIFuxeM.js";import"./form-control-header.component-DqnWrc8U.js";import"./badge.component-D_6jyJLl.js";import"./flex.component-CU0xqsGF.js";import"./triangle-exclamation.component-B0YayEFX.js";import"./card.component-Dz94111C.js";import"./checkmark.component-Bj_mXKCR.js";import"./rbcb-toggle.template-BMTPnazz.js";import"./chevron-bottom.component-D4tiHFpo.js";import"./chevron-right-small.component-DcOka5iG.js";import"./chevron-right.component-DXepuVIQ.js";import"./input.component-DUlVbzrY.js";import"./textarea.component-aGrkBZrw.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-xLxdcv_U.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},k={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const e=o=>{t.page=o.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},a=o=>{t.rows=o.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return r`
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
