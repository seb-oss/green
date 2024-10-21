global.CSSStyleSheet = function () {}
global.CSSStyleSheet.prototype.replaceSync = (k) => false

global.HTMLElement.prototype.attachInternals = () => {
  return new global.ElementInternals()
}

global.ElementInternals = function () {}
global.ElementInternals.prototype.setValidity = () => {}
global.ElementInternals.prototype.setFormValue = () => {}
global.ElementInternals.prototype.validity = () => {
  valid: true
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
