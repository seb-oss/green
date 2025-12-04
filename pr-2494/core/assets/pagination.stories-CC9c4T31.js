import{x as d}from"./iframe-CVq0p_LP.js";import"./pagination-DlD-1GjT.js";import"./card-DBA9NaUL.js";import"./text-zcRRSnO6.js";import"./flex-BvfexArV.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BdvDX0Lx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cfzy3cu2.js";import"./icon-DoURBngW.js";import"./context-menu.component-31yJT1xP.js";import"./unwrap-slots-Q6HkgNHk.js";import"./ref-BJElx7s-.js";import"./dot-grid-one-horizontal-DXL_W47B.js";import"./menu-heading.component-C0X_sB7j.js";import"./dropdown.component-CDg3IC6u.js";import"./query-async-BW6zUnWy.js";import"./form-control-host.style-Da9a4e8P.js";import"./form-control-header.component-DsTkir9k.js";import"./badge.component-CrkvuXe_.js";import"./flex.component-gFlbHhj8.js";import"./triangle-exclamation.component-B5akUm_z.js";import"./card.component-BImkFhP1.js";import"./checkmark.component-C2chXYfv.js";import"./rbcb-toggle.template-CyQgCY24.js";import"./chevron-bottom.component-x-w_MfNE.js";import"./chevron-right-small.component-C8sIPoNi.js";import"./chevron-right.component-SnN9vu7B.js";import"./input.component-C3pamGHS.js";import"./textarea.component-5heZRXhA.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DGhUvPn-.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
