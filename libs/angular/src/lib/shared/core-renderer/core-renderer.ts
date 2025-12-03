import {
  ɵAnimationEngine as AnimationEngine,
  ɵAnimationRendererFactory as AnimationRendererFactory,
} from '@angular/animations/browser'
import {
  inject,
  Injectable,
  NgZone,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RendererType2,
} from '@angular/core'
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser'

import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { SCOPE_RESOLVER, ScopeResolver } from '../scope-resolver'

/**
 * @deprecated NggCoreRenderer is moving to `@sebgroup/green-core-ng` and changing name to GdsCoreRenderer.
 */
export class NggCoreRenderer implements Renderer2 {
  constructor(
    private delegate: Renderer2,
    private scopeResolver: ScopeResolver,
  ) {}

  createElement(name: string, namespace?: string | null): any {
    const scopedName = name.startsWith('gds-')
      ? this.scopeResolver.getScopedTagName(name, true)
      : name
    return this.delegate.createElement(scopedName, namespace)
  }

  // Delegate all other methods to the original renderer
  addClass(el: any, name: string): void {
    return this.delegate.addClass(el, name)
  }
  get data(): { [key: string]: any } {
    return this.delegate.data
  }
  destroy(): void {
    return this.delegate.destroy()
  }
  createComment(value: string) {
    return this.delegate.createComment(value)
  }
  createText(value: string) {
    return this.delegate.createText(value)
  }
  destroyNode: ((node: any) => void) | null = (node) =>
    this.delegate.destroyNode && this.delegate.destroyNode(node)
  appendChild(parent: any, newChild: any): void {
    return this.delegate.appendChild(parent, newChild)
  }
  insertBefore(
    parent: any,
    newChild: any,
    refChild: any,
    isMove?: boolean | undefined,
  ): void {
    return this.delegate.insertBefore(parent, newChild, refChild, isMove)
  }
  removeChild(
    parent: any,
    oldChild: any,
    isHostElement?: boolean | undefined,
  ): void {
    return this.delegate.removeChild(parent, oldChild, isHostElement)
  }
  selectRootElement(
    selectorOrNode: any,
    preserveContent?: boolean | undefined,
  ) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent)
  }
  parentNode(node: any) {
    return this.delegate.parentNode(node)
  }
  nextSibling(node: any) {
    return this.delegate.nextSibling(node)
  }
  setAttribute(
    el: any,
    name: string,
    value: string,
    namespace?: string | null | undefined,
  ): void {
    return this.delegate.setAttribute(el, name, value, namespace)
  }
  removeAttribute(
    el: any,
    name: string,
    namespace?: string | null | undefined,
  ): void {
    return this.delegate.removeAttribute(el, name, namespace)
  }
  removeClass(el: any, name: string): void {
    return this.delegate.removeClass(el, name)
  }
  setStyle(
    el: any,
    style: string,
    value: any,
    flags?: RendererStyleFlags2 | undefined,
  ): void {
    return this.delegate.setStyle(el, style, value, flags)
  }
  removeStyle(
    el: any,
    style: string,
    flags?: RendererStyleFlags2 | undefined,
  ): void {
    return this.delegate.removeStyle(el, style, flags)
  }
  setProperty(el: any, name: string, value: any): void {
    return this.delegate.setProperty(el, name, value)
  }
  setValue(node: any, value: string): void {
    return this.delegate.setValue(node, value)
  }
  listen(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void,
  ): () => void {
    return this.delegate.listen(target, eventName, callback)
  }
}

/**
 * @deprecated NggCoreRendererFactory is moving to `@sebgroup/green-core-ng` and changing name to GdsCoreRendererFactory.
 */
@Injectable()
export class NggCoreRendererFactory implements RendererFactory2 {
  private readonly scopeResolver = inject(SCOPE_RESOLVER)

  constructor(private delegate: DomRendererFactory2) {}

  createRenderer(element: any, type: RendererType2 | null): Renderer2 {
    const renderer = this.delegate.createRenderer(element, type)
    return new NggCoreRenderer(renderer, this.scopeResolver)
  }
}

/**
 * Returns a AnimationRendererFactory configured to use the NggCoreRendererFactory as a delegate.
 * @deprecated import from `@sebgroup/green-core-ng` instead
 */
export function animationsCoreRendererFactory(
  delegate: DomRendererFactory2,
  engine: AnimationEngine,
  zone: NgZone,
) {
  const crf = new NggCoreRendererFactory(delegate)
  return new AnimationRendererFactory(crf, engine, zone)
}

/**
 * Provide the NggCoreRendererFactory to use <gds-*> elements without any extra directives.
 * The NggCoreRenderer will handle element name scoping automatically.
 *
 * Example:
 * ```ts
 * @NgModule({
 *  providers: [provideCoreRenderer()],
 *  schemas: [CUSTOM_ELEMENTS_SCHEMA],
 * })
 * export class AppModule {}
 * ```
 *
 * @deprecated import from `@sebgroup/green-core-ng` instead
 */
export const provideCoreRenderer = (resolver = getScopedTagName) => [
  {
    provide: RendererFactory2,
    useClass: NggCoreRendererFactory,
  },
  {
    provide: SCOPE_RESOLVER,
    useValue: { getScopedTagName: resolver },
  },
]

/**
 * Provide the NggCoreRendererFactory to use <gds-*> elements without any extra directives.
 * The NggCoreRenderer will handle element name scoping automatically.
 *
 * This factory also provides the Angular animations renderer.
 *
 *
 * Example:
 * ```ts
 * @NgModule({
 *  imports: [BrowserAnimationsModule],
 *  providers: [provideCoreRendererWithAnimations()],
 *  schemas: [CUSTOM_ELEMENTS_SCHEMA],
 * })
 * export class AppModule {}
 * ```
 *
 * @deprecated import from `@sebgroup/green-core-ng` instead
 */
export const provideCoreRendererWithAnimations = (
  resolver = getScopedTagName,
) => [
  {
    provide: RendererFactory2,
    useFactory: animationsCoreRendererFactory,
    deps: [DomRendererFactory2, AnimationEngine, NgZone],
  },
  {
    provide: SCOPE_RESOLVER,
    useValue: { getScopedTagName: resolver },
  },
]
