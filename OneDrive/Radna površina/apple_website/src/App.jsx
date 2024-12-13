import { useState } from 'react'
import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Hero from './components/Hero';

const App = () =>{
  const [count, setCount] = useState(0)

  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights/>
    </main>
  );
}

export default App
