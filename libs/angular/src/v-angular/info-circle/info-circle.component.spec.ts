import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { TooltipDirective } from '@sebgroup/ngv-tooltip'
import { InfoCircleComponent } from './info-circle.component'

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // InfoCircleComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('InfoCircleComponent - constructor()', () => {
    let component: InfoCircleComponent
    let fixture: ComponentFixture<InfoCircleComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InfoCircleComponent, TooltipDirective],
        imports: [FontAwesomeModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(InfoCircleComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
