import { CommonModule } from '@angular/common'
import { Component, Directive } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'
import { TranslocoModule } from '@jsverse/transloco'

import { NggvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'

import '../core/core.globals'

import { DropdownUtils, Option } from '../core/core.utils'
import { NggvDropdownListComponent } from './dropdown-list/dropdown-list.component'
import { NggvDropdownComponent } from './dropdown.component'

@Component({
    selector: 'nggv-dropdown-list',
    template: '',
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: ['state', 'scrollOffset', 'options', 'expanded', 'optionContentTpl'],
    standalone: false
})
class DropdownListStubComponent {}

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // DropdownComponent - constructor()
  // ----------------------------------------------------------------------------
  let hostElement: HTMLElement
  describe('DropdownComponent - constructor()', () => {
    let component: NggvDropdownComponent
    let fixture: ComponentFixture<NggvDropdownComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvDropdownComponent],
        providers: [
          { provide: NgControl, useValue: { control: new FormControl() } },
          {
            provide: NggvDropdownListComponent,
            useValue: DropdownListStubComponent,
          },
          DropdownUtils,
        ],
        imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          TranslocoModule,
          NggvI18nTestModule,
          NggvTooltipModule,
        ],
      }).compileComponents()

      fixture = TestBed.createComponent<NggvDropdownComponent>(
        NggvDropdownComponent,
      )
      component = fixture.componentInstance
      hostElement = fixture.debugElement.nativeElement
    }))

    it('creates component', () => {
      expect(component).toBeTruthy()
    })

    describe('set options', () => {
      const dummyoptions: Option<string | null, string>[] = [
        { key: 'dummy', label: 'dummy' },
      ]

      describe.each`
        description                                                      | required | options                          | expectedLength
        ${'should add default option if not required'}                   | ${false} | ${dummyoptions}                  | ${2}
        ${'should not add default option if required'}                   | ${true}  | ${dummyoptions}                  | ${1}
        ${'should not add default option if null option already exists'} | ${false} | ${[{ key: null, label: 'bla' }]} | ${1}
      `(
        '(with or without default option)',
        ({ description, required, options, expectedLength }) => {
          it(description, () => {
            component.required = required
            component.options = [...options]
            fixture.detectChanges()
            expect(component.options.length).toEqual(expectedLength)
          })
        },
      )

      it('should call updateModel with', () => {
        component.required = true
        component.options = [...dummyoptions]
        fixture.detectChanges()
        expect(component.state).toEqual(dummyoptions[0])
      })

      it('should add and remove null option when changing required status', () => {
        component.required = false
        component.options = [...dummyoptions]
        expect(component.options.length).toEqual(2)
        fixture.detectChanges()
        // update required to 'true' after onInit
        component.ngOnChanges({
          required: {
            isFirstChange: () => true,
            firstChange: true,
            currentValue: true,
            previousValue: undefined,
          },
        })
        expect(component.options.length).toEqual(1)
        expect(component.options[0]).toEqual(dummyoptions[0])
        // update required to 'false'
        component.ngOnChanges({
          required: {
            isFirstChange: () => false,
            firstChange: false,
            currentValue: false,
            previousValue: true,
          },
        })
        expect(component.options.length).toEqual(2)
        expect(component.options[1]).toEqual(dummyoptions[0])
      })

      it('changing options correctly updates internal variables', () => {
        component.required = true
        component.options = [...dummyoptions]
        fixture.detectChanges()
        expect(component.options.length).toEqual(1)
        const updateOption = { key: 'dummy', label: 'dumt' }
        component.options = [updateOption]
        fixture.detectChanges()
        expect(component.options.length).toEqual(1)
        expect(component.options[0]).toEqual(updateOption)
      })
      describe('size input', () => {
        it('should set class "small" when size is "small"', () => {
          component.size = 'small'
          fixture.detectChanges()
          expect(hostElement.classList.contains('small')).toBeTruthy()
          expect(hostElement.classList.contains('large')).toBeFalsy()
        })

        it('should set class "large" when size is "large"', () => {
          component.size = 'large'
          fixture.detectChanges()
          expect(hostElement.classList.contains('large')).toBeTruthy()
          expect(hostElement.classList.contains('small')).toBeFalsy()
        })
      })
    })
  })
})
