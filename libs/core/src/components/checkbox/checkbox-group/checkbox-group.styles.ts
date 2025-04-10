import { css } from 'lit'

export const styles = css`
  :host {
    --checkbox-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-hover)
    );
    --checkbox-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-secondary),
      var(--gds-color-l3-states-light-pressed)
    );

    --checkbox-size: var(--gds-space-xl);
    --checkbox-disc-size: var(--gds-space-m);
    --checkbox-radius: var(--gds-space-2xs);
    --checkbox-border-color: var(--gds-color-l3-border-secondary);
    --checkbox-border-color-selected: var(--gds-color-l3-border-primary);
    --checkbox-border-width: var(--gds-space-4xs);
    --checkbox-border-width-selected: var(--gds-space-s);
    --checkbox-outline-width: var(--gds-space-3xs);
    --checkbox-disc-background-color: var(--gds-color-l3-content-primary);

    /* Font Sizes */
    --_font-size-label: var(--gds-text-size-detail-m);
    --_line-height-label: var(--gds-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_checkbox-label-color: var(--gds-color-l3-content-tertiary);
    --_checkbox-outline-color: var(--gds-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --checkbox-border-color: var(--gds-color-l3-border-negative);
    --checkbox-disc-background-color: var(
      --gds-color-l3-background-negative-secondary
    );
    --checkbox-border-color-selected: var(--gds-color-l3-border-negative);
    --checkbox-bg-mix: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-hover)
    );
    --checkbox-bg-mix-active: color-mix(
      in srgb,
      var(--gds-color-l3-background-negative-secondary),
      var(--gds-color-l3-states-negative-pressed)
    );
    --_checkbox-label-color: var(--gds-color-l3-content-negative);
    --_checkbox-outline-color: var(--gds-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-text-size-detail-s);
    --_line-height-label: var(--gds-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-text-line-height-detail-s);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-space-m);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_checkbox-label-color);
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
