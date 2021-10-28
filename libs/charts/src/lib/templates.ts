// todo: add aria-hidden to tooltip when not visible, it should also have unique id that can be used together with aria-labelledby
export const tmplTooltip = `
  <dl class="tooltip">
    <dt>{=TITLE}</dt>
    {{
    <dd class="{=CLASS_TOOLTIP_NAME}" style="--color: {=COLOR}">
      <span>{=NAME} {=VALUE}</span>
    </dd>
    }}
  </dl>
`
