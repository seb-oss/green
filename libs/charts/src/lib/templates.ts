export const tmplTooltip = `
  <ul>
    <li>
      Index
      <br />
      {=TITLE}
    </li>
    {{
    <li class="{=CLASS_TOOLTIP_NAME}">
      <span> {=VALUE}:{=VAR} </span>
      <br />
      <span style="color:{=COLOR}"> {=NAME} </span>
    </li>
    }}
  </ul>
`

export const tmplLegend = `
  <span style="color:#fff; padding:10px; background-color:{=COLOR}">
    {=TITLE}
  </span>
`
