import '../core.globals'

import { APP_BASE_HREF } from '@angular/common'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { ExternalLinkDirective } from '../shared/external-link.directive'
import { NgvBreadcrumbsComponent } from './breadcrumbs.component'

describe('[NgvCore]', () => {
  // ----------------------------------------------------------------------------
  // BreadcrumbsComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('BreadcrumbsComponent - constructor()', () => {
    let component: NgvBreadcrumbsComponent
    let fixture: ComponentFixture<NgvBreadcrumbsComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgvBreadcrumbsComponent, ExternalLinkDirective],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
        imports: [RouterTestingModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NgvBreadcrumbsComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
