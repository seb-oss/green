import{x as d}from"./iframe-CPUfTWnM.js";import"./pagination-L5EQ-xUX.js";import"./card-C5dDysza.js";import"./text--7D3WRmC.js";import"./flex-CgL4QaZ9.js";import"./preload-helper-Dp1pzeXC.js";import"./localized-decorator-B9mcl6Dx.js";import"./popover.component-BoMDT2cw.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-Cyw9zRrn.js";import"./icon.component-Bplz-VVo.js";import"./context-menu.component-C9Ae9RZm.js";import"./unwrap-slots-DjkS6qrF.js";import"./ref-RCRCqOsr.js";import"./dot-grid-one-horizontal-DRsjhpOG.js";import"./menu-heading.component-CwJc-chs.js";import"./dropdown.component-3qmvkmVR.js";import"./query-async-CvEIhKn_.js";import"./form-control-host.style-Gp0WwWVL.js";import"./form-control-header.component-tLIt-05v.js";import"./badge.component-CRAelCni.js";import"./flex.component-CgUXjsDP.js";import"./triangle-exclamation.component-10eAZtjh.js";import"./card.component-BL0_Pz_T.js";import"./checkmark.component-BsQrfa6a.js";import"./rbcb-toggle.template-DsZpZ9Dx.js";import"./chevron-bottom.component-geFA-_Q0.js";import"./chevron-right-small.component-DC1hYweF.js";import"./chevron-right.component-CGIhyCmV.js";import"./input.component-DlrS2Ot7.js";import"./textarea.component-zV_uv3eb.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CAqUTPd3.js";const G={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
}`,...(g=(r=e.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,G as default};
