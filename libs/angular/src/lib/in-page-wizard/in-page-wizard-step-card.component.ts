import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'ngg-in-page-wizard-step-card',
    templateUrl: './in-page-wizard-step-card.component.html',
    standalone: false
})
export class NggInPageWizardStepCardComponent {
  @Output()
  readonly handleNextClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()

  @Output()
  readonly handleEditClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()

  @Input() public stepIsValid = () => {
    return true
  }

  @Input() public stepText = ''

  @Input() public title = ''

  @Input() public editBtnText = ''

  @Input() public nextBtnText = ''

  @Input() public showNextBtnIcon = true

  @Input() public isCompleted = false

  @Input() public disableNext = false

  @Input() public isActive = false

  handleOnEditBtnClick(event: MouseEvent): void {
    this.isActive = !this.isActive
    this.isCompleted = false
    this.handleEditClick.emit(event)
  }
  handleOnNextBtnClick(event: MouseEvent) {
    if (this.stepIsValid()) {
      this.isActive = false
      this.isCompleted = true
    }

    this.handleNextClick.emit(event)
  }
}
