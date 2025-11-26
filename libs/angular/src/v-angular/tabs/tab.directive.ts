import { Directive, HostBinding, Input } from '@angular/core'

/**
 * Directive that provides the tab container with data about its child tabs.
 * The directive sets its own active state and adds aria attributes.
 *
 * @example
 * <nggv-tabs>
 *     <article tab="Tab title 1"> <!-- Content --> </article>
 *     <article tab="Tab title 2" [active]="true"> <!-- Content --> </article>
 *     <article tab="Tab title 3" disabled> <!-- Content --> </article>
 *     <article tab="<strong>Tab title 4</strong>"> <!-- Content --> </article>
 * </nggv-tabs>
 */
@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[tab]',
    standalone: false
})
export class TabDirective {
  /** @internal */
  @HostBinding('class.gds-tabs__panel') baseClass = true
  /** @internal */
  @HostBinding('attr.role') role = 'tabpanel'
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'tabs-panel'
  /** Sets whether this tab should be the active tab on load. */
  @HostBinding('class.-active') @Input() active = false
  /** @internal */
  @HostBinding('attr.hidden') get hidden() {
    return !this.active
  }
  /** Sets the title displayed in the tab list for this child. */
  @Input() tab!: string
  /** Sets whether this tab should be able to be selected. */
  @Input() disabled = false
  /** Identifier used for aria attributes and selection. */
  @Input() id: string | number | undefined // todo: discuss if window.ngv.nextId() should be used

  /** @internal */
  @HostBinding('attr.id') get attrId() {
    return `panel-${this.id}`
  }

  /** @internal */
  @HostBinding('attr.aria-labelledby') get ariaLabelledby() {
    return `tab-${this.id}`
  }
}
