import{b as r}from"./iframe-DzFVIyCe.js";import"./pagination-tsmd9KVG.js";import"./card-DL4I2Ax5.js";import"./text-BQhY6npA.js";import"./flex-B4PKXUFR.js";import"./preload-helper-PPVm8Dsz.js";import"./localized-decorator-KNn13vbd.js";import"./popover.component-DNQA1hhL.js";import"./floating-ui.dom-DPpwG6Py.js";import"./cross-small.component-CzYY4TNY.js";import"./icon.component-BrkZaeUe.js";import"./context-menu.component-o1XXQl6A.js";import"./unwrap-slots-B3pVezhV.js";import"./ref-Eg1nMiO6.js";import"./dot-grid-one-horizontal-BoKR1B54.js";import"./menu-heading.component-DSkhDkkb.js";import"./dropdown.component-C6WZeuF3.js";import"./query-async-_lNxZH9S.js";import"./form-control-host.style-B1ALMHMK.js";import"./form-control-header.component-DjGtBWbh.js";import"./badge.component-zauISdAA.js";import"./flex.component-DkXZb1a9.js";import"./triangle-exclamation.component-vkmH2Iig.js";import"./card.component-VLkt9J9g.js";import"./circle-info.component-DOExQyF8.js";import"./checkmark.component-Cl_mNeQ9.js";import"./rbcb-toggle.template-CST-DtPj.js";import"./chevron-bottom.component-BP2yYK-N.js";import"./chevron-right-small.component-DGJadf5u.js";import"./chevron-right.component-DPSTE9d6.js";import"./input.component-Cd0yoVAY.js";import"./textarea.component-B1-0L4u9.js";import"./resize-observer-CfkbZofs.js";import"./text.component-Q94igepL.js";import"./default-typography.styles-GHtnlLHb.js";const B={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},i={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:e=>{const a=t=>{e.page=t.detail.page,document.querySelector("[data-page]").innerHTML=String(e.page),document.querySelector("[data-pagination]").setAttribute("page",String(e.page))},s=t=>{e.rows=t.detail.rows,e.page=1,document.querySelector("[data-rows]").innerHTML=String(e.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(e.rows))};return r`
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
    `}},n={args:{page:1,rows:8,total:100,options:[8],hideOptions:!1,label:"1-8 of 100"},render:e=>{const a=t=>{e.page=t.detail.page,document.querySelector("[data-page-single]").innerHTML=String(e.page),document.querySelector("[data-pagination-single]").setAttribute("page",String(e.page))},s=t=>{e.rows=t.detail.rows,e.page=1,document.querySelector("[data-rows-single]").innerHTML=String(e.rows),document.querySelector("[data-page-single]").innerHTML="1",document.querySelector("[data-pagination-single]").setAttribute("page","1"),document.querySelector("[data-pagination-single]").setAttribute("rows",String(e.rows))};return r`
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
    `}},d={args:{page:1,rows:10,total:8,options:[5,10,20,50,100],hideOptions:!1,label:"1-8 of 8"},parameters:{docs:{description:{story:`
 When all items fit on a single page (total ≤ rows), page navigation is hidden.

 If there are multiple page-size options, the rows-per-page selector remains visible so users can still switch to a smaller page size.
        `}}},render:e=>{const a=t=>{e.page=t.detail.page,document.querySelector("[data-page-one]").innerHTML=String(e.page),document.querySelector("[data-pagination-one]").setAttribute("page",String(e.page))},s=t=>{e.rows=t.detail.rows,e.page=1,document.querySelector("[data-rows-one]").innerHTML=String(e.rows),document.querySelector("[data-page-one]").innerHTML="1",document.querySelector("[data-pagination-one]").setAttribute("page","1"),document.querySelector("[data-pagination-one]").setAttribute("rows",String(e.rows))};return r`
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
    `}},o={render:()=>r`
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
  `},g={args:{page:1,rows:10,total:120,options:[10],hideOptions:!0,simple:!0,label:"1-10 of 120"},parameters:{docs:{description:{story:"\nShows compact pagination mode.<br/> The total label and numbered page buttons are hidden, while left/right arrows update the current page indicator.\n\n#### Recommended usage with `gds-table`\n\nSlot `gds-pagination` into the table's `footer` slot to replace the built-in pagination. <br/>\nListen to `gds-page-change` and update the table's `page` property to drive data loading.\n \n        "}}},render:e=>{const a=s=>{e.page=s.detail.page,document.querySelector("[data-page-simple]").innerHTML=String(e.page),document.querySelector("[data-pagination-simple]").setAttribute("page",String(e.page))};return r`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="neutral-02" flex-direction="row" gap="4xl" outline>
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-simple>${e.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text>${e.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Mode:</gds-text>
            <gds-text>Simple arrows</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-simple
          page="${e.page}"
          rows="${e.rows}"
          .total=${e.total}
          .options=${e.options}
          ?hide-options="${e.hideOptions}"
          ?simple="${e.simple}"
          label="${e.label}"
          @gds-page-change=${a}
        ></gds-pagination>
      </gds-flex>
    `}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:`When the options array contains only a single value, the page size selector
is automatically hidden since there's no choice to make. This is useful when
you want a fixed page size without showing the selector UI.`,...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Demonstrates how `gds-aria-labelledby` and `gds-aria-describedby` forward\nARIA element references to the internal `<nav>` element.",...o.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    page: 1,
    rows: 10,
    total: 120,
    options: [10],
    hideOptions: true,
    simple: true,
    label: '1-10 of 120'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Shows compact pagination mode.<br/> The total label and numbered page buttons are hidden, while left/right arrows update the current page indicator.

#### Recommended usage with \\\`gds-table\\\`

Slot \\\`gds-pagination\\\` into the table's \\\`footer\\\` slot to replace the built-in pagination. <br/>
Listen to \\\`gds-page-change\\\` and update the table's \\\`page\\\` property to drive data loading.
 
        \`
      }
    }
  },
  render: args => {
    const handlePageChange = (e: CustomEvent) => {
      args.page = e.detail.page;
      document.querySelector('[data-page-simple]')!.innerHTML = String(args.page);
      document.querySelector('[data-pagination-simple]')!.setAttribute('page', String(args.page));
    };
    return html\`
      <gds-flex flex-direction="column" gap="2xl">
        <gds-card variant="neutral-02" flex-direction="row" gap="4xl" outline>
          <gds-flex gap="s">
            <gds-text tag="strong">Page:</gds-text>
            <gds-text data-page-simple>\${args.page}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Rows:</gds-text>
            <gds-text>\${args.rows}</gds-text>
          </gds-flex>
          <gds-flex gap="s">
            <gds-text tag="strong">Mode:</gds-text>
            <gds-text>Simple arrows</gds-text>
          </gds-flex>
        </gds-card>
        <gds-pagination
          data-pagination-simple
          page="\${args.page}"
          rows="\${args.rows}"
          .total=\${args.total}
          .options=\${args.options}
          ?hide-options="\${args.hideOptions}"
          ?simple="\${args.simple}"
          label="\${args.label}"
          @gds-page-change=\${handlePageChange}
        ></gds-pagination>
      </gds-flex>
    \`;
  }
}`,...g.parameters?.docs?.source},description:{story:`Compact pagination mode that hides page number buttons and total summary.
Navigation is reduced to previous/next arrows with a "Page N" indicator.`,...g.parameters?.docs?.description}}};const G=["Default","SingleOption","OnePage","ARIAForwarding","SimpleArrows"];export{o as ARIAForwarding,i as Default,d as OnePage,g as SimpleArrows,n as SingleOption,G as __namedExportsOrder,B as default};
