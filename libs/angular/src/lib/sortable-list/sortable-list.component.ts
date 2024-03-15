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
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'

export interface SortableListItem {
  id: any
  name: string
  description?: string
  selected?: boolean
  hasCustomSuffix?: boolean
}

export interface SortableListGroup {
  items: SortableListItem[]
  title: string
  description?: string
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
export class NggSortableListComponent {
  @Input() groups: SortableListGroup[] = []
  @Input() shouldDisplayCheckboxes = false
  @Input() isReadOnly = false
  @Input() isDraggable = true
  @Input() description = ''
  @Input() suffixTemplate: TemplateRef<any> | null = null

  @Output() itemSelectionChanged = new EventEmitter<{
    changedItem: SortableListItem
    groups: SortableListGroup[]
  }>()
  @Output() itemOrderChanged = new EventEmitter<{
    previousIndex: number
    currentIndex: number
    groups: SortableListGroup[]
  }>()

  @ViewChild('sortableListGroups') sortableListGroups!: ElementRef

  focusedIndex = 0

  /**
   * Toggles the selection of a checklist item and updates its position in the list.
   * If an item is selected, it moves to the end of the checked items.
   * If an item is unselected, the lists are updated without changing the position of unchecked items.
   *
   * @param {SortableListItem} item - The checklist item to update.
   */
  toggleSelection(item: SortableListItem) {
    item.selected = !item.selected
    this.handleCombinedListToggle(item)
    this.emitCheckListItem(item)
  }

  /**
   * Handles the onDragDrop event.
   *
   * @param {CdkDragDrop<SortableListItem[]>} event - The drag and drop event.
   */
  onDragDrop(event: CdkDragDrop<SortableListItem[]>) {
    console.log(event)
    //moveItemInArray(this.items, event.previousIndex, event.currentIndex)

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }

    this.emitItemOrderChanged(event.previousIndex, event.currentIndex)
  }

  /**
   * Handles moving items up or down using the alt + arrow up or alt + arrow down keys.
   *
   * @param {number} previousIndex - The previous index of the item.
   * @param {number} currentIndex - The current index of the item.
   * @param {KeyboardEvent} event - The keyboard event.
   */
  onAltArrowKeydown(previousIndex: number, currentIndex: number, event: any) {
    if (!this.validateDrag(event, currentIndex)) return

    event.preventDefault()

    //moveItemInArray(this.items, previousIndex, currentIndex)
    this.emitItemOrderChanged(previousIndex, currentIndex)

    setTimeout(() => {
      this.focusItem(currentIndex)
    })
  }

  /**
   * Handles focus by arrow keydown event.
   *
   * @param {number} index - The index of the item.
   * @param {KeyboardEvent} event - The keyboard event.
   */
  onArrowKeydown(index: number, event: Event) {
    event.preventDefault()
    setTimeout(() => {
      this.focusItem(index)
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
      groups: [...this.groups],
    })
  }

  /**
   * Emits the selected checklist item through an event.
   *
   * @param {SortableListItem} item - The checklist item that was toggled.
   */
  private emitCheckListItem(item: SortableListItem) {
    this.itemSelectionChanged.emit({ changedItem: item, groups: this.groups })
  }

  /**
   * Handles the toggle for a combined list item.
   *
   * @param {SortableListItem} item - The item to be toggled.
   */
  private handleCombinedListToggle(item: SortableListItem) {
    // const index = this.items.findIndex((i) => i.id === item.id)
    // if (index !== -1) {
    //   this.items[index] = item
    // }
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
      event.code === KeyCode.ArrowDown &&
      focusIndex ==
        this.groups.reduce((acc, curr) => (acc += curr.items.length), 0) - 1
    )
  }

  /**
   * Focuses on a specific item in the sortable list.
   *
   * @param {number} index - The index of the item to focus on.
   */
  private focusItem(index: number): void {
    const itemElements =
      this.sortableListGroups.nativeElement.querySelectorAll('.item')
    if (itemElements && itemElements.length > index) {
      itemElements[index].focus()
      this.focusedIndex = index
    }
  }

  /**
   * Checks if an item has focus.
   *
   * @param {number} index - The index of the item.
   */
  itemHasFocus(index: number) {
    return index === this.focusedIndex
  }
}
