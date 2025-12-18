import{x as d}from"./iframe-DgNp3mwL.js";import"./pagination-Bp-GWvcC.js";import"./card-DQF2GtHz.js";import"./text-B-3Z4cwU.js";import"./flex-Jh10RkmJ.js";import"./preload-helper-Dp1pzeXC.js";import"./localized-decorator-ckdeBXEz.js";import"./popover.component-QEbtTl1y.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Ce2SO1kP.js";import"./icon.component-dVvavx5v.js";import"./context-menu.component-DNX2r5No.js";import"./unwrap-slots-JK0ok25h.js";import"./ref-DXq2kISl.js";import"./dot-grid-one-horizontal-BIVV6U07.js";import"./menu-heading.component-i9jlCTk5.js";import"./dropdown.component-oOMG_fH6.js";import"./query-async-Bcvnb-mw.js";import"./form-control-host.style-r_nLmzMh.js";import"./form-control-header.component-Co6asM6a.js";import"./badge.component-HrR3J7_H.js";import"./flex.component-D9lW3yc6.js";import"./triangle-exclamation.component-TyNCSxig.js";import"./card.component-DKElHkbG.js";import"./checkmark.component-Am-W6nYx.js";import"./rbcb-toggle.template-BULnyKs2.js";import"./chevron-bottom.component-B_wQxvc_.js";import"./chevron-right-small.component-7JJlRVlA.js";import"./chevron-right.component-CtGMXxlI.js";import"./input.component-BeZC6vL0.js";import"./textarea.component-t3Aroa3h.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CUnzz4-9.js";const G={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
