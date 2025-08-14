import{l as S}from"./runtime-CNluP0A8.js";import{i as P,x as g}from"./lit-element-Bx14lxc-.js";import{n as i,r as z,G as A,g as B}from"./gds-element-DKcDvDP5.js";import{a as L}from"./query-p8xgzTDt.js";import{e as G}from"./class-map-CXsQwv0r.js";import{o as M}from"./if-defined-CVqwUuaf.js";import{t as N}from"./tokens.style-Cct4pBht.js";import{T as W}from"./transitional-styles-unlae3Cp.js";import{w as O}from"./watch-tFciLXSI.js";import{d as v}from"./attribute-converters-CdI0trPX.js";const R=P`
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
`;var T=Object.defineProperty,U=Object.getOwnPropertyDescriptor,_=e=>{throw TypeError(e)},a=(e,t,s,n)=>{for(var c=n>1?void 0:n?U(t,s):t,u=e.length-1,l;u>=0;u--)(l=e[u])&&(c=(n?l(t,s,c):l(c))||c);return n&&c&&T(t,s,c),c},F=(e,t,s)=>t.has(e)||_("Cannot "+s),f=(e,t,s)=>(F(e,t,"read from private field"),s?s.call(e):t.get(e)),y=(e,t,s)=>t.has(e)?_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(F(e,t,"access private method"),s),o,k,C,b,m,Y,x,w,D,p,$,E;let r=class extends A{constructor(){super(...arguments),y(this,o),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.controls="ifneeded",this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language,y(this,m,e=>{d(this,o,x).call(this),e.preventDefault()}),y(this,Y,e=>{d(this,o,w).call(this),e.preventDefault()}),y(this,p,e=>{this._elFocusedButton=e.target}),y(this,$,()=>{delete this._elFocusedButton})}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,0,1,12)}getYearCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#yearCell-${e}`)}getStartYear(){const e=this.columns*this.rows,t=this.max.getFullYear()-this.min.getFullYear()+1;let s=this.min.getFullYear()-Math.floor((e-t)/2);if(this.focusedYear<s)do s-=e;while(this.focusedYear<s);else if(this.focusedYear>s+e-1)do s+=e;while(this.focusedYear>s+e-1);return s}connectedCallback(){super.connectedCallback(),W.instance.apply(this,"gds-yearpicker"),this.addEventListener("keydown",d(this,o,E)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}render(){const e=new Date().getFullYear(),t=this.getStartYear();return g` <gds-div overflow="auto">
      ${d(this,o,k).call(this)?g`<gds-flex
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
            <span id="range">${d(this,o,D).call(this)}</span>
            <gds-button
              id="next"
              rank="tertiary"
              label="Next years"
              @click=${f(this,Y)}
              @focusin=${f(this,p)}
              @focusout=${f(this,p)}
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>`:null}
      <table role="grid" aria-label="${M(this.label)}">
        <tbody role="rowgroup">
          ${Array.from({length:this.rows}).map((s,n)=>g`
              <tr role="row">
                ${Array.from({length:this.columns}).map((c,u)=>{const l=t+n*this.columns+u,h=l<this.min.getFullYear()||l>this.max.getFullYear();return this.hideExtraneousYears&&h?g`<td inert></td>`:g`
                    <td
                      class="${G({small:this.size=="small",today:!this.noCurrentYear&&e==l,disabled:h})}"
                      ?disabled=${h}
                      tabindex="${this.focusedYear==l&&!h?0:-1}"
                      aria-selected="${d(this,o,C).call(this)==l&&!h?"true":"false"}"
                      @click=${()=>h?null:d(this,o,b).call(this,l)}
                      id="yearCell-${n*this.columns+u}"
                    >
                      ${l}
                    </td>
                  `})}
              </tr>
            `)}
        </tbody>
      </table></gds-div
    >`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};o=new WeakSet;k=function(){return this.controls==="none"?!1:this.controls==="always"||this.min.getFullYear()<this.getStartYear()||this.max.getFullYear()>this.getStartYear()+this.rows*this.columns};C=function(){return this.value?this.value.getFullYear():-1};b=function(e){e<this.min.getFullYear()||e>this.max.getFullYear()||(this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1})))};m=new WeakMap;Y=new WeakMap;x=function(){const e=this.columns*this.rows,t=this.min.getFullYear();let s=this.focusedYear-e;s<t&&(s=t),this.focusedYear=s};w=function(){const e=this.columns*this.rows,t=this.max.getFullYear();let s=this.focusedYear+e;s>t&&(s=t),this.focusedYear=s};D=function(){const e=this.columns*this.rows,t=this.getStartYear(),s=t+e-1;return t+" - "+s};p=new WeakMap;$=new WeakMap;E=function(e){var s;let t=!1;this._elFocusedButton||(e.key==="ArrowLeft"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),t=!0):e.key==="ArrowRight"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),t=!0):e.key==="ArrowUp"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),t=!0):e.key==="ArrowDown"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),t=!0):e.key==="Home"?(this.focusedYear=this.min.getFullYear(),t=!0):e.key==="End"?(this.focusedYear=this.max.getFullYear(),t=!0):e.key==="PageUp"?(d(this,o,x).call(this),t=!0):e.key==="PageDown"?(d(this,o,w).call(this),t=!0):(e.key==="Enter"||e.key===" ")&&((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||d(this,o,b).call(this,this.focusedYear),t=!0),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus()})))};r.styles=[N,R];r.shadowRootOptions={mode:"open",delegatesFocus:!0};a([i()],r.prototype,"value",2);a([i({converter:v})],r.prototype,"min",2);a([i({converter:v})],r.prototype,"max",2);a([i({type:Boolean,attribute:"hide-extraneous-years"})],r.prototype,"hideExtraneousYears",2);a([i({type:Number})],r.prototype,"columns",2);a([i({type:Number})],r.prototype,"rows",2);a([i({type:Boolean,attribute:"no-current-year"})],r.prototype,"noCurrentYear",2);a([i({reflect:!0})],r.prototype,"controls",2);a([i({converter:v,attribute:"focused-date"})],r.prototype,"focusedDate",2);a([i({type:Number,attribute:"focused-year"})],r.prototype,"focusedYear",1);a([i({reflect:!0})],r.prototype,"size",2);a([i()],r.prototype,"label",2);a([z()],r.prototype,"_currentLocale",2);a([L('td[tabindex="0"]')],r.prototype,"_elFocusedCell",2);a([O("value")],r.prototype,"_valueChanged",1);r=a([B("gds-yearpicker"),S()],r);export{r as G};
