import{j as Ue}from"./jsx-runtime-u17CrQMm.js";import{r as J,e as _t}from"./iframe-TRhOb2Dj.js";import{o as kt}from"./create-component-CVDMTe9T.js";import{i as st,x as S,t as at,_ as i,n as f,r as X,g as He,G as nt,b as d,c,E as me,d as h,e as V,h as D,w as Dt,k as xt,m as $t,A as it,a as Ct}from"./declarative-layout-mixins-BS_gv4QM.js";import{l as rt,m as g}from"./runtime-Cgryh99k.js";import{b as Mt,e as ue,w as pe,a as ot}from"./watch-QkQzTQuG.js";import{f as St,r as fe,b as Wt,G as Ft}from"./dropdown.component-OG9Eo-Q9.js";import{e as lt,i as Tt,t as Yt}from"./icon.component-DyjtE5AO.js";import{M as Nt,u as O,v as q,h as ge,p as It,f as Et,a as Ot}from"./ref-Bt-vr_W6.js";import{n as x}from"./when-CI7b_ccM.js";import{b as Ke,a as Bt,G as zt}from"./button.component-DNn2u3D4.js";import{d as Ve,a as At}from"./attribute-converters-CdI0trPX.js";import{e as Xe}from"./class-map-BaERiJfA.js";import{T as dt,r as Lt}from"./transitional-styles-CLlKyzpN.js";import{I as Rt,a as Ht}from"./calender-add.component-Dvz3iw_y.js";import{I as Vt,a as qt}from"./chevron-right.component-Fn4KARVM.js";import{G as Pt}from"./popover.component-U5ypP1A9.js";let Gt;function jt(t){return(e,s)=>Mt(e,s,{get(){return(this.renderRoot??(Gt??=document.createDocumentFragment())).querySelectorAll(t)}})}const Ut=6048e5,Ze=Symbol.for("constructDateFrom");function F(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&Ze in t?t[Ze](e):t instanceof Date?new t.constructor(e):new Date(e)}function C(t,e){return F(e||t,t)}function A(t,e,s){const a=C(t,s?.in);return isNaN(e)?F(t,NaN):(e&&a.setDate(a.getDate()+e),a)}function ht(t,e,s){const a=C(t,s?.in);if(isNaN(e))return F(t,NaN);if(!e)return a;const n=a.getDate(),r=F(t,a.getTime());r.setMonth(a.getMonth()+e+1,0);const l=r.getDate();return n>=l?r:(a.setFullYear(r.getFullYear(),r.getMonth(),n),a)}let Kt={};function qe(){return Kt}function E(t,e){const s=qe(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0,n=C(t,e?.in),r=n.getDay(),l=(r<a?7:0)+r-a;return n.setDate(n.getDate()-l),n.setHours(0,0,0,0),n}function Pe(t,...e){const s=F.bind(null,t||e.find(a=>typeof a=="object"));return e.map(s)}function Je(t,e){const s=C(t,e?.in);return s.setHours(0,0,0,0),s}function Xt(t,e,s){return A(t,e*7,s)}function N(t,e,s){const[a,n]=Pe(s?.in,t,e);return+Je(a)==+Je(n)}function Zt(t,e){const s=C(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(23,59,59,999),s}function ct(t,e){const[s,a]=Pe(t,e.start,e.end);return{start:s,end:a}}function Jt(t,e){const{start:s,end:a}=ct(e?.in,t);let n=+s>+a;const r=n?+s:+a,l=n?a:s;l.setHours(0,0,0,0);let u=1;const o=[];for(;+l<=r;)o.push(F(s,l)),l.setDate(l.getDate()+u),l.setHours(0,0,0,0);return n?o.reverse():o}function Qt(t,e){const{start:s,end:a}=ct(e?.in,t);let n=+s>+a;const r=E(n?a:s,e),l=E(n?s:a,e);r.setHours(15),l.setHours(15);const u=+l.getTime();let o=r,y=e?.step??1;if(!y)return[];y<0&&(y=-y,n=!n);const w=[];for(;+o<=u;)o.setHours(0),w.push(F(s,o)),o=Xt(o,y),o.setHours(15);return n?w.reverse():w}function es(t,e){const s=C(t,e?.in);return s.setDate(1),s.setHours(0,0,0,0),s}function ts(t,e){const s=C(t,e?.in),a=s.getFullYear(),n=qe(),r=n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,l=F(t,0);l.setFullYear(a+1,0,r),l.setHours(0,0,0,0);const u=E(l,e),o=F(t,0);o.setFullYear(a,0,r),o.setHours(0,0,0,0);const y=E(o,e);return+s>=+u?a+1:+s>=+y?a:a-1}function ss(t,e){const s=qe(),a=s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,n=ts(t,e),r=F(t,0);return r.setFullYear(n,0,a),r.setHours(0,0,0,0),E(r,e)}function as(t,e){const s=C(t,e?.in),a=+E(s,e)-+ss(s,e);return Math.round(a/Ut)+1}function ut(t,e){const s=C(t,e?.in),a=s.getMonth();return s.setFullYear(s.getFullYear(),a+1,0),s.setHours(0,0,0,0),C(s,e?.in)}function ns(t,e,s){const[a,n]=Pe(s?.in,t,e);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}function is(t,e,s){const a=C(t,s?.in);return a.setHours(e),a}function rs(t,e,s){return ht(t,-1,s)}const os=st`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
      --columns: 7;
    }

    table {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(var(--columns), 1fr);
      gap: var(--gds-sys-space-xs);
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.small {
        border-spacing: var(--gds-sys-space-3xs);

        thead th {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
        }

        tbody tr .week-number {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-s-book);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }

        &.indicators {
          border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
        }
      }

      &.show-week-numbers {
        --columns: 8;
      }
    }

    tr,
    thead,
    tbody {
      display: contents;
    }

    th,
    td {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--gds-sys-space-2xl);
      width: var(--gds-sys-space-2xl);
      box-sizing: border-box;
      user-select: none;
    }

    th {
      font-weight: normal;
    }

    td {
      position: relative;
      border-width: var(--gds-sys-space-4xs);
      border-style: solid;
      border-color: transparent;
      border-radius: var(--gds-sys-radius-max);
      transition: background 0.2s;
      outline-style: solid;
      outline-color: transparent;
      outline-width: 0px;
      outline-offset: var(--gds-sys-space-4xs);

      &.short {
        width: var(--gds-sys-space-4xl);
      }

      &.wide {
        width: var(--gds-sys-space-5xl);
      }

      &.long {
        width: var(--gds-sys-space-7xl);
      }

      &:not(.disabled):hover,
      &[aria-selected='true'] {
        cursor: pointer;
      }

      &[aria-selected='true'] {
        color: var(--gds-sys-color-content-neutral-03);
        background: var(--gds-sys-color-l3-neutral-03);
      }

      &:not(.disabled):hover {
        background: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );
      }

      &[aria-selected='true']:not(.disabled):hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-03),
          var(--gds-sys-color-state-neutral-01)
        );
      }

      &.today {
        border-color: var(--gds-sys-color-border-neutral-04);
      }

      &.disabled:not(.week-number) {
        background: var(--gds-sys-color-l3-disabled-01);
        color: var(--gds-sys-color-content-disabled-01);
        cursor: not-allowed;
      }

      &.disabled.week-number {
        color: var(--gds-sys-color-content-neutral-02);
        cursor: default;
      }

      &.outside-month:not(.disabled) {
        color: var(--gds-sys-color-content-neutral-02);
      }

      &[aria-selected='false']:active:not(.disabled) {
        background: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
      }

      &[aria-selected='true']:active:not(.disabled) {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-03),
          var(--gds-sys-color-state-neutral-02)
        );
      }

      &:focus-visible {
        outline-color: var(--gds-sys-color-content-neutral-01);
        outline-width: var(--gds-sys-space-4xs);
      }

      &.small {
        width: var(--gds-sys-space-xl);
        height: var(--gds-sys-space-xl);
        font: var(--gds-sys-text-body-s-book);
        line-height: var(--gds-sys-text-line-height-detail-s);

        &.short {
          width: var(--gds-sys-space-2xl);
        }

        &.wide {
          width: var(--gds-sys-space-3xl);
        }

        &.long {
          width: var(--gds-sys-space-6xl);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-radius-max);
        background: var(--gds-sys-color-l3-neutral-03);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`;var ls=os;function ds(t,e){const s=es(t),a=Zt(t),n=Qt({start:s,end:a},{weekStartsOn:1});for(;n.length<6;)n.push(A(n[n.length-1],7));return S`${e(n.map(r=>({days:Jt({start:r,end:A(r,6)})})))}`}var le,Ge,ye,pt;let b=class extends nt{constructor(){super(...arguments),d(this,le),d(this,ye),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=ut(new Date(this.focusedYear,t,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),s.setMonth(t),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){return this.shadowRoot?.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),dt.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",c(this,ye,pt)),window.addEventListener("lit-localize-status",t=>{t.detail.status==="ready"&&(this._currentLocale=t.detail.readyLocale)})}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const t=new Date;return S`<table
      role="grid"
      aria-label="${Ke(this.label)}"
      class="${Xe({small:this.size==="small",indicators:!!this.customizedDates,"show-week-numbers":!!this.showWeekNumbers})}"
    >
      ${x(!this.hideDayNames,()=>S`<thead role="rowgroup">
            <tr role="row">
              ${x(this.showWeekNumbers,()=>S`<th></th>`)}
              <th>${g("Mon").substring(0,1)}</th>
              <th>${g("Tue").substring(0,1)}</th>
              <th>${g("Wed").substring(0,1)}</th>
              <th>${g("Thu").substring(0,1)}</th>
              <th>${g("Fri").substring(0,1)}</th>
              <th>${g("Sat").substring(0,1)}</th>
              <th>${g("Sun").substring(0,1)}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${ds(this.focusedDate,e=>S`
            ${e.map(s=>S`
                <tr role="row">
                  ${x(this.showWeekNumbers,()=>S`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${as(s.days[0])}
                      </td>`)}
                  ${s.days.map(a=>{const n=this.customizedDates&&this.customizedDates.find(p=>N(p.date,a)),r={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(p=>N(p,a))),...n},l=!ns(this.focusedDate,a),u=(a<this.min||a>this.max)&&!N(a,this.min)&&!N(a,this.max),o=a.getDay()===0||a.getDay()===6,y=r.disabled||u||this.disabledWeekends&&o;return this.hideExtraneousDays&&l?S`<td inert></td>`:S`
                          <td
                            role="${Ke(y?void 0:"gridcell")}"
                            class="${Xe({small:this.size==="small","custom-date":!!n,disabled:!!y,today:N(t,a),"outside-month":l})}"
                            ?disabled=${y}
                            tabindex="${N(this.focusedDate,a)?0:-1}"
                            aria-selected="${this.value&&N(this.value,a)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(a)}"
                            @click=${()=>y?null:c(this,le,Ge).call(this,a)}
                            id="dateCell-${a.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${r?r?.color:""}"
                              >${a.getDate()}</span
                            >

                            ${x(r.indicator,()=>S`<span
                                  class="indicator-${r?.indicator}"
                                  style="--_color: ${r?.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};le=new WeakSet;Ge=function(t){const e=is(t,12);this.value=e,this.dispatchCustomEvent("change",{detail:e,bubbles:!1,composed:!1})};ye=new WeakSet;pt=function(t){let e=!1,s=new Date(this.focusedDate);t.key==="ArrowLeft"?(s=A(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(s=A(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(s=A(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(s=A(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?(this._elFocusedCell?.hasAttribute("disabled")||c(this,le,Ge).call(this,this.focusedDate),e=!0):t.key==="Home"?(s=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(s=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(s=rs(this.focusedDate),e=!0):t.key==="PageDown"&&(s=ht(this.focusedDate,1),e=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{this._elFocusedCell?.focus()}))};b.styles=[at,ls];b.shadowRootOptions={mode:"open",delegatesFocus:!0};i([f()],b.prototype,"value",2);i([f({type:Date})],b.prototype,"min",2);i([f({type:Date})],b.prototype,"max",2);i([f()],b.prototype,"focusedDate",2);i([f({type:Boolean,attribute:"disabled-weekends"})],b.prototype,"disabledWeekends",2);i([f({type:Array,attribute:"disabled-dates"})],b.prototype,"disabledDates",2);i([f({type:Number})],b.prototype,"focusedMonth",1);i([f({type:Number})],b.prototype,"focusedYear",1);i([f({reflect:!0})],b.prototype,"size",2);i([f({type:Boolean})],b.prototype,"showWeekNumbers",2);i([f({type:Boolean})],b.prototype,"hideExtraneousDays",2);i([f({type:Boolean})],b.prototype,"hideDayNames",2);i([f({attribute:!1})],b.prototype,"customizedDates",2);i([f()],b.prototype,"label",2);i([f({attribute:!1})],b.prototype,"dateLabelTemplate",2);i([X()],b.prototype,"_currentLocale",2);i([ue('td[tabindex="0"]')],b.prototype,"_elFocusedCell",2);i([pe("value")],b.prototype,"_valueChanged",1);b=i([He("gds-calendar"),ot({labelledBy:"table",describedBy:"table"}),rt()],b);function*hs(t,e){const s=typeof e=="function";if(t!==void 0){let a=-1;for(const n of t)a>-1&&(yield s?e(a):e),a++,yield n}}function*cs(t,e){if(t!==void 0){let s=0;for(const a of t)yield e(a,s++)}}const Qe=(t,e,s)=>{const a=new Map;for(let n=e;n<=s;n++)a.set(t[n],n);return a},us=lt(class extends Tt{constructor(t){if(super(t),t.type!==Yt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let a;s===void 0?s=e:e!==void 0&&(a=e);const n=[],r=[];let l=0;for(const u of t)n[l]=a?a(u,l):l,r[l]=s(u,l),l++;return{values:r,keys:n}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,a]){const n=Nt(t),{values:r,keys:l}=this.dt(e,s,a);if(!Array.isArray(n))return this.ut=l,r;const u=this.ut??=[],o=[];let y,w,p=0,_=n.length-1,v=0,k=r.length-1;for(;p<=_&&v<=k;)if(n[p]===null)p++;else if(n[_]===null)_--;else if(u[p]===l[v])o[v]=O(n[p],r[v]),p++,v++;else if(u[_]===l[k])o[k]=O(n[_],r[k]),_--,k--;else if(u[p]===l[k])o[k]=O(n[p],r[k]),q(t,o[k+1],n[p]),p++,k--;else if(u[_]===l[v])o[v]=O(n[_],r[v]),q(t,n[p],n[_]),_--,v++;else if(y===void 0&&(y=Qe(l,v,k),w=Qe(u,p,_)),y.has(u[p]))if(y.has(u[_])){const $=w.get(l[v]),T=$!==void 0?n[$]:null;if(T===null){const Z=q(t,n[p]);O(Z,r[v]),o[v]=Z}else o[v]=O(T,r[v]),q(t,n[p],T),n[$]=null;v++}else ge(n[_]),_--;else ge(n[p]),p++;for(;v<=k;){const $=q(t,o[k+1]);O($,r[v]),o[v++]=$}for(;p<=_;){const $=n[p++];$!==null&&ge($)}return this.ut=l,It(t,o),me}});class ps{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class fs{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const et=t=>!Ot(t)&&typeof t.then=="function",tt=1073741823;class gs extends Et{constructor(){super(...arguments),this._$Cwt=tt,this._$Cbt=[],this._$CK=new ps(this),this._$CX=new fs}render(...e){return e.find(s=>!et(s))??me}update(e,s){const a=this._$Cbt;let n=a.length;this._$Cbt=s;const r=this._$CK,l=this._$CX;this.isConnected||this.disconnected();for(let u=0;u<s.length&&!(u>this._$Cwt);u++){const o=s[u];if(!et(o))return this._$Cwt=u,o;u<n&&o===a[u]||(this._$Cwt=tt,n=0,Promise.resolve(o).then(async y=>{for(;l.get();)await l.get();const w=r.deref();if(w!==void 0){const p=w._$Cbt.indexOf(o);p>-1&&p<w._$Cwt&&(w._$Cwt=p,w.setValue(y))}}))}return me}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ms=lt(gs);var Y,Q,ee,te,se,be,ve,we,_e,ft,L,P,ae,ke,R,G,j,ne;let M=class extends nt{constructor(){super(...arguments),d(this,_e),d(this,L),d(this,ae),d(this,R),d(this,j),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=c(this,ae,ke).call(this,this.value,this.length),d(this,Y,""),d(this,Q,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.min:new Date().getFullYear()-1),this.value=c(this,R,G).call(this,t+1),c(this,L,P).call(this)}),d(this,ee,()=>{let t=parseInt(this.value.toString());Number.isNaN(t)&&(t=this.length===2?this.max:new Date().getFullYear()+1),this.value=c(this,R,G).call(this,t-1),c(this,L,P).call(this)}),d(this,te,t=>{t.stopPropagation(),t.preventDefault(),this.focus()}),d(this,se,()=>{c(this,j,ne).call(this)}),d(this,be,()=>{h(this,Y)!==""&&(c(this,j,ne).call(this),this.value=c(this,R,G).call(this,parseInt(this.value.toString())),c(this,L,P).call(this))}),d(this,ve,t=>{t.stopPropagation(),t.preventDefault(),t.deltaY>0?h(this,ee).call(this):h(this,Q).call(this)}),d(this,we,t=>{let e=!1;if(t.key==="ArrowUp")h(this,Q).call(this),e=!0;else if(t.key==="ArrowDown")h(this,ee).call(this),e=!0;else{const s=parseInt(t.key);isNaN(s)||(h(this,Y).length<this.length&&(V(this,Y,h(this,Y)+s.toString()),this.value=parseInt(h(this,Y))),h(this,Y).length===this.length&&(this.value=c(this,R,G).call(this,this.value),c(this,j,ne).call(this),c(this,_e,ft).call(this),c(this,L,P).call(this)),e=!0)}e&&(t.preventDefault(),t.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",h(this,ve)),this.addEventListener("keydown",h(this,we)),this.addEventListener("blur",h(this,be)),this.addEventListener("focus",h(this,se)),this.addEventListener("click",h(this,te)),this.addEventListener("mousedown",h(this,te))}focus(t){super.focus(t),h(this,se).call(this)}render(){return D`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=c(this,ae,ke).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};Y=new WeakMap;Q=new WeakMap;ee=new WeakMap;te=new WeakMap;se=new WeakMap;be=new WeakMap;ve=new WeakMap;we=new WeakMap;_e=new WeakSet;ft=function(){let t=this.nextElementSibling;for(;t;){if(t instanceof M){t.focus();break}t=t.nextElementSibling}};L=new WeakSet;P=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})};ae=new WeakSet;ke=function(t,e){return String(t).padStart(e,"0")};R=new WeakSet;G=function(t){return Math.max(this.min,Math.min(this.max,t))};j=new WeakSet;ne=function(){V(this,Y,"")};M.formAssociated=!0;i([f({type:Number})],M.prototype,"value",2);i([f({type:Number})],M.prototype,"length",2);i([f({type:Number,attribute:"aria-valuemin"})],M.prototype,"min",2);i([f({type:Number,attribute:"aria-valuemax"})],M.prototype,"max",2);i([X()],M.prototype,"displayValue",2);i([pe("value")],M.prototype,"_refreshDisplayValue",1);M=i([He("gds-date-part-spinner")],M);const ys=st`
  @layer base, reset;

  @layer base {
    #calendar-button::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 12ch;
      gap: var(--gds-sys-space-5xs);
      font: var(--gds-sys-text-detail-m-regular);
    }

    :host([size='small']) .spinners {
      font: var(--gds-sys-text-detail-s-regular);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      outline: none;
      padding-block: var(--gds-sys-space-4xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      padding: var(--gds-sys-space-4xs);
      margin: calc(-1 * var(--gds-sys-space-4xs));
      border-radius: var(--gds-sys-radius-3xs);

      &:focus {
        background-color: var(--gds-sys-color-l3-neutral-03);
        color: var(--gds-sys-color-content-neutral-05);
      }
    }
  }
`;var bs=ys,ie,U,De,gt,xe,mt,K,de,$e,yt,Ce,bt,re,Me,I,B,z,H,Se,We,Fe,Te,Ye,Ne,Ie,Ee,Oe,he,Be,ze,oe,Ae,Le,W,Re,vt,je,wt;let m=class extends Bt{constructor(){super(),d(this,De),d(this,xe),d(this,K),d(this,$e),d(this,Ce),d(this,re),d(this,I),d(this,z),d(this,oe),d(this,Re),d(this,je),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,d(this,ie,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=c(this,oe,Ae).call(this,"y-m-d"),d(this,U,void 0),d(this,Se,e=>{this._elTrigger.then(s=>{document.getSelection()?.removeAllRanges();const a=new Range;a.setStart(s.firstChild,0),a.setEnd(s.lastChild,4),document.getSelection()?.addRange(a)})}),d(this,We,e=>{this._elFieldAsync.then(s=>{e.currentTarget===s&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))})}),d(this,Fe,e=>{this._elFieldAsync.then(s=>{if(e.currentTarget!==s)return;e.preventDefault();const a=e.clipboardData?.getData("text/plain");if(!a)return;let n=new Date("-");const r="Invalid Date",l=a.split(this._dateFormatLayout.delimiter);if(l.length===3){const u=this._dateFormatLayout.layout,o=parseInt(l[u.findIndex(p=>p.token==="y")]),y=parseInt(l[u.findIndex(p=>p.token==="m")])-1,w=parseInt(l[u.findIndex(p=>p.token==="d")]);!isNaN(o)&&!isNaN(y)&&!isNaN(w)&&(n=new Date(`${o}-${y+1}-${w}`))}n.toString()===r&&(n=new Date(a),n.toString()===r)||(this.value=n,c(this,I,B).call(this))})}),d(this,Te,e=>{this._elSpinners[0]?.focus()}),d(this,Ye,e=>{e.stopPropagation();const s=new Date(e.detail);s.setUTCHours(this.utcHours,0,0,0),this.value=s,this.open=!1,c(this,I,B).call(this),c(this,z,H).call(this)}),d(this,Ne,e=>{e.stopPropagation(),this._focusedMonth=e.target?.value}),d(this,Ie,e=>{e.stopPropagation(),this._focusedYear=e.target?.value}),d(this,Ee,e=>{this._focusedMonth<11?this._focusedMonth++:this._focusedMonth==11&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)}),d(this,Oe,e=>{this._focusedMonth>0?this._focusedMonth--:this._focusedMonth==0&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)}),d(this,he,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=new Date((await this._elCalendar).focusedDate),this.requestUpdate(),c(this,z,H).call(this)}),d(this,Be,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const s=(await this._elCalendar).value;if(!s){this.value=void 0,c(this,I,B).call(this);return}!N(s||new Date(0),h(this,U)||new Date(0))&&(this.value=new Date(s),c(this,I,B).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=h(this,U),c(this,z,H).call(this))}}),d(this,ze,e=>{const s=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[s+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[s-1];a&&a.focus()}}),d(this,Le,(e,s)=>{h(this,W)[s]=e;const a=new Date("0000-01-01");a.setUTCHours(this.utcHours,0,0,0),a.setUTCFullYear(parseInt(h(this,W).year)),a.setUTCMonth(parseInt(h(this,W).month)-1);const n=ut(a).getDate(),r=n<parseInt(h(this,W).day)?n:parseInt(h(this,W).day);a.setUTCDate(isNaN(r)?1:r),a.toString()!=="Invalid Date"&&(this.value=a,c(this,I,B).call(this),c(this,z,H).call(this))}),d(this,W,{year:"yyyy",month:"mm",day:"dd"}),M.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return h(this,ie)}set utcHours(e){V(this,ie,e),this._internalValue?.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=c(this,oe,Ae).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(s=>s.getDateCell(e))}connectedCallback(){super.connectedCallback(),dt.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){return D`
      ${x(!this.plain,()=>D`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${x(this.supportingText.length>0,()=>D`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`)}
            <slot
              id="supporting-text-slot"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot
              id="sub-label-slot"
              name="sub-label"
              slot="supporting-text"
            ></slot>
          </gds-form-control-header>`)}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${h(this,Te)}
        @copy=${h(this,We)}
        @paste=${h(this,Fe)}
        id="field"
      >
        <div class="spinners">
          ${hs(cs(this._dateFormatLayout.layout,(e,s)=>D`<gds-date-part-spinner
                  id="spinner-${s}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${e.token==="y"?4:2}
                  .value=${h(this,W)[e.name]}
                  aria-valuemin=${c(this,Ce,bt).call(this,e.name)}
                  aria-valuemax=${c(this,re,Me).call(this,e.name)}
                  aria-label=${c(this,$e,yt).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${c(this,re,Me).call(this,e.name).toString().length}
                  @keydown=${h(this,ze)}
                  @change=${a=>h(this,Le).call(this,a.detail.value,e.name)}
                  @focus=${h(this,Se)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),D`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${this.size==="small"?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${g("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${x(this.size==="small",()=>D`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`,()=>D`<gds-icon-calender-add></gds-icon-calender-add>`)}
        </gds-button>
      </gds-field-base>

      ${x(c(this,De,gt).call(this),()=>D`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>`)}

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${h(this,Be)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{e.target?.id==="calendar-popover"&&this._elCalendar.then(a=>a.focus())}}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${h(this,Oe)}
              aria-label=${g("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${h(this,Ne)}
              .maxHeight=${300}
              label="${g("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${g("January")}</gds-option>
              <gds-option value="1">${g("February")}</gds-option>
              <gds-option value="2">${g("March")}</gds-option>
              <gds-option value="3">${g("April")}</gds-option>
              <gds-option value="4">${g("May")}</gds-option>
              <gds-option value="5">${g("June")}</gds-option>
              <gds-option value="6">${g("July")}</gds-option>
              <gds-option value="7">${g("August")}</gds-option>
              <gds-option value="8">${g("September")}</gds-option>
              <gds-option value="9">${g("October")}</gds-option>
              <gds-option value="10">${g("November")}</gds-option>
              <gds-option value="11">${g("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${h(this,Ie)}
              .maxHeight=${300}
              label="${g("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${us(h(this,Re,vt),e=>e,e=>D`<gds-option value=${e}>${e}</gds-option>`)}
            </gds-dropdown>
            <gds-button
              @click=${h(this,Ee)}
              aria-label=${g("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${h(this,Ye)}
            @gds-date-focused=${h(this,he)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${x(this.clearable||!this.hideTodayButton,()=>D`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${x(this.clearable,()=>D` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,c(this,z,H).call(this),c(this,I,B).call(this)}}
                      aria-label=${g("Clear selected date")}
                    >
                      ${g("Clear")}
                    </gds-button>`)}
                ${ms(c(this,xe,mt).call(this),it)}
                ${x(!this.hideTodayButton,()=>D` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),c(this,K,de).call(this,new Date)}}
                      aria-label=${g("Select today's date")}
                    >
                      ${g("Today")}
                    </gds-button>`)}
              </gds-flex>
            `)}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(this.value===""&&(this.value=void 0),!this.value){V(this,W,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const s=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0");V(this,W,{year:s,month:a,day:n})}_handleOpenChange(){this.open&&(V(this,U,this.value),this._elCalendar.then(e=>e.focus()))}};ie=new WeakMap;U=new WeakMap;De=new WeakSet;gt=function(){return!this.plain};xe=new WeakSet;mt=async function(){const t=await this.getFocusedDate();let e="",s;return t&&t>this.max?(e=g("Last available date"),s=a=>{a.stopPropagation(),c(this,K,de).call(this,this.max)}):t&&t<this.min&&(e=g("First available date"),s=a=>{a.stopPropagation(),c(this,K,de).call(this,this.min)}),D`${x(e.length>0,()=>D`<gds-button rank="tertiary" size="small" @click=${s}>
          ${e}
        </gds-button>`,()=>it)}`};K=new WeakSet;de=function(t){const e=new Date(t);this._elCalendar.then(s=>s.focusedDate=e).then(h(this,he))};$e=new WeakSet;yt=function(t){return`${{year:g("Year"),month:g("Month"),day:g("Day")}[t]} ${this.label}`};Ce=new WeakSet;bt=function(t){return{year:1900,month:1,day:1}[t]};re=new WeakSet;Me=function(t){return{year:9999,month:12,day:31}[t]};I=new WeakSet;B=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}))};z=new WeakSet;H=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};Se=new WeakMap;We=new WeakMap;Fe=new WeakMap;Te=new WeakMap;Ye=new WeakMap;Ne=new WeakMap;Ie=new WeakMap;Ee=new WeakMap;Oe=new WeakMap;he=new WeakMap;Be=new WeakMap;ze=new WeakMap;oe=new WeakSet;Ae=function(t){const e=t.replace(/[a-z0-9]/gi,"")[0],s=t.split(e),a=s.findIndex(o=>o==="y"),n=s.findIndex(o=>o==="m"),r=s.findIndex(o=>o==="d");if(a===-1||n===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const u=[a,n,r].sort((o,y)=>o-y).map(o=>s[o]).map(o=>({token:o,name:o==="y"?"year":o==="m"?"month":"day"}));return{delimiter:e,layout:u}};Le=new WeakMap;W=new WeakMap;Re=new WeakSet;vt=function(){const t=this.min.getFullYear(),e=this.max.getFullYear(),s=h(this,je,wt),a=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let n=t;n<=e;n++)yield n}}};je=new WeakSet;wt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};m.styles=[at,St,bs];i([f({converter:Ve})],m.prototype,"value",1);i([f({converter:Ve})],m.prototype,"min",2);i([f({converter:Ve})],m.prototype,"max",2);i([f({type:Boolean})],m.prototype,"open",2);i([f({attribute:"supporting-text"})],m.prototype,"supportingText",2);i([f({type:String})],m.prototype,"size",2);i([f({type:Boolean})],m.prototype,"plain",2);i([f({type:Boolean,attribute:"show-week-numbers"})],m.prototype,"showWeekNumbers",2);i([f({type:Boolean,attribute:"hide-label"})],m.prototype,"hideLabel",2);i([f({type:Boolean,attribute:"clearable"})],m.prototype,"clearable",2);i([f({type:Boolean,attribute:"hide-today-button"})],m.prototype,"hideTodayButton",2);i([f({type:Number,attribute:"utc-hours"})],m.prototype,"utcHours",1);i([f()],m.prototype,"dateformat",1);i([f({type:Boolean,attribute:"disabled-weekends"})],m.prototype,"disabledWeekends",2);i([f({converter:At,attribute:"disabled-dates"})],m.prototype,"disabledDates",2);i([f({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],m.prototype,"showExtendedSupportingText",2);i([fe("#calendar-button")],m.prototype,"test_calendarButton",2);i([ue("#clear-button")],m.prototype,"test_clearButton",2);i([ue("#today-button")],m.prototype,"test_todayButton",2);i([X()],m.prototype,"_focusedMonth",2);i([X()],m.prototype,"_focusedYear",2);i([X()],m.prototype,"_dateFormatLayout",2);i([fe("#calendar")],m.prototype,"_elCalendar",2);i([fe("#calendar-button")],m.prototype,"_elTrigger",2);i([fe("#field")],m.prototype,"_elFieldAsync",2);i([jt("[role=spinbutton]")],m.prototype,"_elSpinners",2);i([ue("#field")],m.prototype,"_elField",2);i([pe("value")],m.prototype,"_handleValueChange",1);i([pe("open")],m.prototype,"_handleOpenChange",1);m=i([ot({labelledBy:".spinner",describedBy:".spinner",errorMessage:".spinner"}),rt()],m);let ce=class extends Dt(xt($t(m))){};ce=i([He("gds-datepicker",{dependsOn:[Wt,zt,Ft,b,Pt,Rt,Ht,Vt,qt]})],ce);ce.define();Lt();const vs=kt({tagName:Ct("gds-datepicker"),elementClass:ce,events:{onchange:"change"},react:_t}),ws=J.forwardRef(({label:t="Date",onChange:e,minDate:s,maxDate:a,value:n,showWeeks:r,testId:l,validator:u,size:o,selectedDate:y,currentDate:w,...p},_)=>{w&&!n&&(n=w),y&&!n&&(n=y);const v=s||new Date(new Date().getFullYear()-10,0,1),k=a||new Date(new Date().getFullYear()+10,0,1),$=Z=>{e&&e(Z.target.value)},T=J.useRef(null);return J.useImperativeHandle(_,()=>T.current,[T]),J.useEffect(()=>{T?.current&&(T.current.validator=u)},[u]),Ue.jsx("div",{className:"form-group",children:Ue.jsx(vs,{"data-testid":l,label:t,min:v,max:k,showWeekNumbers:r,onchange:$,value:n,ref:T,size:o==="small"?"small":"large",...p})})});ws.__docgenInfo={description:"@deprecated Please use the `gds-datepicker` web component from green-core instead",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:`The Date value of the datepicker. This can be set to undefined to clear the datepicker.
This can be a string if set via the value attribute in markup, or via the setAttribute DOM API.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},clearable:{required:!1,tsType:{name:"boolean"},description:"If the it will be possible to clear the selected date."},hideTodayButton:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the today button under the calendar."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}};export{ws as D};
