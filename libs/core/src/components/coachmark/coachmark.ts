import { property, state } from 'lit/decorators.js'
import { gdsCustomElement, html } from '../../scoping'
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
import { when } from 'lit/directives/when.js'
import { GdsElement } from '../../gds-element'

/**
 * @element gds-coachmark
 * A tooltip container with a slot and an arrow pointing towards the targeted element
 * depending on the preferred placement,
 * the coachmark is hidden/disabled when the element is overlapped or out of viewport.
 *
 * @slot body - placeholder for the content of the tooltip.
 *
 * @event tooltipClosed - dispatched when the tooltip is closed
 */
@gdsCustomElement('gds-coachmark')
export class GdsCoachmark extends GdsElement {
  static styles = styles

  /**
   * @internal
   */
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  #cardRef: Ref<Element> = createRef()
  #arrowRef: Ref<Element> = createRef()
  #targetedElement: HTMLElement | undefined = undefined
  #autoUpdateCleanupFn: (() => void) | undefined

  /**
   *Tracks the visibility of the tooltip (readonly)
   */
  @state() _isVisible = false

  /**
   *Used to prevent closing the tooltip if it's not visible (readonly)
   */
  @state() _preventClose = false

  /**
   * The placement of the popover relative to the trigger.
   * Accepts any of the placements supported by Floating UI.
   */
  @property()
  placement: Placement = 'bottom'

  /**
   * The coachmark will be hidden when overlapped by the list of provided elements (selectors).
   */
  @property({ attribute: false })
  overlappedBy: string[] = []

  /**
   * List of selectors pointing to the targeted element. Ex. for a target inside a ShadowDOM: ["some-component", "shadowRoot", "target-element"].
   */
  @property({ attribute: false })
  target: string[] = []

  connectedCallback(): void {
    super.connectedCallback()

    document.addEventListener('click', () => {
      //safe check for animation and modals
      setTimeout(() => {
        this.#updateCoachmarks()
        this.#closeCoachMark()
      }, 400)
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
    if (this.target.length > 0) {
      this.#targetedElement = this.#findTarget(this.target)
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

  #findTarget(selectors: string[]): HTMLElement | undefined {
    let shadow = false
    let el: HTMLElement | undefined = undefined

    for (const selector of selectors) {
      if (selector === 'shadowRoot') {
        shadow = true
        continue
      }

      if (!el) {
        el = document.querySelector(selector) as HTMLElement
      } else if (shadow && el.shadowRoot) {
        el = el.shadowRoot.querySelector(selector) as HTMLElement
        shadow = false
      } else {
        el = el.querySelector(selector) as HTMLElement
      }
    }

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
    if (!selectors) return false

    for (const selector of selectors) {
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
    targetedEl: HTMLElement,
    componentEl: HTMLElement,
    arrowEl: HTMLElement,
  ) {
    return computePosition(targetedEl, componentEl, {
      placement: this.placement,
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
    if (!this.#targetedElement) return false

    const isOutOfBound = this.#isElementOutsideView(this.#targetedElement)
    const isVisible = this.#targetedElement.checkVisibility()
    const isOverlapping =
      this.overlappedBy.length === 0
        ? false
        : this.#checkOverlap(this.overlappedBy)

    return (
      !isOverlapping && !isOutOfBound && isVisible && window.innerWidth > 580
    )
  }

  async #updateCoachmarks() {
    const targetEl = this.#targetedElement
    const componentEl = this.#cardRef.value as HTMLElement | null
    const arrowEl = this.#arrowRef.value as HTMLElement | null

    if (!targetEl || !componentEl || !arrowEl) return

    try {
      this.#autoUpdateCleanupFn = autoUpdate(targetEl, componentEl, () => {
        this.#computeTooltipPosition(targetEl, componentEl, arrowEl).then(
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
      })
    } catch (error) {
      console.warn('failed to render tooltips')
    }
  }

  setPreventClose(preventClose: boolean) {
    this._preventClose = preventClose
  }

  render() {
    return html`${when(
      this.target.length > 0,
      () => html`
        <div
          role="dialog"
          class="gds-coachmark"
          aria-label="Coachmark"
          ${ref(this.#cardRef) as HTMLElement}
        >
          <slot></slot>
          <div id="gds-arrow" ${ref(this.#arrowRef) as HTMLElement}></div>
        </div>
      `,
      () => html``,
    )}`
  }
}
