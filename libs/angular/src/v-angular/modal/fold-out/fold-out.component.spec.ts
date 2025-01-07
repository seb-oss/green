import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { NggvFoldOutComponent } from './fold-out.component'

describe('[NggvModal]', () => {
  // ----------------------------------------------------------------------------
  // FoldOutComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('FoldOutComponent - constructor()', () => {
    let component: NggvFoldOutComponent
    let fixture: ComponentFixture<NggvFoldOutComponent>

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
  })
})
