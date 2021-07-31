import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from "next/head"
const Page = () => {
    return (
        <>
         <Head>
        <title>Os biomas brasileiros - Pantanal</title>
        <meta
          property="og:title"
          content="Os biomas brasileiros - Pantanal"
        />
        <meta
          property="og:description"
          content="O bioma Pantanal é considerado uma das maiores zonas úmidas do mundo, compreendendo os estados de Mato Grosso e Mato Grosso do Sul. É o menor bioma do Brasil, ocupando cerca de 2% do território nacional."
        />
      </Head>
        <div className="flex flex-col md:flex-row items-center  overflow-hidden justify-between">
            <div className="flex  flex-col items-center">

                <motion.img
                    src="pantanal.jpg"
                    layoutId="pantanal"
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
                className="text-4xl md:w-1/2 md:ml-8  h-screen  bg-gray-900  leading-none font-extrabold tracking-tight text-white p-5 md:text-5xl "
                initial={{ y: "100vw", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                O bioma Pantanal é considerado uma das maiores zonas úmidas do mundo, compreendendo os estados de Mato Grosso e Mato Grosso do Sul. É o menor bioma do Brasil, ocupando cerca de 2% do território nacional.

            </motion.h1>


        </div>
        </>
    )
}

export default Page
