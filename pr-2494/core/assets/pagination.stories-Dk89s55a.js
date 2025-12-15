import{x as d}from"./iframe-BtwvFGPm.js";import"./pagination-o-iu98Cu.js";import"./card-nun5R73j.js";import"./text-a0emwcIS.js";import"./flex-BiqsGib4.js";import"./preload-helper-Dp1pzeXC.js";import"./popover.component-BeI4OxXX.js";import"./floating-ui.dom-B1INwmQZ.js";import"./cross-small.component-BvRHtQte.js";import"./icon.component-Cz--4Wh3.js";import"./context-menu.component-C4TvsUzi.js";import"./unwrap-slots-BKuoax2v.js";import"./ref-BZFeTzXL.js";import"./dot-grid-one-horizontal-mnIBCkR2.js";import"./menu-heading.component-BhwaKEUI.js";import"./dropdown.component-DQZZ7cV4.js";import"./query-async-DaooxLz3.js";import"./form-control-host.style-6irxZRnE.js";import"./form-control-header.component-bAtA4VkI.js";import"./badge.component-CvcIxvnp.js";import"./flex.component-Abzh0B7k.js";import"./triangle-exclamation.component-COC3H4kT.js";import"./card.component-Cf-YM_OB.js";import"./checkmark.component-C6RuRLWe.js";import"./rbcb-toggle.template-0rACRre_.js";import"./chevron-bottom.component-BTDIBM8J.js";import"./chevron-right-small.component-CFyjA0Yy.js";import"./chevron-right.component-3GFJWpcV.js";import"./input.component-B0TesnXH.js";import"./textarea.component-_W4r4ISx.js";import"./resize-observer-B9k8v2TZ.js";import"./default-typography.styles-CyC4ffoT.js";const F={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},e={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100]},render:t=>{const s=a=>{t.page=a.detail.page,document.querySelector("[data-page]").innerHTML=String(t.page),document.querySelector("[data-pagination]").setAttribute("page",String(t.page))},n=a=>{t.rows=a.detail.rows,t.page=1,document.querySelector("[data-rows]").innerHTML=String(t.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(t.rows))};return d`
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
