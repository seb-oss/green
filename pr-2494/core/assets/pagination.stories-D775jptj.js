import{x as d}from"./iframe-DkPZz_97.js";import"./pagination-CGMBrZac.js";import"./card-BQqnBv8_.js";import"./text-DC6bzaC-.js";import"./flex-Bqj-vtK_.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BgzLozQd.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component--KjFInlF.js";import"./icon-DN_oyRlJ.js";import"./context-menu.component-BeA5uzj8.js";import"./unwrap-slots-SYsxGNvE.js";import"./ref-W6GeTR1R.js";import"./dot-grid-one-horizontal-B2F2Fik2.js";import"./menu-heading.component-Bj7b3-A1.js";import"./dropdown.component-DqzajUff.js";import"./query-async-BKbZQU_X.js";import"./form-control-host.style-CHrTEr_y.js";import"./form-control-header.component-DgCAuzYX.js";import"./badge.component-DDl4AWWA.js";import"./flex.component-BC5-6DCY.js";import"./triangle-exclamation.component-X_U_Jeih.js";import"./card.component-BHDqNz7G.js";import"./checkmark.component-CD8QOEUE.js";import"./rbcb-toggle.template-NshSWAmN.js";import"./chevron-bottom.component-Br1X_1R1.js";import"./chevron-right-small.component-C0D5OgPf.js";import"./chevron-right.component-CEf66xyo.js";import"./input.component-DDMwizhs.js";import"./textarea.component-B6TsQmM1.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BAfgR58X.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
