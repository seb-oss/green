import{x as d}from"./iframe-DVeeRdOd.js";import"./pagination-BVVv3-pM.js";import"./card-C0f4P334.js";import"./text-CguANlXC.js";import"./flex-DZQ9UIvL.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DDrkGDLX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CirK8ctV.js";import"./icon.component-CoMPRi_a.js";import"./context-menu.component-CnaC33i8.js";import"./unwrap-slots-zxulWlFr.js";import"./ref-B6MGkZIy.js";import"./dot-grid-one-horizontal-CwxOmirB.js";import"./menu-heading.component-BhNDPz_y.js";import"./dropdown.component-DiP0YO4P.js";import"./query-async-DhtE9y97.js";import"./form-control-host.style-DOcP15jR.js";import"./form-control-header.component-BnkAFhuW.js";import"./badge.component-DSqa2Y-i.js";import"./flex.component-DdLMRTPc.js";import"./triangle-exclamation.component-DcuESqGd.js";import"./card.component-EUYVrFHo.js";import"./checkmark.component-DstJ3Io5.js";import"./rbcb-toggle.template-C5ggHXbb.js";import"./chevron-bottom.component-BTXvjUxs.js";import"./chevron-right-small.component-nZze__Xo.js";import"./chevron-right.component-X2wsw4v5.js";import"./input.component-cFSiAMBw.js";import"./textarea.component-CipfvARw.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B6Ch4_6F.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
