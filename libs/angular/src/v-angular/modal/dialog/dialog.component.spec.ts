import '../modal.globals'

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { NgvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'

import { NgvDialogComponent } from './dialog.component'

describe('[NgvModal]', () => {
  // ----------------------------------------------------------------------------
  // DialogComponent
  // ----------------------------------------------------------------------------
  describe('DialogComponent', () => {
    let component: NgvDialogComponent
    let fixture: ComponentFixture<NgvDialogComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvDialogComponent],
        imports: [NgvI18nTestModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NgvDialogComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    describe('constructor()', () => {
      it('should create', () => {
        expect(component).toBeTruthy()
      })
    })

    describe('closeModalOnEscape input', () => {
      it('should not close the modal on escape keydown when closeModalOnEscape is false', () => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' })
        component.shown = true
        component.closeModalOnEscape = false

        component.close(event)

        expect(component.shown).toBe(true)
      })

      it('should close the modal on escape keydown when closeModalOnEscape is true', () => {
        const event = new KeyboardEvent('keydown', { key: 'Escape' })
        component.shown = true
        component.closeModalOnEscape = true

        component.close(event)

        expect(component.shown).toBe(false)
      })
    })
  })
})
