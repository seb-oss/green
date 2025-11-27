import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
  NggCoreRendererFactory,
  provideCoreRenderer,
  provideCoreRendererWithAnimations,
} from './core-renderer'

@Component({
    template: '<gds-button></gds-button>',
    standalone: false
})
class TestComponent {}

jest.mock('@sebgroup/green-core/scoping', () => ({
  getScopedTagName: jest.fn((name) => name + '-scoped'),
}))

describe('NggCoreRenderer', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideCoreRenderer()],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create an element with the scoped tag name', () => {
    expect(parent.querySelector('gds-button-scoped')).toBeTruthy()
  })
})

describe('NggCoreRenderer (with animations)', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [TestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideCoreRendererWithAnimations()],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create an element with the scoped tag name', () => {
    expect(parent.querySelector('gds-button-scoped')).toBeTruthy()
  })
})

describe('NggCoreRenderer with scope resolver', () => {
  let component: TestComponent
  let parent: HTMLElement

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideCoreRenderer((t: string) => 'test-tag')],
    })
    const fixture = TestBed.createComponent(TestComponent)
    parent = fixture.debugElement.nativeElement
    fixture.detectChanges()
  })

  it('should create an element with the scoped tag name', () => {
    expect(parent.querySelector('test-tag')).toBeTruthy()
  })
})
