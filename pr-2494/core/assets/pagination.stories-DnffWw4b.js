import{x as d}from"./iframe-UDVquwlF.js";import"./pagination-DXcld4kv.js";import"./card-D8j04sIl.js";import"./text-C8r-liCZ.js";import"./flex-BGkFnwD_.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DP0r3ico.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DHSAVP2D.js";import"./icon-DoTc6Wmi.js";import"./context-menu.component-DALlLp2e.js";import"./unwrap-slots-WI-qB1On.js";import"./ref-B0fHoSe6.js";import"./dot-grid-one-horizontal-CcqPEgAk.js";import"./menu-heading.component-e6lFe3kV.js";import"./dropdown.component-GIY8Y8PR.js";import"./query-async-Bs_b5jX8.js";import"./form-control-host.style-CKEU_bfI.js";import"./form-control-header.component-DCx5NmkL.js";import"./badge.component-Bg9F4Tw-.js";import"./flex.component-7XGJimrB.js";import"./triangle-exclamation.component-CVq1kRel.js";import"./card.component-DexI8x62.js";import"./checkmark.component-Dv48HJCX.js";import"./rbcb-toggle.template-BC0qjdmL.js";import"./chevron-bottom.component-DmyaL1V4.js";import"./chevron-right-small.component-CCwwQI4z.js";import"./chevron-right.component-CrUIUI0C.js";import"./input.component-CdQWLtOX.js";import"./textarea.component-CrF0COA9.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C3uPJEwp.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
