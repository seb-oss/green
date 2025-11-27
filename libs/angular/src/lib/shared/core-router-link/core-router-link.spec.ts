import { provideLocationMocks } from '@angular/common/testing'
import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideRouter, RouterModule } from '@angular/router'
import { RouterTestingHarness } from '@angular/router/testing'

import { NggCoreRouterLinkDirective } from './core-router-link.directive'

@Component({
    template: `
    <gds-link
      [routerLink]="['/test1']"
      nggCoreRouterLink
      [routerLinkActive]="['router-link-active']"
      >Test Link</gds-link
    >
    <gds-menu-button
      [routerLink]="['/test2']"
      nggCoreRouterLink
      [routerLinkActive]="['router-link-active']"
      >Test Button</gds-menu-button
    >
    <a
      [routerLink]="['/test3']"
      nggCoreRouterLink
      [routerLinkActive]="['router-link-active']"
      >Test Anchor</a
    >
  `,
    standalone: false
})
class TestComponent {}

describe('NggCoreRouterLinkDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let harness: RouterTestingHarness

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, NggCoreRouterLinkDirective],
      imports: [RouterModule.forRoot([])],
      providers: [
        provideRouter([
          { path: 'test1', component: TestComponent },
          { path: 'test2', component: TestComponent },
          { path: 'test3', component: TestComponent },
        ]),
        provideLocationMocks(),
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(TestComponent)
    harness = await RouterTestingHarness.create()
    fixture.detectChanges()
  })

  it('should add href attribute to custom elements', () => {
    const linkElement: HTMLElement =
      fixture.nativeElement.querySelector('gds-link')
    const buttonElement: HTMLElement =
      fixture.nativeElement.querySelector('gds-menu-button')
    const anchorElement: HTMLElement = fixture.nativeElement.querySelector('a')

    expect(linkElement.getAttribute('href')).toBe('/test1')
    expect(buttonElement.getAttribute('href')).toBe('/test2')
    expect(anchorElement.getAttribute('href')).toBe('/test3')
  })

  it('should work with routerLinkActive', async () => {
    await harness.navigateByUrl('/test1')
    fixture.detectChanges()

    const linkElement: HTMLElement =
      fixture.nativeElement.querySelector('gds-link')

    expect(linkElement.classList.contains('router-link-active')).toBe(true)
  })

  it('should set the selected property of gds-menu-button when routerLinkActive is active', async () => {
    await harness.navigateByUrl('/test2')
    fixture.detectChanges()

    const buttonElement: any =
      fixture.nativeElement.querySelector('gds-menu-button')

    expect(buttonElement.selected).toBe(true)
  })
})
