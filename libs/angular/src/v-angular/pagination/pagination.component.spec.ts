import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'

import { NggCoreWrapperModule } from '../../lib/shared'
import { NggvI18nTestModule } from '../i18n'
import { PaginationComponent } from './pagination.component'

@Component({
    selector: 'nggv-pagination-test',
    template: `
    <nggv-pagination
      [value]="value"
      [className]="className"
      (pageNumberChange)="setPagination($event)"
      [size]="size"
      [offset]="offset"
      [useDotNav]="useDotNav"
      [pagingLength]="pagingLength"
      [useTextNav]="useTextNav"
      [firstText]="firstText"
      [lastText]="lastText"
      [nextText]="nextText"
      [useFirstAndLast]="useFirstAndLast"
      [previousText]="previousText"
    ></nggv-pagination>
  `,
    standalone: false
})
class PaginationTestComponent {
  size = 60
  value = 0

  className?: string
  firstText?: string
  id?: string
  lastText?: string
  nextText?: string
  offset?: number = 6
  pagingLength?: number = 7
  previousText?: string

  useDotNav?: boolean
  useFirstAndLast?: boolean
  useTextNav?: boolean

  setPagination(value: number): void {
    this.value = value
  }
}

describe('[NggvPagination]', () => {
  let component: PaginationTestComponent
  let fixture: ComponentFixture<PaginationTestComponent>

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent, PaginationTestComponent],
      imports: [FormsModule, NggvI18nTestModule, NggCoreWrapperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationTestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  it('should render in both number and dot navigation modes', () => {
    expect(component).toBeDefined()

    fixture.detectChanges()

    expect(fixture.debugElement.query(By.css('.pagination'))).toBeTruthy()
    component.useDotNav = true
    fixture.detectChanges()
    expect(fixture.debugElement.query(By.css('.dotnav'))).toBeTruthy()
    component.useDotNav = false
    fixture.detectChanges()
    expect(fixture.debugElement.query(By.css('.pagination'))).toBeTruthy()
  })

  it('should pass custom class and id', () => {
    const className = 'myPaginationClass'
    const id = 'myPaginationId'
    component.className = className
    component.id = id
    fixture.detectChanges()
    expect(fixture.debugElement.query(By.css(`.${className}`))).toBeTruthy()
    expect(fixture.debugElement.queryAll(By.css(`#${id}`))).toBeTruthy()
  })

  it('should render with custom page length', () => {
    component.pagingLength = 3
    fixture.detectChanges()
    expect(fixture.debugElement.queryAll(By.css('.page-item')).length).toBe(5) // include next and previous (3+2)
  })

  describe('should render with text navigation', () => {
    beforeEach(() => {
      component.useTextNav = true
      component.useFirstAndLast = false
      component.value = 4
      fixture.detectChanges()
    })

    it('should render default texts values if not passed as input', () => {
      expect(
        fixture.debugElement
          .query(By.css('.nav-action'))
          .nativeElement.textContent.trim(),
      ).toEqual('Previous')
      expect(
        fixture.debugElement
          .queryAll(By.css('.nav-action'))[1]
          .nativeElement.textContent.trim(),
      ).toEqual('Next')
    })

    it('should render passed text values', () => {
      component.previousText = 'previousItem'
      component.nextText = 'nextItem'
      fixture.detectChanges()
      expect(
        fixture.debugElement
          .query(By.css('.nav-action'))
          .nativeElement.textContent.trim(),
      ).toEqual('previousItem')
      expect(
        fixture.debugElement
          .queryAll(By.css('.nav-action'))[1]
          .nativeElement.textContent.trim(),
      ).toEqual('nextItem')
    })
  })

  describe('should trigger page number change when page navigation occured', () => {
    let spy: jest.SpyInstance

    beforeEach(() => {
      spy = jest.spyOn(component, 'setPagination')
    })

    it('number navigation', () => {
      component.useFirstAndLast = true
      component.offset = 5
      component.offset = 6
      component.value = 3 // To cover all navigation options
      fixture.detectChanges()
      fixture.debugElement
        .query(By.css('.page-item'))
        .nativeElement.dispatchEvent(new Event('click')) // First Button
      fixture.debugElement
        .queryAll(By.css('.page-item'))[1]
        .nativeElement.dispatchEvent(new Event('click')) // Previous Button
      fixture.debugElement
        .queryAll(By.css('.page-item'))[6]
        .nativeElement.dispatchEvent(new Event('click')) // Next Button
      fixture.debugElement
        .queryAll(By.css('.page-item'))[10]
        .nativeElement.dispatchEvent(new Event('click')) // Last Button
      fixture.debugElement
        .queryAll(By.css('.page-item'))[3]
        .nativeElement.dispatchEvent(new Event('click')) // Number button

      expect(spy).toHaveBeenCalledTimes(5)
    })

    it('dot navigation', () => {
      component.useDotNav = true
      fixture.detectChanges()
      fixture.debugElement
        .queryAll(By.css('.page-item'))[4]
        .nativeElement.dispatchEvent(new Event('click')) // Navigate to any dot
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('pages rendering with first and last navigation buttons', () => {
    beforeEach(() => {
      component.useTextNav = true
      component.useFirstAndLast = true
      component.pagingLength = 5
      component.value = 1
    })

    const parameters = [
      {
        description: 'when 1 page of data should render one page button',
        size: 20,
        offset: 20,
        value: 1,
        buttons: ['1'],
      },
      {
        description: 'when 2 pages of data should render 2 page buttons',
        size: 40,
        offset: 20,
        value: 1,
        buttons: ['1', '2'],
      },
      {
        description: 'when 3 pages of data should render 3 page buttons',
        size: 60,
        offset: 20,
        value: 1,
        buttons: ['1', '2', '3'],
      },
      {
        description: 'when 4 pages of data should render 4 page buttons',
        size: 80,
        offset: 20,
        value: 1,
        buttons: ['1', '2', '3', '4'],
      },
      {
        description: 'when 5 pages of data should render 5 page buttons',
        size: 100,
        offset: 20,
        value: 1,
        buttons: ['1', '2', '3', '4', '5'],
      },
      {
        description: 'when 6 pages of data should render 6 page buttons',
        size: 120,
        offset: 20,
        value: 1,
        buttons: ['1', '2', '3', '4', '5', '6'],
      },
      {
        description: 'when 7 pages of data should render 7 page buttons',
        size: 140,
        offset: 20,
        value: 1,
        buttons: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        description: 'when 8 pages of data should render 7 page buttons',
        size: 160,
        offset: 20,
        value: 1,
        buttons: ['1', '2', '3', '4', '5', '6', '...', '8'],
      },
      {
        description: 'when 9 pages of data should render 7 page buttons',
        size: 180,
        offset: 20,
        value: 1,
        buttons: ['1', '2', '3', '4', '5', '6', '...', '9'],
      },
      {
        description:
          'when 9 pages of data and active page is 7, should render 7 page buttons',
        size: 180,
        offset: 20,
        value: 7,
        buttons: ['1', '...', '4', '5', '6', '7', '8', '9'],
      },
      {
        description:
          'when 9 pages of data and active page is 5, should render 7 page buttons',
        size: 180,
        offset: 20,
        value: 5,
        buttons: ['1', '...', '3', '4', '5', '6', '7', '...', '9'],
      },
    ]
    parameters.forEach((parameter) => {
      it(parameter.description, () => {
        component.size = parameter.size
        component.offset = parameter.offset
        component.value = parameter.value
        fixture.detectChanges()

        const buttonTextElements = fixture.debugElement.queryAll(
          By.css('li.page-item span.nav-num'),
        )
        const buttonTexts = buttonTextElements.map((e) =>
          (e.nativeElement.textContent as string).trim(),
        )
        expect(buttonTexts).toEqual(parameter.buttons)

        const activeButtonText = fixture.debugElement
          .query(By.css('button.page-link.active > span.nav-num'))
          .nativeElement.textContent.trim() as string
        expect(Number(activeButtonText)).toEqual(parameter.value)
      })
    })
  })

  describe('should emit correct page change number on user input', () => {
    let spy: jest.SpyInstance

    beforeEach(() => {
      component.size = 10
      component.offset = 1
      component.value = 1
      spy = jest.spyOn(component, 'setPagination')
    })

    const testCases = [
      {
        description: 'emits 10 (max) on user input 11',
        userInput: '11',
        expectedPageChange: 10,
      },
      {
        description: 'emits 2 on user input 2',
        userInput: '2',
        expectedPageChange: 2,
      },
      {
        description: 'emits 1 (min) on negative input -1',
        userInput: '-1',
        expectedPageChange: 1,
      },
      {
        description: 'emits 1 (min) on input 0',
        userInput: '0',
        expectedPageChange: 1,
      },
    ]

    testCases.forEach((testCase) => {
      it(testCase.description, () => {
        fixture.detectChanges()

        const debugElement = fixture.debugElement.query(By.css('#pageInput'))
        const inputElement = debugElement.nativeElement as HTMLInputElement

        inputElement.value = testCase.userInput
        debugElement.triggerEventHandler('keydown.enter', {})

        expect(spy).toHaveBeenCalledWith(testCase.expectedPageChange)
      })
    })
  })
})
