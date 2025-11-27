import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { NggvI18nTestModule } from '../i18n'
import { TabDirective } from './tab.directive'
import { TabsComponent } from './tabs.component'

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tab-test-wrapper',
    template: `<nggv-tabs>
    <article tab="Tab title 1"><!-- Content --></article>
    <article tab="Tab title 2" [active]="true"><!-- Content --></article>
    <article tab="Tab title 3" disabled><!-- Content --></article>
    <article tab="<strong>Tab title 4</strong>"><!-- Content --></article>
  </nggv-tabs>`,
    standalone: false
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
class TabsTestWrapper {}

describe('[NggvTabs]', () => {
  // ----------------------------------------------------------------------------
  // TabsComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('TabsComponent - constructor()', () => {
    let component: TabsTestWrapper
    let fixture: ComponentFixture<TabsTestWrapper>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, NggvI18nTestModule, RouterTestingModule],
        declarations: [TabsComponent, TabDirective, TabsTestWrapper],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(TabsTestWrapper)
      component = fixture.componentInstance
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
