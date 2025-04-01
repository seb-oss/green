'use client'

import { GdsFlex, GdsRichText } from '$/import/components'
import Hero from 'core/hero'
import TOC from 'core/navigator'

const HEADINGS = [
  {
    slug: 'accessibility',
    text: 'Accessibility',
    level: 1,
  },
  {
    slug: 'checkpoints',
    text: 'Checkpoints',
    level: 2,
  },
  {
    slug: 'contrast',
    text: 'Contrast',
    level: 3,
  },
  {
    slug: 'keyboard-navigation',
    text: 'Keyboard navigation',
    level: 3,
  },
  {
    slug: 'aria-html',
    text: 'Aria & Html',
    level: 3,
  },
  {
    slug: 'focus',
    text: 'Focus',
    level: 3,
  },
  {
    slug: 'touch',
    text: 'Touch',
    level: 3,
  },
  {
    slug: 'screen-reader',
    text: 'Screen reader',
    level: 3,
  },
  {
    slug: 'dark-mode',
    text: 'Dark mode',
    level: 3,
  },
  {
    slug: 'summary',
    text: 'Summary',
    level: 2,
  },
]

export default function Accessibility() {
  return (
    <GdsFlex flex-direction="column" gap="2xl; m{6xl}">
      <GdsFlex gap="l" margin="0 auto">
        <GdsFlex flex-direction="column" gap="2xl; m{4xl}" max-width="80ch">
          <Hero
            heading="Accessibility"
            preamble="Accessibility in the Green Design"
            compact
          />
          <GdsRichText font-size="body-l" color="secondary">
            <h2 id="parts">Why we check</h2>
            <ul>
              <li>
                Legal Compliance: The European Accessibility Act requires it by
                June 2025.
              </li>
              <li>
                Inclusivity: It ensures everyone, including people with
                disabilities, can use websites.
              </li>
              <li>
                Better User Experience: Accessible sites are easier to navigate
                for all users.
              </li>
              <li>
                Wider Audience: It helps reach the 80 million people with
                disabilities in Europe.
              </li>
              <li>
                Ethical Responsibility: It reflects a commitment to fairness and
                equality.
              </li>
            </ul>
            <p>
              At the end of June 2025, the new &nbsp;
              <a href="https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en">
                European Accessibility Act (EAA)
              </a>
              &nbsp; will come into effect. Our bank must comply with this
              legislation. Approximately 20% of people have permanent,
              temporary, or situational disabilities that make it difficult to
              use non-accessible websites. By addressing these accessibility
              issues, we can attract more customers and increase revenue. More
              importantly, we will enhance overall customer satisfaction. Good
              accessibility typically improves the user experience for everyone.
            </p>

            <h2 id="parts">What we check</h2>
            <p>
              Every component in Green Design System have accessibility in mind.
              Here you can read about the different parts that we check on each
              component:
            </p>
            <ul>
              <li>Contrast</li>
              <li>Keyboard navigation</li>
              <li>Aria & Html</li>
              <li>Focus</li>
              <li>Touch</li>
              <li>Screen reader</li>
              <li>Darkmode</li>
            </ul>
            <h2 id="contrast">Contrast</h2>
            <h3>Why is high contrast needed?</h3>

            <p>
              High contrast ratios assist users with visual impairments by
              making it easier to read text and identify components or areas on
              a page. By adhering to this standard, content creators can make
              their text accessible to a broader audience, including those with
              significant vision challenges.
            </p>

            <h3>What do we check with contrast and colors?</h3>

            <p>
              We ensure good contrast and well-chosen colors. Components should
              have strong enough contrast between their parts. Colors should be
              easily distinguishable, even for those who are colorblind.
              Sometimes, using icons or patterns can help distinguish areas
              better.
            </p>

            <h3>Here are a few good links to tools that can help:</h3>
            <ul>
              <li>
                Follow&nbsp;
                <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">
                  WCAG 2.1 SC.1.4.3
                </a>
                , with ratio of 3:1 to 4.5:1.
              </li>
              <li>
                Edge Rendering: Edge-&gt;DevTools-&gt;
                <a href="https://www.geeksforgeeks.org/rendering-tool-in-microsoft-edge-browser/">
                  Rendering-&gt;Emulate vision deficiencies
                </a>
                .
              </li>
              <li>
                Chrome Silktide: Chrome-&gt;
                <a href="https://chromewebstore.google.com/detail/silktide-accessibility-ch/mpobacholfblmnpnfbiomjkecoojakah?hl=en">
                  Silktide-&gt;
                </a>
                Color Blindness.
              </li>
              <li>
                Online Contrast Checker:&nbsp;
                <a href="https://webaim.org/resources/contrastchecker/">
                  webaim.org
                </a>
              </li>
            </ul>

            <h3>Future High Contrast Mode:</h3>
            <p>
              In addition to the dark mode feature detailed below, we are
              planning to introduce a high contrast mode in the future. This
              setting is becoming increasingly common on other websites.
            </p>

            <h2 id="keyboard-navigation">Keyboard navigation</h2>
            <p>
              How to use the keyboard with this component. If something is
              deviating from the standards.
            </p>
            <ul>
              <li>Can open/press/run with enter/space?</li>
              <li>Can move with arrow-keys when applicable.</li>
              <li>
                Can write text when applicable (and easy to understand when you
                can not).
              </li>
            </ul>

            <h2 id="aria-html">Aria & Html</h2>
            <p>
              Follows Aria Attributes and Roles. Uses correct html with no
              unnecessary aria. Common misstakes are:
            </p>
            <ul>
              <li>Misspelled - eg id&apos;s are case sensitive.</li>
              <li>
                Too much - using extra aria where it is not needed.
                <br />
                <code>
                  &lt;button aria-label=&quot;Send&quot;&gt;Send&lt;/button&gt;
                </code>
              </li>
            </ul>

            <h2 id="focus">Focus</h2>
            <p>If focus is implemented in a good way.</p>
            <ul>
              <li>
                Should usually be a black focus ring in a few pixels away.
              </li>
              <li>Does focus shows up with keyboard and not mouse?</li>
              <li>
                Is it visible enough? Are some parts of it hidden behind
                something else or outside the window?
              </li>
              <li>Is the focus order logical?</li>
              <li>Does focus traps work?</li>
            </ul>

            <h2 id="touch">Touch</h2>
            <p>Touch surfaces big enough and fits the visuals.</p>
            <ul>
              <li>Hand gestures like: Pinching/zooming/scrolling works.</li>
              <li>
                AA 24px, AAA 44px - Min size (44px, but an be 24px touch area
                outside).
              </li>
              <li>
                https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
              </li>
              <li>
                https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
              </li>
              <li>https://accessibility.digital.gov/ux/touch-targets/</li>
            </ul>

            <h2 id="screen-reader">Screen reader</h2>
            <p>Works well with screen-readers.</p>
            <ul>
              <li>
                Usually test on:&nbsp;
                <a href="https://www.nvaccess.org/download/">NVDA</a>, VoiceOver
                (MacOS / iOS), & TalkBack (Android).
              </li>
              <li>
                Can jump between headers? Which is the most common way of using
                a screen-reader.
              </li>
              <li>
                Read out everything that can be seen (except images that have no
                real meaning).
              </li>
            </ul>

            <h2 id="dark-mode">Dark mode</h2>
            <p>
              If the components support dark mode - and how well it does it.
            </p>
            <ul>
              <li>What changes? Maybe nothing?</li>
              <li>Something broken?</li>
            </ul>

            <h2 id="summary">Summary</h2>
            <h3 id="status">How is accessible is the Green Design System?</h3>
            <p>
              Overall, the design system is accessible. However, we occasionally
              encounter issues, and new ones are reported from time to time. If
              you find any accessibility problems, please help us by submitting
              a new issue.
            </p>
          </GdsRichText>
        </GdsFlex>
        <GdsFlex display="none; m{flex}" min-width="240px">
          <TOC headings={HEADINGS} component={'About'} />
        </GdsFlex>
      </GdsFlex>
    </GdsFlex>
  )
}
