import{x as d}from"./iframe-CB9v7xF1.js";import"./pagination-B-ZGytJX.js";import"./card-BFXZpCla.js";import"./text-ywA8WYyq.js";import"./flex-DjjV2JI4.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BT45a4JK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CPod8b4A.js";import"./icon-Uc_O1K08.js";import"./context-menu.component-BDOZODIR.js";import"./unwrap-slots-BMN2Mp0f.js";import"./ref-Bv2UbVVJ.js";import"./dot-grid-one-horizontal-CAB6iPU5.js";import"./menu-heading.component-Dh5vJmX5.js";import"./dropdown.component-6_gPzDxb.js";import"./query-async-DKaZr-8P.js";import"./form-control-host.style-Bk3eZ_it.js";import"./form-control-header.component-C1Ohh0CR.js";import"./badge.component-CJIM5A1c.js";import"./flex.component-CkfrOmGM.js";import"./triangle-exclamation.component-MW-0-8T8.js";import"./card.component-BSk-pv83.js";import"./checkmark.component-C4Ax8H_a.js";import"./rbcb-toggle.template-BRraHVe1.js";import"./chevron-bottom.component-Dl1i5ZCt.js";import"./chevron-right-small.component-BRurjw46.js";import"./chevron-right.component-XwbG6qxj.js";import"./input.component-DtW-6dwB.js";import"./textarea.component-CT_WnsJ4.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BbPi3Y-a.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
