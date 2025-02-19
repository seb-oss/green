import { css } from 'lit'

export const styles = css`
  :host {
    /* Color tokens */
    --gds-ref-color-white: #ffffff;
    --gds-ref-color-black: #000000;

    --gds-ref-pallet-base400: hsl(0, 0%, 81%);
    --gds-ref-pallet-base800: hsl(0, 0%, 20%);

    /* Spinner-specific tokens */
    --spinner-size-sm: 2rem;
    --spinner-size-md: 3.75rem;
    --spinner-size-lg: 6rem;
    --track-width-md: 0.375rem;
    --track-width-sm: 0.275rem;
    --spinner-backdrop-color: rgba(0, 0, 0, 0.55);

    /* High contrast mode colors */
    --spinner-track-color: var(--gds-ref-pallet-base400);
    --spinner-active-color: var(--gds-ref-pallet-base800);

    display: block;
  }

  /* High Contrast Mode Support */
  @media (forced-colors: active) {
    :host {
      --spinner-track-color: ButtonBorder;
      --spinner-active-color: ButtonText;
    }
  }

  /* Base spinner styles */
  .gds-spinner {
    height: var(--spinner-size-md);
    width: var(--spinner-size-md);
    border: var(--track-width-md) solid transparent;
    border-left-color: var(--spinner-track-color);
    border-right-color: var(--spinner-track-color);
    border-bottom-color: var(--spinner-track-color);
    border-top-color: var(--spinner-active-color);
    border-radius: 50%;
    display: block;
    transform: translateZ(0);
    will-change: transform;
    animation-name: gdsSpinnerRotation;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }

  /* Reduced Motion Support */
  @media (prefers-reduced-motion: reduce) {
    .gds-spinner {
      animation-duration: 2s;
    }
  }

  /* Size variants */
  .gds-spinner-sm {
    height: var(--spinner-size-sm);
    width: var(--spinner-size-sm);
    border-width: var(--track-width-sm);
  }

  .gds-spinner-lg {
    height: var(--spinner-size-lg);
    width: var(--spinner-size-lg);
    border-width: var(--track-width-md);
  }

  /* Wrapper styles */
  .gds-spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* Text styles */
  .spinner-text {
    margin-top: 1rem;
    color: var(--gds-ref-color-black);
    font-size: 1rem;
    text-align: center;
    /* Ensure this is visible */
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    overflow: visible;
  }

  /* Screen reader only class */
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  /* Position variants */
  .gds-spinner-fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
  }

  .gds-spinner-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }

  .gds-spinner-backdrop {
    background-color: var(--spinner-backdrop-color);
    z-index: 998;
  }

  /* Animation */
  @keyframes gdsSpinnerRotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Focus styles for keyboard navigation */
  :host(:focus-visible) {
    outline: 2px solid var(--gds-ref-pallet-base800);
    outline-offset: 2px;
  }
`
