import{x as d}from"./iframe-BAAemVnK.js";import"./pagination-ZX-C17W7.js";import"./card-Edv415gQ.js";import"./text-L45QW7PN.js";import"./flex-Ds38NmSd.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-45nDFrnS.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DnnIHUYg.js";import"./icon-ChY6WF1P.js";import"./context-menu.component-D3ieYVS9.js";import"./unwrap-slots-jluVOYfj.js";import"./ref-XdB1cbrI.js";import"./dot-grid-one-horizontal-C11IeGEm.js";import"./menu-heading.component-BJWdy96l.js";import"./dropdown.component-CW9PEcmP.js";import"./query-async-Dn-OAELv.js";import"./form-control-host.style-BtVAVT2C.js";import"./form-control-header.component-3Xs6RQvY.js";import"./badge.component-BK47dkLc.js";import"./flex.component-DiGRmu1O.js";import"./triangle-exclamation.component-DbesgHH8.js";import"./card.component-CWOs2bGh.js";import"./checkmark.component-Ba_f-YCt.js";import"./rbcb-toggle.template-CBeepuZJ.js";import"./chevron-bottom.component-i0NHzIQR.js";import"./chevron-right-small.component-D7aBlayV.js";import"./chevron-right.component-CjiRJog_.js";import"./input.component-cOgnqTzD.js";import"./textarea.component-COYolaSS.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BC5-Dj6Y.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
