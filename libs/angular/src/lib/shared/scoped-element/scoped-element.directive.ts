import { DOCUMENT } from '@angular/common'
import {
  ChangeDetectorRef,
  Directive,
  EmbeddedViewRef,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core'

import { getScopedTagName } from '@sebgroup/green-core'

@Directive({
  selector: '[gdsScopedElement]',
})
export class NggScopedElementDirective implements OnInit {
  private viewRef: EmbeddedViewRef<any> | null = null
  private readonly document = inject(DOCUMENT)
  private readonly renderer = inject(Renderer2)
  private readonly vcr = inject(ViewContainerRef)
  private readonly cdr = inject(ChangeDetectorRef)
  private readonly template = inject(TemplateRef<any>)

  ngOnInit() {
    this.vcr.clear()
    const originalCreateElement = this.renderer.createElement

    this.renderer.createElement = (name: string, namespace: string) => {
      return this.document.createElement(getScopedTagName(name))
    }

    this.viewRef = this.vcr.createEmbeddedView(this.template)
    this.renderer.createElement = originalCreateElement
    this.cdr.markForCheck()
  }
}
