import{x as n}from"./lit-element-Bx14lxc-.js";import"./pagination-CN7VNsTC.js";import"./card-D7igt1vy.js";import"./text-Z9s1gHys.js";import"./flex-COHx0Pry.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./gds-element-DTROifYq.js";import"./tokens.style-CQAfIFlK.js";import"./button.component-D-n6FD2-.js";import"./query-p8xgzTDt.js";import"./if-defined-CVqwUuaf.js";import"./static-B8S6DEnV.js";import"./transitional-styles-UDysEBZS.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-C4FFYA_h.js";import"./watch-tFciLXSI.js";import"./context-menu.component-lyyXBHF2.js";import"./runtime-CNluP0A8.js";import"./unwrap-slots-CdkSbl-V.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./dot-grid-one-horizontal-BrjyvyG6.js";import"./icon-CnieVCYX.js";import"./unsafe-html-CYO4avEf.js";import"./popover.component-D6JhbD8X.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-pakmiBgV.js";import"./menu-heading.component-Bqscp6sb.js";import"./dropdown.component-BF8VGxGE.js";import"./query-async-MEroNOeJ.js";import"./form-control-host.style-RS4a5kb8.js";import"./form-control-header.component-B7mgF3JQ.js";import"./badge.component-5SeJC25S.js";import"./flex.component-BYRotL8F.js";import"./div.component-D6IvvHfw.js";import"./triangle-exclamation.component-DQsKbNjx.js";import"./card.component-eDIV52nF.js";import"./checkmark.component-DL3WBVUQ.js";import"./rbcb-toggle.template-DqXF-ZkM.js";import"./chevron-bottom.component-CSL53Fnd.js";import"./chevron-right-small.component-DK4xuJpw.js";import"./default-typography.styles-B_Uut80G.js";const et={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},i=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return n`
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
          @gds-rows-change=${i}
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
}`,...(g=(r=e.parameters)==null?void 0:r.docs)==null?void 0:g.source}}};const at=["Default"];export{e as Default,at as __namedExportsOrder,et as default};
