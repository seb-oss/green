import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { NgvTooltipDirective } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NgvInfoCircleComponent } from './info-circle.component'

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // InfoCircleComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('InfoCircleComponent - constructor()', () => {
    let component: NgvInfoCircleComponent
    let fixture: ComponentFixture<NgvInfoCircleComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvInfoCircleComponent, NgvTooltipDirective],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NgvInfoCircleComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
