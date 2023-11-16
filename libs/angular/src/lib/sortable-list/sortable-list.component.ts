import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

export interface SortableListItem {
  id: any
  name: string
  description?: string
  selected?: boolean
  hasCustomSuffix?: boolean
}

enum KeyCode {
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
}

@Component({
  selector: 'ngg-sortable-list',
  templateUrl: './sortable-list.component.html',
  styleUrls: ['./sortable-list.component.scss'],
})
export class NggSortableListComponent implements OnInit {
  @Input() items: SortableListItem[] = []
  @Input() shouldDisplaySeparateUncheckedList = false
  @Input() shouldDisplayCheckboxes = false
  @Input() isReadOnly = false
  @Input() shouldDisplayDragHandle = true
  @Input() isDraggable = true
  @Input() header = ''
  @Input() subtitle = ''
  @Input() description = ''
  @Input() suffixTemplate: TemplateRef<any> | null = null
  @Input() unselectedHeader = ''
  @Input() unselectedSubtitle = ''
  @Input() unselectedDescription = ''

  @Output() itemSelectionChanged = new EventEmitter<{
    changedItem: SortableListItem
    items: SortableListItem[]
  }>()
  @Output() itemOrderChanged = new EventEmitter<{
    previousIndex: number
    currentIndex: number
    items: SortableListItem[]
  }>()

  checkedItems: SortableListItem[] = []
  uncheckedItems: SortableListItem[] = []
  @ViewChild('sortableList') sortableList!: ElementRef

  ngOnInit() {
    this.updateLists()
  }

  /**
   * Updates the checkedItems and uncheckedItems arrays based on the selected property of each item in the items array.
   * Also calls the updateOriginalItemsArray method.
   */
  updateLists() {
    if (!this.shouldDisplayCheckboxes) return
    this.checkedItems = []
    this.uncheckedItems = []
    this.items.forEach((item) =>
      item.selected
        ? this.checkedItems.push(item)
        : this.uncheckedItems.push(item)
    )

    this.updateOriginalItemsArray()
  }

  updateOriginalItemsArray() {
    if (!this.shouldDisplayCheckboxes) return
    if (this.shouldDisplaySeparateUncheckedList) {
      this.items = [...this.checkedItems, ...this.uncheckedItems]
    }
  }

  /**
   * Toggles the selection of a checklist item and updates its position in the list.
   * If an item is selected, it moves to the end of the checked items.
   * If an item is unselected, the lists are updated without changing the position of unchecked items.
   *
   * @param {SortableListItem} item - The checklist item to update.
   */
  toggleSelection(item: SortableListItem) {
    item.selected = !item.selected
    this.shouldDisplaySeparateUncheckedList
      ? this.handleSeparateListsToggle(item)
      : this.handleCombinedListToggle(item)
    this.emitCheckListItem(item)
  }

  /**
   * Handles the onDragDrop event.
   *
   * @param {CdkDragDrop<SortableListItem[]>} event - The drag and drop event.
   */
  onDragDrop(event: CdkDragDrop<SortableListItem[]>) {
    moveItemInArray(
      this.shouldDisplaySeparateUncheckedList ? this.checkedItems : this.items,
      event.previousIndex,
      event.currentIndex
    )
    this.updateOriginalItemsArray()
    this.emitItemOrderChanged(event.previousIndex, event.currentIndex)
  }

  /**
   * Handles the keydown event.
   *
   * @param {number} previousIndex - The previous index of the item.
   * @param {number} currentIndex - The current index of the item.
   * @param {KeyboardEvent} event - The keyboard event.
   */
  onKeydown(previousIndex: number, currentIndex: number, event: any) {
    if (!this.validateDrag(event, currentIndex)) return

    moveItemInArray(
      this.shouldDisplaySeparateUncheckedList ? this.checkedItems : this.items,
      previousIndex,
      currentIndex
    )
    this.updateOriginalItemsArray()
    this.emitItemOrderChanged(previousIndex, currentIndex)

    setTimeout(() => {
      this.focusItem(currentIndex)
    })
  }

  /**
   * Emits the item order changed event.
   *
   * @param {number} previousIndex - The previous index of the item.
   * @param {number} currentIndex - The current index of the item.
   */
  private emitItemOrderChanged(previousIndex: number, currentIndex: number) {
    this.itemOrderChanged.emit({
      previousIndex,
      currentIndex,
      items: [...this.items],
    })
  }

  /**
   * Emits the selected checklist item through an event.
   *
   * @param {SortableListItem} item - The checklist item that was toggled.
   */
  private emitCheckListItem(item: SortableListItem) {
    this.itemSelectionChanged.emit({ changedItem: item, items: this.items })
  }

  /**
   * Handles the toggle action for separate lists of checked and unchecked items.
   *
   * @param {SortableListItem} item - The item to be toggled.
   */
  private handleSeparateListsToggle(item: SortableListItem) {
    if (item.selected) {
      this.uncheckedItems = this.uncheckedItems.filter((i) => i.id !== item.id)
      this.checkedItems.push(item)
    } else {
      this.checkedItems = this.checkedItems.filter((i) => i.id !== item.id)
      this.uncheckedItems.push(item)
    }
    this.updateOriginalItemsArray()
  }

  /**
   * Handles the toggle for a combined list item.
   *
   * @param {SortableListItem} item - The item to be toggled.
   */
  private handleCombinedListToggle(item: SortableListItem) {
    const index = this.items.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      this.items[index] = item
    }
  }

  private moveToCheckedItems(item: SortableListItem) {
    this.uncheckedItems = this.uncheckedItems.filter((i) => i.id !== item.id)
    this.checkedItems.push(item)
  }

  /**
   * Validates whether a drag event is allowed or not based on the key code and
   the current focus index.
   * @param {any} event - The drag event object.
   * @param {number} focusIndex - The index of the focused item.
   */
  private validateDrag(event: KeyboardEvent, focusIndex: number) {
    if (event.code === KeyCode.ArrowUp && focusIndex < 0) return false
    return !(
      event.code === KeyCode.ArrowDown && focusIndex == this.items?.length
    )
  }

  /**
   * Focuses on a specific item in the sortable list.
   *
   * @param {number} index - The index of the item to focus on.
   */
  private focusItem(index: number): void {
    const itemElements =
      this.sortableList.nativeElement.querySelectorAll('.item')
    if (itemElements && itemElements.length > index) {
      itemElements[index].focus()
    }
  }
}
