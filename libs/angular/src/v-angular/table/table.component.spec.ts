import { Directive } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { NggvI18nTestModule } from '../i18n'
import { TableComponent } from './table.component'
import { TableColumn } from './table.models'

interface MockData {
  id: string
  name: string
  ccy: string
  status: string
  balance: number
  date: string
}

const columns: TableColumn<MockData>[] = [
  { property: 'name', label: 'name', sortable: true },
  { property: 'ccy', label: 'ccy', sortable: true },
  {
    property: 'balance',
    label: 'balance',
    valueType: 'numeric',
    sortable: true,
  },
  { property: 'status', label: 'status', valueType: 'numeric', sortable: true },
  { property: 'date', label: 'date', valueType: 'numeric', sortable: true },
]

const data: MockData[] = [
  {
    id: '0',
    name: 'Capitalized CPH ODFlex 160209',
    ccy: 'DKK',
    status: 'Booked',
    balance: 80000,
    date: '2021-03-15',
  },
  {
    id: '1',
    name: 'Capitalized CPH ODFlex 160209',
    ccy: 'GBP',
    status: 'Waiting',
    balance: 5000,
    date: '2021-03-15',
  },
  {
    id: '2',
    name: 'Capitalized CPH ODFlex 160209',
    ccy: 'USD',
    status: 'Declined',
    balance: 40000,
    date: '2021-03-15',
  },
]

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[columnType]',
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ['columnType', 'sortable', 'sortOrder', 'value', 'thook'],
    standalone: false
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
class TableDirectiveMock {}

describe('[NggvTable]', () => {
  // ----------------------------------------------------------------------------
  // TableComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('TableComponent - constructor()', () => {
    let component: TableComponent<MockData>
    let fixture: ComponentFixture<TableComponent<MockData>>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, NggvI18nTestModule],
        declarations: [TableComponent, TableDirectiveMock],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture =
        TestBed.createComponent<TableComponent<MockData>>(TableComponent)
      component = fixture.componentInstance
      component.rowId = 'id'
      component.tableColumns = columns
      component.tableData = data
      component.selectable = false
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
