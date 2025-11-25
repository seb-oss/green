import { Component } from '@angular/core'
import { By } from '@angular/platform-browser'
import { render, RenderResult, waitFor } from '@testing-library/angular'
import { Subject } from 'rxjs'

import { NggAccordionListItemComponent } from './accordion-list-item.component'
import { NggAccordionComponent } from './accordion.component'

describe(NggAccordionComponent.name, () => {
  let fakeComponent: RenderResult<NggFakeAccordionComponent>
  let component: NggAccordionComponent

  beforeEach(async () => {
    fakeComponent = await render(NggFakeAccordionComponent, {
      declarations: [
        NggFakeAccordionComponent,
        NggAccordionListItemComponent,
        NggAccordionComponent,
      ],
      providers: [],
    })

    fakeComponent.detectChanges()
    component = fakeComponent.fixture.debugElement.children[0].componentInstance
  })

  it('should create', () => {
    const rootElement = component
    expect(rootElement).toBeDefined()
  })

  it('should call expand all when closeOthers is false', async () => {
    const accordionListItems = fakeComponent.fixture.debugElement.queryAll(
      By.directive(NggAccordionListItemComponent),
    )
    const listItem1 = accordionListItems.find(
      (i) =>
        (i.componentInstance as NggAccordionListItemComponent)
          .listItemHeader === '1',
    )?.componentInstance as NggAccordionListItemComponent
    const listItem2 = accordionListItems.find(
      (i) =>
        (i.componentInstance as NggAccordionListItemComponent)
          .listItemHeader === '2',
    )?.componentInstance as NggAccordionListItemComponent

    // closeOthers property defaults to false by component so we do not set it here.
    const expandAllSubject: Subject<void> = new Subject<void>()
    component.expandAll = expandAllSubject.asObservable()

    expandAllSubject.next()

    await waitFor(() => {
      expect(listItem1.isExpanded).toEqual(true)
    })
    expect(listItem2.isExpanded).toEqual(true)
  })

  it('should not call expand all when closeOthers is true', async () => {
    const accordionListItems = fakeComponent.fixture.debugElement.queryAll(
      By.directive(NggAccordionListItemComponent),
    )
    const listItem1 = accordionListItems.find(
      (i) =>
        (i.componentInstance as NggAccordionListItemComponent)
          .listItemHeader === '1',
    )?.componentInstance as NggAccordionListItemComponent
    const listItem2 = accordionListItems.find(
      (i) =>
        (i.componentInstance as NggAccordionListItemComponent)
          .listItemHeader === '2',
    )?.componentInstance as NggAccordionListItemComponent

    component.closeOthers = true
    const expandAllSubject: Subject<void> = new Subject<void>()
    component.expandAll = expandAllSubject.asObservable()

    expandAllSubject.next()

    await waitFor(() => {
      expect(listItem1.isExpanded).toEqual(false)
    })
    expect(listItem2.isExpanded).toEqual(false)
  })

  it('should shrink other children when child is expanded if closeOthers is true', async () => {
    const accordionListItems = fakeComponent.fixture.debugElement.queryAll(
      By.directive(NggAccordionListItemComponent),
    )
    const listItem1 = accordionListItems.find(
      (i) =>
        (i.componentInstance as NggAccordionListItemComponent)
          .listItemHeader === '1',
    )?.componentInstance as NggAccordionListItemComponent
    const listItem2 = accordionListItems.find(
      (i) =>
        (i.componentInstance as NggAccordionListItemComponent)
          .listItemHeader === '2',
    )?.componentInstance as NggAccordionListItemComponent

    component.closeOthers = true
    fakeComponent.detectChanges()

    //both items should be closed initially
    expect(listItem1.isExpanded).toEqual(false)
    expect(listItem2.isExpanded).toEqual(false)

    // expand first item
    listItem1.toggleExpanded()

    // first Item expanded, second item remains closed
    expect(listItem1.isExpanded).toEqual(true)
    expect(listItem2.isExpanded).toEqual(false)

    // expand second item
    listItem2.toggleExpanded()

    // first item should close, since accordion closeOthers is set to true.
    await waitFor(() => {
      expect(listItem1.isExpanded).toEqual(false)
    })
    expect(listItem2.isExpanded).toEqual(true)
  })

  it('should not shrink other children when child is expanded if closeOthers is false', async () => {
    const accordionListItems = fakeComponent.fixture.debugElement.queryAll(
      By.directive(NggAccordionListItemComponent),
    )
    const listItem1 = accordionListItems.find(
      (i) =>
        (i.componentInstance as NggAccordionListItemComponent)
          .listItemHeader === '1',
    )?.componentInstance as NggAccordionListItemComponent
    const listItem2 = accordionListItems.find(
      (i) =>
        (i.componentInstance as NggAccordionListItemComponent)
          .listItemHeader === '2',
    )?.componentInstance as NggAccordionListItemComponent

    component.closeOthers = false
    fakeComponent.detectChanges()

    //both items should be closed initially
    expect(listItem1.isExpanded).toEqual(false)
    expect(listItem2.isExpanded).toEqual(false)

    // expand first item
    listItem1.toggleExpanded()

    // first Item expanded, second item remains closed
    expect(listItem1.isExpanded).toEqual(true)
    expect(listItem2.isExpanded).toEqual(false)

    // expand second item
    listItem2.toggleExpanded()

    // first item should remain expanded, since accordion closeOthers is set to false.
    expect(listItem1.isExpanded).toEqual(true)
    expect(listItem2.isExpanded).toEqual(true)
  })
})

@Component({
    selector: 'ngg-fake-accordion',
    template: `
    <ngg-accordion>
      <div ngg-accordion-list-item listItemHeader="1"></div>
      <div ngg-accordion-list-item listItemHeader="2"></div>
    </ngg-accordion>
  `,
    standalone: false
})
class NggFakeAccordionComponent {}
