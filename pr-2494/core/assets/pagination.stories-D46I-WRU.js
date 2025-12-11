import{x as d}from"./iframe-CoDlFn-2.js";import"./pagination-DZZJ4w6N.js";import"./card-CRsSDhtB.js";import"./text-mXcf_us8.js";import"./flex-VSgv6Llp.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BMWpFrCH.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Dlt82fxl.js";import"./icon.component-B25M09sZ.js";import"./context-menu.component-Czm8AEzi.js";import"./unwrap-slots-CQN3ajZW.js";import"./ref-Ct6mORED.js";import"./dot-grid-one-horizontal-BBNmPPQ9.js";import"./menu-heading.component-DGFS4Gnw.js";import"./dropdown.component-BcHAPe-O.js";import"./query-async-BGZr-9Mk.js";import"./form-control-host.style-Bw_gLjDp.js";import"./form-control-header.component-C-90NRYx.js";import"./badge.component-dWWg2vfr.js";import"./flex.component-DQTWXpNE.js";import"./triangle-exclamation.component-BcmZDyBE.js";import"./card.component-Ca_zS0WH.js";import"./checkmark.component-Bn3uf6la.js";import"./rbcb-toggle.template-BIdP2-C1.js";import"./chevron-bottom.component-CD1CqzJo.js";import"./chevron-right-small.component-B5Gy1gJK.js";import"./chevron-right.component-Cxq1GlaM.js";import"./input.component-Cou4uHv3.js";import"./textarea.component-Bfeu5q2L.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-oO5RkUKr.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
