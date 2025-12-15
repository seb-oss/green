import{x as d}from"./iframe-BpgTv49n.js";import"./pagination-g2Vem4GV.js";import"./card-D64QwTpH.js";import"./text-B5Ik5m2S.js";import"./flex-BKUq8LUU.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CDMlsjoG.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-PZ-O35hy.js";import"./icon.component-CgCRJZfo.js";import"./context-menu.component-CoZyR0VZ.js";import"./unwrap-slots-Df33zYnV.js";import"./ref-C9iQ0UZn.js";import"./dot-grid-one-horizontal-CbCXbqQY.js";import"./menu-heading.component-Da3X4yWY.js";import"./dropdown.component-Bosl4PJE.js";import"./query-async-BqCIaTf4.js";import"./form-control-host.style-DjbtcgIW.js";import"./form-control-header.component-B6CPBwOn.js";import"./badge.component-D6hIQrjg.js";import"./flex.component-Coy8xeVO.js";import"./triangle-exclamation.component-C9USaJQq.js";import"./card.component-D-T9nueo.js";import"./checkmark.component-CWVQtwuX.js";import"./rbcb-toggle.template-CPDo6cWk.js";import"./chevron-bottom.component-DYT29FO9.js";import"./chevron-right-small.component-D2wVJyFJ.js";import"./chevron-right.component-DKSsFw5x.js";import"./input.component-D-hy0nbf.js";import"./textarea.component-DETTyZnh.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CQkk3ZXP.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
