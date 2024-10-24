import 'jest-preset-angular/setup-jest'

import { randomUUID } from 'node:crypto'

globalThis.crypto.randomUUID = randomUUID
