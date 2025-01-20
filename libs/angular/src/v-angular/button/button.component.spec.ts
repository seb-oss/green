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

import { NggvExternalLinkDirective } from '@sebgroup/green-angular/src/v-angular/external-link/external-link.directive'
import { NggvButtonComponent } from './button.component'

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // ButtonComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('ButtonComponent - constructor()', () => {
    let component: NggvButtonComponent
    let fixture: ComponentFixture<NggvButtonComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvButtonComponent, NggvExternalLinkDirective],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
          { provide: NgControl, useValue: new FormControl() },
        ],
        imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NggvButtonComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
