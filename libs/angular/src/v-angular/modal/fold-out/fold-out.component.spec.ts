import { ElementRef } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { NggvFoldOutComponent } from './fold-out.component'

describe('[NggvModal]', () => {
  // ----------------------------------------------------------------------------
  // FoldOutComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('FoldOutComponent - constructor()', () => {
    let component: NggvFoldOutComponent
    let fixture: ComponentFixture<NggvFoldOutComponent>
    const element = document.createElement('div')
    element.appendChild(document.createElement('div'))
    element.appendChild(document.createElement('div'))
    element.appendChild(document.createElement('div'))
    const container = new ElementRef(element)

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvFoldOutComponent],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NggvFoldOutComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })

    it('has children', () => {
      component.container = container
      expect((component as any).children.length > 0).toBeTruthy()
    })

    it('has attributes if has children', () => {
      component.container = container
      component.ngAfterViewInit()
      ;((component as any).children as HTMLElement[]).every((x) => {
        expect(x instanceof HTMLElement).toBeTruthy()
        expect(x.hasAttribute('aria-focus')).toBeTruthy()
      })
    })

    describe('toggleVisibility', () => {
      it('calls setVisibility method', () => {
        const setVisibilitySpy = jest.spyOn(component, 'setVisibility')
        component.toggleVisibility()
        expect(setVisibilitySpy).toHaveBeenCalled()
      })
    })

    describe('setVisibility', () => {
      it('calls `resetChildren` method', () => {
        const resetChildrenSpy = jest.spyOn(component as any, 'resetChildren')
        component.setVisibility()
        expect(resetChildrenSpy).toHaveBeenCalled()
      })

      it('subscribes to click and keydown events if menu expanded', () => {
        const keyDownSpy = jest.spyOn(
          component as any,
          'subscribeToKeyDownEvent',
        )
        const clickSpy = jest.spyOn(
          component as any,
          'subscribeToOutsideClickEvent',
        )
        component.setVisibility(true)
        expect(keyDownSpy).toHaveBeenCalled()
        expect(clickSpy).toHaveBeenCalled()
      })

      it('not subscribes to click and keydown events if menu collapsed', () => {
        const keyDownSpy = jest.spyOn(
          component as any,
          'subscribeToKeyDownEvent',
        )
        const clickSpy = jest.spyOn(
          component as any,
          'subscribeToOutsideClickEvent',
        )
        component.setVisibility(false)
        expect(keyDownSpy).not.toHaveBeenCalled()
        expect(clickSpy).not.toHaveBeenCalled()
      })

      it('not subscribes to click and keydown events if method were called with same parameter value as `shown`', () => {
        ;(component as any).shown = true
        const keyDownSpy = jest.spyOn(
          component as any,
          'subscribeToKeyDownEvent',
        )
        const clickSpy = jest.spyOn(
          component as any,
          'subscribeToOutsideClickEvent',
        )
        component.setVisibility(true)
        expect(keyDownSpy).not.toHaveBeenCalled()
        expect(clickSpy).not.toHaveBeenCalled()
      })

      it('should get the actionEmitter to emit', () => {
        const spy = jest.spyOn((component as any).actionEmitter, 'emit')
        ;(component as any).shown = true
        const nativeElement = fixture.nativeElement
        const optionContainer = nativeElement.querySelector(
          '.nggv-fold-out__popover',
        )
        optionContainer.dispatchEvent(new Event('click'))

        expect(spy).toHaveBeenCalled()
      })
    })

    describe('subscribeToKeyDownEvent', () => {
      it('subscribes to events if there are child elements', () => {
        component.container = container
        ;(component as any).subscribeToKeyDownEvent()
        expect((component as any).onKeyUpSubscription).toBeTruthy()
      })

      it('not subscribes to events if there are no child elements', () => {
        ;(component as any).subscribeToKeyDownEvent()
        expect((component as any).onKeyUpSubscription).toBeFalsy()
      })
    })

    describe('handleArrowUpClick', () => {
      it('sets `activeIndex` value to latest child index if `firstArrowClick` is true', () => {
        component.container = container
        ;(component as any).handleArrowUpClick()
        expect((component as any).activeIndex).toEqual(
          (component as any).children.length - 1,
        )
      })

      it('decreases `activeIndex` value if `firstArrowClick` is false', () => {
        component.container = container
        ;(component as any).firstArrowClick = false
        ;(component as any).activeIndex = 1
        ;(component as any).handleArrowUpClick()
        expect((component as any).activeIndex).toEqual(0)
      })

      it('sets `activeIndex` value to latest child index when focused element is at index 0 and `firstArrowClick` is false', () => {
        component.container = container
        ;(component as any).firstArrowClick = false
        ;(component as any).activeIndex = 0
        ;(component as any).handleArrowUpClick()
        expect((component as any).activeIndex).toEqual(
          (component as any).children.length - 1,
        )
      })
    })

    describe('handleArrowDownClick', () => {
      it('sets `activeIndex` value to 0 if `firstArrowClick` is true', () => {
        component.container = container
        ;(component as any).handleArrowDownClick()
        expect((component as any).activeIndex).toEqual(0)
      })

      it('increases `activeIndex` value if `firstArrowClick` is false', () => {
        component.container = container
        ;(component as any).firstArrowClick = false
        ;(component as any).activeIndex = 1
        ;(component as any).handleArrowDownClick()
        expect((component as any).activeIndex).toEqual(2)
      })

      it('sets `activeIndex` value to 0 when focused element is at last index and `firstArrowClick` is false', () => {
        component.container = container
        ;(component as any).firstArrowClick = false
        ;(component as any).activeIndex = 2
        ;(component as any).handleArrowDownClick()
        expect((component as any).activeIndex).toEqual(0)
      })
    })
  })
})
