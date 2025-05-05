'use client'

import { GdsAccordion, GdsFlex } from '$/import/components'

const Accordion = ({ hero }: { hero?: boolean }) => (
  <>
    {hero ? (
      <GdsFlex flex-direction="column" min-width="40ch">
        <GdsAccordion
          size="small"
          name="accordion-example"
          summary="Accordion summary"
        >
          Accordion content
        </GdsAccordion>
        <GdsAccordion
          size="small"
          name="accordion-example"
          summary="Accordion summary"
        >
          Accordion content
        </GdsAccordion>
        <GdsAccordion
          size="small"
          name="accordion-example"
          summary="Accordion summary"
        >
          Accordion content
        </GdsAccordion>
      </GdsFlex>
    ) : (
      <GdsFlex flex-direction="column" min-width="32ch">
        <GdsAccordion
          size="small"
          name="accordion-example-2"
          summary="Accordion summary"
        >
          Accordion content
        </GdsAccordion>
        <GdsAccordion
          size="small"
          name="accordion-example-2"
          summary="Accordion summary"
        >
          Accordion content
        </GdsAccordion>
      </GdsFlex>
    )}
  </>
)

export default Accordion
