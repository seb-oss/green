import{g as H,G as P,h as d}from"./custom-element-scoping-CpYtbs9r.js";import{t as I}from"./tokens.style-RalixZsd.js";import{o as F}from"./observe-light-dom-CmJPHUQ4.js";import{d as j}from"./default-typography.styles-BOILWASB.js";import{i as G}from"./lit-element-C_s9q329.js";import"./divider-DkqSgEb0.js";import"./card-DaWIu-qR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./style-expression-property-C6V8xdlu.js";import"./container-BCJYnPkU.js";const O=G`
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
`;var _=Object.defineProperty,N=Object.getOwnPropertyDescriptor,q=(e,r,h,o)=>{for(var t=o>1?void 0:o?N(r,h):r,p=e.length-1,u;p>=0;p--)(u=e[p])&&(t=(o?u(r,h,t):u(t))||t);return o&&t&&_(r,h,t),t};let l=class extends P{querySelectorAll(e){return this.shadowRoot?this.shadowRoot.querySelectorAll(e):new NodeList}querySelector(e){return this.shadowRoot?this.shadowRoot.querySelector(e):null}get innerHTML(){var e;return((e=this.shadowRoot)==null?void 0:e.innerHTML)||""}set innerHTML(e){this.shadowRoot&&(this.shadowRoot.innerHTML=e)}connectedCallback(){super.connectedCallback(),this._captureDOM()}_captureDOM(){!this.shadowRoot||this.childNodes.length===0||this.shadowRoot.replaceChildren(...Array.from(this.childNodes))}};l.styles=[I,j,O];q([F()],l.prototype,"_captureDOM",1);l=q([H("gds-rich-text")],l);const Z={title:"Components/Rich Text",component:"gds-rich-text",tags:["autodocs"],parameters:{docs:{description:{component:`\`gds-rich-text\` can be used to wrap generic HTML content and apply typography styles.

The wrapped content will get captured and transferred to the inner shadowRoot of the \`gds-rich-text\` element.

A typical use case for this component is to wrap a block of HTML content output from a CMS or other source
that you want to apply the design system typography to.

It supports out of the box all heading styles, paragraphs, lists, blockquotes, figures, tables, and more.

@status beta`}}}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},n={...c,name:"Rich Text",render:e=>d`
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
  `},i={...c,name:"Headings",render:e=>d`
    <gds-rich-text>
      <h1>The Starship SS Endeavor Exploration Class</h1>
      <h2>Mission Alpha Centauri Deep Space Exploration</h2>
      <h3>Rocket Falcon Heavy Launch Vehicle</h3>
      <h4>Engine Raptor Next-Gen Propulsion</h4>
      <h5>Module Dragon Crew Transport</h5>
      <h6>Satellite Starlink Global Internet</h6>
    </gds-rich-text>
  `},s={...c,name:"Lists",render:e=>d`
    <gds-rich-text>
      <h2>Key Technologies in Space Exploration</h2>
      <ul>
        <li>Rocket propulsion systems</li>
        <li>Life support systems</li>
        <li>Communication satellites</li>
        <li>Space habitats and modules</li>
        <li>Robotic exploration rovers</li>
        <li>Advanced materials for spacecraft</li>
      </ul>

      <h2>Major Milestones in Space Exploration</h2>
      <ol>
        <li>Launch of Sputnik 1 (1957) - The first artificial satellite.</li>
        <li>
          First human in space (Yuri Gagarin, 1961) - Historic manned
          spaceflight.
        </li>
        <li>
          Apollo 11 Moon landing (1969) - First humans to walk on the Moon.
        </li>
        <li>
          Launch of the Space Shuttle (1981) - Introduction of reusable
          spacecraft.
        </li>
        <li>
          Mars Rover Curiosity landing (2012) - Advanced exploration of the
          Martian surface.
        </li>
        <li>
          Launch of the James Webb Space Telescope (2021) - Next-generation
          space observatory.
        </li>
      </ol>
    </gds-rich-text>
  `},a={...c,name:"Lists",render:e=>d`
    <gds-rich-text>
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
    </gds-rich-text>
  `};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,S,b,x,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Headings',
  render: args => html\`
    <gds-rich-text>
      <h1>The Starship SS Endeavor Exploration Class</h1>
      <h2>Mission Alpha Centauri Deep Space Exploration</h2>
      <h3>Rocket Falcon Heavy Launch Vehicle</h3>
      <h4>Engine Raptor Next-Gen Propulsion</h4>
      <h5>Module Dragon Crew Transport</h5>
      <h6>Satellite Starlink Global Internet</h6>
    </gds-rich-text>
  \`
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source},description:{story:"`gds-rich-text` can be used to wrap generic HTML content and apply typography styles.\nIt supports out of the box all heading styles from h1 to h6 based on the green design system typography styles.",...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.description}}};var w,E,k,C,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Lists',
  render: args => html\`
    <gds-rich-text>
      <h2>Key Technologies in Space Exploration</h2>
      <ul>
        <li>Rocket propulsion systems</li>
        <li>Life support systems</li>
        <li>Communication satellites</li>
        <li>Space habitats and modules</li>
        <li>Robotic exploration rovers</li>
        <li>Advanced materials for spacecraft</li>
      </ul>

      <h2>Major Milestones in Space Exploration</h2>
      <ol>
        <li>Launch of Sputnik 1 (1957) - The first artificial satellite.</li>
        <li>
          First human in space (Yuri Gagarin, 1961) - Historic manned
          spaceflight.
        </li>
        <li>
          Apollo 11 Moon landing (1969) - First humans to walk on the Moon.
        </li>
        <li>
          Launch of the Space Shuttle (1981) - Introduction of reusable
          spacecraft.
        </li>
        <li>
          Mars Rover Curiosity landing (2012) - Advanced exploration of the
          Martian surface.
        </li>
        <li>
          Launch of the James Webb Space Telescope (2021) - Next-generation
          space observatory.
        </li>
      </ol>
    </gds-rich-text>
  \`
}`,...(k=(E=s.parameters)==null?void 0:E.docs)==null?void 0:k.source},description:{story:"`gds-rich-text` has built-in support for ordered and unordered lists.\nIt applies consistent spacing and typography styles to list items.",...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var A,M,L,D,R;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Lists',
  render: args => html\`
    <gds-rich-text>
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
    </gds-rich-text>
  \`
}`,...(L=(M=a.parameters)==null?void 0:M.docs)==null?void 0:L.source},description:{story:"`gds-rich-text` has built-in support for details html element.\n\nThe details element is a disclosure widget from HTML5 that can be used to hide or show additional content.",...(R=(D=a.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};const $=["Basic","Headings","Lists","Details"];export{n as Basic,a as Details,i as Headings,s as Lists,$ as __namedExportsOrder,Z as default};
