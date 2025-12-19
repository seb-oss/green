import { Directive, Input, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'

/** Directive overrides routerLink attribute to allow external links. */
@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'a[routerLink]',
    standalone: false
})
export class NggvExternalLinkDirective implements OnInit {
  /** If set to true, links will trigger a location change rather than an internal history push. */
  @Input() external = false

  /**
   * Creates a new ExternalLinkDirective
   * @param link extracted routerLink metadata
   */
  constructor(protected link: RouterLink) {}

  ngOnInit() {
    if (!this.external) return
    this.link.onClick = () => {
      // eslint-disable-next-line @typescript-eslint/dot-notation
      window.location.href = this.link['routerLink']?.toString() || ''
      return false
    }
  }
}
