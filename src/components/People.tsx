import React from 'react';
import { useStore } from '../store/store'

export function People() {
  const people = useStore((state) => state.people);
  return (
    <div>
      {people.map((person) => (
        <p key={person}>{person}</p>
      ))}
    </div>
  )
}