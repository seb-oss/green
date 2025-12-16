import{x as d}from"./iframe-oOFCRMz6.js";import"./pagination-D0Syk2Yx.js";import"./card-DMOWLUyN.js";import"./text--uAK4myG.js";import"./flex-neIKorAU.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DeMB5zfr.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DLcXMi5T.js";import"./icon.component-CT_2bsWL.js";import"./context-menu.component-DpXnS91-.js";import"./unwrap-slots-C_MXp_9T.js";import"./ref-BJSw7Z4Q.js";import"./dot-grid-one-horizontal-DdvYfOZY.js";import"./menu-heading.component-Czr-wTmZ.js";import"./dropdown.component-C6UzgzFJ.js";import"./query-async-C5p-l540.js";import"./form-control-host.style-DlCy7m9c.js";import"./form-control-header.component-BGnADStw.js";import"./badge.component-CLfERe6M.js";import"./flex.component-DZK24Y7H.js";import"./triangle-exclamation.component-BFEDBCBO.js";import"./card.component-CaLuDAou.js";import"./checkmark.component-gD0xAzsb.js";import"./rbcb-toggle.template-C_zAcgSg.js";import"./chevron-bottom.component-DFyvBJY0.js";import"./chevron-right-small.component-pBkChDPI.js";import"./chevron-right.component-CFsrtec6.js";import"./input.component-Vwqmy_yu.js";import"./textarea.component-Ct4h3nQZ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-fNkTVv-z.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
