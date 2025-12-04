import{x as d}from"./iframe-BaRCEa-L.js";import"./pagination-C2S4YoXh.js";import"./card-D6jCDTdx.js";import"./text-4p6Z3uR_.js";import"./flex-QseP4vIw.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-Bx35JVnx.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BcVRW3tA.js";import"./icon-DNGZW9LP.js";import"./context-menu.component-B7cSLXQ-.js";import"./unwrap-slots-DpNBtNps.js";import"./ref-zHdRsj_s.js";import"./dot-grid-one-horizontal-lJJ4-BRF.js";import"./menu-heading.component-Cp650cyO.js";import"./dropdown.component-D_UYWkgv.js";import"./query-async-TYAgM2bT.js";import"./form-control-host.style-BOitDW4d.js";import"./form-control-header.component-DImtrAVx.js";import"./badge.component-BKCuHPTU.js";import"./flex.component-BLJGN402.js";import"./triangle-exclamation.component-DmvS0uhg.js";import"./card.component-BPpGta_r.js";import"./checkmark.component-C7oWUu7P.js";import"./rbcb-toggle.template-DPxWVkBY.js";import"./chevron-bottom.component-Bivqf_6k.js";import"./chevron-right-small.component-BGkwlXML.js";import"./chevron-right.component-vv9ZnvJu.js";import"./input.component-Bx1R21CV.js";import"./textarea.component-DUDetZvd.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CrVct3aB.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
