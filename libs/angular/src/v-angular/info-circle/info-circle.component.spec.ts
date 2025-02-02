import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { NggvTooltipDirective } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NggvInfoCircleComponent } from './info-circle.component'

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // InfoCircleComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('InfoCircleComponent - constructor()', () => {
    let component: NggvInfoCircleComponent
    let fixture: ComponentFixture<NggvInfoCircleComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvInfoCircleComponent, NggvTooltipDirective],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NggvInfoCircleComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
