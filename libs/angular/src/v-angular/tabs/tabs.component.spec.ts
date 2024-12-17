import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgvI18nTestModule } from '@sebgroup/ngv-i18n';

import { TabDirective } from './tab.directive';
import { TabsComponent } from './tabs.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tab-test-wrapper',
  template: `<ngv-tabs>
    <article tab="Tab title 1"><!-- Content --></article>
    <article tab="Tab title 2" [active]="true"><!-- Content --></article>
    <article tab="Tab title 3" disabled><!-- Content --></article>
    <article tab="<strong>Tab title 4</strong>"><!-- Content --></article>
  </ngv-tabs>`,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
class TabsTestWrapper {}

describe('[NgvTabs]', () => {
  // ----------------------------------------------------------------------------
  // TabsComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('TabsComponent - constructor()', () => {
    let component: TabsTestWrapper;
    let fixture: ComponentFixture<TabsTestWrapper>;

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          imports: [
            CommonModule,
            NgvI18nTestModule,
            RouterTestingModule,
          ],
          declarations: [TabsComponent, TabDirective, TabsTestWrapper],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(TabsTestWrapper);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
