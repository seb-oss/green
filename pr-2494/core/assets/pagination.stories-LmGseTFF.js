import{x as d}from"./iframe-CphTqrpC.js";import"./pagination-cKGUgjjs.js";import"./card-CmfFPUOR.js";import"./text-P6hATuGO.js";import"./flex-CUg2c5LD.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-43j5tGsZ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DnSpIcls.js";import"./icon-NNEjDyGx.js";import"./context-menu.component-C3kXBFJ-.js";import"./unwrap-slots-V14rExW2.js";import"./ref-B129P54K.js";import"./dot-grid-one-horizontal-Bw7m3ygP.js";import"./menu-heading.component-B_dMNAnd.js";import"./dropdown.component-CXG-8OKS.js";import"./query-async-K34zwBHU.js";import"./form-control-host.style-OfN79W1X.js";import"./form-control-header.component-g45-Z6PE.js";import"./badge.component-pUgHifQR.js";import"./flex.component-C3mJesLf.js";import"./triangle-exclamation.component-C4H2gis4.js";import"./card.component-C17Gk-NN.js";import"./checkmark.component-D3KJZJrY.js";import"./rbcb-toggle.template-946MGrMC.js";import"./chevron-bottom.component-BIwfKqGu.js";import"./chevron-right-small.component-Bp3waVqK.js";import"./chevron-right.component-MegzYGQN.js";import"./input.component-jF5h4eGG.js";import"./textarea.component-CJoz3Ywp.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-Bg1Rewyg.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
