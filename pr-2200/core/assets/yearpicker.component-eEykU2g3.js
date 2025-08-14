import{l as S}from"./runtime-CNluP0A8.js";import{x as Y}from"./lit-element-Bx14lxc-.js";import{n as o,r as P,G as A,g as B}from"./gds-element-DKcDvDP5.js";import{a as L}from"./query-p8xgzTDt.js";import{e as G}from"./class-map-CXsQwv0r.js";import{o as M}from"./if-defined-CVqwUuaf.js";import{s as N}from"./gridpicker.styles-Dlcswrbo.js";import{t as W}from"./tokens.style-Cct4pBht.js";import{T as z}from"./transitional-styles-unlae3Cp.js";import{w as O}from"./watch-tFciLXSI.js";import{d as v}from"./attribute-converters-CdI0trPX.js";var R=Object.defineProperty,T=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},a=(e,t,s,n)=>{for(var h=n>1?void 0:n?T(t,s):t,c=e.length-1,l;c>=0;c--)(l=e[c])&&(h=(n?l(t,s,h):l(h))||h);return n&&h&&R(t,s,h),h},b=(e,t,s)=>t.has(e)||C("Cannot "+s),f=(e,t,s)=>(b(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u=(e,t,s)=>(b(e,t,"access private method"),s),i,k,x,w,g,y,_,F,D,p,$,E;let r=class extends A{constructor(){super(...arguments),m(this,i),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.controls="ifneeded",this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language,m(this,g,e=>{u(this,i,_).call(this),e.preventDefault()}),m(this,y,e=>{u(this,i,F).call(this),e.preventDefault()}),m(this,p,e=>{this._elFocusedButton=e.target}),m(this,$,()=>{delete this._elFocusedButton})}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,0,1,12)}getYearCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#yearCell-${e}`)}getStartYear(){const e=this.columns*this.rows,t=this.max.getFullYear()-this.min.getFullYear()+1;let s=this.min.getFullYear()-Math.floor((e-t)/2);if(this.focusedYear<s)do s-=e;while(this.focusedYear<s);else if(this.focusedYear>s+e-1)do s+=e;while(this.focusedYear>s+e-1);return s}connectedCallback(){super.connectedCallback(),z.instance.apply(this,"gds-yearpicker"),this.addEventListener("keydown",u(this,i,E)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),t=this.getStartYear();return Y` <gds-div overflow="auto">
      ${u(this,i,k).call(this)?Y`<gds-flex
            justify-content="space-around"
            align-items="center"
            class="controls"
          >
            <gds-button
              id="prev"
              rank="tertiary"
              label="Previous years"
              @click=${f(this,g)}
              @focusin=${f(this,p)}
              @focusout=${f(this,p)}
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <span id="range">${u(this,i,D).call(this)}</span>
            <gds-button
              id="next"
              rank="tertiary"
              label="Next years"
              @click=${f(this,y)}
              @focusin=${f(this,p)}
              @focusout=${f(this,p)}
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>`:null}
      <table role="grid" aria-label="${M(this.label)}">
        <tbody role="rowgroup">
          ${Array.from({length:this.rows}).map((s,n)=>Y`
              <tr role="row">
                ${Array.from({length:this.columns}).map((h,c)=>{const l=t+n*this.columns+c,d=l<this.min.getFullYear()||l>this.max.getFullYear();return this.hideExtraneousYears&&d?Y`<td inert></td>`:Y`
                    <td
                      class="${G({small:this.size=="small",today:!this.noCurrentYear&&e==l,disabled:d})}"
                      ?disabled=${d}
                      tabindex="${this.focusedYear==l&&!d?0:-1}"
                      aria-selected="${u(this,i,x).call(this)==l&&!d?"true":"false"}"
                      @click=${()=>d?null:u(this,i,w).call(this,l)}
                      id="yearCell-${n*this.columns+c}"
                    >
                      ${l}
                    </td>
                  `})}
              </tr>
            `)}
        </tbody>
      </table></gds-div
    >`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};i=new WeakSet;k=function(){return this.controls==="none"?!1:this.controls==="always"||this.min.getFullYear()<this.getStartYear()||this.max.getFullYear()>this.getStartYear()+this.rows*this.columns};x=function(){return this.value?this.value.getFullYear():-1};w=function(e){e<this.min.getFullYear()||e>this.max.getFullYear()||(this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1})))};g=new WeakMap;y=new WeakMap;_=function(){const e=this.columns*this.rows,t=this.min.getFullYear();let s=this.focusedYear-e;s<t&&(s=t),this.focusedYear=s};F=function(){const e=this.columns*this.rows,t=this.max.getFullYear();let s=this.focusedYear+e;s>t&&(s=t),this.focusedYear=s};D=function(){const e=this.columns*this.rows,t=this.getStartYear(),s=t+e-1;return t+" - "+s};p=new WeakMap;$=new WeakMap;E=function(e){var s;let t=!1;this._elFocusedButton||(e.key==="ArrowLeft"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),t=!0):e.key==="ArrowRight"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),t=!0):e.key==="ArrowUp"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),t=!0):e.key==="ArrowDown"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),t=!0):e.key==="Home"?(this.focusedYear=this.min.getFullYear(),t=!0):e.key==="End"?(this.focusedYear=this.max.getFullYear(),t=!0):e.key==="PageUp"?(u(this,i,_).call(this),t=!0):e.key==="PageDown"?(u(this,i,F).call(this),t=!0):(e.key==="Enter"||e.key===" ")&&((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||u(this,i,w).call(this,this.focusedYear),t=!0),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus()})))};r.styles=[W,N];r.shadowRootOptions={mode:"open",delegatesFocus:!0};a([o()],r.prototype,"value",2);a([o({converter:v})],r.prototype,"min",2);a([o({converter:v})],r.prototype,"max",2);a([o({type:Boolean,attribute:"hide-extraneous-years"})],r.prototype,"hideExtraneousYears",2);a([o({type:Number})],r.prototype,"columns",2);a([o({type:Number})],r.prototype,"rows",2);a([o({type:Boolean,attribute:"no-current-year"})],r.prototype,"noCurrentYear",2);a([o({reflect:!0})],r.prototype,"controls",2);a([o({converter:v,attribute:"focused-date"})],r.prototype,"focusedDate",2);a([o({type:Number,attribute:"focused-year"})],r.prototype,"focusedYear",1);a([o({reflect:!0})],r.prototype,"size",2);a([o()],r.prototype,"label",2);a([P()],r.prototype,"_currentLocale",2);a([L('td[tabindex="0"]')],r.prototype,"_elFocusedCell",2);a([O("value")],r.prototype,"_valueChanged",1);r=a([B("gds-yearpicker"),S()],r);export{r as G};
