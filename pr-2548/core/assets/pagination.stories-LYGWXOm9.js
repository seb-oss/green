import{x as d}from"./iframe-DFccSH9C.js";import"./pagination-zvrCYFib.js";import"./card-D-oEIP_W.js";import"./text-RRtvUC8E.js";import"./flex-CttofJdE.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CVlQhoVc.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-6ff5mGZ6.js";import"./icon.component-Cp1pPQKi.js";import"./context-menu.component-C0DhwFUW.js";import"./unwrap-slots-DGQeaE2M.js";import"./ref-DmsgiBD-.js";import"./dot-grid-one-horizontal-CEBKs_aO.js";import"./menu-heading.component-D43kM7Ry.js";import"./dropdown.component-Drs_E05C.js";import"./query-async-B3l3xh0Z.js";import"./form-control-host.style-79WpVn3Q.js";import"./form-control-header.component-CdXP1eBD.js";import"./badge.component-BTLvqfOl.js";import"./flex.component-CuhhaUY8.js";import"./triangle-exclamation.component-WxmBXVAT.js";import"./card.component-CZLOqDhN.js";import"./checkmark.component-BKybAYeO.js";import"./rbcb-toggle.template-CGR-lNyN.js";import"./chevron-bottom.component-Bh2a6OVV.js";import"./chevron-right-small.component-B3nwDHDS.js";import"./chevron-right.component-0oFs6v7r.js";import"./input.component-3AC5DEzo.js";import"./textarea.component-y52bmiwe.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DteksY2v.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
