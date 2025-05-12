// app/search/utils/fuzzy.ts
export function fuzzySearch(text: string, query: string): boolean {
  const pattern = query
    .toLowerCase()
    .split('')
    .map((char) => char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('.*')
  const regex = new RegExp(pattern)
  return regex.test(text.toLowerCase())
}

export function calculateScore(text: string, query: string): number {
  const normalizedText = text.toLowerCase()
  const normalizedQuery = query.toLowerCase()

  // Exact match gets highest score
  if (normalizedText === normalizedQuery) return 4

  // Starting with query gets high score
  if (normalizedText.startsWith(normalizedQuery)) return 3

  // Contains query as a word gets medium score
  if (new RegExp(`\\b${normalizedQuery}\\b`).test(normalizedText)) return 2

  // Fuzzy match gets low score
  if (fuzzySearch(text, query)) return 1

  return 0
}

// Helper function to get best match score from multiple fields
export function getBestMatchScore(
  item: any,
  query: string,
  fields: string[],
): number {
  return Math.max(
    ...fields.map((field) => {
      const value = item[field]
      return value ? calculateScore(value, query) : 0
    }),
  )
}
