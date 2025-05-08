import { Hero } from './components/hero'
import { RatingsContainer } from './components/ratings-containter'
import { Reviews } from './components/reviews-container'
import { Background } from './components/background'

function App() {

  return (
    <div className='relative'>
      <Background />
    <main className='px-6 py-20 text-[.9375rem]'>
      <Hero />
      <RatingsContainer />
      <Reviews />
    </main>
    </div>
  )
}

export default App
