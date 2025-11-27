import{x as d}from"./iframe-Coz1DniA.js";import"./pagination-C01FsdNe.js";import"./card-C0vLHxY5.js";import"./text-D7tgfQe4.js";import"./flex-C12hrif6.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CXCf-3Zj.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-0KD6tY4n.js";import"./icon-NnByhDe8.js";import"./context-menu.component-XdTSgda3.js";import"./unwrap-slots-B5KuYL6t.js";import"./ref-nCTZljhC.js";import"./dot-grid-one-horizontal-DIv7fQeF.js";import"./menu-heading.component-DwVl1Zl3.js";import"./dropdown.component-X-BhfGti.js";import"./query-async-D3O-wS9d.js";import"./form-control-host.style-DKEyHc3K.js";import"./form-control-header.component-eTXyeiwV.js";import"./badge.component-D8cTvQiu.js";import"./flex.component-CuECGqHS.js";import"./triangle-exclamation.component-Dr1-h4lX.js";import"./card.component-Cl253YMz.js";import"./checkmark.component-Y9TgBWj5.js";import"./rbcb-toggle.template-iL3c0flI.js";import"./chevron-bottom.component-CY99V53P.js";import"./chevron-right-small.component-T_dqU7-b.js";import"./default-typography.styles-BGioVJvf.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
