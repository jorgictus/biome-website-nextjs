import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from "next/head"
const Page = () => {
    return (
      <>
      <Head>
        <title>Os biomas brasileiros - Mata Atlântica</title>
        <meta
          property="og:title"
          content="Os biomas brasileiros - Mata Atlântica"
        />
        <meta
          property="og:description"
          content=" O bioma Mata Atlântica ocupa cerca 13% do território brasileiro, indo dos estados do Rio Grande do Norte ao Rio Grande do Sul. Esse bioma é composto por variados ecossistemas florestais e por uma biodiversidade semelhante à do bioma Amazônia. "
        />
      </Head>
        <div className="flex flex-col md:flex-row items-center  overflow-hidden justify-between">
            <div className="flex md:w-1/2  flex-col items-center">

                <motion.img
                    src="mata-atlantica.jpg"
                    layoutId="mata-atlantica"
                    transition={{ duration: 0.5 }}
                 
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="my-8"
                >
                    <Link href="/">
                        <a className="bg-gray-900  text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 transition">
                            Voltar para o Inicio
                        </a>
                    </Link>
                </motion.div>
            </div>

            <motion.h1
                className="text-4xl md:w-1/2 md:ml-8  h-screen  bg-gray-900 leading-none font-extrabold tracking-tight text-white p-5 md:text-5xl "
                initial={{ y: "100vw", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
             O bioma Mata Atlântica ocupa cerca 13% do território brasileiro, indo dos estados do Rio Grande do Norte ao Rio Grande do Sul. Esse bioma é composto por variados ecossistemas florestais e por uma biodiversidade semelhante à do bioma Amazônia.

            </motion.h1>


        </div>
        </>
    )
}

export default Page
