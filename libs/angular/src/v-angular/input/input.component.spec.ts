import '../core/core.globals'

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { By } from '@angular/platform-browser'
// import chalk from 'chalk'
//import { NgvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'

import { TranslocoTestingModule } from '@jsverse/transloco'

import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive'
import en from '../i18n/i18n.json'
import { NgvInputComponent } from './input.component'

// const member = (name: any) => chalk.blueBright(`${name}`)
// const atInput = (name: any) =>
//   chalk.white('@') + chalk.green('Input') + chalk.magenta('() ') + member(name)
// const primitive = (value: any) => chalk.blue.bold(`${value}`)

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // InputComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('InputComponent - constructor()', () => {
    let component: NgvInputComponent
    let fixture: ComponentFixture<NgvInputComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvInputComponent, CharacterCountdownDirective],
        providers: [
          { provide: NgControl, useValue: { control: new FormControl() } },
        ],
        imports: [
          FormsModule,
          ReactiveFormsModule,
          TranslocoTestingModule.forRoot({
            langs: { en },
            translocoConfig: {
              availableLangs: ['en'],
              defaultLang: 'en',
            },
            preloadLangs: true,
          }),
        ],
      }).compileComponents()
    }))

    describe('constructor()', () => {
      it('should create', () => {
        fixture = TestBed.createComponent(NgvInputComponent)
        fixture.detectChanges()
        expect(fixture.componentInstance).toBeTruthy()
      })
    })

    describe('@Input() optional', () => {
      it(`adds optional label if`, () => {
        fixture = TestBed.createComponent(NgvInputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.optional = true
        component.required = true
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.gds-field-label--optional'),
        )
        expect(optionalLabel).toBeTruthy()
      })

      it(`adds optional label if`, () => {
        fixture = TestBed.createComponent(NgvInputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.required = false
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.gds-field-label--optional'),
        )
        expect(optionalLabel).toBeTruthy()
      })

      it(`adds optional label if is evaluated as`, () => {
        const control = new FormControl(undefined)
        TestBed.overrideProvider(NgControl, { useValue: { control } })
        fixture = TestBed.createComponent(NgvInputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.optional = undefined
        component.required = undefined
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.gds-field-label--optional'),
        )
        expect(optionalLabel).toBeTruthy()
      })

      it(`hides optional label if`, () => {
        fixture = TestBed.createComponent(NgvInputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.optional = false
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.gds-field-label--optional'),
        )
        expect(optionalLabel).toBeFalsy()
      })

      it(`hides optional label if`, () => {
        fixture = TestBed.createComponent(NgvInputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.required = true
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.gds-field-label--optional'),
        )
        expect(optionalLabel).toBeFalsy()
      })

      it(`hides optional label if `, () => {
        const control = new FormControl(undefined, Validators.required)
        TestBed.overrideProvider(NgControl, { useValue: { control } })
        component.label = 'Label text'
        fixture = TestBed.createComponent(NgvInputComponent)
        component = fixture.componentInstance
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.gds-field-label--optional'),
        )
        expect(optionalLabel).toBeFalsy()
      })

      it(`hides optional label if`, () => {
        const control = new FormControl(undefined)
        TestBed.overrideProvider(NgControl, { useValue: { control } })
        fixture = TestBed.createComponent(NgvInputComponent)
        component = fixture.componentInstance
        component.label = 'Label text'
        component.optional = false
        fixture.detectChanges()

        // query for optional label class
        const optionalLabel = fixture.debugElement.query(
          By.css('.gds-field-label--optional'),
        )
        expect(optionalLabel).toBeFalsy()
      })
    })
  })
})
