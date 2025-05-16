'use client'

// Class names
export const _ = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ')
