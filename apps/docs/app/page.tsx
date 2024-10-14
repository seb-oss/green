import type { Metadata } from 'next'
import ComponentList from '@/component-list/component-list'
import Hero from '@/hero/hero'
import RessourcesList from '@/resources-list/resources-list'
import ColumnBanner from '@/column-banner'
import MainLayout from '&/main/main'

export const metadata: Metadata = {
  metadataBase: new URL('https://seb.io'),
  title: 'Green Design System',
  description:
    'Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility.',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'vhAE3wh75Jg9hnVBtCn30CPNnXyzEw-JAcS9Q1LwewY',
  },
}

export default function Home() {
  return (
    <MainLayout>
      <Hero
        heading="Designed to bring unity to our digital experiences."
        preamble="Green Design System is more than a polished user interface, its places the user at the very forefront of design, usability and accessibility."
      />
      <ComponentList title="Components" />
      <RessourcesList title="Resources" />
      <ColumnBanner
        heading="Empowering designers and developers"
        content="A framework with accessibility and usability rooted at its core, Green
        Design System empowers designers and developers to create with speed and
        precision. It ensures a seamless and consistent visual experience across
        our entire product suite."
      />
    </MainLayout>
  )
}
