import{x as d}from"./iframe-DVJINxuy.js";import"./pagination-CcvHeW_8.js";import"./card-Csy-3hne.js";import"./text-CGCi0eev.js";import"./flex-CBlLvrfN.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-C8o6T2Uy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-ChyKbJbR.js";import"./icon-Doc_EbFR.js";import"./context-menu.component-DAq8MHHu.js";import"./unwrap-slots-dv7llA1R.js";import"./ref-8KjJmgRq.js";import"./dot-grid-one-horizontal-W8gKYkVB.js";import"./menu-heading.component-BfAZIjGd.js";import"./dropdown.component-7_Lr0HhQ.js";import"./query-async-DjQCSr_2.js";import"./form-control-host.style-BI4b7w9A.js";import"./form-control-header.component-CL0bS-6Q.js";import"./badge.component-Bvsdu2QU.js";import"./flex.component-BsWdKKZp.js";import"./triangle-exclamation.component-DRuxnoO8.js";import"./card.component-PvIfp0bI.js";import"./checkmark.component-CsDy6Id6.js";import"./rbcb-toggle.template-DaUWx10o.js";import"./chevron-bottom.component-C-R2pIAE.js";import"./chevron-right-small.component-C4W-_ats.js";import"./chevron-right.component-wzO7Vwp_.js";import"./input.component-D_8imp2Q.js";import"./textarea.component--FtpNsR0.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-BP2P8d_v.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
