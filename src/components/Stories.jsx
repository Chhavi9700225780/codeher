import React from 'react'
import { motion } from 'framer-motion'

const Stories = () => {
  const stories = [
    { name: "Ada Lovelace", role: "First Computer Programmer", story: "Known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine." },
    { name: "Grace Hopper", role: "Computer Scientist and US Navy Rear Admiral", story: "Pioneered computer programming and invented one of the first linkers." },
    { name: "Katherine Johnson", role: "NASA Mathematician", story: "Her calculations were critical to the success of the first and subsequent U.S. crewed spaceflights." },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 12px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.div
      className="stories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Inspirational Stories</h2>
      <p>Read about successful women in STEM who have made significant contributions to the field.</p>
      {stories.map((story, index) => (
        <motion.div
          className="card"
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3>{story.name}</h3>
          <p><strong>{story.role}</strong></p>
          <p>{story.story}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Stories