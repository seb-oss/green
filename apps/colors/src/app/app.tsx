import '../assets/styles.scss'
import { Navbar } from '@sebgroup/green-react'
import { Swatch } from '../components'
import {
  argbFromHex,
  TonalPalette,
  hexFromArgb,
} from '@material/material-color-utilities'

// An array that's looped over to generate a pallet of different tones
const TONE_ARRAY = [
  5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 88, 90, 92,
  94, 95, 96, 98, 99,
]

// A tone array from 0-100 with an increment of 10
// const TONE_ARRAY = Array.from(Array(11).keys()).map((item) => item * 10)

// All pallets that will be generated and rendered on screen
const PALLETS = new Map([
  ['Spring: #66FF87', TonalPalette.fromInt(argbFromHex('#66FF87'))],
  ['Green: #3d860a', TonalPalette.fromInt(argbFromHex('#3d860a'))],
  ['Red: #E63119', TonalPalette.fromInt(argbFromHex('#E63119'))],
  ['Blue: #0099FF', TonalPalette.fromInt(argbFromHex('#0099FF'))],
  ['Orange: #E68A00', TonalPalette.fromInt(argbFromHex('#E68A00'))],
  ['Yellow: #FFCC00', TonalPalette.fromInt(argbFromHex('#FFCC00'))],
  ['Grey: #0d0d0d', TonalPalette.fromInt(argbFromHex('#0d0d0d'))],
])

interface ItempToneRange {
  name: string
  tones: string[]
}

const renderAllPallets = () => {
  const palletArray: ItempToneRange[] = []

  PALLETS.forEach((pallet, key, map) => {
    const tempToneRange: ItempToneRange = { name: key, tones: [] }

    TONE_ARRAY.forEach((tone) => {
      tempToneRange.tones.push(hexFromArgb(pallet.tone(tone)))
    })

    palletArray.push(tempToneRange)
  })

  return palletArray.map((item) => (
    <div className="row mb-5">
      <div className="col">
        <strong className="mb-2">{item.name}</strong>
        <div className="d-flex">
          {item.tones.map((color, index) => (
            <Swatch color={color} tone={TONE_ARRAY[index].toString()} />
          ))}
        </div>
      </div>
    </div>
  ))
}

export function App() {
  return (
    <>
      <div className="use-green">
        <Navbar title="Green Color Generator" />
        <div className="container">{renderAllPallets()}</div>
      </div>
    </>
  )
}

export default App
