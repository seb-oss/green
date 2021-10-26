export const tmplTooltip = `
  <ul class="tooltip">
    <li>{=TITLE}</li>
    {{
    <li class="{=CLASS_TOOLTIP_NAME}">
      <span style="background-color: {=COLOR}">{=NAME} {=VALUE}</span>
    </li>
    }}
  </ul>
`
