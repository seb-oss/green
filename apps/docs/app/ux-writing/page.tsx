'use client'

import { GdsFlex, GdsRichText } from '$/import/components'
import Hero from 'core/hero'
import TOC from 'core/navigator'

const HEADINGS = [
  {
    slug: 'ux-writing',
    text: 'UX writing',
    level: 1,
  },
  {
    slug: 'written-id',
    text: 'Written ID',
    level: 2,
  },
  {
    slug: 'ux-writing-in-seb',
    text: 'UX writing in SEB',
    level: 2,
  },
  {
    slug: 'what-is-ux-writing',
    text: 'What is UX writing',
    level: 3,
  },
  {
    slug: 'ux-writing-in-seb-is',
    text: 'UX writing in SEB is',
    level: 3,
  },
  {
    slug: 'a-few-examples',
    text: 'A few examples',
    level: 3,
  },
  {
    slug: 'translate-texts',
    text: 'Translate texts',
    level: 3,
  },
]

export default function Writing() {
  return (
    <GdsFlex flex-direction="column" gap="2xl; m{6xl}">
      <GdsFlex gap="l" margin="0 auto">
        <GdsFlex flex-direction="column" gap="2xl; m{4xl}" max-width="80ch">
          <Hero
            heading="UX writing and our guidelines"
            preamble="Regardless of where, when or how the customer meets us, the experience of SEB must be the same because each meeting contributes to how we are perceived. A positive customer experience opens the door to new business. This is particularly important in texts aimed at customers. Mistakes affect the reader's concentration on the content and understanding of the text. Because our texts are correct, our credibility with customers and other visitors (=potential customers) increases."
            compact
          />
          <GdsRichText font-size="body-l" color="secondary">
            <h2 id="written-id">Written ID – our tone of voice</h2>
            {`SEB's Written ID is our guiding light, and it forms the basis for
              all our communication, including UX writing. Our communication
              must show that we live and operate according to our language keys:`}
            <br />
            <br />
            <ul>
              <li>
                Open and personal: We are people speaking to people. That’s why
                we prefer using an informal, personal voice rather than an
                official one.
              </li>
              <li>
                Relevant and clear: Our texts are clear and easy to grasp, and
                we start with what’s most important. Driven and engaged: We have
                the engagement and energy; we share our drive with our
                customers.
              </li>
              <li>
                Linguistically that means our language is alert and modern.
              </li>
            </ul>
            <p>
              The voice the customers encounter when they use a service on the
              internet banking services or the mobile apps must be the same in
              guides, sales, error messages, etc. But UX writing should, to a
              greater degree than other non-fiction texts, be consistent.
              Therefore, we have special principles for different design
              components.
            </p>
          </GdsRichText>
          <GdsRichText>
            <h2 id="what-is-ux-writing">UX writing in SEB</h2>
            <h3>
              What is UX writing and how will good UX texts help our customers?
            </h3>

            <p>
              The UX texts help the user, or customer, to navigate apps,
              websites, and other digital products. They are one part of many in
              a final design. UX texts focus on accessibility, they are short
              and to the point without losing any important information. They
              are user-friendly, contextually appropriate and with the right
              tone of voice. The UX texts should solve a user problem and meet
              the business goals.
            </p>

            <p>
              These are many requirements to take into account and which do not
              always go hand in hand with each other. Therefore, people with the
              right knowledge and skills must write the UX texts.
            </p>

            <p>
              Good UX writing is like a personal guide that acts in the
              background and helps customers understand how to act and navigate.
              It ensures that customers do not end up in situations where they
              feel stupid or underestimated. Really good UX writing will rather
              make them feel satisfied because they succeed in finishing a task
              without unnecessary thresholds.
            </p>

            <h3 id="ux-writing-in-seb-is">UX writing in SEB is:</h3>
            <ul>
              <li>
                Consistent – we strive to use the same word for the same item,
                action, or object.
              </li>
              <li>
                Educational – we make an effort to be brief and pedagogic.
              </li>
              <li>Distinct – we avoid bank or tech jargon.</li>
              <li>Helpful – we prevent mistakes and setbacks.</li>
            </ul>

            <h3 id="a-few-examples">Few examples of UX texts:</h3>
            <ul>
              <li>Labels and headings</li>
              <li>Menus</li>
              <li>Buttons, links, and navigation texts</li>
              <li>Error messages</li>
              <li>Help texts and instructions</li>
              <li>Onboardings</li>
              <li>Empty states</li>
              <li>Loading screen messages</li>
              <li>Success messages</li>
              <li>Disclaimer texts </li>
            </ul>

            <h3 id="translate-text">Translate texts from Swedish to English</h3>

            <p>
              If you need to translate Swedish texts into English, the bank has
              agreements with, among others, Språkkonsulterna and Lionbridge.
              Contact them directly to order a translation.
            </p>

            <p>
              When you contact them to ask if they are available to take on the
              assignment, they want to know approximately how many words are to
              be translated. They also need to know the name of who will pay the
              invoice before you send the translation document.
            </p>

            <ul>
              <li>
                Språkkonsulterna:
                <a href="mailto:info@sprakkonsulterna.se">
                  info@sprakkonsulterna.se
                </a>
              </li>
              <li>
                Lionbridge:
                <a href="mailto:jakob.nordby@lionbridge.com">
                  jakob.nordby@lionbridge.com
                </a>
              </li>
            </ul>

            <p>
              When you need help with tone-of-voice, instructions, vocabulary or
              a UX writer to work with, please don’t hesitate to contact the UX
              writing team. Reach out in the Teams channels UX writing in Green
              Design System or UX writing in CX Community, or if you already
              have a contact or dedicated writer for your team or product,
              simply contact that person.
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
