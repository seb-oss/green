import { css } from 'lit'

export const alertStyles = css`
  /* Base host and grid layout */
  :host {
    box-sizing: border-box;
    display: block;
    max-width: 100%;
    container-type: inline-size;
  }

  #alert-message {
    display: grid;
    grid-template-columns: auto 1fr auto;
    min-width: fit-content;
    gap: 0.5rem;
    position: relative;
  }

  /* Main content */
  .icon {
    justify-self: start;
  }

  .message {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    min-width: 20ch;
    max-width: 100%;
    width: fit-content;
    white-space: normal;
  }

  .close-btn {
    justify-self: end;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .action-button {
    width: 100%;
  }

  /* Timer bar */
  .timer-bar {
    position: absolute;
    inset: auto 0 0;
    height: 0.25rem;
    background: var(--gds-border-color, rgba(0, 0, 0, 0.1));
    border-radius: 0 0 var(--gds-radius-md, 0.25rem)
      var(--gds-radius-md, 0.25rem);
    overflow: hidden;
  }

  .timer-progress {
    height: 100%;
    background: var(--gds-accent, currentColor);
    opacity: 0.6;
    transition: width 0.1s linear;
    will-change: width;
  }

  /* Accessibility and motion */
  @media (prefers-reduced-motion: reduce) {
    #alert-message.dismissing {
      transform: none;
    }
    .timer-progress {
      transition: none;
    }
  }

  @media (prefers-contrast: high) {
    :host {
      forced-color-adjust: none;
    }
  }

  /* Responsive container queries */
  @container (min-width: 601px) {
    .content-wrapper {
      flex-direction: row;
    }
    .action-button {
      width: auto;
      flex-shrink: 0;
    }
  }
`
