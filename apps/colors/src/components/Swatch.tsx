interface ISwatch {
  color: string
  tone: string
}
const Swatch = ({ color, tone }: ISwatch) => {
  return (
    <div
      style={{
        aspectRatio: '1/1',
        backgroundColor: color,
        color: invertColor(color),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 12,
        cursor: 'pointer',
      }}
      onClick={() => {
        navigator.clipboard.writeText(color)
      }}
    >
      <div>{tone}</div>
      <div style={{ fontSize: 10 }}>{color}</div>
    </div>
  )
}

function invertColor(hex: string) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }

  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }

  const r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16)

  // https://stackoverflow.com/a/3943023/112731
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF'
}

export default Swatch
