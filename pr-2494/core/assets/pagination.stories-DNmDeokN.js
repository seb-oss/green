import{x as d}from"./iframe-BOH9Rnwv.js";import"./pagination-De2_eT5m.js";import"./card-CJ4WwzbP.js";import"./text-Dm9D5fc7.js";import"./flex-C8lnRyLe.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-B6YnT7AP.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-GFdN2d9r.js";import"./icon-BVIke8yQ.js";import"./context-menu.component-CyyWGDfm.js";import"./unwrap-slots-9vnwuVkU.js";import"./ref-K09N9XRK.js";import"./dot-grid-one-horizontal-Pswx_Ltd.js";import"./menu-heading.component-ZOZIxyZj.js";import"./dropdown.component-CZEFkXBL.js";import"./query-async-Dy3mVHtt.js";import"./form-control-host.style-Bs8oKGbL.js";import"./form-control-header.component-BM2tuHZK.js";import"./badge.component-Bphhdekg.js";import"./flex.component-4C8h28AX.js";import"./triangle-exclamation.component-xskUIBdR.js";import"./card.component-BR4rr1Lh.js";import"./checkmark.component-M9bo-Ec3.js";import"./rbcb-toggle.template-DMb305rh.js";import"./chevron-bottom.component-CG3QG_BQ.js";import"./chevron-right-small.component-DE-_tmqd.js";import"./chevron-right.component-BjLPWJL4.js";import"./input.component-YD9zuspq.js";import"./textarea.component-Crj846mo.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-DqLm7hpF.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
