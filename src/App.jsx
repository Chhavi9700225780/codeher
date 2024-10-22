import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Resources from './components/Resources'
import News from './components/News'
import Stories from './components/Stories'
import Opportunities from './components/Opportunities.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const pageVariants = {
    initial: { opacity: 0, x: "-100%" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100%" }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  }

  const renderPage = () => {
    const components = {
      home: Home,
      resources: Resources,
      news: News,
      stories: Stories,
      opportunities: Opportunities
    }
    const Component = components[currentPage]
    return (
      <motion.div
        key={currentPage}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Component />
      </motion.div>
    )
  }

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App