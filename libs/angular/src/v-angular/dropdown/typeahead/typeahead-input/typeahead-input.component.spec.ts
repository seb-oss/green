import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing'
import { TranslocoModule } from '@jsverse/transloco'

import { NggvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvDropdownComponent } from '../../../dropdown/dropdown.component'
import { NggvInputComponent } from '../../../input/input.component'
import { NggvTypeaheadInputComponent } from './typeahead-input.component'

@Component({
    template: '',
    selector: 'nggv-dropdown',
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [
        'placeholder',
        'options',
        'scrollOffset',
        'allowNullishOption',
        'selectOnSingleOption',
    ],
    // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property
    outputs: ['expandedChange'],
    standalone: false
})
export class DropdownStubComponent {
  @Input() selectOnSingleOption?: boolean
  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter()
}

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // TypeaheadInput - constructor()
  // ----------------------------------------------------------------------------
  describe('TypeaheadInputComponent - constructor()', () => {
    let component: NggvTypeaheadInputComponent
    let fixture: ComponentFixture<NggvTypeaheadInputComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          NggvTypeaheadInputComponent,
          DropdownStubComponent,
          NggvInputComponent,
        ],
        imports: [CommonModule, TranslocoModule, NggvI18nTestModule],
      })
      fixture = TestBed.createComponent(NggvTypeaheadInputComponent)
      component = fixture.componentInstance
      component.hostComponent =
        new DropdownStubComponent() as NggvDropdownComponent
    }))

    it('should create', () => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
    })

    describe('handleExpandedChange', () => {
      it('sets expanded to true when true is emitted', () => {
        fixture.detectChanges()
        component.hostComponent.expandedChange.next(true)
        expect(component.expanded).toEqual(true)
      })

      it('calls to set focus on input when expanded is true', fakeAsync(() => {
        const spy = jest.spyOn(component, 'setFocus')
        fixture.detectChanges()
        component.hostComponent.expandedChange.next(true)
        tick(1)
        expect(spy).toHaveBeenCalled()
      }))

      it('does not call to set focus on input when expanded is false', () => {
        const spy = jest.spyOn(component, 'setFocus')
        fixture.detectChanges()
        component.hostComponent.expandedChange.next(false)
        expect(spy).not.toHaveBeenCalled()
      })

      it("calls set input with selected value when it's opened", () => {
        const dummyValue = 'Dummy'
        const formatterSpy = jest
          .spyOn(component as any, 'formatSelected')
          .mockReturnValue(dummyValue)
        const setInputSpy = jest.spyOn(component as any, 'setInput')
        fixture.detectChanges()
        component.hostComponent.expandedChange.next(true)
        expect(formatterSpy).toHaveBeenCalled()
        expect(setInputSpy).toHaveBeenCalledWith(dummyValue, false)
      })

      it("calls set input with empty string when it's closed", () => {
        const setInputSpy = jest.spyOn(component as any, 'setInput')
        fixture.detectChanges()
        component.hostComponent.expandedChange.next(false)
        expect(setInputSpy).toHaveBeenCalledWith('', true)
      })

      it('sets expanded to false when false is emitted', () => {
        fixture.detectChanges()
        component.hostComponent.expandedChange.next(false)
        expect(component.expanded).toEqual(false)
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

    describe('setInput', () => {
      it('sets input but does not trigger filter', () => {
        const dummyValue = 'Test123'
        const onChangeSpy = jest.spyOn(component as any, 'onChange')
        const inputChangeSpy = jest.spyOn(
          (component as any).inputChange$,
          'next',
        )
        ;(component as any).setInput(dummyValue, false)

        expect(component.state).toEqual(dummyValue)
        expect(onChangeSpy).not.toHaveBeenCalled()
        expect(inputChangeSpy).not.toHaveBeenCalled()
      })

      it('sets input but and trigger filter', () => {
        const dummyValue = 'Test789'
        const onChangeSpy = jest.spyOn(component as any, 'onChange')
        const inputChangeSpy = jest.spyOn(
          (component as any).inputChange$,
          'next',
        )
        ;(component as any).setInput(dummyValue, true)

        expect(component.state).toEqual(dummyValue)
        expect(onChangeSpy).toHaveBeenCalledWith(dummyValue)
        expect(inputChangeSpy).toHaveBeenCalledWith(dummyValue)
      })
    })
  })
})
