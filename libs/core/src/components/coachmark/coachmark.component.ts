import { property, state } from 'lit/decorators.js'
import { createRef, ref, Ref } from 'lit/directives/ref.js'
import { when } from 'lit/directives/when.js'
import {
  arrow,
  autoUpdate,
  computePosition,
  detectOverflow,
  flip,
  hide,
  offset,
  Placement,
  shift,
} from '@floating-ui/dom'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import CoachmarkStyles from './coachmark.styles'

/**
 * @element gds-coachmark
 * A tooltip container with a slot and an arrow pointing towards the targeted element
 * depending on the preferred placement,
 * the coachmark is hidden/disabled when the element is overlapped or out of viewport.
 *
 * @slot - placeholder for the content of the tooltip.
 *
 * @event gds-ui-state - dispatched when the tooltip is about to be closed. Can be cancelled to prevent closing.
 *
 * @status beta
 */
@gdsCustomElement('gds-coachmark')
export class GdsCoachmark extends GdsElement {
  static styles = CoachmarkStyles

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

  /**
   * The accessible label of the coachmark.
   */
  @property()
  label = 'Coachmark'

  /**
   * A callback that can be used to set the visibility of the coachmark based on your criteria.
   *
   * The default computed visibility, based on visibility and overlap of the target element, is supplied as the third argument.
   */
  @property({ attribute: false })
  computeVisibility: (
    self: GdsCoachmark,
    target: HTMLElement,
    computedVisibility: boolean,
  ) => boolean = (_self, _target, computedVisibility) => computedVisibility

  /**
   * The resolved targeted element (readonly)
   */
  targetElement: HTMLElement | undefined = undefined

  // Tracks the visibility of the tooltip (readonly)
  @state() _isVisible = false

  // Used to prevent closing the tooltip if it's not visible (readonly)
  @state() _preventClose = false

  #cardRef: Ref<Element> = createRef()
  #arrowRef: Ref<Element> = createRef()
  #autoUpdateCleanupFn: (() => void) | undefined

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
      this.targetElement = this.#findTarget(this.target)
      this.#updateCoachmarks()
    }
  }

  #closeCoachMark() {
    if (!this._isVisible) return

    const shouldClose = this.dispatchCustomEvent('gds-ui-state', {
      detail: { open: this._isVisible, reason: 'closed' },
      bubbles: false,
      composed: false,
      cancelable: true,
    })
    if (!shouldClose) return

    this._isVisible = false
    this.#cardRef.value?.remove()
    this.#autoUpdateCleanupFn?.()
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

      if (this.#checkBoundingRect(this.targetElement as HTMLElement, el)) {
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
              boundary: document.body,
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
    if (!this.targetElement) return false

    const isOutOfBound = this.#isElementOutsideView(this.targetElement)
    const targetIsVisible = this.targetElement.checkVisibility()
    const isOverlapping =
      this.overlappedBy.length === 0
        ? false
        : this.#checkOverlap(this.overlappedBy)

    return this.computeVisibility(
      this,
      this.targetElement,
      !isOverlapping && !isOutOfBound && targetIsVisible,
    )
  }

  async #updateCoachmarks() {
    const targetEl = this.targetElement
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
      // eslint-disable-next-line no-console
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
          id="body"
          aria-label=${this.label}
          ${ref(this.#cardRef) as HTMLElement}
        >
          <slot></slot>
          <div id="arrow" ${ref(this.#arrowRef) as HTMLElement}></div>
        </div>
      `,
      () => html``,
    )}`
  }
}
