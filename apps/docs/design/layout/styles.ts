// layout/styles.ts
import { LAYOUT_DIMENSIONS } from "./config"

export const CSS_VARIABLES = {
  "--content-max-width": LAYOUT_DIMENSIONS.maxWidth.content,
  "--content-max-width-wide": `${LAYOUT_DIMENSIONS.breakpoints.wide}px`,
  "--article-max-width": LAYOUT_DIMENSIONS.maxWidth.article,
  "--post-max-width": LAYOUT_DIMENSIONS.maxWidth.post,
  "--spacing-xs": LAYOUT_DIMENSIONS.spacing.xs,
  "--spacing-sm": LAYOUT_DIMENSIONS.spacing.sm,
  "--spacing-md": LAYOUT_DIMENSIONS.spacing.md,
  "--spacing-lg": LAYOUT_DIMENSIONS.spacing.lg,
  "--spacing-xl": LAYOUT_DIMENSIONS.spacing.xl,
  "--duration": LAYOUT_DIMENSIONS.animation.duration,
  "--easing": LAYOUT_DIMENSIONS.animation.easing,
} as const
