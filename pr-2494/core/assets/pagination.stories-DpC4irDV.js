import{x as d}from"./iframe-CS6EEV91.js";import"./pagination-CufEHlxK.js";import"./card-CI6aQHwG.js";import"./text-CE-Zr2DM.js";import"./flex-ClSCK8g7.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-O9hnH7kk.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-DbG0KCRr.js";import"./icon.component-D34iUjON.js";import"./context-menu.component-BejOf3IJ.js";import"./unwrap-slots-CvKRnoPn.js";import"./ref-DvdVzVbK.js";import"./dot-grid-one-horizontal-CQ0F8wLJ.js";import"./menu-heading.component-muXvlqnp.js";import"./dropdown.component-D0AHtoNZ.js";import"./query-async-CtQE9pX3.js";import"./form-control-host.style-BvMXw3Aj.js";import"./form-control-header.component-pkmTIkbb.js";import"./badge.component-CkOtKw2o.js";import"./flex.component-DMomB0ey.js";import"./triangle-exclamation.component-BHQx51Up.js";import"./card.component-BeKraOVA.js";import"./checkmark.component-uX1EUaK9.js";import"./rbcb-toggle.template-CfsFP4PJ.js";import"./chevron-bottom.component-DybnkFu3.js";import"./chevron-right-small.component-6JnQvNZg.js";import"./chevron-right.component-CQoU_484.js";import"./input.component-CACToTLu.js";import"./textarea.component-DV5uZnFX.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-ChWG1v38.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
