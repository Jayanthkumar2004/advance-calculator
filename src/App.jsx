import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import Display from './components/Display'
import Keypad from './components/Keypad'
import './App.css'

export default function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')

  const handleKeyPress = (key) => {
    if (key === 'C') {
      setExpression('')
      setResult('')
    } else if (key === 'DEL') {
      setExpression(expression.slice(0, -1))
    } else if (key === '=') {
      try {
        const evalResult = evaluate(expression)
        setResult(evalResult.toString())
      } catch {
        setResult('Error')
      }
    } else {
      setExpression(expression + key)
    }
  }

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <Keypad onKey={handleKeyPress} />
    </div>
  )
}
