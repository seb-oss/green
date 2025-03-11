import { css } from 'lit'

export const styles = css`
  :host {
    --radio-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-hover)
    );
    --radio-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-pressed)
    );

    --radio-size: var(--gds-space-xl);
    --radio-dot-size: var(--gds-space-m);
    --radio-radius: var(--gds-space-max);
    --radio-border-color: var(--gds-color-l3-border-secondary);
    --radio-border-color-selected: var(--gds-color-l3-border-primary);
    --radio-border-width: var(--gds-space-4xs);
    --radio-border-width-selected: var(--gds-space-2xs);
    --radio-dot-background-color: var(--gds-color-l3-content-primary);

    /* Font Sizes */
    --_font-size-label: var(--gds-text-size-detail-m);
    --_line-height-label: var(--gds-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_radio-label-color: var(--gds-color-l3-content-tertiary);
    --_radio-outline-color: var(--gds-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --radio-border-color: var(--gds-color-l3-border-negative);
    --radio-dot-background-color: var(
      --gds-color-l3-background-negative-secondary
    );
    --radio-border-color-selected: var(--gds-color-l3-border-negative);
    --radio-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-hover)
    );
    --radio-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-pressed)
    );
    --_radio-label-color: var(--gds-color-l3-content-negative);
    --_radio-outline-color: var(--gds-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-text-size-detail-s);
    --_line-height-label: var(--gds-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-space-m);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_radio-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-space-l);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-space-xs);
  }
`
