import{n as f,r as u}from"./Reflect-DJ7r0WLU.js";import{h,G as _,g as y}from"./gds-element-DTROifYq.js";import{t as S}from"./tokens.style-BbYzqIl5.js";import{w as b,b as O,d as w}from"./declarative-layout-mixins-DjJmHTNk.js";import{G as $}from"./flex.component-DrvIPzOi.js";import{i as k}from"./lit-element-Bx14lxc-.js";const z=k`
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
`;var E=Object.defineProperty,C=Object.getOwnPropertyDescriptor,m=t=>{throw TypeError(t)},r=(t,e,a,o)=>{for(var s=o>1?void 0:o?C(e,a):e,i=t.length-1,c;i>=0;i--)(c=t[i])&&(s=(o?c(e,a,s):c(s))||s);return o&&s&&E(e,a,s),s},G=(t,e,a)=>e.has(t)||m("Cannot "+a),N=(t,e,a)=>e.has(t)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),d=(t,e,a)=>(G(t,e,"access private method"),a),l,p,g,v,x;let n=class extends b(O(w(_))){constructor(){super(...arguments),N(this,l),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1,this.leadSlotOccupied=!1}render(){let t,e;if(this.notification)t="negative-01",e="inversed";else switch(this.variant){case"information":t="information-03",e="information-01";break;case"notice":t="notice-03",e="notice-01";break;case"positive":t="positive-03",e="positive-03";break;case"warning":t="warning-03",e="warning-01";break;case"negative":t="negative-03",e="negative-01";break;case"disabled":t="disabled-03",e="disabled-01";break;default:t="information-03",e="information-01";break}const a=(()=>{const i=this.size==="small"||this.notification;return{small:{occupied:"3xs 2xs 3xs xs",default:"3xs 2xs"},default:{occupied:"3xs xs 3xs 2xs",default:"3xs xs"}}[i?"small":"default"][this.leadSlotOccupied?"occupied":"default"]})(),o=(()=>{const i={occupied:{small:"m",default:"l"},default:"xs"};return this.mainSlotOccupied?i.occupied[this.size==="small"||this.notification?"small":"default"]:i.default})(),s=(()=>{const i={notification:{occupied:"l",default:"0"},default:"l"};return this.notification?i.notification[this.mainSlotOccupied?"occupied":"default"]:i.default})();return h`<gds-flex
      level="3"
      background=${t}
      color=${e}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="${this.notification?"center":"flex-start"}"
      padding="${a}"
      min-height="${o}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      width="100%"
      min-width="${s}"
      font="${this.size==="small"||this.notification?"detail-book-xs":"detail-book-s"}"
    >
      ${d(this,l,g).call(this)} ${d(this,l,v).call(this)}
      ${d(this,l,x).call(this)}
    </gds-flex>`}};l=new WeakSet;p=function(t,e){const o=t.target.assignedNodes({flatten:!0});this[e]=o.length>0&&o.some(s=>{var i;return s.nodeType===Node.ELEMENT_NODE||s.nodeType===Node.TEXT_NODE&&((i=s.textContent)==null?void 0:i.trim())!==""})};g=function(){if(this.size!=="small"||!this.notification)return h`<slot
        name="lead"
        @slotchange=${t=>d(this,l,p).call(this,t,"leadSlotOccupied")}
      ></slot>`};v=function(){return h`<slot
      @slotchange=${t=>d(this,l,p).call(this,t,"mainSlotOccupied")}
    ></slot>`};x=function(){return h`<slot name="trail"></slot>`};n.styles=[S,z];r([f()],n.prototype,"variant",2);r([f({type:String})],n.prototype,"size",2);r([f({attribute:"notification",type:Boolean,reflect:!0})],n.prototype,"notification",2);r([f({attribute:"rounded",type:Boolean,reflect:!0})],n.prototype,"rounded",2);r([u()],n.prototype,"mainSlotOccupied",2);r([u()],n.prototype,"leadSlotOccupied",2);n=r([y("gds-badge",{dependsOn:[$]})],n);export{n as G};
