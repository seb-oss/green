import{x as d}from"./iframe-BwDoi1Fm.js";import"./pagination-D3rm8fYh.js";import"./card-VzCdd3kH.js";import"./text-D193KjEj.js";import"./flex-C3XxBz7h.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BJPkkivu.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DUud-JUe.js";import"./icon.component-DPVsjgwj.js";import"./context-menu.component-CN01oAr6.js";import"./unwrap-slots-D_fLyB5m.js";import"./ref-khYPCGb3.js";import"./dot-grid-one-horizontal-IINN5zRo.js";import"./menu-heading.component-Blg0xzDl.js";import"./dropdown.component-B4837ogM.js";import"./query-async-Dbuuqrug.js";import"./form-control-host.style-D-fpf_Xd.js";import"./form-control-header.component-C7Y-wQ_A.js";import"./badge.component-DCsSHudu.js";import"./flex.component-CCTIOSPn.js";import"./triangle-exclamation.component-4x_6x99D.js";import"./card.component-MULgC75p.js";import"./checkmark.component-BjcX-MhZ.js";import"./rbcb-toggle.template-Cond_9gc.js";import"./chevron-bottom.component-Du5RSqdZ.js";import"./chevron-right-small.component-C6EWdLXF.js";import"./chevron-right.component-Bb86Xvd6.js";import"./input.component-De4NZfMd.js";import"./textarea.component-DQIJAdDR.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B2HMty9c.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
