import{x as d}from"./iframe-B0_DOhT7.js";import"./pagination-BUdyp-Fp.js";import"./card-Dz3KcjYf.js";import"./text-DjyLG8t6.js";import"./flex-C1lqgtQm.js";import"./preload-helper-Dp1pzeXC.js";import"./localized-decorator-BUIMAmca.js";import"./popover.component-CrrYVBtq.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cg3qaES6.js";import"./icon.component-TddsTTmv.js";import"./context-menu.component-CML94FZr.js";import"./unwrap-slots-C23ndhV9.js";import"./ref-BarGprBs.js";import"./dot-grid-one-horizontal-CK2DYBRl.js";import"./menu-heading.component-VcGhomuL.js";import"./dropdown.component-CMeqQW95.js";import"./query-async-DXvXEVHb.js";import"./form-control-host.style-CbjfaeO6.js";import"./form-control-header.component-DSoBSYI-.js";import"./badge.component-CBhvSODV.js";import"./flex.component-HI13lo1u.js";import"./triangle-exclamation.component-Gc8pbZbZ.js";import"./card.component-qn4iws9f.js";import"./checkmark.component-3tFY6tCg.js";import"./rbcb-toggle.template-PGYhi8F5.js";import"./chevron-bottom.component-Dt3vb0Zi.js";import"./chevron-right-small.component-C6WdJuid.js";import"./chevron-right.component-rAK1lss6.js";import"./input.component-CISJhVjs.js";import"./textarea.component-CZLM9mWb.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BC8vn_N7.js";const G={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
}`,...(g=(r=e.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,G as default};
