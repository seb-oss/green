import { Directive } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvDropdownListComponent } from './dropdown-list.component'

@Directive({
    selector: '[nggvTooltip]',
    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
    inputs: [
        'nggvTooltip',
        'thook',
        'placement',
        'shown',
        'offset',
        'resizeThrottle',
    ],
    standalone: false
})
class TooltipStubDirective {}

describe('DropdownListComponent', () => {
  let component: NggvDropdownListComponent
  let fixture: ComponentFixture<NggvDropdownListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NggvDropdownListComponent, TooltipStubDirective],
      imports: [NggvI18nModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NggvDropdownListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('getActiveIndex()', () => {
    const optionsWithNullish = [
      { key: null, label: 'placeholder' },
      { key: 'key1', label: 'la1' },
      { key: 'key2', label: 'la2' },
      { key: 'key3', label: 'la3' },
    ]
    const optionsWithoutNullish = [
      { key: 'key1', label: 'la1' },
      { key: 'key2', label: 'la2' },
      { key: 'key3', label: 'la3' },
    ]
    it.each`
      selected                    | options                                                         | expectedIndex
      ${undefined}                | ${optionsWithNullish}                                           | ${1}
      ${undefined}                | ${optionsWithoutNullish}                                        | ${0}
      ${{ key: null }}            | ${optionsWithNullish}                                           | ${1}
      ${{ key: null }}            | ${optionsWithoutNullish}                                        | ${0}
      ${{ key: 'key1' }}          | ${optionsWithNullish}                                           | ${1}
      ${{ key: 'key1' }}          | ${optionsWithoutNullish}                                        | ${0}
      ${{ key: 'key2' }}          | ${optionsWithNullish}                                           | ${2}
      ${{ key: 'key2' }}          | ${optionsWithoutNullish}                                        | ${1}
      ${{ key: 'notExisting!!' }} | ${optionsWithNullish}                                           | ${1}
      ${{ key: 'notExisting!!' }} | ${optionsWithoutNullish}                                        | ${0}
      ${undefined}                | ${[]}                                                           | ${-1}
      ${undefined}                | ${[]}                                                           | ${-1}
      ${{ key: null }}            | ${[]}                                                           | ${-1}
      ${{ key: null }}            | ${[]}                                                           | ${-1}
      ${{ key: 'key1' }}          | ${[]}                                                           | ${-1}
      ${{ key: 'key1' }}          | ${[]}                                                           | ${-1}
      ${{ key: 'notExisting!!' }} | ${[]}                                                           | ${-1}
      ${{ key: 'notExisting!!' }} | ${[]}                                                           | ${-1}
      ${undefined}                | ${[{ key: null, label: 'placeholder' }, { label: 'zonkey?!' }]} | ${-1}
      ${undefined}                | ${[{ key: null, label: 'placeholder' }, { label: 'zonkey?!' }]} | ${-1}
      ${{ key: null }}            | ${[{ key: null, label: 'placeholder' }, { label: 'zonkey?!' }]} | ${-1}
      ${{ key: null }}            | ${[{ key: null, label: 'placeholder' }, { label: 'zonkey?!' }]} | ${-1}
      ${{ key: 'key1' }}          | ${[{ key: null, label: 'placeholder' }, { label: 'zonkey?!' }]} | ${-1}
      ${{ key: 'key1' }}          | ${[{ key: null, label: 'placeholder' }, { label: 'zonkey?!' }]} | ${-1}
      ${{ key: 'notExisting!!' }} | ${[{ key: null, label: 'placeholder' }, { label: 'zonkey?!' }]} | ${-1}
      ${{ key: 'notExisting!!' }} | ${[{ key: null, label: 'placeholder' }, { label: 'zonkey?!' }]} | ${-1}
    `(
      '$selected and $options returns index: $expectedIndex',
      ({ selected, options, expectedIndex }) => {
        component.options = options
        component.selectedValue = selected
        component.refreshSelectedOption()
        const expected = component.getActiveIndex()
        expect(expected).toEqual(expectedIndex)
      },
    )
  })
})
