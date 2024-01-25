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
var __accessCheck = (obj, member, msg5) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg5);
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
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// libs/core/src/components/button/button.ts
import { unsafeCSS as unsafeCSS4 } from "lit";
import { property as property2, query as query2 } from "lit/decorators.js";

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

// libs/core/src/components/icon/icon.ts
import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

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
var GdsIcon = class extends LitElement {
  constructor() {
    super(...arguments);
    this.open = false;
    this.name = "";
  }
  static get styles() {
    return unsafeCSS(stem_styles_default);
  }
  render() {
    const { name } = this;
    return html`
      <svg display="none">
        <symbol id="plus">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </symbol>
        <symbol id="x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </symbol>
        <symbol id="chevron">
          <polyline points="9 18 15 12 9 6" />
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
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
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
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
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
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> 
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
         <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
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
  customElement("gds-icon")
], GdsIcon);

// libs/core/src/primitives/ripple/ripple.ts
import { LitElement as LitElement2, html as html3, unsafeCSS as unsafeCSS2 } from "lit";

// libs/core/src/primitives/ripple/ripple.styles.scss
var ripple_styles_default = `:host {
  --gds-ripple-animation-name: ripple;
  --gds-ripple-animation: var(--gds-ripple-animation-name)
    var(--gds-sys-animation-duration) var(--gds-sys-animation-timing-function)
    var(--gds-sys-animation-delay) var(--gds-sys-animation-iteration-count)
    var(--gds-sys-animation-direction) var(--gds-sys-animation-fill-mode)
    var(--gds-sys-animation-play-state);
  border-radius: var(--gds-sys-radii-full);
  contain: strict;
  display: flex;
  height: 100%;
  inset: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

div {
  background-color: currentColor;
  border-radius: var(--gds-sys-radii-full);
  display: flex;
  height: 20px;
  left: var(--gds-ripple-left, 50%);
  margin-left: -10px;
  margin-top: -10px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: var(--gds-ripple-top, 50%);
  width: 20px;
  will-change: transform;
}

div.gds-ripple-effect {
  animation: var(--gds-ripple-animation);
}

@keyframes ripple {
  from {
    opacity: 0.5;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));
  }
}
@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-ripple-animation-name: none !important;
  }
}`;

// libs/core/src/utils/helpers/custom-element-scoping.ts
import { html as litHtml } from "lit";
import { customElement as customElement2 } from "lit/decorators.js";
var VER_SUFFIX = "-955307";
var elementLookupTable = /* @__PURE__ */ new Map();
var gdsCustomElement = (tagName) => {
  if (globalThis.GDS_DISABLE_VERSIONED_ELEMENTS) {
    return customElement2(tagName);
  }
  const versionedTagName = tagName + VER_SUFFIX;
  elementLookupTable.set(tagName, versionedTagName);
  if (customElements.get(versionedTagName))
    return (_classOrDescriptor) => false;
  return customElement2(versionedTagName);
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
var html2 = htmlTemplateTagFactory(litHtml);
function getScopedTagName(tagName) {
  return elementLookupTable.get(tagName) ?? tagName;
}
function getUnscopedTagName(tagName) {
  return [...elementLookupTable.entries()].find(
    ([, value]) => value === tagName
  )?.[0];
}

// libs/core/src/primitives/ripple/ripple.ts
import { query } from "lit/decorators.js";
var Ripple = class extends LitElement2 {
  constructor() {
    super(...arguments);
    this.onmousedown = (e) => {
      const target = e.target;
      const rect = target.getBoundingClientRect();
      const rippleEl = this._rippleEl;
      if (rippleEl) {
        rippleEl.classList.remove("gds-ripple-effect");
        this.style.setProperty("--gds-ripple-top", `${e.clientY - rect.top}px`);
        this.style.setProperty("--gds-ripple-left", `${e.clientX - rect.left}px`);
        setTimeout(() => {
          rippleEl.classList.add("gds-ripple-effect");
        }, 20);
      }
    };
  }
  static get styles() {
    return unsafeCSS2(ripple_styles_default);
  }
  render() {
    return html3`<div></div>`;
  }
};
__decorateClass([
  query("div")
], Ripple.prototype, "_rippleEl", 2);
Ripple = __decorateClass([
  gdsCustomElement("gds-ripple")
], Ripple);

// libs/core/src/tokens.style.ts
import { unsafeCSS as unsafeCSS3 } from "lit";

// dist/libs/tokens/internal/pallet.css
var pallet_default = `/**
 * Do not edit directly
 * Generated on Thu, 21 Dec 2023 12:33:19 GMT
 */

:host {
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
 * Generated on Thu, 21 Dec 2023 12:33:19 GMT
 */

:host {
  color-scheme: light;
  --gds-sys-color-accent-accent-green: #006D31;
  --gds-sys-color-accent-accent-orange: #FFBA30;
  --gds-sys-color-background-background: #FFFFFF;
  --gds-sys-color-background-background-dim: #F3F3F2;
  --gds-sys-color-container-container: #F3F3F2;
  --gds-sys-color-container-container-dim1: #E7E7E4;
  --gds-sys-color-container-container-dim2: #DADAD7;
  --gds-sys-color-container-container-bright: #FFFFFF;
  --gds-sys-color-container-container-shade1: #353531;
  --gds-sys-color-container-container-shade2: #1B1B18;
  --gds-sys-color-container-container-disabled: #F9F9F9;
  --gds-sys-color-container-container-positive: #006D31;
  --gds-sys-color-container-container-negative: #BA1D00;
  --gds-sys-color-content-content: #353531;
  --gds-sys-color-content-content-inverse: #FFFFFF;
  --gds-sys-color-content-content-secondary: #6A6A62;
  --gds-sys-color-content-content-positive: #006D31;
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
  --gds-sys-color-stroke-stroke-custom-blue: #BA1D00;
}
`;

// libs/core/src/tokens/tokens.css
var tokens_default = `:host {
  /* Color styles */
  --gds-color-transparent: transparent;
  --gds-color-current: currentColor;
  --gds-theme: var(--gds-color-green-40);
  --gds-color-white: rgba(255, 255, 255, 1);
  --gds-color-black: rgba(0, 0, 0, 1);

  /* New update 29.05.23 */
  --gds-color-text-primary: var(--gds-ref-color-grey-20);
  --gds-color-text-secondary: var(--gds-ref-color-grey-40);
  --gds-color-text-disabled: var(--gds-ref-color-grey-60);
  --gds-color-text-inverse: var(--gds-ref-color-white);
  --gds-color-text-red: var(--gds-ref-color-red-40);
  --gds-color-text-green: var(--gds-ref-color-green-40);
  --gds-color-text-blue: var(--gds-ref-color-blue-40);
  --gds-color-link-primary: var(--gds-ref-color-grey-20);
  --gds-color-icon-primary: var(--gds-ref-color-grey-20);
  --gds-color-icon-secondary: var(--gds-ref-color-grey-40);
  --gds-color-icon-disabled: var(--gds-ref-color-grey-60);
  --gds-color-icon-inverse: var(--gds-ref-color-white);
  --gds-color-icon-red: var(--gds-ref-color-red-40);
  --gds-color-icon-green: var(--gds-ref-color-green-40);
  --gds-color-icon-blue: var(--gds-ref-color-blue-40);
  --gds-color-background-primary: var(--gds-ref-color-white);
  --gds-color-stroke-primary: var(--gds-ref-color-grey-50);
  --gds-color-stroke-secondary: var(--gds-ref-color-grey-80);
  --gds-color-stroke-inverse: var(--gds-ref-color-white);
  --gds-color-stroke-error: var(--gds-ref-color-red-40);

  /* Text-size styles */
  /* font-size: 100%; font-size: large; font-size: larger; font-size: medium; font-size: small; font-size: smaller;  --gds-fs-base: 10px; */

  --gds-fs-base: 100%; /* 16px is the default font size */
  --gds-fs-display-large: 5.125rem; /* 82px / 16px = 5.125rem */
  --gds-fs-display-medium: 4rem; /* 64px / 16px = 4rem */
  --gds-fs-display-small: 2.5rem; /* 40px / 16px = 2.5rem */
  --gds-fs-headline-large: 2rem; /* 32px / 16px = 2rem */
  --gds-fs-headline-medium: 1.75rem; /* 28px / 16px = 1.75rem */
  --gds-fs-headline-small: 1.5rem; /* 24px / 16px = 1.5rem */
  --gds-fs-title-large: 1.375rem; /* 22px / 16px = 1.375rem */
  --gds-fs-title-medium: 1rem; /* 16px / 16px = 1.6rem */
  --gds-fs-title-small: 0.875rem; /* 14px / 16px = .875rem */
  --gds-fs-body-large: 1rem; /* 16px / 16px = 1rem */
  --gds-fs-body-medium: 0.875rem; /* 14px / 16px = .875rem */
  --gds-fs-body-small: 0.75rem; /* 12px / 16px = .75rem */
  --gds-fs-label-large: 1rem; /* 16px / 16px = 1rem */
  --gds-fs-label-medium: 0.875rem; /* 14px / 16px = .875rem */
  --gds-fs-label-small: 0.75rem; /* 12px / 16px = .75rem */
  --gds-fs-label-information-large: 1rem; /* 16px / 16px = 1rem */
  --gds-fs-label-information-medium: 0.875rem; /* 14px / 16px = .75rem */
  --gds-fs-label-input-large: 1rem; /* 16px / 16px = 1rem */
  --gds-fs-label-input-medium: 0.875rem; /* 14px / 16px = .875rem */
  --gds-fs-label-overline: 0.875rem; /* 14px / 16px = .875rem */

  /* Line heights */
  --gds-lh-display-large: 1.1905; /* 98/82 */
  --gds-lh-display-medium: 1.25; /* 80/64 */
  --gds-lh-display-small: 1.3077; /* 52/40 */
  --gds-lh-headline-large: 1.25; /* 40/32 */
  --gds-lh-headline-medium: 1.125; /* 36/32 */
  --gds-lh-headline-small: 1.2; /* 30/24 */
  --gds-lh-title-large: 1.1071; /* 28/22 */
  --gds-lh-title-medium: 1.5; /* 24/16 */
  --gds-lh-title-small: 1.4286; /* 20/14 */
  --gds-lh-body-large: 1.25; /* 20/16 */
  --gds-lh-body-medium: 1.4286; /* 20/14 */
  --gds-lh-body-small: 1.3333; /* 16/12 */
  --gds-lh-label-large: 1.25; /* 20/16 */
  --gds-lh-label-medium: 1.4286; /* 20/14 */
  --gds-lh-label-small: 1.3333; /* 16/12 */
  --gds-lh-label-information-large: 1.25; /* 20/16 */
  --gds-lh-label-information-medium: 1.4286; /* 20/14 */
  --gds-lh-label-input-large: 1.25; /* 20/16 */
  --gds-lh-label-input-medium: 1.4286; /* 20/14 */
  --gds-lh-label-overline: 1.1667; /* 18/14 */

  /* Font weights */
  --gds-fw-light: 300;
  --gds-fw-regular: 400;
  --gds-fw-medium: 500;
  --gds-fw-bold: 700;

  /* Spacing */
  --gds-spacing-0: 0;
  --gds-spacing-1: 0.125rem; /* 2px / 16px = 0.125rem */
  --gds-spacing-2: 0.25rem; /* 4px / 16px = 0.25rem */
  --gds-spacing-3: 0.5rem; /* 8px / 16px = 0.5rem */
  --gds-spacing-4: 0.75rem; /* 12px / 16px = 0.75rem */
  --gds-spacing-5: 1rem; /* 16px / 16px = 1rem */
  --gds-spacing-6: 1.5rem; /* 24px / 16px = 1.5rem */
  --gds-spacing-7: 2rem; /* 32px / 16px = 2rem */
  --gds-spacing-8: 2.5rem; /* 40px / 16px = 2.5rem */
  --gds-spacing-9: 3rem; /* 48px / 16px = 3rem */
  --gds-spacing-10: 4rem; /* 64px / 16px = 4rem */
  --gds-spacing-11: 5rem; /* 80px / 16px = 5rem */
  --gds-spacing-12: 6rem; /* 96px / 16px = 6rem */
  --gds-spacing-13: 7rem; /* 112px / 16px = 7rem */
  --gds-spacing-14: 8rem; /* 128px / 16px = 8rem */

  /* Transitions */
  --gds-sys-transition-easing: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  --gds-sys-transition-properties: all;
  --gds-sys-transition-duration: 0.15s;
  --gds-sys-transition-delay: 0s;
  --gds-sys-transition-timing-function: var(--gds-sys-transition-easing);
  --gds-sys-transition: var(--gds-sys-transition-properties)
    var(--gds-sys-transition-duration) var(--gds-sys-transition-timing-function)
    var(--gds-sys-transition-delay);

  /* Animation */
  --gds-sys-animation-duration: 1.2s;
  --gds-sys-animation-timing-function: ease;
  --gds-sys-animation-delay: 0s;
  --gds-sys-animation-iteration-count: 1;
  --gds-sys-animation-direction: normal;
  --gds-sys-animation-fill-mode: none;
  --gds-sys-animation-play-state: running;

  /* Border */
  --gds-sys-radii-small: var(--gds-spacing-2);
  --gds-sys-radii-medium: var(--gds-spacing-3);
  --gds-sys-radii-large: var(--gds-spacing-4);
  --gds-sys-radii-full: var(--gds-spacing-14);
  --gds-sys-border-radius: var(--gds-sys-radii-full);
  --gds-sys-border-width: 1px;
  --gds-sys-border-color: var(--gds-ref-color-grey-20);
  --gds-sys-border-style: solid;
  --gds-sys-border: var(--gds-sys-border-width) var(--gds-sys-border-style)
    var(--gds-sys-border-color);

  /* Base Padding */
  --gds-sys-padding-inline: var(--gds-spacing-5);
  --gds-sys-padding-block: var(--gds-spacing-4);

  /* Gap */
  --gds-sys-gap-small: var(--gds-spacing-3);
  --gds-sys-gap-medium: var(--gds-spacing-5);
  --gds-sys-gap-large: var(--gds-spacing-8);

  /* Background styles */
  --gds-bg-a50: 0.5;
  --gds-bg-a80: 0.8;
}
`;

// libs/core/src/tokens/a11y.css
var a11y_default = `/* Styles for dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --gds-color-text-primary: var(--gds-color-text-primary-dark);
    --gds-color-text-secondary: var(--gds-color-text-secondary-dark);
    --gds-color-text-disabled: var(--gds-color-text-disabled-dark);
    --gds-color-text-inverse: var(--gds-color-text-inverse-dark);
    --gds-color-text-red: var(--gds-color-text-red-dark);
    --gds-color-text-green: var(--gds-color-text-green-dark);
    --gds-color-text-blue: var(--gds-color-text-blue-dark);
    --gds-color-link-primary: var(--gds-color-link-primary-dark);
    --gds-color-icon-primary: var(--gds-color-icon-primary-dark);
    --gds-color-icon-secondary: var(--gds-color-icon-secondary-dark);
    --gds-color-icon-disabled: var(--gds-color-icon-disabled-dark);
    --gds-color-icon-inverse: var(--gds-color-icon-inverse-dark);
    --gds-color-icon-red: var(--gds-color-icon-red-dark);
    --gds-color-icon-green: var(--gds-color-icon-green-dark);
    --gds-color-icon-blue: var(--gds-color-icon-blue-dark);
    --gds-color-background-primary: var(--gds-color-background-primary-dark);
    --gds-color-stroke-primary: var(--gds-color-stroke-primary-dark);
    --gds-color-stroke-secondary: var(--gds-color-stroke-secondary-dark);
    --gds-color-stroke-inverse: var(--gds-color-stroke-inverse-dark);
    --gds-color-stroke-error: var(--gds-color-stroke-error-dark);
  }
}

/* Styles for reduced motion mode */
@media (prefers-reduced-motion: reduce) {
  :root {
    --gds-sys-transition-duration: 0s;
    --gds-sys-animation-duration: 0s;
  }
}

/* Styles for high contrast mode */
@media (prefers-contrast: high) {
  /* styles for high contrast motion */
}

/* Styles for hover state on devices that support hover */
@media (hover: hover) {
  /* styles for hover state */
}

/* Styles for print media */
@media print {
  /* styles for print */
}

/* Styles for devices with a high resolution */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* styles for high resolution displays */
}

/* Styles for devices with a pointer, such as a mouse */
@media (pointer: fine) {
  /* styles for pointer devices */
}

/* Styles for devices that support touch */
@media (pointer: coarse) {
  /* styles for touch devices */
}

/* Styles for devices with a 16:9 aspect ratio */
@media (aspect-ratio: 16/9) {
  /* styles for 16:9 aspect ratio */
}

/* Styles for devices in portrait orientation */
@media (orientation: portrait) {
  /* styles for portrait orientation */
}

/* Styles for devices in landscape orientation */
@media (orientation: landscape) {
  /* styles for landscape orientation */
}

/* Styles for devices with a monochrome color scheme */
@media (monochrome) {
  /* styles for monochrome devices */
}

/* Styles for devices with a forced color scheme */
@media (forced-colors: active) {
  /* styles for devices with a forced color scheme */
}

/* Styles for devices with a wide color gamut */
@media (color-gamut: p3) {
  /* styles for devices with a wide color gamut */
}

/* Styles for devices with a high dynamic range */
@media (dynamic-range: high) {
  /* styles for devices with a high dynamic range */
}

/* Styles for devices with a grid */
@media (display: grid) {
  /* styles for devices with a grid */
}

@media (prefers-reduced-transparency: reduce) {
  /* CSS styles for reduced transparency */
}

/* Color Mix */
@supports (background-color: color-mix(in srgb, red, transparent 10%)) {
  [alert='support'] {
    display: none;
  }
}

/* Backdrop */

@supports ((-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))) {
  :host([blur]) gds-blur {
    -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
  }
}
`;

// libs/core/src/tokens.style.ts
var tokens = [
  unsafeCSS3(pallet_default),
  unsafeCSS3(light_default),
  //unsafeCSS(darkThemeCss),
  unsafeCSS3(tokens_default),
  unsafeCSS3(a11y_default)
];

// libs/core/src/components/button/button.style.css
var button_style_default = `@layer tokens, a11y, core, variants, sizes, sets, disabled;

@layer tokens {
  :host {
    --_gap: var(--gds-sys-gap-small);

    --_transition: var(--gds-sys-transition);

    --_padding-inline: var(--gds-sys-padding-inline);
    --_padding-block: var(--gds-sys-padding-block);

    --_border-radius: var(--gds-sys-border-radius);
    --_border-width: var(--gds-sys-border-width);
    --_border-style: var(--gds-sys-border-style);

    --_color-bg: var(--gds-sys-color-content-content);
    --_color-text: var(--gds-sys-color-content-content-inverse);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    --_color-outline-alpha: 60%;
    --_color-outline: var(--_color-border);

    /* These state layer variables can be set to the correct state layer token in
    * the variant and set specific styles. It will be blended with \`--_color-bg\`
    * for the \`background-color\` rule. */
    --_state-layer-hover: var(--gds-sys-color-state-layers-state-black);
    --_state-layer-active: var(--gds-sys-color-state-layers-state-black-shade);

    contain: layout;
    display: inline-block;
    isolation: isolate;

    max-width: 100%;
  }
}

@layer a11y {
  @media (prefers-color-scheme: dark) {
    /* TODO */
  }
  @media (prefers-reduced-motion: reduce) {
    :host {
      --_transition: none;
    }
  }
}

@layer core {
  button {
    align-items: center;

    background-color: var(--_color-bg);
    block-size: 100%;

    border-color: var(--_color-border);
    border-radius: var(--_border-radius);
    border-style: var(--_border-style);
    border-width: var(--_border-width);

    box-sizing: border-box;
    color: var(--_color-text);
    color-scheme: dark light;
    cursor: pointer;

    display: inline-flex;
    gap: var(--_gap);
    height: var(--_size);

    inline-size: 100%;
    justify-content: space-between;
    justify-items: center;
    outline-color: transparent;
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
    padding-block: var(--_padding-block);
    padding-inline: var(--_padding-inline);
    position: relative;
    transition: var(--_transition);
    font-family: inherit;

    /* TODO: Tokens... */
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;

    &:focus {
      outline-color: color-mix(in srgb,
        var(--_color-outline),
        transparent var(--_color-outline-alpha));

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--_color-bg),
        var(--_state-layer-hover));
      border-color: color-mix(
        in srgb,
        var(--_color-border),
        var(--_state-layer-hover));
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--_color-bg),
        var(--_state-layer-active));
      border-color: color-mix(
        in srgb,
        var(--_color-border),
        var(--_state-layer-active));
    }
  }

  button slot:not([name]) {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

@layer variants {
  :host([variant*='secondary']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: var(--gds-sys-color-stroke-stroke);

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
    }
  }

  :host([variant*='tertiary']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content);
    --_color-border: transparent;

    &:hover {
      --_color-border: var(--gds-sys-color-stroke-stroke);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);
      --_color-border: var(--gds-sys-color-stroke-stroke);
    }
  }

  button.circle {
    align-items: center;
    aspect-ratio: 1/1;
    height: var(--_size);
    justify-content: center;
    padding: 0;
    width: var(--_size);

    &::slotted(gds-icon) {
      align-items: center;
      display: flex;
      height: 24px;
      justify-content: center;
      width: 24px;
    }
  }
}

@layer sizes {
  :host([size='small']) button {
    --_padding-inline: var(--gds-spacing-5);
    --_padding-block: var(--gds-spacing-3);
    --_size: 2rem;
    font-size: 0.875rem;
  }

  :host([size='medium']) button {
    --_padding-inline: var(--gds-spacing-5);
    --_padding-block: var(--gds-spacing-3);
    --_size: 2.5rem;
  }

  :host([size='large']) button {
    --_padding-inline: var(--gds-spacing-5);
    --_padding-block: var(--gds-spacing-4);
    --_size: 3rem;
  }
}

@layer sets {
  :host([variant='primary'][set='positive']) button {
    --_bg: var(--gds-sys-color-container-container-positive);
    --_color-bg: var(--_bg);
    --_color-border: var(--_bg);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);
    }

    &:focus {
      --_color-outline: var(--_bg);
    }
  }

  :host([variant='secondary'][set='positive']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content-positive);
    --_color-border: var(--gds-sys-color-stroke-stroke-positive);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-positive-dim);
    }
  }

  :host([variant='tertiary'][set='positive']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content-positive);
    --_color-border: transparent;

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);
      --_color-border: var(--gds-sys-color-stroke-stroke-positive);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-positive-dim);
      --_color-border: var(--gds-sys-color-stroke-stroke-positive);
    }
  }

  :host([variant='primary'][set='negative']) button {
    --_bg: var(--gds-sys-color-container-container-negative);
    --_color-bg: var(--_bg);
    --_color-text: var(--gds-sys-color-status-negative-on-negative);
    --_color-border: var(--_bg);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);
    }

    &:focus {
      --_color-outline: var(--_bg);
    }
  }

  :host([variant='secondary'][set='negative']) button {
    --_color-bg: var(--gds-sys-color-content-content-inverse);
    --_color-text: var(--gds-sys-color-content-content-negative);
    --_color-border: var(--gds-sys-color-stroke-stroke-negative);

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-negative-dim);
    }
  }

  :host([variant='tertiary'][set='negative']) button {
    --_color-bg: transparent;
    --_color-text: var(--gds-sys-color-content-content-negative);
    --_color-border: transparent;

    &:hover {
      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    }

    &:active {
      --_state-layer-active: var(--gds-sys-color-state-layers-state-negative-dim);
      --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    }
  }
}

@layer disabled {
  button:disabled {
    --_color-bg: var(--gds-sys-color-container-container-disabled);
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-content-disabled);
    pointer-events: none;
  }
}
`;

// libs/core/src/utils/helpers/strip-white-space.ts
var templateCache2 = /* @__PURE__ */ new WeakMap();
function stripWhitespace(extendedTag) {
  return (strings, ...values) => {
    let modstrings = templateCache2.get(strings);
    if (!modstrings) {
      modstrings = strings.map((s) => s.replace(/\n[\s]+</gm, "<"));
      modstrings.raw = strings.raw;
      templateCache2.set(strings, modstrings);
    }
    return extendedTag(modstrings, ...values);
  };
}

// libs/core/src/components/button/button.ts
import { classMap } from "lit/directives/class-map.js";

// libs/core/src/components/form-control.ts
import { LitElement as LitElement3 } from "lit";
import { property } from "lit/decorators.js";

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
      watchedProperties.forEach((property15) => {
        const key = property15;
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
function observeLightDOM() {
  return (proto, _propertyKey, descriptor) => {
    const observerConfig = { attributes: true, childList: true, subtree: false };
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

// libs/core/src/components/form-control.ts
var GdsFormControlElement = class extends LitElement3 {
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
    this.#internals = this.attachInternals();
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
        valueMissing: false
      },
      this.validationMessage || "Error message"
    );
  }
  __handleValueChange() {
    this.#internals.setFormValue(this.value);
  }
};
__decorateClass([
  property({
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
  property()
], GdsFormControlElement.prototype, "value", 2);
__decorateClass([
  property({ reflect: true })
], GdsFormControlElement.prototype, "name", 2);
__decorateClass([
  watch("invalid")
], GdsFormControlElement.prototype, "__handleValidityChange", 1);
__decorateClass([
  watch("value")
], GdsFormControlElement.prototype, "__handleValueChange", 1);

// libs/core/src/components/button/button.ts
var html4 = stripWhitespace(html2);
var _isIconButton, _mainSlotChange, _handleClick;
var GdsButton = class extends GdsFormControlElement {
  constructor() {
    super();
    this.disabled = false;
    this.variant = "primary";
    this.set = "neutral";
    this.size = "medium";
    this.label = "";
    __privateAdd(this, _isIconButton, false);
    // Check if the button is an icon button.
    __privateAdd(this, _mainSlotChange, () => {
      const assignedNodes = this._mainSlot?.assignedNodes() ?? [];
      __privateSet(this, _isIconButton, assignedNodes.length === 1 && assignedNodes.some((node) => node.nodeName === "GDS-ICON"));
      this.requestUpdate();
    });
    __privateAdd(this, _handleClick, (e) => {
      this.dispatchEvent(
        new CustomEvent("gds-click", {
          bubbles: true,
          composed: true,
          detail: e
        })
      );
      if (this.form) {
        if (this.type === "submit") {
          this.form.requestSubmit();
        } else if (this.type === "reset") {
          this.form.reset();
        }
      }
    });
    constrainSlots(this);
  }
  render() {
    return html4`
      <button
        class="${classMap({ circle: __privateGet(this, _isIconButton) })}"
        ?type="${this.type}"
        ?disabled="${this.disabled}"
        @click="${__privateGet(this, _handleClick)}"
        aria-label="${this.label}"
      >
        <slot name="lead" gds-allow="gds-icon"></slot>
        <slot
          @slotchange=${__privateGet(this, _mainSlotChange)}
          gds-allow="#text gds-icon"
        ></slot>
        <slot name="trail" gds-allow="gds-icon"></slot>
        <gds-ripple></gds-ripple>
      </button>
    `;
  }
};
_isIconButton = new WeakMap();
_mainSlotChange = new WeakMap();
_handleClick = new WeakMap();
GdsButton.styles = [tokens, unsafeCSS4(button_style_default)];
GdsButton.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property2({ type: Boolean, reflect: true })
], GdsButton.prototype, "disabled", 2);
__decorateClass([
  property2({ reflect: true })
], GdsButton.prototype, "type", 2);
__decorateClass([
  property2({ reflect: true })
], GdsButton.prototype, "variant", 2);
__decorateClass([
  property2({ reflect: true })
], GdsButton.prototype, "set", 2);
__decorateClass([
  property2({ reflect: true })
], GdsButton.prototype, "size", 2);
__decorateClass([
  property2()
], GdsButton.prototype, "label", 2);
__decorateClass([
  query2("slot:not([name])")
], GdsButton.prototype, "_mainSlot", 2);
GdsButton = __decorateClass([
  gdsCustomElement("gds-button")
], GdsButton);

// libs/core/src/components/dropdown/dropdown.ts
import { property as property6, query as query3, queryAsync } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { when as when2 } from "lit/directives/when.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { msg as msg2, str, updateWhenLocaleChanges } from "@lit/localize";
import "reflect-metadata";

// libs/core/src/primitives/listbox/listbox.ts
import { LitElement as LitElement4 } from "lit";
import { property as property3 } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";

// libs/core/src/utils/helpers/transitional-styles.ts
var TransitionalStyles = class _TransitionalStyles {
  constructor() {
    this.sheets = /* @__PURE__ */ new Map();
    this.elements = /* @__PURE__ */ new Map();
  }
  static get instance() {
    if (!globalThis.__gdsTransitionalStyles?.[VER_SUFFIX])
      globalThis.__gdsTransitionalStyles = {
        [VER_SUFFIX]: new _TransitionalStyles()
      };
    return globalThis.__gdsTransitionalStyles[VER_SUFFIX];
  }
  apply(element, styleKey) {
    const sheet = this.sheets.get(styleKey);
    if (!sheet || !element.shadowRoot)
      return;
    this.elements.set(styleKey, element);
    this.applyToElement(styleKey, sheet);
  }
  applyToElement(styleKey, sheet) {
    const element = this.elements.get(styleKey);
    if (!element || !element.shadowRoot)
      return;
    element.shadowRoot.adoptedStyleSheets = [sheet];
  }
  register(name, styles) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styles);
    this.sheets.set(name, sheet);
    this.applyToElement(name, sheet);
  }
};

// libs/core/src/primitives/listbox/listbox.ts
import "reflect-metadata";

// libs/core/src/primitives/listbox/listbox.styles.ts
import { css } from "lit";
var style = css`
  :host {
    display: flex;
    flex-direction: column;
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
var GdsListbox = class extends LitElement4 {
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
      (o) => !o.hasAttribute("isplaceholder")
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
    return html2`<slot ${ref(__privateGet(this, _slotRef))}></slot>`;
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
  property3({
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
  property3()
], GdsListbox.prototype, "compareWith", 2);
__decorateClass([
  watch("multiple")
], GdsListbox.prototype, "_rerenderOptions", 1);
GdsListbox = __decorateClass([
  gdsCustomElement("gds-listbox")
], GdsListbox);

// libs/core/src/primitives/listbox/option.ts
import { LitElement as LitElement5, html as html5 } from "lit";
import { property as property4 } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { classMap as classMap2 } from "lit/directives/class-map.js";

// libs/core/src/primitives/listbox/option.styles.ts
import { css as css2 } from "lit";
var style2 = css2`
  :host {
    padding: 0.5 1rem;
    cursor: pointer;
  }

  :host(:hover) {
    background-color: grey;
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
      if (document.activeElement !== this) {
        const iv = setInterval(() => {
          if (document.activeElement === this)
            clearInterval(iv);
          super.focus(options);
        }, 10);
      }
    }
  }
  return HighlightableElement;
};

// libs/core/src/primitives/listbox/option.ts
var _hidden, _emitSelect, emitSelect_fn;
var GdsOption = class extends Focusable(LitElement5) {
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
      __privateMethod(this, _emitSelect, emitSelect_fn).call(this);
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
  handlePlaceholderStatusChange() {
    if (this.isPlaceholder) {
      __privateSet(this, _hidden, true);
      this.setAttribute("aria-hidden", "true");
    } else {
      __privateSet(this, _hidden, false);
      this.setAttribute("aria-hidden", "false");
    }
  }
  render() {
    const isMultiple = this.parentElement.multiple;
    const checkbox = html5`<span
      class="checkbox ${classMap2({ checked: this.selected })}"
    ></span>`;
    if (!isMultiple) {
      if (this.selected)
        this.setAttribute("highlighted", "");
      else
        this.removeAttribute("highlighted");
    }
    return html5`${when(isMultiple, () => checkbox)}<slot></slot>`;
  }
};
_hidden = new WeakMap();
_emitSelect = new WeakSet();
emitSelect_fn = function() {
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
  property4()
], GdsOption.prototype, "value", 2);
__decorateClass([
  property4({
    attribute: "aria-hidden",
    reflect: true
  })
], GdsOption.prototype, "hidden", 1);
__decorateClass([
  property4({
    attribute: "aria-selected",
    reflect: true
  })
], GdsOption.prototype, "selected", 2);
__decorateClass([
  property4({ type: Boolean, reflect: true })
], GdsOption.prototype, "isPlaceholder", 2);
__decorateClass([
  watch("isplaceholder")
], GdsOption.prototype, "handlePlaceholderStatusChange", 1);
GdsOption = __decorateClass([
  gdsCustomElement("gds-option")
], GdsOption);

// libs/core/src/primitives/popover/popover.ts
import { LitElement as LitElement6, html as html6, unsafeCSS as unsafeCSS5 } from "lit";
import { property as property5, state } from "lit/decorators.js";
import { classMap as classMap3 } from "lit/directives/class-map.js";
import { msg } from "@lit/localize";
import { createRef as createRef2, ref as ref2 } from "lit/directives/ref.js";
import {
  computePosition,
  autoUpdate,
  offset,
  flip
} from "@floating-ui/dom";

// libs/core/src/primitives/popover/topLayerOverTransforms.middleware.ts
var topLayerOverTransforms = () => ({
  name: "topLayer",
  async fn(middlewareArguments) {
    const {
      x,
      y,
      elements: { reference, floating }
    } = middlewareArguments;
    let onTopLayer = false;
    let topLayerIsFloating = false;
    const diffCoords = {
      x: 0,
      y: 0
    };
    try {
      onTopLayer = onTopLayer || floating.matches(":open");
    } catch (e) {
    }
    try {
      onTopLayer = onTopLayer || floating.matches(":modal");
    } catch (e) {
    }
    topLayerIsFloating = onTopLayer;
    if (!onTopLayer) {
      const dialogAncestorQueryEvent = new Event("floating-ui-dialog-test", {
        composed: true,
        bubbles: true
      });
      floating.addEventListener(
        "floating-ui-dialog-test",
        (event) => {
          event.composedPath().forEach((el) => {
            if (el === floating || el.localName !== "dialog")
              return;
            try {
              onTopLayer = onTopLayer || el.matches(":modal");
              if (onTopLayer) {
              }
            } catch (e) {
            }
          });
        },
        { once: true }
      );
      floating.dispatchEvent(dialogAncestorQueryEvent);
    }
    let overTransforms = false;
    const containingBlock = getContainingBlock(reference);
    if (containingBlock !== null && !isWindow(containingBlock)) {
      overTransforms = true;
    }
    if (onTopLayer && overTransforms) {
      const rect = containingBlock.getBoundingClientRect();
      diffCoords.x = rect.x;
      diffCoords.y = rect.y;
    }
    if (onTopLayer && topLayerIsFloating) {
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
    if (onTopLayer) {
      return {
        x,
        y,
        data: diffCoords
      };
    }
    return {
      x: x - diffCoords.x,
      y: y - diffCoords.y,
      data: diffCoords
    };
  }
});
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      const parent = currentNode.assignedSlot ? currentNode.assignedSlot : currentNode.parentNode;
      currentNode = isShadowRoot(parent) ? parent.host : parent;
    }
  }
  return null;
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  if (element.tagName === "dialog") {
    return true;
  }
  const css6 = getComputedStyle(element);
  return css6.transform !== "none" || css6.perspective !== "none" || css6.contain === "paint" || ["transform", "perspective"].includes(css6.willChange) || isFirefox && css6.willChange === "filter" || isFirefox && (css6.filter ? css6.filter !== "none" : false);
}
function getUAString() {
  const uaData = navigator.userAgentData;
  if (uaData?.brands) {
    return uaData.brands.map((item) => `${item.brand}/${item.version}`).join(" ");
  }
  return navigator.userAgent;
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || // DOM Element detected
    (isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node)
  );
}
function getNodeName(node) {
  return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  const testNode = node;
  return node instanceof OwnElement || testNode instanceof ShadowRoot;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}

// libs/core/src/primitives/popover/popover.styles.ts
import { css as css3 } from "lit";
var style3 = css3`
  :host {
    position: absolute;
    background-color: white;
    box-shadow: 0 1rem 1rem 1rem rgba(0, 0, 0, 0.1);
  }
`;
var popover_styles_default = style3;

// libs/core/src/primitives/popover/popover.ts
var _dialogElementRef, _autoPositionCleanupFn, _isMobileViewport, _handleCloseButton, _registerTriggerEvents, registerTriggerEvents_fn, _unregisterTriggerEvents, unregisterTriggerEvents_fn, _registerAutoPositioning, registerAutoPositioning_fn, _triggerKeyDownListener, _focusFirstSlottedChild, _clickOutsideListener;
var GdsPopover = class extends LitElement6 {
  constructor() {
    super(...arguments);
    __privateAdd(this, _registerTriggerEvents);
    __privateAdd(this, _unregisterTriggerEvents);
    __privateAdd(this, _registerAutoPositioning);
    this.open = false;
    this.triggerRef = Promise.resolve(void 0);
    this.label = void 0;
    this.placement = "bottom-start";
    this._trigger = void 0;
    this._isVirtKbVisible = false;
    // A reference to the dialog element used to make the popover modal
    __privateAdd(this, _dialogElementRef, createRef2());
    // A function that removes the Floating UI auto positioning. This gets called when we switch to mobile view layout.
    __privateAdd(this, _autoPositionCleanupFn, void 0);
    __privateAdd(this, _isMobileViewport, false);
    __privateAdd(this, _handleCloseButton, (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.open = false;
      setTimeout(() => this._trigger?.focus(), 250);
    });
    /**
     * ArrowDown on the trigger element will trigger the popover by default, and escape will close it.
     */
    __privateAdd(this, _triggerKeyDownListener, (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        this.open = true;
      }
      if (e.key === "Escape") {
        this.open = false;
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
    __privateAdd(this, _clickOutsideListener, (e) => {
      const dialog = __privateGet(this, _dialogElementRef).value;
      if (dialog && this.open) {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
        if (!isInDialog) {
          this.open = false;
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
        e.stopImmediatePropagation();
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
    return html6`<dialog
      class="${classMap3({ "v-kb-visible": this._isVirtKbVisible })}"
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
    this.dispatchEvent(
      new CustomEvent("gds-ui-state", {
        detail: { open: this.open },
        bubbles: true,
        composed: false
      })
    );
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
      middleware: [offset(8), flip(), topLayerOverTransforms()],
      strategy: "fixed"
    }).then(
      ({ x, y }) => Object.assign(floatingEl.style, {
        left: `${x}px`,
        top: `${y}px`,
        minWidth: `${referenceEl.offsetWidth}px`
      })
    );
  }));
};
_triggerKeyDownListener = new WeakMap();
_focusFirstSlottedChild = new WeakMap();
_clickOutsideListener = new WeakMap();
GdsPopover.styles = unsafeCSS5(popover_styles_default);
__decorateClass([
  property5({ type: Boolean, reflect: true })
], GdsPopover.prototype, "open", 2);
__decorateClass([
  property5()
], GdsPopover.prototype, "triggerRef", 2);
__decorateClass([
  property5()
], GdsPopover.prototype, "label", 2);
__decorateClass([
  property5()
], GdsPopover.prototype, "placement", 2);
__decorateClass([
  state()
], GdsPopover.prototype, "_trigger", 2);
__decorateClass([
  state()
], GdsPopover.prototype, "_isVirtKbVisible", 2);
__decorateClass([
  watch("triggerRef")
], GdsPopover.prototype, "_handleTriggerRefChanged", 1);
__decorateClass([
  watch("_trigger")
], GdsPopover.prototype, "_handleTriggerChanged", 1);
__decorateClass([
  watch("open")
], GdsPopover.prototype, "_handleOpenChange", 1);
__decorateClass([
  watchMediaQuery("(max-width: 576px)")
], GdsPopover.prototype, "_handleMobileLayout", 1);
GdsPopover = __decorateClass([
  gdsCustomElement("gds-popover")
], GdsPopover);

// libs/core/src/components/dropdown/dropdown.styles.ts
import { css as css4 } from "lit";
var style4 = css4`
  button {
    appearance: none;
    display: block;
    background-color: black;
    border-radius: 2rem;
    border: none;
    color: white;
    padding: 0.7rem 2rem;
    margin: 0.5rem 0;
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
    // Private members
    __privateAdd(this, _optionElements, void 0);
    /**
     * Event handler for filtering the options in the dropdown.
     *
     * @param e The keyboard event.
     */
    __privateAdd(this, _handleSearchFieldKeyUp, (e) => {
      const input = this.elSearchInput;
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
      if (e.key === "ArrowDown" || e.key === "Tab") {
        e.preventDefault();
        this.elListbox?.focus();
        return;
      }
    });
    /**
     * Check for Tab in the listbox.
     * If found, focus should be moved to the search field.
     */
    __privateAdd(this, _handleListboxKeyDown, (e) => {
      if (e.key === "Tab" && this.searchable) {
        e.preventDefault();
        this.elSearchInput?.focus();
        return;
      }
    });
    __privateAdd(this, _handleOptionFocusChange, (e) => {
      const triggerButton = this.elTriggerBtn;
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
        this.elTriggerBtn?.focus();
      }
    });
    constrainSlots(this);
    updateWhenLocaleChanges(this);
    __privateSet(this, _optionElements, this.getElementsByTagName(
      getScopedTagName("gds-option")
    ));
  }
  connectedCallback() {
    super.connectedCallback();
    TransitionalStyles.instance.apply(this, "gds-dropdown");
    this.updateComplete.then(() => {
      this._handleLightDOMChange();
      this._handleValueChange();
    });
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
  render() {
    return html2`
      ${when2(
      this.label,
      () => html2`<label for="trigger">${this.label}</label>`
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
      >
        <slot name="trigger">
          <span>${unsafeHTML(this.displayValue)}</span>
        </slot>
      </button>

      <span class="form-info"><slot name="message"></slot></span>

      <gds-popover
        .label=${this.label}
        .open=${this.open}
        .triggerRef=${this.elTriggerBtnAsync}
        @gds-ui-state=${(e) => this.open = e.detail.open}
      >
        ${when2(
      this.searchable,
      () => html2`<input
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
          <slot gds-allow="gds-option"></slot>
        </gds-listbox>
      </gds-popover>
    `;
  }
  _handleLightDOMChange() {
    this.requestUpdate();
    this._handleValueChange();
    if (this.multiple)
      return;
    if (!this.value) {
      if (this.placeholder)
        this.value = this.placeholder.value;
      else
        this.value = this.options[0]?.value;
    } else if (!this.placeholder && this.options.find((o) => o.value === this.value) === void 0) {
      this.options[0] && (this.options[0].selected = true);
      this.value = this.options[0]?.value;
    }
  }
  _handleValueChange() {
    const listbox = this.elListbox;
    if (listbox) {
      if (Array.isArray(this.value))
        listbox.selection = this.value;
      else
        listbox.selection = [this.value];
    }
  }
  _onOpenChange() {
    const open = this.open;
    Array.from(__privateGet(this, _optionElements)).forEach((o) => o.hidden = !open);
    if (open)
      __privateMethod(this, _registerAutoCloseListener, registerAutoCloseListener_fn).call(this);
    else {
      __privateMethod(this, _unregisterAutoCloseListener, unregisterAutoCloseListener_fn).call(this);
      this.elSearchInput && (this.elSearchInput.value = "");
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
  const listbox = this.elListbox;
  if (!listbox)
    return;
  if (this.multiple)
    this.value = listbox.selection.map((s) => s.value);
  else {
    this.value = listbox.selection[0]?.value;
    this.open = false;
    setTimeout(() => this.elTriggerBtn?.focus(), 0);
  }
  this.dispatchEvent(
    new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    })
  );
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
  property6()
], GdsDropdown.prototype, "label", 2);
__decorateClass([
  property6({ type: Boolean, reflect: true })
], GdsDropdown.prototype, "open", 2);
__decorateClass([
  property6({ type: Boolean, reflect: true })
], GdsDropdown.prototype, "searchable", 2);
__decorateClass([
  property6({ type: Boolean, reflect: true })
], GdsDropdown.prototype, "multiple", 2);
__decorateClass([
  property6()
], GdsDropdown.prototype, "compareWith", 2);
__decorateClass([
  property6()
], GdsDropdown.prototype, "searchFilter", 2);
__decorateClass([
  query3("#trigger")
], GdsDropdown.prototype, "elTriggerBtn", 2);
__decorateClass([
  queryAsync("#trigger")
], GdsDropdown.prototype, "elTriggerBtnAsync", 2);
__decorateClass([
  query3("#listbox")
], GdsDropdown.prototype, "elListbox", 2);
__decorateClass([
  query3("#searchinput")
], GdsDropdown.prototype, "elSearchInput", 2);
__decorateClass([
  observeLightDOM()
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

// libs/core/src/components/input/input.ts
import { LitElement as LitElement7, unsafeCSS as unsafeCSS6 } from "lit";
import { property as property7, queryAsync as queryAsync2 } from "lit/decorators.js";
import { until } from "lit/directives/until.js";
import { nothing as nothing2 } from "lit/html.js";
import { when as when3 } from "lit/directives/when.js";
import { choose } from "lit/directives/choose.js";
import { msg as msg3 } from "@lit/localize";

// libs/core/src/utils/directives/forward-attributes.ts
import { Directive, PartType, directive } from "lit/directive.js";
import { nothing } from "lit/html.js";
var ForwardAttributesDirective = class extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ELEMENT) {
      throw new Error(
        "The `forwardAttributes` directive must be used in element bindings"
      );
    }
  }
  render(_filter) {
    return nothing;
  }
  update(part, [filter]) {
    const element = part.element;
    const host = part.options?.host;
    Array.from(host.attributes).forEach((attr) => {
      if (filter(attr)) {
        element.setAttribute(attr.name, attr.value);
      }
    });
  }
};
var forwardAttributes = directive(ForwardAttributesDirective);

// libs/core/src/components/input/input.styles.css
var input_styles_default = `@layer tokens, a11y, base, simplified;

@layer tokens {
  :host {
    --_color-bg: var(--gds-sys-color-container-container);

    --_color-border: var(--gds-sys-color-stroke-stroke);
    --_border-radius: .5rem;
    --_border-width: 0.0625rem;
    --_border-width-hover: 0.125rem;

    --_color-outline-alpha: 60%;
    --_color-outline: color-mix(
      in srgb,
      var(--_color-border),
      transparent var(--_color-outline-alpha)
    );

    --_transition: var(--gds-sys-transition);
    --_lh: 1.25;
    --_core-min-block-size: 3.5rem;
    --_gap: .5rem;
    --_padding-block: .625rem;
    --_padding-inline: 1rem;
    --_core-icon-size: 1.5rem;
    --_inner-height: 2rem;
  }
}

@layer a11y {
  /* @media (prefers-color-scheme: dark) {
    :host {
      --_color-bg: var(--_color-bg-dark);
    }
  } */

  @media (prefers-reduced-motion: reduce) {
    :host {
      --_transition: none;
    }
  }

  @media (prefers-reduced-transparency: reduce) {
    :host {
      --_transparency: 1;
    }
  }

  /* @media (prefers-contrast: more) {
    :host {
      --_color-bg: hsla(60, 4%, 96%, 1);
      --_color-outline-alpha: 0%;
    }
  } */
}

@layer base {
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
    contain: layout;
    isolation: isolate;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline-end: 1rem;
  }

  label {
    font-weight: 400;
  }

  .foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline-end: 1rem;

    gds-badge {
      align-self: flex-end;
    }

    :first-child {
      flex-grow: 1;
    }
  }

  .supporting-text, .error-text {
    font-size: .875rem;
  }

  slot[name="extended-supporting-text"] {
    display: block;
    font-size: .875rem;
    background-color: #eee;
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    opacity: 0;
    transition: var(--_transition);

    [aria-hidden="false"] & {
      opacity: 1;
    }
  }

  div.extended-supporting-text {
    display: grid;
    grid-template-rows: 0fr;
    transition: var(--_transition);

    & > * {
      overflow: hidden;
    }

    &[aria-hidden="false"] {
      opacity: 1;
      grid-template-rows: 1fr;
    }
  }

  input[type='number']::-webkit-inner-spin-button {
    display: none;
  }

  input, textarea {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background-color: transparent;
    border: 0;
    width: 100%;
    overflow: hidden;
    margin: unset;
    outline: none;
    padding: unset;
    min-height: var(--_inner-height);
    box-sizing: border-box;
    font-size: var(--_fs);
    line-height: var(--_lh);
    transition: var(--_transition);
    font-family: inherit;

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      -webkit-appearance: none;
              appearance: none;
      background-color: rgb(195, 0, 255);
      background-image: none;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
    }
  }

  textarea {
    resize: none;
    overflow: hidden;
    transition: unset;
    min-height: max(var(--_inner-height), calc(1lh * var(--_lines)));
    max-height: max(var(--_inner-height), calc(1lh * var(--_lines)));
  }

  .field {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--_gap);

    cursor: text;

    block-size: -moz-max-content;

    block-size: max-content;
    min-block-size: var(--_core-min-block-size);

    background-color: var(--_color-bg);

    border: var(--_border-width-hover) solid transparent;
    border-block-end-color: transparent;
    border-start-end-radius: var(--_border-radius);
    border-start-start-radius: var(--_border-radius);

    box-shadow: 0 var(--_border-width) 0
      var(--_color-border);
    padding-block: var(--_padding-block);
    padding-inline: var(--_padding-inline);
    margin-block: var(--_gap);

    position: relative;

    transition: var(--_transition);

    outline-style: solid;
    outline-offset: var(--_border-width);
    outline-width: var(--_border-width-hover);
    outline-color: transparent;

    &:focus:not(:focus-visible) {
      outline: none;
    }

    &:hover {
      --_border-width: var(--_border-width-hover);
    }

    &:has(input:focus, textarea:focus) {
      --_border-width: var(--_border-width-hover);
      outline-color: var(--_color-outline);
      border-radius: var(--_border-radius);
      border: var(--_border-width) solid var(--_color-border);
      box-shadow: none;
      transition: var(--_transition);
    }

    & slot {
      display: flex;
      height: var(--_inner-height);
      align-items: center;
    }
  }

  :host(:invalid) .field {
    --_color-bg: var(--gds-sys-color-status-negative-negative-bright);
    --_color-border: var(--gds-sys-color-stroke-stroke-negative);
    --_color-outline: var(--gds-sys-color-stroke-stroke-negative);
    color: var(--gds-sys-color-status-negative-on-negative-bright);
  }
  :host(:invalid) .error-text {
    color: var(--gds-sys-color-status-negative-on-negative-bright);
  }
  :host(:invalid) label {
    color: var(--gds-sys-color-status-negative-on-negative-bright);
  }
}

@layer simplified {
  :host([variant="simplified"]) label {
    align-items: center;
    background-color: transparent;
    display: block;
    height: -moz-max-content;
    height: max-content;
    inset: 0;
    width: 100%;

    div {
      line-height: var(--_lh);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: var(--_transition);
    }
  }

  :host([variant="simplified"]) label:has(
    input:not(:-moz-placeholder-shown, [readonly]),
    textarea:not(:-moz-placeholder-shown, [readonly])) {
    div {
      font-size: 0.75rem;
      top: 0.375rem;
      font-weight: 500;
      transform: translateY(
        translateY(calc(0px - var(--gds-input-label-translate)))
      );
    }
    input, textarea {
      margin-top: 0.75rem;
    }
  }

  :host([variant="simplified"]) label:has(
    input:not(:placeholder-shown, [readonly]),
    textarea:not(:placeholder-shown, [readonly])),
  :host([variant="simplified"]) label:focus-within {
    div {
      font-size: 0.75rem;
      top: 0.375rem;
      font-weight: 500;
      transform: translateY(
        translateY(calc(0px - var(--gds-input-label-translate)))
      );
    }
    input, textarea {
      margin-top: 0.75rem;
    }
  }
}
`;

// libs/core/src/components/input/input.ts
var _renderDefault, renderDefault_fn, _renderSimplified, renderSimplified_fn, _forwardableAttrs, _handleOnInput, _handleOnChange, _handleFieldClick, _handleClearBtnClick, _handleSupportingTextBtnClick, _renderNativeInput, renderNativeInput_fn, _renderNativeTextarea, renderNativeTextarea_fn, _renderSupportingText, renderSupportingText_fn, _renderExtendedSupportingText, renderExtendedSupportingText_fn, _renderClearButton, renderClearButton_fn, _shouldShowRemainingChars, shouldShowRemainingChars_get, _renderRemainingCharsBadge, renderRemainingCharsBadge_fn, _asyncRenderExtendedSupportingTextButton, asyncRenderExtendedSupportingTextButton_fn;
var GdsInput = class extends GdsFormControlElement {
  constructor() {
    super();
    // variant="default"
    __privateAdd(this, _renderDefault);
    // variant="simplified"
    __privateAdd(this, _renderSimplified);
    __privateAdd(this, _renderNativeInput);
    __privateAdd(this, _renderNativeTextarea);
    __privateAdd(this, _renderSupportingText);
    __privateAdd(this, _renderExtendedSupportingText);
    __privateAdd(this, _renderClearButton);
    __privateAdd(this, _shouldShowRemainingChars);
    __privateAdd(this, _renderRemainingCharsBadge);
    /**
     * Returns a promise that resolves when the DOM query for the extended supporting text slot has resolved.
     * If the slot is empty, an empty template is returned, otherwise the support text toggle button is returned.
     */
    __privateAdd(this, _asyncRenderExtendedSupportingTextButton);
    this.value = "";
    this.label = "";
    this.supportingText = "";
    this.showExtendedSupportingText = false;
    this.clearable = false;
    this.maxlength = Number.MAX_SAFE_INTEGER;
    this.variant = "default";
    this.multiline = false;
    // Any attribute name added here will get forwarded to the native <input> element.
    __privateAdd(this, _forwardableAttrs, (attr) => ["type", "placeholder", "required"].includes(attr.name));
    __privateAdd(this, _handleOnInput, (e) => {
      const element = e.target;
      this.value = element.value;
    });
    __privateAdd(this, _handleOnChange, (e) => {
      const element = e.target;
      this.value = element.value;
      this.dispatchEvent(
        new Event("change", {
          bubbles: true,
          composed: true
        })
      );
    });
    __privateAdd(this, _handleFieldClick, () => {
      this.elInput.then((el) => el.focus());
    });
    __privateAdd(this, _handleClearBtnClick, () => {
      this.value = "";
    });
    __privateAdd(this, _handleSupportingTextBtnClick, () => {
      this.showExtendedSupportingText = !this.showExtendedSupportingText;
      this.dispatchEvent(
        new CustomEvent("gds-ui-state", {
          bubbles: true,
          composed: true,
          detail: this.showExtendedSupportingText
        })
      );
    });
    /**
     * Event handler for the form reset event.
     */
    this._handleFormReset = () => {
      this.value = "";
    };
    constrainSlots(this);
  }
  connectedCallback() {
    super.connectedCallback();
    this._setAutoHeight();
  }
  render() {
    return html2`${choose(this.variant, [
      ["default", () => __privateMethod(this, _renderDefault, renderDefault_fn).call(this)],
      ["simplified", () => __privateMethod(this, _renderSimplified, renderSimplified_fn).call(this)]
    ])}`;
  }
  _setAutoHeight() {
    if (!this.multiline)
      return;
    this.elInput.then((element) => {
      const lines = (element.value.split("\n").length || 1).toString();
      element?.style.setProperty("--_lines", lines.toString());
    });
  }
};
_renderDefault = new WeakSet();
renderDefault_fn = function() {
  return html2`
      <div class="head">
        <label for="input">${this.label}</label>
        ${until(__privateMethod(this, _asyncRenderExtendedSupportingTextButton, asyncRenderExtendedSupportingTextButton_fn).call(this), nothing2)}
      </div>

      ${__privateMethod(this, _renderSupportingText, renderSupportingText_fn).call(this)} ${__privateMethod(this, _renderExtendedSupportingText, renderExtendedSupportingText_fn).call(this)}

      <div class="field" @click=${__privateGet(this, _handleFieldClick)}>
        <slot name="lead" gds-allow="gds-icon"></slot>
        ${when3(
    this.multiline,
    () => html2`${__privateMethod(this, _renderNativeTextarea, renderNativeTextarea_fn).call(this)}`,
    () => html2`${__privateMethod(this, _renderNativeInput, renderNativeInput_fn).call(this)}`
  )}
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${__privateMethod(this, _renderClearButton, renderClearButton_fn).call(this)}
      </div>

      <div class="foot">
        <div>
          ${when3(
    this.invalid,
    () => html2`<span class="error-text">Error information</span>`
  )}
        </div>
        ${when3(
    __privateGet(this, _shouldShowRemainingChars, shouldShowRemainingChars_get),
    () => __privateMethod(this, _renderRemainingCharsBadge, renderRemainingCharsBadge_fn).call(this)
  )}
      </div>
    `;
};
_renderSimplified = new WeakSet();
renderSimplified_fn = function() {
  return html2`
      <div class="field" @click=${__privateGet(this, _handleFieldClick)}>
        <slot name="lead" gds-allow="gds-icon"></slot>
        <label for="input">
          <div>${this.label}</div>
          ${when3(
    this.multiline,
    () => html2`${__privateMethod(this, _renderNativeTextarea, renderNativeTextarea_fn).call(this)}`,
    () => html2`${__privateMethod(this, _renderNativeInput, renderNativeInput_fn).call(this)}`
  )}
        </label>
        <slot name="trail" gds-allow="gds-badge"></slot>
        ${__privateMethod(this, _renderClearButton, renderClearButton_fn).call(this)}
      </div>

      <div class="foot">
        ${__privateMethod(this, _renderSupportingText, renderSupportingText_fn).call(this)}
        ${when3(
    __privateGet(this, _shouldShowRemainingChars, shouldShowRemainingChars_get),
    () => __privateMethod(this, _renderRemainingCharsBadge, renderRemainingCharsBadge_fn).call(this)
  )}
        ${until(__privateMethod(this, _asyncRenderExtendedSupportingTextButton, asyncRenderExtendedSupportingTextButton_fn).call(this), nothing2)}
      </div>

      ${__privateMethod(this, _renderExtendedSupportingText, renderExtendedSupportingText_fn).call(this)}
    `;
};
_forwardableAttrs = new WeakMap();
_handleOnInput = new WeakMap();
_handleOnChange = new WeakMap();
_handleFieldClick = new WeakMap();
_handleClearBtnClick = new WeakMap();
_handleSupportingTextBtnClick = new WeakMap();
_renderNativeInput = new WeakSet();
renderNativeInput_fn = function() {
  return html2`
      <input
        @input=${__privateGet(this, _handleOnInput)}
        @change=${__privateGet(this, _handleOnChange)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${forwardAttributes(__privateGet(this, _forwardableAttrs))}
      />
    `;
};
_renderNativeTextarea = new WeakSet();
renderNativeTextarea_fn = function() {
  return html2`
      <textarea
        @input=${__privateGet(this, _handleOnInput)}
        @change=${__privateGet(this, _handleOnChange)}
        .value=${this.value}
        id="input"
        aria-describedby="supporting-text"
        placeholder=" "
        ${forwardAttributes(__privateGet(this, _forwardableAttrs))}
      ></textarea>
    `;
};
_renderSupportingText = new WeakSet();
renderSupportingText_fn = function() {
  return html2`
      <div class="supporting-text" id="supporting-text">
        ${this.supportingText}
      </div>
    `;
};
_renderExtendedSupportingText = new WeakSet();
renderExtendedSupportingText_fn = function() {
  return html2`
      <div
        class="extended-supporting-text"
        aria-hidden="${!this.showExtendedSupportingText}"
        ?inert="${!this.showExtendedSupportingText}"
      >
        <div>
          <slot
            name="extended-supporting-text"
            @slotchange=${() => this.requestUpdate()}
          ></slot>
        </div>
      </div>
    `;
};
_renderClearButton = new WeakSet();
renderClearButton_fn = function() {
  if (this.clearable && this.value.length > 0)
    return html2`
        <gds-button
          size="small"
          variant="tertiary"
          label="${msg3("Clear input")}"
          @click=${__privateGet(this, _handleClearBtnClick)}
        >
          <gds-icon name="x"></gds-icon>
        </gds-button>
      `;
  else
    return nothing2;
};
_shouldShowRemainingChars = new WeakSet();
shouldShowRemainingChars_get = function() {
  return this.maxlength < Number.MAX_SAFE_INTEGER;
};
_renderRemainingCharsBadge = new WeakSet();
renderRemainingCharsBadge_fn = function() {
  const remaining = this.maxlength - this.value.length;
  let variant;
  if (remaining < 0) {
    variant = "error";
  } else if (remaining < 20) {
    variant = "warning";
  } else {
    variant = "success";
  }
  return html2`<gds-badge variant="${variant}">${remaining}</gds-badge>`;
};
_asyncRenderExtendedSupportingTextButton = new WeakSet();
asyncRenderExtendedSupportingTextButton_fn = async function() {
  return this.elExtendedSupportingTextSlot.then((slot) => {
    if (slot.assignedElements().length > 0)
      return html2`
          <gds-button
            size="small"
            variant="tertiary"
            label="${msg3("Show extended supporting text")}"
            @click=${__privateGet(this, _handleSupportingTextBtnClick)}
          >
            <gds-icon name="info"></gds-icon>
          </gds-button>
        `;
    else
      return nothing2;
  });
};
GdsInput.shadowRootOptions = {
  ...LitElement7.shadowRootOptions,
  delegatesFocus: true
};
GdsInput.styles = [tokens, unsafeCSS6(input_styles_default)];
__decorateClass([
  property7()
], GdsInput.prototype, "value", 2);
__decorateClass([
  property7()
], GdsInput.prototype, "label", 2);
__decorateClass([
  property7({ attribute: "supporting-text" })
], GdsInput.prototype, "supportingText", 2);
__decorateClass([
  property7({
    attribute: "show-extended-supporting-text",
    type: Boolean,
    reflect: true
  })
], GdsInput.prototype, "showExtendedSupportingText", 2);
__decorateClass([
  property7({ type: Boolean })
], GdsInput.prototype, "clearable", 2);
__decorateClass([
  property7({ type: Number })
], GdsInput.prototype, "maxlength", 2);
__decorateClass([
  property7()
], GdsInput.prototype, "variant", 2);
__decorateClass([
  property7({ type: Boolean })
], GdsInput.prototype, "multiline", 2);
__decorateClass([
  queryAsync2("input, textarea")
], GdsInput.prototype, "elInput", 2);
__decorateClass([
  queryAsync2('slot[name="extended-supporting-text"]')
], GdsInput.prototype, "elExtendedSupportingTextSlot", 2);
__decorateClass([
  watch("value")
], GdsInput.prototype, "_setAutoHeight", 1);
GdsInput = __decorateClass([
  gdsCustomElement("gds-input")
], GdsInput);

// libs/core/src/components/checkbox/checkbox.ts
import { LitElement as LitElement8, html as html7, unsafeCSS as unsafeCSS7 } from "lit";
import { customElement as customElement3 } from "lit/decorators.js";

// libs/core/src/components/checkbox/checkbox.css
var checkbox_default = `:host {
  --gds-checkbox-bg-color: hsl(0, 0%, 100%);
  --gds-checkbox-border-color: hsla(60, 4%, 50%, 1);
  --gds-checkbox-border-width: 2px;
  --gds-checkbox-border-radius: 4px;

  --gds-checkbox-color-hover: hsla(60, 6%, 90%, 1);
  --gds-checkbox-color-active: hsla(60, 4%, 85%, 1);

  --gds-checkbox-checked-color: hsla(60, 4%, 20%, 1);
  --gds-checkbox-color-tick: hsl(0, 0%, 100%);
}

.gds-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: calc(var(--gds-checkbox-border-radius) * 2);
  transition: all 248ms ease-in-out;
  cursor: pointer;

  & input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    margin: unset;
    padding: unset;
    box-sizing: border-box;
    cursor: pointer;
    aspect-ratio: 1/1;
    width: 16px;
    height: 16px;
    background-color: var(--gds-checkbox-bg-color);
    border: var(--gds-checkbox-border-width) solid
      var(--gds-checkbox-border-color);
    border-radius: var(--gds-checkbox-border-radius);
    transition: all 248ms cubic-bezier(0.2, 0.85, 0.32, 1.2);

    &::after {
      content: '';
      width: 5px;
      height: 8px;
      border: var(--gds-checkbox-border-width) solid
        var(--gds-checkbox-color-tick);
      border-top: 0;
      border-left: 0;
      rotate: 43deg;
      inset: 1px 0 0 3.5px;
      position: absolute;
      pointer-events: none;
      box-sizing: border-box;
      transition: all 248ms cubic-bezier(0.2, 0.85, 0.32, 1.2);
      scale: 0.8;
      opacity: 0;
    }

    &:checked {
      color: var(--gds-checkbox-checked-color-tick);
      border-color: var(--gds-checkbox-checked-color);
      background-color: var(--gds-checkbox-checked-color);

      &::after {
        scale: 1;
        opacity: 1;
      }
    }

    &[indeterminate],
    &:indeterminate {
      &::after {
        border-top: 0;
        border-left: 0;
        border-radius: 0;
        width: 8px;
        height: var(--gds-checkbox-border-width);
        inset: 5px 0px 0px 2px;
        rotate: 0deg;
        opacity: 1;
        scale: 1;
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &:hover:has(input:not([disabled])) {
    background-color: var(--gds-checkbox-color-hover);
  }

  &:active:has(input:not([disabled])) {
    background-color: var(--gds-checkbox-color-active);
    .gds-checkbox-core {
      border-color: var(--gds-checkbox-checked-color);
    }
  }

  &:has(input:checked) {
    background-color: var(--gds-checkbox-color-hover);
  }

  &:has(input:disabled) {
    cursor: not-allowed;
  }

  /* Invalid state */

  &:has(input:invalid) {
    --gds-checkbox-bg-color: hsla(13, 75%, 95%, 1);
    --gds-checkbox-border-color: hsla(9, 75%, 38%, 1);
    --gds-checkbox-color-hover: hsla(12, 75%, 91%, 1);
    --gds-checkbox-color-active: hsla(12, 78%, 86%, 1);
    --gds-checkbox-checked-color: hsla(9, 75%, 38%, 1);
    --gds-checkbox-color-tick: hsla(0, 0%, 100%, 1);

    & input {
      &::after {
        border-color: var(--gds-checkbox-color-tick);
      }

      &:checked {
        color: var(--gds-checkbox-checked-color-tick);
        border-color: var(--gds-checkbox-checked-color);
        background-color: var(--gds-checkbox-checked-color);
      }
    }

    &:hover:has(input:not([disabled])) {
      background-color: var(--gds-checkbox-color-hover);
    }

    &:active:has(input:not([disabled])) {
      background-color: var(--gds-checkbox-color-active);
      .gds-checkbox-core {
        border-color: var(--gds-checkbox-checked-color);
      }
    }

    &:has(input:checked) {
      background-color: var(--gds-checkbox-color-hover);
    }
  }
}
`;

// libs/core/src/components/checkbox/checkbox.ts
var _internals;
var GdsCheckbox = class extends LitElement8 {
  constructor() {
    super();
    // Private members
    __privateAdd(this, _internals, void 0);
    this.inputElement = null;
    this.exludeAttr = ["id", "label"];
    __privateSet(this, _internals, this.attachInternals());
    constrainSlots(this);
  }
  reflectAttributesToInput() {
    if (this.inputElement) {
      const attributes = this.attributes;
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (!this.exludeAttr.includes(attribute.name)) {
          this.inputElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (!this.inputElement) {
      this.inputElement = this.shadowRoot?.getElementById(
        "checkbox"
      );
    }
    this.reflectAttributesToInput();
  }
  render() {
    return html7`
      <label class="gds-checkbox">
        <input id="checkbox" type="checkbox" />
      </label>
    `;
  }
};
_internals = new WeakMap();
GdsCheckbox.styles = unsafeCSS7(checkbox_default);
GdsCheckbox.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
GdsCheckbox = __decorateClass([
  customElement3("gds-checkbox")
], GdsCheckbox);

// libs/core/src/components/radio/radio.ts
import { LitElement as LitElement10, html as html9, unsafeCSS as unsafeCSS9 } from "lit";
import { customElement as customElement5 } from "lit/decorators.js";

// libs/core/src/components/radio/radio.css
var radio_default = `:host {
  --gds-checkbox-bg-color: hsl(0, 0%, 100%);
  --gds-checkbox-border-color: hsla(60, 4%, 50%, 1);
  --gds-checkbox-border-width: 1px;
  --gds-checkbox-border-radius: 200px;

  --gds-checkbox-color-hover: hsla(60, 6%, 90%, 1);
  --gds-checkbox-color-active: hsla(60, 4%, 85%, 1);

  --gds-checkbox-checked-color: hsla(60, 4%, 20%, 1);
  --gds-checkbox-color-tick: hsl(0, 0%, 100%);

  --gds-radio-transition: all 248ms ease-in-out;
  --gds-radio-transition-input: all 248ms cubic-bezier(0.2, 0.85, 0.32, 1.2);
}

@media (prefers-color-scheme: dark) {
  :host {
    --gds-dark: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-radio-transition: none;
    --gds-radio-transition-input: none;
  }
}

@media (prefers-reduced-transparency: reduce) {
  :host {
    --gds-input-transparency: 1;
  }
}

@media (prefers-contrast: more) {
  :host {
    --gds-input-color-bg: hsla(60, 4%, 96%, 1);
    --gds-input-color-outline-alpha: 0%;
  }
}

.gds-radio {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--gds-checkbox-border-radius);
  transition: var(--gds-radio-transition);
  cursor: pointer;

  & input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    margin: unset;
    padding: unset;
    box-sizing: border-box;
    cursor: pointer;
    aspect-ratio: 1/1;
    width: 16px;
    height: 16px;
    background-color: var(--gds-checkbox-bg-color);
    border: var(--gds-checkbox-border-width) solid
      var(--gds-checkbox-border-color);
    border-radius: var(--gds-checkbox-border-radius);
    transition: var(--gds-radio-transition-input);

    &:checked {
      border-color: var(--gds-checkbox-checked-color);
      border-width: 4px;
    }

    &[indeterminate],
    &:indeterminate {
      &::after {
        border-top: 0;
        border-left: 0;
        border-radius: 0;
        width: 8px;
        height: var(--gds-checkbox-border-width);
        inset: 5px 0px 0px 2px;
        rotate: 0deg;
        opacity: 1;
        scale: 1;
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &:hover:has(input:not([disabled])) {
    background-color: var(--gds-checkbox-color-hover);
  }

  &:active:has(input:not([disabled])) {
    background-color: var(--gds-checkbox-color-active);
    .gds-checkbox-core {
      border-color: var(--gds-checkbox-checked-color);
    }
  }

  &:has(input:checked) {
    background-color: var(--gds-checkbox-color-hover);
  }

  &:has(input:disabled) {
    cursor: not-allowed;
  }

  /* Invalid state */

  &:has(input:invalid) {
    --gds-checkbox-bg-color: hsla(13, 75%, 95%, 1);
    --gds-checkbox-border-color: hsla(9, 75%, 38%, 1);
    --gds-checkbox-color-hover: hsla(12, 75%, 91%, 1);
    --gds-checkbox-color-active: hsla(12, 78%, 86%, 1);
    --gds-checkbox-checked-color: hsla(9, 75%, 38%, 1);
    --gds-checkbox-color-tick: hsla(0, 0%, 100%, 1);

    & input {
      &::after {
        border-color: var(--gds-checkbox-color-tick);
      }

      &:checked {
        color: var(--gds-checkbox-checked-color-tick);
        border-color: var(--gds-checkbox-checked-color);
        background-color: var(--gds-checkbox-checked-color);
      }
    }

    &:hover:has(input:not([disabled])) {
      background-color: var(--gds-checkbox-color-hover);
    }

    &:active:has(input:not([disabled])) {
      background-color: var(--gds-checkbox-color-active);
      .gds-checkbox-core {
        border-color: var(--gds-checkbox-checked-color);
      }
    }

    &:has(input:checked) {
      background-color: var(--gds-checkbox-color-hover);
    }
  }
}

.gds-radio-group {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  padding: 0;
}
`;

// libs/core/src/components/radio/radio-group.ts
import { LitElement as LitElement9, html as html8 } from "lit";
import { customElement as customElement4, property as property9 } from "lit/decorators.js";
var _internals2;
var GdsRadioGroup = class extends LitElement9 {
  constructor() {
    super();
    // Private members
    __privateAdd(this, _internals2, void 0);
    this.label = "Label";
    this.inputElement = null;
    this.exludeAttr = ["id", "label"];
    __privateSet(this, _internals2, this.attachInternals());
    constrainSlots(this);
  }
  reflectAttributesToInput() {
    if (this.inputElement) {
      const attributes = this.attributes;
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (!this.exludeAttr.includes(attribute.name)) {
          this.inputElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (!this.inputElement) {
      this.inputElement = this.shadowRoot?.getElementById(
        "radio"
      );
    }
    this.reflectAttributesToInput();
  }
  render() {
    return html8`
      <fieldset
        class="gds-radio-group"
        role="radiogroup"
        aria-labelledby="label"
      >
        <label>${this.label}</label>
        <slot></slot>
      </fieldset>
    `;
  }
};
_internals2 = new WeakMap();
// static styles = unsafeCSS(styles)
GdsRadioGroup.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property9({ type: String, reflect: true, attribute: "label" })
], GdsRadioGroup.prototype, "label", 2);
GdsRadioGroup = __decorateClass([
  customElement4("gds-radio-group")
], GdsRadioGroup);

// libs/core/src/components/radio/radio.ts
var _internals3;
var GdsRadio = class extends LitElement10 {
  constructor() {
    super();
    // Private members
    __privateAdd(this, _internals3, void 0);
    this.inputElement = null;
    this.exludeAttr = ["id", "label"];
    __privateSet(this, _internals3, this.attachInternals());
    constrainSlots(this);
  }
  reflectAttributesToInput() {
    if (this.inputElement) {
      const attributes = this.attributes;
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (!this.exludeAttr.includes(attribute.name)) {
          this.inputElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (!this.inputElement) {
      this.inputElement = this.shadowRoot?.getElementById(
        "radio"
      );
    }
    this.reflectAttributesToInput();
  }
  handleClick() {
    const radioGroup = this.closest("gds-radio-group");
    if (radioGroup instanceof GdsRadioGroup) {
      radioGroup.selectedValue = this.value;
    }
  }
  render() {
    return html9`
      <label class="gds-radio">
        <input id="radio" type="radio" />
      </label>
      <label for="radio">${this.textContent}</label>
    `;
  }
};
_internals3 = new WeakMap();
GdsRadio.styles = unsafeCSS9(radio_default);
GdsRadio.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
GdsRadio = __decorateClass([
  customElement5("gds-radio")
], GdsRadio);

// libs/core/src/components/switch/switch.ts
import { LitElement as LitElement11, html as html10, unsafeCSS as unsafeCSS10 } from "lit";
import { customElement as customElement6 } from "lit/decorators.js";

// libs/core/src/components/switch/switch.css
var switch_default = `:host {
  --gds-checkbox-bg-color: hsl(0, 0%, 100%);
  --gds-checkbox-border-color: hsla(60, 4%, 20%, 1);
  --gds-checkbox-border-width: 7.5px;
  --gds-checkbox-border-radius: 200px;

  --gds-checkbox-color-hover: hsla(60, 6%, 90%, 1);
  --gds-checkbox-color-active: hsla(60, 4%, 85%, 1);

  --gds-checkbox-checked-color: hsla(130, 40%, 30%, 1);
  --gds-checkbox-color-tick: hsl(0, 0%, 100%);

  --gds-switch-transition: all 548ms ease-in-out;
  --gds-switch-animaton-on: 248ms;
  --gds-switch-animaton-off: 248ms;
  --gds-switch-animaton-transition: all 248ms cubic-bezier(0.2, 0.85, 0.32, 1.2);
}

@media (prefers-reduced-motion: reduce) {
  :host {
    --gds-switch-transition: none;
    --gds-switch-animaton-on: 0ms;
    --gds-switch-animaton-off: 0ms;
    --gds-switch-animaton-transition: none;
  }
}

.gds-switch {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 64px;
  height: 32px;
  border-radius: var(--gds-checkbox-border-radius);
  transition: var(--gds-switch-transition);
  cursor: pointer;
  background-color: var(--gds-checkbox-color-hover);

  & input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    margin: unset;
    padding: unset;
    box-sizing: border-box;
    cursor: pointer;
    width: 32px;
    height: 32px;
    background-color: var(--gds-checkbox-bg-color);
    border: var(--gds-checkbox-border-width) solid
      var(--gds-checkbox-border-color);
    border-radius: var(--gds-checkbox-border-radius);
    transition: var(--gds-switch-animaton-transition);

    &:checked {
      border-color: var(--gds-checkbox-checked-color);
      animation: switch-on var(--gds-switch-animaton-on) forwards;
    }

    &:not(:checked) {
      animation: switch-off var(--gds-switch-animaton-off) backwards;
    }
  }

  &:has(input:checked) {
    background-color: var(--gds-checkbox-checked-color);
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

@keyframes switch-on {
  to {
    transform: translate3d(100%, 0, 0) scale(0.5);
    width: 32px;
    border-width: 0;
  }
}

@keyframes switch-off {
  from {
    transform: translate3d(100%, 0, 0) scale(0.5);
    width: 32px;
    border-width: 0;
  }
  to {
    transform: translate3d(0%, 0, 0) scale(1);
    width: 32px;
    border-width: 7.5px;
  }
}
`;

// libs/core/src/components/switch/switch.ts
var _internals4;
var GdsSwitch = class extends LitElement11 {
  constructor() {
    super();
    // Private members
    __privateAdd(this, _internals4, void 0);
    this.inputElement = null;
    this.exludeAttr = ["id", "label"];
    __privateSet(this, _internals4, this.attachInternals());
    constrainSlots(this);
  }
  reflectAttributesToInput() {
    if (this.inputElement) {
      const attributes = this.attributes;
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (!this.exludeAttr.includes(attribute.name)) {
          this.inputElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (!this.inputElement) {
      this.inputElement = this.shadowRoot?.getElementById(
        "switch"
      );
    }
    this.reflectAttributesToInput();
  }
  render() {
    return html10`
      <label class="gds-switch">
        <input id="switch" type="checkbox" />
      </label>
    `;
  }
};
_internals4 = new WeakMap();
GdsSwitch.styles = unsafeCSS10(switch_default);
GdsSwitch.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
GdsSwitch = __decorateClass([
  customElement6("gds-switch")
], GdsSwitch);

// libs/core/src/components/badge/badge.ts
import { LitElement as LitElement12, html as html11, unsafeCSS as unsafeCSS11 } from "lit";
import { customElement as customElement7, property as property12 } from "lit/decorators.js";
import { when as when4 } from "lit/directives/when.js";

// libs/core/src/components/badge/style/badge.styles.css
var badge_styles_default = `@layer gds-badge, shell, tokens, a11y, variants, types;

@layer gds-badge {
  @layer tokens {
    :host {
      --gds-badge-cl: rgba(53, 53, 49, 1);
      --gds-badge-bg: rgba(243, 243, 242, 1);

      --gds-badge-cl-information: rgba(53, 53, 49, 1);
      --gds-badge-bg-information: rgba(243, 243, 242, 1);

      --gds-badge-cl-success: rgba(0, 109, 49, 1);
      --gds-badge-bg-success: rgba(234, 255, 232, 1);

      --gds-badge-cl-warning: rgba(125, 87, 0, 1);
      --gds-badge-bg-warning: rgba(255, 238, 217, 1);

      --gds-badge-cl-error: rgba(186, 29, 0, 1);
      --gds-badge-bg-error: rgba(255, 237, 233, 1);

      --gds-badge-cl-disabled: rgba(157, 157, 149, 1);
      --gds-badge-bg-disabled: rgba(249, 249, 249, 1);

      --gds-badge-cl-surface: rgba(106, 106, 98, 1);
      --gds-badge-bg-surface: rgba(255, 255, 255, 1);

      /* Dark Mode */
      --gds-badge-cl-dark: rgba(53, 53, 49, 1);
      --gds-badge-bg-dark: rgba(243, 243, 242, 1);

      --gds-badge-cl-information-dark: rgba(53, 53, 49, 1);
      --gds-badge-bg-information-dark: rgba(243, 243, 242, 1);

      --gds-badge-cl-success-dark: rgba(0, 109, 49, 1);
      --gds-badge-bg-success-dark: rgba(234, 255, 232, 1);

      --gds-badge-cl-warning-dark: rgba(125, 87, 0, 1);
      --gds-badge-bg-warning-dark: rgba(255, 238, 217, 1);

      --gds-badge-cl-error-dark: rgba(186, 29, 0, 1);
      --gds-badge-bg-error-dark: rgba(255, 237, 233, 1);

      --gds-badge-cl-disabled-dark: rgba(157, 157, 149, 1);
      --gds-badge-bg-disabled-dark: rgba(249, 249, 249, 1);

      --gds-badge-cl-surface-dark: rgba(106, 106, 98, 1);
      --gds-badge-bg-surface-dark: rgba(255, 255, 255, 1);

      --gds-badge-radii: 4px;

      --gds-badge-fs: 12px;
      --gds-badge-lh: 1;
      --gds-badge-fw: 500;
      --gds-badge-inline-padding: 10px;
      --gds-badge-block-padding: 6px;
    }
  }
  @layer a11y {
    @media (prefers-color-scheme: dark) {
      :host {
        --gds-badge-cl: var(--gds-badge-cl-dark);
        --gds-badge-bg: var(--gds-badge-bg-dark);

        --gds-badge-cl-information: var(--gds-badge-cl-information-dark);
        --gds-badge-bg-information: var(--gds-badge-bg-information-dark);

        --gds-badge-cl-success: var(--gds-badge-cl-success-dark);
        --gds-badge-bg-success: var(--gds-badge-bg-success-dark);

        --gds-badge-cl-warning: var(--gds-badge-cl-warning-dark);
        --gds-badge-bg-warning: var(--gds-badge-bg-warning-dark);

        --gds-badge-cl-error: var(--gds-badge-cl-error-dark);
        --gds-badge-bg-error: var(--gds-badge-bg-error-dark);

        --gds-badge-cl-disabled: var(--gds-badge-cl-disabled-dark);
        --gds-badge-bg-disabled: var(--gds-badge-bg-disabled-dark);

        --gds-badge-cl-surface: var(--gds-badge-cl-surface-dark);
        --gds-badge-bg-surface: var(--gds-badge-bg-surface-dark);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        --gds-badge-motion: 0;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --gds-badge-transparency: 1;
      }
    }

    @media (prefers-contrast: more) {
      :root {
        --gds-badge-contrast: 1;
      }
    }
  }

  @layer shell {
    .gds-badge {
      font-size: var(--gds-badge-fs);
      line-height: var(--gds-badge-lh);
      font-weight: var(--gds-badge-fw);
      padding-block: var(--gds-badge-block-padding);
      padding-inline: var(--gds-badge-inline-padding);
      color: var(--gds-badge-cl);
      background-color: var(--gds-badge-bg);
      border-radius: var(--gds-badge-radii);
      letter-spacing: normal;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-transform: uppercase;
      max-width: -moz-max-content;
      max-width: max-content;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      gap: 1ch;

      @layer variants {
        :host([variant='information']) & {
          --gds-badge-cl: var(--gds-badge-cl-information);
          --gds-badge-bg: var(--gds-badge-bg-information);
        }

        :host([variant='success']) & {
          --gds-badge-cl: var(--gds-badge-cl-success);
          --gds-badge-bg: var(--gds-badge-bg-success);
        }

        :host([variant='warning']) & {
          --gds-badge-cl: var(--gds-badge-cl-warning);
          --gds-badge-bg: var(--gds-badge-bg-warning);
        }

        :host([variant='error']) & {
          --gds-badge-cl: var(--gds-badge-cl-error);
          --gds-badge-bg: var(--gds-badge-bg-error);
        }

        :host([variant='disabled']) & {
          --gds-badge-cl: var(--gds-badge-cl-disabled);
          --gds-badge-bg: var(--gds-badge-bg-disabled);
          pointer-events: none;
        }

        :host([variant='surface']) & {
          --gds-badge-cl: var(--gds-badge-cl-surface);
          --gds-badge-bg: var(--gds-badge-bg-surface);
        }
      }

      @layer types {
        :host([type='counter']) & {
          max-width: var(--gds-badge-counter-max-width);
        }
      }
    }
  }
}
`;

// libs/core/src/components/badge/badge.ts
var _internals5;
var GdsBadge = class extends LitElement12 {
  constructor() {
    super();
    // Private members
    __privateAdd(this, _internals5, void 0);
    this.variant = "";
    this.type = "";
    this.icon = "";
    __privateSet(this, _internals5, this.attachInternals());
    constrainSlots(this);
  }
  slotIcon() {
    return html11` <slot name="icon" gds-allow="gds-icon"></slot> `;
  }
  slotLabel() {
    const content = this.textContent?.trim() || "";
    const hasLabel = content !== "";
    let label = content;
    if (this.type.toLowerCase() === "counter" && label.length > 4) {
      label = label.substring(0, 4);
      return hasLabel ? html11`${label}` : "";
    }
    return hasLabel ? html11`<slot part="label" gds-allow="#text"></slot>` : "";
  }
  // slotLabel() {
  //   return this.textContent
  //     ? html`<slot part="label" gds-allow="#text"></slot>`
  //     : ''
  // }
  render() {
    const hasIconSlot = this.querySelector('[slot="icon"]') !== null;
    const content = html11`${when4(
      hasIconSlot,
      () => html11`<slot name="icon" gds-allow="gds-icon"></slot>`
    )}${this.slotLabel()}`;
    return html11`<div class="gds-badge">${content}</div>`;
  }
};
_internals5 = new WeakMap();
GdsBadge.styles = unsafeCSS11(badge_styles_default);
GdsBadge.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property12({ type: String, reflect: true, attribute: "variant" })
], GdsBadge.prototype, "variant", 2);
__decorateClass([
  property12({ type: String, reflect: true, attribute: "type" })
], GdsBadge.prototype, "type", 2);
__decorateClass([
  property12({ type: String, reflect: true, attribute: "icon" })
], GdsBadge.prototype, "icon", 2);
GdsBadge = __decorateClass([
  customElement7("gds-badge")
], GdsBadge);

// libs/core/src/components/tooltip/tooltip.ts
import { LitElement as LitElement13, html as html12, unsafeCSS as unsafeCSS12 } from "lit";
import { customElement as customElement8, property as property13 } from "lit/decorators.js";

// libs/core/src/components/tooltip/style/tooltip.styles.css
var tooltip_styles_default = `@layer gds-tooltip, tokens, a11y, parts, position, trigger, keyframes;

@layer gds-tooltip {
  @layer tokens {
    :host {
      --gds-tooltip-bg-color: #000;
      --gds-tooltip-bg-alpha: 90%;
      --gds-tooltip-fs: 14px;
      --gds-tooltip-bg: color-mix(
        in srgb,
        var(--gds-tooltip-bg-color) var(--gds-tooltip-bg-alpha),
        transparent
      );
      --gds-tooltip-color: #fff;
      --gds-tooltip-offset: 8px;
      --gds-tooltip-arrow: 6px;
      --gds-tooltip-radii: 8px;
      --gds-tooltip-transition-easing: var(--gds-sys-transition-easing);
      display: contents;
      position: relative;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --gds-tooltip-color-bg: var(
          --gds-tooltip-color-bg-dark,
          var(--gds-color-grey-20)
        );
      }
    }
  }

  .gds-tooltip {
    display: inline-block;
    position: relative;

    @layer a11y {
      cursor: help;
      --gds-tooltip-transition: var(--gds-sys-transition);
      --gds-tooltip-contrast: var(--gds-sys-transition);
    }

    @layer parts {
      &::before,
      &::after {
        font-size: var(--gds-tooltip-fs);
        line-height: 1;
        -webkit-user-select: none;
           -moz-user-select: none;
                user-select: none;
        pointer-events: none;
        position: absolute;
        display: none;
        opacity: 0;
        align-items: center;
        justify-content: center;
      }

      &::before {
        content: '';
        border: var(--gds-tooltip-arrow, 6px) solid transparent;
        z-index: 1001;
      }

      &::after {
        content: attr(content);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-inline: 2ch;
        padding-block: 1.5ex;
        max-inline-size: 50ch;
        min-inline-size: -moz-max-content;
        min-inline-size: max-content;
        z-index: 1000;
        offset-anchor: center top;
        background-color: var(--gds-tooltip-bg);
        color: var(--gds-tooltip-color);
        border-radius: var(--gds-tooltip-radii);
      }

      &:hover::before,
      &:hover::after {
        display: flex;
      }
    }

    @layer position {
      &:not([position])::before,
      &[position^='up']::before {
        bottom: calc(100% + 2px);
        border-bottom-width: 0;
        border-top-color: var(--gds-tooltip-bg);
      }
      &:not([position])::after,
      &[position^='up']::after {
        bottom: calc(100% + var(--gds-tooltip-offset, 8px));
      }

      &:not([position])::before,
      &:not([position])::after,
      &[position^='up']::before,
      &[position^='up']::after {
        left: 50%;
        transform: translate(-50%, calc(var(--gds-tooltip-offset, 8px) * -1));
      }

      &[position^='down']::before {
        top: calc(100% + 2px);
        border-top-width: 0;
        border-bottom-color: var(--gds-tooltip-bg);
      }
      &[position^='down']::after {
        top: calc(100% + var(--gds-tooltip-offset, 8px));
      }
      &[position^='down']::before,
      &[position^='down']::after {
        left: 50%;
        transform: translate(-50%, var(--gds-tooltip-offset, 8px));
      }

      &[position^='left']::before {
        top: 50%;
        border-right-width: 0;
        border-left-color: var(--gds-tooltip-bg);
        left: calc(-1px - var(--gds-tooltip-offset, 8px));
        transform: translate(calc(var(--gds-tooltip-offset, 8px) * -2), -50%);
      }
      &[position^='left']::after {
        top: 50%;
        right: calc(100% + var(--gds-tooltip-offset, 8px));
        transform: translate(calc(var(--gds-tooltip-offset, 8px) * -1), -50%);
      }

      &[position^='right']::before {
        top: 50%;
        border-left-width: 0;
        border-right-color: var(--gds-tooltip-bg);
        right: calc(-1px - var(--gds-tooltip-offset, 8px));
        transform: translate(var(--gds-tooltip-offset, 8px), -50%);
      }
      &[position^='right']::after {
        top: 50%;
        left: calc(100% + var(--gds-tooltip-offset, 8px));
        transform: translate(var(--gds-tooltip-offset, 8px), -50%);
      }
    }

    @layer trigger {
      &:hover:is(
          :not([position]),
          [position^='up'],
          [position^='down']
        )::before,
      &:hover:is(
          :not([position]),
          [position^='up'],
          [position^='down']
        )::after {
        animation: gds-tooltip-animation-y 300ms
          var(--gds-tooltip-transition-easing) forwards;
      }

      &:hover:is(
          :not([position]),
          [position^='left'],
          [position^='right']
        )::before,
      &:hover:is(
          :not([position]),
          [position^='left'],
          [position^='right']
        )::after {
        animation: gds-tooltip-animation-h 300ms
          var(--gds-tooltip-transition-easing) forwards;
      }
    }
  }

  @layer keyframes {
    @keyframes gds-tooltip-animation-y {
      to {
        opacity: 0.9;
        transform: translate(-50%, 0);
      }
    }

    @keyframes gds-tooltip-animation-h {
      to {
        opacity: 0.9;
        transform: translate(0, -50%);
      }
    }
  }
}
`;

// libs/core/src/components/tooltip/tooltip.ts
var GdsTooltip = class extends LitElement13 {
  constructor() {
    super(...arguments);
    this.open = false;
    this.content = null;
    this.position = null;
  }
  render() {
    return html12`
      <div 
        class="gds-tooltip" 
        content=${this.content}
        position=${this.position}
        role="tooltip"
      >
        <slot slot="anchor"></slot>
      </div>
    `;
  }
};
GdsTooltip.styles = unsafeCSS12(tooltip_styles_default);
GdsTooltip.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property13({ type: Boolean, reflect: true })
], GdsTooltip.prototype, "open", 2);
__decorateClass([
  property13({ type: String, reflect: true, attribute: "content" })
], GdsTooltip.prototype, "content", 2);
__decorateClass([
  property13({ type: String, reflect: true, attribute: "position" })
], GdsTooltip.prototype, "position", 2);
GdsTooltip = __decorateClass([
  customElement8("gds-tooltip")
], GdsTooltip);

// libs/core/src/components/context-menu/context-menu.ts
import { LitElement as LitElement15 } from "lit";
import { msg as msg4 } from "@lit/localize";
import { classMap as classMap4 } from "lit-html/directives/class-map.js";
import { property as property14, queryAsync as queryAsync3 } from "lit/decorators.js";

// libs/core/src/primitives/menu/menu.ts
import { LitElement as LitElement14 } from "lit";
import { createRef as createRef3, ref as ref3 } from "lit/directives/ref.js";
var _slotRef2;
var GdsMenu = class extends LitElement14 {
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
      (o) => !o.hasAttribute("isplaceholder")
    ) || [];
  }
  /**
   * Focuses the first item in the menu.
   */
  focus() {
    this.navigableItems[0]?.focus();
  }
  render() {
    return html2`<slot ${ref3(__privateGet(this, _slotRef2))}></slot>`;
  }
};
_slotRef2 = new WeakMap();
GdsMenu = __decorateClass([
  gdsCustomElement("gds-menu")
], GdsMenu);

// libs/core/src/components/context-menu/context-menu.ts
var _handleItemClick, handleItemClick_fn;
var GdsContextMenu = class extends LitElement15 {
  constructor() {
    super();
    __privateAdd(this, _handleItemClick);
    this.open = false;
    this.buttonLabel = msg4("Open context menu");
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
    return html2`<button
        id="trigger"
        class="ghost border-0 small ${classMap4({ highlighted: this.open })}"
        aria-label="${this.buttonLabel}"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${() => this.open = !this.open}
      >
        <slot name="trigger">
          <i class="sg-icon sg-icon-ellipsis"></i>
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
          aria-label=${this.label}
          @gds-menu-item-click=${__privateMethod(this, _handleItemClick, handleItemClick_fn)}
        >
          <slot allow="gds-menu-item"></slot>
        </gds-menu>
      </gds-popover>`;
  }
};
_handleItemClick = new WeakSet();
handleItemClick_fn = function() {
  this.open = false;
};
GdsContextMenu.shadowRootOptions = {
  mode: "open",
  delegatesFocus: true
};
__decorateClass([
  property14({ type: Boolean, reflect: true })
], GdsContextMenu.prototype, "open", 2);
__decorateClass([
  property14()
], GdsContextMenu.prototype, "buttonLabel", 2);
__decorateClass([
  property14()
], GdsContextMenu.prototype, "label", 2);
__decorateClass([
  property14()
], GdsContextMenu.prototype, "placement", 2);
__decorateClass([
  queryAsync3("#trigger")
], GdsContextMenu.prototype, "elTriggerBtn", 2);
GdsContextMenu = __decorateClass([
  gdsCustomElement("gds-context-menu")
], GdsContextMenu);

// libs/core/src/primitives/menu/menu-item.ts
import { LitElement as LitElement16 } from "lit";
var _handleOnClick;
var GdsMenuItem = class extends Focusable(LitElement16) {
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
    return html2`<slot></slot>`;
  }
};
_handleOnClick = new WeakMap();
GdsMenuItem = __decorateClass([
  gdsCustomElement("gds-menu-item")
], GdsMenuItem);
export {
  GdsBadge,
  GdsButton,
  GdsCheckbox,
  GdsContextMenu,
  GdsDropdown,
  GdsIcon,
  GdsInput,
  GdsMenuItem,
  GdsOption,
  GdsRadio,
  GdsRadioGroup,
  GdsSwitch,
  GdsTooltip,
  VER_SUFFIX,
  gdsCustomElement,
  getScopedTagName,
  getUnscopedTagName,
  html2 as html,
  htmlTemplateTagFactory
};
