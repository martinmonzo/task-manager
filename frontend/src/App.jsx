import { useState, useEffect } from 'react'

function App() {
  const [result, setStatus] = useState('cargando...')

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => setStatus('error: ' + err.message))
  }, [])

  return <div>
    <p>Backend result: {result.status}</p>
    <p>Message: {result.message}</p>
  </div>
}

export default App