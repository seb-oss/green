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
    component.groups = [
      {
        title: 'Group 1',
        description: 'Description for group 1',
        items: [
          { id: 1, name: 'Item 1', selected: false },
          { id: 2, name: 'Item 2', selected: false },
          { id: 3, name: 'Item 3', selected: false },
        ],
      },
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
      component.groups = [
        {
          title: 'Group 1',
          description: 'Description for group 1',
          items: [testItem],
        },
      ]
      fixture.detectChanges()

      const itemSelectedSpy = jest.spyOn(component.itemSelectionChanged, 'emit')

      // Toggling selection
      component.toggleSelection(testItem)

      // Checking if the item's selected status is toggled
      expect(testItem.selected).toEqual(true)

      // Checking if the right event is emitted
      expect(itemSelectedSpy).toHaveBeenCalledWith({
        changedItem: testItem,
        groups: component.groups,
      })
    })

    it('should handle unselecting an item and update lists accordingly', () => {
      // Arrange
      const testItem: SortableListItem = {
        id: 1,
        name: 'Test Item',
        selected: true,
      }
      component.groups = [
        {
          title: 'Group 1',
          description: 'Description for group 1',
          items: [testItem],
        },
      ]
      fixture.detectChanges()
      const itemSelectedSpy = jest.spyOn(component.itemSelectionChanged, 'emit')

      // Act
      component.toggleSelection(testItem)

      // Assert
      expect(testItem.selected).toEqual(false)

      // Assert the right event is emitted
      expect(itemSelectedSpy).toHaveBeenCalledWith({
        changedItem: testItem,
        groups: component.groups,
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
        container: { data: component.groups, id: '0' } as any,
        previousContainer: { data: component.groups, id: '0' } as any,
        isPointerOverContainer: true,
        distance: { x: 0, y: 0 },
      } as any

      // Act
      component.onDragDrop(event)

      // Assert
      expect(component.groups[0].items[1].id).toBe(2)
      expect(spy).toHaveBeenCalledWith({
        previousIndex: [0, 0],
        currentIndex: [0, 1],
        groups: component.groups,
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
      component.onAltArrowKeydown(0, 0, 1, keyboardEvent)

      // Assert
      expect(component.groups[0].items[1].id).toBe(1)
      expect(spy).toHaveBeenCalledWith({
        previousIndex: [0, 0],
        currentIndex: [0, 1],
        groups: component.groups,
      })
    })
  })
})
