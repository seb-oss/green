import{i as s}from"./lit-element-Bx14lxc-.js";const e=s`
  @layer base, reset;

  @layer base {
    .controls {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      //border-spacing: var(--gds-sys-space-2xs);
      border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      th {
        height: var(--gds-sys-space-2xl);
        width: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        //padding: 0 12px;
        //padding: 0;
        position: relative;
        //height: var(--gds-sys-space-3xl);
        height: var(--gds-sys-space-2xl);
        //width: var(--gds-sys-space-3xl);
        width: var(--gds-sys-space-5xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        //border-radius: var(--gds-sys-space-2xs);
        border-radius: var(--gds-sys-space-max);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &short {
          width: var(--gds-sys-space-4xl);
        }

        &long {
          width: var(--gds-sys-space-6xl);
        }

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          cursor: pointer;
        }

        &[aria-selected='true'] {
          background: var(--gds-sys-color-l2-background-tertiary);
          color: var(--gds-sys-color-l2-content-tertiary);
        }

        &:not(.disabled):hover {
          background: var(--gds-sys-color-l2-background-primary);
        }

        &[aria-selected='true']:not(.disabled):hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l2-background-tertiary),
            var(--gds-sys-color-l3-states-dark-hover)
          );
        }

        &.today {
          border-color: var(--gds-sys-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-sys-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &[aria-selected='false']:active:not(.disabled) {
          //scale: 0.96;
          background: #dbdbdb; //-14%
        }

        &[aria-selected='true']:active:not(.disabled) {
          //scale: 0.96;
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l2-background-tertiary),
            var(--gds-sys-color-l3-states-dark-pressed)
          );
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-l2-content-primary);
          outline-width: var(--gds-sys-space-3xs);
        }

        &.small {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font-size: var(--gds-sys-text-size-detail-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }
      }
    }
  }
`;export{e as s};
