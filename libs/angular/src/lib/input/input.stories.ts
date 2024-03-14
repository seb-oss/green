import '../core.globals';

import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { debounceTime, delay, distinctUntilChanged, lastValueFrom, map, Observable, of, tap } from 'rxjs';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons';
import { TranslocoLoader, TranslocoService } from '@ngneat/transloco';
import { NgvI18nModule } from '@sebgroup/ngv-i18n';
import { createMask, NgvInputMaskModule } from '@sebgroup/ngv-input-mask';
import { TooltipDirective } from '@sebgroup/ngv-tooltip';
import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DropdownUtils } from '../core.utils';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ExternalLinkDirective } from '../external-link/external-link.directive';
import { InfoCircleComponent } from '../info-circle/info-circle.component';
import { TypeaheadDropdownListComponent } from '../typeahead/typeahead-dropdown-list/typeahead-dropdown-list.component';
import { TypeaheadDirective } from '../typeahead/typeahead.directive';
import { InputComponent } from './input.component';

interface WithExtras {
  notice: string;
  tooltip?: string;
  info?: string;
  text?: string;
  ngModel: string;
}

const en = {
  'error.fieldinputmask': 'Invalid value pattern',
  'error.fieldrequired': 'Field must have content',
  'error.fieldmaxlength': 'Field content should not be longer than {{requiredLength}} characters',
  'label.defaultlabel': 'Label',
  'label.maxlength': 'characters left',
  'label.optional': 'Optional',
};

const sv = {
  'error.fieldinputmask': 'Icke giltigt tecken mönster',
  'error.fieldrequired': 'Fältet får inte lämnas tomt',
  'error.fieldmaxlength': 'Fältinnehållet måste vara längre än {{requiredLength}} tecken',
  'label.maxlength': 'tecken kvar',
};

class TranslocoInlineLoader implements TranslocoLoader {
  getTranslation(lang: string) {
    if (lang === 'sv') {
      return lastValueFrom(of(sv).pipe(delay(1500)));
    }
    return lastValueFrom(of(en).pipe(delay(500)));
  }
}

let translocoServiceInstance: TranslocoService;

function translocoStorybookInitializer(translocoService: TranslocoService) {
  return () => {
    translocoServiceInstance = translocoService;
    translocoService.langChanges$.pipe(distinctUntilChanged()).subscribe();
  };
}

const meta: Meta<InputComponent> = {
  title: 'Core/Input',
  component: InputComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(NgvI18nModule),
        {
          provide: APP_INITIALIZER,
          useFactory: translocoStorybookInitializer, // our initializer hook
          multi: true,
          deps: [TranslocoService], // the dependencies that Angular passes as arguments to our hook
        },
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => {
            return async () => iconLibrary.addIcons(faInfoCircle);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
        DropdownUtils,
      ],
    }),
    moduleMetadata({
      declarations: [
        ButtonComponent,
        DropdownComponent,
        DropdownListComponent,
        TypeaheadDropdownListComponent,
        CheckboxComponent,
        TooltipDirective,
        InfoCircleComponent,
        CharacterCountdownDirective,
        ExternalLinkDirective,
      ],
      imports: [
        TypeaheadDirective,
        CommonModule,
        FontAwesomeModule,
        NgvI18nModule,
        ReactiveFormsModule,
        RouterTestingModule,
        NgvInputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
      ],
    }),
  ],
};
export default meta;

const Template: StoryFn<InputComponent & WithExtras> = (args: InputComponent & WithExtras) => ({
  props: args,
});

const TemplateWithFormControl: StoryFn<InputComponent & WithExtras & any> = (args: InputComponent & WithExtras) => {
  const ctrl = new UntypedFormControl(args.ngModel, [Validators.required, Validators.maxLength(12)]);
  ctrl.valueChanges.subscribe((val) => {
    console.log('input control value:', val);
    console.log({ required: required() });
  });
  const toggleDisableField = () => {
    if (!!ctrl.disabled) return ctrl.enable();
    ctrl.disable();
  };
  const required = () => {
    const error = ctrl.validator && ctrl.validator({} as AbstractControl);
    return error && error.required;
  };
  return {
    template: /*html*/ `
    <ngv-input
      [label]="label"
      [placeholder]="placeholder"
      [description]="description"
      [invalid]="invalid"
      [valid]="valid"
      [required]="required"
      [optional]="optional"
      [locked]="locked"
      [displayDisabledAsLocked]="displayDisabledAsLocked"
      [formControl]="formControl">
    </ngv-input>
    <div style="margin-top: 1rem">
      <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>
    </div>
    `,
    props: {
      ...args,
      formControl: ctrl,
      disableFn: toggleDisableField,
    },
  };
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Field label',
  placeholder: 'This is a placeholder value',
  ngModel: 'textual value',
  description: 'This is a field description',
  type: 'text',
  autocomplete: 'on',
  required: undefined,
  optional: false,
  disabled: false,
  invalid: false,
};

export const WithFormControl = TemplateWithFormControl.bind({});
WithFormControl.args = {
  ...Primary.args,
  invalid: undefined,
  required: undefined,
  optional: undefined,
  valid: undefined,
};

const TemplateWithError: StoryFn<InputComponent & WithExtras> = (args: InputComponent & WithExtras) => ({
  props: { ...args },
});

const TemplateWithCustomLabel: StoryFn<InputComponent & WithExtras> = (args: InputComponent & WithExtras) => ({
  template: /*html*/ `
    <ngv-input [label]="label"
      [disabled]="disabled"
      [invalid]="invalid"
      [required]="required">
      <ng-template #labelTpl>
        <i>{{ customLabelText }}</i>
        <ngv-info-circle [info]="info"></ngv-info-circle>
        <span>{{ text }}</span>
      </ng-template>
    </ngv-input>`,
  props: args,
});

export const WithCustomErrorAndCountdown = TemplateWithError.bind({});
WithCustomErrorAndCountdown.args = {
  ...Primary.args,
  maxlength: 25,
  showCharacterCountdown: true,
  invalid: true,
  error: 'this is an error message',
  badgeText: 'SEB',
};

export const WithCustomError = TemplateWithError.bind({});
WithCustomError.args = {
  ...Primary.args,
  invalid: true,
  error: 'Validation failed on server',
};

export const WithCustomLabel = TemplateWithCustomLabel.bind({});
WithCustomLabel.args = {
  ...Primary.args,
  info: 'Some info regarding the input maybe...',
  text: 'And some more text',
};

const resettime = 3000;
const resetObservable$ = new Observable((subscriber) => {
  setInterval(() => {
    subscriber.next();
  }, resettime);
});

const TemplateWithPrefixAndOrSuffix: StoryFn<InputComponent & WithExtras & any> = (
  args: InputComponent & WithExtras & any,
) => ({
  styles: [`.suffix-prefix-padding{ padding: 0.75em }`],
  template: /*html*/ `
  <h2>Prefix and/or suffix</h2>
  <p>
    Prefix and/or suffix demontrations with simple HTML-elements and with other components.
  </p>
  <hr>
  <ngv-input label="Default"
    type="text"
    description="Default"
    [invalid]="invalid">
  </ngv-input>
  <ngv-input label="Prefix"
    type="text"
    description="Prefix with checkbox"
    [invalid]="invalid">
    <ngv-checkbox
      slot="prefix"
      label="Selected"
      [value]="true">
    </ngv-checkbox>
  </ngv-input>

  <ngv-input label="Suffix"
    type="text"
    description="Suffix with simple text"
    [invalid]="invalid">
    <label slot="suffix" class="suffix-prefix-padding">SEB</label>
  </ngv-input>

  <ngv-input label="Default (suffix)"
    type="text"
    description="Suffix (default placement) with button"
    [invalid]="invalid">
    <ngv-button
      class="suffix-prefix-padding"
      [small]="true"
      type="button">
      SAVE
    </ngv-button>
  </ngv-input>

  <ngv-input label="Large button with no padding (suffix)"
  type="text"
  description="Suffix (default placement) with button without padding"
  [invalid]="invalid">
  <ngv-button
  class="integrated-btn"
    [small]="false"
    type="button"
    [buttonStyle]="2">
    x
  </ngv-button>
</ngv-input>

  <ngv-input label="Prefix and default (suffix)"
    type="number"
    description="Prefix with simple label and suffix (default) with dropdown"
    [invalid]="invalid">
    <label slot="prefix" class="suffix-prefix-padding">Amount:</label>
    <ngv-dropdown
      placeholder="Currency"
      [options]="[
        { key: 'eur', label: 'EUR' },
        { key: 'sek', label: 'SEK' },
        { key: 'usd', label: 'USD' }
      ]">
    </ngv-dropdown>
  </ngv-input>`,
  props: args,
});

export const WithPrefixAndOrSuffix = TemplateWithPrefixAndOrSuffix.bind({});
WithPrefixAndOrSuffix.args = {
  ...Primary.args,
  invalid: false,
};

export const WithResetObservable: StoryFn<InputComponent & WithExtras & any> = (
  _args: InputComponent & WithExtras & any,
) => {
  const formGroup = new UntypedFormGroup({
    resetForm: new UntypedFormControl('Annoying orange'),
  });
  return {
    template: /*html*/ `
    <ng-container [formGroup]="formGroup">
      <ngv-input label="Reset demo"
        type="text"
        formControlName="resetForm"
        [description]="description"
        [defaultValue]="defaultValue"
        [reset]="resetObservable$">
      </ngv-input>
    </ng-container>`,
    props: {
      description: `I will reset every ${resettime}ms`,
      formGroup,
      resetObservable$,
    },
  };
};

export const WithMaxLength: StoryFn<InputComponent & WithExtras & any> = (args: InputComponent & WithExtras & any) => {
  let formGroup = new UntypedFormGroup({
    remittanceInformation: new UntypedFormControl(
      'This is a test of handling if the text is longer than the max length input',
      Validators.maxLength(9),
    ),
  });
  const maxLength$ = of(10);

  formGroup.get('remittanceInformation')?.valueChanges.subscribe((val) => console.log(val));

  const toggleLang = () => {
    const updateLang = translocoServiceInstance.getActiveLang() === 'sv' ? 'en' : 'sv';
    console.log('from:', translocoServiceInstance.getActiveLang(), '=>', updateLang);
    translocoServiceInstance.setActiveLang(updateLang);
  };

  return {
    template: /*html*/ `
    <button (click)="show = !show">Toggle show/hide</button>
    <button (click)="toggleLang()">Toggle lang</button>
    <button (click)="setValue('another long value')">Set form value</button>
    <ng-container [formGroup]="formG">
      <ngv-input *ngIf="show"
        [label]="label"
        [invalid]="invalid"
        [maxLength]="maxLength$ | async"
        formControlName="remittanceInformation"
        >
        <ng-template #labelTpl>
          <i>{{ customLabelText }}</i>
          <ngv-info-circle [info]="info"></ngv-info-circle>
          <span>{{ text }}</span>
        </ng-template>
      </ngv-input>
      <span>value: {{ formG.controls.remittanceInformation.value }}</span>
    </ng-container>`,
    props: {
      ...args,
      description: 'This is a field description',
      maxLength$: maxLength$,
      formG: formGroup,
      setValue: (value: any) => formGroup.controls.remittanceInformation.setValue(value),
      toggleLang: () => toggleLang(),
      show: false,
    },
  };
};

let dateFCValue = '';
let emailFCValue = '';
let currencyFCValue = '';
let phoneFCValue = '';
let licenseFCValue = '';
let ipFCValue = '';

const TemplateWithInputMask: StoryFn<InputComponent & WithExtras & any> = (args: InputComponent & WithExtras & any) => {
  const dateFC = new UntypedFormControl(dateFCValue, [Validators.required]);
  const emailFC = new UntypedFormControl(emailFCValue);
  const currencyFC = new UntypedFormControl(currencyFCValue);
  const phoneFC = new UntypedFormControl(phoneFCValue);
  const licenseFC = new UntypedFormControl(licenseFCValue);
  const ipFC = new UntypedFormControl(ipFCValue);

  const formGroup = new UntypedFormGroup({
    dateFC,
    emailFC,
    currencyFC,
    phoneFC,
    licenseFC,
    ipFC,
  });

  dateFC?.valueChanges.subscribe((val) => (dateFCValue = val));
  emailFC?.valueChanges.subscribe((val) => (emailFCValue = val));
  currencyFC?.valueChanges.subscribe((val) => (currencyFCValue = val));
  phoneFC?.valueChanges.subscribe((val) => (phoneFCValue = val));
  licenseFC?.valueChanges.subscribe((val) => (licenseFCValue = val));
  ipFC?.valueChanges.subscribe((val) => (ipFCValue = val));

  const dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'yyyy-mm-dd',
    parser: (value: string) => {
      const values = value.split('-');
      const year = +values[0];
      const month = +values[1] - 1;
      const day = +values[2];
      return new Date(year, month, day);
    },
  });
  const emailInputMask = createMask({ alias: 'email' });
  const currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 2,
    digitsOptional: false,
    prefix: '$ ',
    placeholder: '0',
    shortcuts: null,
  });
  const phoneMask = createMask('(999) 999-9999');
  const licenseInputMask = createMask('[9-]AAA-999');
  const ipAddressMask = createMask({ alias: 'ip' });

  return {
    template: /*html*/ `
    <div class="container" [formGroup]="formGroup">
      <div class="row">
        <div class="column">
          <h2>Date</h2>
          <ngv-input
            [inputMask]="dateInputMask"
            formControlName="dateFC"
            placeholder="yyyy-mm-dd"
            [locked]="locked">
          </ngv-input>
          <div> Valid: {{ formGroup.controls.dateFC.valid }} </div>
          <div> Value: {{ formGroup.controls.dateFC.value }} </div>
          <div> Errors: {{ formGroup.controls.dateFC.errors | json }} </div>
        </div>

        <div class="column">
          <h2>E-mail</h2>
          <ngv-input
            [inputMask]="emailInputMask"
            formControlName="emailFC"
            placeholder="_@_._"
            [locked]="locked">
          </ngv-input>
          <div> Valid: {{ formGroup.controls.emailFC.valid }} </div>
          <div> Value: {{ formGroup.controls.emailFC.value }} </div>
          <div> Errors: {{ formGroup.controls.emailFC.errors | json }} </div>
        </div>

        <div class="column">
          <h2>Currency</h2>
          <ngv-input
            [inputMask]="currencyInputMask"
            formControlName="currencyFC"
            placeholder="$ 0.00"
            [locked]="locked">
          </ngv-input>
          <div> Valid: {{ formGroup.controls.currencyFC.valid }} </div>
          <div> Value: {{ formGroup.controls.currencyFC.value }} </div>
          <div> Errors: {{ formGroup.controls.currencyFC.errors | json }} </div>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <h2>Phone</h2>
          <ngv-input
            [inputMask]="phoneMask"
            formControlName="phoneFC"
            placeholder="(___) ___-____"
            [locked]="locked">
          </ngv-input>
          <div> Valid: {{ formGroup.controls.phoneFC.valid }} </div>
          <div> Value: {{ formGroup.controls.phoneFC.value }} </div>
          <div> Errors: {{ formGroup.controls.phoneFC.errors | json }} </div>
        </div>

        <div class="column">
          <h2>License</h2>
          <ngv-input
            [inputMask]="licenseInputMask"
            formControlName="licenseFC"
            placeholder="___-___"
            [locked]="locked">
          </ngv-input>
          <div> Valid: {{ formGroup.controls.licenseFC.valid }} </div>
          <div> Value: {{ formGroup.controls.licenseFC.value }} </div>
          <div> Errors: {{ formGroup.controls.licenseFC.errors | json }} </div>
        </div>

        <div class="column">
          <h2>IP address</h2>
          <ngv-input
            [inputMask]="ipAddressMask"
            formControlName="ipFC"
            placeholder="_._._._"
            [locked]="locked">
          </ngv-input>
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
  };
};

export const WithInputMask = TemplateWithInputMask.bind({});
WithInputMask.args = {
  locked: false,
};

export const WithLockedInput = Template.bind({});
WithLockedInput.args = {
  ...Primary.args,
  locked: true,
  description: undefined,
  label: 'Bank charges',
};

export const WithDisplayDisabledAsLocked = TemplateWithFormControl.bind({});
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
};

const TemplateWithTypeAhead: StoryFn<InputComponent & WithExtras> = (args: InputComponent & WithExtras) => {
  const options = [
    { key: 'hej', label: 'Hej' },
    { key: 'tja', label: 'Tja' },
    { key: 'hejsan', label: 'Hejsan' },
    { key: 'tjo', label: 'Tjo' },
    { key: 'tjena', label: 'Tjena' },
  ];
  const searchFunction = (value$: Observable<string>) =>
    value$.pipe(
      debounceTime(100),
      tap((x) => console.log('entered value in input: ', x)),
      map((inputValue) => options.filter((option) => option.key.toUpperCase().includes(inputValue.toUpperCase()))),
    );
  return {
    template: /*html*/ `
      <ngv-input class="toggle"
        [label]="label"
        [ngvTypeahead]="searchFunction"
        [resultFormatter]="resultFormatter"
        [selectedFormatter]="selectedFormatter"
        [autocomplete]="'off'">
      </ngv-input>
    `,
    styles: [
      /*css*/ `
      ngv-dropdown-list {
        width: 100%;
      }
    `,
    ],
    props: {
      ...args,
      searchFunction: searchFunction,
      selectedFormatter: (value: { key: string; label: string }) => value.label.toUpperCase(),
    },
  };
};

export const WithTypeAhead = TemplateWithTypeAhead.bind({});
WithTypeAhead.args = {
  ...Primary.args,
};
