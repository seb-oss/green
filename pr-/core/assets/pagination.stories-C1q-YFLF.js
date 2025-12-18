import{x as d}from"./iframe-BnHxrbJ6.js";import"./pagination-BxhOUv2c.js";import"./card-Bv7UzENT.js";import"./text-Bfq1QBm8.js";import"./flex-B-LtJt5j.js";import"./preload-helper-Dp1pzeXC.js";import"./localized-decorator-BtCQ8Bzy.js";import"./popover.component-DBxNIOTp.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-zYdlprxu.js";import"./icon.component-CTeTugws.js";import"./context-menu.component-Ic6EpJXv.js";import"./unwrap-slots-eydDrsqa.js";import"./ref-Dv6GN2zy.js";import"./dot-grid-one-horizontal-DeXai7P7.js";import"./menu-heading.component-CFvTq0lb.js";import"./dropdown.component-B4dhs1kR.js";import"./query-async-DsBP590e.js";import"./form-control-host.style-ZF_GphWY.js";import"./form-control-header.component-BCPKj4Br.js";import"./badge.component-BUPmK8uB.js";import"./flex.component-BpRRGgv_.js";import"./triangle-exclamation.component-BnI86S7s.js";import"./card.component-8Uq4Bm38.js";import"./checkmark.component-DIxZXc3A.js";import"./rbcb-toggle.template-Cr3dlqrU.js";import"./chevron-bottom.component-DXOvF55y.js";import"./chevron-right-small.component-Bu215KAE.js";import"./chevron-right.component-DmGHjVED.js";import"./input.component-hGe_tCtW.js";import"./textarea.component-8h9YD1aF.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Bx1Knm6k.js";const G={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
