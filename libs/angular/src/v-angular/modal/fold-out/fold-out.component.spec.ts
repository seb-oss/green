import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FoldOutComponent } from './fold-out.component';

describe('[NgvModal]', () => {
  // ----------------------------------------------------------------------------
  // FoldOutComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('FoldOutComponent - constructor()', () => {
    let component: FoldOutComponent;
    let fixture: ComponentFixture<FoldOutComponent>;

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [FoldOutComponent],
          imports: [FontAwesomeModule],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(FoldOutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
