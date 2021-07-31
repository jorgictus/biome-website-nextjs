import 'tailwindcss/tailwind.css'
import { AnimateSharedLayout } from 'framer-motion'
import Layout from '../components/Layout'
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Os biomas brasileiros</title>
        <meta
          property="og:title"
          content="Os biomas brasileiros"
        />
        <meta
          property="og:description"
          content="Uma pequena descrição sobre os biomas brasileiros"
        />
      </Head>
      <AnimateSharedLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimateSharedLayout>
    </>
  )
}

export default App
