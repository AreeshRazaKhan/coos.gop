import { Fraunces, Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import PropTypes from 'prop-types'

import GrainOverlay from '@/components/grain-overlay'

import './globals.css'

const fraunces = Fraunces({
  variable: '--ff-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  variable: '--ff-italic',
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  display: 'swap',
})

const inter = Inter({
  variable: '--ff-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--ff-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: "Russ Cleveland for Congress — MT-01 '26",
  description: 'Independent spirit, democratic values. A Navy veteran and father of seven running to put Montana first.',
}

const RootLayout = ({ children }) => {
  const fontClasses = [
    fraunces.variable,
    instrumentSerif.variable,
    inter.variable,
    jetbrainsMono.variable,
  ].join(' ')

  return (
    <html lang="en" className={`${fontClasses} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[300] focus:bg-ink-900 focus:text-paper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[.14em]"
        >
          Skip to content
        </a>
        <GrainOverlay />
        {children}
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RootLayout
