import { Component, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { TableDirective, TableTemplateDirective } from './table.directive'

const tableColumnVerifyProperty = 'testProperty'
const tableColumnTargetVerifyProperty = 'td'

@Component({
    selector: 'nggv-directive-host',
    template: /*html*/ `
    <ng-template
      [tableColumn]="tableColumn"
      [tableColumnTarget]="tableColumnTarget"
    ></ng-template>
  `,
    standalone: false
})
class TestHostComponent {
  @ViewChild(TableTemplateDirective, { static: true })
  tableTemplate!: TableTemplateDirective
  tableColumn = tableColumnVerifyProperty
  tableColumnTarget = tableColumnTargetVerifyProperty
}

describe('[NggvTable]', () => {
  // ----------------------------------------------------------------------------
  // TableDirective - constructor()
  // ----------------------------------------------------------------------------
  describe('TableDirective - constructor()', () => {
    it('should create an instance', () => {
      const directive = new TableDirective()
      expect(directive).toBeTruthy()
    })
  })

  // ----------------------------------------------------------------------------
  // TableTemplateDirective - constructor()
  // ----------------------------------------------------------------------------
  describe('TableTemplateDirective - constructor()', () => {
    let component: TestHostComponent
    let fixture: ComponentFixture<TestHostComponent>
    let directive: TableTemplateDirective

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestHostComponent, TableTemplateDirective],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent<TestHostComponent>(TestHostComponent)
      component = fixture.componentInstance
      directive = component.tableTemplate
      fixture.detectChanges()
    })

    it('should create an instance', () => {
      expect(directive).toBeTruthy()
    })

    it(`tableColumn should have value '${tableColumnVerifyProperty}'`, () => {
      expect(directive.tableColumn).toBe(tableColumnVerifyProperty)
    })

    it(`tableColumnTarget should have value '${tableColumnTargetVerifyProperty}'`, () => {
      expect(directive.tableColumnTarget).toBe(tableColumnTargetVerifyProperty)
    })
  })
})
