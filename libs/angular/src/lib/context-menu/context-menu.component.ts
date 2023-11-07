import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { DropdownOption } from '../dropdown/dropdown.component'
import { Subject, Subscription } from 'rxjs'
import { ON_SCROLL_TOKEN } from '../shared/on-scroll.directive'
import { CONTEXT_MENU_LEFT, CONTEXT_MENU_TOP } from './context-menu.constants'

@Component({
  selector: 'ngg-context-menu',
  templateUrl: './context-menu.component.html',
})
export class NggContextMenuComponent
  implements AfterViewInit, OnDestroy, OnInit
{
  @Input() direction: 'ltr' | 'rtl' = 'ltr'
  @Input() menuItems: DropdownOption[] = []
  @Input() menuItemTemplate: TemplateRef<unknown> | null = null
  @Input() menuAnchorTemplate: TemplateRef<unknown> | null = null
  @Input() closeOnScroll = false

  @Output() contextMenuItemClicked: EventEmitter<DropdownOption> =
    new EventEmitter<DropdownOption>()

  @ViewChild('contextMenuPopover') popover!: ElementRef<HTMLElement>

  @ViewChild('contextMenuAnchor') anchor!: ElementRef<HTMLElement>

  isActive = false
  top = CONTEXT_MENU_TOP
  left = CONTEXT_MENU_LEFT

  resizeObserver?: ResizeObserver
  menuCloseSubscription?: Subscription

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLElement>,
    @Optional()
    @Inject(ON_SCROLL_TOKEN)
    public closeContextMenu: Subject<void>
  ) {}

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement): void {
    if (!this.isActive) {
      return
    }

    if (!this.elementRef.nativeElement.contains(target)) {
      this.close()
    }
  }

  public ngOnInit(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.close()
    })
    this.resizeObserver.observe(document.body)
  }

  public ngAfterViewInit(): void {
    if (this.closeOnScroll) {
      this.menuCloseSubscription = this.closeContextMenu?.subscribe(() =>
        this.close()
      )
    }
  }

  public ngOnDestroy(): void {
    this.resizeObserver?.unobserve(document.body)
    this.menuCloseSubscription?.unsubscribe()
  }

  open(): void {
    if (this.isActive) {
      this.close()
      return
    }

    const buttonRect = this.anchor?.nativeElement.getBoundingClientRect()

    const gapBetweenButtonAndPopover = 3
    const left = this.calculateLeft(this.direction, buttonRect)
    const top = buttonRect.bottom + gapBetweenButtonAndPopover

    this.left = `${left}px`
    this.top = `${top}px`
    this.isActive = true
  }

  close(): void {
    this.isActive = false
    this.top = CONTEXT_MENU_TOP
    this.left = CONTEXT_MENU_LEFT
    this.changeDetectorRef.markForCheck()
  }

  onItemClick(item: DropdownOption): void {
    this.contextMenuItemClicked.emit(item)
    this.close()
  }

  onMenuItemKeyDown(event: KeyboardEvent, menuItem: DropdownOption): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        this.onItemClick(menuItem)
        break
      default:
        break
    }
  }

  calculateLeft(direction: string, buttonRect: DOMRect): number {
    const popover = this.popover?.nativeElement as HTMLElement
    const popoverWidth = popover?.offsetWidth || 0

    switch (direction) {
      case 'rtl':
        return popoverWidth <= buttonRect.left
          ? buttonRect.right - popoverWidth
          : buttonRect.left
      case 'ltr':
      default:
        return buttonRect.right + popoverWidth <= window.innerWidth
          ? buttonRect.left
          : buttonRect.right - popoverWidth
    }
  }
}
