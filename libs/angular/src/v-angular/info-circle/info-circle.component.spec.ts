import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TooltipDirective } from '@sebgroup/ngv-tooltip'
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
        declarations: [NgvInfoCircleComponent, TooltipDirective],
        imports: [FontAwesomeModule],
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
