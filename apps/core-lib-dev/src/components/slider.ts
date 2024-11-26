import { css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@sebgroup/green-core/components/text/index.js'

import { html } from '@sebgroup/green-core/scoping.js'

@customElement('tp-slider')
export class TpSliderInput extends LitElement {
  @property({ type: Number }) value = 50
  @property({ type: Number }) min = 0
  @property({ type: Number }) max = 100
  @property({ type: Number }) step = 1

  private _onMouseMoveBound: (event: MouseEvent) => void
  private _onTouchMoveBound: (event: TouchEvent) => void
  private _onMouseUpBound: (event: MouseEvent | TouchEvent) => void

  static styles = css`
    .slider {
      width: 100%;
      cursor: pointer;
      display: grid;
      gap: var(--gds-space-2xs);
      align-items: center;

      transition: grid-template-columns 0.1s;
    }
    .track {
      height: 4px;
      border-radius: var(--gds-space-max);
    }
    .track-left {
      left: 0;
      background-color: var(--gds-color-l3-background-positive);
    }
    .track-right {
      background-color: var(--gds-color-l3-background-secondary);
    }
    .thumb {
      --thumb-size: 16px;
      width: var(--thumb-size);
      height: var(--thumb-size);
      background-color: var(--gds-color-l3-background-positive);
      border-radius: 50%;
    }
  `

  constructor() {
    super()
    // Bind event handlers
    this._onMouseMoveBound = this._onMouseMove.bind(this)
    this._onTouchMoveBound = this._onTouchMove.bind(this)
    this._onMouseUpBound = this._onMouseUp.bind(this)
  }

  render() {
    const left = Math.max(
      0,
      Math.max(0, this.value - this.min) / (this.max - this.min),
    )
    const right = Math.max(0, 1 - left)

    const thumbSize = 16

    return html`
      <div
        class="slider"
        style="grid-template-columns: calc(${left *
        100}% - var(--gds-space-2xs) - calc(${thumbSize}px / 2)) ${thumbSize}px calc(${right *
        100}% - var(--gds-space-2xs) - calc(${thumbSize}px / 2))"
        @mousedown=${this._onMouseDown}
        @touchstart=${this._onTouchStart}
      >
        <!-- Left Track -->
        <div class="track track-left"></div>

        <!-- Thumb -->
        <div class="thumb"></div>

        <!-- Right Track -->
        <div class="track track-right"></div>
      </div>
    `
  }

  private _onMouseDown(event: MouseEvent): void {
    this._startDragging(event)
    event.preventDefault()
  }

  private _onTouchStart(event: TouchEvent): void {
    this._startDragging(event.touches[0])
    event.preventDefault()
  }

  private _startDragging(event: MouseEvent | Touch): void {
    window.addEventListener('mousemove', this._onMouseMoveBound)
    window.addEventListener('mouseup', this._onMouseUpBound)
    window.addEventListener('touchmove', this._onTouchMoveBound)
    window.addEventListener('touchend', this._onMouseUpBound)
    this._updateValue(event)
  }

  private _onMouseMove(event: MouseEvent): void {
    this._updateValue(event)
  }

  private _onTouchMove(event: TouchEvent): void {
    this._updateValue(event.touches[0])
  }

  private _onMouseUp(): void {
    window.removeEventListener('mousemove', this._onMouseMoveBound)
    window.removeEventListener('mouseup', this._onMouseUpBound)
    window.removeEventListener('touchmove', this._onTouchMoveBound)
    window.removeEventListener('touchend', this._onMouseUpBound)
  }

  private _updateValue(event: MouseEvent | Touch): void {
    const slider = this.shadowRoot?.querySelector('.slider') as HTMLElement
    if (!slider) return

    const rect = slider.getBoundingClientRect()
    const x = event.clientX - rect.left
    const percentage = (x / rect.width) * 100
    const range = this.max - this.min
    let newValue = this.min + (percentage / 100) * range
    newValue = Math.round(newValue / this.step) * this.step
    newValue = Math.min(this.max, Math.max(this.min, newValue))
    if (newValue !== this.value) {
      this.value = newValue
      this.dispatchEvent(
        new CustomEvent('change', { detail: { value: this.value } }),
      )
    }
  }
}
