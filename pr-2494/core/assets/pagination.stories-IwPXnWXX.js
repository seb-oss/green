import{x as d}from"./iframe-r7XMIE4J.js";import"./pagination-B_Sc-AOS.js";import"./card-CPGIkTlo.js";import"./text-BKzhkOL1.js";import"./flex-IgstLLT-.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BnZn75IU.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cpsdrirn.js";import"./icon-8set1gg7.js";import"./context-menu.component-DXCJytLJ.js";import"./unwrap-slots-D22TuX6z.js";import"./ref-DJdAQIzE.js";import"./dot-grid-one-horizontal-Bb3CkUAc.js";import"./menu-heading.component-J_wocYrY.js";import"./dropdown.component-C_oHWAoz.js";import"./query-async-lJHlyKSe.js";import"./form-control-host.style-B7GKWRMf.js";import"./form-control-header.component-DaAg-LUB.js";import"./badge.component-CLKUf45r.js";import"./flex.component-BQ5NBM0P.js";import"./triangle-exclamation.component-DW23mr6I.js";import"./card.component-DWIlQAUK.js";import"./checkmark.component-BlXnxEUS.js";import"./rbcb-toggle.template-CySK5B1I.js";import"./chevron-bottom.component-C-zV_t0u.js";import"./chevron-right-small.component-COsJ4kVS.js";import"./chevron-right.component-7iLEFvvj.js";import"./input.component-C4pEYPeB.js";import"./textarea.component-BMGbp62q.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-D3NTB3uO.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
