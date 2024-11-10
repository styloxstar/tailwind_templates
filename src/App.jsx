import { useState } from 'react'
import './App.css'
import TemplateBlue from './Templates/TemplateBlue';

function App() {
  const [count, setCount] = useState(0)

  // basic config to add dark and light mode
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  return (
    <>
      <section>
        <TemplateBlue/>
      </section>
    </>
  )
}

export default App
