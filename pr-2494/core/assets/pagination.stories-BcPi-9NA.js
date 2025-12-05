import{x as d}from"./iframe-CVpOu8hK.js";import"./pagination-Cp8fmEaf.js";import"./card-CEW4O7PL.js";import"./text-CsIhgOxc.js";import"./flex-C7Pf8j15.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DGOGTD0Y.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-JM3VbJ02.js";import"./icon-NdDe49Kt.js";import"./context-menu.component-Qi4Qnuu8.js";import"./unwrap-slots-D9PrLuaP.js";import"./ref-D5bpxQNi.js";import"./dot-grid-one-horizontal-CriyvOXz.js";import"./menu-heading.component-COw6TySS.js";import"./dropdown.component-CZhMXrXH.js";import"./query-async-DsYXwAKh.js";import"./form-control-host.style-plZQ-DF_.js";import"./form-control-header.component-BNoZzr1K.js";import"./badge.component-Cqbb-tSj.js";import"./flex.component-Dz5Jd6q1.js";import"./triangle-exclamation.component-fBlXp9tk.js";import"./card.component-DFGjbNky.js";import"./checkmark.component-Dl4DH-tr.js";import"./rbcb-toggle.template-BI2873SY.js";import"./chevron-bottom.component-BdOXqIfa.js";import"./chevron-right-small.component-CqbDi5kh.js";import"./chevron-right.component-pFlroHjM.js";import"./input.component-DfMOpPbw.js";import"./textarea.component-BWF-7XAY.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CRc-umch.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
