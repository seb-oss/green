import{x as d}from"./iframe-BBWJ5-ds.js";import"./pagination-Dl7zwB1W.js";import"./card-D7lvb6lV.js";import"./text-BXNUhQ3A.js";import"./flex-E9iR_G4r.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DnxZYEnf.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DGjOJg0F.js";import"./icon-BoP-1amo.js";import"./context-menu.component-DHF4lDge.js";import"./unwrap-slots-B6j1_N9m.js";import"./ref-BVapNJH6.js";import"./dot-grid-one-horizontal-1U2FMyk8.js";import"./menu-heading.component-CsLAAJ3W.js";import"./dropdown.component-B4wcTf_l.js";import"./query-async-D1tIT2yI.js";import"./form-control-host.style-GuJjBAUn.js";import"./form-control-header.component-BfOHAH8h.js";import"./badge.component-DVinoiVh.js";import"./flex.component-C6tfZiZr.js";import"./triangle-exclamation.component-DMjU8PAF.js";import"./card.component-D4eivPwx.js";import"./checkmark.component-BAurtwMB.js";import"./rbcb-toggle.template-BQMcLoi2.js";import"./chevron-bottom.component-CRPZ_sCb.js";import"./chevron-right-small.component-TR-UJ0ay.js";import"./chevron-right.component-1QzFCZEG.js";import"./input.component-CMVouQxz.js";import"./textarea.component-blkTO4SX.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BnN0KSGR.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
