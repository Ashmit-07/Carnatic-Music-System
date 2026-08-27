import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Compose from './pages/Compose'
import Instruments from './pages/Instruments'

export default function App(){
  const [page, setPage] = useState('home')
  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={setPage} active={page} />
      <main className="flex-grow pt-20">
        {page === 'home' && <Home onNavigate={setPage} />}
        {page === 'learn' && <Learn onNavigate={setPage} />}
        {page === 'compose' && <Compose />}
        {page === 'instruments' && <Instruments />}
      </main>
      <Footer />
    </div>
  )
}
