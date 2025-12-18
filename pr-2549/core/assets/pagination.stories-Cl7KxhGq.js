import{x as d}from"./iframe-a2ZbZpP3.js";import"./pagination-g5cuQm38.js";import"./card-C2ehit_3.js";import"./text-BSY1kUP7.js";import"./flex-CEVOKrai.js";import"./preload-helper-Dp1pzeXC.js";import"./localized-decorator-Bmo7rl4w.js";import"./popover.component-BCDsyuMM.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cu3UKpRe.js";import"./icon.component-DXlX4uDf.js";import"./context-menu.component-DMh6iQaR.js";import"./unwrap-slots-C3BQdkvo.js";import"./ref-CmNDate9.js";import"./dot-grid-one-horizontal-C-zwHM9_.js";import"./menu-heading.component-BLpB8Hqw.js";import"./dropdown.component-C9T3sGfL.js";import"./query-async-BFZqFCXc.js";import"./form-control-host.style-BplkQj-L.js";import"./form-control-header.component-Be3Rbof_.js";import"./badge.component-Bo51B6f_.js";import"./flex.component-24x7YFIl.js";import"./triangle-exclamation.component-Cs2AIZ5u.js";import"./card.component-DVym18ER.js";import"./checkmark.component-Dx90FUJj.js";import"./rbcb-toggle.template-Dyfo1X36.js";import"./chevron-bottom.component-DNu8-gBu.js";import"./chevron-right-small.component-Dfi0jM33.js";import"./chevron-right.component-DSzuvTau.js";import"./input.component-Czez39U5.js";import"./textarea.component-BHiw3zHv.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-d-XIxNSl.js";const G={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
