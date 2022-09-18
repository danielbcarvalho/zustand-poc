import React, { useRef } from 'react'
import { useStore } from '../store/store'

export function Input() {
  const inputRef = useRef<HTMLInputElement>(null)
  const addPerson = useStore((state) => state.addPerson)

  const handleAddPerson = () => {
    if (inputRef.current) {
      addPerson(inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={handleAddPerson}>
      Add Person
     </button>
    </div>
  )
}
