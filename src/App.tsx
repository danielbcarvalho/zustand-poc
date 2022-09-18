import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { People } from './components/People'


function App() {
  const [count, setCount] = useState(0)





  return (
    <div className="App">
     <h1>
      {`Hello World`}
     </h1>
     <People />

     <Input />

    </div>
  )
}

export default App
