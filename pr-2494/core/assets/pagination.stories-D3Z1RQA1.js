import{x as d}from"./iframe-Cgb25FAf.js";import"./pagination-3vlH-dd2.js";import"./card-C6XIkdyr.js";import"./text-8IpRrfg8.js";import"./flex-CntJfODw.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DQkEdnnK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CWVAfpD7.js";import"./icon-CPEuORr1.js";import"./context-menu.component-jVaNmdpC.js";import"./unwrap-slots-COBnbfxh.js";import"./ref-Z4eywoIW.js";import"./dot-grid-one-horizontal-BZLGlsQV.js";import"./menu-heading.component-ln6gUQQo.js";import"./dropdown.component-0WCxDO54.js";import"./query-async-CzsWSbgd.js";import"./form-control-host.style-CI13CUXT.js";import"./form-control-header.component-D6aIYEZ3.js";import"./badge.component-Dx4xkmTl.js";import"./flex.component-CH7tS1-m.js";import"./triangle-exclamation.component-CpG5Du5g.js";import"./card.component-BjI6ZEIh.js";import"./checkmark.component-9vQhuob0.js";import"./rbcb-toggle.template--9Lf0hOp.js";import"./chevron-bottom.component-D-8hYKjb.js";import"./chevron-right-small.component-Rdyr3xgc.js";import"./default-typography.styles-DhXR4Rt2.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
    `}};var o,g,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(g=e.parameters)==null?void 0:g.docs)==null?void 0:r.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,j as default};
