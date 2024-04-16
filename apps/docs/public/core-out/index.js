var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __accessCheck = (obj, member, msg7) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg7);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// libs/core/src/components/dropdown/dropdown.ts
import { property as property5, query, queryAsync, state as state4 } from "lit/decorators.js";
import { unsafeHTML as unsafeHTML2 } from "lit/directives/unsafe-html.js";
import { when as when2 } from "lit/directives/when.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap as classMap3 } from "lit/directives/class-map.js";
import { msg as msg2, str, updateWhenLocaleChanges } from "@lit/localize";
import "reflect-metadata";

// libs/core/src/utils/helpers/constrain-slots.ts
function constrainSlots(self) {
  self.updateComplete.then(() => {
    const slots = self.shadowRoot?.querySelectorAll("slot[gds-allow]");
    if (!slots)
      return;
    for (const node of Array.from(self.childNodes)) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === "") {
        node.parentNode?.removeChild(node);
      }
    }
    const constrain = (slot) => {
      const allowed = slot.getAttribute("gds-allow")?.split(" ") || [];
      for (const node of Array.from(slot.assignedNodes())) {
        if (!allowed.includes(node.nodeName.toLowerCase())) {
          node.parentNode?.removeChild(node);
        }
      }
    };
    slots.forEach((slot) => {
      constrain(slot);
      slot.addEventListener("slotchange", () => constrain(slot));
    });
  });
}

// libs/core/src/utils/decorators/watch.ts
function watch(propertyName, options) {
  const resolvedOptions = {
    waitUntilFirstUpdate: false,
    ...options
  };
  return (proto, propertyKey, descriptor) => {
    const { update } = proto;
    const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
    proto.update = function(changedProps) {
      watchedProperties.forEach((property14) => {
        const key = property14;
        if (changedProps.has(key)) {
          const oldValue = changedProps.get(key);
          const newValue = this[key];
          if (oldValue !== newValue) {
            if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
              descriptor.value?.call(this, oldValue, newValue);
            }
          }
        }
      });
      update.call(this, changedProps);
    };
  };
}

// libs/core/src/utils/decorators/observe-light-dom.ts
function observeLightDOM(observerConfig = {
  attributes: true,
  childList: true,
  subtree: false,
  characterData: true
}) {
  return (proto, _propertyKey, descriptor) => {
    let observer;
    const connectedCallback = proto.connectedCallback;
    const disconnectedCallback = proto.disconnectedCallback;
    proto.connectedCallback = function() {
      connectedCallback?.call(this);
      const callback = (_mutationList, _observer) => {
        descriptor.value?.call(this);
      };
      observer = new MutationObserver(callback);
      observer.observe(this, observerConfig);
    };
    proto.disconnectedCallback = function() {
      disconnectedCallback?.call(this);
      observer.disconnect();
    };
  };
}

// libs/core/src/utils/decorators/watch-media-query.ts
function watchMediaQuery(q) {
  return (proto, _propertyKey, descriptor) => {
    const mediaQuery = window.matchMedia(q);
    const connectedCallback = proto.connectedCallback;
    const disconnectedCallback = proto.disconnectedCallback;
    proto.connectedCallback = function() {
      connectedCallback?.call(this);
      const listener = (e) => {
        descriptor.value?.call(this, e.matches);
      };
      mediaQuery.addEventListener("change", listener);
      this.disconnectedCallback = function() {
        disconnectedCallback?.call(this);
        mediaQuery.removeEventListener("change", listener);
      };
      descriptor.value?.call(this, mediaQuery.matches);
    };
  };
}

// libs/core/src/utils/helpers/custom-element-scoping.ts
import { html as litHtml } from "lit";
import { customElement } from "lit/decorators.js";
var VER_SUFFIX = "-gdsvsuffix";
var elementLookupTable = /* @__PURE__ */ new Map();
var gdsCustomElement = (tagName) => {
  if (globalThis.GDS_DISABLE_VERSIONED_ELEMENTS) {
    elementLookupTable.set(tagName, tagName);
    return customElement(tagName);
  }
  const versionedTagName = tagName + VER_SUFFIX;
  elementLookupTable.set(tagName, versionedTagName);
  if (customElements.get(versionedTagName))
    return (_classOrDescriptor) => false;
  return customElement(versionedTagName);
};
var templateCache = /* @__PURE__ */ new WeakMap();
function applyElementScoping(strings, ...values) {
  let modstrings = templateCache.get(strings);
  if (!modstrings) {
    modstrings = replaceTags(strings);
    modstrings.raw = replaceTags(strings.raw);
    templateCache.set(strings, modstrings);
  }
  return [modstrings, ...values];
}
var replaceTags = (inStr) => inStr.map((s) => {
  for (const [key, value] of elementLookupTable.entries()) {
    s = s.replace(new RegExp(`${key}(?![-a-z])`, "mg"), value);
  }
  return s;
});
function htmlTemplateTagFactory(extendedTag) {
  return (strings, ...values) => {
    if (globalThis.GDS_DISABLE_VERSIONED_ELEMENTS) {
      return extendedTag(strings, ...values);
    }
    const [modstrings, ...modvalues] = applyElementScoping(strings, ...values);
    return extendedTag(modstrings, ...modvalues);
  };
}
var html = htmlTemplateTagFactory(litHtml);
function getScopedTagName(tagName) {
  return elementLookupTable.get(tagName) ?? tagName;
}
function getUnscopedTagName(tagName) {
  return [...elementLookupTable.entries()].find(
    ([, value]) => value === tagName
  )?.[0];
}

// libs/core/src/primitives/listbox/listbox.ts
import { property, state } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";

// libs/core/src/utils/helpers/transitional-styles.ts
import { html as html2 } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
function supportsConstructedStylesheets() {
  try {
    new CSSStyleSheet();
    return true;
  } catch {
    return false;
  }
}
var TransitionalStyles = class _TransitionalStyles {
  constructor() {
    this.sheets = /* @__PURE__ */ new Map();
    this.elements = /* @__PURE__ */ new Map();
    this.sheetsLegacy = /* @__PURE__ */ new Map();
    this.useLegacyStylesheets = !supportsConstructedStylesheets();
  }
  static get instance() {
    if (!globalThis.__gdsTransitionalStyles?.[VER_SUFFIX])
      globalThis.__gdsTransitionalStyles = {
        ...globalThis.__gdsTransitionalStyles,
        [VER_SUFFIX]: new _TransitionalStyles()
      };
    return globalThis.__gdsTransitionalStyles[VER_SUFFIX];
  }
  apply(element, styleKey) {
    if (!element.shadowRoot)
      return;
    if (this.useLegacyStylesheets) {
      this.elements.set(styleKey, element);
      this.applyToElementLegacy(styleKey);
      return;
    }
    const sheet = this.sheets.get(styleKey);
    if (!sheet)
      return;
    this.elements.set(styleKey, element);
    this.applyToElement(styleKey, sheet);
  }
  applyToElement(styleKey, sheet) {
    const element = this.elements.get(styleKey);
    if (!element || !element.shadowRoot)
      return;
    element.shadowRoot.adoptedStyleSheets = [sheet];
    element.isUsingTransitionalStyles = true;
  }
  // This is a fallback for browsers that don't support constructed stylesheets.
  // Primarily, this is here to support Safari/iOS 15.x
  //
  // To work around the lack of Constructed Stylesheets, we use a regular <style>
  // element instead. The _tStyles property needs to be added to the render template
  // of each component.
  //
  // Lit itself will also add a <style> element to the shadow root in these browsers,
  // meaning that we have to override the base styles added from the static style
  // property in this case. This is what the `all: revert` rule is for.
  // We can use cascade layers to ensure that the revert rule ovverides the base styles
  // but not the transitional styles.
  // `@layer base, reset, transitional-styles;`
  applyToElementLegacy(styleKey) {
    const sheet = this.sheetsLegacy.get(styleKey);
    const element = this.elements.get(styleKey);
    if (!element)
      return;
    element._tStyles = html2`<style>
      @layer reset {
        *:not(style, [gds-element]) {
          all: revert;
        }
      }
      ${unsafeHTML(sheet)}
    </style>`;
  }
  register(name, styles2) {
    if (this.useLegacyStylesheets) {
      this.sheetsLegacy.set(name, styles2);
      this.applyToElementLegacy(name);
      return;
    }
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styles2);
    this.sheets.set(name, sheet);
    this.applyToElement(name, sheet);
  }
};

// libs/core/src/primitives/listbox/listbox.ts
import "reflect-metadata";

// libs/core/src/gds-element.ts
import { LitElement as LitElement2 } from "lit";
var GdsElement = class extends LitElement2 {
  constructor() {
    super(...arguments);
    /**
     * The unscoped name of this element.
     */
    this.gdsElementName = "";
    this.isUsingTransitionalStyles = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.gdsElementName = getUnscopedTagName(this.tagName.toLowerCase()) || this.gdsElementName;
    this.setAttribute("gds-element", this.gdsElementName);
  }
};

// libs/core/src/primitives/listbox/listbox.styles.ts
import { css } from "lit";
var style = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
    }
  }
`;
var listbox_styles_default = style;

// libs/core/src/controllers/listbox-kb-nav-controller.ts
var ListboxKbNavController = class {
  constructor(host) {
    this.#keyboardNavigationHandler = (e) => {
      const targetItem = e.target;
      if (!this.host.navigableItems.includes(targetItem))
        return;
      let handled = false;
      if (e.key === "ArrowDown") {
        const nextItemIndex = this.host.navigableItems.indexOf(targetItem) + 1;
        const nextItem = this.host.navigableItems[nextItemIndex];
        nextItem?.focus();
        handled = true;
      } else if (e.key === "ArrowUp") {
        const prevOptionIndex = this.host.navigableItems.indexOf(targetItem) - 1;
        const prevItem = this.host.navigableItems[prevOptionIndex];
        prevItem?.focus();
        handled = true;
      } else if (e.key === "Home") {
        this.host.navigableItems[0]?.focus();
        handled = true;
      } else if (e.key === "End") {
        this.host.navigableItems[this.host.navigableItems.length - 1]?.focus();
        handled = true;
      } else {
        const key = e.key.toLowerCase();
        if (key.length !== 1) {
          return;
        }
        const isLetter = key >= "a" && key <= "z";
        const isNumber = key >= "0" && key <= "9";
        if (isLetter || isNumber) {
          const firstMatch = this.host.navigableItems.find((el) => {
            const text = el.textContent?.trim().toLowerCase();
            return text?.startsWith(key);
          });
          firstMatch?.focus();
          handled = true;
        }
      }
      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    ;
    (this.host = host).addController(this);
  }
  hostConnected() {
    this.host.addEventListener("keydown", this.#keyboardNavigationHandler);
  }
  hostDisconnected() {
    this.host.removeEventListener("keydown", this.#keyboardNavigationHandler);
  }
  #keyboardNavigationHandler;
};

// libs/core/src/utils/helpers/unwrap-slots.ts
function unwrap(slotRef) {
  let slot = slotRef;
  while (slot.assignedElements().length > 0 && slot.assignedElements()[0].nodeName === "SLOT") {
    slot = slot.assignedElements()[0];
  }
  return slot;
}

// libs/core/src/primitives/listbox/listbox.ts
var _slotRef, _handleSelect;
var GdsListbox = class extends GdsElement {
  constructor() {
    super();
    this.multiple = false;
    this.compareWith = (a, b) => a === b;
    __privateAdd(this, _slotRef, createRef());
    __privateAdd(this, _handleSelect, (e) => {
      const option = e.target;
      if (this.multiple)
        option.selected = !option.selected;
      else {
        option.selected = true;
        Array.from(this.options).forEach((el) => {
          if (el !== option)
            el.selected = false;
        });
      }
      ;
      this.ariaActiveDescendantElement = option;
      this.dispatchEvent(
        new CustomEvent("change", {
          bubbles: false,
          composed: false
        })
      );
    });
    new ListboxKbNavController(this);
  }
  get navigableItems() {
    return this.visibleOptionElements;
  }
  /**
   * Returns a list of all `gds-option` elements in the listbox.
   */
  get options() {
    if (!__privateGet(this, _slotRef).value)
      return [];
    return unwrap(__privateGet(this, _slotRef).value).assignedElements().filter(
      (o) => !o.hasAttribute("isplaceholder") && o.gdsElementName === "gds-option"
    ) || [];
  }
  /**
   * Returns a list of all visible `gds-option` elements in the listbox.
   */
  get visibleOptionElements() {
    return this.options.filter((el) => !el.hidden);
  }
  /**
   * Returns a list of all visible `gds-option` elements in the listbox.
   */
  get visibleSelectedOptionElements() {
    return this.options.filter((el) => el.selected && !el.hidden);
  }
  /**
   * Returns a list of all selected `gds-option` elements in the listbox.
   */
  get selection() {
    return this.options.filter((el) => el.selected);
  }
  set selection(values) {
    this.options.forEach((el) => {
      el.selected = values.some((v) => this.compareWith(v, el.value));
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "listbox");
    TransitionalStyles.instance.apply(this, "gds-listbox");
    this.addEventListener("gds-select", __privateGet(this, _handleSelect));
  }
  /**
   * Focuses the first selected option in the listbox.
   * If no option is selected, the first visible option is focused.
   */
  focus() {
    ;
    (this.visibleSelectedOptionElements[0] || this.visibleOptionElements[0])?.focus();
  }
  render() {
    return html`${this._tStyles}<slot ${ref(__privateGet(this, _slotRef))}></slot>`;
  }
  _rerenderOptions() {
    this.options.forEach((el) => {
      el.requestUpdate();
    });
  }
};
_slotRef = new WeakMap();
_handleSelect = new WeakMap();
GdsListbox.styles = listbox_styles_default;
__decorateClass([
  property({
    type: Boolean,
    reflect: true,
    attribute: "aria-multiselectable",
    converter: {
      fromAttribute: Boolean,
      toAttribute: (value) => value.toString()
    }
  })
], GdsListbox.prototype, "multiple", 2);
__decorateClass([
  property()
], GdsListbox.prototype, "compareWith", 2);
__decorateClass([
  state()
], GdsListbox.prototype, "_tStyles", 2);
__decorateClass([
  watch("multiple")
], GdsListbox.prototype, "_rerenderOptions", 1);
GdsListbox = __decorateClass([
  gdsCustomElement("gds-listbox")
], GdsListbox);

// libs/core/src/primitives/listbox/option.ts
import { html as html3 } from "lit";
import { property as property2, state as state2 } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";

// libs/core/src/primitives/listbox/option.styles.ts
import { css as css2 } from "lit";
var style2 = css2`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: block;
      padding: 1rem 1.5rem;
      cursor: pointer;
    }

    :host(:not(:last-child)) {
      border-bottom: 1px solid #e0e0e0;
    }

    :host(:hover) {
      background-color: #ededed;
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: #666;
    }
  }
`;
var option_styles_default = style2;

// libs/core/src/primitives/listbox/option.ts
import "reflect-metadata";

// libs/core/src/mixins/focusable.ts
var Focusable = (superClass) => {
  class HighlightableElement extends superClass {
    constructor() {
      super(...arguments);
      this.onblur = (e) => {
        this.setAttribute("tabindex", "-1");
        this.dispatchEvent(
          new FocusEvent("gds-blur", {
            bubbles: true,
            composed: true,
            relatedTarget: e.relatedTarget
          })
        );
      };
      this.onfocus = (e) => {
        this.dispatchEvent(
          new FocusEvent("gds-focus", {
            bubbles: true,
            composed: true,
            relatedTarget: e.relatedTarget
          })
        );
      };
    }
    focus(options) {
      this.setAttribute("tabindex", "0");
      super.focus(options);
    }
  }
  return HighlightableElement;
};

// libs/core/src/primitives/listbox/option.ts
var _hidden, _emitSelect, emitSelect_fn;
var GdsOption = class extends Focusable(GdsElement) {
  constructor() {
    super();
    __privateAdd(this, _emitSelect);
    __privateAdd(this, _hidden, false);
    this.selected = false;
    this.isPlaceholder = false;
    this.addEventListener("click", __privateMethod(this, _emitSelect, emitSelect_fn));
    this.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ")
        return;
      e.preventDefault();
      __privateMethod(this, _emitSelect, emitSelect_fn).call(this, e);
    });
  }
  get hidden() {
    return __privateGet(this, _hidden);
  }
  set hidden(value) {
    if (this.isPlaceholder)
      return;
    __privateSet(this, _hidden, value === "true" || value === true);
    this.setAttribute("aria-hidden", value.toString());
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    if (this.isPlaceholder) {
      __privateSet(this, _hidden, true);
      this.setAttribute("aria-hidden", "true");
    }
    this.updateComplete.then(
      () => TransitionalStyles.instance.apply(this, "gds-option")
    );
  }
  get parentElement() {
    return super.parentElement;
  }
  _handlePlaceholderStatusChange() {
    if (this.isPlaceholder) {
      __privateSet(this, _hidden, true);
      this.setAttribute("aria-hidden", "true");
    } else {
      __privateSet(this, _hidden, false);
      this.setAttribute("aria-hidden", "false");
    }
  }
  render() {
    const isMultiple = this.parentElement?.multiple;
    const checkbox = html3` <span
      class="checkbox ${classMap({ checked: this.selected })}"
    ></span>`;
    if (!isMultiple) {
      if (this.selected)
        this.setAttribute("highlighted", "");
      else
        this.removeAttribute("highlighted");
    }
    return html3`${this._tStyles}${when(isMultiple, () => checkbox)}
      <slot></slot>`;
  }
};
_hidden = new WeakMap();
_emitSelect = new WeakSet();
emitSelect_fn = function(e) {
  e.stopPropagation();
  this.dispatchEvent(
    new CustomEvent("gds-select", {
      bubbles: true,
      composed: true,
      detail: {
        value: this.value
      }
    })
  );
};
GdsOption.styles = option_styles_default;
__decorateClass([
  property2()
], GdsOption.prototype, "value", 2);
__decorateClass([
  property2({
    attribute: "aria-hidden",
    reflect: true
  })
], GdsOption.prototype, "hidden", 1);
__decorateClass([
  property2({
    attribute: "aria-selected",
    reflect: true
  })
], GdsOption.prototype, "selected", 2);
__decorateClass([
  property2({ type: Boolean, reflect: true })
], GdsOption.prototype, "isPlaceholder", 2);
__decorateClass([
  state2()
], GdsOption.prototype, "_tStyles", 2);
__decorateClass([
  watch("isplaceholder")
], GdsOption.prototype, "_handlePlaceholderStatusChange", 1);
GdsOption = __decorateClass([
  gdsCustomElement("gds-option")
], GdsOption);

// libs/core/src/primitives/popover/popover.ts
import { html as html4, unsafeCSS } from "lit";
import { property as property3, state as state3 } from "lit/decorators.js";
import { classMap as classMap2 } from "lit/directives/class-map.js";
import { msg } from "@lit/localize";
import { createRef as createRef2, ref as ref2 } from "lit/directives/ref.js";
import {
  computePosition,
  autoUpdate,
  offset,
  flip
} from "@floating-ui/dom";

// libs/core/src/primitives/popover/popover.styles.ts
import { css as css3 } from "lit";
var style3 = css3`
  @layer base, reset, transitional-styles;
  @layer base {
    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    dialog {
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 1rem 28px rgba(0, 0, 0, 0.15);
      border-width: 0;
      border-radius: 0.5rem;
    }

    header {
      display: none;
    }

    dialog::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`;
var popover_styles_default = style3;

// libs/core/src/primitives/popover/popover.ts
var _dialogElementRef, _autoPositionCleanupFn, _isMobileViewport, _dispatchUiStateEvent, _handleCloseButton, _registerTriggerEvents, registerTriggerEvents_fn, _unregisterTriggerEvents, unregisterTriggerEvents_fn, _registerAutoPositioning, registerAutoPositioning_fn, _triggerKeyDownListener, _focusFirstSlottedChild, _clickOutsideListener;
var GdsPopover = class extends GdsElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _registerTriggerEvents);
    __privateAdd(this, _unregisterTriggerEvents);
    __privateAdd(this, _registerAutoPositioning);
    this.open = false;
    this.triggerRef = Promise.resolve(void 0);
    this.label = void 0;
    this.placement = "bottom-start";
    this.calcMinWidth = (referenceEl) => `${referenceEl.offsetWidth}px`;
    this.calcMaxWidth = (_referenceEl) => `auto`;
    this.calcMinHeight = (referenceEl) => `auto`;
    this.calcMaxHeight = (_referenceEl) => `500px`;
    this._trigger = void 0;
    this._isVirtKbVisible = false;
    // A reference to the dialog element used to make the popover modal
    __privateAdd(this, _dialogElementRef, createRef2());
    // A function that removes the Floating UI auto positioning. This gets called when we switch to mobile view layout.
    __privateAdd(this, _autoPositionCleanupFn, void 0);
    __privateAdd(this, _isMobileViewport, false);
    __privateAdd(this, _dispatchUiStateEvent, (reason) => {
      this.dispatchEvent(
        new CustomEvent("gds-ui-state", {
          detail: { open: this.open, reason },
          bubbles: false,
          composed: false
        })
      );
    });
    __privateAdd(this, _handleCloseButton, (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.open = false;
      __privateGet(this, _dispatchUiStateEvent).call(this, "close");
      setTimeout(() => this._trigger?.focus(), 250);
    });
    /**
     * ArrowDown on the trigger element will trigger the popover by default, and escape will close it.
     */
    __privateAdd(this, _triggerKeyDownListener, (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        this.open = true;
        __privateGet(this, _dispatchUiStateEvent).call(this, "show");
      }
      if (e.key === "Escape") {
        this.open = false;
        __privateGet(this, _dispatchUiStateEvent).call(this, "cancel");
      }
    });
    /**
     * Move focus to the first slotted child.
     */
    __privateAdd(this, _focusFirstSlottedChild, () => {
      const firstSlottedChild = this.shadowRoot?.querySelector("slot")?.assignedElements()[0];
      this.updateComplete.then(() => {
        firstSlottedChild?.focus();
      });
    });
    __privateAdd(this, _clickOutsideListener, (evt) => {
      const e = evt;
      const dialog = __privateGet(this, _dialogElementRef).value;
      const isNotEnterKey = e.clientX > 0 || e.clientY > 0;
      if (isNotEnterKey && dialog && this.open) {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
        if (!isInDialog) {
          e.stopPropagation();
          this.open = false;
          __privateGet(this, _dispatchUiStateEvent).call(this, "close");
        }
      }
    });
  }
  _handleTriggerRefChanged() {
    this.triggerRef.then((el) => {
      if (el)
        this._trigger = el;
    });
  }
  _handleTriggerChanged() {
    __privateMethod(this, _registerTriggerEvents, registerTriggerEvents_fn).call(this);
    __privateMethod(this, _registerAutoPositioning, registerAutoPositioning_fn).call(this);
  }
  connectedCallback() {
    super.connectedCallback();
    TransitionalStyles.instance.apply(this, "gds-popover");
    __privateMethod(this, _registerTriggerEvents, registerTriggerEvents_fn).call(this);
    this._handleOpenChange();
    this.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.open = false;
        __privateGet(this, _dispatchUiStateEvent).call(this, "cancel");
        e.stopPropagation();
        e.preventDefault();
      }
    });
    this.addEventListener("focusin", (e) => {
      const t = e.target;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") {
        this._isVirtKbVisible = true;
      } else {
        this._isVirtKbVisible = false;
      }
    });
    this.addEventListener("blurin", (_) => {
      this._isVirtKbVisible = false;
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    __privateMethod(this, _unregisterTriggerEvents, unregisterTriggerEvents_fn).call(this);
  }
  render() {
    return html4`${this._tStyles}
      <dialog
        class="${classMap2({ "v-kb-visible": this._isVirtKbVisible })}"
        ${ref2(__privateGet(this, _dialogElementRef))}
      >
        <header>
          <h2>${this.label}</h2>
          <button
            class="close"
            @click=${__privateGet(this, _handleCloseButton)}
            aria-label="${msg("Close")}"
          >
            <i></i>
          </button>
        </header>
        <slot></slot>
      </dialog>`;
  }
  _handleOpenChange() {
    this.setAttribute("aria-hidden", String(!this.open));
    this.hidden = !this.open;
    this.updateComplete.then(() => {
      if (this.open) {
        __privateGet(this, _dialogElementRef).value?.showModal();
        __privateGet(this, _focusFirstSlottedChild).call(this);
        setTimeout(
          () => __privateGet(this, _dialogElementRef).value?.addEventListener(
            "click",
            __privateGet(this, _clickOutsideListener)
          ),
          0
        );
      } else {
        __privateGet(this, _dialogElementRef).value?.close();
        __privateGet(this, _dialogElementRef).value?.removeEventListener(
          "click",
          __privateGet(this, _clickOutsideListener)
        );
      }
    });
  }
  _handleMobileLayout(matches) {
    var _a;
    __privateSet(this, _isMobileViewport, matches);
    if (matches) {
      (_a = __privateGet(this, _autoPositionCleanupFn)) == null ? void 0 : _a.call(this);
      __privateGet(this, _dialogElementRef).value?.style.removeProperty("left");
      __privateGet(this, _dialogElementRef).value?.style.removeProperty("top");
      __privateGet(this, _dialogElementRef).value?.style.removeProperty("minWidth");
      this.updateComplete.then(() => {
        if (this.open)
          __privateGet(this, _dialogElementRef).value?.showModal();
      });
    } else {
      this.updateComplete.then(() => {
        __privateMethod(this, _registerAutoPositioning, registerAutoPositioning_fn).call(this);
      });
    }
  }
};
_dialogElementRef = new WeakMap();
_autoPositionCleanupFn = new WeakMap();
_isMobileViewport = new WeakMap();
_dispatchUiStateEvent = new WeakMap();
_handleCloseButton = new WeakMap();
_registerTriggerEvents = new WeakSet();
registerTriggerEvents_fn = function() {
  this._trigger?.addEventListener("keydown", __privateGet(this, _triggerKeyDownListener));
};
_unregisterTriggerEvents = new WeakSet();
unregisterTriggerEvents_fn = function() {
  var _a;
  this._trigger?.removeEventListener("keydown", __privateGet(this, _triggerKeyDownListener));
  (_a = __privateGet(this, _autoPositionCleanupFn)) == null ? void 0 : _a.call(this);
};
_registerAutoPositioning = new WeakSet();
registerAutoPositioning_fn = function() {
  const referenceEl = this._trigger;
  const floatingEl = __privateGet(this, _dialogElementRef).value;
  if (!referenceEl || !floatingEl || __privateGet(this, _isMobileViewport))
    return;
  if (__privateGet(this, _autoPositionCleanupFn)) {
    __privateGet(this, _autoPositionCleanupFn).call(this);
  }
  __privateSet(this, _autoPositionCleanupFn, autoUpdate(referenceEl, floatingEl, () => {
    computePosition(referenceEl, floatingEl, {
      placement: this.placement,
      middleware: [offset(8), flip()],
      strategy: "fixed"
    }).then(
      ({ x, y }) => Object.assign(floatingEl.style, {
        left: `${x}px`,
        top: `${y}px`,
        minWidth: this.calcMinWidth(referenceEl),
        maxWidth: this.calcMaxWidth(referenceEl),
        minHeight: this.calcMinHeight(referenceEl),
        maxHeight: this.calcMaxHeight(referenceEl)
      })
    );
  }));
};
_triggerKeyDownListener = new WeakMap();
_focusFirstSlottedChild = new WeakMap();
_clickOutsideListener = new WeakMap();
GdsPopover.styles = unsafeCSS(popover_styles_default);
__decorateClass([
  property3({ type: Boolean, reflect: true })
], GdsPopover.prototype, "open", 2);
__decorateClass([
  property3()
], GdsPopover.prototype, "triggerRef", 2);
__decorateClass([
  property3()
], GdsPopover.prototype, "label", 2);
__decorateClass([
  property3()
], GdsPopover.prototype, "placement", 2);
__decorateClass([
  property3()
], GdsPopover.prototype, "calcMinWidth", 2);
__decorateClass([
  property3()
], GdsPopover.prototype, "calcMaxWidth", 2);
__decorateClass([
  property3()
], GdsPopover.prototype, "calcMinHeight", 2);
__decorateClass([
  property3()
], GdsPopover.prototype, "calcMaxHeight", 2);
__decorateClass([
  state3()
], GdsPopover.prototype, "_trigger", 2);
__decorateClass([
  state3()
], GdsPopover.prototype, "_isVirtKbVisible", 2);
__decorateClass([
  watch("triggerRef")
], GdsPopover.prototype, "_handleTriggerRefChanged", 1);
__decorateClass([
  watch("_trigger")
], GdsPopover.prototype, "_handleTriggerChanged", 1);
__decorateClass([
  state3()
], GdsPopover.prototype, "_tStyles", 2);
__decorateClass([
  watch("open")
], GdsPopover.prototype, "_handleOpenChange", 1);
__decorateClass([
  watchMediaQuery("(max-width: 576px)")
], GdsPopover.prototype, "_handleMobileLayout", 1);
GdsPopover = __decorateClass([
  gdsCustomElement("gds-popover")
], GdsPopover);

// libs/core/src/components/form-control.ts
import { property as property4 } from "lit/decorators.js";
var GdsFormControlElement = class extends GdsElement {
  constructor() {
    super();
    this.invalid = false;
    this.name = "";
    /**
     * Event handler for the form reset event.
     * Can be overridden by subclasses to rcustomize the reset value.
     */
    this._handleFormReset = () => {
      this.value = void 0;
    };
    try {
      this.#internals = this.attachInternals();
    } catch (e) {
      this.#internals = {
        form: this.closest("form"),
        setFormValue: (value) => {
          this.value = value;
        },
        setValidity: (validity, validationMessage) => {
          this.invalid = validity.customError;
        },
        validationMessage: "",
        validity: {
          badInput: false,
          customError: false,
          patternMismatch: false,
          rangeOverflow: false,
          rangeUnderflow: false,
          stepMismatch: false,
          tooLong: false,
          tooShort: false,
          typeMismatch: false,
          valueMissing: false,
          valid: true
        },
        willValidate: true,
        checkValidity: () => true,
        reportValidity: () => true
      };
    }
  }
  #internals;
  static {
    this.formAssociated = true;
  }
  get form() {
    return this.#internals.form;
  }
  get validity() {
    return this.#internals.validity;
  }
  get validationMessage() {
    return this.#internals.validationMessage;
  }
  get willValidate() {
    return this.#internals.willValidate;
  }
  checkValidity() {
    return this.#internals.checkValidity();
  }
  reportValidity() {
    return this.#internals.reportValidity();
  }
  connectedCallback() {
    super.connectedCallback();
    this.#internals.form?.addEventListener("reset", this._handleFormReset);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.#internals.form?.removeEventListener("reset", this._handleFormReset);
  }
  __handleValidityChange() {
    this.#internals.setValidity(
      {
        badInput: false,
        customError: this.invalid,
        patternMismatch: false,
        rangeOverflow: false,
        rangeUnderflow: false,
        stepMismatch: false,
        tooLong: false,
        tooShort: false,
        typeMismatch: false,
        valueMissing: false,
        valid: !this.invalid
      },
      this.validationMessage || "Error message"
    );
  }
  __handleValueChange() {
    this.#internals.setFormValue(this.value);
  }
};
__decorateClass([
  property4({
    type: Boolean,
    reflect: true,
    attribute: "aria-invalid",
    converter: {
      fromAttribute: Boolean,
      toAttribute: (value) => value?.toString()
    }
  })
], GdsFormControlElement.prototype, "invalid", 2);
__decorateClass([
  property4()
], GdsFormControlElement.prototype, "value", 2);
__decorateClass([
  property4({ reflect: true })
], GdsFormControlElement.prototype, "name", 2);
__decorateClass([
  watch("invalid")
], GdsFormControlElement.prototype, "__handleValidityChange", 1);
__decorateClass([
  watch("value")
], GdsFormControlElement.prototype, "__handleValueChange", 1);

// libs/core/src/components/dropdown/dropdown.styles.ts
import { css as css4 } from "lit";
var style4 = css4`
  @layer base, reset, transitional-styles;

  @layer base {
    button {
      appearance: none;
      display: block;
      background-color: black;
      border-radius: 2rem;
      border: none;
      color: white;
      padding: 0.7rem 2rem;
      margin: 0.5rem 0;
      box-sizing: border-box;
    }
  }
`;
var dropdown_styles_default = style4;

// libs/core/src/components/dropdown/dropdown.ts
var _optionElements, _handleSearchFieldKeyUp, _handleSearchFieldKeyDown, _handleListboxKeyDown, _handleOptionFocusChange, _handleSelectionChange, handleSelectionChange_fn, _registerAutoCloseListener, registerAutoCloseListener_fn, _unregisterAutoCloseListener, unregisterAutoCloseListener_fn, _blurCloseListener, _tabCloseListener;
var GdsDropdown = class extends GdsFormControlElement {
  constructor() {
    super();
    /**
     * Selects an option in the dropdown.
     *
     * @fires change
     */
    __privateAdd(this, _handleSelectionChange);
    __privateAdd(this, _registerAutoCloseListener);
    __privateAdd(this, _unregisterAutoCloseListener);
    this.label = "";
    this.open = false;
    this.searchable = false;
    this.multiple = false;
    this.compareWith = (a, b) => a === b;
    this.searchFilter = (q, o) => o.innerHTML.toLowerCase().includes(q.toLowerCase());
    this.syncPopoverWidth = false;
    this.maxHeight = 500;
    this.size = "medium";
    this.hideLabel = false;
    __privateAdd(this, _optionElements, void 0);
    /**
     * Event handler for filtering the options in the dropdown.
     *
     * @param e The keyboard event.
     */
    __privateAdd(this, _handleSearchFieldKeyUp, (e) => {
      const input = this._elSearchInput;
      const options = Array.from(__privateGet(this, _optionElements));
      options.forEach((o) => o.hidden = false);
      if (!input.value)
        return;
      const filteredOptions = options.filter(
        (o) => !this.searchFilter(input.value, o)
      );
      filteredOptions.forEach((o) => o.hidden = true);
    });
    /**
     * Check for ArrowDown or Tab in the search field.
     * If found, focus should be moved to the listbox.
     */
    __privateAdd(this, _handleSearchFieldKeyDown, (e) => {
      this._elListbox?.then((listbox) => {
        if (e.key === "ArrowDown" || e.key === "Tab") {
          e.preventDefault();
          listbox.focus();
          return;
        }
      });
    });
    /**
     * Check for Tab in the listbox.
     * If found, focus should be moved to the search field.
     */
    __privateAdd(this, _handleListboxKeyDown, (e) => {
      if (e.key === "Tab" && this.searchable) {
        e.preventDefault();
        this._elSearchInput?.focus();
        return;
      }
    });
    __privateAdd(this, _handleOptionFocusChange, (e) => {
      const triggerButton = this._elTriggerBtn;
      if (triggerButton)
        triggerButton.ariaActiveDescendantElement = e.target;
    });
    /**
     * A listener to close the dropdown when any other element is focused.
     */
    __privateAdd(this, _blurCloseListener, (e) => {
      const isFocusOutside = e instanceof FocusEvent && e.relatedTarget && !this.contains(e.relatedTarget);
      if (isFocusOutside)
        this.open = false;
    });
    __privateAdd(this, _tabCloseListener, (e) => {
      if (e.key === "Tab" && !this.searchable) {
        e.preventDefault();
        this.open = false;
        this._elTriggerBtn?.focus();
      }
    });
    constrainSlots(this);
    updateWhenLocaleChanges(this);
    __privateSet(this, _optionElements, this.getElementsByTagName(
      getScopedTagName("gds-option")
    ));
  }
  get type() {
    return "gds-dropdown";
  }
  /**
   * Get the options of the dropdown.
   */
  get options() {
    return Array.from(__privateGet(this, _optionElements)).filter(
      (o) => !o.hasAttribute("isplaceholder")
    );
  }
  /**
   * Return the first option with a isPlaceholder attribute.
   * If no placeholder is found, this will be undefined.
   */
  get placeholder() {
    return Array.from(__privateGet(this, _optionElements)).find(
      (o) => o.hasAttribute("isplaceholder")
    );
  }
  /**
   * Returns the display value as a string.
   * If the dropdown is in multiple mode, this will be a comma separated list of the selected values.
   */
  get displayValue() {
    let displayValue;
    if (Array.isArray(this.value)) {
      this.value.length > 2 ? displayValue = msg2(str`${this.value.length} selected`) : displayValue = this.value.reduce(
        (acc, cur) => acc + this.options.find((v) => v.value === cur)?.innerHTML + ", ",
        ""
      ).slice(0, -2);
    } else {
      displayValue = this.options.find((v) => v.selected)?.innerHTML;
    }
    return displayValue || this.placeholder?.innerHTML || "";
  }
  connectedCallback() {
    super.connectedCallback();
    TransitionalStyles.instance.apply(this, "gds-dropdown");
    this.updateComplete.then(() => {
      this._handleLightDOMChange();
      this._handleValueChange();
    });
  }
  render() {
    return html`
      ${this._tStyles}
      ${when2(
      this.label && !this.hideLabel,
      () => html`<label for="trigger">${this.label}</label>`
    )}

      <span class="form-info"><slot name="sub-label"></slot></span>

      <button
        id="trigger"
        @click="${() => this.open = !this.open}"
        aria-haspopup="listbox"
        role="combobox"
        aria-owns="listbox"
        aria-controls="listbox"
        aria-expanded="${this.open}"
        aria-label="${this.label}"
        class=${classMap3({ small: this.size === "small" })}
      >
        <slot name="trigger">
          <span>${unsafeHTML2(this.displayValue)}</span>
        </slot>
      </button>

      <span class="form-info"><slot name="message"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .triggerRef=${this._elTriggerBtnAsync}
        .calcMaxWidth=${(trigger) => this.syncPopoverWidth ? `${trigger.offsetWidth}px` : `auto`}
        .calcMaxHeight=${(_trigger) => `${this.maxHeight}px`}
        @gds-ui-state=${(e) => this.open = e.detail.open}
      >
        ${when2(
      this.searchable,
      () => html`<input
            id="searchinput"
            type="text"
            aria-label="${msg2("Filter available options")}"
            placeholder="${msg2("Search")}"
            @keydown=${__privateGet(this, _handleSearchFieldKeyDown)}
            @keyup=${__privateGet(this, _handleSearchFieldKeyUp)}
          />`
    )}

        <gds-listbox
          id="listbox"
          .multiple="${ifDefined(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${__privateMethod(this, _handleSelectionChange, handleSelectionChange_fn)}"
          @gds-focus="${__privateGet(this, _handleOptionFocusChange)}"
          @keydown=${__privateGet(this, _handleListboxKeyDown)}
        >
          <slot gds-allow="gds-option gds-menu-heading"></slot>
        </gds-listbox>
      </gds-popover>
    `;
  }
  _handleLightDOMChange() {
    this.requestUpdate();
    if (this.multiple) {
      this._handleValueChange();
      return;
    }
    if (this.value === void 0) {
      if (this.placeholder)
        this.value = this.placeholder.value;
      else
        this.value = this.options[0]?.value;
    } else if (!this.placeholder && this.options.find(
      (o) => this.compareWith(o.value, this.value)
    ) === void 0) {
      this.options[0] && (this.options[0].selected = true);
      this.value = this.options[0]?.value;
    }
  }
  _handleValueChange() {
    this._elListbox.then((listbox) => {
      if (listbox) {
        if (Array.isArray(this.value))
          listbox.selection = this.value;
        else
          listbox.selection = [this.value];
      }
    });
  }
  _onOpenChange() {
    const open = this.open;
    Array.from(__privateGet(this, _optionElements)).forEach((o) => o.hidden = !open);
    if (open)
      __privateMethod(this, _registerAutoCloseListener, registerAutoCloseListener_fn).call(this);
    else {
      __privateMethod(this, _unregisterAutoCloseListener, unregisterAutoCloseListener_fn).call(this);
      this._elSearchInput && (this._elSearchInput.value = "");
    }
    this.dispatchEvent(
      new CustomEvent("gds-ui-state", {
        detail: { open },
        bubbles: true,
        composed: true
      })
    );
  }
};
_optionElements = new WeakMap();
_handleSearchFieldKeyUp = new WeakMap();
_handleSearchFieldKeyDown = new WeakMap();
_handleListboxKeyDown = new WeakMap();
_handleOptionFocusChange = new WeakMap();
_handleSelectionChange = new WeakSet();
handleSelectionChange_fn = function() {
  this._elListbox.then((listbox) => {
    if (this.multiple)
      this.value = listbox.selection.map((s) => s.value);
    else {
      this.value = listbox.selection[0]?.value;
      this.open = false;
      setTimeout(() => this._elTriggerBtn?.focus(), 0);
    }
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true
      })
    );
  });
};
_registerAutoCloseListener = new WeakSet();
registerAutoCloseListener_fn = function() {
  this.addEventListener("blur", __privateGet(this, _blurCloseListener));
  this.addEventListener("gds-blur", __privateGet(this, _blurCloseListener));
  this.addEventListener("keydown", __privateGet(this, _tabCloseListener));
};
_unregisterAutoCloseListener = new WeakSet();
unregisterAutoCloseListener_fn = function() {
  this.removeEventListener("blur", __privateGet(this, _blurCloseListener));
  this.removeEventListener("gds-blur", __privateGet(this, _blurCloseListener));
  this.removeEventListener("keydown", __privateGet(this, _tabCloseListener));
};
_blurCloseListener = new WeakMap();
_tabCloseListener = new WeakMap();
GdsDropdown.styles = dropdown_styles_default;
GdsDropdown.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property5()
], GdsDropdown.prototype, "label", 2);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], GdsDropdown.prototype, "open", 2);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], GdsDropdown.prototype, "searchable", 2);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], GdsDropdown.prototype, "multiple", 2);
__decorateClass([
  property5()
], GdsDropdown.prototype, "compareWith", 2);
__decorateClass([
  property5()
], GdsDropdown.prototype, "searchFilter", 2);
__decorateClass([
  property5({ type: Boolean, attribute: "sync-popover-width" })
], GdsDropdown.prototype, "syncPopoverWidth", 2);
__decorateClass([
  property5({ type: Number, attribute: "max-height" })
], GdsDropdown.prototype, "maxHeight", 2);
__decorateClass([
  property5()
], GdsDropdown.prototype, "size", 2);
__decorateClass([
  property5({ type: Boolean, attribute: "hide-label" })
], GdsDropdown.prototype, "hideLabel", 2);
__decorateClass([
  state4()
], GdsDropdown.prototype, "_tStyles", 2);
__decorateClass([
  query("#trigger")
], GdsDropdown.prototype, "_elTriggerBtn", 2);
__decorateClass([
  queryAsync("#trigger")
], GdsDropdown.prototype, "_elTriggerBtnAsync", 2);
__decorateClass([
  queryAsync("#listbox")
], GdsDropdown.prototype, "_elListbox", 2);
__decorateClass([
  query("#searchinput")
], GdsDropdown.prototype, "_elSearchInput", 2);
__decorateClass([
  observeLightDOM({
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true
  })
], GdsDropdown.prototype, "_handleLightDOMChange", 1);
__decorateClass([
  watch("value")
], GdsDropdown.prototype, "_handleValueChange", 1);
__decorateClass([
  watch("open")
], GdsDropdown.prototype, "_onOpenChange", 1);
GdsDropdown = __decorateClass([
  gdsCustomElement("gds-dropdown")
], GdsDropdown);

// libs/core/src/primitives/menu/menu-heading.ts
import { html as html5 } from "lit";

// libs/core/src/primitives/menu/menu-heading.styles.ts
import { css as css5 } from "lit";
var style5 = css5`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      padding: 0.5 1rem;
      cursor: pointer;
    }

    :host(:hover) {
      background-color: grey;
    }
  }
`;
var menu_heading_styles_default = style5;

// libs/core/src/primitives/menu/menu-heading.ts
var GdsMenuHeading = class extends GdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("inert", "true");
    this.updateComplete.then(
      () => TransitionalStyles.instance.apply(this, "gds-menu-heading")
    );
  }
  render() {
    return html5`<slot></slot>`;
  }
};
GdsMenuHeading.styles = menu_heading_styles_default;
GdsMenuHeading = __decorateClass([
  gdsCustomElement("gds-menu-heading")
], GdsMenuHeading);

// libs/core/src/components/context-menu/context-menu.ts
import { nothing } from "lit";
import { msg as msg3 } from "@lit/localize";
import { classMap as classMap4 } from "lit-html/directives/class-map.js";
import { property as property6, queryAsync as queryAsync2, state as state6 } from "lit/decorators.js";

// libs/core/src/components/context-menu/context-menu.styles.ts
import { css as css6 } from "lit";
var style6 = css6`
  @layer base, reset, transitional-styles;
  @layer base {
    button {
      display: flex;
      border-width: 0;
      background-color: #ededed;
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: #dcdcdc;
    }
  }
`;
var context_menu_styles_default = style6;

// libs/core/src/primitives/menu/menu.ts
import { createRef as createRef3, ref as ref3 } from "lit/directives/ref.js";
import { state as state5 } from "lit/decorators.js";
var _slotRef2;
var GdsMenu = class extends GdsElement {
  constructor() {
    super();
    __privateAdd(this, _slotRef2, createRef3());
    new ListboxKbNavController(this);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "menu");
    TransitionalStyles.instance.apply(this, "gds-listbox");
  }
  get navigableItems() {
    if (!__privateGet(this, _slotRef2).value)
      return [];
    return unwrap(__privateGet(this, _slotRef2).value).assignedElements().filter(
      (o) => !o.hasAttribute("isplaceholder") && o.gdsElementName === "gds-menu-item"
    ) || [];
  }
  /**
   * Focuses the first item in the menu.
   */
  focus() {
    this.navigableItems[0]?.focus();
  }
  render() {
    return html`${this._tStyles}<slot ${ref3(__privateGet(this, _slotRef2))}></slot>`;
  }
};
_slotRef2 = new WeakMap();
__decorateClass([
  state5()
], GdsMenu.prototype, "_tStyles", 2);
GdsMenu = __decorateClass([
  gdsCustomElement("gds-menu")
], GdsMenu);

// libs/core/src/components/context-menu/context-menu.ts
var _handleItemClick, handleItemClick_fn;
var GdsContextMenu = class extends GdsElement {
  constructor() {
    super();
    __privateAdd(this, _handleItemClick);
    this.open = false;
    this.buttonLabel = msg3("Open context menu");
    this.showLabel = false;
    this.label = "";
    this.placement = "bottom-start";
    constrainSlots(this);
  }
  connectedCallback() {
    super.connectedCallback();
    TransitionalStyles.instance.apply(this, "gds-context-menu");
    this.addEventListener("keydown", (e) => {
      if (this.open && e.key == "Tab") {
        e.preventDefault();
        this.open = false;
        this.elTriggerBtn.then((el) => el.focus());
      }
    });
  }
  render() {
    return html`${this._tStyles}
      <button
        id="trigger"
        class="icon border-0 small ${classMap4({ highlighted: this.open })}"
        aria-label=${this.buttonLabel ?? this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${() => this.open = !this.open}
      >
        <slot name="trigger">
          ${this.showLabel ? this.buttonLabel ?? this.label : nothing}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${(e) => this.open = e.detail.open}
      >
        <gds-menu
          aria-label=${this.label ?? this.buttonLabel}
          @gds-menu-item-click=${__privateMethod(this, _handleItemClick, handleItemClick_fn)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`;
  }
};
_handleItemClick = new WeakSet();
handleItemClick_fn = function() {
  this.open = false;
};
GdsContextMenu.styles = [context_menu_styles_default];
GdsContextMenu.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property6({ type: Boolean, reflect: true })
], GdsContextMenu.prototype, "open", 2);
__decorateClass([
  property6({
    attribute: "button-label"
  })
], GdsContextMenu.prototype, "buttonLabel", 2);
__decorateClass([
  property6({
    attribute: "show-label"
  })
], GdsContextMenu.prototype, "showLabel", 2);
__decorateClass([
  property6()
], GdsContextMenu.prototype, "label", 2);
__decorateClass([
  property6()
], GdsContextMenu.prototype, "placement", 2);
__decorateClass([
  state6()
], GdsContextMenu.prototype, "_tStyles", 2);
__decorateClass([
  queryAsync2("#trigger")
], GdsContextMenu.prototype, "elTriggerBtn", 2);
GdsContextMenu = __decorateClass([
  gdsCustomElement("gds-context-menu")
], GdsContextMenu);

// libs/core/src/primitives/menu/menu-item.ts
import { state as state7 } from "lit/decorators.js";
var _handleOnClick;
var GdsMenuItem = class extends Focusable(GdsElement) {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handleOnClick, () => {
      this.dispatchEvent(
        new CustomEvent("gds-menu-item-click", {
          bubbles: true,
          composed: true
        })
      );
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "menuitem");
    this.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ")
        return;
      e.preventDefault();
      this.click();
    });
    this.addEventListener("click", __privateGet(this, _handleOnClick));
    TransitionalStyles.instance.apply(this, "gds-option");
  }
  render() {
    return html`${this._tStyles}<slot></slot>`;
  }
};
_handleOnClick = new WeakMap();
GdsMenuItem.styles = [option_styles_default];
__decorateClass([
  state7()
], GdsMenuItem.prototype, "_tStyles", 2);
GdsMenuItem = __decorateClass([
  gdsCustomElement("gds-menu-item")
], GdsMenuItem);

// libs/core/src/components/datepicker/datepicker.ts
import { property as property9, query as query3, queryAll, queryAsync as queryAsync3, state as state10 } from "lit/decorators.js";
import { join } from "lit/directives/join.js";
import { when as when4 } from "lit/directives/when.js";
import { until } from "lit/directives/until.js";
import { map } from "lit/directives/map.js";
import { repeat } from "lit/directives/repeat.js";
import { classMap as classMap6 } from "lit/directives/class-map.js";
import { nothing as nothing2 } from "lit";
import { msg as msg5 } from "@lit/localize";

// libs/core/src/primitives/calendar/calendar.ts
import { html as html7 } from "lit";
import { classMap as classMap5 } from "lit/directives/class-map.js";
import { when as when3 } from "lit/directives/when.js";
import { property as property7, query as query2, state as state8 } from "lit/decorators.js";
import { msg as msg4 } from "@lit/localize";
import {
  addDays as addDays2,
  isSameDay,
  isSameMonth,
  getWeek,
  subMonths,
  addMonths
} from "date-fns";

// libs/core/src/primitives/calendar/functions.ts
import {
  startOfMonth,
  endOfMonth,
  addDays,
  eachWeekOfInterval,
  eachDayOfInterval
} from "date-fns";
import { html as html6 } from "lit-html";
function renderMonthGridView(date, template) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const weeks = eachWeekOfInterval(
    { start: monthStart, end: monthEnd },
    { weekStartsOn: 1 }
  );
  return html6`${template(
    weeks.map((weekStartDay) => ({
      days: eachDayOfInterval({
        start: weekStartDay,
        end: addDays(weekStartDay, 6)
      })
    }))
  )}`;
}

// libs/core/src/primitives/calendar/calendar.styles.ts
import { css as css7 } from "lit";
var style7 = css7`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #999;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`;
var calendar_styles_default = style7;

// libs/core/src/primitives/calendar/calendar.ts
var _setSelectedDate, setSelectedDate_fn, _handleKeyDown, handleKeyDown_fn;
var GdsCalendar = class extends GdsElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _setSelectedDate);
    __privateAdd(this, _handleKeyDown);
    this.min = new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1);
    this.max = new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1);
    this.focusedDate = /* @__PURE__ */ new Date();
    this.disabledWeekends = false;
    this.showWeekNumbers = false;
  }
  get focusedMonth() {
    return this.focusedDate.getMonth();
  }
  set focusedMonth(month) {
    const newDate = new Date(this.focusedDate);
    newDate.setMonth(month);
    newDate.setHours(0, 0, 0, 0);
    this.focusedDate = newDate;
  }
  get focusedYear() {
    return this.focusedDate.getFullYear();
  }
  set focusedYear(year) {
    this.focusedDate = new Date(this.focusedDate.setFullYear(year));
  }
  /**
   * Returns the date cell element for the given day number.
   */
  getDateCell(dayNumber) {
    return this.shadowRoot?.querySelector(`#dateCell-${dayNumber}`);
  }
  connectedCallback() {
    super.connectedCallback();
    TransitionalStyles.instance.apply(this, "gds-calendar");
    this.addEventListener("keydown", __privateMethod(this, _handleKeyDown, handleKeyDown_fn));
  }
  focus() {
    super.focus();
    this._elFocusedCell?.focus();
  }
  render() {
    const currentDate = /* @__PURE__ */ new Date();
    return html7`${this._tStyles}
      <table>
        <thead>
          <tr>
            ${when3(this.showWeekNumbers, () => html7`<th></th>`)}
            <th>${msg4("Mon")}</th>
            <th>${msg4("Tue")}</th>
            <th>${msg4("Wed")}</th>
            <th>${msg4("Thu")}</th>
            <th>${msg4("Fri")}</th>
            <th>${msg4("Sat")}</th>
            <th>${msg4("Sun")}</th>
          </tr>
        </thead>
        <tbody>
          ${renderMonthGridView(
      this.focusedDate,
      (weeks) => html7`
              ${weeks.map(
        (week) => html7`
                  <tr>
                    ${when3(
          this.showWeekNumbers,
          () => html7`<td class="week-number">
                          ${getWeek(week.days[0])}
                        </td>`
        )}
                    ${week.days.map((day) => {
          const isOutsideCurrentMonth = !isSameMonth(this.focusedDate, day) || day < this.min || day > this.max;
          const isWeekend = day.getDay() === 0 || day.getDay() === 6;
          const isDisabled = isOutsideCurrentMonth || this.disabledWeekends && isWeekend || this.disabledDates && this.disabledDates.some((d) => isSameDay(d, day));
          return html7`
                        <td
                          class="${classMap5({
            disabled: Boolean(isDisabled),
            today: isSameDay(currentDate, day)
          })}"
                          ?disabled=${isDisabled}
                          tabindex="${isSameDay(this.focusedDate, day) ? 0 : -1}"
                          aria-selected="${this.value && isSameDay(this.value, day)}"
                          aria-label="${day.toDateString()}"
                          @click=${() => isDisabled ? null : __privateMethod(this, _setSelectedDate, setSelectedDate_fn).call(this, day)}
                          id="dateCell-${day.getDate()}"
                        >
                          ${day.getDate()}
                        </td>
                      `;
        })}
                  </tr>
                `
      )}
            `
    )}
        </tbody>
      </table>`;
  }
  _valueChanged() {
    if (!this.value)
      return;
    this.focusedDate = this.value;
  }
};
_setSelectedDate = new WeakSet();
setSelectedDate_fn = function(date) {
  this.value = date;
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: date,
      bubbles: false,
      composed: false
    })
  );
};
_handleKeyDown = new WeakSet();
handleKeyDown_fn = function(e) {
  let handled = false;
  let newFocusedDate = new Date(this.focusedDate);
  if (e.key === "ArrowLeft") {
    newFocusedDate = addDays2(this.focusedDate, -1);
    handled = true;
  } else if (e.key === "ArrowRight") {
    newFocusedDate = addDays2(this.focusedDate, 1);
    handled = true;
  } else if (e.key === "ArrowUp") {
    newFocusedDate = addDays2(this.focusedDate, -7);
    handled = true;
  } else if (e.key === "ArrowDown") {
    newFocusedDate = addDays2(this.focusedDate, 7);
    handled = true;
  } else if (e.key === "Enter" || e.key === " ") {
    if (!this._elFocusedCell?.hasAttribute("disabled")) {
      __privateMethod(this, _setSelectedDate, setSelectedDate_fn).call(this, this.focusedDate);
    }
    handled = true;
  } else if (e.key === "Home") {
    newFocusedDate = new Date(this.focusedYear, this.focusedMonth, 1);
    handled = true;
  } else if (e.key === "End") {
    newFocusedDate = new Date(this.focusedYear, this.focusedMonth + 1, 0);
    handled = true;
  } else if (e.key === "PageUp") {
    newFocusedDate = subMonths(this.focusedDate, 1);
    handled = true;
  } else if (e.key === "PageDown") {
    newFocusedDate = addMonths(this.focusedDate, 1);
    handled = true;
  }
  if (newFocusedDate.getFullYear() >= this.min.getFullYear() && newFocusedDate.getFullYear() <= this.max.getFullYear()) {
    this.focusedDate = newFocusedDate;
  }
  if (handled) {
    e.preventDefault();
    e.stopPropagation();
    this.updateComplete.then(() => {
      this._elFocusedCell?.focus();
      this.dispatchEvent(
        new CustomEvent("gds-date-focused", {
          detail: this.focusedDate,
          bubbles: false,
          composed: false
        })
      );
    });
  }
};
GdsCalendar.styles = [calendar_styles_default];
GdsCalendar.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property7()
], GdsCalendar.prototype, "value", 2);
__decorateClass([
  property7({ type: Date })
], GdsCalendar.prototype, "min", 2);
__decorateClass([
  property7({ type: Date })
], GdsCalendar.prototype, "max", 2);
__decorateClass([
  property7()
], GdsCalendar.prototype, "focusedDate", 2);
__decorateClass([
  property7({ type: Boolean, attribute: "disabled-weekends" })
], GdsCalendar.prototype, "disabledWeekends", 2);
__decorateClass([
  property7({ type: Array, attribute: "disabled-dates" })
], GdsCalendar.prototype, "disabledDates", 2);
__decorateClass([
  property7({ type: Number })
], GdsCalendar.prototype, "focusedMonth", 1);
__decorateClass([
  property7({ type: Number })
], GdsCalendar.prototype, "focusedYear", 1);
__decorateClass([
  property7({ type: Boolean })
], GdsCalendar.prototype, "showWeekNumbers", 2);
__decorateClass([
  query2('td[tabindex="0"]')
], GdsCalendar.prototype, "_elFocusedCell", 2);
__decorateClass([
  state8()
], GdsCalendar.prototype, "_tStyles", 2);
__decorateClass([
  watch("value")
], GdsCalendar.prototype, "_valueChanged", 1);
GdsCalendar = __decorateClass([
  gdsCustomElement("gds-calendar")
], GdsCalendar);

// libs/core/src/components/datepicker/date-part-spinner.ts
import { LitElement as LitElement6 } from "lit";
import { property as property8, state as state9 } from "lit/decorators.js";
var _inputBuffer, _increment, _decrement, _handleClick, _handleFocus, _handleBlur, _handleWheel, _handleKeyDown2, _focusNextSpinner, focusNextSpinner_fn, _dispatchChangeEvent, dispatchChangeEvent_fn, _formatNumber, formatNumber_fn, _clamp, clamp_fn, _clearInputBuffer, clearInputBuffer_fn;
var GdsDatePartSpinner = class extends LitElement6 {
  constructor() {
    super(...arguments);
    __privateAdd(this, _focusNextSpinner);
    __privateAdd(this, _dispatchChangeEvent);
    __privateAdd(this, _formatNumber);
    __privateAdd(this, _clamp);
    __privateAdd(this, _clearInputBuffer);
    this.value = 0;
    this.length = 2;
    this.min = 0;
    this.max = Number.MAX_SAFE_INTEGER;
    this.displayValue = __privateMethod(this, _formatNumber, formatNumber_fn).call(this, this.value, this.length);
    __privateAdd(this, _inputBuffer, "");
    __privateAdd(this, _increment, () => {
      let current = parseInt(this.value.toString());
      if (Number.isNaN(current))
        current = this.length === 2 ? this.min : (/* @__PURE__ */ new Date()).getFullYear() - 1;
      this.value = __privateMethod(this, _clamp, clamp_fn).call(this, current + 1);
      __privateMethod(this, _dispatchChangeEvent, dispatchChangeEvent_fn).call(this);
    });
    __privateAdd(this, _decrement, () => {
      let current = parseInt(this.value.toString());
      if (Number.isNaN(current))
        current = this.length === 2 ? this.max : (/* @__PURE__ */ new Date()).getFullYear() + 1;
      this.value = __privateMethod(this, _clamp, clamp_fn).call(this, current - 1);
      __privateMethod(this, _dispatchChangeEvent, dispatchChangeEvent_fn).call(this);
    });
    __privateAdd(this, _handleClick, (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.focus();
    });
    __privateAdd(this, _handleFocus, () => {
      __privateMethod(this, _clearInputBuffer, clearInputBuffer_fn).call(this);
    });
    __privateAdd(this, _handleBlur, () => {
      if (__privateGet(this, _inputBuffer) === "")
        return;
      __privateMethod(this, _clearInputBuffer, clearInputBuffer_fn).call(this);
      this.value = __privateMethod(this, _clamp, clamp_fn).call(this, parseInt(this.value.toString()));
      __privateMethod(this, _dispatchChangeEvent, dispatchChangeEvent_fn).call(this);
    });
    __privateAdd(this, _handleWheel, (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (e.deltaY > 0) {
        __privateGet(this, _decrement).call(this);
      } else {
        __privateGet(this, _increment).call(this);
      }
    });
    __privateAdd(this, _handleKeyDown2, (e) => {
      let handled = false;
      if (e.key === "ArrowUp") {
        __privateGet(this, _increment).call(this);
        handled = true;
      } else if (e.key === "ArrowDown") {
        __privateGet(this, _decrement).call(this);
        handled = true;
      } else {
        const key = parseInt(e.key);
        if (!isNaN(key)) {
          if (__privateGet(this, _inputBuffer).length < this.length) {
            __privateSet(this, _inputBuffer, __privateGet(this, _inputBuffer) + key.toString());
            this.value = parseInt(__privateGet(this, _inputBuffer));
          }
          if (__privateGet(this, _inputBuffer).length === this.length) {
            this.value = __privateMethod(this, _clamp, clamp_fn).call(this, this.value);
            __privateMethod(this, _clearInputBuffer, clearInputBuffer_fn).call(this);
            __privateMethod(this, _focusNextSpinner, focusNextSpinner_fn).call(this);
            __privateMethod(this, _dispatchChangeEvent, dispatchChangeEvent_fn).call(this);
          }
          handled = true;
        }
      }
      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
  // No need for a shadow root here
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "spinbutton");
    this.setAttribute("tabindex", "0");
    this.addEventListener("wheel", __privateGet(this, _handleWheel));
    this.addEventListener("keydown", __privateGet(this, _handleKeyDown2));
    this.addEventListener("blur", __privateGet(this, _handleBlur));
    this.addEventListener("focus", __privateGet(this, _handleFocus));
    this.addEventListener("click", __privateGet(this, _handleClick));
    this.addEventListener("mousedown", __privateGet(this, _handleClick));
  }
  focus(options) {
    super.focus(options);
    __privateGet(this, _handleFocus).call(this);
  }
  render() {
    return html`${this.displayValue}`;
  }
  _refreshDisplayValue() {
    this.displayValue = __privateMethod(this, _formatNumber, formatNumber_fn).call(this, this.value, this.length);
    this.setAttribute("aria-valuetext", this.value.toString());
  }
};
_inputBuffer = new WeakMap();
_increment = new WeakMap();
_decrement = new WeakMap();
_handleClick = new WeakMap();
_handleFocus = new WeakMap();
_handleBlur = new WeakMap();
_handleWheel = new WeakMap();
_handleKeyDown2 = new WeakMap();
_focusNextSpinner = new WeakSet();
focusNextSpinner_fn = function() {
  let nextSpinner = this.nextElementSibling;
  while (nextSpinner) {
    if (nextSpinner instanceof GdsDatePartSpinner) {
      nextSpinner.focus();
      break;
    }
    nextSpinner = nextSpinner.nextElementSibling;
  }
};
_dispatchChangeEvent = new WeakSet();
dispatchChangeEvent_fn = function() {
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: { value: this.value.toString() }
    })
  );
};
_formatNumber = new WeakSet();
formatNumber_fn = function(num, padZeros) {
  return String(num).padStart(padZeros, "0");
};
_clamp = new WeakSet();
clamp_fn = function(value) {
  return Math.max(this.min, Math.min(this.max, value));
};
_clearInputBuffer = new WeakSet();
clearInputBuffer_fn = function() {
  __privateSet(this, _inputBuffer, "");
};
GdsDatePartSpinner.formAssociated = true;
__decorateClass([
  property8({ type: Number })
], GdsDatePartSpinner.prototype, "value", 2);
__decorateClass([
  property8({ type: Number })
], GdsDatePartSpinner.prototype, "length", 2);
__decorateClass([
  property8({ type: Number, attribute: "aria-valuemin" })
], GdsDatePartSpinner.prototype, "min", 2);
__decorateClass([
  property8({ type: Number, attribute: "aria-valuemax" })
], GdsDatePartSpinner.prototype, "max", 2);
__decorateClass([
  state9()
], GdsDatePartSpinner.prototype, "displayValue", 2);
__decorateClass([
  watch("value")
], GdsDatePartSpinner.prototype, "_refreshDisplayValue", 1);
GdsDatePartSpinner = __decorateClass([
  gdsCustomElement("gds-date-part-spinner")
], GdsDatePartSpinner);

// libs/core/src/components/datepicker/datepicker.styles.ts
import { css as css8 } from "lit";
var styles = css8`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`;

// libs/core/src/components/datepicker/datepicker.ts
var dateConverter = {
  fromAttribute(value) {
    return new Date(value);
  },
  toAttribute(value) {
    return value.toISOString();
  }
};
var dateArrayConverter = {
  fromAttribute(value) {
    return value.split(",").map((d) => new Date(d.trim()));
  },
  toAttribute(value) {
    return JSON.stringify(value.map((d) => d.toISOString()));
  }
};
var _valueOnOpen, _renderBackToValidRangeButton, renderBackToValidRangeButton_fn, _focusDate, focusDate_fn, _getSpinnerLabel, getSpinnerLabel_fn, _getMinSpinnerValue, getMinSpinnerValue_fn, _getMaxSpinnerValue, getMaxSpinnerValue_fn, _dispatchChangeEvent2, dispatchChangeEvent_fn2, _dispatchInputEvent, dispatchInputEvent_fn, _handleFieldFocusOut, _handleSpinnerFocus, _handleClipboardCopy, _handleClipboardPaste, _handleFieldClick, _handleCalendarChange, _handleMonthChange, _handleYearChange, _handleIncrementFocusedMonth, _handleDecrementFocusedMonth, _handleCalendarFocusChange, _handlePopoverStateChange, _handleSpinnerKeydown, _parseDateFormat, parseDateFormat_fn, _handleSpinnerChange, _spinnerState, _years, years_get, _isValueOutsideRange, isValueOutsideRange_get;
var GdsDatepicker = class extends GdsFormControlElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _renderBackToValidRangeButton);
    __privateAdd(this, _focusDate);
    __privateAdd(this, _getSpinnerLabel);
    __privateAdd(this, _getMinSpinnerValue);
    __privateAdd(this, _getMaxSpinnerValue);
    __privateAdd(this, _dispatchChangeEvent2);
    __privateAdd(this, _dispatchInputEvent);
    /**
     * Takes a dateformat string from the dateformat attribute and turnes it to a DateFormatLayout object used in rendering the template.
     */
    __privateAdd(this, _parseDateFormat);
    /**
     * Returns a year iterator between the min and max dates for use in the year dropdown.
     */
    __privateAdd(this, _years);
    __privateAdd(this, _isValueOutsideRange);
    this.min = new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1);
    this.max = new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1);
    this.open = false;
    this.label = "";
    this.showWeekNumbers = false;
    this.size = "medium";
    this.hideLabel = false;
    this.disabledWeekends = false;
    this._focusedMonth = (/* @__PURE__ */ new Date()).getMonth();
    this._focusedYear = (/* @__PURE__ */ new Date()).getFullYear();
    this._dateFormatLayout = __privateMethod(this, _parseDateFormat, parseDateFormat_fn).call(this, "y-m-d");
    __privateAdd(this, _valueOnOpen, void 0);
    __privateAdd(this, _handleFieldFocusOut, (e) => {
      this._elTrigger.then((_) => {
        const parent = e.relatedTarget?.parentElement;
        if (parent === e.target)
          return;
        document.getSelection()?.removeAllRanges();
      });
    });
    __privateAdd(this, _handleSpinnerFocus, (e) => {
      this._elTrigger.then((field) => {
        document.getSelection()?.removeAllRanges();
        const range = new Range();
        range.setStart(field.firstChild, 0);
        range.setEnd(field.lastChild, 4);
        document.getSelection()?.addRange(range);
      });
    });
    __privateAdd(this, _handleClipboardCopy, (e) => {
      this._elTrigger.then((field) => {
        if (e.currentTarget !== field)
          return;
        e.preventDefault();
        e.clipboardData?.setData("text/plain", this.displayValue);
      });
    });
    __privateAdd(this, _handleClipboardPaste, (e) => {
      this._elTrigger.then((field) => {
        if (e.currentTarget !== field)
          return;
        e.preventDefault();
        const pasted = e.clipboardData?.getData("text/plain");
        if (!pasted)
          return;
        const pastedDate = new Date(pasted);
        if (pastedDate.toString() === "Invalid Date")
          return;
        this.value = pastedDate;
        __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
      });
    });
    __privateAdd(this, _handleFieldClick, (e) => {
      this._elSpinners[0].focus();
    });
    __privateAdd(this, _handleCalendarChange, (e) => {
      e.stopPropagation();
      this.value = e.detail;
      this.open = false;
      __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
    });
    __privateAdd(this, _handleMonthChange, (e) => {
      e.stopPropagation();
      this._focusedMonth = e.target?.value;
    });
    __privateAdd(this, _handleYearChange, (e) => {
      e.stopPropagation();
      this._focusedYear = e.target?.value;
    });
    __privateAdd(this, _handleIncrementFocusedMonth, (_e) => {
      this._focusedMonth++;
      if (this._focusedMonth > 11) {
        this._focusedMonth = 0;
        this._focusedYear++;
      }
    });
    __privateAdd(this, _handleDecrementFocusedMonth, (_e) => {
      this._focusedMonth--;
      if (this._focusedMonth < 0) {
        this._focusedMonth = 11;
        this._focusedYear--;
      }
    });
    __privateAdd(this, _handleCalendarFocusChange, async () => {
      this._focusedMonth = (await this._elCalendar).focusedMonth;
      this._focusedYear = (await this._elCalendar).focusedYear;
      this.value = (await this._elCalendar).focusedDate;
      this.requestUpdate();
      __privateMethod(this, _dispatchInputEvent, dispatchInputEvent_fn).call(this);
    });
    __privateAdd(this, _handlePopoverStateChange, async (e) => {
      if (e.target !== e.currentTarget)
        return;
      this.open = e.detail.open;
      if (e.detail.reason === "close") {
        this.value = (await this._elCalendar).value;
        if (this.value) {
          this._focusedMonth = this.value.getMonth();
          this._focusedYear = this.value.getFullYear();
        }
        __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
      }
      if (e.detail.reason === "cancel") {
        this.value = __privateGet(this, _valueOnOpen);
      }
    });
    __privateAdd(this, _handleSpinnerKeydown, (e) => {
      const index = Array.from(this._elSpinners).findIndex(
        (spinner) => spinner === e.target
      );
      if (e.key === "ArrowRight") {
        const next = this._elSpinners[index + 1];
        if (next)
          next.focus();
      }
      if (e.key === "ArrowLeft") {
        const prev = this._elSpinners[index - 1];
        if (prev)
          prev.focus();
      }
    });
    __privateAdd(this, _handleSpinnerChange, (val, name) => {
      __privateGet(this, _spinnerState)[name] = val;
      const newDate = /* @__PURE__ */ new Date();
      newDate.setFullYear(parseInt(__privateGet(this, _spinnerState).year));
      newDate.setMonth(parseInt(__privateGet(this, _spinnerState).month) - 1);
      newDate.setDate(parseInt(__privateGet(this, _spinnerState).day));
      if (newDate.toString() === "Invalid Date")
        return;
      this.value = newDate;
      __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
    });
    /**
     * The spinner state keeps track of the spinner values regardless of wheter a complete date has been enter yet.
     */
    __privateAdd(this, _spinnerState, {
      year: "yyyy",
      month: "mm",
      day: "dd"
    });
  }
  get type() {
    return "gds-datepicker";
  }
  get dateformat() {
    return this._dateFormatLayout.layout.map((f) => f.token).join(this._dateFormatLayout.delimiter);
  }
  set dateformat(dateformat) {
    this._dateFormatLayout = __privateMethod(this, _parseDateFormat, parseDateFormat_fn).call(this, dateformat);
  }
  /**
   * Get the currently focused date in the calendar popover. If no date is focused, or the calendar popover
   * is closed, the value will be undefined.
   */
  async getFocusedDate() {
    if (this.open)
      return this._elCalendar.then((el) => el.focusedDate);
    else
      return void 0;
  }
  /**
   * Get a string representation of the currently displayed value in the input field. The formatting will match the dateformat attribute.
   */
  get displayValue() {
    return this._elInput.innerText.replace(/\s+/g, "");
  }
  /**
   * A reference to a date cell element (<td>) inside the shadow root of the calendar primitive.
   * Inteded for use in integration tests.
   */
  async test_getDateCell(dayNumber) {
    return this._elCalendar.then((el) => el.getDateCell(dayNumber));
  }
  connectedCallback() {
    super.connectedCallback();
    TransitionalStyles.instance.apply(this, "gds-datepicker");
  }
  render() {
    return html`${this._tStyles}
      ${when4(
      this.label && !this.hideLabel,
      () => html`<label for="spinner-0" id="label">${this.label}</label>`
    )}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${classMap6({ field: true, small: this.size === "small" })}
        id="trigger"
        @click=${__privateGet(this, _handleFieldClick)}
        @copy=${__privateGet(this, _handleClipboardCopy)}
        @paste=${__privateGet(this, _handleClipboardPaste)}
      >
        <div
          class=${classMap6({ input: true, "is-placeholder": !this.value })}
          @focusout=${__privateGet(this, _handleFieldFocusOut)}
        >
          ${join(
      map(
        this._dateFormatLayout.layout,
        (f, i) => html`<gds-date-part-spinner
                  id="spinner-${i}"
                  .length=${f.token === "y" ? 4 : 2}
                  .value=${__privateGet(this, _spinnerState)[f.name]}
                  aria-valuemin=${__privateMethod(this, _getMinSpinnerValue, getMinSpinnerValue_fn).call(this, f.name)}
                  aria-valuemax=${__privateMethod(this, _getMaxSpinnerValue, getMaxSpinnerValue_fn).call(this, f.name)}
                  aria-label=${__privateMethod(this, _getSpinnerLabel, getSpinnerLabel_fn).call(this, f.name)}
                  aria-describedby="label"
                  @keydown=${__privateGet(this, _handleSpinnerKeydown)}
                  @change=${(e) => __privateGet(this, _handleSpinnerChange).call(this, e.detail.value, f.name)}
                  @focus=${__privateGet(this, _handleSpinnerFocus)}
                  @touchend=${(e) => {
          this.open = true;
          e.preventDefault();
        }}
                ></gds-date-part-spinner>`
      ),
      html`<span>${this._dateFormatLayout.delimiter}</span>`
    )}
        </div>
        <button
          id="calendar-button"
          aria-label="${msg5("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          @click=${() => this.open = !this.open}
        >
          <svg viewBox="0 0 24 24" inert>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </button>
      </div>

      <div class="form-info"><slot name="message"></slot></div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .open=${this.open}
        @gds-ui-state=${__privateGet(this, _handlePopoverStateChange)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${() => this.showWeekNumbers ? "350px" : "305px"}
        @focusin=${async (e) => {
      const isPopover = e.target?.id === "calendar-popover";
      if (!isPopover)
        return;
      this._elCalendar.then((cal) => cal.focus());
    }}
      >
        <div class="header">
          <button
            @click=${__privateGet(this, _handleDecrementFocusedMonth)}
            aria-label=${msg5("Previous month")}
          >
            <i class="icon prev"></i>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${__privateGet(this, _handleMonthChange)}
            .maxHeight=${300}
            label="${msg5("Month")}"
            style="width:120px"
            size="small"
            hide-label
          >
            <gds-option value="0">${msg5("January")}</gds-option>
            <gds-option value="1">${msg5("February")}</gds-option>
            <gds-option value="2">${msg5("March")}</gds-option>
            <gds-option value="3">${msg5("April")}</gds-option>
            <gds-option value="4">${msg5("May")}</gds-option>
            <gds-option value="5">${msg5("June")}</gds-option>
            <gds-option value="6">${msg5("July")}</gds-option>
            <gds-option value="7">${msg5("August")}</gds-option>
            <gds-option value="8">${msg5("September")}</gds-option>
            <gds-option value="9">${msg5("October")}</gds-option>
            <gds-option value="10">${msg5("November")}</gds-option>
            <gds-option value="11">${msg5("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${__privateGet(this, _handleYearChange)}
            .maxHeight=${300}
            label="${msg5("Year")}"
            size="small"
            hide-label
          >
            ${repeat(
      __privateGet(this, _years, years_get),
      (year) => year,
      (year) => html`<gds-option value=${year}>${year}</gds-option>`
    )}
          </gds-dropdown>
          <button
            @click=${__privateGet(this, _handleIncrementFocusedMonth)}
            aria-label=${msg5("Next month")}
          >
            <i class="icon next"></i>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${__privateGet(this, _handleCalendarChange)}
          @gds-date-focused=${__privateGet(this, _handleCalendarFocusChange)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <div class="footer">
          <button
            class="tertiary clear"
            @click=${() => {
      this.value = void 0;
      __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
    }}
          >
            ${msg5("Clear")}
          </button>
          ${until(__privateMethod(this, _renderBackToValidRangeButton, renderBackToValidRangeButton_fn).call(this), nothing2)}
          <button
            class="tertiary today"
            @click=${() => {
      this.value = /* @__PURE__ */ new Date();
      __privateMethod(this, _dispatchChangeEvent2, dispatchChangeEvent_fn2).call(this);
    }}
          >
            ${msg5("Today")}
          </button>
        </div>
      </gds-popover> `;
  }
  _handleValueChange() {
    if (!this.value) {
      __privateSet(this, _spinnerState, {
        year: "yyyy",
        month: "mm",
        day: "dd"
      });
      return;
    }
    const date = this.value;
    this._focusedMonth = date.getMonth();
    this._focusedYear = date.getFullYear();
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    __privateSet(this, _spinnerState, { year, month, day });
  }
  _handleOpenChange() {
    if (this.open) {
      __privateSet(this, _valueOnOpen, this.value);
      this._elCalendar.then((el) => el.focus());
    }
  }
};
_valueOnOpen = new WeakMap();
_renderBackToValidRangeButton = new WeakSet();
renderBackToValidRangeButton_fn = async function() {
  const focusedDate = await this.getFocusedDate();
  let buttonTxt = "";
  let buttonAction;
  if (focusedDate && focusedDate > this.max) {
    buttonTxt = msg5("Last available date");
    buttonAction = () => __privateMethod(this, _focusDate, focusDate_fn).call(this, this.max);
  } else if (focusedDate && focusedDate < this.min) {
    buttonTxt = msg5("First available date");
    buttonAction = () => __privateMethod(this, _focusDate, focusDate_fn).call(this, this.min);
  }
  return html`${when4(
    buttonTxt.length > 0,
    () => html`<button class="tertiary back-to-range" @click=${buttonAction}>
          ${buttonTxt}
        </button>`,
    () => nothing2
  )}`;
};
_focusDate = new WeakSet();
focusDate_fn = function(d) {
  const firstValidDate = new Date(d);
  this._elCalendar.then((el) => el.focusedDate = firstValidDate).then(__privateGet(this, _handleCalendarFocusChange));
};
_getSpinnerLabel = new WeakSet();
getSpinnerLabel_fn = function(name) {
  const labels = {
    year: msg5("Year"),
    month: msg5("Month"),
    day: msg5("Day")
  };
  return labels[name];
};
_getMinSpinnerValue = new WeakSet();
getMinSpinnerValue_fn = function(name) {
  const min = {
    year: 1900,
    month: 1,
    day: 1
  };
  return min[name];
};
_getMaxSpinnerValue = new WeakSet();
getMaxSpinnerValue_fn = function(name) {
  const max = {
    year: 9999,
    month: 12,
    day: 31
  };
  return max[name];
};
_dispatchChangeEvent2 = new WeakSet();
dispatchChangeEvent_fn2 = function() {
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: { value: this.value }
    })
  );
};
_dispatchInputEvent = new WeakSet();
dispatchInputEvent_fn = function() {
  this.dispatchEvent(
    new CustomEvent("input", {
      detail: { value: this.value }
    })
  );
};
_handleFieldFocusOut = new WeakMap();
_handleSpinnerFocus = new WeakMap();
_handleClipboardCopy = new WeakMap();
_handleClipboardPaste = new WeakMap();
_handleFieldClick = new WeakMap();
_handleCalendarChange = new WeakMap();
_handleMonthChange = new WeakMap();
_handleYearChange = new WeakMap();
_handleIncrementFocusedMonth = new WeakMap();
_handleDecrementFocusedMonth = new WeakMap();
_handleCalendarFocusChange = new WeakMap();
_handlePopoverStateChange = new WeakMap();
_handleSpinnerKeydown = new WeakMap();
_parseDateFormat = new WeakSet();
parseDateFormat_fn = function(dateformat) {
  const delimiter = dateformat.replace(/[a-z0-9]/gi, "")[0];
  const format = dateformat.split(delimiter);
  const year = format.findIndex((f) => f === "y");
  const month = format.findIndex((f) => f === "m");
  const day = format.findIndex((f) => f === "d");
  if (year === -1 || month === -1 || day === -1)
    throw new Error("Invalid date format for <gds-datepicker>");
  const ordered = [year, month, day].sort((a, b) => a - b);
  const orderedFormat = ordered.map((i) => format[i]).map((f) => ({
    token: f,
    name: f === "y" ? "year" : f === "m" ? "month" : "day"
  }));
  return { delimiter, layout: orderedFormat };
};
_handleSpinnerChange = new WeakMap();
_spinnerState = new WeakMap();
_years = new WeakSet();
years_get = function() {
  const minYear = this.min.getFullYear();
  const maxYear = this.max.getFullYear();
  const isOutsideRange = __privateGet(this, _isValueOutsideRange, isValueOutsideRange_get);
  const valueYear = this.value?.getFullYear();
  return {
    *[Symbol.iterator]() {
      if (isOutsideRange)
        yield valueYear;
      for (let i = minYear; i <= maxYear; i++)
        yield i;
    }
  };
};
_isValueOutsideRange = new WeakSet();
isValueOutsideRange_get = function() {
  if (!this.value)
    return false;
  return this.value.getFullYear() < this.min.getFullYear() || this.value.getFullYear() > this.max.getFullYear();
};
GdsDatepicker.styles = [styles];
GdsDatepicker.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property9({ converter: dateConverter })
], GdsDatepicker.prototype, "value", 2);
__decorateClass([
  property9({ converter: dateConverter })
], GdsDatepicker.prototype, "min", 2);
__decorateClass([
  property9({ converter: dateConverter })
], GdsDatepicker.prototype, "max", 2);
__decorateClass([
  property9({ type: Boolean })
], GdsDatepicker.prototype, "open", 2);
__decorateClass([
  property9()
], GdsDatepicker.prototype, "label", 2);
__decorateClass([
  property9({ type: Boolean, attribute: "show-week-numbers" })
], GdsDatepicker.prototype, "showWeekNumbers", 2);
__decorateClass([
  property9()
], GdsDatepicker.prototype, "size", 2);
__decorateClass([
  property9({ type: Boolean, attribute: "hide-label" })
], GdsDatepicker.prototype, "hideLabel", 2);
__decorateClass([
  property9()
], GdsDatepicker.prototype, "dateformat", 1);
__decorateClass([
  property9({ type: Boolean, attribute: "disabled-weekends" })
], GdsDatepicker.prototype, "disabledWeekends", 2);
__decorateClass([
  property9({ converter: dateArrayConverter, attribute: "disabled-dates" })
], GdsDatepicker.prototype, "disabledDates", 2);
__decorateClass([
  queryAsync3("#calendar-button")
], GdsDatepicker.prototype, "test_calendarButton", 2);
__decorateClass([
  state10()
], GdsDatepicker.prototype, "_focusedMonth", 2);
__decorateClass([
  state10()
], GdsDatepicker.prototype, "_focusedYear", 2);
__decorateClass([
  state10()
], GdsDatepicker.prototype, "_dateFormatLayout", 2);
__decorateClass([
  queryAsync3("#calendar")
], GdsDatepicker.prototype, "_elCalendar", 2);
__decorateClass([
  queryAsync3("#trigger")
], GdsDatepicker.prototype, "_elTrigger", 2);
__decorateClass([
  queryAll(getScopedTagName("gds-date-part-spinner"))
], GdsDatepicker.prototype, "_elSpinners", 2);
__decorateClass([
  query3(".input")
], GdsDatepicker.prototype, "_elInput", 2);
__decorateClass([
  state10()
], GdsDatepicker.prototype, "_tStyles", 2);
__decorateClass([
  watch("value")
], GdsDatepicker.prototype, "_handleValueChange", 1);
__decorateClass([
  watch("open")
], GdsDatepicker.prototype, "_handleOpenChange", 1);
GdsDatepicker = __decorateClass([
  gdsCustomElement("gds-datepicker")
], GdsDatepicker);

// libs/core/src/components/grid/grid.ts
import { css as css10, LitElement as LitElement7, unsafeCSS as unsafeCSS3 } from "lit";
import { property as property10, state as state11 } from "lit/decorators.js";

// libs/core/src/tokens.style.ts
import { unsafeCSS as unsafeCSS2 } from "lit";

// dist/libs/tokens/internal/pallet.css
var pallet_default = `/**
 * Do not edit directly
 * Generated on Tue, 16 Apr 2024 14:56:29 GMT
 */

:host {
  --gds-ref-color-neutral000: #ffffff;
  --gds-ref-color-neutral050: #f8f8f8;
  --gds-ref-color-neutral100: #e9e9e9;
  --gds-ref-color-neutral150: #eeeeee;
  --gds-ref-color-neutral200: #dedede;
  --gds-ref-color-neutral250: #cecece;
  --gds-ref-color-neutral300: #ababab;
  --gds-ref-color-neutral350: #adadad;
  --gds-ref-color-neutral400: #868686;
  --gds-ref-color-neutral450: #757575;
  --gds-ref-color-neutral500: #494949;
  --gds-ref-color-neutral525: #464646;
  --gds-ref-color-neutral550: #333333;
  --gds-ref-color-neutral600: #2c2c2c;
  --gds-ref-color-neutral650: #272727;
  --gds-ref-color-neutral700: #222222;
  --gds-ref-color-neutral750: #1a1a1a;
  --gds-ref-color-neutral800: #121212;
  --gds-ref-color-blue100: #58b8ee;
  --gds-ref-color-blue200: #41b0ee;
  --gds-ref-color-blue300: #00adff;
  --gds-ref-color-blue400: #2c9cd9;
  --gds-ref-color-blue500: #0092e1;
  --gds-ref-color-blue600: #007ac7;
  --gds-ref-color-blue700: #0062bc;
  --gds-ref-color-green100: #75b44a;
  --gds-ref-color-green200: #60cd18;
  --gds-ref-color-green300: #45b400;
  --gds-ref-color-green400: #308800;
  --gds-ref-color-red100: #f7706d;
  --gds-ref-color-red200: #ff594f;
  --gds-ref-color-red300: #f03529;
  --gds-ref-color-red400: #d81a1a;
  --gds-ref-color-red500: #c82a29;
  --gds-ref-color-red600: #bb000c;
  --gds-ref-color-red700: #9f000a;
  --gds-ref-color-red800: #9e2120;
  --gds-ref-color-purple100: #ad91dc;
  --gds-ref-color-purple200: #7e52cc;
  --gds-ref-color-purple300: #673ab6;
  --gds-ref-color-purple400: #4f2C99;
  --gds-ref-color-purple500: #4a328f;
  --gds-ref-color-purple600: #3f2587;
  --gds-ref-color-yellow100: #ffe182;
  --gds-ref-color-yellow200: #ffc500;
  --gds-ref-color-yellow300: #ffb400;
  --gds-ref-color-yellow400: #f8a000;
  --gds-ref-color-yellow500: #f0be47;
  --gds-ref-color-yellow600: #ebab39;
  --gds-ref-color-blue-5: #001127;
  --gds-ref-color-blue-10: #001C39;
  --gds-ref-color-blue-15: #00264B;
  --gds-ref-color-blue-20: #00315D;
  --gds-ref-color-blue-25: #003C70;
  --gds-ref-color-blue-30: #004883;
  --gds-ref-color-blue-35: #005397;
  --gds-ref-color-blue-40: #005FAC;
  --gds-ref-color-blue-45: #006CC1;
  --gds-ref-color-blue-50: #0078D7;
  --gds-ref-color-blue-55: #0085EC;
  --gds-ref-color-blue-60: #1992FF;
  --gds-ref-color-blue-65: #4EA0FF;
  --gds-ref-color-blue-70: #6FAEFF;
  --gds-ref-color-blue-75: #8ABBFF;
  --gds-ref-color-blue-80: #A4C9FF;
  --gds-ref-color-blue-85: #BCD6FF;
  --gds-ref-color-blue-90: #D4E3FF;
  --gds-ref-color-blue-95: #EBF1FF;
  --gds-ref-color-blue-98: #F8F9FF;
  --gds-ref-color-green-5: #001505;
  --gds-ref-color-green-10: #00210E;
  --gds-ref-color-green-15: #002D10;
  --gds-ref-color-green-20: #003916;
  --gds-ref-color-green-25: #00461D;
  --gds-ref-color-green-30: #005323;
  --gds-ref-color-green-35: #00602A;
  --gds-ref-color-green-40: #006D31;
  --gds-ref-color-green-45: #007B38;
  --gds-ref-color-green-50: #138942;
  --gds-ref-color-green-55: #29964D;
  --gds-ref-color-green-60: #39A459;
  --gds-ref-color-green-65: #48B265;
  --gds-ref-color-green-70: #57C071;
  --gds-ref-color-green-75: #65CE7E;
  --gds-ref-color-green-80: #73DC8A;
  --gds-ref-color-green-85: #81EA97;
  --gds-ref-color-green-90: #8FF9A4;
  --gds-ref-color-green-95: #C5FFCA;
  --gds-ref-color-green-98: #EAFFE8;
  --gds-ref-color-black: #000000;
  --gds-ref-color-white: #FFFFFF;
  --gds-ref-color-grey-5: #0D0D0C;
  --gds-ref-color-grey-10: #1B1B18;
  --gds-ref-color-grey-15: #282825;
  --gds-ref-color-grey-20: #353531;
  --gds-ref-color-grey-25: #42423D;
  --gds-ref-color-grey-30: #505049;
  --gds-ref-color-grey-35: #5D5D56;
  --gds-ref-color-grey-40: #6A6A62;
  --gds-ref-color-grey-45: #77776E;
  --gds-ref-color-grey-50: #85857A;
  --gds-ref-color-grey-55: #919188;
  --gds-ref-color-grey-60: #9D9D95;
  --gds-ref-color-grey-65: #A9A9A2;
  --gds-ref-color-grey-70: #B6B6AF;
  --gds-ref-color-grey-75: #C2C2BD;
  --gds-ref-color-grey-80: #CECECA;
  --gds-ref-color-grey-85: #DADAD7;
  --gds-ref-color-grey-90: #E7E7E4;
  --gds-ref-color-grey-95: #F3F3F2;
  --gds-ref-color-grey-98: #F9F9F9;
  --gds-ref-color-orange-5: #1A0F00;
  --gds-ref-color-orange-10: #271900;
  --gds-ref-color-orange-15: #352200;
  --gds-ref-color-orange-20: #422C00;
  --gds-ref-color-orange-25: #503700;
  --gds-ref-color-orange-30: #503700;
  --gds-ref-color-orange-35: #6E4C00;
  --gds-ref-color-orange-40: #7D5700;
  --gds-ref-color-orange-45: #8D6300;
  --gds-ref-color-orange-50: #9D6E00;
  --gds-ref-color-orange-55: #AE7A00;
  --gds-ref-color-orange-60: #BE8600;
  --gds-ref-color-orange-65: #CF9300;
  --gds-ref-color-orange-70: #E19F00;
  --gds-ref-color-orange-75: #F2AC00;
  --gds-ref-color-orange-80: #FFBA30;
  --gds-ref-color-orange-85: #FFCC77;
  --gds-ref-color-orange-90: #FFDEAB;
  --gds-ref-color-orange-95: #FFEED9;
  --gds-ref-color-orange-98: #FFF8F3;
  --gds-ref-color-red-5: #2B0200;
  --gds-ref-color-red-10: #3E0400;
  --gds-ref-color-red-15: #510700;
  --gds-ref-color-red-20: #650B00;
  --gds-ref-color-red-25: #790F00;
  --gds-ref-color-red-30: #8E1400;
  --gds-ref-color-red-35: #A31800;
  --gds-ref-color-red-40: #BA1D00;
  --gds-ref-color-red-45: #D02200;
  --gds-ref-color-red-50: #E23010;
  --gds-ref-color-red-55: #F53E1D;
  --gds-ref-color-red-60: #FF5636;
  --gds-ref-color-red-65: #FF7257;
  --gds-ref-color-red-70: #FF8A73;
  --gds-ref-color-red-75: #FFA08D;
  --gds-ref-color-red-80: #FFB4A5;
  --gds-ref-color-red-85: #FFC8BC;
  --gds-ref-color-red-90: #FFDAD3;
  --gds-ref-color-red-95: #FFEDE9;
  --gds-ref-color-red-98: #FFF8F6;
}
`;

// dist/libs/tokens/internal/theme/light.css
var light_default = `/**
 * Do not edit directly
 * Generated on Tue, 16 Apr 2024 14:56:29 GMT
 */

:host {
  color-scheme: light;
  --gds-sys-color-blue: #41b0ee;
  --gds-sys-color-dark-blue-1: #41b0ee;
  --gds-sys-color-dark-blue-2: #007ac7;
  --gds-sys-color-green: #60cd18;
  --gds-sys-color-dark-green-1: #45b400;
  --gds-sys-color-dark-green-2: #308800;
  --gds-sys-color-yellow: #ffc500;
  --gds-sys-color-dark-yellow-1: #ffb400;
  --gds-sys-color-dark-yellow-2: #f8a000;
  --gds-sys-color-primary-text: #333333;
  --gds-sys-color-secondary-text: #ababab;
  --gds-sys-color-white-text: #ffffff;
  --gds-sys-color-link-text: #0062bc;
  --gds-sys-color-error-text: #9f000a;
  --gds-sys-color-disabled-text: #adadad;
  --gds-sys-color-red: #f03529;
  --gds-sys-color-dark-red-1: #d81a1a;
  --gds-sys-color-dark-red-2: #bb000c;
  --gds-sys-color-purple: #673ab6;
  --gds-sys-color-dark-purple-1: #4f2C99;
  --gds-sys-color-dark-purple-2: #3f2587;
  --gds-sys-color-base-white: #ffffff;
  --gds-sys-color-base100: #f8f8f8;
  --gds-sys-color-base200: #e9e9e9;
  --gds-sys-color-base300: #dedede;
  --gds-sys-color-base400: #cecece;
  --gds-sys-color-base500: #adadad;
  --gds-sys-color-base600: #868686;
  --gds-sys-color-base700: #494949;
  --gds-sys-color-base800: #333333;
  --gds-sys-color-base900: #1a1a1a;
  --gds-sys-color-accent-accent-green: #006D31;
  --gds-sys-color-accent-on-accent-green: #FFFFFF;
  --gds-sys-color-accent-accent-orange: #FFBA30;
  --gds-sys-color-accent-on-accent-orange: #353531;
  --gds-sys-color-background-background: #FFFFFF;
  --gds-sys-color-background-background-dim: #F3F3F2;
  --gds-sys-color-container-container: #F3F3F2;
  --gds-sys-color-container-container-dim1: #E7E7E4;
  --gds-sys-color-container-container-dim2: #DADAD7;
  --gds-sys-color-container-container-bright: #FFFFFF;
  --gds-sys-color-container-container-shade1: #353531;
  --gds-sys-color-container-container-shade2: #1B1B18;
  --gds-sys-color-container-container-shade3: #353531;
  --gds-sys-color-container-container-disabled: #F9F9F9;
  --gds-sys-color-container-container-positive: #006D31;
  --gds-sys-color-container-container-negative: #BA1D00;
  --gds-sys-color-container-container-negative-bright: #FFEDE9;
  --gds-sys-color-content-content: #353531;
  --gds-sys-color-content-content-inverse: #FFFFFF;
  --gds-sys-color-content-content-secondary: #6A6A62;
  --gds-sys-color-content-content-positive: #006D31;
  --gds-sys-color-content-content-positive-bright: #EAFFE8;
  --gds-sys-color-content-content-negative: #BA1D00;
  --gds-sys-color-content-content-negative-bright: #FFF8F6;
  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;
  --gds-sys-color-content-content-disabled: #9D9D95;
  --gds-sys-color-custom-custom-blue: #005FAC;
  --gds-sys-color-custom-on-custom-blue: #D4E3FF;
  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;
  --gds-sys-color-custom-on-custom-blue-bright: #00315D;
  --gds-sys-color-custom-custom-green: #003916;
  --gds-sys-color-custom-on-custom-green: #EAFFE8;
  --gds-sys-color-custom-custom-green-bright: #EAFFE8;
  --gds-sys-color-custom-on-custom-green-bright: #003916;
  --gds-sys-color-custom-custom-grey: #353531;
  --gds-sys-color-custom-on-custom-grey: #E7E7E4;
  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;
  --gds-sys-color-custom-on-custom-grey-bright: #353531;
  --gds-sys-color-primary-primary: #353531;
  --gds-sys-color-state-layers-state-black: #000000 10%;
  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;
  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;
  --gds-sys-color-state-layers-state-black-shade: #000000 60%;
  --gds-sys-color-state-layers-state-positive: #006d31 10%;
  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;
  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;
  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;
  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;
  --gds-sys-color-status-information-information: #353531;
  --gds-sys-color-status-information-on-information: #FFFFFF;
  --gds-sys-color-status-information-information-bright: #F3F3F2;
  --gds-sys-color-status-information-on-information-bright: #353531;
  --gds-sys-color-status-negative-negative: #BA1D00;
  --gds-sys-color-status-negative-on-negative: #FFFFFF;
  --gds-sys-color-status-negative-negative-bright: #FFEDE9;
  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;
  --gds-sys-color-status-warning-warning: #9D6E00;
  --gds-sys-color-status-warning-on-warning: #FFFFFF;
  --gds-sys-color-status-warning-warning-bright: #FFEED9;
  --gds-sys-color-status-warning-on-warning-bright: #7D5700;
  --gds-sys-color-status-positive-positive: #006D31;
  --gds-sys-color-status-positive-on-positive: #FFFFFF;
  --gds-sys-color-status-positive-positive-bright: #EAFFE8;
  --gds-sys-color-status-positive-on-positive-bright: #006D31;
  --gds-sys-color-status-notice-notice: #005FAC;
  --gds-sys-color-status-notice-on-notice: #FFFFFF;
  --gds-sys-color-status-notice-notice-bright: #EBF1FF;
  --gds-sys-color-status-notice-on-notice-bright: #005FAC;
  --gds-sys-color-stroke-stroke: #353531;
  --gds-sys-color-stroke-stroke-variant1: #85857A;
  --gds-sys-color-stroke-stroke-variant2: #CECECA;
  --gds-sys-color-stroke-stroke-disabled: #9D9D95;
  --gds-sys-color-stroke-stroke-notice: #005FAC;
  --gds-sys-color-stroke-stroke-positive: #006D31;
  --gds-sys-color-stroke-stroke-warning: #7D5700;
  --gds-sys-color-stroke-stroke-negative: #BA1D00;
  --gds-sys-color-stroke-stroke-custom-blue: #005FAC;
  --gds-sys-color-stroke-stroke-custom-blue-bright: #6FAEFF;
  --gds-sys-color-stroke-stroke-inversed: #FFFFFF;
}
`;

// dist/libs/tokens/internal/size.css
var size_default = `/**
 * Do not edit directly
 * Generated on Tue, 16 Apr 2024 14:56:29 GMT
 */

:host {
  --gds-sys-typography-weight-bold: 700;
  --gds-sys-typography-weight-medium: 500;
  --gds-sys-typography-weight-book: 450;
  --gds-sys-typography-weight-regular: 400;
  --gds-sys-typography-weight-light: 300;
  --gds-sys-typography-size-label-overline: 14px;
  --gds-sys-typography-size-label-input-medium: 14px;
  --gds-sys-typography-size-label-input-large: 16px;
  --gds-sys-typography-size-label-information-medium: 14px;
  --gds-sys-typography-size-label-information-large: 16px;
  --gds-sys-typography-size-label-small: 12px;
  --gds-sys-typography-size-label-medium: 14px;
  --gds-sys-typography-size-label-large: 16px;
  --gds-sys-typography-size-body-small: 12px;
  --gds-sys-typography-size-body-medium: 14px;
  --gds-sys-typography-size-body-large: 16px;
  --gds-sys-typography-size-title-small: 14px;
  --gds-sys-typography-size-title-medium: 16px;
  --gds-sys-typography-size-title-large: 22px;
  --gds-sys-typography-size-headline-small: 24px;
  --gds-sys-typography-size-headline-medium: 28px;
  --gds-sys-typography-size-headline-large: 32px;
  --gds-sys-typography-size-display-small: 40px;
  --gds-sys-typography-size-display-medium: 64px;
  --gds-sys-typography-size-display-large: 82px;
  --gds-sys-typography-line-height-label-overline: 18px;
  --gds-sys-typography-line-height-label-input-medium: 20px;
  --gds-sys-typography-line-height-label-input-large: 20px;
  --gds-sys-typography-line-height-label-information-medium: 20px;
  --gds-sys-typography-line-height-label-information-large: 20px;
  --gds-sys-typography-line-height-label-small: 16px;
  --gds-sys-typography-line-height-label-medium: 20px;
  --gds-sys-typography-line-height-label-large: 20px;
  --gds-sys-typography-line-height-body-small: 16px;
  --gds-sys-typography-line-height-body-medium: 20px;
  --gds-sys-typography-line-height-body-large: 20px;
  --gds-sys-typography-line-height-title-small: 20px;
  --gds-sys-typography-line-height-title-medium: 24px;
  --gds-sys-typography-line-height-title-large: 28px;
  --gds-sys-typography-line-height-headline-small: 30px;
  --gds-sys-typography-line-height-headline-medium: 36px;
  --gds-sys-typography-line-height-headline-large: 40px;
  --gds-sys-typography-line-height-display-small: 52px;
  --gds-sys-typography-line-height-display-medium: 80px;
  --gds-sys-typography-line-height-display-large: 98px;
  --gds-sys-state-hover-state-layer-opacity: 0.10;
  --gds-sys-grid-width-desktop-lg: 2560px;
  --gds-sys-grid-width-desktop-md: 1440px;
  --gds-sys-grid-width-desktop-sm: 1024px;
  --gds-sys-grid-width-tablet: 768px;
  --gds-sys-grid-width-mobile: 425px;
  --gds-sys-grid-columns-24: 24;
  --gds-sys-grid-columns-12: 12;
  --gds-sys-grid-columns-8: 8;
  --gds-sys-grid-columns-6: 6;
  --gds-sys-grid-columns-4: 4;
  --gds-sys-grid-columns-2: 2;
  --gds-ref-size-15: 9999px;
  --gds-ref-size-14: 128px;
  --gds-ref-size-13: 112px;
  --gds-ref-size-12: 96px;
  --gds-ref-size-11: 80px;
  --gds-ref-size-10: 64px;
  --gds-ref-size-9: 48px;
  --gds-ref-size-8: 40px;
  --gds-ref-size-7: 32px;
  --gds-ref-size-6: 24px;
  --gds-ref-size-5: 16px;
  --gds-ref-size-4: 12px;
  --gds-ref-size-3: 8px;
  --gds-ref-size-2: 4px;
  --gds-ref-size-1: 2px;
  --gds-ref-size-0: 0px;
  --gds-sys-space-spacer-120: var(--gds-ref-size-14);
  --gds-sys-space-spacer-112: var(--gds-ref-size-13);
  --gds-sys-space-spacer-96: var(--gds-ref-size-12);
  --gds-sys-space-spacer-80: var(--gds-ref-size-11);
  --gds-sys-space-spacer-64: var(--gds-ref-size-10);
  --gds-sys-space-spacer-48: var(--gds-ref-size-9);
  --gds-sys-space-spacer-40: var(--gds-ref-size-8);
  --gds-sys-space-spacer-32: var(--gds-ref-size-7);
  --gds-sys-space-spacer-24: var(--gds-ref-size-6);
  --gds-sys-space-spacer-16: var(--gds-ref-size-5);
  --gds-sys-space-spacer-12: var(--gds-ref-size-4);
  --gds-sys-space-spacer-8: var(--gds-ref-size-3);
  --gds-sys-space-spacer-4: var(--gds-ref-size-2);
  --gds-sys-space-spacer-2: var(--gds-ref-size-1);
  --gds-sys-space-spacer-0: var(--gds-ref-size-0);
  --gds-sys-space-padding-120: var(--gds-ref-size-14);
  --gds-sys-space-padding-112: var(--gds-ref-size-13);
  --gds-sys-space-padding-96: var(--gds-ref-size-12);
  --gds-sys-space-padding-80: var(--gds-ref-size-11);
  --gds-sys-space-padding-64: var(--gds-ref-size-10);
  --gds-sys-space-padding-48: var(--gds-ref-size-9);
  --gds-sys-space-padding-40: var(--gds-ref-size-8);
  --gds-sys-space-padding-32: var(--gds-ref-size-7);
  --gds-sys-space-padding-24: var(--gds-ref-size-6);
  --gds-sys-space-padding-16: var(--gds-ref-size-5);
  --gds-sys-space-padding-12: var(--gds-ref-size-4);
  --gds-sys-space-padding-8: var(--gds-ref-size-3);
  --gds-sys-space-padding-4: var(--gds-ref-size-2);
  --gds-sys-space-padding-2: var(--gds-ref-size-1);
  --gds-sys-space-padding-0: var(--gds-ref-size-0);
  --gds-sys-space-margins-120: var(--gds-ref-size-14);
  --gds-sys-space-margins-112: var(--gds-ref-size-13);
  --gds-sys-space-margins-96: var(--gds-ref-size-12);
  --gds-sys-space-margins-80: var(--gds-ref-size-11);
  --gds-sys-space-margins-64: var(--gds-ref-size-10);
  --gds-sys-space-margins-48: var(--gds-ref-size-9);
  --gds-sys-space-margins-40: var(--gds-ref-size-8);
  --gds-sys-space-margins-32: var(--gds-ref-size-7);
  --gds-sys-space-margins-24: var(--gds-ref-size-6);
  --gds-sys-space-margins-16: var(--gds-ref-size-5);
  --gds-sys-space-margins-12: var(--gds-ref-size-4);
  --gds-sys-space-margins-8: var(--gds-ref-size-3);
  --gds-sys-space-margins-4: var(--gds-ref-size-2);
  --gds-sys-space-margins-2: var(--gds-ref-size-1);
  --gds-sys-space-margins-0: var(--gds-ref-size-0);
  --gds-sys-radii-full: var(--gds-ref-size-15);
  --gds-sys-radii-4xl: var(--gds-ref-size-12);
  --gds-sys-radii-3xl: var(--gds-ref-size-9);
  --gds-sys-radii-2xl: var(--gds-ref-size-7);
  --gds-sys-radii-xl: var(--gds-ref-size-6);
  --gds-sys-radii-l: var(--gds-ref-size-5);
  --gds-sys-radii-m: var(--gds-ref-size-4);
  --gds-sys-radii-s: var(--gds-ref-size-3);
  --gds-sys-radii-xs: var(--gds-ref-size-2);
  --gds-sys-radii-none: var(--gds-ref-size-0);
  --gds-sys-grid-padding-3xl: var(--gds-ref-size-12);
  --gds-sys-grid-padding-2xl: var(--gds-ref-size-9);
  --gds-sys-grid-padding-xl: var(--gds-ref-size-7);
  --gds-sys-grid-padding-l: var(--gds-ref-size-6);
  --gds-sys-grid-padding-m: var(--gds-ref-size-5);
  --gds-sys-grid-padding-s: var(--gds-ref-size-3);
  --gds-sys-grid-padding-xs: var(--gds-ref-size-2);
  --gds-sys-grid-padding-none: var(--gds-ref-size-0);
  --gds-sys-grid-gap-3xl: var(--gds-ref-size-12);
  --gds-sys-grid-gap-2xl: var(--gds-ref-size-9);
  --gds-sys-grid-gap-xl: var(--gds-ref-size-7);
  --gds-sys-grid-gap-l: var(--gds-ref-size-6);
  --gds-sys-grid-gap-m: var(--gds-ref-size-5);
  --gds-sys-grid-gap-s: var(--gds-ref-size-3);
  --gds-sys-grid-gap-xs: var(--gds-ref-size-2);
  --gds-sys-grid-gap-none: var(--gds-ref-size-0);
  --gds-sys-grid-breakpoint-desktop-lg: var(--gds-sys-grid-columns-12);
  --gds-sys-grid-breakpoint-desktop-md: var(--gds-sys-grid-columns-12);
  --gds-sys-grid-breakpoint-desktop-sm: var(--gds-sys-grid-columns-12);
  --gds-sys-grid-breakpoint-tablet: var(--gds-sys-grid-columns-12);
  --gds-sys-grid-breakpoint-mobile: var(--gds-sys-grid-columns-4);
}
`;

// libs/core/src/tokens.style.ts
var tokens = [
  unsafeCSS2(pallet_default),
  unsafeCSS2(light_default),
  unsafeCSS2(size_default)
];

// libs/core/src/components/grid/grid.style.css.ts
import { css as css9 } from "lit";
var style8 = css9`
  @layer grid, grid.desktop, grid.tablet, grid.mobile, grid.span, grid.space, grid.align, grid.debug;

  @layer grid {
    :host {
      --_c: var(--gds-sys-grid-columns-12);
      --_grid-col: repeat(var(--_c), 1fr);
      --_grid-col-start: 1;
      --_grid-col-end: -1;
      --_gap-column: 0;
      --_gap-row: 0;
      display: grid;
      width: 100%;
      grid-template-columns: var(--_grid-col);
      grid-column-gap: var(--_gap-column);
      grid-row-gap: var(--_gap-row);
      padding: var(--_grid-padding);
      text-wrap: balance;
    }

    :host([auto-columns]) {
      --_col-count: var(--_c, 0);
      --_gap-count: calc(var(--_col-count) - 1);
      --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
      --_col-width-max: calc(
        (100% - var(--_total-gap-width)) / var(--_col-count)
      );
      grid-template-columns: repeat(
        auto-fill,
        minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
      );
    }
  }

  /* Responsive */
  :host {
    --_c: var(--_columns-desktop);
    --_gap-column: var(--_gap-desktop);
    --_gap-row: var(--_row-gap-desktop);
    --_grid-padding: var(--_padding-desktop);
    --_col-width: var(--_col-width-desktop);
  }

  @media only screen and (max-width: 768px) {
    :host {
      --_c: var(--_columns-tablet);
      --_gap-column: var(--_gap-tablet);
      --_gap-row: var(--_row-gap-tablet);
      --_grid-padding: var(--_padding-tablet);
      --_col-width: var(--_col-width-tablet);
    }
  }

  @media only screen and (max-width: 425px) {
    :host {
      --_c: var(--_columns-mobile);
      --_gap-column: var(--_gap-mobile);
      --_gap-row: var(--_row-gap-mobile);
      --_grid-padding: var(--_padding-mobile);
      --_col-width: var(--_col-width-mobile);
    }
  }
`;
var grid_style_css_default = style8;

// libs/core/src/components/grid/grid.ts
var BreakpointPattern = /(?<l>l:([a-z0-9]+))?\s*(?<m>m:([a-z0-9]+))?\s*(?<s>s:([a-z0-9]+))?/;
var GdsGrid = class extends LitElement7 {
  constructor() {
    super(...arguments);
    this._gridVariables = {
      varsColumn: css10``,
      varsGap: css10``,
      varsRowGap: css10``,
      varsPadding: css10``,
      varsAutoColumns: css10``
    };
  }
  /**
   * Lifecycle method called when the element is connected to the DOM.
   * It updates the column, gap, and padding variables.
   */
  connectedCallback() {
    super.connectedCallback();
    this._updateColumnVariables();
    this._updateGapVariables();
    this._updateRowGapVariables();
    this._updatePaddingVariables();
    this._updateAutoColumnsVariables();
  }
  _updateColumnVariables() {
    const match = this.columns?.match(BreakpointPattern);
    let columnsDesktop, columnsTablet, columnsMobile;
    if (this.columns && !isNaN(Number(this.columns))) {
      columnsDesktop = columnsTablet = columnsMobile = Number(this.columns);
    } else {
      const { l, m, s } = match?.groups || {};
      columnsDesktop = l ? Number(l.split(":")[1]) : void 0;
      columnsTablet = m ? Number(m.split(":")[1]) : void 0;
      columnsMobile = s ? Number(s.split(":")[1]) : void 0;
    }
    const columnProperties = [
      { name: "_columns-desktop", value: columnsDesktop },
      { name: "_columns-tablet", value: columnsTablet },
      { name: "_columns-mobile", value: columnsMobile }
    ];
    const cssVariables = columnProperties.filter(({ value }) => value !== void 0).map(({ name, value }) => `--${name}: ${value};`).join(" ");
    this._gridVariables = {
      ...this._gridVariables,
      varsColumn: css10`
        ${unsafeCSS3(cssVariables)}
      `
    };
    this.requestUpdate("_gridVariables");
  }
  _updateGapVariables() {
    const match = this.gap?.match(BreakpointPattern);
    let gapDesktop, gapTablet, gapMobile;
    if (this.gap && !this.gap.includes(" ")) {
      gapDesktop = gapTablet = gapMobile = `var(--gds-sys-grid-gap-${this.gap})`;
    } else {
      const { l, m, s } = match?.groups || {};
      gapDesktop = l ? `var(--gds-sys-grid-gap-${l.split(":")[1]})` : void 0;
      gapTablet = m ? `var(--gds-sys-grid-gap-${m.split(":")[1]})` : void 0;
      gapMobile = s ? `var(--gds-sys-grid-gap-${s.split(":")[1]})` : void 0;
    }
    const gapProperties = [
      { name: "_gap-desktop", value: gapDesktop },
      { name: "_gap-tablet", value: gapTablet },
      { name: "_gap-mobile", value: gapMobile }
    ];
    const cssVariables = gapProperties.filter(({ value }) => value !== void 0).map(({ name, value }) => `--${name}: ${value};`).join(" ");
    this._gridVariables = {
      ...this._gridVariables,
      varsGap: css10`
        ${unsafeCSS3(cssVariables)}
      `
    };
    this.requestUpdate("_gridVariables");
  }
  _updateRowGapVariables() {
    const match = this.rowGap?.match(BreakpointPattern);
    let rowGapDesktop, rowGapTablet, rowGapMobile;
    if (this.rowGap && !this.rowGap.includes(" ")) {
      rowGapDesktop = rowGapTablet = rowGapMobile = `var(--gds-sys-grid-gap-${this.rowGap})`;
    } else {
      const { l, m, s } = match?.groups || {};
      rowGapDesktop = l ? `var(--gds-sys-grid-gap-${l.split(":")[1]})` : void 0;
      rowGapTablet = m ? `var(--gds-sys-grid-gap-${m.split(":")[1]})` : void 0;
      rowGapMobile = s ? `var(--gds-sys-grid-gap-${s.split(":")[1]})` : void 0;
    }
    const gapProperties = [
      { name: "_row-gap-desktop", value: rowGapDesktop },
      { name: "_row-gap-tablet", value: rowGapTablet },
      { name: "_row-gap-mobile", value: rowGapMobile }
    ];
    const cssVariables = gapProperties.filter(({ value }) => value !== void 0).map(({ name, value }) => `--${name}: ${value};`).join(" ");
    this._gridVariables = {
      ...this._gridVariables,
      varsRowGap: css10`
        ${unsafeCSS3(cssVariables)}
      `
    };
    this.requestUpdate("_gridVariables");
  }
  _updatePaddingVariables() {
    const match = this.padding?.match(BreakpointPattern);
    let paddingDesktop, paddingTablet, paddingMobile;
    if (this.padding && !this.padding.includes(" ")) {
      paddingDesktop = paddingTablet = paddingMobile = `var(--gds-sys-grid-gap-${this.gap})`;
    } else {
      const { l, m, s } = match?.groups || {};
      paddingDesktop = l ? `var(--gds-sys-grid-gap-${l.split(":")[1]})` : void 0;
      paddingTablet = m ? `var(--gds-sys-grid-gap-${m.split(":")[1]})` : void 0;
      paddingMobile = s ? `var(--gds-sys-grid-gap-${s.split(":")[1]})` : void 0;
    }
    const paddingProperties = [
      { name: "_padding-desktop", value: paddingDesktop },
      { name: "_padding-tablet", value: paddingTablet },
      { name: "_padding-mobile", value: paddingMobile }
    ];
    const cssVariables = paddingProperties.filter(({ value }) => value !== void 0).map(({ name, value }) => `--${name}: ${value};`).join(" ");
    this._gridVariables = {
      ...this._gridVariables,
      varsPadding: css10`
        ${unsafeCSS3(cssVariables)}
      `
    };
    this.requestUpdate("_gridVariables");
  }
  _updateAutoColumnsVariables() {
    const match = this.autoColumns?.match(BreakpointPattern);
    let widthDesktop, widthTablet, widthMobile;
    if (this.autoColumns && !this.autoColumns.includes(" ")) {
      widthDesktop = widthTablet = widthMobile = `${this.autoColumns}px`;
    } else {
      const { l, m, s } = match?.groups || {};
      widthDesktop = l ? `${l.split(":")[1]}px` : void 0;
      widthTablet = m ? `${m.split(":")[1]}px` : void 0;
      widthMobile = s ? `${s.split(":")[1]}px` : void 0;
    }
    const widthProperties = [
      { name: "_col-width-mobile", value: widthMobile },
      { name: "_col-width-tablet", value: widthTablet },
      { name: "_col-width-desktop", value: widthDesktop }
    ];
    const cssVariables = widthProperties.filter(({ value }) => value !== void 0).map(({ name, value }) => `--${name}: ${value};`).join(" ");
    this._gridVariables = {
      ...this._gridVariables,
      varsAutoColumns: css10`
        ${unsafeCSS3(cssVariables)}
      `
    };
    this.requestUpdate("_gridVariables");
  }
  _updateGridCss() {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`:host {${Object.values(this._gridVariables).join("")}} `);
    if (this.shadowRoot) {
      const styles2 = Array.isArray(GdsGrid.styles) ? GdsGrid.styles : [GdsGrid.styles];
      const styleSheets = styles2.flatMap((style9) => {
        if (Array.isArray(style9)) {
          return style9.map((s) => {
            const newSheet = new CSSStyleSheet();
            newSheet.replaceSync(s.cssText);
            return newSheet;
          });
        } else {
          const newSheet = new CSSStyleSheet();
          newSheet.replaceSync(style9.cssText);
          return [newSheet];
        }
      });
      this.shadowRoot.adoptedStyleSheets = [sheet, ...styleSheets];
    }
  }
  render() {
    return html` <slot></slot> `;
  }
};
GdsGrid.styles = [tokens, grid_style_css_default];
GdsGrid.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property10({ attribute: "columns", type: String })
], GdsGrid.prototype, "columns", 2);
__decorateClass([
  property10({ attribute: "gap", type: String })
], GdsGrid.prototype, "gap", 2);
__decorateClass([
  property10({ attribute: "row-gap", type: String })
], GdsGrid.prototype, "rowGap", 2);
__decorateClass([
  property10({ attribute: "padding", type: String })
], GdsGrid.prototype, "padding", 2);
__decorateClass([
  property10({ attribute: "auto-columns", type: String })
], GdsGrid.prototype, "autoColumns", 2);
__decorateClass([
  state11()
], GdsGrid.prototype, "_gridVariables", 2);
__decorateClass([
  watch("columns")
], GdsGrid.prototype, "_updateColumnVariables", 1);
__decorateClass([
  watch("gap")
], GdsGrid.prototype, "_updateGapVariables", 1);
__decorateClass([
  watch("row-gap")
], GdsGrid.prototype, "_updateRowGapVariables", 1);
__decorateClass([
  watch("padding")
], GdsGrid.prototype, "_updatePaddingVariables", 1);
__decorateClass([
  watch("autoColumns")
], GdsGrid.prototype, "_updateAutoColumnsVariables", 1);
__decorateClass([
  watch("_gridVariables")
], GdsGrid.prototype, "_updateGridCss", 1);
GdsGrid = __decorateClass([
  gdsCustomElement("gds-grid")
], GdsGrid);

// libs/core/src/components/grouped-list/grouped-list.ts
import { state as state12, property as property11 } from "lit/decorators.js";
import { when as when5 } from "lit/directives/when.js";

// libs/core/src/components/grouped-list/list-item.ts
var GdsListItem = class extends GdsElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "listitem");
  }
  render() {
    return html`<slot></slot>`;
  }
};
GdsListItem = __decorateClass([
  gdsCustomElement("gds-list-item")
], GdsListItem);

// libs/core/src/components/grouped-list/grouped-list.ts
var GdsGroupedList = class extends GdsElement {
  constructor() {
    super(...arguments);
    this.label = "";
  }
  connectedCallback() {
    super.connectedCallback();
    constrainSlots(this);
    TransitionalStyles.instance.apply(this, "gds-grouped-list");
  }
  render() {
    return html`${this._tStyles}${when5(
      this.label,
      () => html`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`
    )}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`;
  }
};
__decorateClass([
  state12()
], GdsGroupedList.prototype, "_tStyles", 2);
__decorateClass([
  property11()
], GdsGroupedList.prototype, "label", 2);
GdsGroupedList = __decorateClass([
  gdsCustomElement("gds-grouped-list")
], GdsGroupedList);

// libs/core/src/components/segmented-control/segmented-control.ts
import { unsafeCSS as unsafeCSS5 } from "lit";
import { query as query4, state as state13, property as property13 } from "lit/decorators.js";
import { when as when6 } from "lit/directives/when.js";
import { msg as msg6 } from "@lit/localize";

// libs/core/src/components/segmented-control/segment/segment.ts
import { property as property12 } from "lit/decorators.js";
import { unsafeCSS as unsafeCSS4 } from "lit";

// libs/core/src/components/segmented-control/segment/segment.style.css
var segment_style_default = `:host {
  z-index: 1;
  display: flex;
  transition: 0.2s;
}

button {
  flex-shrink: 0;
  flex-grow: 1;
  font-family: inherit;
  padding: 0 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: calc(infinity * 1px);
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background: transparent;
  border-width: 0;
  font-size: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  color: var(--gds-sys-color-content-content);
}

@media (pointer: fine) {
  button:hover {
    background-color: color-mix(
      in srgb,
      var(--gds-sys-color-state-layers-state-black-dim1),
      transparent
    );
  }
}

button:focus-visible {
  outline: 2px solid #000;
  outline-offset: -2px;
}
`;

// libs/core/src/components/segmented-control/segment/segment.ts
var GdsSegment = class extends GdsElement {
  constructor() {
    super(...arguments);
    this.selected = false;
  }
  connectedCallback() {
    super.connectedCallback();
    TransitionalStyles.instance.apply(this, "gds-segmented");
    this.setAttribute("role", "listitem");
  }
  render() {
    return html`<button aria-current=${String(this.selected)}>
      <slot></slot>
    </button>`;
  }
};
GdsSegment.styles = [...tokens, unsafeCSS4(segment_style_default)];
__decorateClass([
  property12({ type: Boolean, reflect: true })
], GdsSegment.prototype, "selected", 2);
__decorateClass([
  property12()
], GdsSegment.prototype, "value", 2);
GdsSegment = __decorateClass([
  gdsCustomElement("gds-segment")
], GdsSegment);

// libs/core/src/components/segmented-control/segmented-control.style.css
var segmented_control_style_default = `:host {
  box-sizing: border-box;
  display: inline-flex;
  background-color: var(--gds-sys-color-container-container-dim1);
  border: 0.25rem solid var(--gds-sys-color-container-container-dim1);
  gap: 0.25rem;
  border-radius: calc(infinity * 1px);
  contain: layout;
  max-width: 100%;
  overflow: hidden;
  height: 3rem;
}

:host([size='small']) {
  height: 2.5rem;
}

#track {
  box-sizing: border-box;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
}

#segments {
  box-sizing: border-box;
  display: inline-flex;
  transition: 0.2s;
  position: relative;
  z-index: 1;
  gap: 0.25rem;
}

#btn-prev,
#btn-next {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: calc(infinity * 1px);
  background-color: var(--gds-sys-color-container-container-dim1);
  border-width: 0;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  aspect-ratio: 1;
  height: 100%;
  width: 2.5rem;
  cursor: pointer;
  color: var(--gds-sys-color-content-content);

  @media (pointer: fine) {
    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-state-layers-state-black-dim1),
        var(--gds-sys-color-container-container-dim1)
      );
    }
  }
}

:host([size='small']) #btn-prev,
:host([size='small']) #btn-next {
  width: 2rem;
}

::slotted(*) {
  flex-shrink: 0;
  flex-grow: 1;
  z-index: 1;
}

#indicator {
  position: absolute;
  left: 0;
  height: 100%;
  background-color: var(--gds-sys-color-container-container-bright);
  border-radius: calc(infinity * 1px);
  transition: transform 0.2s, width 0.2s;
  z-index: 0;
}
`;

// libs/core/src/components/segmented-control/segmented-control.ts
var BTN_SIZE = {
  small: 36,
  medium: 44
};
var getSegmentGap = (transitionalStyles) => transitionalStyles ? 0 : 4;
var _value, _tid, _resizeObserver, _firstVisibleIndex, _calculatedSegmentWidth, _segmentWidth, _segmentsContainerLeft, _focusedIndex, _dragStartX, _dragStartLeft, _isDragging, _startDrag, _drag, _endDrag, _calcVisibleAfterDrag, _calcLayout, _applySegmentsTransform, _handleSlotChange, handleSlotChange_fn, _scrollLeft, _scrollRight, _updateScrollBtnState, _updateIndicator, _handleSegmentClick, _updateSelectedFromValue;
var GdsSegmentedControl = class extends GdsElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handleSlotChange);
    this.segMinWidth = 100;
    this.size = "medium";
    __privateAdd(this, _value, void 0);
    this._showPrevButton = false;
    this._showNextButton = false;
    __privateAdd(this, _tid, void 0);
    __privateAdd(this, _resizeObserver, new ResizeObserver(() => {
      __privateGet(this, _tid) && clearTimeout(__privateGet(this, _tid));
      __privateSet(this, _tid, setTimeout(() => {
        __privateGet(this, _calcLayout).call(this);
      }, 20));
    }));
    __privateAdd(this, _firstVisibleIndex, 0);
    __privateAdd(this, _calculatedSegmentWidth, 0);
    __privateAdd(this, _segmentWidth, 0);
    __privateAdd(this, _segmentsContainerLeft, 0);
    __privateAdd(this, _focusedIndex, 0);
    __privateAdd(this, _dragStartX, 0);
    __privateAdd(this, _dragStartLeft, 0);
    __privateAdd(this, _isDragging, false);
    __privateAdd(this, _startDrag, (event) => {
      __privateSet(this, _dragStartX, event.clientX);
      __privateSet(this, _dragStartLeft, __privateGet(this, _segmentsContainerLeft));
      __privateSet(this, _isDragging, true);
    });
    __privateAdd(this, _drag, (event) => {
      if (!__privateGet(this, _isDragging))
        return;
      event.preventDefault();
      const delta = event.clientX - __privateGet(this, _dragStartX);
      if (Math.abs(delta) < 5)
        return;
      try {
        if (!this._elSegments.hasPointerCapture(event.pointerId))
          this._elSegments.setPointerCapture(event.pointerId);
        __privateSet(this, _segmentsContainerLeft, __privateGet(this, _dragStartLeft) + delta);
        __privateGet(this, _applySegmentsTransform).call(this);
      } catch {
      }
    });
    __privateAdd(this, _endDrag, (event) => {
      if (!__privateGet(this, _isDragging))
        return;
      __privateSet(this, _isDragging, false);
      try {
        this._elSegments.releasePointerCapture(event.pointerId);
        __privateGet(this, _calcVisibleAfterDrag).call(this);
      } catch {
      }
    });
    __privateAdd(this, _calcVisibleAfterDrag, () => {
      __privateSet(this, _firstVisibleIndex, Math.round(
        -__privateGet(this, _segmentsContainerLeft) / __privateGet(this, _calculatedSegmentWidth)
      ));
      __privateGet(this, _calcLayout).call(this);
    });
    // Calculates the layout based on the configured min width
    // and the available space in the track
    __privateAdd(this, _calcLayout, (followFocus = false) => {
      const calcNumVisibleSegments = () => {
        const numSegments = this.segments.length;
        const availableWidth = this._elTrack.offsetWidth;
        if (availableWidth / numSegments > this.segMinWidth) {
          return {
            count: numSegments,
            segmentWidth: (availableWidth - getSegmentGap(this.isUsingTransitionalStyles) * (numSegments - 1)) / numSegments
          };
        }
        const availableWidthIncBtns = this.offsetWidth - BTN_SIZE[this.size] * 2;
        const maxVisibleSegments = Math.floor(
          availableWidthIncBtns / this.segMinWidth
        );
        const segmentWidth = (availableWidth - getSegmentGap(this.isUsingTransitionalStyles) * (maxVisibleSegments - 1)) / maxVisibleSegments;
        return {
          count: maxVisibleSegments,
          segmentWidth
        };
      };
      const { count } = calcNumVisibleSegments();
      if (followFocus) {
        if (__privateGet(this, _focusedIndex) >= __privateGet(this, _firstVisibleIndex) + count) {
          __privateSet(this, _firstVisibleIndex, __privateGet(this, _focusedIndex) - count + 1);
        }
        if (__privateGet(this, _focusedIndex) < __privateGet(this, _firstVisibleIndex)) {
          __privateSet(this, _firstVisibleIndex, __privateGet(this, _focusedIndex));
        }
      }
      const endFirstIndex = this.segments.length - count;
      const hasReachedEnd = __privateGet(this, _firstVisibleIndex) >= endFirstIndex;
      const isAtStart = __privateGet(this, _firstVisibleIndex) <= 0;
      if (hasReachedEnd) {
        __privateSet(this, _firstVisibleIndex, endFirstIndex);
      }
      if (isAtStart) {
        __privateSet(this, _firstVisibleIndex, 0);
      }
      __privateGet(this, _updateScrollBtnState).call(this, count);
      this.updateComplete.then(() => {
        const { segmentWidth, count: count2 } = calcNumVisibleSegments();
        this.segments.forEach((segment) => {
          segment.style.width = segmentWidth + "px";
        });
        __privateSet(this, _segmentsContainerLeft, -__privateGet(this, _firstVisibleIndex) * segmentWidth - getSegmentGap(this.isUsingTransitionalStyles) * __privateGet(this, _firstVisibleIndex));
        __privateGet(this, _applySegmentsTransform).call(this);
        __privateSet(this, _calculatedSegmentWidth, segmentWidth);
        __privateSet(this, _segmentWidth, segmentWidth);
        __privateGet(this, _updateIndicator).call(this);
      });
    });
    __privateAdd(this, _applySegmentsTransform, () => {
      window.requestAnimationFrame(() => {
        this._elSegments.style.transform = `translateX(${__privateGet(this, _segmentsContainerLeft)}px)`;
      });
    });
    __privateAdd(this, _scrollLeft, () => {
      __privateWrapper(this, _firstVisibleIndex)._--;
      __privateGet(this, _calcLayout).call(this);
    });
    __privateAdd(this, _scrollRight, () => {
      __privateWrapper(this, _firstVisibleIndex)._++;
      __privateGet(this, _calcLayout).call(this);
    });
    // Updates the visibility of the scroll buttons
    __privateAdd(this, _updateScrollBtnState, (numVisibleSegments) => {
      this._showPrevButton = __privateGet(this, _firstVisibleIndex) > 0;
      this._showNextButton = __privateGet(this, _firstVisibleIndex) < this.segments.length - numVisibleSegments;
    });
    // Updates the selection indicator position
    __privateAdd(this, _updateIndicator, () => {
      const segment = this.segments.find((s) => s.selected);
      if (segment) {
        const selectedSegmentIndex = this.segments.indexOf(segment);
        const offset2 = selectedSegmentIndex * __privateGet(this, _segmentWidth) + getSegmentGap(this.isUsingTransitionalStyles) * selectedSegmentIndex;
        this._elIndicator.style.transform = `translateX(${offset2}px)`;
        this._elIndicator.style.width = `${__privateGet(this, _segmentWidth)}px`;
      } else {
        this._elIndicator.style.transform = `translateX(-100%)`;
        this._elIndicator.style.width = `0px`;
      }
    });
    __privateAdd(this, _handleSegmentClick, (event) => {
      const selectedSegment = this.segments.find(
        (s) => s === event.target || s.contains(event.target)
      );
      if (selectedSegment) {
        this.segments.forEach((s) => s.selected = false);
        selectedSegment.selected = true;
        __privateSet(this, _value, selectedSegment.value);
        __privateGet(this, _updateIndicator).call(this);
        this.dispatchEvent(
          new CustomEvent("change", {
            detail: { segment: selectedSegment },
            bubbles: true,
            composed: true
          })
        );
      }
    });
    __privateAdd(this, _updateSelectedFromValue, () => {
      if (!__privateGet(this, _value))
        return;
      this.updateComplete.then(() => {
        const selectedSegment = this.segments.find((s) => s.value === __privateGet(this, _value));
        if (selectedSegment) {
          this.segments.forEach((s) => s.selected = false);
          selectedSegment.selected = true;
          __privateSet(this, _focusedIndex, this.segments.indexOf(selectedSegment));
          __privateGet(this, _calcLayout).call(this, true);
        }
      });
    });
  }
  get value() {
    return __privateGet(this, _value);
  }
  set value(val) {
    __privateSet(this, _value, val);
    __privateGet(this, _updateSelectedFromValue).call(this);
  }
  /**
   * Returns the segments in the control
   * @readonly
   */
  get segments() {
    return this._elSlot ? this._elSlot.assignedElements() : [];
  }
  connectedCallback() {
    super.connectedCallback();
    TransitionalStyles.instance.apply(this, "gds-segmented-control");
    __privateGet(this, _resizeObserver).observe(this);
    this.addEventListener("focusin", (e) => {
      if (e.target instanceof GdsSegment) {
        __privateSet(this, _focusedIndex, this.segments.indexOf(e.target));
        __privateGet(this, _calcLayout).call(this, true);
      }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    __privateGet(this, _resizeObserver).unobserve(this);
  }
  render() {
    return html`${this._tStyles}
      ${when6(
      this._showPrevButton,
      () => html`<button
            id="btn-prev"
            @click=${__privateGet(this, _scrollLeft)}
            aria-label=${msg6("Scroll right")}
          >
            <gds-icon name="chevron-left"></gds-icon>
          </button>`
    )}
      <div
        id="track"
        @scroll=${() => {
      this._elTrack.scrollLeft = 0;
    }}
      >
        <div
          id="segments"
          @pointerdown=${__privateGet(this, _startDrag)}
          @pointermove=${__privateGet(this, _drag)}
          @touchmove=${__privateGet(this, _drag)}
          @pointerup=${__privateGet(this, _endDrag)}
          @pointercancel=${__privateGet(this, _endDrag)}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${__privateGet(this, _handleSegmentClick)}
            @slotchange=${__privateMethod(this, _handleSlotChange, handleSlotChange_fn)}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${when6(
      this._showNextButton,
      () => html`<button
            id="btn-next"
            @click=${__privateGet(this, _scrollRight)}
            aria-label=${msg6("Scroll right")}
          >
            <gds-icon name="chevron-right"></gds-icon>
          </button>`
    )}`;
  }
  _recalculateMinWidth() {
    this.updateComplete.then(() => __privateGet(this, _calcLayout).call(this));
  }
};
_value = new WeakMap();
_tid = new WeakMap();
_resizeObserver = new WeakMap();
_firstVisibleIndex = new WeakMap();
_calculatedSegmentWidth = new WeakMap();
_segmentWidth = new WeakMap();
_segmentsContainerLeft = new WeakMap();
_focusedIndex = new WeakMap();
_dragStartX = new WeakMap();
_dragStartLeft = new WeakMap();
_isDragging = new WeakMap();
_startDrag = new WeakMap();
_drag = new WeakMap();
_endDrag = new WeakMap();
_calcVisibleAfterDrag = new WeakMap();
_calcLayout = new WeakMap();
_applySegmentsTransform = new WeakMap();
_handleSlotChange = new WeakSet();
handleSlotChange_fn = function() {
  const selSegmentValue = this.segments.find((s) => s.selected)?.value;
  if (selSegmentValue) {
    __privateSet(this, _value, selSegmentValue);
  }
  __privateGet(this, _calcLayout).call(this);
};
_scrollLeft = new WeakMap();
_scrollRight = new WeakMap();
_updateScrollBtnState = new WeakMap();
_updateIndicator = new WeakMap();
_handleSegmentClick = new WeakMap();
_updateSelectedFromValue = new WeakMap();
GdsSegmentedControl.styles = [tokens, unsafeCSS5(segmented_control_style_default)];
__decorateClass([
  property13({ type: Number, attribute: "seg-min-width" })
], GdsSegmentedControl.prototype, "segMinWidth", 2);
__decorateClass([
  property13()
], GdsSegmentedControl.prototype, "size", 2);
__decorateClass([
  property13()
], GdsSegmentedControl.prototype, "value", 1);
__decorateClass([
  state13()
], GdsSegmentedControl.prototype, "_tStyles", 2);
__decorateClass([
  query4("slot")
], GdsSegmentedControl.prototype, "_elSlot", 2);
__decorateClass([
  query4("#indicator")
], GdsSegmentedControl.prototype, "_elIndicator", 2);
__decorateClass([
  query4("#track")
], GdsSegmentedControl.prototype, "_elTrack", 2);
__decorateClass([
  query4("#segments")
], GdsSegmentedControl.prototype, "_elSegments", 2);
__decorateClass([
  state13()
], GdsSegmentedControl.prototype, "_showPrevButton", 2);
__decorateClass([
  state13()
], GdsSegmentedControl.prototype, "_showNextButton", 2);
__decorateClass([
  watch("segMinWidth")
], GdsSegmentedControl.prototype, "_recalculateMinWidth", 1);
GdsSegmentedControl = __decorateClass([
  gdsCustomElement("gds-segmented-control")
], GdsSegmentedControl);

// libs/core/src/components/icon/icon.ts
import { LitElement as LitElement8, html as html8, unsafeCSS as unsafeCSS6 } from "lit";
import { customElement as customElement2 } from "lit/decorators.js";

// libs/core/src/components/icon/stem.styles.scss
var stem_styles_default = `svg:not([display=none]) {
  contain: layout style;
  display: flex;
  height: 1lh;
  isolation: isolate;
  overflow: hidden;
  width: auto;
}

symbol {
  fill: none;
  height: 24px;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  width: 24px;
}`;

// libs/core/src/components/icon/icon.ts
var GdsIcon = class extends LitElement8 {
  constructor() {
    super(...arguments);
    this.open = false;
    this.name = "";
  }
  static get styles() {
    return unsafeCSS6(stem_styles_default);
  }
  render() {
    const { name } = this;
    return html8`
      <svg display="none">
        <symbol id="plus">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </symbol>
        <symbol id="x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </symbol>
        <symbol id="chevron-right">
          <polyline points="9 18 15 12 9 6" />
        </symbol>
        <symbol id="chevron-left">
          <polyline points="15 18 9 12 15 6" />
        </symbol>
        <symbol id="chevron-down">
          <polyline points="6 9 12 15 18 9" />
        </symbol>
        <symbol id="arrow">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </symbol>
        <symbol id="bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </symbol>
        <symbol id="calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </symbol>
        <symbol id="lock">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </symbol>
        <symbol id="eye">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </symbol>
        <symbol id="hash">
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="10" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="14" y2="21" />
        </symbol>
        <symbol id="mail">
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          />
          <polyline points="22,6 12,13 2,6" />
        </symbol>
        <symbol id="send">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </symbol>
        <symbol id="info">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </symbol>
        <symbol id="tel">
          <path
            d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          />
        </symbol>
        <symbol id="search">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </symbol>
        <symbol id="user">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </symbol>
        <symbol id="arrow-up">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </symbol>
        <symbol id="arrow-down">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </symbol>
        <symbol id="warning">
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          />
          <line x1="12" y1="9" x2="12" y2="13" />
          <path x1="12" y1="17" x2="12.01" y2="17" />
        </symbol>
      </svg>
      <svg viewBox="0 0 24 24">
        <use href="#${name}"></use>
      </svg>
    `;
  }
};
GdsIcon.properties = {
  open: { type: String, reflect: true },
  name: { type: String }
};
GdsIcon = __decorateClass([
  customElement2("gds-icon")
], GdsIcon);
export {
  GdsContextMenu,
  GdsDatepicker,
  GdsDropdown,
  GdsGrid,
  GdsGroupedList,
  GdsIcon,
  GdsMenuHeading,
  GdsMenuItem,
  GdsOption,
  GdsSegmentedControl,
  VER_SUFFIX,
  gdsCustomElement,
  getScopedTagName,
  getUnscopedTagName,
  html,
  htmlTemplateTagFactory
};
