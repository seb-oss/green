interface ISwatch {
  color: string
}

const Swatch = ({ color }: ISwatch) => {
  return (
    <div
      style={{ aspectRatio: '1/1', backgroundColor: color, width: '100%' }}
    ></div>
  )
}

export default Swatch
