import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { DropdownOption } from '@sebgroup/extract'

@Component({
  selector: 'ngg-context-menu',
  templateUrl: './context-menu.component.html',
})
export class NggContextMenuComponent {
  @Input() menuItems: DropdownOption[] = []
  @Input() menuItemTemplate: TemplateRef<any> | null = null

  @Output() contextMenuItemClicked: EventEmitter<DropdownOption> =
    new EventEmitter<DropdownOption>()

  @ViewChild('contextMenuPopover', { static: false }) popover:
    | ElementRef
    | undefined
  isActive = false
  top = '0px'
  left = '0px'

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isActive) {
      return
    }
    const targetElement = event.target as HTMLElement
    const contextMenuElement = this.elementRef.nativeElement as HTMLElement
    if (!contextMenuElement.contains(targetElement)) {
      this.close()
    }
  }

  open(event: MouseEvent): void {
    const button = event.target as HTMLElement
    const popover = this.popover?.nativeElement as HTMLElement

    const buttonRect = button.getBoundingClientRect()
    console.log(popover?.offsetWidth)
    const popoverWidth = popover?.offsetWidth || 0
    const screenRight = window.innerWidth
    const buttonRight = buttonRect.left + buttonRect.width

    const left = buttonRight
    // buttonRight + popoverWidth <= screenRight
    //   ? buttonRight
    //   : buttonRect.left - popoverWidth
    const top = buttonRect.top + window.pageYOffset

    this.left = `${left}px`
    this.top = `${top}px`
    this.isActive = true
  }

  close(): void {
    this.isActive = false
  }

  onItemClick(item: DropdownOption): void {
    this.contextMenuItemClicked.emit(item)
    this.close()
  }

  onMenuItemKeyDown(event: KeyboardEvent, index: number): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (index >= 0 && index < this.menuItems.length) {
          this.onItemClick(this.menuItems[index])
        }
        break
      default:
        break
    }
  }
}
