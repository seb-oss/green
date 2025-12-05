import {
  Directive,
  ElementRef,
  OnChanges,
  Optional,
  Renderer2,
  Self,
  SimpleChanges,
} from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

/**
 * @deprecated No longer needed when using components from `@sebgroup/green-core-ng`
 */
@Directive({
    selector: '[nggCoreRouterLink]',
    standalone: false
})
export class NggCoreRouterLinkDirective implements OnChanges {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Self() @Optional() private routerLink?: RouterLink,
    @Self() @Optional() private routerLinkActive?: RouterLinkActive,
  ) {
    this.routerLinkActive?.isActiveChange.subscribe(() => this.setActive())
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['routerLink']) {
      this.updateHref()
    }
  }

  ngAfterViewInit(): void {
    this.updateHref()
    this.setActive()
  }

  private setActive(): void {
    if (
      this.routerLinkActive &&
      this.elementRef.nativeElement?.tagName.includes('GDS-MENU-BUTTON')
    ) {
      this.elementRef.nativeElement.selected = this.routerLinkActive.isActive
    }
  }

  private updateHref(): void {
    // First we need to be a bit sneaky and trick `RouterLink` into thinking we are an anchor element
    ;(this.routerLink as any).isAnchorElement = true
    ;(this.routerLink as any).updateHref()

    // Then we can set the href attribute
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'href',
      this.routerLink?.href || '',
    )
  }
}
