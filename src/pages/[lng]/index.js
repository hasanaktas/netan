import React from 'react'
import Head from 'next/head'
import { Header, HowIs, SectionPhoto, SectionSlider2 } from 'components'
import { languages, contentLanguageMap } from 'lib/i18n'
import useI18n from 'hooks/use-i18n'
export default function App() {
  const i18n = useI18n()
  return (
    <React.Fragment>
      <Head>
        <meta
          httpEquiv='content-language'
          content={contentLanguageMap[i18n.activeLocale]}
        />
      </Head>
      <Header />
      <main>
        {/* Hero unit */}
        <SectionSlider2 />
        <HowIs />
        <SectionPhoto />
      </main>
    </React.Fragment>
  )
}

export async function getStaticProps({ params }) {
  const { default: lngDict = {} } = await import(
    `../../locales/${params.lng}.json`
  )

  return {
    props: { lng: params.lng, lngDict },
  }
}

export async function getStaticPaths() {
  return {
    paths: languages.map((l) => ({ params: { lng: l } })),
    fallback: false,
  }
}
