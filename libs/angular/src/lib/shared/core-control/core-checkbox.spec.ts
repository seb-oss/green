import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { By } from '@angular/platform-browser'

import '@sebgroup/green-core/components/checkbox/checkbox.js'

import { provideCoreRenderer } from '../core-renderer'
import { NggCoreCheckboxDirective } from './core-checkbox.directive'
import { NggCoreFormsModule } from './core-control.module'

@Component({
    template: `
    <form [formGroup]="form">
      <gds-checkbox
        formControlName="checkbox"
        name="checkbox"
        required
      ></gds-checkbox>
    </form>
  `,
    standalone: false
})
class TestComponent {
  form = new FormGroup({
    checkbox: new FormControl(false),
  })
}

describe('NggCoreCheckboxDirective', () => {
  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>
  let checkbox: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ReactiveFormsModule, FormsModule, NggCoreFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideCoreRenderer()],
    }).compileComponents()

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    checkbox = fixture.debugElement.query(
      By.directive(NggCoreCheckboxDirective),
    )
  })

  it('should write value as checked to the element', () => {
    const directive = checkbox.injector.get(NggCoreCheckboxDirective)
    directive.writeValue(true)
    expect(checkbox.nativeElement.checked).toBe(true)
  })
})
