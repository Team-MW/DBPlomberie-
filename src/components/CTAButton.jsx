import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTAButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <Link
        to="/contact"
        className="bg-secondary hover:bg-cyan-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 transition-all duration-300 hover:scale-105 group"
      >
        <span className="font-semibold">Demander un devis</span>
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  )
}

export default CTAButton

