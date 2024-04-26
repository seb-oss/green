import {
  Input,
  Output,
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  TemplateRef,
} from '@angular/core'
import { DropdownOption } from '../dropdown/dropdown.component'

/**
 * MenuItems extends DropDown option and adds the posibility to pass a custom template for just one item.
 */
interface MenuItems extends DropdownOption {
  template?: TemplateRef<unknown>
}

import '@sebgroup/green-core/components/context-menu'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

@Component({
  selector: 'ngg-context-menu',
  templateUrl: './context-menu.component.html',
})
export class NggContextMenuComponent {
  /**
   * Placement of the popover relative to the anchor element.
   */
  @Input() direction: 'ltr' | 'rtl' = 'ltr'

  /**
   * List of items to be displayed in the context menu.
   */
  @Input() menuItems: MenuItems[] = []

  /**
   * Custom menu item template.
   */
  @Input() menuItemTemplate: TemplateRef<unknown> | null = null

  /**
   * Custom menu trigger template.
   */
  @Input() menuAnchorTemplate: TemplateRef<unknown> | null = null

  /**
   * @deprecated
   * This property no longer has any effect and will be removed in a future version.
   */
  @Input() closeOnScroll = false

  /**
   * Emits when a menu item is clicked.
   */
  @Output() contextMenuItemClicked: EventEmitter<DropdownOption> =
    new EventEmitter<DropdownOption>()

  @ViewChild('contextMenuPopover') popover!: ElementRef<HTMLElement>
  @ViewChild('contextMenuAnchor') anchor!: ElementRef<HTMLElement>

  isActive = false

  constructor(private elementRef: ElementRef<HTMLElement>) {
    registerTransitionalStyles()
  }

  get placement(): string {
    return this.direction === 'ltr' ? 'bottom-start' : 'bottom-end'
  }

  open(): void {
    if (this.isActive) {
      this.close()
      return
    }

    this.isActive = true
  }

  close(): void {
    this.isActive = false
  }

  onItemClick(item: DropdownOption): void {
    this.contextMenuItemClicked.emit(item)
    this.close()
  }
}
