import{a as C}from"./argTableProps-CgdVAc4K.js";import{l as k}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{i as $,x as c}from"./lit-element-Bx14lxc-.js";import{n as i,r as E,G as M,g as F}from"./custom-element-scoping-CNGU1oQ0.js";import{a as P}from"./query-p8xgzTDt.js";import{e as S}from"./class-map-CXsQwv0r.js";import{o as z}from"./if-defined-CVqwUuaf.js";import{n as O}from"./when-BR7zwNJC.js";import{t as L}from"./tokens.style-vQBwQv71.js";import{T}from"./transitional-styles-CD1mMrWO.js";import{w as G}from"./watch-tFciLXSI.js";import{d as y}from"./attribute-converters-CdI0trPX.js";import{l as B,i as g}from"./index-DIbN3Y_f.js";import"./flex-CXYJXTeQ.js";import"./dropdown-D2WOYmZ-.js";import"./option-BLyFyXeE.js";import"./menu-heading-CLLofeDc.js";import"./custom-elements-C1PVOr0S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./flex.component-Apgiyuoj.js";import"./div.component-CrCsvFNO.js";import"./declarative-layout-mixins-dHcexrGz.js";import"./dropdown.component-CXyQZ7rO.js";import"./query-async-MEroNOeJ.js";import"./icon-CMjDogij.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-Dv6R5DZz.js";import"./form-control-header.component-DPzHdoLg.js";import"./badge.component-DwshZFaZ.js";import"./triangle-exclamation.component-Dn2q-7Yn.js";import"./button.component-6nvmO9qk.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BqSibp9P.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-BCrUGdY2.js";import"./chevron-bottom.component-puvYO4hP.js";import"./popover.component-BVGC3wlQ.js";import"./cross-small.component-COJXRAdt.js";import"./menu-heading.component-B3FdIqc8.js";const A=$`
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
`;var K=Object.defineProperty,N=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},a=(e,t,r,d)=>{for(var n=d>1?void 0:d?N(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(d?l(t,r,n):l(n))||n);return d&&n&&K(t,r,n),n},R=(e,t,r)=>t.has(e)||w("Cannot "+r),W=(e,t,r)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),m=(e,t,r)=>(R(e,t,"access private method"),r),p,D,_,Y;const f=["2016","2017","2018","2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034"];let s=class extends M{constructor(){super(...arguments),W(this,p),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.noCurrentYear=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=B(new Date(this.focusedYear,e,1)),r=new Date(this.focusedDate);r.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),r.setMonth(e),r.setHours(12,0,0,0),this.focusedDate=r}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getYearCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#yearCell-${e}`)}connectedCallback(){super.connectedCallback(),T.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",m(this,p,Y)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear();return c` <table role="grid" aria-label="${z(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({length:4}).map((t,r)=>c`
            <tr role="row">
              ${f.slice(r*4,r*4+4).map((d,n)=>{const o=r*4+n;if(o>=f.length)return c`<td inert></td>`;const l=new Date(this.focusedYear,o,1),u=(l<this.min||l>this.max)&&!g(l,this.min)&&!g(l,this.max);return O(!this.hideExtraneousYears||!u,()=>c`<td
                      class="${S({small:this.size=="small",today:!this.noCurrentYear&&e==this.focusedYear,disabled:!!u})}"
                      ?disabled=${u}
                      tabindex="${this.focusedYear==o?0:-1}"
                      aria-selected="${m(this,p,D).call(this)==o?"true":"false"}"
                      @click=${()=>u?null:m(this,p,_).call(this,o)}
                      id="yearCell-${o}"
                    >
                      ${d}
                    </td>`,()=>c`<td inert></td>`)})}
            </tr>
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};p=new WeakSet;D=function(){return this.value?this.value.getFullYear():-1};_=function(e){this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};Y=function(e){};s.styles=[L,A];s.shadowRootOptions={mode:"open",delegatesFocus:!0};a([i()],s.prototype,"value",2);a([i({converter:y})],s.prototype,"min",2);a([i({converter:y})],s.prototype,"max",2);a([i({type:Boolean,attribute:"hide-extraneous-years"})],s.prototype,"hideExtraneousYears",2);a([i({type:Boolean,attribute:"no-current-year"})],s.prototype,"noCurrentYear",2);a([i({converter:y})],s.prototype,"focusedDate",2);a([i({type:Number})],s.prototype,"focusedMonth",1);a([i({type:Number})],s.prototype,"focusedYear",1);a([i({reflect:!0})],s.prototype,"size",2);a([i()],s.prototype,"label",2);a([E()],s.prototype,"_currentLocale",2);a([P('td[tabindex="0"]')],s.prototype,"_elFocusedCell",2);a([G("value")],s.prototype,"_valueChanged",1);s=a([F("gds-year-picker"),k()],s);s.define();const Le={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...C("gds-year-picker")}},j={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},h={...j,args:{label:"YearPicker"}};var v,b,x;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(x=(b=h.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const Te=["Default"];export{h as Default,Te as __namedExportsOrder,Le as default};
