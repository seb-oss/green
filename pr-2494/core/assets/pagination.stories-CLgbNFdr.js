import{x as d}from"./iframe-HnSwFImm.js";import"./pagination-lXaOKwrf.js";import"./card-BQQ0u-8_.js";import"./text-Bcz6X7lT.js";import"./flex-Dqe91J_1.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-7Kv_ZYDu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dhx2eAtw.js";import"./icon-DiNqSuqG.js";import"./context-menu.component-BHRC_AoB.js";import"./unwrap-slots-DWOGp1AE.js";import"./ref-D2LYdnpk.js";import"./dot-grid-one-horizontal-Dy5Rv6Tm.js";import"./menu-heading.component-CRQ8WSke.js";import"./dropdown.component-U5OP60XN.js";import"./query-async-Co-aMytR.js";import"./form-control-host.style-CslSqpnP.js";import"./form-control-header.component-CUr5lC49.js";import"./badge.component-DmW9a7GG.js";import"./flex.component-D4_0-Nhc.js";import"./triangle-exclamation.component-D5iCZWva.js";import"./card.component-Dehs9Jmv.js";import"./checkmark.component-B-XkUpGi.js";import"./rbcb-toggle.template-DdW2PMhr.js";import"./chevron-bottom.component-kQGqNWa0.js";import"./chevron-right-small.component-BIZ7wxCO.js";import"./chevron-right.component-M_eDqRHx.js";import"./input.component-DSEQ4ypc.js";import"./textarea.component-C71W8ydC.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CzTlC7NM.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
