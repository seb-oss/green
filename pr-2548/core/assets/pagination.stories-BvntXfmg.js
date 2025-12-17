import{x as d}from"./iframe-DMh0atI0.js";import"./pagination-BVHvbivY.js";import"./card-DUm5_Ilf.js";import"./text-p1GgrupH.js";import"./flex-DoYRkPEC.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-eHlthaoP.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-mVc9PJI5.js";import"./icon.component-BjRoIXiR.js";import"./context-menu.component-tWmVdBYR.js";import"./unwrap-slots-D_pPyJdU.js";import"./ref-BkVoO_15.js";import"./dot-grid-one-horizontal-DULF5grN.js";import"./menu-heading.component-Bzd5I2Jh.js";import"./dropdown.component-Br3DCof9.js";import"./query-async-m4uHnRa0.js";import"./form-control-host.style-BjThKH4z.js";import"./form-control-header.component-aoA9OUxs.js";import"./badge.component-RruVW_Sh.js";import"./flex.component-kRdrDpGQ.js";import"./triangle-exclamation.component-qT7-A25j.js";import"./card.component-DAg3Q4MD.js";import"./checkmark.component-De_ycf0k.js";import"./rbcb-toggle.template-CWOYRqTo.js";import"./chevron-bottom.component-CRKNUR0K.js";import"./chevron-right-small.component-0WW5jj33.js";import"./chevron-right.component-DPrMYXV-.js";import"./input.component-CnsV4m7D.js";import"./textarea.component-CvwargO8.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CHQfSeaM.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
