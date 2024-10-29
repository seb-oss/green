'use client'

import { GdsCard, GdsFlex } from '$/import/components'

const cardProps = [
  { width: '10px', height: '40px' },
  { width: '10px', height: '90px' },
  { width: '10px', height: '70px' },
  { width: '10px', height: '10px' },
  { width: '10px', height: '80px' },
]

// Extract the heights
const heights = cardProps.map((props) => parseInt(props.height, 10))

// Function to shuffle an array
const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// Shuffle the heights array
const shuffledHeights = shuffleArray([...heights])

const Flex = () => (
  <GdsFlex gap="s">
    {cardProps.map((props, index) => (
      <GdsCard
        key={index}
        background="secondary"
        shadow="m"
        border-radius="xs"
        width={props.width}
        height={`${shuffledHeights[index]}px`}
      />
    ))}
  </GdsFlex>
)

export default Flex
