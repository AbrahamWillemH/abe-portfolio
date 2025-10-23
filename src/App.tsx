import './App.css'
import Navbar from './sections/Navbar'
import { useEffect } from 'react';
import Hero from './sections/Hero';

export function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}
