import{x as d}from"./iframe-DrqEGtjo.js";import"./pagination-hm-ZWwkw.js";import"./card-Dq-rPXGu.js";import"./text-CrQWW2Hf.js";import"./flex-BwjMC5gO.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BCusQOFq.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D2HBUP9b.js";import"./icon.component-D76w-iSW.js";import"./context-menu.component-BBm_L-nI.js";import"./unwrap-slots-D0JYZYtZ.js";import"./ref-FxJ7z-Zk.js";import"./dot-grid-one-horizontal-BV8U3wy0.js";import"./menu-heading.component-CVM5NlIK.js";import"./dropdown.component-Bl8wnvlc.js";import"./query-async-DBdfgO-b.js";import"./form-control-host.style-B_FyDwVy.js";import"./form-control-header.component-DB4AEqLk.js";import"./badge.component-CdFO4kDU.js";import"./flex.component-DkgKScwv.js";import"./triangle-exclamation.component-BWaIZmck.js";import"./card.component-11OhfyH3.js";import"./checkmark.component-D4cK8ewx.js";import"./rbcb-toggle.template-DHHbLVZc.js";import"./chevron-bottom.component-DsnLtb4K.js";import"./chevron-right-small.component-CR-RABYv.js";import"./chevron-right.component-B67IayeX.js";import"./input.component-DCvq6F5Q.js";import"./textarea.component-Bsx1sRqA.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B1IbgPtc.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
