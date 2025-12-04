import{x as d}from"./iframe-DYv7lEKy.js";import"./pagination-AUSYPMEQ.js";import"./card-9W0PiFTb.js";import"./text-DWDnYmAv.js";import"./flex-DnD7WXoN.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DNJAEk40.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D9kPb6eA.js";import"./icon-BepFmCKQ.js";import"./context-menu.component-1M6jMTOr.js";import"./unwrap-slots-Brx6XLma.js";import"./ref-DSThHDNH.js";import"./dot-grid-one-horizontal-DD7x5sTN.js";import"./menu-heading.component-sshySTRv.js";import"./dropdown.component-DhyrF1e7.js";import"./query-async-B780RODl.js";import"./form-control-host.style-exMjayqf.js";import"./form-control-header.component-hPSi2r0O.js";import"./badge.component-CXoiOXQm.js";import"./flex.component-DXbHHKvW.js";import"./triangle-exclamation.component-Db1bMc6t.js";import"./card.component-Dq0RibAp.js";import"./checkmark.component-BMD9XwQq.js";import"./rbcb-toggle.template-DCa1cC60.js";import"./chevron-bottom.component-DHwxs8_i.js";import"./chevron-right-small.component-CgKTRqrD.js";import"./chevron-right.component-3XJ3zFcW.js";import"./input.component-BUMBNgwW.js";import"./textarea.component-D39QfLAm.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CEGXH4Ji.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
