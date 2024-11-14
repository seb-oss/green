import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/theme/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/img/index.js'
import '@sebgroup/green-core/components/mask/index.js'
import '@sebgroup/green-core/components/text/index.js'

import img from '../assets/image 23.png'

type News = {
  img: string
  heading: string
  body: string
  button: string
}

const heading = 'Inspiration och annat'

const newsItems: News[] = [
  {
    img,
    heading: 'Nu sänker vi bolåneräntan!',
    body: `Den 8 november sänker vi våra bolåne­­räntor för flera bindnings­­tider. Den rörliga 3-månaders­­räntan sänks med 0,50 procent­enheter.`,
    button: 'Read article',
  },
  {
    img,
    heading: 'Nu sänker vi bolåneräntan!',
    body: `Den 8 november sänker vi våra bolåne­­räntor för flera bindnings­­tider. Den rörliga 3-månaders­­räntan sänks med 0,50 procent­enheter.`,
    button: 'Read article',
  },
  {
    img,
    heading: 'Nu sänker vi bolåneräntan!',
    body: `Den 8 november sänker vi våra bolåne­­räntor för flera bindnings­­tider. Den rörliga 3-månaders­­räntan sänks med 0,50 procent­enheter.`,
    button: 'Read article',
  },
]

@customElement('tp-news-widget')
export class TpNewsWidget extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html` <gds-theme>
      <gds-flex flex-direction="column" gap="l">
        <gds-text tag="h2" font-size="heading-m">${heading}</gds-text>
        <gds-grid columns="1; s{2} m{3}" gap="m">
          ${newsItems.map(
            (item) =>
              html`<gds-card
                border="4xs/primary"
                border-radius="xs"
                overflow="hidden"
                padding="0"
                variant="tertiary"
              >
                <gds-flex position="relative" height="100%">
                  <gds-img
                    src="${item.img}"
                    object-fit="cover"
                    aspect-ratio="1/1"
                  ></gds-img>
                  <gds-mask
                    mask-image="top"
                    backdrop-filter="blur(20px)"
                    position="absolute"
                  >
                    <gds-flex
                      flex-direction="column"
                      justify-content="flex-end"
                      padding="l"
                      gap="l"
                      height="100%"
                    >
                      <gds-flex flex-direction="column" gap="xs">
                        <gds-text tag="h3" font-size="heading-s"
                          >${item.heading}</gds-text
                        >
                        <gds-text font-size="detail-m">${item.body}</gds-text>
                      </gds-flex>
                      <div>
                        <gds-button size="medium">${item.button}</gds-button>
                      </div>
                    </gds-flex>
                  </gds-mask>
                </gds-flex>
              </gds-card>`,
          )}
        </gds-grid>
      </gds-flex>
    </gds-theme>`
  }
}
