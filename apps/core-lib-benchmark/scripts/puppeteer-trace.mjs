import { spawn } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { exit } from 'node:process'
import puppeteer from 'puppeteer'

import {
  getPaintDur,
  getRenderingDur,
  getScriptingDur,
} from './lib/trace-parsing.mjs'

const bench_param = process.argv[2]
const compare_param = process.argv[3]

// Fire up the dev server using NX CLI
const serve_app = spawn('nx', ['run', 'core-lib-benchmark:serve:production'])

// Wait for the server to start (indicated by the stdout message containing 'localhost')
await new Promise((resolve) => {
  serve_app.stdout.on('data', (data) => {
    if (data.includes('localhost')) {
      resolve()
    }
  })
})

// Start Puppeteer and collect the trace
const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.tracing.start({
  path: 'apps/core-lib-benchmark/trace-snapshots/last-trace.json',
})
await page.goto(`http://localhost:4200/${bench_param}`)
await page.tracing.stop()

await browser.close()

// Load the trace json file
const trace = JSON.parse(
  await readFile(
    'apps/core-lib-benchmark/trace-snapshots/last-trace.json',
    'utf-8',
  ),
)

// Calculate the durations
const scriptingDur = getScriptingDur(trace)
const renderingDur = getRenderingDur(trace)
const paintDur = getPaintDur(trace)

console.log(
  `Scripting: ${scriptingDur.toFixed(2)}ms
Rendering: ${renderingDur.toFixed(2)}ms
Painting: ${paintDur.toFixed(2)}ms
-------------------
Total: ${(scriptingDur + renderingDur + paintDur).toFixed(2)}ms`,
)

if (compare_param) {
  const compare_trace = JSON.parse(
    await readFile(
      `apps/core-lib-benchmark/trace-snapshots/${compare_param}.json`,
      'utf-8',
    ),
  )

  const compare_scriptingDur = getScriptingDur(compare_trace)
  const compare_renderingDur = getRenderingDur(compare_trace)
  const compare_paintDur = getPaintDur(compare_trace)

  // Log percentage differences between the two traces
  console.log(
    `
Compared to ${compare_param}:

Scripting: ${((scriptingDur / compare_scriptingDur - 1) * 100).toFixed(2)}%
Rendering: ${((renderingDur / compare_renderingDur - 1) * 100).toFixed(2)}%
Painting: ${((paintDur / compare_paintDur - 1) * 100).toFixed(2)}%
-------------------
Overall: ${(
      ((scriptingDur + renderingDur + paintDur) /
        (compare_scriptingDur + compare_renderingDur + compare_paintDur) -
        1) *
      100
    ).toFixed(2)}%`,
  )
}

exit(0)
