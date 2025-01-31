import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { XStack, YStack } from './components/ui/stacks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <YStack className='items-center w-screen h-screen text-slate-800 font-sans justify-center'>
      <h1>Luke Costelloe</h1>
      <h1>Full Stack Developer</h1>
      <XStack className='bg-red-500 p-10 gap-2'>
        <Button variant='orangeround'>Click me</Button>
        <Button variant='default'>Click me</Button>
      </XStack>
      <XStack className="gap-2">
        <button  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='bg-orange-400'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </XStack>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </YStack>
  )
}

export default App
