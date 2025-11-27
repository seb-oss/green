/* eslint-disable no-console */
import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'

import { TabDirective } from './tab.directive'
import { EventTabChange, Tab } from './tabs.models'

@Component({
    selector: 'nggv-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    standalone: false
})
export class TabsComponent
  implements OnChanges, OnInit, AfterContentInit, OnDestroy
{
  /** @internal */
  @HostBinding('class.gds-tabs') baseClass = true

  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'tabs'

  /** @internal List of children with a {@link TabDirective}. */
  @ContentChildren(TabDirective) tabRefs: QueryList<TabDirective> =
    new QueryList()

  /**
   * List of tabs to generate, this should not be used in conjunction with children that have a {@link TabDirective}.
   * It is useful for generating a list of tabs with links for navigation.
   * If any tab has the link property, a `<router-outlet>` is added below the tabs list.
   */
  @Input() tabs: Tab[] = []

  /**
   * Event triggered on initialization and every time the active tab changes.
   * The tab change can be cancelled if event type is set to `'before'` and `cancel()` is called.
   */
  @Output() public ngvTabSwitch = new EventEmitter<EventTabChange>()

  /** @internal Adds a `<router-outlet>` below the tabs list. */
  useRouting = false

  /** @internal The currently active tab. */
  selectedTab: Tab | undefined

  /** @internal If tab switching has started. */
  isSwitching = false

  /** @internal */
  protected subs: Subscription[] = []

  constructor(protected router: Router) {}

  /** @internal */
  static uniqueIds(tabs: Tab[]) {
    const uniqueIds = new Set()
    let offset = 0
    return tabs.map((tab, index) => {
      if (tab.id && !uniqueIds.has(tab.id)) {
        // Id is already unique
        uniqueIds.add(tab.id)
        return { ...tab }
      } else {
        // If no id is set for the tab, use the next available index
        while (uniqueIds.has(index + offset)) offset++
        const id = index + offset
        if (uniqueIds.has(tab.id)) {
          // eslint-disable-next-line no-console
          console.warn(
            `Duplicate tab id "${tab.id}" found for tab "${tab.tab}", de-duplicating using index + offset. New tab id will be ${id}`,
          )
        }
        uniqueIds.add(id)
        return { ...tab, id }
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tabs.currentValue) {
      // Update tabs on property updates
      this.updateFromInput()
    }
  }

  ngOnInit() {
    // Update tabs on route change
    this.subs.push(
      this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe((e: NavigationEnd) => {
          // Skip if already routing to tab
          if (this.isSwitching) return
          const tab = this.tabs.find(({ link }) => link && e.url.endsWith(link))
          if (tab) {
            this.onSelect(tab.id)
            if (tab.disabled) {
              // Fallback to previously selected tab or first tab not disabled
              const fallbackTab = this.selectedTab
                ? this.selectedTab
                : this.tabs.find(({ disabled }) => !disabled)
              if (fallbackTab && fallbackTab.link)
                this.router.navigateByUrl(fallbackTab.link)
            }
          }
        }),
    )
  }

  ngAfterContentInit() {
    // Update tabs on view init
    if (this.tabRefs.length) {
      this.updateFromReferences()
    }
    // Update tabs on view child change
    this.subs.push(this.tabRefs.changes.subscribe(this.updateFromReferences))
  }

  /** @internal */
  protected updateFromInput = () => {
    // Make sure each tab has a unique id
    this.tabs = TabsComponent.uniqueIds(this.tabs)
    // Determine if router outlet should be used
    this.useRouting = this.tabs.some(({ link }) => link)
    this.updateTabs()
  }

  /** @internal */
  protected updateFromReferences = () => {
    this.tabs = this.tabRefs.map((tabRef) => ({
      tab: tabRef.tab,
      id: tabRef.id,
      active: tabRef.active,
      disabled: tabRef.disabled,
      directive: tabRef,
    }))
    // Make sure each tab has a unique id
    this.tabs = TabsComponent.uniqueIds(this.tabs)
    this.tabs.forEach((tab) => {
      if (tab.directive) tab.directive.id = tab.id
    })
    this.updateTabs()
  }

  /** @internal */
  protected updateTabs() {
    const url = window.location.href
    // Select tab if its link matches active url
    let selectedTab = this.tabs.find(
      ({ link, disabled }) => link && !disabled && url.endsWith(link),
    )
    // Fallback to first active tab
    if (!selectedTab) selectedTab = this.tabs.find((tab) => tab.active)
    // Fallback to first tab
    if (!selectedTab) selectedTab = this.tabs[0]
    // Select or give up
    if (selectedTab && this.selectedTab !== selectedTab)
      this.onSelect(selectedTab.id)
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe())
  }

  /** @internal */
  protected activateTab(tab: Tab) {
    // Deactivate all tabs
    this.tabs.forEach((t) => {
      t.active = false
      if (t.directive) t.directive.active = false
    })
    // Activate selected tab
    tab.active = true
    if (tab.directive) tab.directive.active = true
    // Send end event
    this.ngvTabSwitch.emit({ type: 'end', prev: this.selectedTab, next: tab })
    this.selectedTab = tab
    this.isSwitching = false
  }

  /** @internal */
  onSelect(id: string | number | undefined) {
    const selectedTab = this.tabs.find((tab) => tab.id === id)
    if (
      selectedTab &&
      !selectedTab.disabled &&
      selectedTab !== this.selectedTab
    ) {
      let cancelled = false
      // Events are synchronous and allow for tab switch to be cancelled if desired
      this.isSwitching = true
      this.ngvTabSwitch.emit({
        type: 'start',
        prev: this.selectedTab,
        next: selectedTab,
        cancel: () => {
          cancelled = true
        },
      })
      if (cancelled) {
        this.ngvTabSwitch.emit({
          type: 'cancel',
          prev: this.selectedTab,
          next: selectedTab,
        })
        this.isSwitching = false
        return
      }
      if (selectedTab.link) {
        // Navigate and wait for guard accept route
        this.router
          .navigateByUrl(selectedTab.link, { replaceUrl: true })
          .then((changed) => {
            if (changed === false) {
              this.ngvTabSwitch.emit({
                type: 'cancel',
                prev: this.selectedTab,
                next: selectedTab,
              })
              this.isSwitching = false
            } else this.activateTab(selectedTab)
          })
      } else {
        this.activateTab(selectedTab)
      }
    }
  }

  /** @internal */
  onKeyDown(event: KeyboardEvent) {
    const tabElement = event.target as HTMLElement
    if (!tabElement) return false
    const parent = tabElement.parentElement
    switch (event.key) {
      case 'End': // End
        if (parent)
          this.tabFocusHelper(event, parent.lastElementChild as HTMLElement)
        break

      case 'Home': // Home
        if (parent)
          this.tabFocusHelper(event, parent.firstElementChild as HTMLElement)
        break

      case 'LeftArrow': // Left arrow
      case 'UpArrow': // Up arrow
        this.tabFocusHelper(
          event,
          tabElement.previousElementSibling as HTMLElement,
        )
        break

      case 'RightArrow': // Right arrow
      case 'DownArrow': // Down arrow
        this.tabFocusHelper(event, tabElement.nextElementSibling as HTMLElement)
        break
    }
    return true
  }

  /** @internal */
  protected tabFocusHelper(event: KeyboardEvent, tabElement: HTMLElement) {
    if (!tabElement || !(tabElement instanceof HTMLElement)) return
    event.preventDefault()
    event.stopPropagation()
    tabElement.focus()
    this.onSelect(tabElement.id.slice(4))
  }
}
