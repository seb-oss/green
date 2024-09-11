import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgvFoldOutComponent } from './fold-out.component'

describe('[NgvModal]', () => {
  // ----------------------------------------------------------------------------
  // FoldOutComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('FoldOutComponent - constructor()', () => {
    let component: NgvFoldOutComponent
    let fixture: ComponentFixture<NgvFoldOutComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvFoldOutComponent],
        imports: [FontAwesomeModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NgvFoldOutComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
