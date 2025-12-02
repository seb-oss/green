import{x as d}from"./iframe-C15zCLVb.js";import"./pagination-Drx61tRZ.js";import"./card-Zk6t3zP4.js";import"./text-eyewT2B2.js";import"./flex-CNBz1JAG.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BeciGZED.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-COGInZmy.js";import"./icon-CruccfLi.js";import"./context-menu.component-3f6YWpyZ.js";import"./unwrap-slots-DwlGw2_-.js";import"./ref-D-Pa-Ktc.js";import"./dot-grid-one-horizontal-BlXjJNag.js";import"./menu-heading.component-X3Nt_dRW.js";import"./dropdown.component-DaED85t_.js";import"./query-async-Dv3IrwkY.js";import"./form-control-host.style-muyr4YhG.js";import"./form-control-header.component-CrUcC9V_.js";import"./badge.component-BGWx9tJp.js";import"./flex.component-B482mseC.js";import"./triangle-exclamation.component-BwRA1V8Z.js";import"./card.component-J6GIC8OB.js";import"./checkmark.component-B3GDjnSK.js";import"./rbcb-toggle.template-r6O6R8lx.js";import"./chevron-bottom.component-CMs5MaIV.js";import"./chevron-right-small.component-BwCcsfGP.js";import"./chevron-right.component-DzGBAVru.js";import"./input.component-B-_UV_HS.js";import"./textarea.component-BzI1W6E3.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CBsTvRmJ.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
