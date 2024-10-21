import { CommonModule } from '@angular/common'
import { Component, Directive } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'

import { NgvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'

import '../core/core.globals'
import { NgvDropdownComponent } from './dropdown.component'
import { DropdownUtils, Option } from '../core/core.utils'
import { NgvDropdownListComponent } from './dropdown-list/dropdown-list.component'

@Component({
  selector: 'nggv-dropdown-list',
  template: '',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['state', 'scrollOffset', 'options', 'expanded', 'optionContentTpl'],
})
class DropdownListStubComponent {}

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // DropdownComponent - constructor()
  // ----------------------------------------------------------------------------

  describe('DropdownComponent - constructor()', () => {
    let component: NgvDropdownComponent
    let fixture: ComponentFixture<NgvDropdownComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvDropdownComponent, DropdownListStubComponent],
        providers: [
          { provide: NgControl, useValue: { control: new FormControl() } },
          {
            provide: NgvDropdownListComponent,
            useValue: DropdownListStubComponent,
          },
          DropdownUtils,
        ],
        imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          NgvI18nTestModule,
        ],
      }).compileComponents()

      fixture =
        TestBed.createComponent<NgvDropdownComponent>(NgvDropdownComponent)
      component = fixture.componentInstance
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
    })
  })
})
