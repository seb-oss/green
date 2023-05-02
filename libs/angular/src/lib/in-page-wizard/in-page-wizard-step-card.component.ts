import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ngg-in-page-wizard-step-card',
  templateUrl: './in-page-wizard-step-card.component.html',
})
export class NggInPageWizardStepCardComponent {
  @Output()
  readonly handleNextClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()

  @Input() public stepText = ''

  @Input() public title = ''

  @Input() public editBtnText = ''

  @Input() public nextBtnText = ''

  @Input() public isCompleted = false

  @Input() public disableNext = false

  @Input() public isActive = false

  public toggleActive(): void {
    this.isActive = !this.isActive
  }
  handleOnNextBtnClick(event: MouseEvent) {
    this.isActive = false
    this.isCompleted = true
    this.handleNextClick.emit(event)
  }
}
