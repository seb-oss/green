import { Directive, ElementRef, Input } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
interface PopoverConfig {
  usePopper?: boolean
  container?: '' | 'body'
  useBodyScrollLock?: boolean
}

interface PopoverState {
  $isOpen: BehaviorSubject<boolean>
}

@Directive({
  selector: '[nggPopover]',
})
export class NggPopoverDirective {
  get config(): PopoverConfig {
    return this._config
  }

  @Input() set config(config: PopoverConfig) {
    this._config = { ...this.config, ...config }
  }
  triggerElement?: ElementRef
  private _config: PopoverConfig = {
    usePopper: true,
    container: '',
    useBodyScrollLock: true,
  }
  state: PopoverState = {
    $isOpen: new BehaviorSubject<boolean>(false),
  }

  close() {
    this.state.$isOpen.next(false)
  }
  open() {
    this.state.$isOpen.next(true)
  }
  toggle() {
    if (this.state.$isOpen.value) {
      this.close()
    } else {
      this.open()
    }
  }
}
