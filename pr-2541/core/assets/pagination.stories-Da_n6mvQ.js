import{x as d}from"./iframe-BqGQMgre.js";import"./pagination-iE0lpMYZ.js";import"./card-C3CnAott.js";import"./text-B8fzJkGN.js";import"./flex-CgpeA6DV.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-A84E-bow.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-lCRludxu.js";import"./icon.component-a_PpOsy6.js";import"./context-menu.component-C9_li6pH.js";import"./unwrap-slots-aIpqblQh.js";import"./ref-CAjcnkY8.js";import"./dot-grid-one-horizontal-DrQaTgnI.js";import"./menu-heading.component-Bk4uPTwo.js";import"./dropdown.component-CSnJz4XO.js";import"./query-async-bxIUuKRJ.js";import"./form-control-host.style-kZKpX99p.js";import"./form-control-header.component-oTzq_AQn.js";import"./badge.component-BSZ6Hyov.js";import"./flex.component-BYJoTcL2.js";import"./triangle-exclamation.component-BgHuCrGu.js";import"./card.component-G29PdKBN.js";import"./checkmark.component-N9iwm-f0.js";import"./rbcb-toggle.template-BifcVV6-.js";import"./chevron-bottom.component-C9EqCAwa.js";import"./chevron-right-small.component-DBmgY1Du.js";import"./chevron-right.component-BWfzDG59.js";import"./input.component-DlUP2w6v.js";import"./textarea.component-BqjUk-k1.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CRFJxRoL.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
