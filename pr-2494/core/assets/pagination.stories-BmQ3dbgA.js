import{x as d}from"./iframe-BvO6JDjo.js";import"./pagination-5NJt7ZXb.js";import"./card-BEYfSOAF.js";import"./text-Cq5Ng9sT.js";import"./flex-stimDqNa.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CffJbLuu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-808O4jtP.js";import"./icon-CPKGfb59.js";import"./context-menu.component-BReMhThR.js";import"./unwrap-slots-DqTbJdGO.js";import"./ref-DVRmuBRR.js";import"./dot-grid-one-horizontal-BKIfWLMB.js";import"./menu-heading.component-BdLic8EI.js";import"./dropdown.component-DH1uD0Ky.js";import"./query-async-BMqQpKXU.js";import"./form-control-host.style-CP0DNXzy.js";import"./form-control-header.component-B7pTCWKU.js";import"./badge.component-BcScUPg9.js";import"./flex.component-0j1zyJs2.js";import"./triangle-exclamation.component-BlQKF_TS.js";import"./card.component-D-WALTR8.js";import"./checkmark.component-B2dtzRIj.js";import"./rbcb-toggle.template-xzobUwQo.js";import"./chevron-bottom.component-B8B-XA6H.js";import"./chevron-right-small.component-CGfaXb_T.js";import"./chevron-right.component-C0OUjB9C.js";import"./input.component-CNBZhjEu.js";import"./textarea.component-DCRXv3G_.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-xZH7w5Zd.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
