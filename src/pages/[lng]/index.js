import React from 'react'
import { HowIs, SectionPhoto, SectionSlider2 } from 'components'

export default function App() {
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <SectionSlider2 />
        <HowIs />
        <SectionPhoto />
        
      </main>
    </React.Fragment>
  )
}
