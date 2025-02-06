import '../modal.globals'

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { NggvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvDialogComponent } from './dialog.component'

describe('[NggvModal]', () => {
  // ----------------------------------------------------------------------------
  // DialogComponent
  // ----------------------------------------------------------------------------
  describe('DialogComponent', () => {
    let component: NggvDialogComponent
    let fixture: ComponentFixture<NggvDialogComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvDialogComponent],
        imports: [NggvI18nTestModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NggvDialogComponent)
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
