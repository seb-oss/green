import React, { ReactNode } from 'react'
import {
  argbFromHex,
  hexFromArgb,
  TonalPalette,
} from '@material/material-color-utilities'
import { setDate } from 'date-fns/fp'

import { Card, Navbar, Slider, TextInput } from '@sebgroup/green-react'
import { Swatch } from '../components'

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
  ['Grey:', TonalPalette.fromHueAndChroma(140, 3)],
])

interface ItempToneRange {
  name: string
  tones: string[]
  hue: number
  chroma: number
}

const Pallet = (props: { pallet: [string, TonalPalette]; tones: number[] }) => {
  const [pallet, setPallet] = React.useState(props.pallet[1])
  const name = props.pallet[0]

  const tr: ItempToneRange = {
    name,
    tones: [],
    hue: Math.round(pallet.hue),
    chroma: Math.round(pallet.chroma),
  }

  props.tones.forEach((tone) => {
    tr.tones.push(hexFromArgb(pallet.tone(tone)))
  })

  return (
    <div className="card row mb-5">
      <div className="col">
        <strong className="mb-2">
          {tr.name} hue({tr.hue}) chroma({tr.chroma})
        </strong>
        <div className="row">
          <div className="gds-form-item col">
            <Slider
              label="Hue"
              value={pallet.hue}
              hasTextbox={true}
              min={0}
              max={360}
              onChange={(e) =>
                setPallet(TonalPalette.fromHueAndChroma(e, pallet.chroma))
              }
            />
          </div>
          <div className="gds-form-item col">
            <Slider
              label="Chroma"
              value={pallet.chroma}
              hasTextbox={true}
              min={0}
              max={150}
              onChange={(e) =>
                setPallet(TonalPalette.fromHueAndChroma(pallet.hue, e))
              }
            />
          </div>
        </div>
        <div className="d-flex">
          {tr.tones.map((color, index) => (
            <Swatch color={color} tone={props.tones[index].toString()} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Pallets = ({
  pallets,
  tones,
}: {
  pallets: Map<string, TonalPalette>
  tones: number[]
}) => {
  return (
    <>
      {Array.from(pallets).map((pallet) => (
        <Pallet pallet={pallet} tones={tones} />
      ))}
    </>
  )
}

export function App() {
  const [pallets, setPallets] = React.useState(PALLETS)
  const [tones, setTones] = React.useState(TONE_ARRAY)

  const parseTones = (tonesString: string) =>
    tonesString.split(',').map((v) => (v ? parseInt(v) : 0))

  return (
    <div className="use-green pb-7" style={{ backgroundColor: '#eee' }}>
      <Navbar title="Green Color Generator" />
      <div className={'container py-8 pt-5'}>
        <h1 className="pb-7">Green Color Generator</h1>
        <Card
          header={
            <div>
              <h2>Tonal steps</h2>
              <p>
                These values specify the tonal steps that should be generated.
              </p>
            </div>
          }
        >
          <TextInput
            value={tones.join(',')}
            label="Tones"
            onChange={(e) => setTones(parseTones(e.currentTarget.value))}
          />
        </Card>
      </div>
      <div className={'container py-8 pt-5'}>
        <Pallets pallets={pallets} tones={tones} />
      </div>
    </div>
  )
}

export default App
