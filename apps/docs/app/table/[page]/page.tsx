export function generateStaticParams() {
  // Pre-generate a reasonable range of pagination pages for static export
  return Array.from({ length: 20 }, (_, i) => ({ page: String(i + 1) }))
}

export default function TablePageRoute() {
  // The page number is read from params in the parent layout.tsx.
  // This route segment exists so /table/2, /table/3 etc. resolve.
  return null
}
