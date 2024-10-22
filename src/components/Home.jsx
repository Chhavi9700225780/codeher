import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>&lt;Empowering Women in Computer Science /&gt;</h2>
      <p>Welcome to Women in Technology, a platform dedicated to empowering women and young girls pursuing Computer Science worldwide. We aim to increase visibility of resources, opportunities, and inspirational stories of successful women in STEM.</p>
      <div className="code-block">
        <pre>
          <code>
{`const mission = {
  goal: "Empower women in tech",
  method: "Provide resources and support",
  result: "Increase diversity in STEM"
};

function createSupportiveCommunity() {
  return "A vibrant network of women in tech";
}

// Join us in making a difference!`}
          </code>
        </pre>
      </div>
      <motion.div
        className="card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3>Our Mission</h3>
        <p>To create a supportive community that encourages and uplifts women in technology, providing them with the tools and inspiration to succeed in their careers.</p>
      </motion.div>
      <motion.div
        className="card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3>Join Our Community</h3>
        <p>Connect with like-minded women, share experiences, and grow together in our vibrant Discord community.</p>
        <a href="https://discord.gg/womenintech" target="_blank" rel="noopener noreferrer">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Join Discord
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Home