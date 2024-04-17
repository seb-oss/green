"use client"

import React, { ChangeEvent, useState } from "react"
import Grid from "@/grid/grid"
import Pattern from "@/pattern/pattern"

import "@/grid/playground.css"

type GridAttribute = "small" | "medium" | "large"

export default function GridPlayground(): JSX.Element {
  const [columns, setColumns] = useState<number>(4)
  const [paddingInline, setPaddingInline] = useState<GridAttribute>("large")
  const [paddingBlock, setPaddingBlock] = useState<GridAttribute>("large")
  const [gapInline, setGapInline] = useState<GridAttribute>("large")
  const [gapBlock, setGapBlock] = useState<GridAttribute>("large")
  const [isFluid, setFluid] = useState(false)

  const handleColumnsChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setColumns(Number(e.target.value))
  }

  const handlePaddingInlineChange = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    setPaddingInline(e.target.value as GridAttribute)
  }

  const handlePaddingBlockChange = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    setPaddingBlock(e.target.value as GridAttribute)
  }

  const handleGapInlineChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setGapInline(e.target.value as GridAttribute)
  }

  const handleGapBlockChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setGapBlock(e.target.value as GridAttribute)
  }
  const handleFluidChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFluid(e.target.checked)
  }
  return (
    <div className="grid-play">
      <Pattern>
        <Grid
          columns={columns}
          tablet={8}
          mobile={4}
          paddingInline={paddingBlock}
          paddingBlock={paddingBlock}
          gapInline={gapInline}
          gapBlock={gapInline}
          {...(isFluid ? { fluid: true } : {})}
        >
          {Array.from({ length: columns }, (_, i) => (
            <div className="column" key={i}>
              <h2>COL:{i + 1}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </Grid>
        {/* prettier-ignore */}
        <code>
          {`
          <gds-grid 
            columns="${columns}"
            padding="${paddingBlock}" 
            gap="${gapBlock}">
            ...
          </gds-grid>
          `}
        </code>
      </Pattern>
      <aside>
        <h2>Playground</h2>
        <p>
          Change the values to see how the grid changes. The grid is a
          flexbox-based grid system. It uses the CSS properties{" "}
          <strong>gap</strong>, <strong>padding</strong>, and{" "}
          <strong>columns</strong>.
        </p>
        <div className="options">
          <label className="thecheck">
            <input type="checkbox" onChange={handleFluidChange} /> Fluid
          </label>

          <label>
            <span>Columns</span>
            <select value={columns} onChange={handleColumnsChange}>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Gap</span>
            <select value={gapInline} onChange={handleGapInlineChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <label>
            <span>Padding</span>
            <select value={paddingBlock} onChange={handlePaddingBlockChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
      </aside>
    </div>
  )
}
