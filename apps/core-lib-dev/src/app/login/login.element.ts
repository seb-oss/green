import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import './login.css'

import { GdsFormControlElement } from '@sebgroup/green-core/components/form/form-control'

//const coverOne = `https://github.com/user-attachments/assets/b8ee5060-b5dd-40b4-b626-aefbd960ec35`
const coverTwo = `https://github.com/user-attachments/assets/1c038c0b-b468-48d2-b171-092534b3a0e2`

@customElement('gds-login')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  // '0': '0px',
  // '2xs': '320px',
  // xs: '425px',
  // s: '768px',
  // m: '1024px',
  // l: '1280px',
  // xl: '1440px',
  // '2xl': '2560px',
  // '3xl': '3840px',
  // '4xl': '4320px',
  // '5xl': '6016px',
  // '6xl': '7680px',

  render() {
    return html`
      <gds-flex justify-content="center">
        <gds-card
          shadow="2xs{0} s{0} m{s} l{s} xl{s}"
          border-radius="2xs{0} s{0} m{xs} l{xs} xl{xs}"
          background="l2-background-secondary"
          overflow="hidden"
          width="clamp(320px, 100%, 1440px)"
        >
          <gds-grid columns="2xs{1} s{1} m{2} l{2} xl{2}">
            <gds-flex position="relative">
              <gds-video
                aspect-ratio="2xs{1/1} s{16/9} m{16/9} l{1/1} xl{2/2.4}"
                src=${coverTwo}
                alt="Cards"
                object-fit="cover"
                position="center"
                pointer-events="none"
                playsinline
                autoplay
                muted
                loop
              ></gds-video>
              <gds-card
                color="l2-content-tertiary"
                filter="2px"
                inset="40% 0 0 0"
                mask="top/l1-background-tertiary/0.3"
                padding="2xs{l} s{l} m{xl} l{4xl} xl{4xl}"
                position="absolute"
                border-radius="xs"
                z-index="2"
              >
                <gds-flex
                  flex-direction="column"
                  justify-content="flex-end"
                  height="100%"
                  gap="xs"
                >
                  <gds-text text-wrap="balance">
                    Sector by sector. Industry by industry.
                  </gds-text>
                  <gds-text text-wrap="balance">
                    Together with our clients, we're accelerating the
                    sustainable transition.
                  </gds-text>
                  <gds-flex align-items="center" gap="s" margin="s 0 0 0">
                    <gds-text>Net Zero Transition</gds-text>
                    <gds-icon-arrow-right></gds-icon-arrow-right>
                  </gds-flex>
                </gds-flex>
              </gds-card>
            </gds-flex>
            <gds-flex
              flex-direction="column"
              padding="2xs{l} s{l} m{xl} l{4xl} xl{4xl}"
              gap="2xl"
              align-items="stretch"
              justify-content="center"
              height="100%"
            >
              <form novalidate>
                <gds-div>
                  <gds-text tag="h1" color="l2-content-primary" weight="book">
                    Välkommen till Internetbanken
                  </gds-text>
                  <gds-text
                    tag="p"
                    size="heading-l"
                    color="l2-content-secondary"
                  >
                    Hur vill du logga in?
                  </gds-text>
                </gds-div>
                <gds-card
                  border-radius="s"
                  border="4xs/l2-stroke-primary"
                  padding="xl"
                >
                  <gds-flex flex-direction="column" gap="l">
                    <gds-text font-size="heading-l"
                      >Logga in med digipass</gds-text
                    >
                    <gds-input
                      label="Personnummer"
                      showExtendedSupportingText="true"
                      supportingText="Fyll i med 12 siffror."
                      .validator=${{
                        validate: (el: GdsFormControlElement) => {
                          if (el.value === '')
                            return [
                              {
                                ...el.validity,
                                valid: false,
                                customError: true,
                              },
                              'Du måste fylla i ditt personnummer.',
                            ]
                          else if (el.value.length !== 12 || isNaN(el.value))
                            return [
                              {
                                ...el.validity,
                                valid: false,
                                customError: true,
                              },
                              'Personnumret måste vara 12 siffror.',
                            ]
                          else return
                        },
                      }}
                    ></gds-input>

                    <ol>
                      <li>Skriv in din PIN i digipassen.</li>
                      <li>Tryck 2 när APPLI visas.</li>
                      <li>
                        Skriv in <gds-text tag="code">1234</gds-text> och sedan
                        <gds-text tag="code">5678</gds-text> i digipassen.
                      </li>
                      <li>Fyll i signeringskoden, den visas i 30 sekunder.</li>
                    </ol>

                    <gds-input
                      label="Inloggningskod"
                      supportingText="Fyll i koden med 6 siffror."
                      .validator=${{
                        validate: (el: GdsFormControlElement) => {
                          if (el.value === '')
                            return [
                              {
                                ...el.validity,
                                valid: false,
                                customError: true,
                              },
                              'Du måste fylla i en kod.',
                            ]
                          else if (el.value.length !== 6 || isNaN(el.value))
                            return [
                              {
                                ...el.validity,
                                valid: false,
                                customError: true,
                              },
                              'Koden måste vara 6 siffror.',
                            ]
                          else return
                        },
                      }}
                    ></gds-input>

                    <gds-form-summary></gds-form-summary>

                    <gds-button type="submit" size="large">Logga in</gds-button>

                    <gds-button rank="tertiary">
                      Ändra identifieringsmetod
                    </gds-button>
                  </gds-flex>
                </gds-card>
              </form>
            </gds-flex>
          </gds-grid>
        </gds-card>
      </gds-flex>
    `
  }
}
