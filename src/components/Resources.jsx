import React from 'react'
import { motion } from 'framer-motion'

const Resources = () => {
  const resources = [
    { title: "Learn to Code", url: "https://www.codecademy.com/", description: "Interactive coding tutorials for beginners and advanced learners." },
    { title: "Women Who Code", url: "https://www.womenwhocode.com/", description: "Global community empowering women in technology careers." },
    { title: "Girls Who Code", url: "https://girlswhocode.com/", description: "Organization working to close the gender gap in technology." },
    { title: "Coursera", url: "https://www.coursera.org/", description: "Online courses from top universities in various CS topics." },
    { title: "edX", url: "https://www.edx.org/", description: "Free online courses from top institutions worldwide." },
    { title: "Udacity", url: "https://www.udacity.com/", description: "Online tech courses and nanodegree programs." },
    { title: "FreeCodeCamp", url: "https://www.freecodecamp.org/", description: "Free coding bootcamp and certification program." },
    { title: "Skillcrush", url: "https://skillcrush.com/", description: "Online tech skills courses designed for women." }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
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
      className="resources"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Resources and Opportunities</h2>
      <p>Explore these valuable resources to enhance your skills and find opportunities in the tech industry.</p>
      {resources.map((resource, index) => (
        <motion.div
          className="card"
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Learn More
            </motion.button>
          </a>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Resources