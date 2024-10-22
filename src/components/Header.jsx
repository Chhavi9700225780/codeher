import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

const Header = ({ setCurrentPage }) => {
  return (
    <header>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="logo-container"
      >
        <Logo />
        <h1>&lt;Women in Technology /&gt;</h1>
      </motion.div>
      <nav>
        {['home', 'resources', 'news', 'stories', 'opportunities'].map((page, index) => (
          <motion.button
            key={page}
            onClick={() => setCurrentPage(page)}
            whileHover={{ scale: 1.1, backgroundColor: "#50fa7b", color: "#282a36" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {`{${page}}`}
          </motion.button>
        ))}
      </nav>
    </header>
  )
}

export default Header