import{x as d}from"./iframe-BB1AeN_l.js";import"./pagination-D211Ig1_.js";import"./card-CJh8UsGx.js";import"./text-BAg5dPev.js";import"./flex-C_ROBdtX.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-9Vo_B2Ew.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DzDOShCy.js";import"./icon-CIIABHJB.js";import"./context-menu.component-B1C80Wrh.js";import"./unwrap-slots-DBrIZ4iP.js";import"./ref-SeW976P8.js";import"./dot-grid-one-horizontal-bVsigoju.js";import"./menu-heading.component-BD-ykrii.js";import"./dropdown.component-BvZx44hV.js";import"./query-async-BT6-RIew.js";import"./form-control-host.style-BwHe8BXE.js";import"./form-control-header.component-OcfQxcTn.js";import"./badge.component-KRZ7kYKB.js";import"./flex.component-DNe7pAF4.js";import"./triangle-exclamation.component-DVuwilpG.js";import"./card.component-D96rg0oV.js";import"./checkmark.component-BHiVw2a3.js";import"./rbcb-toggle.template-DhCWQ82H.js";import"./chevron-bottom.component-CGH2wBxt.js";import"./chevron-right-small.component-giqlXbLD.js";import"./chevron-right.component-DSfHWxeH.js";import"./input.component-ZA8mz-BL.js";import"./textarea.component-B9yRa2HP.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-agJWcuOE.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
