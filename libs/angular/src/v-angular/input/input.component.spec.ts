import '../core.globals'

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { By } from '@angular/platform-browser'

import chalk from 'chalk'

import { TranslocoModule } from '@ngneat/transloco'
import { NgvI18nTestModule } from '@sebgroup/ngv-i18n'

import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive'
import { InputComponent } from './input.component'

const member = (name: any) => chalk.blueBright(`${name}`)
const atInput = (name: any) =>
  chalk.white('@') + chalk.green('Input') + chalk.magenta('() ') + member(name)
const primitive = (value: any) => chalk.blue.bold(`${value}`)

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // InputComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('InputComponent - constructor()', () => {
    let component: InputComponent
    let fixture: ComponentFixture<InputComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InputComponent, CharacterCountdownDirective],
        providers: [
          { provide: NgControl, useValue: { control: new FormControl() } },
        ],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          TranslocoModule,
          NgvI18nTestModule,
        ],
      }).compileComponents()
    }))

    describe('constructor()', () => {
      it('should create', () => {
        fixture = TestBed.createComponent(InputComponent)
        fixture.detectChanges()
        expect(fixture.componentInstance).toBeTruthy()
      })
    })

    describe('@Input() optional', () => {
      it(`adds optional label if ${primitive(true)}`, () => {
        fixture = TestBed.createComponent(InputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.optional = true
        component.required = true
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.sdv-field-label--optional'),
        )
        expect(optionalLabel).toBeTruthy()
      })

      it(`adds optional label if ${atInput('required')} is ${primitive(false)}`, () => {
        fixture = TestBed.createComponent(InputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.required = false
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.sdv-field-label--optional'),
        )
        expect(optionalLabel).toBeTruthy()
      })

      it(`adds optional label if ${member('control.required')} is evaluated as ${primitive(false)}`, () => {
        const control = new FormControl(undefined)
        TestBed.overrideProvider(NgControl, { useValue: { control } })
        fixture = TestBed.createComponent(InputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.optional = undefined
        component.required = undefined
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.sdv-field-label--optional'),
        )
        expect(optionalLabel).toBeTruthy()
      })

      it(`hides optional label if ${primitive(false)}`, () => {
        fixture = TestBed.createComponent(InputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.optional = false
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.sdv-field-label--optional'),
        )
        expect(optionalLabel).toBeFalsy()
      })

      it(`hides optional label if ${atInput('required')} is ${primitive(true)}`, () => {
        fixture = TestBed.createComponent(InputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.required = true
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.sdv-field-label--optional'),
        )
        expect(optionalLabel).toBeFalsy()
      })

      it(`hides optional label if ${member('control.required')} is evaluated as ${primitive(true)}`, () => {
        const control = new FormControl(undefined, Validators.required)
        TestBed.overrideProvider(NgControl, { useValue: { control } })
        component.label = 'Label text'
        fixture = TestBed.createComponent(InputComponent)
        component = fixture.componentInstance
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.sdv-field-label--optional'),
        )
        expect(optionalLabel).toBeFalsy()
      })

      it(`hides optional label if ${primitive(false)} despite if ${member(
        'control.required',
      )} is evaluated as ${primitive(false)}`, () => {
        const control = new FormControl(undefined)
        TestBed.overrideProvider(NgControl, { useValue: { control } })
        fixture = TestBed.createComponent(InputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.optional = false
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.sdv-field-label--optional'),
        )
        expect(optionalLabel).toBeFalsy()
      })
    })
  })
})
