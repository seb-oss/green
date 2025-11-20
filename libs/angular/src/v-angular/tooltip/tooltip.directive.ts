import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core'

import { tooltipArrowStyles, tooltipBoxStyles } from './tooltip.styles'

export type Placement = 'top' | 'right' | 'bottom' | 'left'

type Position = {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

/**
 * A tooltip is a text label that acts as a helper to a specific item.
 * Recommended to use value `top` or `bottom` with `placement` for responsive design.
 * Dynamic resizing and tooltip position are a work in progress.
 * https://designlibrary.sebgroup.com/components/component-tooltip
 */
@Directive({
    selector: '[nggvTooltip]',
    standalone: false
})
export class NggvTooltipDirective
  implements AfterViewInit, OnChanges, OnDestroy
{
  /** The text that will be shown in the tooltip. */
  @Input() nggvTooltip?: string
  /** Special property used for selecting DOM elements during automated UI testing. */
  @Input() thook = 'tooltip'
  /** The side of the anchor which the tooltip will be rendered.
   * Recommended `top` and `bottom` for responsive designs as these are more stable.
   */
  @Input() placement: Placement = 'top'
  /** Initial state and subsequent updates on wether the tooltip is visible. */
  @Input() shown = false
  /** How far off from the text the tooltip will be rendered. */
  @Input() offset = 10
  /** How frequently the tooltip will be re-rendered when the page size changes. */
  @Input() resizeThrottle = 50
  /** Id of tooltip element. */
  @Input() tooltipId?: string
  /** Numeric max-width for tooltip. */
  @Input() maxWidth = 343

  /** Emits a show event triggered changing visibility state of the tooltip. */
  @Output() nggvShow = new EventEmitter<HTMLElement>()
  /** Emits a hide event triggered changing visibility state of the tooltip. */
  @Output() nggvHide = new EventEmitter<HTMLElement>()

  /** @internal */
  protected timeout = 0

  /** @internal */
  protected parentElement: HTMLElement

  /** @internal */
  protected anchorElement: HTMLElement

  /** @internal */
  protected tooltipElement: HTMLElement | undefined

  /** @internal */
  protected arrowElement: HTMLElement | undefined

  /** @internal Check if changes should trigger a re-render */
  static shouldUpdate(change: SimpleChange) {
    return (
      change &&
      !change.firstChange &&
      change.previousValue !== change.currentValue
    )
  }

  constructor(
    private anchorElementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.anchorElement = this.anchorElementRef.nativeElement
    this.parentElement = document.body
  }

  ngAfterViewInit() {
    // Set a timeout to allow view to fully render before creating tooltip.
    setTimeout(() => (this.shown ? this.show(true) : this.hide(true)))
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      NggvTooltipDirective.shouldUpdate(changes.nggvTooltip) ||
      NggvTooltipDirective.shouldUpdate(changes.placement) ||
      NggvTooltipDirective.shouldUpdate(changes.thook)
    ) {
      this.shown ? this.show(true) : this.hide(true)
    }

    if (NggvTooltipDirective.shouldUpdate(changes.shown)) {
      this.shown ? this.show() : this.hide()
    }

    if (NggvTooltipDirective.shouldUpdate(changes.offset)) {
      this.updatePosition()
    }
  }

  ngOnDestroy() {
    this.hide(true)
  }

  /** @internal */
  @HostListener('mouseenter')
  @HostListener('focus')
  onMouseEnter() {
    this.show()
  }

  /** @internal */
  @HostListener('mouseleave')
  @HostListener('blur')
  @HostListener('keyup.escape')
  onMouseLeave() {
    this.hide()
  }

  /** @internal */
  @HostListener('window:resize')
  resize() {
    if (this.timeout) return
    this.timeout = window.setTimeout(() => {
      this.timeout = 0
      this.updatePosition()
    }, this.resizeThrottle)
  }

  /**
   * Sets the visibility state of the tooltip to true and creates a new tooltip if it doesn't exist or `recreate` is set.
   * @param recreate if set to true, destroy any existing tooltip and create a new one.
   */
  show(recreate = false) {
    // Require tooltip text to create
    if (!this.nggvTooltip || this.nggvTooltip.length === 0) return

    if (recreate || !this.tooltipElement) {
      this.hide(true)
      this.create(this.nggvTooltip)
    } else {
      this.renderer.appendChild(this.parentElement, this.tooltipElement)
    }

    this.updatePosition()
    this.shown = true
    this.nggvShow.emit(this.tooltipElement)
  }

  /**
   * Sets the visibility state of the tooltip to false and destroys an existing tooltip if `destroy` is set.
   * @param destroy if set to true, destroy any existing tooltip.
   */
  hide(destroy = false) {
    if (!this.tooltipElement) return
    if (this.parentElement.contains(this.tooltipElement)) {
      this.renderer.removeChild(this.parentElement, this.tooltipElement)
    }
    if (destroy) this.destroy()
    this.shown = false
    this.nggvHide.emit(this.tooltipElement)
  }

  /**
   * @internal
   * Creates a new tooltip with the set placement and a given text as its body.
   * @param text the string to be displayed in the tooltip body.
   */
  create(text: string) {
    this.tooltipElement = this.renderer.createElement('div')
    this.renderer.addClass(this.tooltipElement, 'gds-tooltip')
    this.renderer.setAttribute(this.tooltipElement, 'data-thook', this.thook)
    this.renderer.setAttribute(this.tooltipElement, 'role', 'tooltip')
    if (this.tooltipId) {
      this.renderer.setAttribute(this.tooltipElement, 'id', this.tooltipId)
    }
    // set styling
    Array.from(tooltipBoxStyles.entries()).forEach(([style, value]) => {
      this.renderer.setStyle(this.tooltipElement, style, value)
    })
    const relativeMaxWidth = this.pxToRem(this.maxWidth)
    this.renderer.setStyle(this.tooltipElement, 'max-width', relativeMaxWidth)
    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(text),
    )

    // add tooltip to DOM
    this.renderer.appendChild(this.parentElement, this.tooltipElement)

    this.arrowElement = this.renderer.createElement('div')
    this.renderer.addClass(
      this.arrowElement,
      `gds-tooltip__arrow-${this.placement}`,
    )

    // add arrow to tooltip element
    this.renderer.appendChild(this.tooltipElement, this.arrowElement)
  }

  /**
   * @internal
   * Destroys the current tooltip by un-setting variables, should only be used after detaching elements from the DOM.
   */
  destroy() {
    this.tooltipElement = undefined
    this.arrowElement = undefined
  }

  /**
   * @internal
   * Recalculates the position of the tooltip.
   */
  updatePosition() {
    if (!this.tooltipElement || !this.arrowElement) return
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      this.parentElement.scrollTop ||
      0
    const anchorRect = this.anchorElement.getBoundingClientRect()
    const tooltipRect = this.tooltipElement.getBoundingClientRect()
    const arrowRect = this.arrowElement.getBoundingClientRect()

    switch (this.placement) {
      case 'top':
        this.alignVertical(
          true,
          scrollPos,
          anchorRect,
          tooltipRect.width,
          tooltipRect.height,
          arrowRect.width,
        )
        break

      case 'bottom':
        this.alignVertical(
          false,
          scrollPos,
          anchorRect,
          tooltipRect.width,
          tooltipRect.height,
          arrowRect.width,
        )
        break

      case 'left':
        this.alignHorizontal(true, scrollPos, anchorRect, tooltipRect.height)
        break

      case 'right':
        this.alignHorizontal(false, scrollPos, anchorRect, tooltipRect.height)
        break

      default:
        return
    }
  }

  /**
   * @internal
   * Calculates and set the position of the tooltip when the placement is `top` or `bottom`.
   */
  alignVertical(
    above: boolean,
    scrollPos: number,
    anchor: DOMRect,
    tooltipWidth: number,
    tooltipHeight: number,
    arrowWidth: number,
  ) {
    const width = this.parentElement.clientWidth
    const anchorMidX = anchor.left + anchor.width / 2
    const tooltip: Position = {}
    const arrow: Position = {}

    if (above)
      tooltip.top = anchor.top - tooltipHeight - this.offset + scrollPos
    else tooltip.top = anchor.bottom + this.offset + scrollPos

    if (anchorMidX < width / 2) {
      tooltip.left = Math.max(0, anchorMidX - tooltipWidth / 2)
      arrow.left = anchorMidX - tooltip.left
    } else {
      tooltip.right = Math.max(0, width - (anchorMidX + tooltipWidth / 2))
      arrow.right = width - anchorMidX - tooltip.right - arrowWidth
    }

    this.setStyle(tooltip, arrow)
  }

  /**
   * @internal
   * Calculates and set the position of the tooltip when the placement is `left` or `right`.
   */
  alignHorizontal(
    before: boolean,
    scrollPos: number,
    anchor: DOMRect,
    tooltipHeight: number,
  ) {
    const width = this.parentElement.clientWidth
    const top = anchor.top + (anchor.height - tooltipHeight) / 2 + scrollPos
    const tooltip: Position = { top }
    const arrow: Position = { top: tooltipHeight / 2 }

    if (before) tooltip.right = width - anchor.left + this.offset
    else tooltip.left = anchor.right + this.offset

    this.setStyle(tooltip, arrow)
  }

  /**
   * @internal
   * Updates the CSS properties for the tooltip position.
   */
  setStyle(tooltip: Position, arrow: Position) {
    // Tooltip
    Object.entries(tooltip).forEach(([prop, value]) => {
      const position = this.pxToRem(value)
      this.renderer.setStyle(this.tooltipElement, prop, position)
    })

    // Arrow
    Object.entries(arrow).forEach(([prop, value]) => {
      const position = this.pxToRem(value)
      this.renderer.setStyle(this.arrowElement, prop, position)
    })

    Array.from(tooltipArrowStyles[this.placement].entries()).forEach(
      ([style, value]) => {
        this.renderer.setStyle(this.arrowElement, style, value)
      },
    )
  }

  private pxToRem(value: number): string {
    const fontSizePx = window
      ?.getComputedStyle(this.parentElement)
      ?.getPropertyValue('font-size')
    const fontSizeNumberMatch = fontSizePx?.match(/\d{1,}/)
    const fontSize = fontSizeNumberMatch ? +fontSizeNumberMatch[0] : 16
    const remValue = value / fontSize
    return `${remValue}rem`
  }
}
