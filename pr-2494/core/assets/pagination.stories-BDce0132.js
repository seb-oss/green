import{x as d}from"./iframe-82Tnoa_h.js";import"./pagination-BWZ2v7ZG.js";import"./card-Dz8HQLBZ.js";import"./text-DujAjQ5y.js";import"./flex-BJbQkT9-.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CjCMNABt.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-B1JXgPL4.js";import"./icon-D4o9Y-go.js";import"./context-menu.component-D2COzRhG.js";import"./unwrap-slots-GiXhiRwF.js";import"./ref-C7EbxKVo.js";import"./dot-grid-one-horizontal-CeicomCH.js";import"./menu-heading.component-C2AI0ql4.js";import"./dropdown.component-C1_1LvO2.js";import"./query-async-Dmd5b_ps.js";import"./form-control-host.style-C6iuhqJZ.js";import"./form-control-header.component-DFdcLlxs.js";import"./badge.component-B86eRi8E.js";import"./flex.component-CQ6XDBn5.js";import"./triangle-exclamation.component-hLj4G1xF.js";import"./card.component-CDVsJdT5.js";import"./checkmark.component-qHz7eKsb.js";import"./rbcb-toggle.template-D_Q5UE8F.js";import"./chevron-bottom.component-C53qZNgl.js";import"./chevron-right-small.component-DolZzFrI.js";import"./chevron-right.component-q8cpdYQN.js";import"./input.component-3Sw5fXY3.js";import"./textarea.component-Euqw61KR.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CfKFstRe.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
