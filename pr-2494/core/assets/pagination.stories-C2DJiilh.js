import{x as d}from"./iframe-56TAW9-d.js";import"./pagination-BXyVfAb9.js";import"./card-NAaxDCU5.js";import"./text-DTkOgy5-.js";import"./flex-BR6yjOfv.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CDhCFxTd.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-C38Cgmom.js";import"./icon-D2ToFCSh.js";import"./context-menu.component-D1rmGkyD.js";import"./unwrap-slots-Dk3Fbcql.js";import"./ref-C3RpiCZJ.js";import"./dot-grid-one-horizontal-2DEw2yGc.js";import"./menu-heading.component-hyfyo1Z4.js";import"./dropdown.component-BSwNn65R.js";import"./query-async-B0GVJcUv.js";import"./form-control-host.style-DDIs71wd.js";import"./form-control-header.component-CpIIfcVj.js";import"./badge.component-CwUMZmvS.js";import"./flex.component-B_34opVA.js";import"./triangle-exclamation.component-B-ZWhkCi.js";import"./card.component-Dho_93Jd.js";import"./checkmark.component-GKx_y0Sa.js";import"./rbcb-toggle.template-iGpPUIFB.js";import"./chevron-bottom.component-bHWDWrAq.js";import"./chevron-right-small.component-Dx0BBvB0.js";import"./chevron-right.component-Dz8n2hlE.js";import"./input.component-BH_o9R0v.js";import"./textarea.component-BGfmtPsJ.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DoJUCkn3.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
