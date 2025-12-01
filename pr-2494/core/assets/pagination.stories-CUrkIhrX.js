import{x as d}from"./iframe-44dIHiuC.js";import"./pagination-QmMNKlKr.js";import"./card-CCzMco8s.js";import"./text-CkiBHEyb.js";import"./flex-DcPQaU2n.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BmosWRgg.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-QGEwIAHn.js";import"./icon-4h-9aXhB.js";import"./context-menu.component-R5OL-AZz.js";import"./unwrap-slots-C67SKBYd.js";import"./ref-DUJg4c3b.js";import"./dot-grid-one-horizontal-ECLGcbNM.js";import"./menu-heading.component-BcA7iX7J.js";import"./dropdown.component-BkwbfCBF.js";import"./query-async-YrNFvObj.js";import"./form-control-host.style-CtmcckkI.js";import"./form-control-header.component-LTR3t3Ov.js";import"./badge.component-xKb-PA5C.js";import"./flex.component-DBlH9lIG.js";import"./triangle-exclamation.component-DuqTTpGU.js";import"./card.component-CMRA5GNa.js";import"./checkmark.component-W_o50JSu.js";import"./rbcb-toggle.template-D4HGNdez.js";import"./chevron-bottom.component-DwXGmsWq.js";import"./chevron-right-small.component-BJIrLuNB.js";import"./chevron-right.component-QaLQpVWD.js";import"./input.component-NSiL-cds.js";import"./textarea.component-CJp_IFdw.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DvmCignJ.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
