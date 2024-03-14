import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  NggSortableListComponent,
  SortableListItem,
} from './sortable-list.component'
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop'

describe('NggSortableListComponent', () => {
  let component: NggSortableListComponent
  let fixture: ComponentFixture<NggSortableListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NggSortableListComponent],
      imports: [DragDropModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NggSortableListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NggSortableListComponent)
    component = fixture.componentInstance
    component.items = [
      { id: 1, name: 'Item 1', selected: false },
      { id: 2, name: 'Item 2', selected: false },
      { id: 3, name: 'Item 3', selected: false },
    ]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('toggleSelection', () => {
    it('should toggle item selection and update lists', () => {
      const testItem: SortableListItem = {
        id: 1,
        name: 'Test Item',
        selected: false,
      }
      component.items = [testItem]
      component.shouldDisplaySeparateUncheckedList = true
      fixture.detectChanges()

      const itemSelectedSpy = jest.spyOn(component.itemSelectionChanged, 'emit')

      // Toggling selection
      component.toggleSelection(testItem)

      // Checking if the item's selected status is toggled
      expect(testItem.selected).toEqual(true)

      // Checking if the lists are updated correctly
      expect(component.checkedItems.includes(testItem)).toBe(true)
      expect(component.uncheckedItems.includes(testItem)).toBe(false)

      // Checking if the right event is emitted
      expect(itemSelectedSpy).toHaveBeenCalledWith({
        changedItem: testItem,
        items: component.items,
      })
    })

    it('should handle unselecting an item and update lists accordingly', () => {
      // Arrange
      const testItem: SortableListItem = {
        id: 1,
        name: 'Test Item',
        selected: true,
      }
      component.items = [testItem]
      component.shouldDisplaySeparateUncheckedList = true
      fixture.detectChanges()
      const itemSelectedSpy = jest.spyOn(component.itemSelectionChanged, 'emit')

      // Act
      component.toggleSelection(testItem)

      // Assert
      expect(testItem.selected).toEqual(false)

      // Assert the lists are updated correctly
      expect(component.checkedItems.includes(testItem)).toBe(false)
      expect(component.uncheckedItems.includes(testItem)).toBe(true)

      // Assert the right event is emitted
      expect(itemSelectedSpy).toHaveBeenCalledWith({
        changedItem: testItem,
        items: component.items,
      })
    })

    it('should toggle item selection and not separate lists when shouldDisplaySeparateUncheckedList is false', () => {
      // Arrange
      const testItem: SortableListItem = {
        id: 1,
        name: 'Test Item',
        selected: false,
      }
      component.items = [testItem]
      component.shouldDisplaySeparateUncheckedList = false
      fixture.detectChanges()

      const itemSelectedSpy = jest.spyOn(component.itemSelectionChanged, 'emit')

      // Act
      component.toggleSelection(testItem)

      // Assert the item's selected status is toggled
      expect(testItem.selected).toEqual(true)

      // Assert the lists are NOT separated
      expect(component.checkedItems.length).toBe(0)
      expect(component.uncheckedItems.length).toBe(0)

      // Assert the right event is emitted
      expect(itemSelectedSpy).toHaveBeenCalledWith({
        changedItem: testItem,
        items: component.items,
      })
    })
  })

  describe('onDragDrop', () => {
    it('should reorder items and emit change on drag and drop', () => {
      // Arrange
      const spy = jest.spyOn(component.itemOrderChanged, 'emit')
      const event: CdkDragDrop<SortableListItem[]> = {
        previousIndex: 0,
        currentIndex: 1,
        container: { data: component.items } as any,
        previousContainer: { data: component.items } as any,
        isPointerOverContainer: true,
        distance: { x: 0, y: 0 },
      } as any

      // Act
      component.onDragDrop(event)

      // Assert
      expect(component.items[1].id).toBe(1)
      expect(spy).toHaveBeenCalledWith({
        previousIndex: 0,
        currentIndex: 1,
        items: component.items,
      })
    })
  })

  describe('Keyboard sorting', () => {
    it('should handle keydown event and reorder items', () => {
      // Arrange
      const spy = jest.spyOn(component.itemOrderChanged, 'emit')
      const keyboardEvent = new KeyboardEvent('keydown', {
        code: 'ArrowUp',
      })

      // Act
      component.onAltArrowKeydown(0, 1, keyboardEvent)

      // Assert
      expect(component.items[1].id).toBe(1)
      expect(spy).toHaveBeenCalledWith({
        previousIndex: 0,
        currentIndex: 1,
        items: component.items,
      })
    })

    it('should not reorder items when validateDrag returns false', () => {
      // Arrange
      const spy = jest.spyOn(component.itemOrderChanged, 'emit')
      const keyboardEvent = new KeyboardEvent('keydown', { code: 'ArrowUp' })

      // Act
      component.onAltArrowKeydown(0, -1, keyboardEvent)

      // Assert
      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('updateLists', () => {
    it('should separate checked and unchecked items', () => {
      // Arrange
      component.items = [
        { id: 1, name: 'Item 1', selected: true },
        { id: 2, name: 'Item 2', selected: false },
      ]
      component.shouldDisplaySeparateUncheckedList = true
      component.shouldDisplayCheckboxes = true

      // Act
      component.updateLists()

      // Assert
      expect(component.checkedItems.length).toBe(1)
      expect(component.uncheckedItems.length).toBe(1)
    })

    it('should handle all items selected', () => {
      // Arrange
      component.items = [
        { id: 1, name: 'Item 1', selected: true },
        { id: 2, name: 'Item 2', selected: true },
      ]
      component.shouldDisplayCheckboxes = true
      component.shouldDisplaySeparateUncheckedList = true

      // Act
      component.updateLists()

      // Assert
      expect(component.checkedItems.length).toBe(2)
      expect(component.uncheckedItems.length).toBe(0)
    })

    it('should handle empty item list', () => {
      // Arrange
      component.items = []

      // Act
      component.updateLists()

      // Assert
      expect(component.checkedItems.length).toBe(0)
      expect(component.uncheckedItems.length).toBe(0)
    })

    it('should not separate items when shouldDisplaySeparateUncheckedList is false', () => {
      // Arrange
      component.items = [
        { id: 1, name: 'Item 1', selected: true },
        { id: 2, name: 'Item 2', selected: false },
      ]
      component.shouldDisplaySeparateUncheckedList = false

      // Arrange
      component.updateLists()

      // Assert
      expect(component.checkedItems.length).toBe(0)
      expect(component.uncheckedItems.length).toBe(0)
    })
  })
})
