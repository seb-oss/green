import{x as d}from"./iframe-5dA-U9ZW.js";import"./pagination-BKZCTt-5.js";import"./card-DBbghkAq.js";import"./text-DPCbeZeh.js";import"./flex-DRvflRRx.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-B65LJO8A.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D41tI4P0.js";import"./icon.component-DSYjqZaB.js";import"./context-menu.component-BdV2spLZ.js";import"./unwrap-slots-C1VQpuvo.js";import"./ref-BBT_7B8z.js";import"./dot-grid-one-horizontal-B1_-N2hd.js";import"./menu-heading.component-GfOofKas.js";import"./dropdown.component-D8BiM_Nd.js";import"./query-async-BhVrJ0A4.js";import"./form-control-host.style-CHnR5doA.js";import"./form-control-header.component-DMx5PRRn.js";import"./badge.component-Cpgbwdlx.js";import"./flex.component--OUWRddW.js";import"./triangle-exclamation.component-CLp8n0OD.js";import"./card.component-D9Kdgeql.js";import"./checkmark.component-BhEEzmW3.js";import"./rbcb-toggle.template-Cbgazgz7.js";import"./chevron-bottom.component-D7GOiW5C.js";import"./chevron-right-small.component-DcnGS9H1.js";import"./chevron-right.component-DnwNmHL1.js";import"./input.component-ClP_yj7o.js";import"./textarea.component-DMiE4gc2.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CF4RK1Kq.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
