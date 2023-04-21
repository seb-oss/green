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
  @Input() direction: 'ltr' | 'rtl' = 'ltr'
  @Input() menuItems: DropdownOption[] = []
  @Input() menuItemTemplate: TemplateRef<unknown> | null = null
  @Input() menuAnchorTemplate: TemplateRef<unknown> | null = null

  @Output() contextMenuItemClicked: EventEmitter<DropdownOption> =
    new EventEmitter<DropdownOption>()

  @ViewChild('contextMenuPopover') popover: ElementRef | undefined

  @ViewChild('contextMenuAnchor') anchor: ElementRef | undefined

  isActive = false
  top = '0px'
  left = '0px'

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    if (!this.isActive) {
      return
    }
    const contextMenuElement = this.elementRef.nativeElement as HTMLElement

    if (!contextMenuElement.contains(target)) {
      this.close()
    }
  }

  open(): void {
    if (this.isActive) {
      this.close()
      return
    }

    const anchor = this.anchor?.nativeElement as HTMLElement
    const buttonRect = anchor.getBoundingClientRect()

    const left = this.calculateLeft(this.direction, buttonRect)
    const top = this.calculateTop(buttonRect.bottom)

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

  onMenuItemKeyDown(event: KeyboardEvent, menuItem: DropdownOption): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        this.onItemClick(menuItem)
        break
      default:
        break
    }
  }

  calculateTop(buttonRectBottom: number): number {
    return buttonRectBottom + window.pageYOffset
  }

  calculateLeft(direction: string, buttonRect: DOMRect): number {
    const popover = this.popover?.nativeElement as HTMLElement
    const popoverWidth = popover?.offsetWidth || 0

    switch (direction) {
      case 'rtl':
        return popoverWidth <= buttonRect.left
          ? buttonRect.right - popoverWidth
          : buttonRect.left
      case 'ltr':
      default:
        return buttonRect.right + popoverWidth <= window.innerWidth
          ? buttonRect.left
          : buttonRect.right - popoverWidth
    }
  }
}
