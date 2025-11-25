import { Component, HostBinding, Input } from '@angular/core'

type Breadcrumb = {
  /** Title shown for the breadcrumb link. */
  title: string
  /** The link which is redirected to when clicked. Can be relative with external set to `false`. */
  href: string
  /** Flags this link to be either internal using router link or external using browser location. */
  external?: boolean
}

@Component({
    selector: 'nggv-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    standalone: false
})
export class NggvBreadcrumbsComponent {
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'breadcrumbs'

  /** List of breadcrumbs to present. */
  @Input() breadcrumbs!: Breadcrumb[]
}
