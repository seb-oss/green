import{x as d}from"./iframe-CJ3HwYIL.js";import"./pagination-_mUpw5Fy.js";import"./card-zVFrBI4H.js";import"./text-CVHEwnHC.js";import"./flex-Uo6BJSnc.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DUX8A4rC.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C7YNZCs1.js";import"./icon-B5gK78vW.js";import"./context-menu.component-cXfV3una.js";import"./unwrap-slots-CYGT3DwJ.js";import"./ref-D_JFFLKf.js";import"./dot-grid-one-horizontal-CCt_PPs7.js";import"./menu-heading.component-DHObxoLp.js";import"./dropdown.component-Bt6TOjxZ.js";import"./query-async-CtsoMgWX.js";import"./form-control-host.style-28-MbS5Z.js";import"./form-control-header.component-b47US_n3.js";import"./badge.component-kZ-7yTUT.js";import"./flex.component-BfxSkDnz.js";import"./triangle-exclamation.component-yLKEu0a1.js";import"./card.component-VmOwolBT.js";import"./checkmark.component-BOk6KWRd.js";import"./rbcb-toggle.template-QfH4aM4c.js";import"./chevron-bottom.component-CLBHvyqW.js";import"./chevron-right-small.component-CYZwRLIZ.js";import"./chevron-right.component-qzvPNlD1.js";import"./input.component-CVhXgyM7.js";import"./textarea.component-B794OTNR.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DeS-ypQg.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
          @gds-page-change=${s}
          @gds-rows-change=${n}
        ></gds-pagination>
      </gds-flex>
    `}};var o,r,g;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    page: 1,
    rows: 10,
    total: 2000,
    options: [5, 10, 20, 50, 100]
  },
  render: args => {
    const handlePageChange = (e: CustomEvent) => {
      args.page = e.detail.page;
      document.querySelector('[data-page]')!.innerHTML = String(args.page);
      document.querySelector('[data-pagination]')!.setAttribute('page', String(args.page));
    };
    const handleRowsChange = (e: CustomEvent) => {
      args.rows = e.detail.rows;
      args.page = 1;
      document.querySelector('[data-rows]')!.innerHTML = String(args.rows);
      document.querySelector('[data-page]')!.innerHTML = '1';
      document.querySelector('[data-pagination]')!.setAttribute('page', '1');
      document.querySelector('[data-pagination]')!.setAttribute('rows', String(args.rows));
    };
    return html\`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="secondary" flex-direction="row" gap="4xl">
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page>\${args.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows>\${args.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>\${args.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination
          page="\${args.page}"
          rows="\${args.rows}"
          .total=\${args.total}
          .options=\${args.options}
          @gds-page-change=\${handlePageChange}
          @gds-rows-change=\${handleRowsChange}
        ></gds-pagination>
      </gds-flex>
    \`;
  }
}`,...(g=(r=e.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const G=["Default"];export{e as Default,G as __namedExportsOrder,F as default};
