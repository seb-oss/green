/* eslint-disable no-console */
import '../core/core.globals'
import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import { CommonModule } from '@angular/common'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  importProvidersFrom,
  inject,
  provideAppInitializer,
} from '@angular/core'
import {
  AbstractControl,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import {
  TranslocoLoader,
  TranslocoModule,
  TranslocoService,
} from '@jsverse/transloco'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  lastValueFrom,
  map,
  Observable,
  of,
  tap,
} from 'rxjs'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvButtonComponent } from '../button/button.component'
import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive'
import { NggvCheckboxComponent } from '../checkbox/checkbox.component'
import { DropdownUtils } from '../core/core.utils'
import { NggvDropdownListComponent } from '../dropdown/dropdown-list/dropdown-list.component'
import { NggvDropdownComponent } from '../dropdown/dropdown.component'
import { NggvTypeaheadDropdownListComponent } from '../dropdown/typeahead/typeahead-dropdown-list/typeahead-dropdown-list.component'
import { NggvTypeaheadHighlightComponent } from '../dropdown/typeahead/typeahead-highlight/typeahead-highlight.component'
import { NggvTypeaheadDirective } from '../dropdown/typeahead/typeahead.directive'
import { NggvExternalLinkDirective } from '../external-link/external-link.directive'
import { NggvI18nModule } from '../i18n/i18n.module'
import { NggvInfoCircleComponent } from '../info-circle/info-circle.component'
import { createMask, NggvInputMaskModule } from '../input-mask'
import { NggvTooltipDirective } from '../tooltip/tooltip.directive'
import { NggvInputComponent } from './input.component'

interface WithExtras {
  notice: string
  tooltip?: string
  info?: string
  text?: string
  ngModel: string
}

const en = {
  'error.fieldinputmask': 'Invalid value pattern',
  'error.fieldrequired': 'Field must have content',
  'error.fieldmaxlength':
    'Field content should not be longer than {{requiredLength}} characters',
  'label.defaultlabel': 'Label',
  'label.maxlength': 'characters left',
  'label.optional': 'Optional',
}

const sv = {
  'error.fieldinputmask': 'Icke giltigt tecken mönster',
  'error.fieldrequired': 'Fältet får inte lämnas tomt',
  'error.fieldmaxlength':
    'Fältinnehållet måste vara längre än {{requiredLength}} tecken',
  'label.maxlength': 'tecken kvar',
}

class TranslocoInlineLoader implements TranslocoLoader {
  getTranslation(lang: string) {
    if (lang === 'sv') {
      return lastValueFrom(of(sv).pipe(delay(1500)))
    }
    return lastValueFrom(of(en).pipe(delay(500)))
  }
}

let translocoServiceInstance: TranslocoService

function translocoStorybookInitializer(translocoService: TranslocoService) {
  return () => {
    translocoServiceInstance = translocoService
    translocoService.langChanges$.pipe(distinctUntilChanged()).subscribe()
  }
}

const meta: Meta<NggvInputComponent> = {
  title: 'V-Angular/Input',
  component: NggvInputComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(NggvI18nModule),
        provideAppInitializer(() => {
          const initializerFn = translocoStorybookInitializer(
            inject(TranslocoService),
          )
          return initializerFn()
        }),
        DropdownUtils,
      ],
    }),
    moduleMetadata({
      declarations: [
        NggvButtonComponent,
        NggvDropdownComponent,
        NggvDropdownListComponent,
        NggvTypeaheadDropdownListComponent,
        NggvTypeaheadHighlightComponent,
        NggvCheckboxComponent,
        NggvTooltipDirective,
        NggvInfoCircleComponent,
        CharacterCountdownDirective,
        NggvExternalLinkDirective,
      ],
      imports: [
        NggvTypeaheadDirective,
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule,
        NggvInputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
        TranslocoModule,
        NggCoreWrapperModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  argTypes: {
    size: {
      options: ['large', 'small'],
      control: {
        type: 'select',
        labels: {
          large: 'Large',
          small: 'Small',
        },
      },
    },
  },
}
export default meta

const Template: StoryFn<NggvInputComponent & WithExtras> = (args: any) => ({
  props: args,
})

const TemplateWithFormControl: StoryFn<
  NggvInputComponent & WithExtras & any
> = (args: any) => {
  const ctrl = new UntypedFormControl(args.ngModel, [
    Validators.required,
    Validators.maxLength(12),
  ])
  ctrl.valueChanges.subscribe((val) => {
    console.log('input control value:', val)
    console.log({ required: required() })
  })
  const toggleDisableField = () => {
    if (ctrl.disabled) return ctrl.enable()
    ctrl.disable()
  }
  const required = () => {
    const error = ctrl.validator && ctrl.validator({} as AbstractControl)
    return error && error.required
  }
  return {
    template: /*html*/ `
    <nggv-input
      [label]="label"
      [placeholder]="placeholder"
      [description]="description"
      [invalid]="invalid"
      [valid]="valid"
      [size]="size"
      [required]="required"
      [optional]="optional"
      [locked]="locked"
      [displayDisabledAsLocked]="displayDisabledAsLocked"
      [formControl]="formControl">
    </nggv-input>
    <div style="margin-top: 1rem">
      <button type="button" class="gds-button" (click)="disableFn()">Toggle disable control</button>
    </div>
    `,
    props: {
      ...args,
      formControl: ctrl,
      disableFn: toggleDisableField,
    },
  }
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Field label',
  placeholder: 'This is a placeholder value',
  ngModel: 'textual value',
  description: 'This is a field description',
  type: 'text',
  autocomplete: 'on',
  size: 'large',
  required: undefined,
  optional: false,
  disabled: false,
  invalid: false,
}

export const WithFormControl = TemplateWithFormControl.bind({})
WithFormControl.args = {
  ...Primary.args,
  invalid: undefined,
  required: undefined,
  optional: undefined,
  valid: undefined,
}

const TemplateWithError: StoryFn<NggvInputComponent & WithExtras> = (
  args: any,
) => ({
  props: { ...args },
})

const TemplateWithCustomLabel: StoryFn<NggvInputComponent & WithExtras> = (
  args: any,
) => ({
  template: /*html*/ `
    <nggv-input [label]="label"
      [disabled]="disabled"
      [invalid]="invalid"
      [size]="size"
      [required]="required">
      <ng-template #labelTpl>
        My custom label template
        <nggv-info-circle [info]="info"></nggv-info-circle>
        <span>{{ text }}</span>
      </ng-template>
    </nggv-input>`,
  props: args,
})

export const WithCustomErrorAndCountdown = TemplateWithError.bind({})
WithCustomErrorAndCountdown.args = {
  ...Primary.args,
  maxLength: 25,
  showCharacterCountdown: true,
  invalid: true,
  error: 'this is an error message',
}

export const WithCustomError = TemplateWithError.bind({})
WithCustomError.args = {
  ...Primary.args,
  invalid: true,
  error: 'Validation failed on server',
}

export const WithCustomLabel = TemplateWithCustomLabel.bind({})
WithCustomLabel.args = {
  ...Primary.args,
  info: 'Some info regarding the input maybe...',
  text: 'And some more text',
}

const resettime = 3000
const resetObservable$ = new Observable<void>((subscriber) => {
  setInterval(() => {
    subscriber.next(undefined)
  }, resettime)
})

const TemplateWithPrefixAndOrSuffix: StoryFn<
  NggvInputComponent & WithExtras & any
> = (args: NggvInputComponent & WithExtras & any) => ({
  template: /*html*/ `
  <h2>Prefix and/or suffix</h2>
  <p>
    Prefix and/or suffix demontrations with simple HTML-elements and with other components.
  </p>
  <hr>
  <nggv-input label="Default"
    type="text"
    description="Default"
    [size]="size"
    [invalid]="invalid">
  </nggv-input>
  <nggv-input label="Prefix"
    type="text"
    description="Prefix with checkbox"
    [size]="size"
    [invalid]="invalid">
    <nggv-checkbox
      slot="prefix"
      label="Selected"
      [value]="true">
    </nggv-checkbox>
  </nggv-input>

  <nggv-input label="Suffix"
    type="text"
    description="Suffix with simple text"
    [size]="size"
    [invalid]="invalid">
    <label slot="suffix" class="suffix-prefix-padding">SEB</label>
  </nggv-input>

  <nggv-input label="Default (suffix)"
    type="text"
    description="Suffix (default placement) with button"
    [size]="size"
    [invalid]="invalid">
    <nggv-button
      class="suffix-prefix-padding"
      [small]="true"
      type="button">
      SAVE
    </nggv-button>
  </nggv-input>

  <nggv-input label="Large button with no padding (suffix)"
  type="text"
  description="Suffix (default placement) with button without padding"
  [size]="size"
  [invalid]="invalid">
  <nggv-button
  class="integrated-btn"
    [small]="false"
    type="button"
    [buttonStyle]="2">
    x
  </nggv-button>
</nggv-input>

  <nggv-input label="Prefix and default (suffix)"
    type="number"
    description="Prefix with simple label and suffix (default) with dropdown"
    [size]="size"
    [invalid]="invalid">
    <label slot="prefix" class="suffix-prefix-padding">Amount:</label>
    <nggv-dropdown
      placeholder="Currency"
      [options]="[
        { key: 'eur', label: 'EUR' },
        { key: 'sek', label: 'SEK' },
        { key: 'usd', label: 'USD' }
      ]">
    </nggv-dropdown>
  </nggv-input>`,
  props: args,
})

export const WithPrefixAndOrSuffix = TemplateWithPrefixAndOrSuffix.bind({})
WithPrefixAndOrSuffix.args = {
  ...Primary.args,
  invalid: false,
}

export const WithResetObservable: StoryFn<
  NggvInputComponent & WithExtras & any
> = (_args: NggvInputComponent & WithExtras & any) => {
  const formGroup = new UntypedFormGroup({
    resetForm: new UntypedFormControl('Annoying orange'),
  })
  return {
    template: /*html*/ `
    <ng-container [formGroup]="formGroup">
      <nggv-input label="Reset demo"
        type="text"
        formControlName="resetForm"
        [description]="description"
        [defaultValue]="defaultValue"
        [reset]="resetObservable$"
        [size]="size">
      </nggv-input>
    </ng-container>`,
    props: {
      description: `I will reset every ${resettime}ms`,
      formGroup,
      resetObservable$,
    },
  }
}

export const WithMaxLength: StoryFn<NggvInputComponent & WithExtras & any> = (
  args: NggvInputComponent & WithExtras & any,
) => {
  const formGroup = new UntypedFormGroup({
    remittanceInformation: new UntypedFormControl(
      'This is a test of handling if the text is longer than the max length input',
      Validators.maxLength(9),
    ),
  })
  const maxLength$ = of(10)

  formGroup
    .get('remittanceInformation')
    ?.valueChanges.subscribe((val) => console.log(val))

  const toggleLang = () => {
    const updateLang =
      translocoServiceInstance.getActiveLang() === 'sv' ? 'en' : 'sv'
    console.log(
      'from:',
      translocoServiceInstance.getActiveLang(),
      '=>',
      updateLang,
    )
    translocoServiceInstance.setActiveLang(updateLang)
  }

  return {
    template: /*html*/ `
    <button (click)="show = !show">Toggle show/hide</button>
    <button (click)="toggleLang()">Toggle lang</button>
    <button (click)="setValue('another long value')">Set form value</button>
    <ng-container [formGroup]="formG">
      <nggv-input *ngIf="show"
        [label]="label"
        [invalid]="invalid"
        [maxLength]="maxLength$ | async"
        [size]="size"
        formControlName="remittanceInformation"
        >
        <ng-template #labelTpl>
          My custom label template
          <nggv-info-circle [info]="info"></nggv-info-circle>
          <span>{{ text }}</span>
        </ng-template>
      </nggv-input>
      <span>value: {{ formG.controls.remittanceInformation.value }}</span>
    </ng-container>`,
    props: {
      ...args,
      description: 'This is a field description',
      maxLength$: maxLength$,
      formG: formGroup,
      setValue: (value: any) =>
        formGroup.controls.remittanceInformation.setValue(value),
      toggleLang: () => toggleLang(),
      show: false,
    },
  }
}

let dateFCValue = ''
let emailFCValue = ''
let currencyFCValue = ''
let phoneFCValue = ''
let licenseFCValue = ''
let ipFCValue = ''

const TemplateWithInputMask: StoryFn<NggvInputComponent & WithExtras & any> = (
  args: NggvInputComponent & WithExtras & any,
) => {
  const dateFC = new UntypedFormControl(dateFCValue, [Validators.required])
  const emailFC = new UntypedFormControl(emailFCValue)
  const currencyFC = new UntypedFormControl(currencyFCValue)
  const phoneFC = new UntypedFormControl(phoneFCValue)
  const licenseFC = new UntypedFormControl(licenseFCValue)
  const ipFC = new UntypedFormControl(ipFCValue)

  const formGroup = new UntypedFormGroup({
    dateFC,
    emailFC,
    currencyFC,
    phoneFC,
    licenseFC,
    ipFC,
  })

  dateFC?.valueChanges.subscribe((val) => (dateFCValue = val))
  emailFC?.valueChanges.subscribe((val) => (emailFCValue = val))
  currencyFC?.valueChanges.subscribe((val) => (currencyFCValue = val))
  phoneFC?.valueChanges.subscribe((val) => (phoneFCValue = val))
  licenseFC?.valueChanges.subscribe((val) => (licenseFCValue = val))
  ipFC?.valueChanges.subscribe((val) => (ipFCValue = val))

  const dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'yyyy-mm-dd',
    parser: (value: string) => {
      const values = value.split('-')
      const year = +values[0]
      const month = +values[1] - 1
      const day = +values[2]
      return new Date(year, month, day)
    },
  })
  const emailInputMask = createMask({ alias: 'email' })
  const currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 2,
    digitsOptional: false,
    prefix: '$ ',
    placeholder: '0',
    shortcuts: null,
  })
  const phoneMask = createMask('(999) 999-9999')
  const licenseInputMask = createMask('[9-]AAA-999')
  const ipAddressMask = createMask({ alias: 'ip' })

  return {
    template: /*html*/ `
    <div class="container" [formGroup]="formGroup">
      <div class="row">
        <div class="column">
          <h2>Date</h2>
          <nggv-input
            [inputMask]="dateInputMask"
            formControlName="dateFC"
            placeholder="yyyy-mm-dd"
            [locked]="locked">
          </nggv-input>
          <div> Valid: {{ formGroup.controls.dateFC.valid }} </div>
          <div> Value: {{ formGroup.controls.dateFC.value }} </div>
          <div> Errors: {{ formGroup.controls.dateFC.errors | json }} </div>
        </div>

        <div class="column">
          <h2>E-mail</h2>
          <nggv-input
            [inputMask]="emailInputMask"
            formControlName="emailFC"
            placeholder="_@_._"
            [locked]="locked">
          </nggv-input>
          <div> Valid: {{ formGroup.controls.emailFC.valid }} </div>
          <div> Value: {{ formGroup.controls.emailFC.value }} </div>
          <div> Errors: {{ formGroup.controls.emailFC.errors | json }} </div>
        </div>

        <div class="column">
          <h2>Currency</h2>
          <nggv-input
            [inputMask]="currencyInputMask"
            formControlName="currencyFC"
            placeholder="$ 0.00"
            [locked]="locked">
          </nggv-input>
          <div> Valid: {{ formGroup.controls.currencyFC.valid }} </div>
          <div> Value: {{ formGroup.controls.currencyFC.value }} </div>
          <div> Errors: {{ formGroup.controls.currencyFC.errors | json }} </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <h2>Phone</h2>
          <nggv-input
            [inputMask]="phoneMask"
            formControlName="phoneFC"
            placeholder="(___) ___-____"
            [locked]="locked">
          </nggv-input>
          <div> Valid: {{ formGroup.controls.phoneFC.valid }} </div>
          <div> Value: {{ formGroup.controls.phoneFC.value }} </div>
          <div> Errors: {{ formGroup.controls.phoneFC.errors | json }} </div>
        </div>

        <div class="column">
          <h2>License</h2>
          <nggv-input
            [inputMask]="licenseInputMask"
            formControlName="licenseFC"
            placeholder="___-___"
            [locked]="locked">
          </nggv-input>
          <div> Valid: {{ formGroup.controls.licenseFC.valid }} </div>
          <div> Value: {{ formGroup.controls.licenseFC.value }} </div>
          <div> Errors: {{ formGroup.controls.licenseFC.errors | json }} </div>
        </div>

        <div class="column">
          <h2>IP address</h2>
          <nggv-input
            [inputMask]="ipAddressMask"
            formControlName="ipFC"
            placeholder="_._._._"
            [locked]="locked">
          </nggv-input>
          <div> Valid: {{ formGroup.controls.ipFC.valid }} </div>
          <div> Value: {{ formGroup.controls.ipFC.value }} </div>
          <div> Errors: {{ formGroup.controls.ipFC.errors }} </div>
        </div>
      </div>
    </div>
    `,
    styles: [
      /*css*/ `
      * {
        box-sizing: border-box;
        width: 100%;
      }

      .column {
        float: left;
        width: 33.33%;
        padding: 16px;
        min-height: 150px;
        max-height: 250px;
      }

      .row:after {
        content: "";
        display: table;
        clear: both;
      }
    `,
    ],
    props: {
      formGroup,
      dateInputMask,
      emailInputMask,
      licenseInputMask,
      currencyInputMask,
      ipAddressMask,
      phoneMask,
      locked: args.locked,
    },
  }
}

export const WithInputMask = TemplateWithInputMask.bind({})
WithInputMask.args = {
  locked: false,
}

export const WithLockedInput = Template.bind({})
WithLockedInput.args = {
  ...Primary.args,
  locked: true,
  description: undefined,
  label: 'Bank charges',
}

export const WithDisplayDisabledAsLocked = TemplateWithFormControl.bind({})
WithDisplayDisabledAsLocked.args = {
  ...Primary.args,
  invalid: undefined,
  required: undefined,
  optional: undefined,
  valid: undefined,
  locked: false,
  description: undefined,
  label: 'Bank charges',
  displayDisabledAsLocked: true,
}

const TemplateWithTypeAhead: StoryFn<NggvInputComponent & WithExtras> = (
  args: any,
) => {
  const options = [
    { key: 'hej', label: 'Hej' },
    { key: 'tja', label: 'Tja' },
    { key: 'hejsan', label: 'Hejsan' },
    { key: 'tjo', label: 'Tjo' },
    { key: 'tjena', label: 'Tjena' },
  ]
  const searchFunction = (value$: Observable<string>) =>
    value$.pipe(
      debounceTime(100),
      tap((x) => console.log('entered value in input: ', x)),
      map((inputValue) =>
        options.filter((option) =>
          option.key.toUpperCase().includes(inputValue.toUpperCase()),
        ),
      ),
    )
  return {
    template: /*html*/ `
      <nggv-input class="toggle"
        [label]="label"
        [nggvTypeahead]="searchFunction"
        [resultFormatter]="resultFormatter"
        [selectedFormatter]="selectedFormatter"
        [size]="size"
        [autocomplete]="'off'">
      </nggv-input>
      <nggv-input class="toggle"
        [label]="label"
        [nggvTypeahead]="searchFunction"
        [resultFormatter]="resultFormatter"
        [selectedFormatter]="selectedFormatter"
        [size]="size"
        [autocomplete]="'off'">
      </nggv-input>
      <nggv-input class="toggle"
        [label]="label"
        [nggvTypeahead]="searchFunction"
        [resultFormatter]="resultFormatter"
        [selectedFormatter]="selectedFormatter"
        [size]="size"
        [autocomplete]="'off'">
      </nggv-input>
      <nggv-input class="toggle"
        [label]="label"
        [nggvTypeahead]="searchFunction"
        [resultFormatter]="resultFormatter"
        [selectedFormatter]="selectedFormatter"
        [size]="size"
        [autocomplete]="'off'">
      </nggv-input>
      <nggv-input class="toggle"
        [label]="label"
        [nggvTypeahead]="searchFunction"
        [resultFormatter]="resultFormatter"
        [selectedFormatter]="selectedFormatter"
        [size]="size"
        [autocomplete]="'off'">
      </nggv-input>

    `,
    styles: [
      /*css*/ `
      nggv-dropdown-list {
        width: 100%;
      }
    `,
    ],
    props: {
      ...args,
      searchFunction: searchFunction,
      selectedFormatter: (value: { key: string; label: string }) =>
        value.label.toUpperCase(),
    },
  }
}

export const WithTypeAhead = TemplateWithTypeAhead.bind({})
WithTypeAhead.args = {
  ...Primary.args,
}
