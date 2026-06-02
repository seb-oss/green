import{b as i}from"./iframe-CPRCDjfR.js";import"./pagination-DTRfaQoP.js";import"./card-DxyU527-.js";import"./text-C7-bI2qs.js";import"./flex-Fi0_kUhV.js";import"./preload-helper-Dp1pzeXC.js";import"./localized-decorator-BGUdOJjD.js";import"./popover.component-DDNqpXOo.js";import"./floating-ui.dom-Ceeo7fpE.js";import"./cross-small.component-Cc1LMIlN.js";import"./icon.component-B1VasaLS.js";import"./context-menu.component-B_MO1OT7.js";import"./unwrap-slots-BjIrTjtX.js";import"./ref-eYWibahW.js";import"./dot-grid-one-horizontal-CqbGJA4x.js";import"./menu-heading.component-ClzNGhFA.js";import"./dropdown.component-UXcVZkdx.js";import"./query-async-CuZUH3B0.js";import"./form-control-host.style-CBcyRdBV.js";import"./form-control-header.component-B4pHrv4V.js";import"./badge.component-DN6llxP0.js";import"./flex.component-C9uw9EMv.js";import"./triangle-exclamation.component-YsSc9gaK.js";import"./card.component-CJelrqzn.js";import"./circle-info.component-BQB39Eyd.js";import"./checkmark.component-D-2e2pmW.js";import"./rbcb-toggle.template-D0z04e5r.js";import"./chevron-bottom.component-4jDtgFxa.js";import"./chevron-right-small.component-BQ3SnTEI.js";import"./chevron-right.component-C1FERSI3.js";import"./input.component-DcB7a8bg.js";import"./textarea.component-4DWg92qS.js";import"./resize-observer-B9k8v2TZ.js";import"./text.component-DwTW6yG8.js";import"./default-typography.styles-Cn8QmHeu.js";const ne={title:"Components/Pagination",component:"gds-pagination",tags:["autodocs"]},n={args:{page:1,rows:10,total:2e3,options:[5,10,20,50,100],hideOptions:!1},render:e=>{const a=t=>{e.page=t.detail.page,document.querySelector("[data-page]").innerHTML=String(e.page),document.querySelector("[data-pagination]").setAttribute("page",String(e.page))},s=t=>{e.rows=t.detail.rows,e.page=1,document.querySelector("[data-rows]").innerHTML=String(e.rows),document.querySelector("[data-page]").innerHTML="1",document.querySelector("[data-pagination]").setAttribute("page","1"),document.querySelector("[data-pagination]").setAttribute("rows",String(e.rows))};return i`
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
  `};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u,m,w;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:`When the options array contains only a single value, the page size selector
is automatically hidden since there's no choice to make. This is useful when
you want a fixed page size without showing the selector UI.`,...(w=(m=o.parameters)==null?void 0:m.docs)==null?void 0:w.description}}};var h,f,$;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...($=(f=r.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var S,b,y,q,C;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(b=g.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Demonstrates how `gds-aria-labelledby` and `gds-aria-describedby` forward\nARIA element references to the internal `<nav>` element.",...(C=(q=g.parameters)==null?void 0:q.docs)==null?void 0:C.description}}};const re=["Default","SingleOption","OnePage","ARIAForwarding"];export{g as ARIAForwarding,n as Default,r as OnePage,o as SingleOption,re as __namedExportsOrder,ne as default};
