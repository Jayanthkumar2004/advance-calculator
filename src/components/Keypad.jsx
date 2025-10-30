import React from 'react'
import { FaBackspace, FaEquals } from 'react-icons/fa'

const keys = [
  '7', '8', '9', 'DEL',
  '4', '5', '6', '*',
  '1', '2', '3', '/',
  '0', '.', '=', 'C',
  '+', '-', '(', ')',
  'sin(', 'cos(', 'tan(', 'log(',
  'sqrt(', '^', 'pi', 'e'
]

export default function Keypad({ onKey }) {
  return (
    <div className="keypad">
      {keys.map((k) => (
        <button
          key={k}
          className={`key ${k === '=' ? 'key-eq' : ''}`}
          onClick={() => onKey(k)}
        >
          {k === 'DEL' ? <FaBackspace /> : k === '=' ? <FaEquals /> : k}
        </button>
      ))}
    </div>
  )
}
