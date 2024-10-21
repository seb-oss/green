'use client'

import { Accordion, AccordionItem } from '@/accordion'
import Hero from '@/hero/hero'
import Spacing from '@/spacing'
import TOC from '@/toc/toc'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'
import Grid from '@/grid/grid'
import Content from '&/content/content'
import WoodsCabinImage from 'public/content/woods-cabin.png'

const tocHeading = [
  {
    slug: 'what-is-green',
    text: 'What is Green?',
    level: 2,
  },
  {
    slug: 'how-green-works',
    text: 'How Green works',
    level: 2,
  },
  {
    slug: 'maintaining-and-educating',
    text: 'Maintaining and educating',
    level: 3,
  },
  {
    slug: 'built-on-contributions',
    text: 'Built on contributions',
    level: 3,
  },
  {
    slug: 'contact-us',
    text: 'Contact us',
    level: 2,
  },
]

export default function About() {
  return (
    <Content layout="content">
      <Grid
        columns={2}
        paddingBlock="large"
        paddingInline="large"
        gapInline="large"
        align="start"
      >
        <Grid columns={1} gapBlock="large">
          <Hero
            heading="About"
            preamble="Green Design System is the design system for Skandinaviska Enskilda Banken to make it easier and faster to build beautiful digital products and experiences under the SEB brand."
          />
          <Grid columns={2}>
            <h2 id="what-is-green" className="heading-medium">
              What is Green?
            </h2>
            <div>
              <p className="paragraph-medium text-secondary">
                Green Design System is a set of standards to manage design at
                scale by reducing redundancy while creating a shared language
                and visual consistency across different pages and channels.
              </p>
              <p className="paragraph-medium text-secondary">
                In order to have velocity when building digital products and
                keep a cohesive user experience cross channels and platforms
                designers and developers should use the Green Design System.
              </p>
              <p className="paragraph-medium text-secondary">
                By using pre-built components for design tools and front-end
                frameworks the time teams spend designing and building is
                minimized. Instead of spending time on building and re-building
                the same components in multiple teams, teams can spend that time
                on addressing specific user needs to improve user experience.
              </p>
              <p className="paragraph-medium text-secondary">
                The design system is called Green as an homage to SEB being
                viewed as the {'green bank'} with green as a primary colour for
                the brand and the bank. The bank also plays a great role in the
                transition to a
                <Link
                  href="https://sebgroup.com/sustainability/netzerotransition"
                  target="_blank"
                >
                  net zero society
                </Link>
                and has a focus on
                <Link href="https://sebgroup.com/sustainability">
                  sustainability
                </Link>
                and helping
                {"it's"} clients to become more sustainable. The design system
                initative was also seen as a
                <Link
                  href="https://en.wikipedia.org/wiki/Greenfield_project"
                  target="_blank"
                >
                  Greenfieldproject
                </Link>
                .
              </p>
            </div>
          </Grid>
          <Image
            src={WoodsCabinImage}
            alt="A picture of a cabin in the woods"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              aspectRatio: '16 / 9',
            }}
          />
          <Grid columns={2}>
            <h2 id="how-green-works" className="heading-medium">
              How Green works
            </h2>
            <p className="paragraph-medium text-secondary">
              The Green Design System is a federated design system where the
              Green Design System Team is the central team who is dedicated to
              maintain the design system and other team at SEB or external
              contributors contribute to the design system with insights, design
              andcode.
            </p>
          </Grid>
          <Grid columns={2}>
            <h2 id="maintaining-and-educating" className="heading-medium">
              Maintaining and educating
            </h2>
            <div>
              <p className="paragraph-medium text-secondary">
                Navigating the world of Green Design System involves more than
                just design and code. Delve into our Figma libraries, explore
                diverse code implementations, and leverage our comprehensive
                documentation. {"We're"} committed to supporting your journey
                with coaching sessions tailored for both design intricacies and
                development challenges.
              </p>
              <Spacing direction="vertical" size={8} />
              <Accordion>
                <AccordionItem label="Figma libraries" labelElementLevel={3}>
                  <p>
                    Figma is our go to design tool and we maintain multiple
                    Figma libraries, components and variables.
                  </p>
                </AccordionItem>
                <AccordionItem
                  label="Multiple code implementations"
                  labelElementLevel={3}
                >
                  <p>
                    Green supports both Angular and React but the core is built
                    with Webcomponents using Lit.
                  </p>
                </AccordionItem>
                <AccordionItem
                  label="Documenting design and code patters"
                  labelElementLevel={3}
                >
                  <p>
                    We use this site to document how to use our design kits and
                    coded components as well as our design patterns and general
                    user interface guidelines.
                  </p>
                </AccordionItem>
                <AccordionItem
                  label="Supporting our users"
                  labelElementLevel={3}
                >
                  <p>
                    We know that learing and using a new system can be hard and
                    we are here to help and make your journey in the design
                    system a more pleasant one.
                  </p>
                </AccordionItem>
                <AccordionItem
                  label="Coaching Green users"
                  labelElementLevel={3}
                >
                  <p>
                    Some problems that you run into can be too large to use your
                    keyboard to explain so we have ongoing coaching sessions at
                    your disposal. We have two different coaching session
                    regarding design and development at SEB: Green Coaching and
                    CX Coaching. Both of these meetings are slot based meeting
                    where you bring your questions and problems and discuss them
                    with members from the Green Design System team.
                  </p>
                  <Spacing direction="vertical" size={7} />
                  <ul>
                    <li>
                      – Book
                      <a
                        href="https://teams.microsoft.com/l/entity/0d820ecd-def2-4297-adad-78056cde7c78/_djb2_msteams_prefix_4065088102?context=%7B%22channelId%22%3A%2219%3A33f450cae2764531930c4eca19aa4c26%40thread.tacv2%22%7D&groupId=3ad3eb8f-ab23-44e6-9b61-d08fee172513&tenantId=9a8ff9e3-0e35-4620-a724-e9834dc50b51"
                        target="_blank"
                      >
                        Green Coaching
                      </a>
                    </li>
                    <li>
                      –Book
                      <a
                        href="https://teams.microsoft.com/l/entity/0d820ecd-def2-4297-adad-78056cde7c78/_djb2_msteams_prefix_43486807?context=%7B%22channelId%22%3A%2219%3A33f450cae2764531930c4eca19aa4c26%40thread.tacv2%22%7D&groupId=3ad3eb8f-ab23-44e6-9b61-d08fee172513&tenantId=9a8ff9e3-0e35-4620-a724-e9834dc50b51"
                        target="_blank"
                      >
                        CX Coaching
                      </a>
                    </li>
                  </ul>
                </AccordionItem>
              </Accordion>
            </div>
          </Grid>
          <Grid columns={2}>
            <h2 id="built-on-contributions" className="heading-medium">
              Built on contributions
            </h2>
            <p className="paragraph-medium text-secondary">{`Green Design System is built on contributions from
                everyone. Product teams at SEB have the best knowledge what their product's end user needs. That's why it's vital that everyone contributes with what's
                possible. That can be everything from insights regarding a specific component or pull requests with a complete feature
                or a design updates in a Figma branch.`}</p>
          </Grid>
          <Grid columns={2}>
            <h2 id="contact-us" className="heading-medium">
              Contact us
            </h2>
            <div>
              <p className="paragraph-medium text-secondary">{`We want to hear from you so don't be a stranger. You can
                always reach out to us in the following ways:`}</p>
              <ul className="paragraph-medium text-secondary">
                <li>
                  — Ask in our
                  <Link
                    href="https://teams.microsoft.com/l/team/19%3aR-yrtyItfX3RWEyU8WrCyVy6u-eqWxYPbY1w2O7UVPs1%40thread.tacv2/conversations?groupId=3ad3eb8f-ab23-44e6-9b61-d08fee172513&tenantId=9a8ff9e3-0e35-4620-a724-e9834dc50b51"
                    target="_blank"
                  >
                    Teams channel
                  </Link>
                </li>
                <li>
                  — Post an
                  <Link href="https://github.com/seb-oss/green/issues">
                    issue on Github
                  </Link>
                </li>
                <li>
                  — Email us at
                  <Link href="mailto:greendesignsystem@seb.se">
                    greendesignsystem@seb.se
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <div className="toc-sidebar">
          <TOC headings={tocHeading} component={'About'} />
        </div>
      </Grid>
    </Content>
  )
}
