import { Route, Routes } from 'react-router-dom';
import './App.css'
import TemplateBlue from './Templates/TemplateBlue';
import TemplatePurple from './Templates/TemplatePurple';

function App() {
  return (
    <>
      <section>
        {/* <TemplateBlue color="blue"/> */}
        {/* <TemplatePurple color="purple"/> */}

        {/* <Routes>
          <Route path="/blue" element={<TemplateBlue color="blue"/>} />
          <Route path="/purple" element={<TemplatePurple color="purple"/>} />
          <Route path="/dashboard" element={<Dashboard color={'blue'}/>}/>
              <Route path="/about" element={<About color={'blue'}/>}/>
              <Route path="/contact" element={<Contact color={'blue'}/>}/>
              <Route path="/features" element={<Features color={'blue'}/>}/>
              <Route path="/products" element={<Product color={'blue'}/>}/>

          
        </Routes> */}

        <TemplateBlue color={"blue"}/>
      </section>
    </>
  )
}

export default App
