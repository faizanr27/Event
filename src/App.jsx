import { useState } from 'react';
import Layout from './pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen justify-center'> 
    <Layout />
    </div>
  )
}

export default App
