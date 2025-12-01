import{x as d}from"./iframe-TroxpxJ4.js";import"./pagination-B-BOwjEs.js";import"./card-BBNm8F1I.js";import"./text-Do5J4Jb9.js";import"./flex-C0v1bJdQ.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-Ao1qNW2f.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CEzkeBgN.js";import"./icon-Dbz1of41.js";import"./context-menu.component-BAExHy64.js";import"./unwrap-slots-C3pLEbir.js";import"./ref-CxoHqEvN.js";import"./dot-grid-one-horizontal-BmYFdPTm.js";import"./menu-heading.component-D9dgvpIi.js";import"./dropdown.component-BDwBGzXy.js";import"./query-async-RPxrI127.js";import"./form-control-host.style-BWsYX791.js";import"./form-control-header.component-Bwu7Gl3R.js";import"./badge.component-CpEWkvST.js";import"./flex.component-jT_E1eOl.js";import"./triangle-exclamation.component-BOEWUPeg.js";import"./card.component-cRDhUBqx.js";import"./checkmark.component-BMHyXkwD.js";import"./rbcb-toggle.template-CuBkZe2n.js";import"./chevron-bottom.component-CmqJQy9y.js";import"./chevron-right-small.component-ZLPvMaZ8.js";import"./chevron-right.component-Kf0BukxD.js";import"./input.component-Cby5AMiu.js";import"./textarea.component-C0ADgUnc.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-W9bTJb-p.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
