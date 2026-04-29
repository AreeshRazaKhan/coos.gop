import { Crimson_Pro, JetBrains_Mono, Vollkorn } from 'next/font/google'
import PropTypes from 'prop-types'

import GrainOverlay from '@/components/grain-overlay'

import './globals.css'

const vollkorn = Vollkorn({
  variable: '--ff-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const vollkornItalic = Vollkorn({
  variable: '--ff-italic',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: 'italic',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  variable: '--ff-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--ff-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata = {
  title: 'Coos County Republicans · Conservative Values, Coos County First',
  description:
    'The grassroots Republican community of Coos County, Oregon. Local control, lower taxes, public safety, and active stewardship. Oregon PAC #300.',
}

const RootLayout = ({ children }) => {
  const fontClasses = [
    vollkorn.variable,
    vollkornItalic.variable,
    crimsonPro.variable,
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
