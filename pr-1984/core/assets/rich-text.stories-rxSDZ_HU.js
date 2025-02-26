import"./rich-text--lmuR3j_.js";import"./divider-Dm4d-5N4.js";import"./card-BihnooJR.js";import{a as Y}from"./argTableProps-DX2UF4UM.js";import{h as e}from"./custom-element-scoping-BEGY3AqQ.js";import"./tokens.style-CFvqdzpw.js";import"./lit-element-C_s9q329.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Cg5fmtre.js";import"./default-typography.styles-Bl0hQgz1.js";import"./div-Cnle9s5w.js";import"./custom-elements-CQLdLZE9.js";import"./_commonjsHelpers-Cpj98o6Y.js";const de={title:"Components/Rich Text",component:"gds-rich-text",tags:["autodocs"],argTypes:{...Y("gds-rich-text")},parameters:{docs:{description:{component:`\`gds-rich-text\` can be used to wrap generic HTML content and apply typography styles.

The wrapped content will get captured and transferred to the inner shadowRoot of the \`gds-rich-text\` element.

A typical use case for this component is to wrap a block of HTML content output from a CMS or other source
that you want to apply the design system typography to.

It supports out of the box all heading styles, paragraphs, lists, blockquotes, figures, tables, and more.

@status beta`}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},c={...t,name:"Card",render:i=>e`
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
        <details name="named-details">
          <summary>Focus Areas</summary>
          <p>The SS Endeavor will focus on the following research areas:</p>
          <ul>
            <li>Astrobiology</li>
            <li>Exoplanetary geology</li>
            <li>Astrophysics and cosmology</li>
            <li>Space weather and its effects on technology</li>
          </ul>
        </details>

        <details name="named-details">
          <summary>Exploration Objectives</summary>
          <p>
            The SS Endeavor aims to achieve significant breakthroughs in the
            following exploration objectives:
          </p>
          <ul>
            <li>
              Mapping the surface of Mars for potential human colonization
            </li>
            <li>Studying the atmospheres of gas giants</li>
            <li>Investigating the potential for life on Europa</li>
            <li>Understanding the dynamics of asteroid belts</li>
          </ul>
        </details>

        <details name="named-details">
          <summary>Technological Innovations</summary>
          <p>
            The SS Endeavor will develop and implement cutting-edge technologies
            in these areas:
          </p>
          <ul>
            <li>Advanced propulsion systems for deep space travel</li>
            <li>Autonomous robotic systems for planetary exploration</li>
            <li>
              Next-generation communication systems for interstellar data
              transmission
            </li>
            <li>Innovative life support systems for long-duration missions</li>
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
  `},a={...t,name:"Headings",render:i=>e`
    <gds-rich-text>
      <h1>The Starship SS Endeavor Exploration Class</h1>
      <h2>Mission Alpha Centauri Deep Space Exploration</h2>
      <h3>Rocket Falcon Heavy Launch Vehicle</h3>
      <h4>Engine Raptor Next-Gen Propulsion</h4>
      <h5>Module Dragon Crew Transport</h5>
      <h6>Satellite Starlink Global Internet</h6>
    </gds-rich-text>
  `},s={...t,name:"Lists",render:i=>e`
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
  `},n={...t,name:"Details",render:i=>e`
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
  `},o={...t,name:"Blockquote",render:i=>e`
    <gds-rich-text>
      <h2>Inspirational Quotes from Space Exploration Pioneers</h2>

      <blockquote>
        <p>
          "That's one small step for [a] man, one giant leap for mankind."
          <cite>— Neil Armstrong, Apollo 11 Astronaut</cite>
        </p>
      </blockquote>

      <blockquote>
        <p>
          "The important achievement of Apollo was demonstrating that humanity
          is not forever chained to this planet and our visions go rather
          further than that and our opportunities are unlimited."
          <cite>— Neil Armstrong</cite>
        </p>
      </blockquote>

      <blockquote>
        <p>
          "To confine our attention to terrestrial matters would be to limit the
          human spirit."
          <cite>— Stephen Hawking, Theoretical Physicist</cite>
        </p>
      </blockquote>

      <blockquote>
        <p>
          "The Earth is the cradle of humanity, but mankind cannot stay in the
          cradle forever."
          <cite>— Konstantin Tsiolkovsky, Rocket Scientist</cite>
        </p>
      </blockquote>

      <blockquote>
        <p>
          "I don't want to be an astronaut. I want to be a space explorer."
          <cite>— Chris Hadfield, Astronaut</cite>
        </p>
      </blockquote>
    </gds-rich-text>
  `},r={...t,name:"Formatting",render:i=>e`
    <gds-rich-text>
      <h3>Key Concepts in Space Exploration</h3>
      <p>
        The field of space exploration is constantly evolving. It is essential
        to understand the <strong>fundamental principles</strong> that guide our
        missions. For example, <mark>propulsion technology</mark> is crucial for
        <em>successful space travel</em>. Moreover, the study of
        <s>black holes</s> has revealed significant insights into the
        <small>nature of the universe</small>.
      </p>
      <p>
        As we continue to explore the cosmos,
        <strong>collaboration</strong> among international space agencies is
        vital. Together, we can achieve <mark>greater advancements</mark> in our
        understanding of the universe.
      </p>
    </gds-rich-text>
  `},l={...t,name:"Table",render:i=>e`
    <gds-rich-text>
      <h2>Significant Space Missions</h2>
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Launch</th>
            <th>Objectives</th>
            <th>Outcomes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apollo 11</td>
            <td>1969</td>
            <td>First manned Moon landing</td>
            <td>
              Successful lunar landing; Neil Armstrong and Buzz Aldrin walked on
              the Moon.
            </td>
          </tr>
          <tr>
            <td>Voyager 1</td>
            <td>1977</td>
            <td>Explore outer planets and interstellar space</td>
            <td>
              Provided detailed images of Jupiter and Saturn; currently in
              interstellar space.
            </td>
          </tr>
          <tr>
            <td>Hubble Space Telescope</td>
            <td>1990</td>
            <td>Observe distant galaxies and cosmic phenomena</td>
            <td>
              Revolutionized astronomy; provided stunning images and data.
            </td>
          </tr>
          <tr>
            <td>Curiosity Rover</td>
            <td>2011</td>
            <td>Explore Mars' surface and assess habitability</td>
            <td>
              Confirmed the presence of water; conducted extensive geological
              analysis.
            </td>
          </tr>
          <tr>
            <td>James Webb Space Telescope</td>
            <td>2021</td>
            <td>Observe the early universe and exoplanets</td>
            <td>Expected to provide unprecedented insights into the cosmos.</td>
          </tr>
        </tbody>
      </table>
    </gds-rich-text>
  `},d={...t,name:"Rich Text",render:i=>e`
    <gds-card variant="tertiary">
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
  `};var h,p,u;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Card',
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
        <details name="named-details">
          <summary>Focus Areas</summary>
          <p>The SS Endeavor will focus on the following research areas:</p>
          <ul>
            <li>Astrobiology</li>
            <li>Exoplanetary geology</li>
            <li>Astrophysics and cosmology</li>
            <li>Space weather and its effects on technology</li>
          </ul>
        </details>

        <details name="named-details">
          <summary>Exploration Objectives</summary>
          <p>
            The SS Endeavor aims to achieve significant breakthroughs in the
            following exploration objectives:
          </p>
          <ul>
            <li>
              Mapping the surface of Mars for potential human colonization
            </li>
            <li>Studying the atmospheres of gas giants</li>
            <li>Investigating the potential for life on Europa</li>
            <li>Understanding the dynamics of asteroid belts</li>
          </ul>
        </details>

        <details name="named-details">
          <summary>Technological Innovations</summary>
          <p>
            The SS Endeavor will develop and implement cutting-edge technologies
            in these areas:
          </p>
          <ul>
            <li>Advanced propulsion systems for deep space travel</li>
            <li>Autonomous robotic systems for planetary exploration</li>
            <li>
              Next-generation communication systems for interstellar data
              transmission
            </li>
            <li>Innovative life support systems for long-duration missions</li>
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
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,f,y,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"`gds-rich-text` can be used to wrap generic HTML content and apply typography styles.\nIt supports out of the box all heading styles from h1 to h6 based on the green design system typography styles.",...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var S,b,x,w,E;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:"`gds-rich-text` has built-in support for ordered and unordered lists.\nIt applies consistent spacing and typography styles to list items.",...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.description}}};var k,T,A,C,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Details',
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
}`,...(A=(T=n.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:"`gds-rich-text` has built-in support for details html element.\n\nThe details element is a disclosure widget from HTML5 that can be used to hide or show additional content.",...(q=(C=n.parameters)==null?void 0:C.docs)==null?void 0:q.description}}};var M,I,D,F,L;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Blockquote',
  render: args => html\`
    <gds-rich-text>
      <h2>Inspirational Quotes from Space Exploration Pioneers</h2>

      <blockquote>
        <p>
          "That's one small step for [a] man, one giant leap for mankind."
          <cite>— Neil Armstrong, Apollo 11 Astronaut</cite>
        </p>
      </blockquote>

      <blockquote>
        <p>
          "The important achievement of Apollo was demonstrating that humanity
          is not forever chained to this planet and our visions go rather
          further than that and our opportunities are unlimited."
          <cite>— Neil Armstrong</cite>
        </p>
      </blockquote>

      <blockquote>
        <p>
          "To confine our attention to terrestrial matters would be to limit the
          human spirit."
          <cite>— Stephen Hawking, Theoretical Physicist</cite>
        </p>
      </blockquote>

      <blockquote>
        <p>
          "The Earth is the cradle of humanity, but mankind cannot stay in the
          cradle forever."
          <cite>— Konstantin Tsiolkovsky, Rocket Scientist</cite>
        </p>
      </blockquote>

      <blockquote>
        <p>
          "I don't want to be an astronaut. I want to be a space explorer."
          <cite>— Chris Hadfield, Astronaut</cite>
        </p>
      </blockquote>
    </gds-rich-text>
  \`
}`,...(D=(I=o.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"`gds-rich-text` has built-in support blockquote element.",...(L=(F=o.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var P,R,j,H,N;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Formatting',
  render: args => html\`
    <gds-rich-text>
      <h3>Key Concepts in Space Exploration</h3>
      <p>
        The field of space exploration is constantly evolving. It is essential
        to understand the <strong>fundamental principles</strong> that guide our
        missions. For example, <mark>propulsion technology</mark> is crucial for
        <em>successful space travel</em>. Moreover, the study of
        <s>black holes</s> has revealed significant insights into the
        <small>nature of the universe</small>.
      </p>
      <p>
        As we continue to explore the cosmos,
        <strong>collaboration</strong> among international space agencies is
        vital. Together, we can achieve <mark>greater advancements</mark> in our
        understanding of the universe.
      </p>
    </gds-rich-text>
  \`
}`,...(j=(R=r.parameters)==null?void 0:R.docs)==null?void 0:j.source},description:{story:"`gds-rich-text` has built-in support for inline formatting tags such as `s`, `mark`, `strong`,`small` and `em`.",...(N=(H=r.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};var W,O,z,G,J;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Table',
  render: args => html\`
    <gds-rich-text>
      <h2>Significant Space Missions</h2>
      <table>
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Launch</th>
            <th>Objectives</th>
            <th>Outcomes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apollo 11</td>
            <td>1969</td>
            <td>First manned Moon landing</td>
            <td>
              Successful lunar landing; Neil Armstrong and Buzz Aldrin walked on
              the Moon.
            </td>
          </tr>
          <tr>
            <td>Voyager 1</td>
            <td>1977</td>
            <td>Explore outer planets and interstellar space</td>
            <td>
              Provided detailed images of Jupiter and Saturn; currently in
              interstellar space.
            </td>
          </tr>
          <tr>
            <td>Hubble Space Telescope</td>
            <td>1990</td>
            <td>Observe distant galaxies and cosmic phenomena</td>
            <td>
              Revolutionized astronomy; provided stunning images and data.
            </td>
          </tr>
          <tr>
            <td>Curiosity Rover</td>
            <td>2011</td>
            <td>Explore Mars' surface and assess habitability</td>
            <td>
              Confirmed the presence of water; conducted extensive geological
              analysis.
            </td>
          </tr>
          <tr>
            <td>James Webb Space Telescope</td>
            <td>2021</td>
            <td>Observe the early universe and exoplanets</td>
            <td>Expected to provide unprecedented insights into the cosmos.</td>
          </tr>
        </tbody>
      </table>
    </gds-rich-text>
  \`
}`,...(z=(O=l.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:"`gds-rich-text` has built-in support for tables.",...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Q,B,K,V,U;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Rich Text',
  render: args => html\`
    <gds-card variant="tertiary">
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
}`,...(K=(B=d.parameters)==null?void 0:B.docs)==null?void 0:K.source},description:{story:`Rich text can be used with other components to create engaging content.
In this example, we combine rich text with a card component to showcase how colors will be applied.

Example:

\`\`\`html
<gds-card variant="tertiary">
 <gds-rich-text>
   ...
  </gds-rich-text>
</gds-card>
\`\`\``,...(U=(V=d.parameters)==null?void 0:V.docs)==null?void 0:U.description}}};const ce=["Card","Headings","Lists","Details","Blockquote","Formatting","Table","Basic"];export{d as Basic,o as Blockquote,c as Card,n as Details,r as Formatting,a as Headings,s as Lists,l as Table,ce as __namedExportsOrder,de as default};
