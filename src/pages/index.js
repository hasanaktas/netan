import Head from 'next/head'
import { Header } from 'components'
export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Deneme2
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </div>
  )
}
