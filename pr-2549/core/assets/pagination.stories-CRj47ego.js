import{x as d}from"./iframe-CSksZRap.js";import"./pagination-C_u83jAb.js";import"./card-DYiWdQxb.js";import"./text-s_8Cf5UQ.js";import"./flex-C_U2b4Qa.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-CaOqc7Kg.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-CktCRTBh.js";import"./icon.component-CNlrximv.js";import"./context-menu.component-CORYhNY5.js";import"./unwrap-slots-DDtLzO_s.js";import"./ref-DokFgXeA.js";import"./dot-grid-one-horizontal-sLQxzPf1.js";import"./menu-heading.component-Jpv0Fq9w.js";import"./dropdown.component-DdmuYnt0.js";import"./query-async-BDXSwdw6.js";import"./form-control-host.style-BniS2r53.js";import"./form-control-header.component-DOwO468d.js";import"./badge.component-DUAJ5JL6.js";import"./flex.component-DQfvqduE.js";import"./triangle-exclamation.component-CzauSUGa.js";import"./card.component-EMd9tPgL.js";import"./checkmark.component-BmQxmk0F.js";import"./rbcb-toggle.template-B31dR20f.js";import"./chevron-bottom.component-D0U2UW2Z.js";import"./chevron-right-small.component-nGyLtRMF.js";import"./chevron-right.component-CIecsr3z.js";import"./input.component-B2GYiYry.js";import"./textarea.component-DKPlomET.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-2JU9FDcA.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
