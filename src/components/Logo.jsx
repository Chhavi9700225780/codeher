import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: -180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
    >
      <circle cx="25" cy="25" r="23" stroke="#ff79c6" strokeWidth="4" />
      <path d="M25 15V35M15 25H35" stroke="#50fa7b" strokeWidth="4" strokeLinecap="round" />
      <circle cx="25" cy="25" r="5" fill="#8be9fd" />
    </motion.svg>
  )
}

export default Logo