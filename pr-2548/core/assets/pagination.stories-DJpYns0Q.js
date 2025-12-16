import{x as d}from"./iframe-Cp6S4ypS.js";import"./pagination-kBBR30Tx.js";import"./card-BCXQd6pS.js";import"./text-CSav5eYF.js";import"./flex-C-jnuM-m.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DM7M3JmE.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DqyuU8ai.js";import"./icon.component-CNi9xbEp.js";import"./context-menu.component-BMVOMA6s.js";import"./unwrap-slots-x6et3rXq.js";import"./ref-BlsuxmrU.js";import"./dot-grid-one-horizontal-BuG1LOEV.js";import"./menu-heading.component-CkNrVtuv.js";import"./dropdown.component-DXalbevR.js";import"./query-async-C1eZMNg3.js";import"./form-control-host.style-DHaF1Yi6.js";import"./form-control-header.component-D6FOZZtU.js";import"./badge.component-CA76QSnl.js";import"./flex.component-CWTWA-8V.js";import"./triangle-exclamation.component-D_Y5qoBe.js";import"./card.component-D8NcDyty.js";import"./checkmark.component-DdmMtSMQ.js";import"./rbcb-toggle.template-B8qjT2V2.js";import"./chevron-bottom.component-DGYTa092.js";import"./chevron-right-small.component-D8PES0Xg.js";import"./chevron-right.component-Dq7GCDfi.js";import"./input.component-CWqWSWHt.js";import"./textarea.component-Cgz3Rnk8.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BUvb0K1z.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
