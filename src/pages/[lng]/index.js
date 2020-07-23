import React from 'react'
import { HowIs, SectionPhoto, SectionSlider } from 'components'

export default function App() {
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <SectionSlider />
        <SectionPhoto />
        <HowIs />
      </main>
    </React.Fragment>
  )
}
