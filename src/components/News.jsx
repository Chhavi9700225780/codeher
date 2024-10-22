import React from 'react'
import { motion } from 'framer-motion'

const News = () => {
  const newsItems = [
    { title: "Women in Tech Conference 2023", date: "October 15, 2023", description: "Annual conference celebrating women's achievements in technology." },
    { title: "New Scholarship Program for Women in CS", date: "September 1, 2023", description: "Major tech company announces scholarship program for women pursuing CS degrees." },
    { title: "Study Shows Increase in Women CS Graduates", date: "August 20, 2023", description: "Recent study reveals a 15% increase in women graduating with CS degrees over the past year." },
    { title: "Tech Giant Launches Women in AI Initiative", date: "July 5, 2023", description: "Leading tech company starts a new program to support women in artificial intelligence research and development." },
    { title: "Global Hackathon for Women Announced", date: "June 12, 2023", description: "Worldwide hackathon event exclusively for women coders to be held next month." }
  ]

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 8px 12px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.div
      className="news"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Latest News</h2>
      <p>Stay updated with the latest news and events in the world of women in technology.</p>
      {newsItems.map((item, index) => (
        <motion.div
          className="card"
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={cardVariants}
        >
          <h3>{item.title}</h3>
          <p><strong>{item.date}</strong></p>
          <p>{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default News