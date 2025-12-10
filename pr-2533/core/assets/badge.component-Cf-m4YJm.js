import{i as y,N as S,D as b,H as O,I as $,h as f,t as w,n as u,O as p,g as k}from"./iframe-C_jDVgJS.js";import{G as z}from"./flex.component-RhKc5ocJ.js";const E=y`
  :host {
    display: inline-block;
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }
`;var C=Object.defineProperty,N=Object.getOwnPropertyDescriptor,m=t=>{throw TypeError(t)},c=(t,e,a,o)=>{for(var s=o>1?void 0:o?N(e,a):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(s=(o?i(e,a,s):i(s))||s);return o&&s&&C(e,a,s),s},P=(t,e,a)=>e.has(t)||m("Cannot "+a),T=(t,e,a)=>e.has(t)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),d=(t,e,a)=>(P(t,e,"access private method"),a),r,h,g,v,x;let n=class extends S(b(O($))){constructor(){super(...arguments),T(this,r),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){let t,e;if(this.notification)t="negative-01",e="inversed";else switch(this.variant){case"information":t="information-03",e="information-01";break;case"notice":t="notice-03",e="notice-01";break;case"positive":t="positive-03",e="positive-03";break;case"warning":t="warning-03",e="warning-01";break;case"negative":t="negative-03",e="negative-01";break;case"disabled":t="disabled-03",e="disabled-01";break;default:t="information-03",e="information-01";break}const a=(()=>{const i={notification:{occupied:"4xs 2xs",default:"3xs"},small:{occupied:"4xs 3xs",default:"4xs 3xs"},default:{occupied:"3xs xs 3xs 2xs",default:"4xs xs"}};if(this.notification)return i.notification[this.mainSlotOccupied?"occupied":"default"];const _=this.size==="small";return i[_?"small":"default"][this.leadSlotOccupied?"occupied":"default"]})(),o=(()=>{const i={occupied:{small:"m",default:"l"},default:"xs"};return this.mainSlotOccupied?i.occupied[this.size==="small"||this.notification?"small":"default"]:i.default})(),s=(()=>{const i={notification:{occupied:"l",default:"0"},default:"l"};return this.notification?i.notification[this.mainSlotOccupied?"occupied":"default"]:i.default})(),l=(()=>{const i={small:"3xs",notification:"max",default:"2xs"};return this.rounded?"max":this.notification?i.notification:this.size==="small"?i.small:i.default})();return f`<gds-flex
      level="3"
      background=${t}
      color=${e}
      gap="${this.notification?"":"3xs"}"
      align-items="center"
      justify-content="${this.notification?"center":"flex-start"}"
      padding="${a}"
      min-height="${o}"
      border-radius="${l}"
      width="100%"
      min-width="${s}"
      font="${this.size==="small"||this.notification?"detail-book-xs":"detail-book-s"}"
    >
      ${d(this,r,g).call(this)} ${d(this,r,v).call(this)}
      ${d(this,r,x).call(this)}
    </gds-flex>`}};r=new WeakSet;h=function(t,e){const o=t.target.assignedNodes({flatten:!0});this[e]=o.length>0&&o.some(s=>{var l;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((l=s.textContent)==null?void 0:l.trim())!==""})};g=function(){if(this.size!=="small"||!this.notification)return f`<slot
        name="lead"
        @slotchange=${t=>d(this,r,h).call(this,t,"leadSlotOccupied")}
      ></slot>`};v=function(){return f`<slot
      @slotchange=${t=>d(this,r,h).call(this,t,"mainSlotOccupied")}
    ></slot>`};x=function(){return f`<slot name="trail"></slot>`};n.styles=[w,E];c([u()],n.prototype,"variant",2);c([u({type:String})],n.prototype,"size",2);c([u({attribute:"notification",type:Boolean,reflect:!0})],n.prototype,"notification",2);c([u({attribute:"rounded",type:Boolean,reflect:!0})],n.prototype,"rounded",2);c([p()],n.prototype,"mainSlotOccupied",2);c([p()],n.prototype,"leadSlotOccupied",2);n=c([k("gds-badge",{dependsOn:[z]})],n);export{n as G};
