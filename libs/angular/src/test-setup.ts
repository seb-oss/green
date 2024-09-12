import 'jest-preset-angular/setup-jest'
import 'chalk'

import { randomUUID } from 'node:crypto'
globalThis.crypto.randomUUID = randomUUID
