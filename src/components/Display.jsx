import React from 'react'

export default function Display({ expression, result }) {
  return (
    <div className="display">
      <div className="expression">{expression || '0'}</div>
      <div className="result">{result}</div>
    </div>
  )
}
