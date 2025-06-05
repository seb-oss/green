import { css } from 'lit'

export const alertStyles = css`
  :host {
    display: block;
    container-type: inline-size;
  }

  gds-card[role='alert'] {
    display: grid;
    align-items: baseline;
    width: 100%;
    position: relative;
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      'icon message close'
      'icon action  close';
  }

  /* Animation states */
  @media (prefers-reduced-motion: no-preference) {
    gds-card[role='alert'] {
      animation: slideIn 0.3s ease-out;
    }

    gds-card[role='alert'].dismissing {
      opacity: 0;
      transform: translateX(1rem);
      pointer-events: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    gds-card[role='alert'].dismissing {
      opacity: 0;
      pointer-events: none;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Focus styles */
  gds-card[role='alert']:focus-within {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  /* Core elements */
  .icon {
    grid-area: icon;
    /* High contrast mode support */
    @media (prefers-contrast: high) {
      forced-color-adjust: none;
    }
  }

  .message {
    grid-area: message;
    font-size: var(--gds-font-size-base, 1rem);
  }

  .message-text {
    display: inline;
    white-space: normal;
  }

  /* Interactive elements */
  .close-btn,
  gds-button {
    /* Ensure minimum touch target size (WCAG 2.5.5) */
    min-width: 44px;
    min-height: 44px;
  }

  /* Close button */
  .close-btn {
    grid-area: close;
    justify-self: end;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-size: 1.2rem;
    line-height: 1;
    margin: 0;
    z-index: 2;
    padding: 0.5rem;
    border-radius: var(--gds-radius-sm, 0.25rem);
    transition: background-color 0.2s;
  }

  .close-btn:hover {
    background-color: var(--gds-hover-bg, rgba(0, 0, 0, 0.05));
  }

  .close-btn:focus-visible {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  /* Button inside message */
  gds-button {
    grid-area: action;
    width: 100%;
    min-width: 7.5rem;
    margin-top: 0.75rem;
  }

  /* Timer bar */
  .timer-bar {
    position: absolute;
    inset: auto 0 0 0;
    height: 0.25rem;
    background: var(--gds-border-color, rgba(0, 0, 0, 0.1));
    border-radius: 0 0 var(--gds-radius-md, 0.25rem)
      var(--gds-radius-md, 0.25rem);
    overflow: hidden;
  }

  .timer-progress {
    height: 100%;
    transition: width 0.1s linear;
    background: var(--gds-accent, currentColor);
    opacity: 0.6;
    will-change: width;
  }

  /* Reduced motion: disable progress animation */
  @media (prefers-reduced-motion: reduce) {
    .timer-progress {
      transition: none;
    }
  }

  /* Small: stacked */
  @container (max-width: 600px) {
    gds-card[role='alert'] {
      grid-template-areas:
        'icon message close'
        'icon cta     cta';
      padding: 1rem;
      gap: 0.75rem;
    }
    gds-card[role='alert'].dismissible {
      padding: 0rem 0rem 1rem 0.5rem;
    }
    .message {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    gds-button {
      margin: 0.75rem 0 0;
    }
  }

  /* Medium: inline */
  @container (min-width: 601px) and (max-width: 1024px) {
    gds-card[role='alert'] {
      grid-template-areas: 'icon message close';
      padding: 0.5rem 0.5rem 1rem 0.5rem;
      gap: 0.75rem 1rem;
    }
    gds-card[role='alert'].dismissible {
      padding: 0rem 0rem 1rem 0.5rem;
    }
    .message {
      display: flex;
      gap: 0.5rem;
    }

    gds-button {
      grid-area: unset;
      width: auto;
      margin: 0 0 0 1rem;
      display: inline-flex;
    }
  }

  /* Large: centered */
  @container (min-width: 1025px) {
    gds-card[role='alert'] {
      grid-template-columns: 1fr minmax(0, 37.5rem) auto 1fr;
      grid-template-areas: 'icon message close close';
      padding: 0.75rem 1.5rem;
      min-height: 2.5rem;
    }
    gds-card[role='alert'].dismissible {
      padding: 0rem 0rem 1rem 0.5rem;
    }
    gds-card[role='alert'].dismissing {
      opacity: 0;
      transform: translateX(1rem);
      pointer-events: none;
    }
    .icon {
      grid-column: 1;
      margin-right: 1.5rem;
    }

    .message {
      grid-column: 2;
      display: flex;
      gap: 0.75rem;
    }

    gds-button {
      grid-area: unset;
      width: auto;
      margin: 0 0 0 0.75rem;
      display: inline-flex;
      flex-shrink: 0;
    }

    .close-btn {
      grid-column: 4;
      margin-left: 1.5rem;
    }
  }
`
