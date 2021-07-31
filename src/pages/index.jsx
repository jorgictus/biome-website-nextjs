import Link from 'next/link'
import { motion, Variants } from 'framer-motion'


const Card = ({ href, imgSrc, layoutId, title }) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative h-40 bg-gray-200 rounded-xl  cursor-pointer hover:bg-gray-50 transition"
        variants={variants}
      >
        <motion.img
          src={imgSrc}
          className="absolute w-full h-full rounded-xl "
          layoutId={layoutId}
        />

        <motion.div 
        
        whileHover={{
          transition: { duration: 0.3 },
          opacity : 1,
          x : 0,
        }}
        initial={{opacity : 0}}
        className="relative bg-black rounded-xl  bg-opacity-80 text-white flex text-2xl justify-center items-center w-full h-full">
          {title}
        </motion.div>

      </motion.div>
    </Link>
  )
}

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delayChildren: 0.5,
      staggerChildren: 0.5
    }
  }
}

export default function Home() {
  return (
    <div>
      <motion.h1
        className="text-4xl text-red-200 mt-10 leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl md:mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Biomas brasileiros, ambientes de grande riqueza natural do planeta.
      </motion.h1>

      <motion.div
        className="w-full grid grid-cols-1 grid-rows-3 gap-4 mt-10 md:grid-cols-3 md:grid-rows-1 md:mt-10"
        transition={{
          delay: 1
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Card
          href={'/floresta-amazonica'}
          imgSrc={'/floresta-amazonica.jpg'}
          layoutId={'floresta-amazonica'}
          title="Floresta Amazonica"
        />
        <Card
          href={'/pantanal'}
          imgSrc={'/pantanal.jpg'}
          layoutId={'pantanal'}
          title="Pantanal"
        />

        <Card
          href={'/mata-atlantica'}
          imgSrc={'/mata-atlantica.jpg'}
          layoutId={'mata-atlantica'}
          title="Mata Atlantica"
        />

        <Card
          href={'/pampa'}
          imgSrc={'/pampa.jpg'}
          layoutId={'pampa'}
          title="Pampa"
        />

        <Card
          href={'/cerrado'}
          imgSrc={'/cerrado.png'}
          layoutId={'cerrado'}
          title="Cerrado"
        />

        <Card
          href={'/caatinga'}
          imgSrc={'/caatinga.jpg'}
          layoutId={'caatinga'}
          title="Caatinga"
        />

      </motion.div>
    </div>
  )
}
