import {BrowserRouter} from 'react-router-dom'

import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects'
import Skills from './Components/Skills' 
import Contact from './Components/Contact'; 

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </BrowserRouter>
  )
}

export default App;