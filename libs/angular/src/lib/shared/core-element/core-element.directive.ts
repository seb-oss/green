import { DOCUMENT } from '@angular/common'
import {
  ChangeDetectorRef,
  Directive,
  EmbeddedViewRef,
  inject,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core'

import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { NggCoreRenderer } from '../core-renderer'

@Directive({
  selector: '[nggCoreElement]',
})
export class NggCoreElementDirective implements OnInit {
  private viewRef: EmbeddedViewRef<any> | null = null
  private readonly document = inject(DOCUMENT)
  private readonly renderer = inject(Renderer2)
  private readonly vcr = inject(ViewContainerRef)
  private readonly cdr = inject(ChangeDetectorRef)
  private readonly template = inject(TemplateRef<any>)

  ngOnInit() {
    if (!(this.renderer instanceof NggCoreRenderer)) {
      this.vcr.clear()

      const originalCreateElement = this.renderer.createElement
      this.renderer.createElement = (name: string, _namespace: string) => {
        return this.document.createElement(getScopedTagName(name))
      }

      this.cdr.markForCheck()
      this.viewRef = this.vcr.createEmbeddedView(this.template)
      this.renderer.createElement = originalCreateElement
    }
  }
}
