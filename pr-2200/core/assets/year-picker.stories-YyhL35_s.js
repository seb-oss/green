import{i as le,x as l}from"./lit-element-Bx14lxc-.js";import{a as ce}from"./argTableProps-CbsJqzSt.js";import{l as de}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n,r as pe,G as ue,g as me}from"./custom-element-scoping-BmMuu402.js";import{a as he}from"./query-p8xgzTDt.js";import{e as ge}from"./class-map-CXsQwv0r.js";import{o as ye}from"./if-defined-CVqwUuaf.js";import{t as fe}from"./tokens.style-Blxdz1wy.js";import{T as be}from"./transitional-styles-Z7meyTpE.js";import{w as xe}from"./watch-tFciLXSI.js";import{d as k}from"./attribute-converters-CdI0trPX.js";import"./flex-BrHfEfu9.js";import"./dropdown-KPRD5qwG.js";import"./option-BAJkI68A.js";import"./menu-heading-LbohxWiL.js";import"./custom-elements-BAGy-Bhy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./flex.component-DTmt0IaX.js";import"./div.component-DkCj2W0e.js";import"./declarative-layout-mixins-CDQpYbOZ.js";import"./dropdown.component-BLGORLY-.js";import"./query-async-MEroNOeJ.js";import"./icon-Bce9H27J.js";import"./when-BR7zwNJC.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-H5pJ1fiG.js";import"./form-control-header.component-WCG8JCFh.js";import"./badge.component-BMDlB0Pr.js";import"./triangle-exclamation.component-ByMymUHg.js";import"./button.component-BSAy5UA8.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-HYD49T6H.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-C4xryOWd.js";import"./checkmark.component-BEHq80-F.js";import"./chevron-bottom.component-hUZhTbS4.js";import"./popover.component-C4s1-F9_.js";import"./cross-small.component-DguazsXC.js";import"./menu-heading.component-DWsnNHP9.js";const Ye=le`
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
`;var ve=Object.defineProperty,we=Object.getOwnPropertyDescriptor,ae=e=>{throw TypeError(e)},a=(e,r,o,s)=>{for(var i=s>1?void 0:s?we(r,o):r,m=e.length-1,Y;m>=0;m--)(Y=e[m])&&(i=(s?Y(r,o,i):Y(i))||i);return s&&i&&ve(r,o,i),i},ke=(e,r,o)=>r.has(e)||ae("Cannot "+o),_e=(e,r,o)=>r.has(e)?ae("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,o),w=(e,r,o)=>(ke(e,r,"access private method"),o),u,oe,_,ie;let t=class extends ue{constructor(){super(...arguments),_e(this,u),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,1,1,12)}getYearCell(e){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector(`#yearCell-${e}`)}connectedCallback(){super.connectedCallback(),be.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",w(this,u,ie)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),r=this.columns*this.rows,o=this.max.getFullYear()-this.min.getFullYear()+1;let s=this.min.getFullYear()-Math.floor((r-o)/2);if(this.focusedYear<s)do s-=r;while(this.focusedYear<s);else if(this.focusedYear>s+r-1)do s+=r;while(this.focusedYear>s+r-1);return l` <table role="grid" aria-label="${ye(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({length:this.rows}).map((i,m)=>l`
            <tr role="row">
              ${Array.from({length:this.columns}).map((Y,ne)=>{const c=s+m*this.columns+ne,p=c<this.min.getFullYear()||c>this.max.getFullYear();return this.hideExtraneousYears&&p?l`<td inert></td>`:l`
                  <td
                    class="${ge({small:this.size=="small",today:!this.noCurrentYear&&e==c,disabled:p})}"
                    ?disabled=${p}
                    tabindex="${this.focusedYear==c&&!p?0:-1}"
                    aria-selected="${w(this,u,oe).call(this)==c&&!p?"true":"false"}"
                    @click=${()=>p?null:w(this,u,_).call(this,c)}
                    id="yearCell-${c}"
                  >
                    ${c}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};u=new WeakSet;oe=function(){return this.value?this.value.getFullYear():-1};_=function(e){this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};ie=function(e){var o;let r=!1;if(e.key==="ArrowLeft")this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),r=!0;else if(e.key==="ArrowRight")this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),r=!0;else if(e.key==="ArrowUp")this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),r=!0;else if(e.key==="ArrowDown")this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),r=!0;else if(e.key==="Home")this.focusedYear=this.min.getFullYear(),r=!0;else if(e.key==="End")this.focusedYear=this.max.getFullYear(),r=!0;else if(e.key==="PageUp"||e.key==="PageDown"){const s=this.columns*this.rows;let i=this.focusedYear+(e.key==="PageUp"?-s:s);i<this.min.getFullYear()&&(i=this.min.getFullYear()),i>this.max.getFullYear()&&(i=this.max.getFullYear()),this.focusedYear=i,r=!0}else(e.key==="Enter"||e.key===" ")&&((o=this._elFocusedCell)!=null&&o.hasAttribute("disabled")||w(this,u,_).call(this,this.focusedYear),r=!0);r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var s;(s=this._elFocusedCell)==null||s.focus()}))};t.styles=[fe,Ye];t.shadowRootOptions={mode:"open",delegatesFocus:!0};a([n()],t.prototype,"value",2);a([n({converter:k})],t.prototype,"min",2);a([n({converter:k})],t.prototype,"max",2);a([n({type:Boolean,attribute:"hide-extraneous-years"})],t.prototype,"hideExtraneousYears",2);a([n({type:Number})],t.prototype,"columns",2);a([n({type:Number})],t.prototype,"rows",2);a([n({type:Boolean,attribute:"no-current-year"})],t.prototype,"noCurrentYear",2);a([n({converter:k,attribute:"focused-date"})],t.prototype,"focusedDate",2);a([n({type:Number,attribute:"focused-year"})],t.prototype,"focusedYear",1);a([n({reflect:!0})],t.prototype,"size",2);a([n()],t.prototype,"label",2);a([pe()],t.prototype,"_currentLocale",2);a([he('td[tabindex="0"]')],t.prototype,"_elFocusedCell",2);a([xe("value")],t.prototype,"_valueChanged",1);t=a([me("gds-year-picker"),de()],t);t.define();const hr={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...ce("gds-year-picker")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},v={...d,args:{label:"YearPicker"}},h={...d,name:"No current month",render:e=>l` <gds-year-picker no-current-year></gds-year-picker> `},g={...d,render:e=>l` <gds-year-picker size="small"></gds-year-picker> `},y={...d,name:"Min and max",render:e=>l`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  `},f={...d,render:e=>l`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  `},b={...d,render:e=>l`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  `},x={...d,render:e=>l`
    <gds-year-picker
      min="1900-01-01"
      max="${new Date().toISOString().split("T")[0]}"
    ></gds-year-picker>
  `};var D,C,F;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(F=(C=v.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var P,S,E,$,z;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No current month',
  render: args => html\` <gds-year-picker no-current-year></gds-year-picker> \`
}`,...(E=(S=h.parameters)==null?void 0:S.docs)==null?void 0:E.source},description:{story:"Use the `no-current-year` attribute so the month right\nnow does not have a outer ring around it.",...(z=($=h.parameters)==null?void 0:$.docs)==null?void 0:z.description}}};var A,M,L,T,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\` <gds-year-picker size="small"></gds-year-picker> \`
}`,...(L=(M=g.parameters)==null?void 0:M.docs)==null?void 0:L.source},description:{story:"Use the `small` attribute to use a smaller and condenced styling.",...(O=(T=g.parameters)==null?void 0:T.docs)==null?void 0:O.description}}};var U,N,B,G,R;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max',
  render: args => html\`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  \`
}`,...(B=(N=y.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:"Use `min` and `max` attributes to limit the months you can choose from.\nThe rest is greyed out. Remember that by default it uses the current year.",...(R=(G=y.parameters)==null?void 0:G.docs)==null?void 0:R.description}}};var H,I,K,W,j;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  \`
}`,...(K=(I=f.parameters)==null?void 0:I.docs)==null?void 0:K.source},description:{story:"Use `hide-extraneous-years` in combination with `min` and `max` attributes\nto to fully hide the non-selectable years.",...(j=(W=f.parameters)==null?void 0:W.docs)==null?void 0:j.description}}};var q,J,Q,V,X;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  \`
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Use `columns` and `rows` to override the default 5x5 cell table.",...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};var Z,ee,re,te,se;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="1900-01-01"
      max="\${new Date().toISOString().split('T')[0]}"
    ></gds-year-picker>
  \`
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Example of choosing a birth year.",...(se=(te=x.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};const gr=["Default","NoCurrentMonth","Small","MinAndMax","Hide","LessCells","BirthYear"];export{x as BirthYear,v as Default,f as Hide,b as LessCells,y as MinAndMax,h as NoCurrentMonth,g as Small,gr as __namedExportsOrder,hr as default};
