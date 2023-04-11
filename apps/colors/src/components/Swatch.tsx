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
      <div>{color}</div>
    </div>
  )
}

export default Swatch
