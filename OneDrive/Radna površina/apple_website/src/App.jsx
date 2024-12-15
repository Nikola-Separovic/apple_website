import { useState } from 'react'
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Model from './components/Model';

const App = () =>{
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights/>
      <Model />
    </main>
  );
}

export default App
