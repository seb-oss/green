import"./rich-text-Bl11fmSa.js";import"./divider-DHvbub-s.js";import"./card-C2ehit_3.js";import"./text-BSY1kUP7.js";import{a as Y}from"./argTableProps-CvdTvxQe.js";import{h as e}from"./iframe-a2ZbZpP3.js";import"./rich-text.component-CqPmZaGv.js";import"./default-typography.styles-d-XIxNSl.js";import"./divider.component-xgW-4kT0.js";import"./card.component-DVym18ER.js";import"./preload-helper-Dp1pzeXC.js";const re={title:"Components/Rich Text",component:"gds-rich-text",tags:["autodocs"],argTypes:{...Y("gds-rich-text")},parameters:{docs:{description:{component:`\`gds-rich-text\` can be used to wrap generic HTML content and apply typography styles.

The wrapped content will get captured and transferred to the inner shadowRoot of the \`gds-rich-text\` element.

A typical use case for this component is to wrap a block of HTML content output from a CMS or other source
that you want to apply the design system typography to.

It supports out of the box all heading styles, paragraphs, lists, blockquotes, figures, tables, and more.`}}}},t={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},c={...t,name:"Card",render:i=>e`
    <gds-card>
      <gds-rich-text>
        <h1>
          The Starship <small>SS Endeavor</small> <mark>Exploration Class</mark>
        </h1>

        <h2>Heading one</h2>
        <h3>Heading test</h3>
        <p>
          The <strong>SS Endeavor</strong> is a state-of-the-art exploration
          class starship designed for deep space missions. Equipped with
          advanced technology and robust systems, it aims to expand our
          understanding of the universe. With a focus on
          <em>interstellar travel</em>, the SS Endeavor features a unique
          propulsion system that allows for faster-than-light travel. Its
          mission is to explore uncharted territories and gather data on distant
          celestial bodies. <a href="#">Link</a>
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
          approach, allowing for easy <code>upgrades</code> and
          <code>maintenance</code>.
        </p>
        <h2>Specifications</h2>
        <ul>
          <li>
            Length: 150 meters Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </li>
          <li>Width: 50 meters</li>
          <li>Height: 30 meters</li>
          <li>Crew Capacity: 100 personnel</li>
          <li>Propulsion: Quantum Slipstream Drive</li>
          <li>Maximum Speed: 10 light-years per hour</li>
        </ul>
        <hr />
        <h2>One digit list</h2>
        <ol>
          <li>
            Conduct scientific research on exoplanets, focusing on atmospheric
            composition <a href="#">Inline link</a> and potential habitability.
          </li>
          <li>
            Establish contact with potential extraterrestrial civilizations
            through advanced signal detection and transmission protocols.
          </li>
          <li>
            Collect comprehensive data on diverse cosmic phenomena, including
            black hole dynamics, supernova remnants, and dark matter
            distribution.
          </li>
          <li>
            Test new technologies in real-world scenarios, specifically advanced
            propulsion systems for interstellar travel.
          </li>
          <li>
            Test new technologies in real-world scenarios, implementing
            closed-loop life support systems for long-duration space missions.
          </li>
        </ol>

        <h2>Two digit list</h2>
        <ol>
          <li>
            Conduct scientific research on exoplanets, focusing on atmospheric
            composition <a href="#">Inline link</a> and potential habitability.
          </li>
          <li>
            Establish contact with potential extraterrestrial civilizations
            through advanced signal detection and transmission protocols.
          </li>
          <li>
            Collect comprehensive data on diverse cosmic phenomena, including
            black hole dynamics, supernova remnants, and dark matter
            distribution.
          </li>
          <li>
            Test new technologies in real-world scenarios, specifically advanced
            propulsion systems for interstellar travel.
          </li>
          <li>
            Test new technologies in real-world scenarios, implementing
            closed-loop life support systems for long-duration space missions.
          </li>
          <li>
            Test new technologies in real-world scenarios, evaluating the
            effectiveness of advanced radiation shielding materials.
          </li>
          <li>
            Test new technologies in real-world scenarios, deploying autonomous
            robotic systems for deep-space exploration and resource extraction.
          </li>
          <li>
            Test new technologies in real-world scenarios, analyzing the
            performance of quantum communication networks in space.
          </li>
          <li>
            Test new technologies in real-world scenarios, using advanced AI for
            real time data analysis and decision making.
          </li>
          <li>
            Investigate the origins and evolution of the universe through
            high-resolution astronomical observations.
          </li>
          <li>
            Develop and deploy advanced sensor arrays for detecting
            gravitational waves and other subtle cosmic signals.
          </li>
          <li>
            Analyze asteroid compositions to understand the early solar system
            and potential resources.
          </li>
          <li>
            Map the galactic structure with unprecedented accuracy, revealing
            hidden star systems and nebula.
          </li>
          <li>
            Study the effects of prolonged space travel on human physiology and
            psychology, preparing for future interstellar journeys.
          </li>
          <li>
            Create detailed models of planetary formation and evolution,
            improving our understanding of planet diversity.
          </li>
          <li>
            Explore the possibility of utilizing advanced energy sources, like
            fusion reactors, for deep space exploration.
          </li>
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
        <h2>Iframe</h2>
        <iframe src="https://example.com/" height="400"></iframe>
      </gds-rich-text>
    </gds-card>
  `},a={...t,name:"Headings",render:i=>e`
    <gds-rich-text>
      <!-- <h1>The Starship SS Endeavor Exploration Class</h1>
      <h2>Mission Alpha Centauri Deep Space Exploration</h2>
      <h3>Rocket Falcon Heavy Launch Vehicle</h3>
      <h4>Engine Raptor Next-Gen Propulsion</h4>
      <h5>Module Dragon Crew Transport</h5>
      <h6>Satellite Starlink Global Internet</h6> -->

      <h1>Heading 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h4>Heading 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h5>Heading 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h6>Heading 6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </gds-rich-text>
  `},n={...t,name:"Lists",render:i=>e`
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
  `},o={...t,name:"Details",render:i=>e`
    <gds-rich-text>
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
          <li>Mapping the surface of Mars for potential human colonization</li>
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
    </gds-rich-text>
  `},s={...t,name:"Blockquote",render:i=>e`
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
  `},d={...t,name:"Theme",render:i=>e`
    <gds-card variant="tertiary">
      <gds-rich-text>
        <h1>
          The Starship <small>SS Endeavor</small> <mark>Exploration Class</mark>
        </h1>

        <h2>Heading one</h2>
        <h3>Heading test</h3>
        <p>
          The <strong>SS Endeavor</strong> is a state-of-the-art exploration
          class starship designed for deep space missions. Equipped with
          advanced technology and robust systems, it aims to expand our
          understanding of the universe. With a focus on
          <em>interstellar travel</em>, the SS Endeavor features a unique
          propulsion system that allows for faster-than-light travel. Its
          mission is to explore uncharted territories and gather data on distant
          celestial bodies. <a href="#">Link</a>
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
          <li>
            Length: 150 meters Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </li>
          <li>Width: 50 meters</li>
          <li>Height: 30 meters</li>
          <li>Crew Capacity: 100 personnel</li>
          <li>Propulsion: Quantum Slipstream Drive</li>
          <li>Maximum Speed: 10 light-years per hour</li>
        </ul>
        <hr />
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
        <h2>Iframe</h2>
        <iframe src="https://example.com/" height="400"></iframe>
      </gds-rich-text>
    </gds-card>
  `};var p,m,h;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Card',
  render: args => html\`
    <gds-card>
      <gds-rich-text>
        <h1>
          The Starship <small>SS Endeavor</small> <mark>Exploration Class</mark>
        </h1>

        <h2>Heading one</h2>
        <h3>Heading test</h3>
        <p>
          The <strong>SS Endeavor</strong> is a state-of-the-art exploration
          class starship designed for deep space missions. Equipped with
          advanced technology and robust systems, it aims to expand our
          understanding of the universe. With a focus on
          <em>interstellar travel</em>, the SS Endeavor features a unique
          propulsion system that allows for faster-than-light travel. Its
          mission is to explore uncharted territories and gather data on distant
          celestial bodies. <a href="#">Link</a>
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
          approach, allowing for easy <code>upgrades</code> and
          <code>maintenance</code>.
        </p>
        <h2>Specifications</h2>
        <ul>
          <li>
            Length: 150 meters Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </li>
          <li>Width: 50 meters</li>
          <li>Height: 30 meters</li>
          <li>Crew Capacity: 100 personnel</li>
          <li>Propulsion: Quantum Slipstream Drive</li>
          <li>Maximum Speed: 10 light-years per hour</li>
        </ul>
        <hr />
        <h2>One digit list</h2>
        <ol>
          <li>
            Conduct scientific research on exoplanets, focusing on atmospheric
            composition <a href="#">Inline link</a> and potential habitability.
          </li>
          <li>
            Establish contact with potential extraterrestrial civilizations
            through advanced signal detection and transmission protocols.
          </li>
          <li>
            Collect comprehensive data on diverse cosmic phenomena, including
            black hole dynamics, supernova remnants, and dark matter
            distribution.
          </li>
          <li>
            Test new technologies in real-world scenarios, specifically advanced
            propulsion systems for interstellar travel.
          </li>
          <li>
            Test new technologies in real-world scenarios, implementing
            closed-loop life support systems for long-duration space missions.
          </li>
        </ol>

        <h2>Two digit list</h2>
        <ol>
          <li>
            Conduct scientific research on exoplanets, focusing on atmospheric
            composition <a href="#">Inline link</a> and potential habitability.
          </li>
          <li>
            Establish contact with potential extraterrestrial civilizations
            through advanced signal detection and transmission protocols.
          </li>
          <li>
            Collect comprehensive data on diverse cosmic phenomena, including
            black hole dynamics, supernova remnants, and dark matter
            distribution.
          </li>
          <li>
            Test new technologies in real-world scenarios, specifically advanced
            propulsion systems for interstellar travel.
          </li>
          <li>
            Test new technologies in real-world scenarios, implementing
            closed-loop life support systems for long-duration space missions.
          </li>
          <li>
            Test new technologies in real-world scenarios, evaluating the
            effectiveness of advanced radiation shielding materials.
          </li>
          <li>
            Test new technologies in real-world scenarios, deploying autonomous
            robotic systems for deep-space exploration and resource extraction.
          </li>
          <li>
            Test new technologies in real-world scenarios, analyzing the
            performance of quantum communication networks in space.
          </li>
          <li>
            Test new technologies in real-world scenarios, using advanced AI for
            real time data analysis and decision making.
          </li>
          <li>
            Investigate the origins and evolution of the universe through
            high-resolution astronomical observations.
          </li>
          <li>
            Develop and deploy advanced sensor arrays for detecting
            gravitational waves and other subtle cosmic signals.
          </li>
          <li>
            Analyze asteroid compositions to understand the early solar system
            and potential resources.
          </li>
          <li>
            Map the galactic structure with unprecedented accuracy, revealing
            hidden star systems and nebula.
          </li>
          <li>
            Study the effects of prolonged space travel on human physiology and
            psychology, preparing for future interstellar journeys.
          </li>
          <li>
            Create detailed models of planetary formation and evolution,
            improving our understanding of planet diversity.
          </li>
          <li>
            Explore the possibility of utilizing advanced energy sources, like
            fusion reactors, for deep space exploration.
          </li>
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
        <h2>Iframe</h2>
        <iframe src="https://example.com/" height="400"></iframe>
      </gds-rich-text>
    </gds-card>
  \`
}`,...(h=(m=c.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,g,f,y,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Headings',
  render: args => html\`
    <gds-rich-text>
      <!-- <h1>The Starship SS Endeavor Exploration Class</h1>
      <h2>Mission Alpha Centauri Deep Space Exploration</h2>
      <h3>Rocket Falcon Heavy Launch Vehicle</h3>
      <h4>Engine Raptor Next-Gen Propulsion</h4>
      <h5>Module Dragon Crew Transport</h5>
      <h6>Satellite Starlink Global Internet</h6> -->

      <h1>Heading 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h2>Heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h3>Heading 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h4>Heading 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h5>Heading 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h6>Heading 6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </gds-rich-text>
  \`
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"`gds-rich-text` can be used to wrap generic HTML content and apply typography styles.\nIt supports out of the box all heading styles from h1 to h6 based on the green design system typography styles.",...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};var b,S,x,w,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:"`gds-rich-text` has built-in support for ordered and unordered lists.\nIt applies consistent spacing and typography styles to list items.",...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var E,T,A,q,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Details',
  render: args => html\`
    <gds-rich-text>
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
          <li>Mapping the surface of Mars for potential human colonization</li>
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
    </gds-rich-text>
  \`
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:"`gds-rich-text` has built-in support for details html element.\n\nThe details element is a disclosure widget from HTML5 that can be used to hide or show additional content.",...(L=(q=o.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};var C,I,M,H,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(I=s.parameters)==null?void 0:I.docs)==null?void 0:M.source},description:{story:"`gds-rich-text` has built-in support blockquote element.",...(D=(H=s.parameters)==null?void 0:H.docs)==null?void 0:D.description}}};var F,j,P,R,z;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(j=r.parameters)==null?void 0:j.docs)==null?void 0:P.source},description:{story:"`gds-rich-text` has built-in support for inline formatting tags such as `s`, `mark`, `strong`,`small` and `em`.",...(z=(R=r.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};var N,O,W,G,J;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(W=(O=l.parameters)==null?void 0:O.docs)==null?void 0:W.source},description:{story:"`gds-rich-text` has built-in support for tables.",...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Q,B,K,U,V;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Theme',
  render: args => html\`
    <gds-card variant="tertiary">
      <gds-rich-text>
        <h1>
          The Starship <small>SS Endeavor</small> <mark>Exploration Class</mark>
        </h1>

        <h2>Heading one</h2>
        <h3>Heading test</h3>
        <p>
          The <strong>SS Endeavor</strong> is a state-of-the-art exploration
          class starship designed for deep space missions. Equipped with
          advanced technology and robust systems, it aims to expand our
          understanding of the universe. With a focus on
          <em>interstellar travel</em>, the SS Endeavor features a unique
          propulsion system that allows for faster-than-light travel. Its
          mission is to explore uncharted territories and gather data on distant
          celestial bodies. <a href="#">Link</a>
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
          <li>
            Length: 150 meters Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </li>
          <li>Width: 50 meters</li>
          <li>Height: 30 meters</li>
          <li>Crew Capacity: 100 personnel</li>
          <li>Propulsion: Quantum Slipstream Drive</li>
          <li>Maximum Speed: 10 light-years per hour</li>
        </ul>
        <hr />
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
        <h2>Iframe</h2>
        <iframe src="https://example.com/" height="400"></iframe>
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
\`\`\``,...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};const le=["Card","Headings","Lists","Details","Blockquote","Formatting","Table","Basic"];export{d as Basic,s as Blockquote,c as Card,o as Details,r as Formatting,a as Headings,n as Lists,l as Table,le as __namedExportsOrder,re as default};
