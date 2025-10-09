{
  "preset": "ts-jest",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "extensionsToTreatAsEsm": [".ts"],
  "setupFilesAfterEnv": ["<rootDir>/jest.esm.setup.cjs"]
}

{
  "compilerOptions": {
    "module": "ESNext",
    "target": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('ts-node/register');