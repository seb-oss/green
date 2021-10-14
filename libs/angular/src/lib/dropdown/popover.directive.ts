import { Directive, ElementRef, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'

@Directive({
  selector: '[nggPopover]',
})
export class NggPopoverDirective {
  get config(): { usePopper?: boolean; container?: '' | 'body' } {
    return this._config
  }

  @Input() set config(config: {
    usePopper?: boolean
    container?: '' | 'body'
  }) {
    this._config = { ...this.config, ...config }
  }
  triggerElement?: ElementRef
  private _config: {
    usePopper?: boolean
    container?: '' | 'body'
  } = {
    usePopper: true,
    container: '',
  }
  state: {
    $isOpen: BehaviorSubject<boolean>
    $selected: BehaviorSubject<Array<string>>
    $focusedElement: BehaviorSubject<string | null>
  } = {
    $isOpen: new BehaviorSubject<boolean>(false),
    $selected: new BehaviorSubject<Array<string>>([]),
    $focusedElement: new BehaviorSubject<string | null>(null),
  }
  control: AbstractControl | undefined

  close() {
    // unselect focused element on close
    this.state.$focusedElement.next(null)
    this.state.$isOpen.next(false)
  }
  open() {
    if (this.state.$selected.value) {
      this.state.$focusedElement.next(this.state.$selected.value[0])
    }
    this.state.$isOpen.next(true)
  }
  toggle() {
    // unselect focused element on close
    if (this.state.$isOpen.value) {
      this.state.$focusedElement.next(null)
    } else if (this.state.$selected.value) {
      this.state.$focusedElement.next(this.state.$selected.value[0])
    }
    this.state.$isOpen.next(!this.state.$isOpen.value)
  }
}
