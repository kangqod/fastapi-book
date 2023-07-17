import { createSignal, onMount } from 'solid-js'

async function fetchHello(): Promise<{ message: string }> {
  const response = await fetch(`http://localhost:8000/hello`)
  const result = await response.json()
  return result
}

function App() {
  const [message, setMessage] = createSignal('')

  onMount(() => {
    try {
      void (async () => {
        const { message: data } = await fetchHello()
        setMessage(data)
      })()
    } catch (err) {
      console.error(err)
    }
  })

  return (
    <>
      <h1>Vite + Solid</h1>
      <div class="card">
        <p> {message()} </p>
      </div>
    </>
  )
}

export default App
