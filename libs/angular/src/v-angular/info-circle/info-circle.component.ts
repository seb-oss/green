import { Component, HostBinding, Input } from '@angular/core'
import '@sebgroup/green-core/components/icon/icons/circle-info.js'

/**
 * A button that will present an explanation to a problem/question.
 * https://designlibrary.sebgroup.com/components/component-contextual-help-button
 */
@Component({
  selector: 'nggv-info-circle',
  templateUrl: './info-circle.component.html',
  styleUrls: ['./info-circle.component.scss'],
})
export class NgvInfoCircleComponent {
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook = 'info'

  /**
   * Text to display in tooltip when mouse hovers over icon.
   */
  @Input() info!: string

  // /** @internal */
  // infoCircle: IconDefinition = faInfoCircle
}
