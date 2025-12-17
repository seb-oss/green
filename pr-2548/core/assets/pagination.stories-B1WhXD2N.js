import{x as d}from"./iframe-Drqb4zoq.js";import"./pagination-BVKCUcI9.js";import"./card-C_g9DYIo.js";import"./text-CNh0Z6Hi.js";import"./flex-CpnTKbz1.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DkglKzzK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DQ1sfjht.js";import"./icon.component-bP2ONWTl.js";import"./context-menu.component-Dax2JlqA.js";import"./unwrap-slots-Cvnnko9v.js";import"./ref-Bkmm0YJ0.js";import"./dot-grid-one-horizontal-Ct_MXlV6.js";import"./menu-heading.component-iqw4OISt.js";import"./dropdown.component-BxDEqEgQ.js";import"./query-async-Be2D3Htr.js";import"./form-control-host.style-CbPVxIzV.js";import"./form-control-header.component-BCwD3ciQ.js";import"./badge.component-CcbNC8eU.js";import"./flex.component-BtbIyUVZ.js";import"./triangle-exclamation.component-Ms8awHqD.js";import"./card.component-CsXoU9c-.js";import"./checkmark.component-Bb1Cv6-j.js";import"./rbcb-toggle.template-BGDvORW4.js";import"./chevron-bottom.component-Bk_oaD4Q.js";import"./chevron-right-small.component-Ca_ztuLU.js";import"./chevron-right.component-Die-cBEz.js";import"./input.component-UDifQVuk.js";import"./textarea.component-DiODPPKb.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-C7zpz-3G.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
