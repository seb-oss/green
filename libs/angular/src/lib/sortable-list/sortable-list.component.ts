import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core'

import '@sebgroup/green-core/components/icon/icons/dot-grid-two.js'

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

@Component({
    selector: 'ngg-sortable-list',
    templateUrl: './sortable-list.component.html',
    styleUrls: ['./sortable-list.component.scss'],
    standalone: false
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
    previousIndex: [number, number]
    currentIndex: [number, number]
    groups: SortableListGroup[]
  }>()

  @ViewChild('sortableListGroups') sortableListGroups!: ElementRef

  focusedIndex: Record<number, number> = { 0: 0 }

  /**
   * Toggles the selection of a checklist item and updates its position in the list.
   *
   * @param item - The checklist item to update.
   */
  toggleSelection(item: SortableListItem) {
    item.selected = !item.selected
    this.emitCheckListItem(item)
  }

  /**
   * Handles the onDragDrop event.
   *
   * @param event - The drag and drop event.
   */
  onDragDrop(event: CdkDragDrop<SortableListItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }

    this.emitItemOrderChanged(
      [Number(event.previousContainer.id), event.previousIndex],
      [Number(event.container.id), event.currentIndex],
    )
  }

  /**
   * Handles moving items up or down using the alt + arrow up or alt + arrow down keys.
   *
   * @param groupIndex - The index of the group.
   * @param currentItemIndex - The current index of the item.
   * @param newItemIndex - The new index of the item.
   */
  onAltArrowKeydown(
    groupIndex: number,
    currentItemIndex: number,
    newItemIndex: number,
    event: any,
  ) {
    event.preventDefault()

    let newIndex = newItemIndex
    let newGroupIndex = groupIndex
    let transfer = false

    if (newIndex > this.groups[groupIndex].items.length - 1) {
      newIndex = 0
      newGroupIndex = groupIndex + 1
      transfer = true
      this.focusedIndex[groupIndex] = this.groups[groupIndex].items.length - 2
    } else if (newIndex < 0) {
      newGroupIndex = groupIndex - 1
      newIndex = this.groups[newGroupIndex].items.length
      transfer = true
      this.focusedIndex[groupIndex] = 0
    }

    if (transfer) {
      transferArrayItem(
        this.groups[groupIndex].items,
        this.groups[newGroupIndex].items,
        currentItemIndex,
        newIndex,
      )
    } else {
      moveItemInArray(this.groups[groupIndex].items, currentItemIndex, newIndex)
    }

    this.emitItemOrderChanged(
      [groupIndex, currentItemIndex],
      [newGroupIndex, newIndex],
    )

    setTimeout(() => {
      this.focusItem(newGroupIndex, newIndex)
    })
  }

  /**
   * Handles focus by arrow keydown event.
   *
   * @param groupIndex - The index of the group.
   * @param itemIndex - The index of the item.
   * @param event - The keyboard event.
   */
  onArrowKeydown(groupIndex: number, itemIndex: number, event: Event) {
    event.preventDefault()
    setTimeout(() => {
      let gi = groupIndex

      if (itemIndex > this.groups[groupIndex].items.length - 1) {
        gi = groupIndex + 1
        itemIndex = 0
      }

      if (itemIndex < 0) {
        gi = groupIndex - 1
        if (gi < 0) {
          return
        }
        itemIndex = this.groups[gi].items.length - 1
      }

      this.focusItem(gi, itemIndex)
    })
  }

  /**
   * Emits the item order changed event.
   *
   * @param previousIndex - The previous index of the item.
   * @param currentIndex - The current index of the item.
   */
  private emitItemOrderChanged(
    previousIndex: [number, number],
    currentIndex: [number, number],
  ) {
    this.itemOrderChanged.emit({
      previousIndex,
      currentIndex,
      groups: [...this.groups],
    })
  }

  /**
   * Emits the selected checklist item through an event.
   *
   * @param item - The checklist item to emit.
   */
  private emitCheckListItem(item: SortableListItem) {
    this.itemSelectionChanged.emit({ changedItem: item, groups: this.groups })
  }

  /**
   * Focuses on a specific item in the sortable list.
   *
   * @param groupIndex - The index of the group.
   * @param itemIndex - The index of the item.
   */
  private focusItem(groupIndex: number, itemIndex: number): void {
    const groupElements =
      this.sortableListGroups.nativeElement.querySelectorAll('.item-list-group')

    if (groupElements && groupElements.length > groupIndex) {
      const itemElements = groupElements[groupIndex].querySelectorAll('.item')
      if (itemElements && itemElements.length > itemIndex) {
        if (this.shouldDisplayCheckboxes) {
          itemElements[itemIndex].querySelector('input').focus()
        } else {
          itemElements[itemIndex].focus()
        }
        this.focusedIndex[groupIndex] = itemIndex
      }
    }
  }

  /**
   * Checks if an item has focus.
   *
   * @param groupIndex - The index of the group.
   * @param itemIndex - The index of the item.
   */
  itemHasFocus(groupIndex: number, itemIndex: number) {
    if (!this.focusedIndex[groupIndex]) {
      this.focusedIndex[groupIndex] = 0
    }
    return this.focusedIndex[groupIndex] === itemIndex
  }
}
