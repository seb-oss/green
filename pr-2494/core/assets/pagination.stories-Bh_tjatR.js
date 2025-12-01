import{x as d}from"./iframe-CzZ1sMy5.js";import"./pagination-8u-T2WM2.js";import"./card-CVsvM0Ss.js";import"./text-D3YYG-rc.js";import"./flex-CoRxgAkz.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-C_MvQ1Cm.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DtTo-ni-.js";import"./icon-CRJdo7Rz.js";import"./context-menu.component-DXQtu1E2.js";import"./unwrap-slots-Du6E53Xi.js";import"./ref-Dd9X4MXw.js";import"./dot-grid-one-horizontal-BcYGlhbE.js";import"./menu-heading.component-C9yUd5QW.js";import"./dropdown.component-DTZLkvlD.js";import"./query-async-CIxtCDCI.js";import"./form-control-host.style-DoemRQM1.js";import"./form-control-header.component-D828ZbCP.js";import"./badge.component-8PT_vMHl.js";import"./flex.component-D-yR9kaG.js";import"./triangle-exclamation.component-DusEiCoB.js";import"./card.component-Cg1DQHri.js";import"./checkmark.component-Ch56T4IU.js";import"./rbcb-toggle.template-u58SqXmf.js";import"./chevron-bottom.component-OGVS1x09.js";import"./chevron-right-small.component-D-omv1ZW.js";import"./chevron-right.component-B3f5oH90.js";import"./input.component-CkJI4T4U.js";import"./textarea.component-DnGtz0aG.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C932hhvv.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
