import { studioData } from './studio.data'
import { StudioPage } from './studio.types'

export const getPageBySlug = (slug: string): StudioPage | undefined => {
  return studioData
    .flatMap((category) => category.pages)
    .find((page) => page.slug === slug)
}
