// app/component/[slug]/content.tsx
'use client'

/* eslint-disable no-case-declarations */
import React from 'react'

import * as Core from '@sebgroup/green-core/react'
import { renderColumn } from '../../../design/atoms/content/content'
import { Render } from '../../../design/atoms/content/render'
import { useContent } from '../../../settings/content'
import { ComponentSection } from '../../../settings/content/types'
import { IconContent } from './content.icon'

interface ContentSectionProps {
  slug: string
  contentKey: 'overview' | 'ux-text' | 'accessibility'
}

export function ContentSection({ slug, contentKey }: ContentSectionProps) {
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)
  if (!component) return null

  const getContent = (): ComponentSection[] | null => {
    switch (contentKey) {
      case 'overview':
        return component.overview || null
      case 'ux-text': {
        if (Array.isArray(component['ux-text'])) {
          return component['ux-text']
        }
        return component['ux-text']?.section || null
      }
      case 'accessibility':
        return component.accessibility?.section || null
      default:
        return null
    }
  }

  const content = getContent()

  const imageProvider = {
    getImage: (slug: string, node: string) => {
      return actions.getComponentImage?.(slug, node)
    },
  }
  if (slug === 'icon' && contentKey === 'overview') {
    return <IconContent component={component} />
  }

  // if (slug === 'icon' && contentKey === 'overview') {
  //   return (
  //     <Core.GdsFlex flex-direction="column" gap="xl" width="100%">
  //       {content &&
  //         content.length > 0 &&
  //         content.map((section: ComponentSection, index: number) => (
  //           <Core.GdsFlex key={index} flex-direction="column" gap="l">
  //             {section.title && (
  //               <Core.GdsText tag={section.tag || 'h2'} font-size="display-m">
  //                 {section.title}
  //               </Core.GdsText>
  //             )}
  //             {section.columns && (
  //               <Core.GdsGrid
  //                 columns={section.cols || '2'}
  //                 gap="m"
  //                 max-width="100%"
  //               >
  //                 {section.columns.map((column, colIndex) => (
  //                   <React.Fragment key={colIndex}>
  //                     {renderColumn(column, slug)}
  //                   </React.Fragment>
  //                 ))}
  //               </Core.GdsGrid>
  //             )}
  //           </Core.GdsFlex>
  //         ))}

  //       <IconContent component={component} />
  //     </Core.GdsFlex>
  //   )
  // }

  // if (!content || !Array.isArray(content)) {
  //   return (
  //     <Core.GdsFlex
  //       flex-direction="column"
  //       gap="m"
  //       align-items="flex-start"
  //       justify-content="flex-start"
  //       padding="0"
  //     >
  //       <Core.GdsText tag="h3" font-size="display-m">
  //         Coming Soon
  //       </Core.GdsText>
  //       <Core.GdsText color="secondary" max-width="560px">
  //         {(() => {
  //           switch (contentKey) {
  //             case 'ux-text':
  //               return 'UX writing guidelines for this component are currently being developed.'
  //             case 'accessibility':
  //               return 'Accessibility documentation for this component is currently being developed.'
  //             case 'overview':
  //               return 'Documentation for this component is currently being developed.'
  //             default:
  //               return 'Content is currently being developed.'
  //           }
  //         })()}
  //       </Core.GdsText>
  //     </Core.GdsFlex>
  //   )
  // }

  // return content.length > 0 ? (
  //   <Core.GdsFlex flex-direction="column" gap="xl" width="100%">
  //     {content.map((section: ComponentSection, index: number) => (
  //       <Core.GdsFlex key={index} flex-direction="column" gap="l">
  //         {section.title && (
  //           <Core.GdsText tag={section.tag || 'h2'} font-size="display-m">
  //             {section.title}
  //           </Core.GdsText>
  //         )}

  //         {contentKey === 'accessibility' ? (
  //           <Core.GdsText>{(section as any).description}</Core.GdsText>
  //         ) : (
  //           section.columns && (
  //             <Core.GdsGrid
  //               columns={section.cols || '2'}
  //               gap="m"
  //               max-width="100%"
  //             >
  //               {section.columns.map((column, colIndex) => (
  //                 <React.Fragment key={colIndex}>
  //                   {renderColumn(column, slug)}
  //                 </React.Fragment>
  //               ))}
  //             </Core.GdsGrid>
  //           )
  //         )}
  //       </Core.GdsFlex>
  //     ))}
  //   </Core.GdsFlex>
  // ) : null

  return (
    <Render
      content={content}
      slug={slug}
      imageProvider={imageProvider}
      isAccessibility={contentKey === 'accessibility'}
    />
  )
}
