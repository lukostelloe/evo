
import { Button } from "@/components/ui/button"
import { XStack, YStack } from './components/ui/stacks'
import SiteHeader from './components/site-header'


function App() {
  // rgb(238, 228, 202)
  // rgb(253, 246, 232)


  return (
    <YStack className='bg-[#FDF6E8] items-center w-screen h-screen text-slate-800 font-sans justify-center'>
      <SiteHeader/>
      <YStack className='gap-2'>
        <p className='font-bold'>Hey, I'm</p>
        <h1 className="text-5xl font-bold text-black">Luke Costelloe</h1>
        <h1 className="text-3xl font-bold text-black">Creative Developer</h1>
        <p>I'm a developer based in Nice, specialising in Front-End development. I love making things.</p>
      </YStack>
      <XStack className='bg-white p-10 gap-2'>
        <Button variant='orangeround'>Click me</Button>
        <Button variant='default'>Click me</Button>
      </XStack>
    </YStack>
  )
}

export default App
