import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenAngularComponent } from './green-angular.component';

describe('GreenAngularComponent', () => {
  let component: GreenAngularComponent;
  let fixture: ComponentFixture<GreenAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
