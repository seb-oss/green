import { css } from 'lit'

const style = css`
  :host {
    display: block;
  }

  #container {
    font-family: $SEB-fontfamily;
    display: inline-flex;
    flex-wrap: nowrap;
    padding: 2px;
    background-color: #e7e7e4;
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 200px;
  }

  ::slotted(button) {
    font-size: 14px !important;
    font-weight: 500 !important;
    line-height: 1 !important;
    text-decoration: none;
    margin: 0 2px !important;
    color: #333 !important;
    background-color: transparent !important;
    border: none !important;
    border-radius: 200px !important;
    cursor: pointer !important;
    direction: ltr;
    display: inline-flex !important;
    position: relative;
    overflow: hidden;
    min-width: 100px !important;
    min-height: max-content !important;
    padding: 0.5rem 1rem !important;
    white-space: nowrap;
    justify-content: center;
  }

  ::slotted(button.selected) {
    background-color: #fff !important;
    color: #333 !important;
  }

  ::slotted(button:hover) {
    background-color: darken(#e7e7e4, 10%) !important;
    color: #333 !important;
  }

  ::slotted(button:active) {
    background-color: darken(#e7e7e4, 20%) !important;
    color: #333 !important;
  }

  ::slotted(button:first-child) {
    margin-left: 0 !important;
  }

  ::slotted(button:last-child) {
    margin-right: 0 !important;
  }
`

export default style
