import{m,s as d}from"./runtime-BL31MtW8.js";import{i as f}from"./lit-element-Bx14lxc-.js";import{n as c}from"./when-BR7zwNJC.js";import{G as g,h as i,g as p}from"./custom-element-scoping-CNGU1oQ0.js";import{G as u}from"./card.component-a_DdskCg.js";import{G as b}from"./flex.component-DXi-h7Ch.js";import{G as h}from"./text.component-CpYv9ler.js";var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,G=(t,s,o,e)=>{for(var r=e>1?void 0:e?x(s,o):s,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(e?a(s,o,r):a(r))||r);return e&&r&&v(s,o,r),r};let l=class extends g{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.formObserver)==null||t.disconnect()}render(){var o;const s=Array.from(((o=this.form)==null?void 0:o.elements)||[]).filter(e=>e.invalid);return c(s.length>0,()=>i`<gds-card
          level="2"
          border="4xs"
          border-color="negative"
          border-radius="xs"
          padding="l"
          background="negative"
          color="negative"
        >
          <gds-flex gap="s">
            <gds-text font-size="heading-xs" font-weight="book">
              ${m(d`There are ${s.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${s.map(e=>i`<li>
                    <a
                      href=""
                      @click=${r=>{r.preventDefault(),e.focus()}}
                      >${e.label}</a
                    >
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};l.styles=f`
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: inherit;
    }
  `;l=G([p("gds-form-summary",{dependsOn:[u,b,h]})],l);export{l as G};
