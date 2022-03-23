import React, { ReactNode, useEffect, useState } from 'react'

export interface BadgeProps {
  title: string
  badgeType?: string //TODO: change this to extract type
  isCloseable?: boolean
  closeText?: string
}

export function Badge({
  title,
  badgeType,
  isCloseable,
  closeText,
}: BadgeProps) {
  return (
    <span className={`badge ${badgeType}`}>
      <strong>{title}</strong>
      {isCloseable && (
        <button className="close">
          <span className="sr-only">{closeText}</span>
        </button>
      )}
    </span>
  )
}

export default Badge
