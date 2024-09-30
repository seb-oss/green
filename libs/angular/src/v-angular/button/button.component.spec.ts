import { APP_BASE_HREF } from '@angular/common'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import '../core/core.globals'
import { NgvExternalLinkDirective } from '@sebgroup/green-angular/src/v-angular/external-link/external-link.directive'
import { NgvButtonComponent } from './button.component'

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // ButtonComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('ButtonComponent - constructor()', () => {
    let component: NgvButtonComponent
    let fixture: ComponentFixture<NgvButtonComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvButtonComponent, NgvExternalLinkDirective],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
          { provide: NgControl, useValue: new FormControl() },
        ],
        imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NgvButtonComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
