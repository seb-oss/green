global.CSSStyleSheet = function () {}
global.CSSStyleSheet.prototype.replaceSync = (k) => false

global.ElementInternals = function () {
  // Private state for this instance
  this._validity = { valid: true } // Default to valid
  this._validationMessage = '' // Default message
}

// Mock ElementInternals
global.ElementInternals.prototype.setValidity = function (
  validityFlags = {},
  message = '',
) {
  this._validity = {
    valid: validityFlags.valid !== false,
    ...validityFlags,
  }
  this._validationMessage = message
}
global.ElementInternals.prototype.setFormValue = function (value) {}
Object.defineProperty(global.ElementInternals.prototype, 'validity', {
  get() {
    return this._validity
  },
})
global.ElementInternals.prototype.checkValidity = function () {
  return this._validity.valid
}
global.ElementInternals.prototype.reportValidity = function () {
  return this._validity.valid
}
Object.defineProperty(global.ElementInternals.prototype, 'willValidate', {
  get() {
    return true
  },
})
Object.defineProperty(global.ElementInternals.prototype, 'validationMessage', {
  get() {
    return this._validationMessage
  },
})
global.HTMLElement = global.HTMLElement || class HTMLElement {}
global.HTMLElement.prototype.attachInternals = function () {
  return new global.ElementInternals()
}

global.HTMLElement.prototype.closest = function () {
  return null
}

window.matchMedia = () => {
  return {
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  }
}

global.HTMLElement.prototype.close = () => {}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  disconnect() {}
  unobserve() {}
}
