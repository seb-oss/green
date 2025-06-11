import{i as V,x as c}from"./lit-element-Bx14lxc-.js";import{a as X}from"./argTableProps-DQ1b1xu4.js";import{l as Z}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as o,r as ee,G as re,g as te}from"./custom-element-scoping-CNGU1oQ0.js";import{a as se}from"./query-p8xgzTDt.js";import{e as ae}from"./class-map-CXsQwv0r.js";import{o as oe}from"./if-defined-CVqwUuaf.js";import{t as ie}from"./tokens.style-vQBwQv71.js";import{T as ne}from"./transitional-styles-CD1mMrWO.js";import{w as le}from"./watch-tFciLXSI.js";import{d as w}from"./attribute-converters-CdI0trPX.js";import"./flex-CXYJXTeQ.js";import"./dropdown-D2WOYmZ-.js";import"./option-BLyFyXeE.js";import"./menu-heading-CLLofeDc.js";import"./custom-elements-1e1I75SA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./flex.component-Apgiyuoj.js";import"./div.component-CrCsvFNO.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./dropdown.component-CXyQZ7rO.js";import"./query-async-MEroNOeJ.js";import"./icon-CMjDogij.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-Dv6R5DZz.js";import"./form-control-header.component-DPzHdoLg.js";import"./badge.component-DwshZFaZ.js";import"./triangle-exclamation.component-Dn2q-7Yn.js";import"./button.component-6nvmO9qk.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BqSibp9P.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-BCrUGdY2.js";import"./chevron-bottom.component-puvYO4hP.js";import"./popover.component-BVGC3wlQ.js";import"./cross-small.component-COJXRAdt.js";import"./menu-heading.component-B3FdIqc8.js";const ce=V`
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
`;var de=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,j=e=>{throw TypeError(e)},a=(e,r,s,i)=>{for(var n=i>1?void 0:i?pe(r,s):r,u=e.length-1,b;u>=0;u--)(b=e[u])&&(n=(i?b(r,s,n):b(n))||n);return i&&n&&de(r,s,n),n},ue=(e,r,s)=>r.has(e)||j("Cannot "+s),me=(e,r,s)=>r.has(e)?j("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,s),x=(e,r,s)=>(ue(e,r,"access private method"),s),p,q,Y,I;let t=class extends re{constructor(){super(...arguments),me(this,p),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,1,1,12)}getYearCell(e){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector(`#yearCell-${e}`)}connectedCallback(){super.connectedCallback(),ne.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",x(this,p,I)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),r=this.columns,s=this.rows,i=r*s,n=this.max.getFullYear()-this.min.getFullYear()+1,u=this.min.getFullYear()-Math.floor((i-n)/2);return c` <table role="grid" aria-label="${oe(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({length:s}).map((b,J)=>c`
            <tr role="row">
              ${Array.from({length:r}).map((he,Q)=>{const l=u+J*r+Q,d=l<this.min.getFullYear()||l>this.max.getFullYear();return this.hideExtraneousYears&&d?c`<td inert></td>`:c`
                  <td
                    class="${ae({small:this.size=="small",today:!this.noCurrentYear&&e==l,disabled:d})}"
                    ?disabled=${d}
                    tabindex="${this.focusedYear==l&&!d?0:-1}"
                    aria-selected="${x(this,p,q).call(this)==l&&!d?"true":"false"}"
                    @click=${()=>d?null:x(this,p,Y).call(this,l)}
                    id="yearCell-${l}"
                  >
                    ${l}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};p=new WeakSet;q=function(){return this.value?this.value.getFullYear():-1};Y=function(e){this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};I=function(e){var s;let r=!1;e.key==="ArrowLeft"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),r=!0):e.key==="ArrowRight"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),r=!0):e.key==="ArrowUp"?(this.focusedYear>this.min.getFullYear()+(this.columns-1)&&(this.focusedYear-=this.columns),r=!0):e.key==="ArrowDown"?(this.focusedYear<this.max.getFullYear()-(this.columns-1)&&(this.focusedYear+=this.columns),r=!0):e.key==="Home"?(this.focusedYear=this.min.getFullYear(),r=!0):e.key==="End"?(this.focusedYear=this.max.getFullYear(),r=!0):e.key==="PageUp"||e.key==="PageDown"?r=!0:(e.key==="Enter"||e.key===" ")&&((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||x(this,p,Y).call(this,this.focusedYear),r=!0),r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var i;(i=this._elFocusedCell)==null||i.focus()}))};t.styles=[ie,ce];t.shadowRootOptions={mode:"open",delegatesFocus:!0};a([o()],t.prototype,"value",2);a([o({converter:w})],t.prototype,"min",2);a([o({converter:w})],t.prototype,"max",2);a([o({type:Boolean,attribute:"hide-extraneous-years"})],t.prototype,"hideExtraneousYears",2);a([o({type:Number})],t.prototype,"columns",2);a([o({type:Number})],t.prototype,"rows",2);a([o({type:Boolean,attribute:"no-current-year"})],t.prototype,"noCurrentYear",2);a([o({converter:w})],t.prototype,"focusedDate",2);a([o({type:Number})],t.prototype,"focusedYear",1);a([o({reflect:!0})],t.prototype,"size",2);a([o()],t.prototype,"label",2);a([ee()],t.prototype,"_currentLocale",2);a([se('td[tabindex="0"]')],t.prototype,"_elFocusedCell",2);a([le("value")],t.prototype,"_valueChanged",1);t=a([te("gds-year-picker"),Z()],t);t.define();const ar={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...X("gds-year-picker")}},f={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},v={...f,args:{label:"YearPicker"}},m={...f,name:"No current month",render:e=>c` <gds-year-picker no-current-year></gds-year-picker> `},h={...f,render:e=>c` <gds-year-picker size="small"></gds-year-picker> `},y={...f,name:"Min and max",render:e=>c`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  `},g={...f,render:e=>c`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  `};var k,_,D;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(D=(_=v.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var C,F,P,E,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No current month',
  render: args => html\` <gds-year-picker no-current-year></gds-year-picker> \`
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:"Use the `no-current-year` attribute so the month right\nnow does not have a outer ring around it.",...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.description}}};var $,z,A,M,L;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\` <gds-year-picker size="small"></gds-year-picker> \`
}`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source},description:{story:"Use the `small` attribute to use a smaller and condenced styling.",...(L=(M=h.parameters)==null?void 0:M.docs)==null?void 0:L.description}}};var N,T,O,U,G;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max',
  render: args => html\`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  \`
}`,...(O=(T=y.parameters)==null?void 0:T.docs)==null?void 0:O.source},description:{story:"Use `min` and `max` attributes to limit the months you can choose from.\nThe rest is greyed out. Remember that by default it uses the current year.",...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.description}}};var R,H,B,K,W;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  \`
}`,...(B=(H=g.parameters)==null?void 0:H.docs)==null?void 0:B.source},description:{story:"Use `hide-extraneous-years` in combination with `min` and `max` attributes\nto to fully hide the non-selectable years.",...(W=(K=g.parameters)==null?void 0:K.docs)==null?void 0:W.description}}};const or=["Default","NoCurrentMonth","Small","MinAndMax","Hide"];export{v as Default,g as Hide,y as MinAndMax,m as NoCurrentMonth,h as Small,or as __namedExportsOrder,ar as default};
