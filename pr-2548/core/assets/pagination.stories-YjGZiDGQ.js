import{x as d}from"./iframe-CKJEIZ91.js";import"./pagination-BwXzPyfH.js";import"./card-BvPAKQnM.js";import"./text-CBfpEg4R.js";import"./flex-CYf7Ph9x.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CWEhLku5.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Ck4gcxIX.js";import"./icon.component-CT_5Hu3V.js";import"./context-menu.component-CBCG8xtG.js";import"./unwrap-slots-BVpYSXGY.js";import"./ref-Cu6LPANy.js";import"./dot-grid-one-horizontal-xibcZDm0.js";import"./menu-heading.component-C32CY2Bb.js";import"./dropdown.component-Cx51RVGx.js";import"./query-async-H2zrHIrd.js";import"./form-control-host.style-BVkvIQrH.js";import"./form-control-header.component-BV8-dVqz.js";import"./badge.component-Cep4QUbx.js";import"./flex.component-DabzLWEu.js";import"./triangle-exclamation.component-5y7DPk9p.js";import"./card.component-CuNSZkmE.js";import"./checkmark.component-B9oN8nu_.js";import"./rbcb-toggle.template-__4IQmHY.js";import"./chevron-bottom.component-C5TB0xs2.js";import"./chevron-right-small.component-DBgnqoFE.js";import"./chevron-right.component-Dm_TKF8j.js";import"./input.component-C47N8mDn.js";import"./textarea.component-Bj6uXs78.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DWOfM-48.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
