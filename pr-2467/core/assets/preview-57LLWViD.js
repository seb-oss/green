import{i as F,x as Q}from"./lit-element-Bx14lxc-.js";import{s as Y}from"./chunk-GKNNPQCW-BkHQSocK.js";import{c as G}from"./custom-elements-pZvAJsJR.js";import{r as ee}from"./transitional-styles-CxCTYKOe.js";import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{u as R}from"./index-CkBKXTvA.js";import{ag as y,as as J,ae as o,at as A,af as se,au as te,av as ae,aw as re,ax as ne,ay as oe}from"./index-CQT6E6ku.js";import{d as c,g as S,f as W,n as ie,e as L,a as I,T as B,o as N,t as X,G as q,b as de,w as ce,_ as u,c as l,p as x,q as le,r as fe,h as Z,l as be,i as ue,I as me,j as he,k as pe,m as ge}from"./index-BrNWG5G-.js";import{m as E,l as ve,s as i,c as _e}from"./runtime-CNluP0A8.js";import{n as _,r as H}from"./Reflect-DJ7r0WLU.js";import{a as $}from"./query-p8xgzTDt.js";import"./theme-voPiWKQt.js";import"./button-C42Svcck.js";import"./grid-COTfpHcG.js";import"./tokens.style-CyN6927s.js";import"./gds-element-DTROifYq.js";import"./iframe-BPyT1PPs.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./if-defined-CVqwUuaf.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./unsafe-html-CYO4avEf.js";import"./watch-tFciLXSI.js";import"./button.component-DpNXiJAt.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./div.component-DsPkDol3.js";let m=class extends W{};m._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';m._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>';m._name="chevron-left";m._width=24;m._height=24;m._viewBox="0 0 24 24";m=c([S("gds-icon-chevron-left")],m);let h=class extends W{};h._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>';h._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>';h._name="chevron-right";h._width=24;h._height=24;h._viewBox="0 0 24 24";h=c([S("gds-icon-chevron-right")],h);const ke=t=>{ie.define();const e=L("gds-div"),s={...t,class:t.className};return y.createElement(e,s)};function ye(){return(t,e,s)=>{const a=t.connectedCallback,r=t.disconnectedCallback;t.connectedCallback=function(){a==null||a.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[e]=new ResizeObserver(()=>{this.__resizeObserver_tids[e]&&clearTimeout(this.__resizeObserver_tids[e]),this.__resizeObserver_tids[e]=setTimeout(()=>{var d;(d=s.value)==null||d.call(this)},20)}),this.__resizeObservers[e].observe(this)},t.disconnectedCallback=function(){r==null||r.call(this),this.__resizeObservers[e].disconnect()}}}const Se=F`
  @layer base {
    :host {
      display: flex;
      z-index: 1;
    }

    button {
      appearance: none;
      background: transparent;
      border-radius: var(--gds-sys-radius-max);
      border-width: 0;
      color: var(--gds-sys-color-content-neutral-01);
      cursor: pointer;
      flex-grow: 1;
      flex-shrink: 0;
      font-family: inherit;
      font-size: inherit;
      font: var(--gds-sys-text-detail-book-m);
      overflow: hidden;
      padding: 0 1rem;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      transition:
        background-color var(--gds-sys-motion-fast),
        border-color var(--gds-sys-motion-fast),
        color var(--gds-sys-motion-fast);
      outline-width: var(--gds-sys-space-4xs);
      outline-style: solid;
      outline-offset: -2px;
      outline-color: transparent;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    @media (pointer: fine) {
      :host(:not([selected])) button:hover {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );

        &:disabled {
          background-color: transparent;
        }
      }
    }

    button:focus-visible {
      outline-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-l3-content-tertiary) 100%
      );
    }
  }
`;var xe=Se;let g=class extends I(q){constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return N`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};g.styles=[...X,xe];c([_({type:Boolean,reflect:!0})],g.prototype,"selected",2);c([_()],g.prototype,"value",2);c([_({type:Boolean,reflect:!0})],g.prototype,"disabled",2);g=c([S("gds-segment")],g);const we=F`
  @layer base {
    :host {
      background-color: var(--gds-sys-color-l3-neutral-02);
      border: 0.25rem solid transparent;
      border-radius: var(--gds-sys-radius-max);
      box-sizing: border-box;
      contain: layout;
      display: inline-flex;
      height: 3rem;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    :host([size='small']) {
      height: 2.5rem;
    }

    #track {
      box-sizing: border-box;
      display: flex;
      flex-grow: 1;
      scroll-snap-type: inline mandatory;
      overscroll-behavior-x: contain;
      scroll-behavior: smooth;
      overflow-x: scroll;
      gap: 0.25rem;
      position: relative;
      scrollbar-width: none;
    }

    #track::-webkit-scrollbar {
      display: none;
    }

    #btn-prev,
    #btn-next {
      box-sizing: border-box;
      align-items: center;
      appearance: none;
      aspect-ratio: 1;
      border-radius: var(--gds-sys-radius-max);
      border-width: 0;
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      cursor: pointer;
      display: flex;
      font-size: 1rem;
      height: 100%;
      justify-content: center;
      width: 2.5rem;
      transition: 0.2s;
      z-index: 2;
      position: absolute;

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }
    }
    #btn-prev {
      margin: 0 0.25rem 0 0;
    }
    #btn-next {
      margin: 0 0 0 0.25rem;
      right: 0;
    }

    #btn-prev[aria-hidden='true'],
    #btn-next[aria-hidden='true'] {
      opacity: 0;
      width: 0;
      margin: 0;
      padding: 0;
    }

    :host([size='small']) #btn-prev,
    :host([size='small']) #btn-next {
      width: 2rem;
    }

    ::slotted(*) {
      flex-grow: 1;
      flex-shrink: 0;
      z-index: 1;
      scroll-margin: 0 2.75rem;
      scroll-snap-align: start;
    }

    #indicator {
      background-color: var(--gds-sys-color-l3-neutral-04);
      border-radius: var(--gds-sys-radius-max);
      height: 100%;
      left: 0;
      position: absolute;
      z-index: 0;
      transition:
        transform 0.2s,
        width 0.2s;
      z-index: 0;
    }
  }
`;var Me=we,p,w,U,M,j,C,v,k,O,z;const je=(t,e)=>{let s;return()=>{clearTimeout(s),s=setTimeout(t,e)}};let f=class extends de(I(ce(q))){constructor(){super(...arguments),u(this,w),this.size="medium",u(this,p),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,u(this,M,()=>{const e=this.segments.filter((s,a,r)=>{var d;return((d=r[a+1])==null?void 0:d.isVisible)&&!s.isVisible})[0];e&&(this._elTrack.scrollLeft-=e.offsetWidth)}),u(this,j,()=>{const e=this.segments.filter((s,a,r)=>{var d;return((d=r[a-1])==null?void 0:d.isVisible)&&!s.isVisible}).reverse()[0];e&&(this._elTrack.scrollLeft+=e.offsetWidth)}),u(this,C,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),u(this,v,je(l(this,C),50)),u(this,k,()=>{const e=this.segments.find(s=>s.selected);if(e){const s=e.offsetWidth,a=e.offsetLeft;this._elIndicator.style.transform=`translateX(${a}px)`,this._elIndicator.style.width=`${s}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),u(this,O,e=>{const s=this.segments.find(a=>a===e.target||a.contains(e.target));s&&(this.segments.forEach(a=>a.selected=!1),s.selected=!0,x(this,p,s.value),l(this,k).call(this),this.dispatchCustomEvent("change",{detail:{segment:s},bubbles:!0,composed:!0}))}),u(this,z,()=>{l(this,p)&&this.updateComplete.then(()=>{const e=this.segments.find(s=>s.value===l(this,p));e&&(this.segments.forEach(s=>s.selected=!1),e.selected=!0,this._elTrack.scrollLeft=e.offsetLeft)})})}get value(){return l(this,p)}set value(e){x(this,p,e),l(this,z).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),B.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{l(this,v).call(this)})})}render(){return N`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${l(this,M)}
        aria-label=${E("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${l(this,O)}
          @slotchange=${le(this,w,U)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${l(this,j)}
        aria-label=${E("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{l(this,v).call(this),l(this,k).call(this)})}};p=new WeakMap;w=new WeakSet;U=function(){var e,s;const t=(e=this.segments.find(a=>a.selected))==null?void 0:e.value;t&&x(this,p,t),(s=this.intersectionObserver)==null||s.disconnect(),this.intersectionObserver=new IntersectionObserver(a=>{a.forEach(r=>{const d=r.target;d._isVisible=r.intersectionRatio>.99,l(this,v).call(this)})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(a=>{var r;(r=this.intersectionObserver)==null||r.observe(a)})};M=new WeakMap;j=new WeakMap;C=new WeakMap;v=new WeakMap;k=new WeakMap;O=new WeakMap;z=new WeakMap;f.styles=[X,Me];c([_({reflect:!0})],f.prototype,"size",2);c([_()],f.prototype,"value",1);c([$("slot")],f.prototype,"_elSlot",2);c([$("#indicator")],f.prototype,"_elIndicator",2);c([$("#track")],f.prototype,"_elTrack",2);c([H()],f.prototype,"_showPrevButton",2);c([H()],f.prototype,"_showNextButton",2);c([ye(),fe("value")],f.prototype,"_recalculateMinWidth",1);f=c([S("gds-segmented-control",{dependsOn:[g,m,h]}),ve()],f);const Ce=t=>{f.define();const e=L("gds-segmented-control"),s={...t,class:t.className};return y.createElement(e,s)},V=t=>{g.define();const e=L("gds-segment"),s={...t,class:t.className};return y.createElement(e,s)};function Oe(t){const e=G.modules.find(s=>s.declarations.find(a=>a.tagName===t));return e.exports.map(s=>({name:s.declaration.name,path:e.path.replace(/src\//,"@sebgroup/green-core/")}))}const ze=t=>{const{of:e}=t,[s,a]=y.useState("web"),r=J(e||"meta"),d=Oe(r.preparedMeta.component),T=Object.keys({...r.preparedMeta.subcomponents});return o.createElement(Z,{designVersion:"2023"},o.createElement(ke,{margin:"0 0 2xl 0"},o.createElement("h2",null,"Import"),o.createElement(Ce,{"max-width":"500px",value:s,onChange:b=>a(b.target.value)},o.createElement(V,{value:"web"},"Web component (Angular and others)"),o.createElement(V,{value:"react"},"React JSX")),d.filter(b=>b.name!=="*").map(b=>o.createElement("div",{key:b.name},s==="web"?o.createElement(A,{language:"javascript",dark:!0,code:`import { ${b.name} } from '@sebgroup/green-core/pure'
${b.name}.define()

// or, from direct path:
import { ${b.name} } from '${b.path}'
${b.name}.define()`}):o.createElement(A,{language:"javascript",dark:!0,code:`// Use as JSX element(s) in React
import { ${b.name}${T.length>0?T.map(K=>`, ${K}`):""} } from '@sebgroup/green-core/react'`})))))},Le=()=>{const t=J("story"),e=t.story.title.replace("Components/","").trim().toLowerCase(),a=`https://seb.io/component/${t.story.componentId.replace("components-","").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"")}`;return o.createElement(Z,{designVersion:"2023"},o.createElement(be,{margin:"0 0 2xl 0","flex-direction":"column; s{row}","justify-content":"space-between","align-items":"flex-start; s{center}",padding:"l l l xl",gap:"l"},o.createElement(ue,{"align-items":"center",gap:"m"},o.createElement(me,{size:"xl"}),o.createElement(he,null,"View ",e," on seb.io")),o.createElement(pe,{href:a,target:"_blank",rel:"noopener noreferrer",rank:"secondary"},"Open documentation",o.createElement(ge,{slot:"trail"}))))};function D(t){const e={blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...R(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(se,{isTemplate:!0}),`
`,n.jsx(te,{}),`
`,n.jsx(ae,{}),`
`,n.jsx(re,{}),`
`,n.jsx(Le,{}),`
`,n.jsx(ze,{}),`
`,n.jsx(e.h2,{id:"public-api",children:"Public API"}),`
`,n.jsx(e.p,{children:"This table lists all public attributes, properties, methods, events and slots of the component."}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:[n.jsx(e.strong,{children:"Note:"})," JS properties and DOM attributes have different naming conventions in Green Core (camelCase vs snake-case), so some of them will show up under both sections, even though they refer to the same underlying property."]})}),`
`]}),`
`,n.jsx(ne,{}),`
`,n.jsx(e.h2,{id:"additional-examples-and-customization-options",children:"Additional examples and customization options"}),`
`,n.jsx(oe,{})]})}function $e(t={}){const{wrapper:e}={...R(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(D,{...t})}):D(t)}const Te="en",Ae=["da","de","fi","fr","it","nl","no","sv"],Ee={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s1727e353c65eba61:"Ryd valgt dato",s17e3edbe032f79ec:"Åbn kalender-popup",s1910f3ebccaec414:i`${0} valgte`,s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuller",s307db9af9905317d:"Formularfejloversigt",s39938ecdae568740:"September",s39943b8a5733f5d2:"Automatisk afvisningstimer",s3b8a6245b12fa2ad:"Brødkrummer",s407a88a592a0987c:"August",s49730f3d5751a433:"Indlæser...",s5052d10b539eabf0:"Marts",s5d929ff1619ac0c9:"Søg",s5e8250fb85d64c23:"Luk",s5febcd9b311c16fe:"Rul til højre",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Åbn kontekstmenu",s83c436ed1bc16dfb:"Vis flere oplysninger",s88365264d8a05b05:"Skift til næste måned",s8ade4e9d5e804d6a:"Første tilgængelige dato",s8f18916860db5d80:"Ryd valg",s979f38023babd06d:"Afvis advarsel",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s98dfb7a8cd8ec342:"Vælg dagens dato",s9af3c72c33088826:i`Der er ${0} fejl, der skal rettes, før du kan fortsætte:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Ryd",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgængelige muligheder",sdc42f1da42d6411a:"Ryd inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sidste tilgængelige dato",sf1f100572e888a9d:"Skift til forrige måned",sf295af199c723ec8:"Fre"},Ve=Object.freeze(Object.defineProperty({__proto__:null,templates:Ee},Symbol.toStringTag,{value:"Module"})),De={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s1727e353c65eba61:"Ausgewähltes Datum löschen",s17e3edbe032f79ec:"Kalender-Modal öffnen",s1910f3ebccaec414:i`${0} ausgewählt`,s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Mo",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Abbrechen",s307db9af9905317d:"Formularfehlerübersicht",s39938ecdae568740:"September",s39943b8a5733f5d2:"Automatischer Schließ-Timer",s3b8a6245b12fa2ad:"Brotkrümelnavigation",s407a88a592a0987c:"August",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"März",s5d929ff1619ac0c9:"Suche",s5e8250fb85d64c23:"Schließen",s5febcd9b311c16fe:"Nach rechts scrollen",s63d040e37887f17e:"Heute",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Mi",s7793b811d20184fe:"Dezember",s7fd3469f78111589:"Kontextmenü öffnen",s83c436ed1bc16dfb:"Weitere Informationen anzeigen",s88365264d8a05b05:"Zum nächsten Monat wechseln",s8ade4e9d5e804d6a:"Erstes verfügbares Datum",s8f18916860db5d80:"Auswahl löschen",s979f38023babd06d:"Benachrichtigung schließen",s9836b719fa8ef857:"Sa",s987ac119fac8d621:"So",s98dfb7a8cd8ec342:"Wählen Sie das heutige Datum",s9af3c72c33088826:i`Es gibt ${0} Fehler zu beheben, bevor du fortfahren kannst:`,sa6f2645578b2d2bc:"Jahr",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Monat",sb4f1dffbb6be6302:"Löschen",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Verfügbare Optionen filtern",sdc42f1da42d6411a:"Feld löschen",se0955919920ee87d:"Tag",se4129fd6b9d7b4c2:"Letztes verfügbares Datum",sf1f100572e888a9d:"Zum vorherigen Monat wechseln",sf295af199c723ec8:"Fr"},Pe=Object.freeze(Object.defineProperty({__proto__:null,templates:De},Symbol.toStringTag,{value:"Module"})),Fe={s15a16ae9f99f19bf:"Heinä",s15a852e9f9a50fa5:"Kesä",s1727e353c65eba61:"Tyhjennä valittu päivämäärä",s17e3edbe032f79ec:"Avaa kalenteri-modal",s1910f3ebccaec414:i`${0} valittu`,s1a2dda8f763a68bd:"Tammikuu",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Touko",s281846ef0421c71f:"Marraskuu",s2ceb11be2290bb1b:"Peruuta",s307db9af9905317d:"Lomakkeen virheiden yhteenveto",s39938ecdae568740:"Syys",s39943b8a5733f5d2:"Automaattinen sulkeutumisaika",s3b8a6245b12fa2ad:"Murupolku",s407a88a592a0987c:"Elokuu",s49730f3d5751a433:"Ladataan...",s5052d10b539eabf0:"Maalis",s5d929ff1619ac0c9:"Hae",s5e8250fb85d64c23:"Sulje",s5febcd9b311c16fe:"Vieritä oikealle",s63d040e37887f17e:"Tänään",s6cfed919e21ac6ac:"To",s6d24cd19e23b8185:"Ti",s74aa0319e62b2eb7:"Ke",s7793b811d20184fe:"Joulukuu",s7fd3469f78111589:"Avaa pikavalikko",s83c436ed1bc16dfb:"Näytä lisää tietoja",s88365264d8a05b05:"Vaihda seuraavaan kuukauteen",s8ade4e9d5e804d6a:"Ensimmäinen saatavilla oleva päivämäärä",s8f18916860db5d80:"Tyhjennä valinta",s979f38023babd06d:"Ohita hälytys",s9836b719fa8ef857:"La",s987ac119fac8d621:"Su",s98dfb7a8cd8ec342:"Valitse tämän päivän päivämäärä",s9af3c72c33088826:i`On ${0} virhettä, jotka täytyy korjata ennen kuin voit jatkaa:`,sa6f2645578b2d2bc:"Vuosi",sa7cd5c2ff6d266e7:"Lokakuu",sb47daaf9e1c4a905:"Kuukausi",sb4f1dffbb6be6302:"Tyhjennä",sbc083a1dbee9af73:"Helmikuu",scb6b9cb49cf93277:"Huhti",sd898d99fd9c13de6:"Suodata saatavilla olevia vaihtoehtoja",sdc42f1da42d6411a:"Tyhjennä syöte",se0955919920ee87d:"Päivä",se4129fd6b9d7b4c2:"Viimeinen saatavilla oleva päivämäärä",sf1f100572e888a9d:"Vaihda edelliseen kuukauteen",sf295af199c723ec8:"Pe"},Ge=Object.freeze(Object.defineProperty({__proto__:null,templates:Fe},Symbol.toStringTag,{value:"Module"})),Re={s15a16ae9f99f19bf:"Juillet",s15a852e9f9a50fa5:"Juin",s1727e353c65eba61:"Effacer la date sélectionnée",s17e3edbe032f79ec:"Ouvrir le calendrier modal",s1910f3ebccaec414:i`${0} options sélectionnés`,s1a2dda8f763a68bd:"Janvier",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annuler",s307db9af9905317d:"Résumé des erreurs du formulaire",s39938ecdae568740:"Septembre",s39943b8a5733f5d2:"Minuterie de fermeture automatique",s3b8a6245b12fa2ad:"Fil d'Ariane",s407a88a592a0987c:"Août",s49730f3d5751a433:"Chargement...",s5052d10b539eabf0:"Mars",s5d929ff1619ac0c9:"Rechercher",s5e8250fb85d64c23:"Fermer",s5febcd9b311c16fe:"Faire défiler à droite",s63d040e37887f17e:"Aujourd'hui",s6cfed919e21ac6ac:"Jeu",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Décembre",s7fd3469f78111589:"Ouvrir le menu contextuel",s83c436ed1bc16dfb:"Afficher plus d'informations",s88365264d8a05b05:"Passer au mois suivant",s8ade4e9d5e804d6a:"Première date disponible",s8f18916860db5d80:"Effacer la sélection",s979f38023babd06d:"Fermer l'alerte",s9836b719fa8ef857:"Sam",s987ac119fac8d621:"Dim",s98dfb7a8cd8ec342:"Sélectionnez la date du jour",s9af3c72c33088826:i`Il y a ${0} erreur(s) à corriger avant de pouvoir continuer :`,sa6f2645578b2d2bc:"Année",sa7cd5c2ff6d266e7:"Octobre",sb47daaf9e1c4a905:"Mois",sb4f1dffbb6be6302:"Effacer",sbc083a1dbee9af73:"Février",scb6b9cb49cf93277:"Avril",sd898d99fd9c13de6:"Filtrer les options disponibles",sdc42f1da42d6411a:"Effacer la saisie",se0955919920ee87d:"Jour",se4129fd6b9d7b4c2:"Dernière date disponible",sf1f100572e888a9d:"Passer au mois précédent",sf295af199c723ec8:"Ven"},Je=Object.freeze(Object.defineProperty({__proto__:null,templates:Re},Symbol.toStringTag,{value:"Module"})),We={s15a16ae9f99f19bf:"Luglio",s15a852e9f9a50fa5:"Giugno",s1727e353c65eba61:"Pulisci la data selezionata",s17e3edbe032f79ec:"Apri la finestra del calendario",s1910f3ebccaec414:i`${0} opzioni selezionate`,s1a2dda8f763a68bd:"Gennaio",s1e118319b5202c41:"Lun",s1e187019b5262aa6:"Maggio",s281846ef0421c71f:"Novembre",s2ceb11be2290bb1b:"Annulla",s307db9af9905317d:"Riepilogo degli errori del modulo",s39938ecdae568740:"Settembre",s39943b8a5733f5d2:"Timer di chiusura automatica",s3b8a6245b12fa2ad:"Percorso di navigazione",s407a88a592a0987c:"Agosto",s49730f3d5751a433:"Caricamento...",s5052d10b539eabf0:"Marzo",s5d929ff1619ac0c9:"Cerca",s5e8250fb85d64c23:"Chiudi",s5febcd9b311c16fe:"Scorri a destra",s63d040e37887f17e:"Oggi",s6cfed919e21ac6ac:"Gio",s6d24cd19e23b8185:"Mar",s74aa0319e62b2eb7:"Mer",s7793b811d20184fe:"Dicembre",s7fd3469f78111589:"Apri il menu contestuale",s83c436ed1bc16dfb:"Mostra più informazioni",s88365264d8a05b05:"Passa al mese successivo",s8ade4e9d5e804d6a:"Prima data disponibile",s8f18916860db5d80:"Rimuovi selezione",s979f38023babd06d:"Chiudi avviso",s9836b719fa8ef857:"Sab",s987ac119fac8d621:"Dom",s98dfb7a8cd8ec342:"Seleziona la data odierna",s9af3c72c33088826:i`Ci sono ${0} errori da correggere prima di poter continuare:`,sa6f2645578b2d2bc:"Anno",sa7cd5c2ff6d266e7:"Ottobre",sb47daaf9e1c4a905:"Mese",sb4f1dffbb6be6302:"Pulisci",sbc083a1dbee9af73:"Febbraio",scb6b9cb49cf93277:"Aprile",sd898d99fd9c13de6:"Filtra le opzioni disponibili",sdc42f1da42d6411a:"Pulisci il campo di input",se0955919920ee87d:"Giorno",se4129fd6b9d7b4c2:"Ultima data disponibile",sf1f100572e888a9d:"Passa al mese precedente",sf295af199c723ec8:"Ven"},Ie=Object.freeze(Object.defineProperty({__proto__:null,templates:We},Symbol.toStringTag,{value:"Module"})),Be={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s1727e353c65eba61:"Wis geselecteerde datum",s17e3edbe032f79ec:"Open kalenderpop-up",s1910f3ebccaec414:i`${0} geselecteerd`,s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Ma",s1e187019b5262aa6:"Mei",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Annuleren",s307db9af9905317d:"Formulierfoutoverzicht",s39938ecdae568740:"September",s39943b8a5733f5d2:"Automatisch sluiten timer",s3b8a6245b12fa2ad:"Kruimelpad",s407a88a592a0987c:"Augustus",s49730f3d5751a433:"Laden...",s5052d10b539eabf0:"Maart",s5d929ff1619ac0c9:"Zoeken",s5e8250fb85d64c23:"Sluiten",s5febcd9b311c16fe:"Scroll rechts",s63d040e37887f17e:"Vandaag",s6cfed919e21ac6ac:"Do",s6d24cd19e23b8185:"Di",s74aa0319e62b2eb7:"Wo",s7793b811d20184fe:"December",s7fd3469f78111589:"Open contextmenu",s83c436ed1bc16dfb:"Toon meer informatie",s88365264d8a05b05:"Schakel naar volgende maand",s8ade4e9d5e804d6a:"Eerste beschikbare datum",s8f18916860db5d80:"Wis selectie",s979f38023babd06d:"Waarschuwing sluiten",s9836b719fa8ef857:"Za",s987ac119fac8d621:"Zo",s98dfb7a8cd8ec342:"Selecteer de datum van vandaag",s9af3c72c33088826:i`Er zijn ${0} fouten die gecorrigeerd moeten worden voordat je verder kunt gaan:`,sa6f2645578b2d2bc:"Jaar",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Maand",sb4f1dffbb6be6302:"Wis",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filter beschikbare opties",sdc42f1da42d6411a:"Wis invoer",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Laatste beschikbare datum",sf1f100572e888a9d:"Schakel naar vorige maand",sf295af199c723ec8:"Vr"},Ne=Object.freeze(Object.defineProperty({__proto__:null,templates:Be},Symbol.toStringTag,{value:"Module"})),Xe={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s1727e353c65eba61:"Rens valgt dato",s17e3edbe032f79ec:"Åpne kalendermodal",s1910f3ebccaec414:i`${0} valgte`,s1a2dda8f763a68bd:"Januar",s1e118319b5202c41:"Man",s1e187019b5262aa6:"Mai",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Skjema feil oppsummering",s39938ecdae568740:"September",s39943b8a5733f5d2:"Automatisk lukk-timer",s3b8a6245b12fa2ad:"Brødsmuler",s407a88a592a0987c:"August",s49730f3d5751a433:"Laster...",s5052d10b539eabf0:"Mars",s5d929ff1619ac0c9:"Søk",s5e8250fb85d64c23:"Lukk",s5febcd9b311c16fe:"Rull til høyre",s63d040e37887f17e:"I dag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tir",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"Desember",s7fd3469f78111589:"Åpne kontekstmeny",s83c436ed1bc16dfb:"Vis mer informasjon",s88365264d8a05b05:"Bytt til neste måned",s8ade4e9d5e804d6a:"Første tilgjengelige dato",s8f18916860db5d80:"Ryd valg",s979f38023babd06d:"Lukk varsel",s9836b719fa8ef857:"Lør",s987ac119fac8d621:"Søn",s98dfb7a8cd8ec342:"Velg dagens dato",s9af3c72c33088826:i`Det er ${0} feil som må rettes før du kan fortsette:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Måned",sb4f1dffbb6be6302:"Rens",sbc083a1dbee9af73:"Februar",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Filtrer tilgjengelige alternativer",sdc42f1da42d6411a:"Rens inputfelt",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Siste tilgjengelige dato",sf1f100572e888a9d:"Bytt til forrige måned",sf295af199c723ec8:"Fre"},qe=Object.freeze(Object.defineProperty({__proto__:null,templates:Xe},Symbol.toStringTag,{value:"Module"})),Ze={s15a16ae9f99f19bf:"Juli",s15a852e9f9a50fa5:"Juni",s1727e353c65eba61:"Rensa valt datum",s17e3edbe032f79ec:"Öppna kalender",s1910f3ebccaec414:i`${0} valda alternativ`,s1a2dda8f763a68bd:"Januari",s1e118319b5202c41:"Mån",s1e187019b5262aa6:"Maj",s281846ef0421c71f:"November",s2ceb11be2290bb1b:"Avbryt",s307db9af9905317d:"Sammanfattning av formulärfel",s39938ecdae568740:"September",s39943b8a5733f5d2:"Automatisk stängningstimer",s3b8a6245b12fa2ad:"Brödsmulor",s407a88a592a0987c:"Augusti",s49730f3d5751a433:"Laddar...",s5052d10b539eabf0:"Mars",s5d929ff1619ac0c9:"Sök",s5e8250fb85d64c23:"Stäng",s5febcd9b311c16fe:"Scrolla höger",s63d040e37887f17e:"Idag",s6cfed919e21ac6ac:"Tor",s6d24cd19e23b8185:"Tis",s74aa0319e62b2eb7:"Ons",s7793b811d20184fe:"December",s7fd3469f78111589:"Öppna meny",s83c436ed1bc16dfb:"Visa mer information",s88365264d8a05b05:"Växla till nästa månad",s8ade4e9d5e804d6a:"Första tillgängliga datum",s8f18916860db5d80:"Rensa val",s979f38023babd06d:"Stäng varning",s9836b719fa8ef857:"Lör",s987ac119fac8d621:"Sön",s98dfb7a8cd8ec342:"Välj dagens datum",s9af3c72c33088826:i`Det finns ${0} fel att åtgärda innan du kan fortsätta:`,sa6f2645578b2d2bc:"År",sa7cd5c2ff6d266e7:"Oktober",sb47daaf9e1c4a905:"Månad",sb4f1dffbb6be6302:"Rensa",sbc083a1dbee9af73:"Februari",scb6b9cb49cf93277:"April",sd898d99fd9c13de6:"Sök i listan av val",sdc42f1da42d6411a:"Rensa text",se0955919920ee87d:"Dag",se4129fd6b9d7b4c2:"Sista tillgängliga datum",sf1f100572e888a9d:"Växla till föregående månad",sf295af199c723ec8:"Fre"},He=Object.freeze(Object.defineProperty({__proto__:null,templates:Ze},Symbol.toStringTag,{value:"Module"})),P=new Map([["sv",He],["no",qe],["nl",Ne],["it",Ie],["fr",Je],["fi",Ge],["de",Pe],["da",Ve]]),Ue=({extraLocales:t,extraTemplates:e}={extraLocales:[],extraTemplates:new Map})=>{const s=[...Ae];for(const[a,r]of e)P.set(a,r);for(const a of t)s.push(a);return _e({sourceLocale:Te,targetLocales:s,loadLocale:async a=>{const r=P.get(a);return r||Promise.reject(new Error(`Locale ${a} not found`))}})};Y(G);ee();const As={style:{name:"Change design version",defaultValue:"2023",toolbar:{icon:"lightning",items:["2016","2023"],showName:!0,dynamicTitle:!0}},language:{name:"Language",defaultValue:"en",toolbar:{icon:"globe",items:["en","sv","da","de","fi","fr","it","nl","no"],showName:!0,dynamicTitle:!0}}},{setLocale:Ke}=Ue(),Es={parameters:{docs:{page:$e,transformSource:t=>{const e=t.match(/<gds-theme>([\s\S]*?)<\/gds-theme>/);return e?e[1]:t}},options:{storySort:{order:["Green Design System","Get started","What's what?","Docs","Components","Style",["Components","Layout","Media","Content","Style"],"Concepts",["Architecture"],"Contributing",["Introduction"]]}}},decorators:[(t,e)=>(Ke(e.globals.language),setTimeout(()=>{const s=Array.from(document.querySelectorAll("tr")).find(r=>{var d;return(d=r.getAttribute("title"))==null?void 0:d.startsWith("Hide Declarative layout")}),a=s==null?void 0:s.querySelector('button[tabindex="0"]');a&&a.click()},10),Q`<gds-theme .designVersion=${e.globals.style}
        >${t()}</gds-theme
      >`)]};export{Es as default,As as globalTypes};
