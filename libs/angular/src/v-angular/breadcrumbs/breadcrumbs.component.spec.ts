import '../core/core.globals'

import { APP_BASE_HREF } from '@angular/common'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { NggvExternalLinkDirective } from '../external-link'
import { NggvBreadcrumbsComponent } from './breadcrumbs.component'

describe('[NggvCore]', () => {
  // ----------------------------------------------------------------------------
  // BreadcrumbsComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('BreadcrumbsComponent - constructor()', () => {
    let component: NggvBreadcrumbsComponent
    let fixture: ComponentFixture<NggvBreadcrumbsComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvBreadcrumbsComponent, NggvExternalLinkDirective],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        imports: [RouterTestingModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NggvBreadcrumbsComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
