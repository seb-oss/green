global.CSSStyleSheet = function () {}
global.CSSStyleSheet.prototype.replaceSync = (k) => false

global.HTMLElement.prototype.attachInternals = () => {
  return new global.ElementInternals()
}
global.HTMLElement.prototype.closest = () => {
  return null
}

global.ElementInternals = function () {}
global.ElementInternals.prototype.setValidity = () => {}
global.ElementInternals.prototype.setFormValue = () => {}
global.ElementInternals.prototype.validity = () => {
  valid: true
}
global.ElementInternals.prototype.checkValidity = () => {}
global.ElementInternals.prototype.reportValidity = () => {}
global.ElementInternals.prototype.willValidate = () => {}
global.ElementInternals.prototype.validationMessage = ''

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
