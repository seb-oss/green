import{x as d}from"./iframe-BOHAtbDc.js";import"./pagination-CxRwLeFa.js";import"./card-Mb9U-AGF.js";import"./text-BCb6UGLk.js";import"./flex-BPHFrF19.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-oIaM6sb9.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-s8GnMO01.js";import"./icon.component-CckNoxE9.js";import"./context-menu.component-Dtoxqw3f.js";import"./unwrap-slots-ByL-Zlfw.js";import"./ref-DSYq4OdA.js";import"./dot-grid-one-horizontal-Gnr0lI4x.js";import"./menu-heading.component-DEtaJqD8.js";import"./dropdown.component-zDT8GQmr.js";import"./query-async-6u03Q-1n.js";import"./form-control-host.style-D5DCJsR2.js";import"./form-control-header.component-CmaXQlKY.js";import"./badge.component-NmjUJ4ly.js";import"./flex.component-B1_gXVBm.js";import"./triangle-exclamation.component-eMhvn723.js";import"./card.component-B4Q4unX_.js";import"./checkmark.component-CxUMZKrr.js";import"./rbcb-toggle.template-D38iM_W1.js";import"./chevron-bottom.component-ieU_2jKv.js";import"./chevron-right-small.component-C0FbDKgq.js";import"./chevron-right.component-vRYvXDVk.js";import"./input.component-DfRYkNDv.js";import"./textarea.component-YyS8Uf8K.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-dLhtVCim.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
