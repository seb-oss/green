// File: gds-spinner.styles.ts
import { css } from 'lit'

export const styles = css`
  /* Host configuration with core variables */
  :host {
    /* Size variables with indexed access using CSS custom properties */
    --spinner-sizes: 2rem 3.75rem 6rem;
    --spinner-size-sm: 2rem;
    --spinner-size-md: 3.75rem;
    --spinner-size-lg: 6rem;

    --track-widths: 0.275rem 0.375rem 0.375rem;
    --track-width-sm: 0.275rem;
    --track-width-md: 0.375rem;
    --track-width-lg: 0.375rem;

    /* Theme variables - define light and dark separately first */
    --spinner-track-color-light: hsl(0 0% 81%);
    --spinner-track-color-dark: hsl(0 0% 40%);
    --spinner-active-color-light: hsl(0 0% 20%);
    --spinner-active-color-dark: hsl(0 0% 85%);
    --spinner-label-color-light: #333333;
    --spinner-label-color-dark: #ffffff;
    --spinner-backdrop-color-light: rgba(255, 255, 255, 0.8);
    --spinner-backdrop-color-dark: rgba(0, 0, 0, 0.8);

    /* Default to light mode as fallback */
    --spinner-track-color: var(--spinner-track-color-light);
    --spinner-active-color: var(--spinner-active-color-light);
    --spinner-label-color: var(--spinner-label-color-light);
    --spinner-backdrop-color: var(--spinner-backdrop-color-light);

    --spinner-backdrop-blur: 2px;

    /* Base sizing, will be overridden by size-specific variables */
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);

    /* Use CSS variable for color-scheme to avoid minification issues */
    --spinner-color-scheme: light dark;
    color-scheme: var(--spinner-color-scheme);

    display: block;
  }

  /* Media query fallback for browsers that don't support light-dark() */
  @media (prefers-color-scheme: dark) {
    :host {
      --spinner-track-color: var(--spinner-track-color-dark);
      --spinner-active-color: var(--spinner-active-color-dark);
      --spinner-label-color: var(--spinner-label-color-dark);
      --spinner-backdrop-color: var(--spinner-backdrop-color-dark);
    }
  }

  /* Size-specific host settings */
  :host([size='sm']) {
    --size: var(--spinner-size-sm);
    --track-width: var(--track-width-sm);
  }

  :host([size='md']),
  :host([size='default']) {
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);
  }

  :host([size='lg']) {
    --size: var(--spinner-size-lg);
    --track-width: var(--track-width-lg);
  }

  /* High contrast mode support */
  @media (forced-colors: active) {
    :host {
      /* Use system colors that respect the user's high contrast theme */
      --spinner-track-color: GrayText;
      --spinner-active-color: HighlightText;
      --spinner-label-color: ButtonText;

      /* Force a transparent background for the backdrop to respect high contrast */
      --spinner-backdrop-color: transparent;
    }

    /* Ensure the spinner has a visible outline in high contrast mode */
    .gds-spinner {
      /* This ensures the spinner is visible */
      border-color: Canvas;
      border-top-color: Highlight;
      forced-color-adjust: none;
    }

    /* Make sure text remains visible */
    .spinner-label {
      color: ButtonText;
      forced-color-adjust: none;
    }

    /* For cover/fullscreen modes, use a pattern instead of transparency */
    .gds-spinner-wrapper.gds-spinner-backdrop {
      background-color: Canvas;
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        GrayText 10px,
        GrayText 20px
      );
      backdrop-filter: none;
    }
  }

  /* Increased contrast mode support */
  @media (prefers-contrast: more) {
    :host {
      /* Higher contrast between track and active part */
      --spinner-track-color-light: hsl(0 0% 75%);
      --spinner-track-color-dark: hsl(0 0% 45%);
      --spinner-active-color-light: hsl(0 0% 0%);
      --spinner-active-color-dark: hsl(0 0% 100%);

      /* Ensure text is highly visible */
      --spinner-label-color-light: #000000;
      --spinner-label-color-dark: #ffffff;

      /* More opaque backdrop for better contrast */
      --spinner-backdrop-color-light: rgba(255, 255, 255, 0.9);
      --spinner-backdrop-color-dark: rgba(0, 0, 0, 0.9);

      /* Thicker borders for better visibility */
      --track-width-sm: 0.325rem;
      --track-width-md: 0.45rem;
      --track-width-lg: 0.45rem;
    }

    /* More pronounced label */
    .spinner-label {
      font-weight: bold;
    }
  }

  /* Reduced contrast mode support */
  @media (prefers-contrast: less) {
    :host {
      /* Softer contrast */
      --spinner-track-color-light: hsl(0 0% 85%);
      --spinner-track-color-dark: hsl(0 0% 35%);
      --spinner-active-color-light: hsl(0 0% 40%);
      --spinner-active-color-dark: hsl(0 0% 70%);

      /* Softer backdrop */
      --spinner-backdrop-color-light: rgba(255, 255, 255, 0.7);
      --spinner-backdrop-color-dark: rgba(0, 0, 0, 0.7);
    }
  }

  /* Fullscreen positioning */
  :host([fullscreen]) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }

  /* Focus styles */
  :host(:focus-visible) {
    outline: 2px solid var(--spinner-active-color);
    outline-offset: 2px;
  }

  /* Spinner component */
  .gds-spinner {
    border-radius: 50%;
    border: var(--track-width, 0.375rem) solid var(--spinner-track-color);
    border-top-color: var(--spinner-active-color);
    height: var(--size, 3.75rem);
    width: var(--size, 3.75rem);
    animation: gdsSpinnerRotation 1s linear infinite;
  }

  /* Motion preference adjustments */
  @media (prefers-reduced-motion: reduce) {
    .gds-spinner {
      /* Slower rotation for reduced motion preference */
      animation-duration: 2s;
      /* Smaller rotation to reduce visual intensity */
      animation-name: gdsSpinnerReducedRotation;
    }

    @keyframes gdsSpinnerReducedRotation {
      to {
        transform: rotate(180deg);
      }
    }
  }

  /* Layout components */
  .gds-spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .gds-spinner-wrapper.gds-spinner-cover {
    position: absolute;
    inset: 0;
    z-index: 999;
  }

  .gds-spinner-wrapper.gds-spinner-fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .gds-spinner-wrapper.gds-spinner-backdrop {
    background-color: var(--spinner-backdrop-color);
    backdrop-filter: blur(var(--spinner-backdrop-blur));
  }

  /* Label styling */
  .spinner-label {
    margin-top: 1rem;
    color: var(--spinner-label-color);
    text-align: center;
  }

  /* Animation keyframes */
  @keyframes gdsSpinnerRotation {
    to {
      transform: rotate(360deg);
    }
  }

  /* Light-dark variants as separate rules after the fallbacks */
  @supports (color: light-dark(red, blue)) {
    :host {
      --spinner-track-color: light-dark(
        var(--spinner-track-color-light),
        var(--spinner-track-color-dark)
      );
      --spinner-active-color: light-dark(
        var(--spinner-active-color-light),
        var(--spinner-active-color-dark)
      );
      --spinner-label-color: light-dark(
        var(--spinner-label-color-light),
        var(--spinner-label-color-dark)
      );
      --spinner-backdrop-color: light-dark(
        var(--spinner-backdrop-color-light),
        var(--spinner-backdrop-color-dark)
      );
    }
  }
`
