import{x as d}from"./iframe-BZMmfzq-.js";import"./pagination-DmIu5KpL.js";import"./card-C3m2qafe.js";import"./text-CuuZulEI.js";import"./flex-DybpUiQt.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-Cu3T7CP8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BBCU0PI-.js";import"./icon.component-HYGESCJq.js";import"./context-menu.component-BHYQrV22.js";import"./unwrap-slots-wIYfO-LH.js";import"./ref-CBAx0Skz.js";import"./dot-grid-one-horizontal--X4qAYwz.js";import"./menu-heading.component-BpDqfnrN.js";import"./dropdown.component-Vx8N8F1R.js";import"./query-async-CEYj0IU2.js";import"./form-control-host.style-cODINajo.js";import"./form-control-header.component-C1fcFPBL.js";import"./badge.component-Bjgx_bYn.js";import"./flex.component-Cl84FKMs.js";import"./triangle-exclamation.component-pGryeODI.js";import"./card.component-ChRt9CDJ.js";import"./checkmark.component-Cq0yX6eL.js";import"./rbcb-toggle.template-DmYQECFS.js";import"./chevron-bottom.component-BwT0ibsJ.js";import"./chevron-right-small.component-BjNThDD9.js";import"./chevron-right.component-kci6DFbM.js";import"./input.component-B4km56Gp.js";import"./textarea.component-BhH2Dbed.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DS1iar7Q.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
