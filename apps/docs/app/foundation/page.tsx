"use client"

import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionItem } from "@/core/blocks/accordion"
import Hero from "@/core/blocks/hero/hero"
import Spacing from "@/core/blocks/spacing"
import Stack from "@/core/blocks/stack"
import TOC from "@/core/blocks/toc/toc"
import MetallicSurfaceImage from "public/content/metallic-surface.jpg"
import CirclesImage from "public/content/tonality-circles.jpg"
import { Col, Grid, Row } from "react-flexbox-grid"

import "./style.css"

const tocHeading = [
  {
    slug: "our-purpose",
    text: "Our purpose",
    level: 2,
  },
  {
    slug: "tonality",
    text: "Tonality",
    level: 2,
  },
  {
    slug: "visual-style",
    text: "Visual style",
    level: 2,
  },
  {
    slug: "timeless",
    text: "Timeless",
    level: 3,
  },
  {
    slug: "to-the-point",
    text: "To the point",
    level: 3,
  },
  {
    slug: "confidence-in-simplicity",
    text: "Confidence in simplicity",
    level: 3,
  },
  {
    slug: "attention-to-detail",
    text: "Attention to detail",
    level: 3,
  },
  {
    slug: "effortless",
    text: "Effortless",
    level: 3,
  },
  {
    slug: "features",
    text: "Features",
    level: 2,
  },
  {
    slug: "consistency",
    text: "Consistency",
    level: 3,
  },
  {
    slug: "efficiency",
    text: "Efficiency",
    level: 3,
  },
  {
    slug: "user-centric-principles",
    text: "User-Centric Principles",
    level: 3,
  },
  {
    slug: "components-and-styles",
    text: "Components and Styles",
    level: 3,
  },
  {
    slug: "implementation",
    text: "Implementation",
    level: 3,
  },
]

export default function Foundation() {
  return (
    <div className="layout core foundation">
      <Stack gap="7.5rem">
        <Hero
          heading="Foundation"
          preamble="Green Design System, a framework designed to bring unity, efficiency, and coherent perspective to our digital experiences. Over time it will grow and evolve but always reflect our design philosophy. User needs first, being forefront and with confidence."
        />
        <Row>
          <Col xs={12} md={4}>
            <h2 id="our-purpose" className="heading-medium">
              Our purpose
            </h2>
          </Col>
          <Col xs={12} md={6}>
            <p className="paragraph-medium text-secondary">
              Green Design System, a framework designed to bring unity,
              efficiency, and coherent perspective to our digital experiences.
              Over time it will grow and evolve but always reflect our design
              philosophy. User needs first, being forefront and with confidence.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <h2 id="tonality" className="heading-medium">
              Tonality
            </h2>
          </Col>
          <Col xs={12} md={6}>
            <p className="paragraph-medium text-secondary">
              Our tonality is a voice that speaks to the user, we do not scream,
              but when needed we raise our voice to be heard. The balance in
              volume allows us to point the user in the right direction, wave to
              get noticed or whisper when needed.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <Image
              src={CirclesImage}
              alt="A picture of a cabin in the woods"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
                aspectRatio: "16 / 9",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <h2 id="visual-style" className="heading-medium">
              Visual style
            </h2>
          </Col>
          <Col xs={12} md={6}>
            <p className="paragraph-medium text-secondary">
              This design language is a direct descendant and part of the global
              brand identity. It caters to designers and developers with design
              assets and code. Together we can focus on the user and the
              experience we want to build, and swiftly make changes as needed.
            </p>
            <Spacing direction="vertical" size={8} />
            <Accordion>
              <AccordionItem
                id="timeless"
                label="Timeless"
                labelElementLevel={3}
              >
                <p>
                  Embracing a modern aesthetic, the Green Design System radiates
                  elegance. Its visual elements are a harmonious blend of
                  contemporary design principles, ensuring a fresh and relevant
                  appearance that stands the test of time.
                </p>
              </AccordionItem>
              <AccordionItem
                id="to-the-point"
                label="To the point"
                labelElementLevel={3}
              >
                <p>
                  Elegance is found in simplicity. The Green Design System
                  champions an uncluttered approach, where every visual element
                  serves a purpose. The result is an interface that feels
                  effortless, allowing users to navigate seamlessly without
                  unnecessary distractions.
                </p>
              </AccordionItem>
              <AccordionItem
                id="confidence-in-simplicity"
                label="Confidence in simplicity"
                labelElementLevel={3}
              >
                <p>
                  {`In the world of design, confidence shines through
                    simplicity. The Green Design System adheres to the
                    philosophy that "less is more." By stripping away the
                    superfluous, it exudes confidence, allowing the core essence
                    of the design to take center stage.`}
                </p>
              </AccordionItem>
              <AccordionItem
                id="attention-to-detail"
                label="Attention to detail"
                labelElementLevel={3}
              >
                <p>
                  Just as in our business operations, the Green Design System is
                  meticulous in its attention to detail. Every pixel, every
                  color, and every interaction is carefully considered,
                  contributing to a visually polished and refined user
                  interface.
                </p>
              </AccordionItem>
              <AccordionItem
                id="effortless"
                label="Effortless"
                labelElementLevel={3}
              >
                <p>{`The visual style of the Green Design System is not just about aesthetics; it's about creating an effortless harmony. The components seamlessly interact, the color palette is carefully curated, and the typography flows with purpose. It's a visual symphony that enhances the user experience.`}</p>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10}>
            <Image
              src={MetallicSurfaceImage}
              alt="A picture of a cabin in the woods"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
                aspectRatio: "16 / 9",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <h2 id="features" className="heading-medium">
              Features
            </h2>
          </Col>
          <Col xs={12} md={6}>
            <p className="paragraph-medium text-secondary">
              The Green Design System ensures a unified visual experience.
              Empowering designers and developers with versatile, accessible and
              coherent components.
            </p>
            <Spacing direction="vertical" size={8} />
            <Accordion>
              <AccordionItem
                id="features"
                label="Consistency"
                labelElementLevel={3}
              >
                <p>
                  The Green Design System ensures a seamless and consistent
                  visual experience across our entire product suite. Every
                  element, from buttons to typography, is meticulously crafted,
                  creating a cohesive and polished user interface.
                </p>
              </AccordionItem>
              <AccordionItem
                id="consistency"
                label="Efficiency"
                labelElementLevel={3}
              >
                <p>
                  With an extensive library of reusable components, Green Design
                  System empowers our teams to design and develop with speed and
                  precision. This efficiency allows for more time spent on
                  creative innovation and less on repetitive tasks, ultimately
                  reducing time-to-market.
                </p>
              </AccordionItem>
              <AccordionItem
                id="efficiency"
                label="Adaptability"
                labelElementLevel={3}
              >
                <p>{`Green Design System adapts to the ever-changing landscape of our product needs. Whether it's a minor enhancement or a major overhaul, the system flexibly scales to maintain a user-centric and intuitive experience.`}</p>
              </AccordionItem>
              <AccordionItem
                id="user-centric-principles"
                label="User-Centric Principles"
                labelElementLevel={3}
              >
                <p>
                  Rooted in user-centric design principles, our Design System
                  places the user at the forefront. From accessible color
                  choices to responsive design elements, we prioritize
                  inclusivity and user satisfaction, ensuring that our products
                  are both functional and enjoyable.
                </p>
              </AccordionItem>
              <AccordionItem
                id="components-and-styles"
                label="Components and Styles"
                labelElementLevel={3}
              >
                <p>
                  Explore a palette inspired by the versatility and vibrancy of
                  our brand promise, typography and iconography are carefully
                  chosen for both style and functionality. Our library of
                  components is a playground of possibilities, designed to
                  create interfaces that are not only visually appealing but
                  also accessible and highly UX centered.
                </p>
              </AccordionItem>
              <AccordionItem
                id="implementation"
                label="Implementation"
                labelElementLevel={3}
              >
                <p>{`Integrating the Green Design System into your projects is as effortless as a seamless user experience. Whether you're a designer seeking inspiration or a developer looking for efficient code snippets, our documentation provides clear guidance. Let's embark on this journey together, creating digital experiences that reflect the innovation and precision of SEB.`}</p>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Stack>
      <div className="toc-sidebar">
        <TOC headings={tocHeading} component={"About"} />
      </div>
    </div>
  )
}
