import{i as ye,x as n}from"./lit-element-Bx14lxc-.js";import{a as fe}from"./argTableProps-DJTZMWji.js";import{l as ve}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as d,r as be,G as Ye,g as xe}from"./gds-element-KHa0AloG.js";import{a as ke}from"./query-p8xgzTDt.js";import{e as we}from"./class-map-CXsQwv0r.js";import{o as _e}from"./if-defined-CVqwUuaf.js";import{t as Ce}from"./tokens.style-DC2Hb-2P.js";import{T as De}from"./transitional-styles-D9AB5Uac.js";import{w as Fe}from"./watch-tFciLXSI.js";import{d as _}from"./attribute-converters-CdI0trPX.js";import"./popover-BlXIiYwo.js";import"./backdrop-Dj2WcwHm.js";import"./button-nPQff-yp.js";import"./calendar-BkFvirIC.js";import"./custom-elements-CPl1AHTH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./popover.component-D2rkjHqc.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-D1Ljw-03.js";import"./icon-BDCl8D0g.js";import"./declarative-layout-mixins-V-x3wfiD.js";import"./button.component-BHtocGTN.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./calendar.component-6CTxdUci.js";const Pe=ye`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      th {
        height: var(--gds-sys-space-2xl);
        width: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        padding: 0 12px;
        position: relative;
        height: var(--gds-sys-space-3xl);
        width: var(--gds-sys-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-2xs);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-l2-background-tertiary);
          cursor: pointer;
          color: var(--gds-sys-color-l2-content-tertiary);
        }

        &.today {
          border-color: var(--gds-sys-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-sys-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-l2-content-primary);
          outline-width: var(--gds-sys-space-3xs);
        }

        &.small {
          padding: 0 6px;
          height: var(--gds-sys-space-xl);
          font-size: var(--gds-sys-text-size-detail-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-2xs);
        height: var(--gds-sys-space-2xs);
        border-radius: var(--gds-sys-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-sys-space-2xs) var(--gds-sys-space-2xs) auto auto;
      }
    }
  }
`;var Ee=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,ue=e=>{throw TypeError(e)},a=(e,r,o,s)=>{for(var i=s>1?void 0:s?Se(r,o):r,m=e.length-1,x;m>=0;m--)(x=e[m])&&(i=(s?x(r,o,i):x(i))||i);return s&&i&&Ee(r,o,i),i},$e=(e,r,o)=>r.has(e)||ue("Cannot "+o),ze=(e,r,o)=>r.has(e)?ue("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,o),w=(e,r,o)=>($e(e,r,"access private method"),o),u,me,C,he;let t=class extends Ye{constructor(){super(...arguments),ze(this,u),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,1,1,12)}getYearCell(e){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector(`#yearCell-${e}`)}connectedCallback(){super.connectedCallback(),De.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",w(this,u,he)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),r=this.columns*this.rows,o=this.max.getFullYear()-this.min.getFullYear()+1;let s=this.min.getFullYear()-Math.floor((r-o)/2);if(this.focusedYear<s)do s-=r;while(this.focusedYear<s);else if(this.focusedYear>s+r-1)do s+=r;while(this.focusedYear>s+r-1);return n` <table role="grid" aria-label="${_e(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({length:this.rows}).map((i,m)=>n`
            <tr role="row">
              ${Array.from({length:this.columns}).map((x,ge)=>{const l=s+m*this.columns+ge,p=l<this.min.getFullYear()||l>this.max.getFullYear();return this.hideExtraneousYears&&p?n`<td inert></td>`:n`
                  <td
                    class="${we({small:this.size=="small",today:!this.noCurrentYear&&e==l,disabled:p})}"
                    ?disabled=${p}
                    tabindex="${this.focusedYear==l&&!p?0:-1}"
                    aria-selected="${w(this,u,me).call(this)==l&&!p?"true":"false"}"
                    @click=${()=>p?null:w(this,u,C).call(this,l)}
                    id="yearCell-${l}"
                  >
                    ${l}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};u=new WeakSet;me=function(){return this.value?this.value.getFullYear():-1};C=function(e){this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};he=function(e){var o;let r=!1;if(e.key==="ArrowLeft")this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),r=!0;else if(e.key==="ArrowRight")this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),r=!0;else if(e.key==="ArrowUp")this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),r=!0;else if(e.key==="ArrowDown")this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),r=!0;else if(e.key==="Home")this.focusedYear=this.min.getFullYear(),r=!0;else if(e.key==="End")this.focusedYear=this.max.getFullYear(),r=!0;else if(e.key==="PageUp"||e.key==="PageDown"){const s=this.columns*this.rows;let i=this.focusedYear+(e.key==="PageUp"?-s:s);i<this.min.getFullYear()&&(i=this.min.getFullYear()),i>this.max.getFullYear()&&(i=this.max.getFullYear()),this.focusedYear=i,r=!0}else(e.key==="Enter"||e.key===" ")&&((o=this._elFocusedCell)!=null&&o.hasAttribute("disabled")||w(this,u,C).call(this,this.focusedYear),r=!0);r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var s;(s=this._elFocusedCell)==null||s.focus()}))};t.styles=[Ce,Pe];t.shadowRootOptions={mode:"open",delegatesFocus:!0};a([d()],t.prototype,"value",2);a([d({converter:_})],t.prototype,"min",2);a([d({converter:_})],t.prototype,"max",2);a([d({type:Boolean,attribute:"hide-extraneous-years"})],t.prototype,"hideExtraneousYears",2);a([d({type:Number})],t.prototype,"columns",2);a([d({type:Number})],t.prototype,"rows",2);a([d({type:Boolean,attribute:"no-current-year"})],t.prototype,"noCurrentYear",2);a([d({converter:_,attribute:"focused-date"})],t.prototype,"focusedDate",2);a([d({type:Number,attribute:"focused-year"})],t.prototype,"focusedYear",1);a([d({reflect:!0})],t.prototype,"size",2);a([d()],t.prototype,"label",2);a([be()],t.prototype,"_currentLocale",2);a([ke('td[tabindex="0"]')],t.prototype,"_elFocusedCell",2);a([Fe("value")],t.prototype,"_valueChanged",1);t=a([xe("gds-year-picker"),ve()],t);t.define();var D=Object.freeze,Le=Object.defineProperty,Te=(e,r)=>D(Le(e,"raw",{value:D(e.slice())})),F;const cr={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...fe("gds-year-picker")}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},k={...c,args:{label:"YearPicker"}},h={...c,name:"No current month",render:e=>n` <gds-year-picker no-current-year></gds-year-picker> `},g={...c,render:e=>n` <gds-year-picker size="small"></gds-year-picker> `},y={...c,name:"Min and max",render:e=>n`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  `},f={...c,render:e=>n`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  `},v={...c,render:e=>n`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  `},b={...c,render:e=>n`
    <gds-year-picker
      min="1900-01-01"
      max="${new Date().toISOString().split("T")[0]}"
    ></gds-year-picker>
  `},Y={...c,render:e=>n(F||(F=Te([`
    <gds-popover id="pop">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <div style="padding: 1rem 0 0 1.5rem">Choose a year</div>
      <gds-year-picker id="yearp"> </gds-year-picker>
    </gds-popover>
    <script>
      const yearp = document.getElementById('yearp')
      function onYearChange() {
        const selectedDate = yearp.value
        document.getElementById('selected-year').innerText =
          selectedDate.getFullYear()
        document.getElementById('pop').open = false
      }
      yearp.addEventListener('change', onYearChange)
    <\/script>
  `])))};var P,E,S;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(S=(E=k.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var $,z,L,T,A;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No current month',
  render: args => html\` <gds-year-picker no-current-year></gds-year-picker> \`
}`,...(L=(z=h.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:"Use the `no-current-year` attribute so the month right\nnow does not have a outer ring around it.",...(A=(T=h.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var B,M,O,I,U;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\` <gds-year-picker size="small"></gds-year-picker> \`
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"Use the `small` attribute to use a smaller and condenced styling.",...(U=(I=g.parameters)==null?void 0:I.docs)==null?void 0:U.description}}};var N,G,R,j,H;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max',
  render: args => html\`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  \`
}`,...(R=(G=y.parameters)==null?void 0:G.docs)==null?void 0:R.source},description:{story:"Use `min` and `max` attributes to limit the months you can choose from.\nThe rest is greyed out. Remember that by default it uses the current year.",...(H=(j=y.parameters)==null?void 0:j.docs)==null?void 0:H.description}}};var K,W,q,J,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  \`
}`,...(q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:q.source},description:{story:"Use `hide-extraneous-years` in combination with `min` and `max` attributes\nto to fully hide the non-selectable years.",...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var V,X,Z,ee,re;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  \`
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Use `columns` and `rows` to override the default 5x5 cell table.",...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var te,se,ae,oe,ie;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="1900-01-01"
      max="\${new Date().toISOString().split('T')[0]}"
    ></gds-year-picker>
  \`
}`,...(ae=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ae.source},description:{story:"Example of choosing a birth year.",...(ie=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var ne,de,le,ce,pe;Y.parameters={...Y.parameters,docs:{...(ne=Y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-popover id="pop">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <div style="padding: 1rem 0 0 1.5rem">Choose a year</div>
      <gds-year-picker id="yearp"> </gds-year-picker>
    </gds-popover>
    <script>
      const yearp = document.getElementById('yearp')
      function onYearChange() {
        const selectedDate = yearp.value
        document.getElementById('selected-year').innerText =
          selectedDate.getFullYear()
        document.getElementById('pop').open = false
      }
      yearp.addEventListener('change', onYearChange)
    <\/script>
  \`
}`,...(le=(de=Y.parameters)==null?void 0:de.docs)==null?void 0:le.source},description:{story:"Example of a button that opens up the year-picker.",...(pe=(ce=Y.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};const pr=["Default","NoCurrentMonth","Small","MinAndMax","Hide","LessCells","BirthYear","Popover"];export{b as BirthYear,k as Default,f as Hide,v as LessCells,y as MinAndMax,h as NoCurrentMonth,Y as Popover,g as Small,pr as __namedExportsOrder,cr as default};
