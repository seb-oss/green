import{l as E}from"./runtime-CNluP0A8.js";import{i as P,x as g}from"./lit-element-Bx14lxc-.js";import{n as o,r as z,G as B,g as S}from"./gds-element-DKcDvDP5.js";import{a as A}from"./query-p8xgzTDt.js";import{e as L}from"./class-map-CXsQwv0r.js";import{o as G}from"./if-defined-CVqwUuaf.js";import{t as M}from"./tokens.style-Khpz0lp_.js";import{T as N}from"./transitional-styles-BiORlPgX.js";import{w as W}from"./watch-tFciLXSI.js";import{d as Y}from"./attribute-converters-CdI0trPX.js";const O=P`
  @layer base, reset;

  @layer base {
    gds-flex {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

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
`;var R=Object.defineProperty,T=Object.getOwnPropertyDescriptor,_=e=>{throw TypeError(e)},a=(e,t,s,n)=>{for(var c=n>1?void 0:n?T(t,s):t,u=e.length-1,i;u>=0;u--)(i=e[u])&&(c=(n?i(t,s,c):i(c))||c);return n&&c&&R(t,s,c),c},k=(e,t,s)=>t.has(e)||_("Cannot "+s),f=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(k(e,t,"access private method"),s),l,F,b,m,v,x,w,C,p,D,$;let r=class extends B{constructor(){super(...arguments),y(this,l),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.changeYearsControls=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language,y(this,m,e=>{d(this,l,x).call(this),e.preventDefault()}),y(this,v,e=>{d(this,l,w).call(this),e.preventDefault()}),y(this,p,e=>{this._elFocusedButton=e.target}),y(this,D,()=>{delete this._elFocusedButton})}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,0,1,12)}getYearCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#yearCell-${e}`)}getStartYear(){const e=this.columns*this.rows,t=this.max.getFullYear()-this.min.getFullYear()+1;let s=this.min.getFullYear()-Math.floor((e-t)/2);if(this.focusedYear<s)do s-=e;while(this.focusedYear<s);else if(this.focusedYear>s+e-1)do s+=e;while(this.focusedYear>s+e-1);return s}connectedCallback(){super.connectedCallback(),N.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",d(this,l,$)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}render(){const e=new Date().getFullYear(),t=this.getStartYear();return g` <gds-div overflow="auto">
      ${this.changeYearsControls?g`<gds-flex
            justify-content="space-around"
            align-items="center"
            class="controls"
          >
            <gds-button
              id="prev"
              rank="tertiary"
              label="Previous years"
              @click=${f(this,m)}
              @focusin=${f(this,p)}
              @focusout=${f(this,p)}
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <span id="range">${d(this,l,C).call(this)}</span>
            <gds-button
              id="next"
              rank="tertiary"
              label="Next years"
              @click=${f(this,v)}
              @focusin=${f(this,p)}
              @focusout=${f(this,p)}
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>`:null}
      <table role="grid" aria-label="${G(this.label)}">
        <tbody role="rowgroup">
          ${Array.from({length:this.rows}).map((s,n)=>g`
              <tr role="row">
                ${Array.from({length:this.columns}).map((c,u)=>{const i=t+n*this.columns+u,h=i<this.min.getFullYear()||i>this.max.getFullYear();return this.hideExtraneousYears&&h?g`<td inert></td>`:g`
                    <td
                      class="${L({small:this.size=="small",today:!this.noCurrentYear&&e==i,disabled:h})}"
                      ?disabled=${h}
                      tabindex="${this.focusedYear==i&&!h?0:-1}"
                      aria-selected="${d(this,l,F).call(this)==i&&!h?"true":"false"}"
                      @click=${()=>h?null:d(this,l,b).call(this,i)}
                      id="yearCell-${n*this.columns+u}"
                    >
                      ${i}
                    </td>
                  `})}
              </tr>
            `)}
        </tbody>
      </table></gds-div
    >`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};l=new WeakSet;F=function(){return this.value?this.value.getFullYear():-1};b=function(e){e<this.min.getFullYear()||e>this.max.getFullYear()||(this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1})))};m=new WeakMap;v=new WeakMap;x=function(){const e=this.columns*this.rows,t=this.min.getFullYear();let s=this.focusedYear-e;s<t&&(s=t),this.focusedYear=s};w=function(){const e=this.columns*this.rows,t=this.max.getFullYear();let s=this.focusedYear+e;s>t&&(s=t),this.focusedYear=s};C=function(){const e=this.columns*this.rows,t=this.getStartYear(),s=t+e-1;return t+" - "+s};p=new WeakMap;D=new WeakMap;$=function(e){var s;let t=!1;this._elFocusedButton||(e.key==="ArrowLeft"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),t=!0):e.key==="ArrowRight"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),t=!0):e.key==="ArrowUp"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),t=!0):e.key==="ArrowDown"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),t=!0):e.key==="Home"?(this.focusedYear=this.min.getFullYear(),t=!0):e.key==="End"?(this.focusedYear=this.max.getFullYear(),t=!0):e.key==="PageUp"?(d(this,l,x).call(this),t=!0):e.key==="PageDown"?(d(this,l,w).call(this),t=!0):(e.key==="Enter"||e.key===" ")&&((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||d(this,l,b).call(this,this.focusedYear),t=!0),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus()})))};r.styles=[M,O];r.shadowRootOptions={mode:"open",delegatesFocus:!0};a([o()],r.prototype,"value",2);a([o({converter:Y})],r.prototype,"min",2);a([o({converter:Y})],r.prototype,"max",2);a([o({type:Boolean,attribute:"hide-extraneous-years"})],r.prototype,"hideExtraneousYears",2);a([o({type:Number})],r.prototype,"columns",2);a([o({type:Number})],r.prototype,"rows",2);a([o({type:Boolean,attribute:"no-current-year"})],r.prototype,"noCurrentYear",2);a([o({type:Boolean,attribute:"change-years-controls"})],r.prototype,"changeYearsControls",2);a([o({converter:Y,attribute:"focused-date"})],r.prototype,"focusedDate",2);a([o({type:Number,attribute:"focused-year"})],r.prototype,"focusedYear",1);a([o({reflect:!0})],r.prototype,"size",2);a([o()],r.prototype,"label",2);a([z()],r.prototype,"_currentLocale",2);a([A('td[tabindex="0"]')],r.prototype,"_elFocusedCell",2);a([W("value")],r.prototype,"_valueChanged",1);r=a([S("gds-year-picker"),E()],r);export{r as G};
