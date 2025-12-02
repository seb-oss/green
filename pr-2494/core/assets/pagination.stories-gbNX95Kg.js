import{x as d}from"./iframe-i12o6XVU.js";import"./pagination-Dv_peKvg.js";import"./card-DJHXmiMs.js";import"./text-IeU5CE68.js";import"./flex-B0BigExw.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-DqlE6Czh.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BK8A1_tp.js";import"./icon-DjgL6gXe.js";import"./context-menu.component-B21Wo2FO.js";import"./unwrap-slots-C1Z7OPG_.js";import"./ref-ssZjXKBH.js";import"./dot-grid-one-horizontal-D0GSdLDd.js";import"./menu-heading.component-BNIEo47A.js";import"./dropdown.component-BQlArCcJ.js";import"./query-async-BqSA2k4Q.js";import"./form-control-host.style-C36XXjn9.js";import"./form-control-header.component-5NhbrV5B.js";import"./badge.component-BUojB9KK.js";import"./flex.component-Ho4REAcL.js";import"./triangle-exclamation.component-DzxSOBWX.js";import"./card.component-DddpDiRM.js";import"./checkmark.component-BUjGUXRu.js";import"./rbcb-toggle.template-CkpPi3J9.js";import"./chevron-bottom.component-DruDI_Ol.js";import"./chevron-right-small.component-CBju89fh.js";import"./chevron-right.component-hbaVbW4n.js";import"./input.component-5-usTrfd.js";import"./textarea.component-BAsHQJxY.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CobrqiFo.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
