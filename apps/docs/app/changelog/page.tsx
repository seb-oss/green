'use client'

import Link from 'next/link'
import { allChangelogs, Changelog } from 'content'
import { GdsCard, GdsFlex, GdsText } from '$/import/components'
import { compareDesc, format, parseISO } from 'date-fns'

function ChangelogCard(changelog: Changelog) {
  return (
    <GdsFlex id={changelog.version} className="log" gap="xl">
      <GdsCard flex-direction="column">
        <GdsText tag="h5">{changelog.version}</GdsText>
        <time dateTime={changelog.date}>
          <GdsText tag="small">
            {format(parseISO(changelog.date), 'LL.d.yy')}
          </GdsText>
        </time>
      </GdsCard>
      <GdsFlex flex-direction="column" flex="1" gap="xs">
        <GdsText tag="h4">
          <Link href={changelog.url_path}>{changelog.title}</Link>
        </GdsText>
        <GdsText tag="p" color="secondary">
          {changelog.summary}
        </GdsText>
      </GdsFlex>
    </GdsFlex>
  )
}

export default function ChangelogPage() {
  const changelogs = allChangelogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <GdsFlex max-width="80ch" flex-direction="column" gap="xl">
      <GdsText tag="h1">Changelogs</GdsText>
      <GdsFlex>
        {changelogs.map((changelog, idx) => (
          <ChangelogCard key={idx} {...changelog} />
        ))}
      </GdsFlex>
    </GdsFlex>
  )
}
