// spacing.tsx
import { ref } from '@sebgroup/green-tokens/src/tokens/2023/ref/space.ref.json'
import { TokenGroup } from '../../settings/studio.types'

export const spacingTokens: TokenGroup[] = [
  {
    title: 'Spacing Scale',
    tokens: Object.entries(ref.space)
      .sort((a, b) => a[1].$value - b[1].$value)
      .map(([name, token]) => ({
        name,
        value: token.$value,
        type: token.$type,
      })),
  },
]

export default function Spacing() {
  return (
    <div>
      {/* Your spacing page content */}
      <span>Spacing</span>
    </div>
  )
}
