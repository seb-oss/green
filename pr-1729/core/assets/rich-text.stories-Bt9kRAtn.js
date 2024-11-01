import{g as m,G as u,h as g}from"./custom-element-scoping-CpYtbs9r.js";import{t as f}from"./tokens.style-RalixZsd.js";import{o as y}from"./observe-light-dom-CmJPHUQ4.js";import{d as v}from"./default-typography.styles-BOILWASB.js";import{i as b}from"./lit-element-C_s9q329.js";import"./divider-DkqSgEb0.js";import"./card-DaWIu-qR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-expression-property-C6V8xdlu.js";import"./container-BCJYnPkU.js";const S=b`
  :host {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
  }

  :host > :first-child {
    margin-top: 0;
  }

  /*
  * typography
  * -----------------------------------------------------------
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.6lh;
    margin-bottom: 0.3lh;
  }

  p {
    margin-bottom: 1lh;
  }

  blockquote {
    margin: unset;
    border-left: 0.2rem solid currentColor;
    padding-left: 1ch;
  }

  s {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: -0.22lh;
  }

  mark {
    color: currentColor;
    background-color: color-mix(in srgb, currentColor, transparent 80%);
  }

  /*
  * lists
  * -----------------------------------------------------------
  */
  ul,
  ol,
  li {
    margin: 0 0 0 1ch;
    padding: 0 0 0.3lh 0;
  }
  li:last-child {
    padding: 0;
  }

  ul li::marker {
    content: '– ';
  }

  /*
  * figure
  * -----------------------------------------------------------
  */
  figure {
    margin: 0;
    padding: 0;
    & img {
      display: block;
    }
  }
  figcaption {
    font-size: smaller;
  }

  /*
  * table
  * -----------------------------------------------------------
  */
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    font-weight: var(--gds-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
  }
  th,
  td {
    padding: 0.3lh 0.6ch;
  }
  td:not(:last-child) {
    border-right: var(--default-border);
  }
  tr:nth-child(even) td {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  /*
  * Details
  * -----------------------------------------------------------
  */
  details {
    border: var(--default-border);
    border-radius: var(--gds-space-xs);
    padding: 0.5em 0.5em 0;
  }

  summary {
    font-weight: var(--gds-text-weight-book);
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
  }

  details[open] {
    padding: 0.5em;
  }

  details[open] summary {
    border-bottom: var(--default-border);
    margin-bottom: 0.5em;
  }
`;var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(t,r,o,i)=>{for(var e=i>1?void 0:i?x(r,o):r,n=t.length-1,l;n>=0;n--)(l=t[n])&&(e=(i?l(r,o,e):l(e))||e);return i&&e&&w(r,o,e),e};let a=class extends u{querySelectorAll(t){return this.shadowRoot?this.shadowRoot.querySelectorAll(t):new NodeList}querySelector(t){return this.shadowRoot?this.shadowRoot.querySelector(t):null}get innerHTML(){var t;return((t=this.shadowRoot)==null?void 0:t.innerHTML)||""}set innerHTML(t){this.shadowRoot&&(this.shadowRoot.innerHTML=t)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){!this.shadowRoot||this.childNodes.length===0||this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};a.styles=[f,v,S];p([y()],a.prototype,"_captureDOM",1);a=p([m("gds-rich-text")],a);const O={title:"Components/Rich Text",component:"gds-rich-text",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-rich-text\` can be used to wrap generic HTML content and apply typography styles.

The wrapped content will get captured and transferred to the inner shadowRoot of the \`gds-rich-text\` element.

A typical use case for this component is to wrap a block of HTML content output from a CMS or other source
that you want to apply the design system typography to.

@status beta`}}}},E={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...E,name:"Rich Text",render:t=>g`
    <gds-card>
      <gds-rich-text>
        <h1>
          The Starship <small>SS Endeavor</small> <mark>Exploration Class</mark>
        </h1>
        <p>
          The <strong>SS Endeavor</strong> is a state-of-the-art exploration
          class starship designed for deep space missions. Equipped with
          advanced technology and robust systems, it aims to expand our
          understanding of the universe. <br /><br />
          With a focus on <em>interstellar travel</em>, the SS Endeavor features
          a unique propulsion system that allows for faster-than-light travel.
          Its mission is to explore uncharted territories and gather data on
          distant celestial bodies.
        </p>
        <figure>
          <img src="https://placehold.co/600x400" alt="SS Endeavor Starship" />
          <figcaption>
            Artist's rendition of the SS Endeavor in flight.
          </figcaption>
        </figure>
        <blockquote>
          <p>
            "The SS Endeavor represents the pinnacle of human engineering and
            ambition. It is not just a vessel; it is our gateway to the stars."
            <cite>— Dr. Amelia Carter, Chief Engineer</cite>
          </p>
        </blockquote>
        <p>
          For detailed specifications, please refer to the
          <a
            href="javascript:;"
            onclick="console.log('Accessing starship specifications')"
            >technical documentation</a
          >. The SS Endeavor is equipped with cutting-edge systems that ensure
          the safety and efficiency of its crew during long-duration missions.
        </p>
        <p>
          Furthermore, <mark>SS Endeavor</mark> is designed with a modular
          approach, allowing for easy upgrades and maintenance.
        </p>
        <h2>Specifications</h2>
        <ul>
          <li>Length: 150 meters</li>
          <li>Width: 50 meters</li>
          <li>Height: 30 meters</li>
          <li>Crew Capacity: 100 personnel</li>
          <li>Propulsion: Quantum Slipstream Drive</li>
          <li>Maximum Speed: 10 light-years per hour</li>
        </ul>
        <h2>Mission Objectives</h2>
        <ol>
          <li>Conduct scientific research on exoplanets.</li>
          <li>
            Establish contact with potential extraterrestrial civilizations.
          </li>
          <li>Collect data on cosmic phenomena.</li>
          <li>Test new technologies in real-world scenarios.</li>
        </ol>
        <h3>Research Areas</h3>
        <details>
          <summary>Click to expand research focus areas</summary>
          <p>The SS Endeavor will focus on the following research areas:</p>
          <ul>
            <li>Astrobiology</li>
            <li>Exoplanetary geology</li>
            <li>Astrophysics and cosmology</li>
            <li>Space weather and its effects on technology</li>
          </ul>
        </details>
        <p>
          In summary, the <strong>SS Endeavor</strong> is poised to lead
          humanity's next great leap into the cosmos.
          <s>With the right investments and support,</s> its missions will pave
          the way for future exploration and discovery. <mark>Join us</mark> as
          we embark on this exciting journey into the unknown.
        </p>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Details</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Life Support System</td>
              <td>Advanced recycling and oxygen generation</td>
              <td>Ensures crew survival during long missions</td>
            </tr>
            <tr>
              <td>Navigation System</td>
              <td>AI-assisted star mapping</td>
              <td>Guides the ship through uncharted space</td>
            </tr>
            <tr>
              <td>Defensive Systems</td>
              <td>Energy shields and hull plating</td>
              <td>Protects against cosmic threats</td>
            </tr>
            <tr>
              <td>Scientific Labs</td>
              <td>Equipped for various research disciplines</td>
              <td>Facilitates on-board experiments</td>
            </tr>
            <tr>
              <td>Propulsion System</td>
              <td>Quantum Slipstream Drive</td>
              <td>Enables faster-than-light travel</td>
            </tr>
          </tbody>
        </table>
      </gds-rich-text>
    </gds-card>
  `};var d,h,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rich Text',
  render: args => html\`
    <gds-card>
      <gds-rich-text>
        <h1>
          The Starship <small>SS Endeavor</small> <mark>Exploration Class</mark>
        </h1>
        <p>
          The <strong>SS Endeavor</strong> is a state-of-the-art exploration
          class starship designed for deep space missions. Equipped with
          advanced technology and robust systems, it aims to expand our
          understanding of the universe. <br /><br />
          With a focus on <em>interstellar travel</em>, the SS Endeavor features
          a unique propulsion system that allows for faster-than-light travel.
          Its mission is to explore uncharted territories and gather data on
          distant celestial bodies.
        </p>
        <figure>
          <img src="https://placehold.co/600x400" alt="SS Endeavor Starship" />
          <figcaption>
            Artist's rendition of the SS Endeavor in flight.
          </figcaption>
        </figure>
        <blockquote>
          <p>
            "The SS Endeavor represents the pinnacle of human engineering and
            ambition. It is not just a vessel; it is our gateway to the stars."
            <cite>— Dr. Amelia Carter, Chief Engineer</cite>
          </p>
        </blockquote>
        <p>
          For detailed specifications, please refer to the
          <a
            href="javascript:;"
            onclick="console.log('Accessing starship specifications')"
            >technical documentation</a
          >. The SS Endeavor is equipped with cutting-edge systems that ensure
          the safety and efficiency of its crew during long-duration missions.
        </p>
        <p>
          Furthermore, <mark>SS Endeavor</mark> is designed with a modular
          approach, allowing for easy upgrades and maintenance.
        </p>
        <h2>Specifications</h2>
        <ul>
          <li>Length: 150 meters</li>
          <li>Width: 50 meters</li>
          <li>Height: 30 meters</li>
          <li>Crew Capacity: 100 personnel</li>
          <li>Propulsion: Quantum Slipstream Drive</li>
          <li>Maximum Speed: 10 light-years per hour</li>
        </ul>
        <h2>Mission Objectives</h2>
        <ol>
          <li>Conduct scientific research on exoplanets.</li>
          <li>
            Establish contact with potential extraterrestrial civilizations.
          </li>
          <li>Collect data on cosmic phenomena.</li>
          <li>Test new technologies in real-world scenarios.</li>
        </ol>
        <h3>Research Areas</h3>
        <details>
          <summary>Click to expand research focus areas</summary>
          <p>The SS Endeavor will focus on the following research areas:</p>
          <ul>
            <li>Astrobiology</li>
            <li>Exoplanetary geology</li>
            <li>Astrophysics and cosmology</li>
            <li>Space weather and its effects on technology</li>
          </ul>
        </details>
        <p>
          In summary, the <strong>SS Endeavor</strong> is poised to lead
          humanity's next great leap into the cosmos.
          <s>With the right investments and support,</s> its missions will pave
          the way for future exploration and discovery. <mark>Join us</mark> as
          we embark on this exciting journey into the unknown.
        </p>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Details</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Life Support System</td>
              <td>Advanced recycling and oxygen generation</td>
              <td>Ensures crew survival during long missions</td>
            </tr>
            <tr>
              <td>Navigation System</td>
              <td>AI-assisted star mapping</td>
              <td>Guides the ship through uncharted space</td>
            </tr>
            <tr>
              <td>Defensive Systems</td>
              <td>Energy shields and hull plating</td>
              <td>Protects against cosmic threats</td>
            </tr>
            <tr>
              <td>Scientific Labs</td>
              <td>Equipped for various research disciplines</td>
              <td>Facilitates on-board experiments</td>
            </tr>
            <tr>
              <td>Propulsion System</td>
              <td>Quantum Slipstream Drive</td>
              <td>Enables faster-than-light travel</td>
            </tr>
          </tbody>
        </table>
      </gds-rich-text>
    </gds-card>
  \`
}`,...(c=(h=s.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};const _=["Basic"];export{s as Basic,_ as __namedExportsOrder,O as default};
