import { useState, createContext, useEffect } from 'react'
import './App.css'

// Create Theme Context
export const ThemeContext = createContext()

function App() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <ThemeContext.Provider>
      <div className={"dark"}>
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hi, Welcome to my playground.
            </h1>
            <div className="flex justify-center items-center">
              <img src="/sheep.svg" alt="sheep" className="w-58 h-58" />
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              This website is still under construction<span className="inline-block w-4">{dots}</span>
            </p>
          </div>
        </section>

        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-5xl mx-auto text-center text-gray-600 dark:text-gray-300">
            <p>© {new Date().getFullYear()} De Bao. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
