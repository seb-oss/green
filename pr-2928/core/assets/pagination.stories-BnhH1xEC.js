import{b as i}from"./iframe-CoMgfUnn.js";import"./pagination-CxgTsYe5.js";import"./card-1s_vGMyt.js";import"./text-CGBZLpf9.js";import"./flex-DONZ6bOf.js";import"./preload-helper-PPVm8Dsz.js";import"./localized-decorator-BjW358Ct.js";import"./popover.component-C4cbn2Iq.js";import"./floating-ui.dom-DPpwG6Py.js";import"./cross-small.component-__yn8hLW.js";import"./icon.component-1Yrb8YsT.js";import"./context-menu.component-DmWBW53E.js";import"./unwrap-slots-DCn0XpRK.js";import"./ref-CDl01KYo.js";import"./dot-grid-one-horizontal-BKtqwzRa.js";import"./menu-heading.component--eVourUm.js";import"./dropdown.component-C1JMXgI1.js";import"./query-async-BOsc-dSG.js";import"./form-control-host.style-BTlghPiB.js";import"./form-control-header.component-Dg0UKXmy.js";import"./badge.component-BEaN4RSx.js";import"./flex.component-CRiqkDcn.js";import"./triangle-exclamation.component-CeWW5eOo.js";import"./card.component-DXnvr3OR.js";import"./circle-info.component-8ntybRSE.js";import"./checkmark.component-Dm1lE9BW.js";import"./rbcb-toggle.template-C0qfEwCZ.js";import"./chevron-bottom.component-lp30V_IA.js";import"./chevron-right-small.component-2vBDUIwA.js";import"./chevron-right.component-CcJ-T_PU.js";import"./input.component-DRqrWHCJ.js";import"./textarea.component-Dbiu_UYg.js";import"./resize-observer-CfkbZofs.js";import"./text.component-CrMzIzxt.js";import"./default-typography.styles-CmW1auHL.js";const j={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},n={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:e=>{const a=t=>{e.page=t.detail.page,document.querySelector("[data-page]").innerHTML=String(e.page),document.querySelector("[data-pagination]").setAttribute("page",String(e.page))},s=t=>{e.rows=t.detail.rows,e.page=1,document.querySelector("[data-rows]").innerHTML=String(e.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(e.rows))};return i`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="neutral-02" flex-direction="row" gap="4xl" outline>
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page>${e.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows>${e.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${e.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination
          page="${e.page}"
          rows="${e.rows}"
          .total=${e.total}
          .options=${e.options}
          ?hide-options="${e.hideOptions}"
          @gds-page-change=${a}
          @gds-rows-change=${s}
        ></gds-pagination>
      </gds-flex>
    `}},o={args:{page:1,rows:8,total:100,options:[8],hideOptions:!1,label:"1-8 of 100"},render:e=>{const a=t=>{e.page=t.detail.page,document.querySelector("[data-page-single]").innerHTML=String(e.page),document.querySelector("[data-pagination-single]").setAttribute("page",String(e.page))},s=t=>{e.rows=t.detail.rows,e.page=1,document.querySelector("[data-rows-single]").innerHTML=String(e.rows),document.querySelector("[data-page-single]").innerHTML="1",document.querySelector("[data-pagination-single]").setAttribute("page","1"),document.querySelector("[data-pagination-single]").setAttribute("rows",String(e.rows))};return i`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="neutral-02" flex-direction="row" gap="4xl" outline>
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-single>${e.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-single>${e.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${e.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-single
          page="${e.page}"
          rows="${e.rows}"
          .total=${e.total}
          .options=${e.options}
          ?hide-options="${e.hideOptions}"
          label="${e.label}"
          @gds-page-change=${a}
          @gds-rows-change=${s}
        ></gds-pagination>
      </gds-flex>
    `}},r={args:{page:1,rows:10,total:8,options:[5,10,20,50,100],hideOptions:!1,label:"1-8 of 8"},parameters:{docs:{description:{story:`
 When all items fit on a single page (total ≤ rows), page navigation is hidden.

 If there are multiple page-size options, the rows-per-page selector remains visible so users can still switch to a smaller page size.
        `}}},render:e=>{const a=t=>{e.page=t.detail.page,document.querySelector("[data-page-one]").innerHTML=String(e.page),document.querySelector("[data-pagination-one]").setAttribute("page",String(e.page))},s=t=>{e.rows=t.detail.rows,e.page=1,document.querySelector("[data-rows-one]").innerHTML=String(e.rows),document.querySelector("[data-page-one]").innerHTML="1",document.querySelector("[data-pagination-one]").setAttribute("page","1"),document.querySelector("[data-pagination-one]").setAttribute("rows",String(e.rows))};return i`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="neutral-02" flex-direction="row" gap="4xl" outline>
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-one>${e.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-one>${e.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>${e.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-one
          page="${e.page}"
          rows="${e.rows}"
          .total=${e.total}
          .options=${e.options}
          ?hide-options="${e.hideOptions}"
          label="${e.label}"
          @gds-page-change=${a}
          @gds-rows-change=${s}
        ></gds-pagination>
      </gds-flex>
    `}},g={render:()=>i`
    <gds-flex flex-direction="column" gap="m">
      <gds-text id="pagination-label" tag="label">Results navigation</gds-text>
      <gds-text id="pagination-desc" font-size="detail-s">
        Navigate between pages of search results.
      </gds-text>
      <gds-pagination
        page="1"
        rows="10"
        .total=${200}
        .options=${[10,20,50]}
        gds-aria-labelledby="pagination-label"
        gds-aria-describedby="pagination-desc"
      ></gds-pagination>
    </gds-flex>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    rows: 10,
    total: 2000,
    options: [5, 10, 20, 50, 100],
    hideOptions: false
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
        <gds-card variant="neutral-02" flex-direction="row" gap="4xl" outline>
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
          ?hide-options="\${args.hideOptions}"
          @gds-page-change=\${handlePageChange}
          @gds-rows-change=\${handleRowsChange}
        ></gds-pagination>
      </gds-flex>
    \`;
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    rows: 8,
    total: 100,
    options: [8],
    hideOptions: false,
    label: '1-8 of 100'
  },
  render: args => {
    const handlePageChange = (e: CustomEvent) => {
      args.page = e.detail.page;
      document.querySelector('[data-page-single]')!.innerHTML = String(args.page);
      document.querySelector('[data-pagination-single]')!.setAttribute('page', String(args.page));
    };
    const handleRowsChange = (e: CustomEvent) => {
      args.rows = e.detail.rows;
      args.page = 1;
      document.querySelector('[data-rows-single]')!.innerHTML = String(args.rows);
      document.querySelector('[data-page-single]')!.innerHTML = '1';
      document.querySelector('[data-pagination-single]')!.setAttribute('page', '1');
      document.querySelector('[data-pagination-single]')!.setAttribute('rows', String(args.rows));
    };
    return html\`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="neutral-02" flex-direction="row" gap="4xl" outline>
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-single>\${args.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-single>\${args.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>\${args.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-single
          page="\${args.page}"
          rows="\${args.rows}"
          .total=\${args.total}
          .options=\${args.options}
          ?hide-options="\${args.hideOptions}"
          label="\${args.label}"
          @gds-page-change=\${handlePageChange}
          @gds-rows-change=\${handleRowsChange}
        ></gds-pagination>
      </gds-flex>
    \`;
  }
}`,...o.parameters?.docs?.source},description:{story:`When the options array contains only a single value, the page size selector
is automatically hidden since there's no choice to make. This is useful when
you want a fixed page size without showing the selector UI.`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    rows: 10,
    total: 8,
    options: [5, 10, 20, 50, 100],
    hideOptions: false,
    label: '1-8 of 8'
  },
  parameters: {
    docs: {
      description: {
        story: \`
 When all items fit on a single page (total ≤ rows), page navigation is hidden.

 If there are multiple page-size options, the rows-per-page selector remains visible so users can still switch to a smaller page size.
        \`
      }
    }
  },
  render: args => {
    const handlePageChange = (e: CustomEvent) => {
      args.page = e.detail.page;
      document.querySelector('[data-page-one]')!.innerHTML = String(args.page);
      document.querySelector('[data-pagination-one]')!.setAttribute('page', String(args.page));
    };
    const handleRowsChange = (e: CustomEvent) => {
      args.rows = e.detail.rows;
      args.page = 1;
      document.querySelector('[data-rows-one]')!.innerHTML = String(args.rows);
      document.querySelector('[data-page-one]')!.innerHTML = '1';
      document.querySelector('[data-pagination-one]')!.setAttribute('page', '1');
      document.querySelector('[data-pagination-one]')!.setAttribute('rows', String(args.rows));
    };
    return html\`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="neutral-02" flex-direction="row" gap="4xl" outline>
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-one>\${args.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text data-rows-one>\${args.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Total:</gds-text>
            <gds-text>\${args.total}</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-one
          page="\${args.page}"
          rows="\${args.rows}"
          .total=\${args.total}
          .options=\${args.options}
          ?hide-options="\${args.hideOptions}"
          label="\${args.label}"
          @gds-page-change=\${handlePageChange}
          @gds-rows-change=\${handleRowsChange}
        ></gds-pagination>
      </gds-flex>
    \`;
  }
}`,...r.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <gds-flex flex-direction="column" gap="m">
      <gds-text id="pagination-label" tag="label">Results navigation</gds-text>
      <gds-text id="pagination-desc" font-size="detail-s">
        Navigate between pages of search results.
      </gds-text>
      <gds-pagination
        page="1"
        rows="10"
        .total=\${200}
        .options=\${[10, 20, 50]}
        gds-aria-labelledby="pagination-label"
        gds-aria-describedby="pagination-desc"
      ></gds-pagination>
    </gds-flex>
  \`
}`,...g.parameters?.docs?.source},description:{story:"Demonstrates how `gds-aria-labelledby` and `gds-aria-describedby` forward\nARIA element references to the internal `<nav>` element.",...g.parameters?.docs?.description}}};const B=["Default","SingleOption","OnePage","ARIAForwarding"];export{g as ARIAForwarding,n as Default,r as OnePage,o as SingleOption,B as __namedExportsOrder,j as default};
