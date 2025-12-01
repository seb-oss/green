import{x as d}from"./iframe-CY5pIDSk.js";import"./pagination-DC_v_rk8.js";import"./card-De29MhkH.js";import"./text-OpfsOnjO.js";import"./flex-BFKwe3dr.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-3pkpXZlK.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BGON9i4d.js";import"./icon-DWJxsY7S.js";import"./context-menu.component-B4XW30Tf.js";import"./unwrap-slots-CPM0vpDG.js";import"./ref-DRKDgsvN.js";import"./dot-grid-one-horizontal-DUk5Nk0V.js";import"./menu-heading.component-BmgfoZ7c.js";import"./dropdown.component-DFJxHyrR.js";import"./query-async-CgzmWpgl.js";import"./form-control-host.style-CHJi9X0z.js";import"./form-control-header.component-U6k5TtwX.js";import"./badge.component-CrUZI8XM.js";import"./flex.component-DD9is5Ql.js";import"./triangle-exclamation.component-C6UIeKX0.js";import"./card.component-Bcv2By9I.js";import"./checkmark.component-eSNk7qpr.js";import"./rbcb-toggle.template-OrtU6R9f.js";import"./chevron-bottom.component-BPiG33OG.js";import"./chevron-right-small.component-DlI6Fj82.js";import"./chevron-right.component-Drp1q_B3.js";import"./input.component-56m4BFKI.js";import"./textarea.component-CbEP66_F.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-EFBNqNTm.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
