import{n as h}from"./Reflect-DJ7r0WLU.js";import{e as _}from"./class-map-CXsQwv0r.js";import{n as m}from"./when-BR7zwNJC.js";import{G as $,h as n,g as w}from"./gds-element-DTROifYq.js";import{t as G}from"./tokens.style-CQAfIFlK.js";import{G as k}from"./button.component-D-n6FD2-.js";import{a as P,G as x}from"./context-menu.component-lyyXBHF2.js";import{G as z}from"./dropdown.component-PBEJBNj2.js";import{I as C}from"./chevron-bottom.component-CSL53Fnd.js";import{I,a as E,b as S,c as D}from"./chevron-right-small.component-DK4xuJpw.js";import{G as M}from"./text-Z9s1gHys.js";import{i as O}from"./lit-element-Bx14lxc-.js";const A=O`
  :host {
    display: flex;
    align-items: center;
    gap: var(--gds-sys-space-xl);
  }

  .pages {
    display: flex;
    gap: var(--gds-sys-space-2xs);
  }
`;var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,u=t=>{throw TypeError(t)},d=(t,e,s,c)=>{for(var i=c>1?void 0:c?N(e,s):e,g=t.length-1,p;g>=0;g--)(p=t[g])&&(i=(c?p(e,s,i):p(i))||i);return c&&i&&B(e,s,i),i},v=(t,e,s)=>e.has(t)||u("Cannot "+s),j=(t,e,s)=>(v(t,e,"read from private field"),s?s.call(t):e.get(t)),L=(t,e,s)=>e.has(t)?u("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),r=(t,e,s)=>(v(t,e,"access private method"),s),a,f,b,l,y;let o=class extends ${constructor(){super(...arguments),L(this,a),this.page=1,this.rows=10,this.total=0,this.options=[5,10,25,50],this.jump=!1}render(){const t=j(this,a,f),e=r(this,a,b).call(this,t);return n`
      <div class="pages">
        ${m(this.jump,()=>n`
            <gds-button
              size="small"
              rank="secondary"
              ?disabled=${this.page===1}
              @click=${()=>r(this,a,l).call(this,1)}
            >
              <gds-icon-chevron-double-left size="l">
              </gds-icon-chevron-double-left>
            </gds-button>
          `)}

        <gds-button
          size="small"
          rank="secondary"
          ?disabled=${this.page===1}
          @click=${()=>r(this,a,l).call(this,this.page-1)}
        >
          <gds-icon-chevron-left-small size="l"> </gds-icon-chevron-left-small>
        </gds-button>

        ${e.map(s=>n`
            ${s==="..."?n`<gds-button
                  size="small"
                  rank="tertiary"
                  width="40px"
                  inert
                >
                  ...
                </gds-button>`:n`
                  <gds-button
                    size="small"
                    rank="${this.page===s?"primary":"tertiary"}"
                    @click=${()=>r(this,a,l).call(this,s)}
                  >
                    ${s}
                  </gds-button>
                `}
          `)}

        <gds-button
          size="small"
          rank="secondary"
          ?disabled=${this.page===t}
          @click=${()=>r(this,a,l).call(this,this.page+1)}
        >
          <gds-icon-chevron-right-small size="l">
          </gds-icon-chevron-right-small>
        </gds-button>
        ${m(this.jump,()=>n`
            <gds-button
              rank="secondary"
              size="small"
              ?disabled=${this.page===t}
              @click=${()=>r(this,a,l).call(this,t)}
            >
              <gds-icon-chevron-double-right size="l">
              </gds-icon-chevron-double-right>
            </gds-button>
          `)}
      </div>

      <gds-context-menu @gds-menu-item-click=${r(this,a,y)}>
        <gds-button slot="trigger" size="small" rank="secondary">
          ${this.rows}
          <gds-icon-chevron-bottom
            slot="trail"
            size="m"
          ></gds-icon-chevron-bottom>
        </gds-button>
        ${this.options.map(s=>n`
            <gds-menu-item
              data-value=${s}
              class=${_({selected:this.rows===s})}
            >
              ${s}
            </gds-menu-item>
          `)}
      </gds-context-menu>
    `}};a=new WeakSet;f=function(){return Math.ceil(this.total/this.rows)};b=function(t){if(t<=7)return Array.from({length:t},(c,i)=>i+1);const e=t;let s=[];return this.page<=4?(s=[2,3,4,5],[1,...s,"...",e]):this.page>=t-3?(s=[t-4,t-3,t-2,t-1],[1,"...",...s,e]):(s=[this.page-1,this.page,this.page+1],[1,"...",...s,"...",e])};l=function(t){this.dispatchEvent(new CustomEvent("gds-page-change",{detail:{page:t},bubbles:!0}))};y=function(t){const e=t.target,s=parseInt(e.dataset.value||"10");s!==this.rows&&this.dispatchEvent(new CustomEvent("gds-rows-change",{detail:{rows:s},bubbles:!0}))};o.styles=[G,A];d([h({type:Number})],o.prototype,"page",2);d([h({type:Number})],o.prototype,"rows",2);d([h({type:Number})],o.prototype,"total",2);d([h({type:Array})],o.prototype,"options",2);d([h({type:Boolean})],o.prototype,"jump",2);o=d([w("gds-pagination",{dependsOn:[k,M,z,P,x,C,I,E,S,D]})],o);o.define();export{o as G};
