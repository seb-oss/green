import{x as d}from"./iframe-DyQnbBmV.js";import"./pagination-CFYX8jqM.js";import"./card-DlVKt0Uj.js";import"./text-CjR9-kUm.js";import"./flex-BgCBvrLo.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CS0EfORc.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-D-YZIqIE.js";import"./icon.component-B2i-4XQ5.js";import"./context-menu.component-BssI0Fog.js";import"./unwrap-slots-CsRQ_eUP.js";import"./ref-D1uC5_U4.js";import"./dot-grid-one-horizontal-OHsuHh8J.js";import"./menu-heading.component-tHLTF0zX.js";import"./dropdown.component-BjQ3b5EE.js";import"./query-async-BvSy9cX3.js";import"./form-control-host.style-jbD_7sMb.js";import"./form-control-header.component-DxuI8_4W.js";import"./badge.component-B8xQr0iJ.js";import"./flex.component-Q4-gstfs.js";import"./triangle-exclamation.component-Y7cwv8lB.js";import"./card.component-CrS5JGOg.js";import"./checkmark.component-Jwofbkkq.js";import"./rbcb-toggle.template-Bj318MYo.js";import"./chevron-bottom.component-WWqQZQte.js";import"./chevron-right-small.component-CVxWiXJR.js";import"./chevron-right.component-D8oO0yD8.js";import"./input.component-B5qg3sdS.js";import"./textarea.component-DMjJlbJI.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-B9Tu6_7b.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
