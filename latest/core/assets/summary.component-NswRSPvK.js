import{i as G,t as k,n as x,A as E,b,H as _,a1 as S,h as g,E as A,g as M,G as O,I as F}from"./iframe-BOjKxah_.js";import{r as I}from"./query-async-CMrVH67S.js";import{m as B}from"./datepicker.component-CAukswIq.js";import{G as R}from"./card.component-DlSMeA2J.js";import{G as T}from"./flex.component-BVX8zNtn.js";import{I as D}from"./arrow-up.component-cQAqRaSu.js";const P=G`
  :host {
    display: contents;
  }
  ul {
    list-style-type: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  li {
    margin: 0;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      margin 0.3s ease-in-out;
  }
  li[inert] {
    max-height: 0;
    opacity: 0;
  }
  li:not([inert]) {
    max-height: 4rem;
    opacity: 1;
  }
  a {
    color: inherit;
  }
`;var W=Object.defineProperty,q=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},h=(e,r,t,o)=>{for(var s=o>1?void 0:o?q(r,t):r,p=e.length-1,u;p>=0;p--)(u=e[p])&&(s=(o?u(r,t,s):u(s))||s);return o&&s&&W(r,t,s),s},v=(e,r,t)=>r.has(e)||C("Cannot "+t),d=(e,r,t)=>(v(e,r,"read from private field"),r.get(e)),f=(e,r,t)=>r.has(e)?C("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),w=(e,r,t,o)=>(v(e,r,"write to private field"),r.set(e,t),t),l=(e,r,t)=>(v(e,r,"access private method"),t),i,c,a,y,m,$;let n=class extends E{constructor(){super(...arguments),f(this,a),this.hideErrors=!1,this.reactive=!1,f(this,i),f(this,c)}get errorCount(){return l(this,a,m).call(this).length}focus(e){this._elRoot.then(r=>{const t=r.querySelector('[gds-element="gds-button"]');t&&t.focus(e)})}connectedCallback(){super.connectedCallback(),w(this,i,this.closest("form")||void 0),d(this,i)&&this.reactive&&(w(this,c,new MutationObserver(()=>{this.refresh()})),d(this,c).observe(d(this,i),{attributes:!0,subtree:!0}))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=d(this,c))==null||e.disconnect()}refresh(){this.requestUpdate()}render(){const e=l(this,a,y).call(this),r=l(this,a,m).call(this);return b(r.length>0,()=>g`<gds-card
          id="root"
          role="navigation"
          variant="negative"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${_("Form error summary")}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${_(S`There are ${r.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${e.map((t,o)=>g`<li ?inert=${!(t.ariaInvalid==="true"||t.invalid)}>
                    <gds-card
                      display="flex"
                      padding="s"
                      flex-direction="row"
                      align-items="center"
                      justify-content="space-between"
                      gap="xs"
                      level="3"
                      color="negative-01"
                      background="transparent; hover: negative-01/.1"
                      style="cursor: pointer"
                      border-width="0"
                      border-radius="xs"
                      margin="0 -xs"
                      @click=${s=>{s.preventDefault(),t.focus()}}
                    >
                      <div id=${`error-label-${o}`}>
                        <gds-div font-weight="book"
                          >${t.dataset.label||t.label||t.ariaLabel}</gds-div
                        >
                        ${b(!this.hideErrors,()=>g`<gds-div font="body-regular-s">
                              ${t.dataset.errormessage||t.errorMessage||t.ariaErrorMessage}
                            </gds-div>`)}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${`Move focus to ${t.label} field`}
                      >
                        ${B(l(this,a,$).call(this,t),A)}
                      </gds-button>
                    </gds-card>
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};i=new WeakMap;c=new WeakMap;a=new WeakSet;y=function(){var e;return Array.from(((e=d(this,i))==null?void 0:e.elements)||[]).filter(r=>r.gdsElementName!=="gds-checkbox")};m=function(){return l(this,a,y).call(this).filter(e=>e.ariaInvalid==="true"||e.invalid)};$=async function(e){const r=(await this._elRoot).getBoundingClientRect().top;return e.getBoundingClientRect().top<r?g`<gds-icon-arrow-up></gds-icon-arrow-up>`:g`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`};n.styles=[k,P];h([x({type:Boolean})],n.prototype,"hideErrors",2);h([x({type:Boolean})],n.prototype,"reactive",2);h([I("#root")],n.prototype,"_elRoot",2);n=h([M("gds-form-summary",{dependsOn:[R,T,O,F,D]})],n);export{n as G};
