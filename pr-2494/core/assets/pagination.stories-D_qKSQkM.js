import{x as d}from"./iframe-DY2A4jpf.js";import"./pagination-DwjPFEpG.js";import"./card-Dp6yE-l3.js";import"./text-BTQ59DeA.js";import"./flex-BwH6M3GV.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-Wm19tyIx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DeYJuxp6.js";import"./icon.component-CJrwKf0J.js";import"./context-menu.component-DwzckgLQ.js";import"./unwrap-slots-Ww67ib0d.js";import"./ref-BBzhowOZ.js";import"./dot-grid-one-horizontal-CTux_s6B.js";import"./menu-heading.component-CqF3IA7w.js";import"./dropdown.component-CZnYKdtm.js";import"./query-async-Dm5G31kq.js";import"./form-control-host.style-D7MBgIjw.js";import"./form-control-header.component-D5fE3hng.js";import"./badge.component-X2YXe-99.js";import"./flex.component-DLZ_f7rA.js";import"./triangle-exclamation.component-Bo23h7jn.js";import"./card.component-D8YjA47b.js";import"./checkmark.component-DcKKcP1f.js";import"./rbcb-toggle.template-CWYzKieG.js";import"./chevron-bottom.component-JHhpMUPu.js";import"./chevron-right-small.component-D8gag3Dd.js";import"./chevron-right.component-BgbLWKj7.js";import"./input.component-cPuXXt63.js";import"./textarea.component-SYw_fDfZ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CbfsjoeK.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
