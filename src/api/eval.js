import { evaluate } from 'mathjs'

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  try {
    const { expression } = req.body
    const result = evaluate(expression)
    res.status(200).json({ result })
  } catch (err) {
    res.status(400).json({ error: 'Invalid expression' })
  }
}
