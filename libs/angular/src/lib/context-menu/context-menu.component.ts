import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'

import { DropdownOption } from '@sebgroup/green-angular/src/lib/dropdown'
import { GdsContextMenu } from '@sebgroup/green-core/components/context-menu/context-menu.component.js'
import * as ContextMenuTransStyles from '@sebgroup/green-core/components/context-menu/context-menu.trans.styles.js'

/**
 * MenuItems extends DropDown option and adds the posibility to pass a custom template for just one item.
 */
interface MenuItems extends DropdownOption {
  template?: TemplateRef<unknown>
}

/**
 * @deprecated
 * NggContextMenu is deprecated in favor of GdsContextMenu found in the Core package
 * https://storybook.seb.io/latest/core/?path=/docs/components-context-menu--docs
 */
@Component({
    selector: 'ngg-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['context-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
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
   * Emits when a menu item is clicked.
   */
  @Output() contextMenuItemClicked: EventEmitter<DropdownOption> =
    new EventEmitter<DropdownOption>()

  @ViewChild('contextMenuPopover') popover!: ElementRef<HTMLElement>
  @ViewChild('contextMenuAnchor') anchor!: ElementRef<HTMLElement>

  isActive = false

  constructor(private elementRef: ElementRef<HTMLElement>) {
    GdsContextMenu.define()
    ContextMenuTransStyles.register()
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
