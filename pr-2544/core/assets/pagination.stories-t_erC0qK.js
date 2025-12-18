import{x as d}from"./iframe-BBaqs3eY.js";import"./pagination-Dnmn0Ujr.js";import"./card-Bjm_LM_V.js";import"./text-AkNkFFpg.js";import"./flex-Bv6-T22K.js";import"./preload-helper-Dp1pzeXC.js";import"./localized-decorator-rnJJRWaL.js";import"./popover.component-CxPon5_Q.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CZiv9AvY.js";import"./icon.component-WjWnmMep.js";import"./context-menu.component-V8qmO5qB.js";import"./unwrap-slots-Ch3R21Hy.js";import"./ref-XrtwFTYh.js";import"./dot-grid-one-horizontal-CrPg0Ldl.js";import"./menu-heading.component-B910ojsr.js";import"./dropdown.component--XyrDBx_.js";import"./query-async-B9aOs_FT.js";import"./form-control-host.style-DQAUnqre.js";import"./form-control-header.component-C0bBgrCU.js";import"./badge.component-DP4SoLlo.js";import"./flex.component-DMyfDKhZ.js";import"./triangle-exclamation.component-lW-vIiAb.js";import"./card.component-D4OUWNkI.js";import"./checkmark.component-DUrB_0xw.js";import"./rbcb-toggle.template-EUn1FraU.js";import"./chevron-bottom.component-pWPeix19.js";import"./chevron-right-small.component-TmHzmPmp.js";import"./chevron-right.component-_O3PXDay.js";import"./input.component-CraS34Uu.js";import"./textarea.component-k7mK2mNb.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Cm0FWDRN.js";const G={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
}`,...(g=(r=e.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,G as default};
