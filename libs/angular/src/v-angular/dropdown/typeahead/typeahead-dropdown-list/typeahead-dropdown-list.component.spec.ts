import { CommonModule } from '@angular/common'
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslocoModule } from '@jsverse/transloco'

import { NggvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvInputComponent } from '../../../input/input.component'
import { NggvTypeaheadDropdownListComponent } from './typeahead-dropdown-list.component'

@Component({
    template: ` <ng-container>
    <input #input id="input" />
  </ng-container>`,
    selector: 'nggv-input',
    // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
    outputs: ['nggvFocus'],
    standalone: false
})
export class InputStubComponent {
  @Output() nggvFocus: EventEmitter<boolean> = new EventEmitter()
  @Output() nggvBlur: EventEmitter<boolean> = new EventEmitter()
  @Output() nggvInput: EventEmitter<string> = new EventEmitter()
  @ViewChild('input', { static: true, read: ElementRef }) inputRef?: ElementRef

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  }
}

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // TypeaheadDropdownList - constructor()
  // ----------------------------------------------------------------------------
  describe('TypeaheadDropdownListComponent', () => {
    let component: NggvTypeaheadDropdownListComponent
    let fixture: ComponentFixture<NggvTypeaheadDropdownListComponent>

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [NggvTypeaheadDropdownListComponent, InputStubComponent],
        imports: [CommonModule, TranslocoModule, NggvI18nTestModule],
      })
      fixture = TestBed.createComponent(NggvTypeaheadDropdownListComponent)
      await fixture.whenStable()
      component = fixture.componentInstance
      component.hostComponent = new InputStubComponent() as NggvInputComponent
    })

    it('should create', () => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
    })

    describe('handleFocusChanges', () => {
      it('emits empty string if no state exists', () => {
        component.state = undefined
        const spy = jest.spyOn(component.hostComponent.nggvInput, 'emit')
        fixture.detectChanges()
        component.hostComponent.nggvFocus.next({ event: 'focusDummy' })
        expect(spy).toHaveBeenCalledWith('')
      })

      it('does not emits if no state exists and set expanded', () => {
        component.state = { key: '111', label: 'label123' }
        const emitSpy = jest.spyOn(component.hostComponent.nggvInput, 'emit')
        const expandedSpy = jest.spyOn(component, 'setExpanded')
        fixture.detectChanges()
        component.hostComponent.nggvFocus.next({ event: 'focusDummy' })
        expect(emitSpy).not.toHaveBeenCalled()
        expect(expandedSpy).toHaveBeenCalledWith(true)
      })
    })

    describe('formatSelected', () => {
      it.each`
        value                                        | expectedValue
        ${undefined}                                 | ${''}
        ${null}                                      | ${''}
        ${{ key: null, label: 'Real string' }}       | ${''}
        ${{ key: undefined, label: 'Real string' }}  | ${''}
        ${{ key: 0, label: 'Real string' }}          | ${'Real string'}
        ${{ key: '', label: 'Real string' }}         | ${'Real string'}
        ${{ key: 'real key', label: 'Real string' }} | ${'Real string'}
      `(
        'return $expectedValue when value is $value',
        ({ value, expectedValue }) => {
          const res = (component as any).formatSelected(value)
          expect(res).toStrictEqual(expectedValue)
        },
      )

      it.each`
        value                                                 | expectedValue
        ${{ key: 'real key', label: 'Real string' }}          | ${'REAL STRING'}
        ${{ key: 'real key', wrongLabelProp: 'Real string' }} | ${''}
      `(
        'return $expectedValue when value is $value',
        ({ value, expectedValue }) => {
          const formatterFunc = (v: { key: any; label: string }) =>
            v.label?.toUpperCase()
          component.selectedFormatter = formatterFunc
          const res = (component as any).formatSelected(value)
          expect(res).toStrictEqual(expectedValue)
        },
      )
    })
  })
})
