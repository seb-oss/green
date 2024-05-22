import { html } from 'lit/html.js'
import { customElement, property, state } from 'lit/decorators.js'
import {
  computePosition,
  detectOverflow,
  arrow,
  shift,
  offset,
  hide,
  flip,
  autoUpdate,
  Placement,
} from '@floating-ui/dom'
import { ref, createRef, Ref } from 'lit/directives/ref.js'
import styles from './coachmark.styles'
import { when } from 'lit/directives/when'
import { GdsElement } from 'src/gds-element'

@customElement('gds-coachmark')
export class GdsCoachmarkObject extends GdsElement {
  static styles = styles

  #cardRef: Ref<Element> = createRef()
  #arrowRef: Ref<Element> = createRef()
  #targetedElement: HTMLElement = new HTMLElement()
  #autoUpdateCleanupFn: (() => void) | undefined
  @state() _isVisible = false
  @state() _preventClose = false
  @property({ attribute: false }) coachmark: GdsCoachmarkObject | null = null

  connectedCallback() {
    super.connectedCallback()

    document.addEventListener('click', () => {
      this.#closeCoachMark()
    })

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this._isVisible) {
        this.#closeCoachMark()
      }
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    document.removeEventListener('click', this.#closeCoachMark)
    document.removeEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this._isVisible) {
        this.#closeCoachMark()
      }
    })
  }

  firstUpdated() {
    if (this.coachmark) {
      this.#targetedElement = this.#findTarget(this.coachmark.tooltip.target)
      this.#updateCoachmarks()
    }
  }

  #closeCoachMark() {
    if (!this._isVisible) return
    this._isVisible = false
    this.#cardRef.value?.remove()
    this.#autoUpdateCleanupFn?.()
    window.dispatchEvent(new CustomEvent('tooltipClosed'))
  }

  #findTarget(selectors: string[]): HTMLElement {
    let shadow = false
    let el: HTMLElement = new HTMLElement()
    selectors.forEach((selector) => {
      if (selector !== 'shadowRoot') {
        if (!el && !shadow) {
          el = document.querySelector(selector) as HTMLElement
        } else if (el && !shadow) {
          el = el.querySelector(selector) as HTMLElement
        } else if (el && shadow && el.shadowRoot) {
          el = el.shadowRoot.querySelector(selector) as HTMLElement
          shadow = false
        }
      } else {
        shadow = true
      }
    })
    return el
  }

  #checkBoundingRect(element: HTMLElement, overlappedElement: HTMLElement) {
    if (element == overlappedElement) return
    const elementRect = element.getBoundingClientRect()
    const overlappedElementRect = overlappedElement.getBoundingClientRect()
    return (
      elementRect.top < overlappedElementRect.bottom &&
      elementRect.bottom > overlappedElementRect.top &&
      elementRect.left < overlappedElementRect.right &&
      elementRect.right > overlappedElementRect.left
    )
  }

  #checkOverlap(selectors?: string[]): boolean {
    for (const selector of selectors ?? []) {
      const el = document.querySelector(selector) as HTMLElement
      if (!el || getComputedStyle(el).visibility === 'hidden') continue
      if (this.#checkBoundingRect(this.#targetedElement as HTMLElement, el)) {
        return true
      }
    }
    return false
  }

  #isElementOutsideView(element: HTMLElement) {
    const elementRect = element.getBoundingClientRect()
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth
    return (
      elementRect.top + elementRect.height < 0 ||
      elementRect.top > windowHeight ||
      elementRect.left + elementRect.width < 0 ||
      elementRect.left > windowWidth
    )
  }

  async #computeTooltipPosition(
    componentEl: HTMLElement,
    arrowEl: HTMLElement,
  ) {
    return computePosition(this.#targetedElement, componentEl, {
      placement: this.coachmark?.tooltip.preferredPlacement as Placement,
      middleware: [
        offset(() => ({
          mainAxis: 16,
          alignmentAxis: 16,
        })),
        {
          name: 'detectOverflow',
          async fn(positionState) {
            const overflow = await detectOverflow(positionState, {
              boundary: document.querySelector('main'),
              rootBoundary: 'document',
              altBoundary: true,
              padding: {
                top: 167,
                left: 20,
              },
            })
            return {
              data: overflow,
            }
          },
        },
        shift({ padding: 16 }),
        flip(),
        hide(),
        arrow({
          padding: 16,
          element: arrowEl,
        }),
      ],
    })
  }

  #shouldTooltipBeVisible(): boolean {
    const isOutOfBound = this.#isElementOutsideView(this.#targetedElement)
    const isVisible = this.#targetedElement.checkVisibility()
    const isOverlapping = !this.coachmark?.tooltip.overlappedBy
      ? false
      : this.#checkOverlap(this.coachmark.tooltip.overlappedBy)

    return (
      !isOverlapping && !isOutOfBound && isVisible && window.innerWidth > 580
    )
  }

  async #updateCoachmarks() {
    const componentEl = this.#cardRef.value as HTMLElement | null
    const arrowEl = this.#arrowRef.value as HTMLElement | null
    if (componentEl && arrowEl) {
      try {
        this.#autoUpdateCleanupFn = autoUpdate(
          this.#targetedElement,
          componentEl,
          () => {
            this.#computeTooltipPosition(componentEl, arrowEl).then(
              ({ x, y, middlewareData, placement }) => {
                if (this.#shouldTooltipBeVisible()) {
                  this._isVisible = true
                  Object.assign(componentEl.style, {
                    visibility: 'visible',
                    opacity: 1,
                    left: `${x}px`,
                    top: `${y}px`,
                  })
                  if (middlewareData.arrow) {
                    const { x, y } = middlewareData.arrow
                    arrowEl.removeAttribute('class')
                    arrowEl.classList.add('arrow-' + placement)
                    Object.assign(arrowEl.style, {
                      left: x != null ? `${x}px` : '',
                      top: y != null ? `${y}px` : '',
                    })
                  }
                } else {
                  this._isVisible = false
                  Object.assign(componentEl.style, {
                    visibility: 'hidden',
                    opacity: 0,
                  })
                }
              },
            )
          },
        )
      } catch (error) {
        console.warn('failed to render tooltips')
      }
    }
  }

  setPreventClose(preventClose: boolean) {
    this._preventClose = preventClose
  }

  render() {
    when(
      this.coachmark,
      () => html`
        <div
          class="gds-coachmark"
          aria-modal="false"
          ${ref(this.#cardRef) as HTMLElement}
        >
          <slot name="body"></slot>
          <slot name="footer"></slot>
          <div id="gds-arrow" ${ref(this.#arrowRef) as HTMLElement}></div>
        </div>
      `,
      () => html``,
    )
  }
}

export interface GdsCoachmarkObject {
  id: string
  variant: 'light' | 'dark'
  tooltip: GdsCoachmarkTooltip
}

export interface GdsCoachmarkAttribute {
  attribute: string
  value: string
}

export interface GdsCoachmarkTooltip {
  title?: string
  content: string[]
  closeButton: {
    text: string
    ariaLabel: string
  }
  link?: {
    url: string
    text: string
    target: string
  }
  attributes: GdsCoachmarkAttribute[]
  preferredPlacement: 'top' | 'bottom' | 'left' | 'right'
  target: string[]
  overlappedBy: string[]
}
