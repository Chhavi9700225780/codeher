import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {opportunities} from "../data/eventList.js"

const Opportunities = () => {
  const [filter, setFilter] = useState('All')

  {/*const opportunities = [
    {
      title: "Flipkart GRiD 4.0",
      type: "Internship",
      deadline: "August 30, 2023",
      description: "Flipkart's flagship engineering campus challenge and internship program for women in tech.",
      url: "https://unstop.com/competitions/flipkart-grid-40-software-development-track-flipkart-grid-40-flipkart-686157"
    },
    {
      title: "Google Summer of Code",
      type: "Internship",
      deadline: "April 4, 2023",
      description: "A global program focused on bringing more student developers into open source software development.",
      url: "https://summerofcode.withgoogle.com/"
    },
    {
      title: "Microsoft Diversity Internship",
      type: "Internship",
      deadline: "Ongoing",
      description: "Internship opportunities for students from underrepresented backgrounds in tech.",
      url: "https://careers.microsoft.com/students/us/en/ur-lp-united-states"
    },
    {
      title: "Women Who Code Hackathon",
      type: "Hackathon",
      deadline: "September 15, 2023",
      description: "Annual hackathon event celebrating women in technology.",
      url: "https://www.womenwhocode.com/events"
    },
    {
      title: "Grace Hopper Celebration Hackathon",
      type: "Hackathon",
      deadline: "July 31, 2023",
      description: "Hackathon as part of the world's largest gathering of women technologists.",
      url: "https://ghc.anitab.org/"
    },
    {
      title: "Outreachy",
      type: "Open Source",
      deadline: "September 15, 2023",
      description: "Remote internships in open source and open science for underrepresented groups in tech.",
      url: "https://www.outreachy.org/"
    },
    {
      title: "Rails Girls Summer of Code",
      type: "Open Source",
      deadline: "March 30, 2023",
      description: "Global fellowship program for women and non-binary coders.",
      url: "https://railsgirlssummerofcode.org/"
    },
    {
      title: "She Code Africa Contributhon",
      type: "Open Source",
      deadline: "Ongoing",
      description: "Open source program for African women in technology.",
      url: "https://medium.com/shecodeafrica"
    },
    {
      title:"Microsoft Student Learn Ambassadors Program",
      type: "Open Source",
      deadline: "Ongoing",
      description: "Open source program for African women in technology.",
      url:"https://studentambassadors.microsoft.com/",
  },
  {
      title:"MLH Fellowship",
      type: "Open Source",
      deadline: "Ongoing",
      description: "Open source program for African women in technology.",
      url:"https://fellowship.mlh.io/",
  },
  {
      title:"Github Campus Expert",
      type: "Open Source",
      deadline: "Ongoing",
      description: "Open source program for African women in technology.",
      url:"https://education.github.com/experts",
  },
  ]*/}


  const types = ['All', 'Internship', 'Hackathon', 'Open Source']

  const filteredOpportunities = filter === 'All' 
    ? opportunities 
    : opportunities.filter(opp => opp.type === filter)

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
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      className="opportunities"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Upcoming Opportunities</h2>
      <p>Discover internships, hackathons, and open-source programs designed specifically for women in tech.</p>
      
      <motion.div 
        className="filter-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="filter">Filter by type: </label>
        <select 
          id="filter" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="filter-dropdown"
        >
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </motion.div>

      <AnimatePresence>
        {filteredOpportunities.map((opportunity, index) => (
          <motion.div
            className="card"
            key={opportunity.topic}
            custom={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
            variants={cardVariants}
          >
            <h3>{opportunity.topic}</h3>
            <p><strong>{opportunity.type}</strong></p>
            <p>Deadline: {opportunity.deadline}</p>
            <p>{opportunity.description}</p>
            <a href={opportunity.link} target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More
              </motion.button>
            </a>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default Opportunities