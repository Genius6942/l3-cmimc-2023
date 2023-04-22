import { useState } from 'react'

function App() {
	const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
	const [states, setStates] = useState(Array(10).fill(0))

  return (
    <main className="w-screen h-screen flex items-center justify-center bg-black text-white text-3xl">
      {/* horizontal row of states with buttons above and below to increment each one */}
      <div className="flex items-center">
        {states.map((state, index) => (
          <div className="flex flex-col items-center" key={index}>
						<div>{primes[index]}</div>
            <button
              onClick={() => setStates(states.map((s, i) => (i === index ? s + 1 : s)))}
              className="rounded-full border-white border-4 flex items-center justify-center w-12 h-12 mt-3"
            >
              +
            </button>
            <div className="my-4 w-20 h-20 border-2 border-white flex items-center justify-center">
              {state}
            </div>
            <button
              onClick={() => setStates(states.map((s, i) => (i === index ? s - 1 : s)))}
              className="rounded-full border-white border-4 flex items-center justify-center w-12 h-12"
            >
              -
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App
