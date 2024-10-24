import { CommonModule } from '@angular/common'
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'
import { debounceTime, map, Observable } from 'rxjs'

import { CharacterCountdownDirective } from '../character-countdown/character-countdown.directive'
import { DropdownUtils, Option } from '../core/core.utils'
import { NgvI18nModule } from '../i18n/i18n.module'
import { NgvInputComponent } from '../input/input.component'
import { NgvTooltipDirective } from '../tooltip/tooltip.directive'
import { NgvDropdownListComponent } from './dropdown-list/dropdown-list.component'
import { NgvDropdownComponent } from './dropdown.component'
import { NgvTypeaheadHighlightComponent } from './typeahead/typeahead-highlight/typeahead-highlight.component'
import { NgvTypeaheadInputComponent } from './typeahead/typeahead-input/typeahead-input.component'
import { NgvTypeaheadDirective } from './typeahead/typeahead.directive'

interface WithExtras {
  ngModel: string
  toggleOptions: any
  getOptions: any
}

interface ExtendedOption<K, V> extends Option<K, V> {
  accountNumber?: string
  key: K
  label: V
}

export default {
  title: 'V-Angular/Dropdown',
  component: NgvDropdownComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgvI18nModule), DropdownUtils],
    }),
    moduleMetadata({
      declarations: [
        NgvDropdownListComponent,
        NgvInputComponent,
        NgvTypeaheadInputComponent,
        NgvTypeaheadHighlightComponent,
        NgvTooltipDirective,
        CharacterCountdownDirective,
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgvI18nModule,
        NgvTypeaheadDirective,
      ],
    }),
  ],
} as Meta

const options = [
  { key: 'opt1', label: 'label.defaultlabel', accountNumber: '345345' },
  { key: 'opt6', label: 'HÖR LUR TJO HEJ KOTLETT' },
  { key: 'opt2', label: 'Option 2' },
  { key: 'opt3', label: 'Option 3', disabled: true },
  { key: 'opt4', label: 'Option 4' },
  {
    key: 'opt5',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    label: 'Group',
    options: [
      { key: 'group-opt1', label: null, accountNumber: '3453245' },
      { key: 'group-opt2', label: 'Option 2' },
      { key: 'group-opt3', label: 'Option 3' },
      { key: 'group-opt4', label: 'Option 4' },
    ],
  },
]

type StoryArgs = NgvDropdownComponent<
  string,
  string | null,
  ExtendedOption<string, string | null>
> &
  WithExtras

const Template: StoryFn<NgvDropdownComponent> = (args: any) => {
  const ctrl = new UntypedFormControl(args.ngModel)
  ctrl.valueChanges.subscribe(console.log)
  const toggleDisableField = () => {
    if (ctrl.disabled) return ctrl.enable()
    ctrl.disable()
  }
  return {
    template: /*html*/ `
      <div style="width: 264px">
        <nggv-dropdown
          [label]="label"
          [placeholder]="placeholder"
          [description]="description | transloco"
          [options]="options"
          [required]="required"
          [invalid]="invalid"
          [error]="error"
          style="width: 264px"
          [formControl]="formControl"
          [locked]="locked"
          [displayDisabledAsLocked]="displayDisabledAsLocked">

          <ng-template #labelTpl>Custom Label</ng-template>

          <ng-template let-option #optionTpl>{{option.label | transloco}} {{option.accountNumber}}</ng-template>

        </nggv-dropdown>

        <div style="margin-top: 1rem">
          <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>
        </div>
      </div>`,
    props: {
      ...args,
      formControl: ctrl,
      disableFn: toggleDisableField,
    },
  }
}

const DisabledTemplate: StoryFn<StoryArgs> = (args: any) => {
  const formControl = new UntypedFormControl({ value: '' })
  return {
    template: /*html*/ `
  <div style="width: 264px">
    <nggv-dropdown
      [label]="label"
      [placeholder]="placeholder"
      [options]="options"
      [required]="required"
      [invalid]="invalid"
      [disabled]="disabled"
      [error]="error"
      style="width: 264px"
      [formControl]="formControl">

      <ng-template #labelTpl>Custom Label</ng-template>

      <ng-template let-option #optionTpl>{{option.label | transloco}} {{option.accountNumber}}</ng-template>

    </nggv-dropdown>
  </div>`,
    props: { ...args, formControl },
  }
}

const AltTemplate: StoryFn<StoryArgs> = (args: any) => {
  const dropdownFc = new UntypedFormControl()
  dropdownFc.valueChanges.subscribe((value) => {
    console.log({ value })
  })
  const showAlt = false
  const optionsAlt = [
    { key: 'opt7', label: 'Option 7' },
    { key: 'opt8', label: 'Option 8' },
    { key: 'opt9', label: 'Option 9' },
  ]
  args.options = showAlt ? optionsAlt : options

  const reset = () => {
    dropdownFc.reset('opt4')
  }

  return {
    template: /*html*/ `
      <div style="width: 264px">
        <div style="display: flex">
          <button class="sdv-button" (click)="showAlt = !showAlt">Change options</button>
          <button class="sdv-button sdv-button-alternative" (click)="resetFunc()">Reset to default</button>
        </div>
        <div>Value: {{ formControl.value }}</div>
        <nggv-dropdown
          [label]="label"
          [placeholder]="placeholder"
          [options]="options"
          [required]="required"
          style="width: 264px"
          [formControl]="formControl">

          <ng-template #labelTpl>Custom Label</ng-template>

          <ng-template let-option #optionTpl>{{option.label | transloco}} {{option.accountNumber}}</ng-template>

        </nggv-dropdown>
      </div>`,
    props: {
      ...args,
      showAlt: showAlt,
      formControl: dropdownFc,
      resetFunc: reset,
    },
  }
}

const CustomSelectedTemplate: StoryFn<StoryArgs> = (args: any) => {
  const accounts = [
    {
      key: 'se50000000001',
      label: null,
      accountNumber: '5000 00 000 01',
      accountName: 'Savings account',
      balance: 1000,
      currency: 'SEK',
    },
    {
      key: 'se50000000002',
      label: null,
      accountNumber: '5000 00 000 02',
      accountName: 'Foreign account',
      balance: 100.5,
      currency: 'USD',
    },
    {
      key: 'se50000000003',
      label: null,
      accountNumber: '5000 00 000 03',
      accountName: 'Account with a really long name',
      balance: 2000,
      currency: 'SEK',
    },
    {
      key: 'se50000000004',
      label: null,
      accountNumber: '5000 00 000 04',
      accountName: 'Euro account with €€€',
      balance: 100000000000.5,
      currency: 'EUR',
    },
  ]
  const fc = new UntypedFormControl()
  const toggleDisableField = () => {
    if (fc.disabled) return fc.enable()
    fc.disable()
  }
  return {
    template: /*html*/ `
      <nggv-dropdown
        [label]="label"
        [placeholder]="placeholder"
        [options]="options"
        [required]="true"
        [formControl]="formControl"
        [locked]="locked"
        [displayDisabledAsLocked]="displayDisabledAsLocked">
        <ng-template let-selected #selectedTpl>
          <div *ngIf="selected?.key" class="account-option">
            <div class="account-option--label" style="font-weight: 500;">
              <div>{{ selected?.accountName }}</div>
              <div>{{ selected?.balance | number: '1.2-2':locale }} {{ selected?.currency }}</div>
            </div>
            <div class="account-option--number">
              <div>{{ selected?.accountNumber }}</div>
              <div>Available amount</div>
            </div>
          </div>
          <div *ngIf="!selected?.key" class="account-option" style="color: gray;">Select one</div>
        </ng-template>
        <ng-template let-option #optionTpl>
          <div class="account-option">
            <div class="account-option--label">
              <div>{{ option?.accountName }}</div>
              <div>{{ option?.balance | number: '1.2-2':locale }} {{ option?.currency }}</div>
            </div>
            <div class="account-option--number">
              <div>{{ option?.accountNumber }}</div>
              <div></div>
            </div>
          </div>
        </ng-template>

      </nggv-dropdown>
      <div style="margin-top: 1rem">
        <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>
      </div>
      `,
    styles: [
      `
      ::ng-deep.nggv-field-dropdown__label::before {
        margin: 0.5rem 0;
      }
      .account-option {
        margin: 0.5rem 0;
        padding-right: 0.5rem;
        width: 350px;
      }
      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='false']:hover .account-option--number,
      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='true']:hover .account-option--number,
      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='true'] .account-option--number {
        color: white;
      }
      .account-option--number,
      .account-option--label {
        padding-bottom: 0.25em;
      }
      .account-option--label {
        display: flex;
      }
      .account-option--number {
        line-height: 1;
        font-size: 0.875em;
        display: flex;
        color: gray;
      }
      .account-option--label > * {
        line-height: 1.5rem;
      }
      .account-option--number > *:first-child,
      .account-option--label > *:first-child {
        flex-grow: 2;
        // flex-basis: 40%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .account-option--number > *:last-child,
      .account-option--label > *:last-child {
        flex-grow: 3;
        display: flex;
        justify-content: flex-end;
      }`,
    ],
    props: {
      ...args,
      formControl: fc,
      options: accounts,
      disableFn: toggleDisableField,
    },
  }
}

const CustomSelectedTemplateTypeahead: StoryFn<StoryArgs> = (args: any) => {
  let filterPhrase = ''
  const accounts = [
    {
      key: 'se50000000001',
      label: null,
      accountNumber: '5000 00 000 01',
      accountName: 'Savings account 2',
      balance: 1000,
      currency: 'SEK',
    },
    {
      key: 'se50000000002',
      label: null,
      accountNumber: '5000 00 000 02',
      accountName: 'Foreign account 03',
      balance: 100.5,
      currency: 'USD',
    },
    {
      key: 'se50000000003',
      label: null,
      accountNumber: '5000 00 000 03',
      accountName: 'Account with a really long name',
      balance: 2000,
      currency: 'SEK',
    },
    {
      key: 'se50000000004',
      label: null,
      accountNumber: '5000 00 000 04',
      accountName: 'Euro account with €€€',
      balance: 100000000000.5,
      currency: 'EUR',
    },
  ]
  const fc = new UntypedFormControl()
  const toggleDisableField = () => {
    if (fc.disabled) return fc.enable()
    fc.disable()
  }
  const searchFunction = (value$: Observable<string>) =>
    value$.pipe(
      debounceTime(150),
      map((inputValue) =>
        accounts.filter(
          (option: { accountNumber: string; accountName: string }) =>
            option.accountName
              ?.toUpperCase()
              .includes(inputValue?.toUpperCase()) ||
            option.accountNumber?.replace(/\s/, '').includes(inputValue),
        ),
      ),
    )
  const handlefilterPhraseChange = (event: any) => {
    filterPhrase = event
  }

  function getFilterPhrase(): string {
    return filterPhrase
  }

  return {
    template: /*html*/ `
    Value: {{ formControl.value }}
    Filter: {{ getFilterPhrase() }}
      <nggv-dropdown
        [label]="label"
        [placeholder]="placeholder"
        [options]="options"
        [required]="true"
        [formControl]="formControl"
        [locked]="locked"
        [displayDisabledAsLocked]="displayDisabledAsLocked"
        [nggvTypeahead]="searchFunction"
        [selectedFormatter]="selectedFormatter"
        [resultFormatter]="resultFormatter"
        [allowUnselect]="true"
        [unselectLabel]="unselectLabel"
        (filterPhraseChange)="handlefilterPhraseChange($event)">

        <ng-template let-selected #selectedTpl>
          <div *ngIf="!!selected?.key" class="account-option">
            <div class="account-option--label" style="font-weight: 500;">
              <div>{{ selected?.accountName }}</div>
              <div>{{ selected?.balance | number: '1.2-2':locale }} {{ selected?.currency }}</div>
            </div>
            <div class="account-option--number">
              <div>{{ selected?.accountNumber }}</div>
              <div>Available amount</div>
            </div>
          </div>
          <div *ngIf="!selected?.key" class="account-option" style="color: gray;">Select one</div>
        </ng-template>

        <ng-template let-option #optionTpl>
          <div *ngIf="!option.key">
            {{ (option?.label | transloco) || 'None' }}
          </div>
          <div class="account-option" *ngIf="!!option.key">
            <div class="account-option--label">
              <div>
                <nggv-typeahead-highlight [textContent]="option?.accountName" [textToHighlight]="getFilterPhrase()">
                </nggv-typeahead-highlight>
              </div>

              <div>{{ option?.balance | number: '1.2-2':locale }} {{ option?.currency }}</div>
            </div>
            <div class="account-option--number">
              <div>
                <nggv-typeahead-highlight [textContent]="option?.accountNumber" [textToHighlight]="getFilterPhrase()">
                </nggv-typeahead-highlight></div>
              <div></div>
            </div>
          </div>
        </ng-template>

      </nggv-dropdown>
      <div style="margin-top: 1rem">
        <button type="button" class="sdv-button" (click)="disableFn()">Toggle disable control</button>
      </div>
      `,
    styles: [
      `
      ::ng-deep.nggv-field-dropdown__label::before {
        margin: 0.5rem 0;
      }
      .account-option {
        margin: 0.5rem 0;
        padding-right: 0.5rem;
        width: 350px;
      }
      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='false']:hover .account-option--number,
      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='true']:hover .account-option--number,
      ::ng-deep.sdv-field-dropdown__options__label[aria-selected='true'] .account-option--number {
        color: white;
      }
      .account-option--number,
      .account-option--label {
        padding-bottom: 0.25em;
      }
      .account-option--label {
        display: flex;
      }
      .account-option--number {
        line-height: 1;
        font-size: 0.875em;
        display: flex;
        color: gray;
      }
      .account-option--label > * {
        line-height: 1.5rem;
      }
      .account-option--number > *:first-child,
      .account-option--label > *:first-child {
        flex-grow: 2;
        // flex-basis: 40%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .account-option--number > *:last-child,
      .account-option--label > *:last-child {
        flex-grow: 3;
        display: flex;
        justify-content: flex-end;
      }`,
    ],
    props: {
      ...args,
      formControl: fc,
      options: accounts,
      unselectLabel: 'Unselect',
      disableFn: toggleDisableField,
      searchFunction: searchFunction,
      getFilterPhrase: getFilterPhrase,
      handlefilterPhraseChange: handlefilterPhraseChange,
      selectedFormatter: (account: {
        key: string
        label: string
        accountNumber: string
        accountName: string
        balance: number
        currency: string
      }) => account?.accountName,
    },
  }
}

const ComboTemplate: StoryFn<StoryArgs> = (args: any) => {
  const ctrl = new UntypedFormControl(args.ngModel)
  ctrl.valueChanges.subscribe(console.log)
  return {
    template: /*html*/ `
      <div style="display: flex">
        <nggv-dropdown
          label="Dropdown"
          [placeholder]="placeholder"
          [options]="options"
          [required]="true"
          [invalid]="true"
          error="This is a permanent error"
          style="width: 264px"
          [formControl]="formControl">
        </nggv-dropdown>
        <nggv-input
          label="Input"
          [placeholder]="placeholder"
          [required]="true"
          style="margin-left: 0.25rem; width: 264px"
          [formControl]="formControl">
        </nggv-input>
      </div>`,
    props: {
      ...args,
      formControl: ctrl,
    },
  }
}

const defaultArgs = {
  required: false,
  invalid: false,
  label: 'Field label',
  placeholder: 'Placeholder text',
  description: 'This. Is. A. Description.',
  ngModel: 'opt2',
  options,
} as StoryArgs

export const Primary = Template.bind({}) as any
Primary.args = {
  ...defaultArgs,
}

export const Disabled = DisabledTemplate.bind({}) as any
Disabled.args = {
  ...defaultArgs,
  disabled: true,
}
export const WithError = Template.bind({}) as any
WithError.args = {
  ...defaultArgs,
  invalid: true,
  error: 'Error message',
}

export const ComboWithInput = ComboTemplate.bind({}) as any
ComboWithInput.args = { ...defaultArgs }

export const WithOptionToggle = AltTemplate.bind({}) as any
WithOptionToggle.args = {
  ...defaultArgs,
  ngModel: 'opt2',
  options,
}

export const WithCustomSelectedTemplate = CustomSelectedTemplate.bind({}) as any
WithCustomSelectedTemplate.args = {
  ...defaultArgs,
  label: 'Account selector',
  locked: false,
  displayDisabledAsLocked: true,
}

export const WithCustomSelectedTemplateTypeahead =
  CustomSelectedTemplateTypeahead.bind({}) as any
WithCustomSelectedTemplateTypeahead.args = {
  ...defaultArgs,
  label: 'Account selector',
  locked: false,
  displayDisabledAsLocked: true,
}

export const WithLockedInput = Template.bind({})
WithLockedInput.args = {
  ...Primary.args,
  ngModel: 'opt2',
  locked: true,
  description: undefined,
}

export const WithDisplayDisabledAsLocked = Template.bind({})
WithDisplayDisabledAsLocked.args = {
  ...Primary.args,
  locked: false,
  description: undefined,
  displayDisabledAsLocked: true,
}

const TypeaheadTemplate: StoryFn<StoryArgs> = (args: any) => {
  const ctrl = new UntypedFormControl()
  ctrl.valueChanges.subscribe(console.log)
  return {
    template: /*html*/ `
    Value: {{ formControl.value }}
    <div style="width: 264px; display:">
        <nggv-dropdown
          [label]="label"
          [formControl]="formControl"
          [placeholder]="placeholder"
          [description]="description | transloco"
          [required]="required"
          [invalid]="invalid"
          [error]="error"
          style="width: 264px"
          #dropdownElement
          [options]="options"
          [allowUnselect]="allowUnselect"
          [unselectLabel]="unselectLabel"
          [nggvTypeahead]="searchFunction"
          [resultFormatter]="resultFormatter"
          [selectedFormatter]="selectedFormatter">

          <ng-template #labelTpl>Custom Label</ng-template>

        </nggv-dropdown>
      </div>`,
    /*css*/
    styles: [``],
    props: {
      ...args,
      formControl: ctrl,
      placeholder: 'Choose',
      allowUnselect: true,
      unselectLabel: 'Unselect',
      searchFunction: (value$: Observable<string>) =>
        value$.pipe(
          debounceTime(300),
          map((inputValue) =>
            options.filter((option: any) =>
              option.label
                ?.replace(/\s/gm, '')
                .toLocaleLowerCase()
                .includes(inputValue?.replace(/\s/gm, '').toLocaleLowerCase()),
            ),
          ),
        ),
    },
  }
}
export const WithTypeAhead = TypeaheadTemplate.bind({}) as any
WithTypeAhead.args = {
  ...defaultArgs,
}
