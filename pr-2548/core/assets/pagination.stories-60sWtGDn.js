import{x as d}from"./iframe-BnwWr7CX.js";import"./pagination-DbfRC8fQ.js";import"./card-DgqzuBAS.js";import"./text-CoxW0rf_.js";import"./flex-D8k6S2Io.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-B0qZgIGR.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BWdmusly.js";import"./icon.component-PyNR11BD.js";import"./context-menu.component-2lw7hMWI.js";import"./unwrap-slots-UjNPW2fW.js";import"./ref-B_YGz9bS.js";import"./dot-grid-one-horizontal-ChCUOev8.js";import"./menu-heading.component-BYRssQjM.js";import"./dropdown.component-BucqRAG4.js";import"./query-async-CRCYMeJV.js";import"./form-control-host.style-Bkn0YUOA.js";import"./form-control-header.component-PxdY6OQB.js";import"./badge.component-DGSsAquv.js";import"./flex.component-BTtAabBc.js";import"./triangle-exclamation.component-Binh7t_e.js";import"./card.component-C3o1-FPX.js";import"./checkmark.component-BJIflXp0.js";import"./rbcb-toggle.template-DZHEOudb.js";import"./chevron-bottom.component-B_PsKwf8.js";import"./chevron-right-small.component-DjI5HqGh.js";import"./chevron-right.component-wUjlQtCm.js";import"./input.component-CK5aCjDx.js";import"./textarea.component-CXAqdJgA.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DCKkzOiC.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
