import { Hero } from './components/hero'
import { RatingsContainer } from './components/ratings-containter'
import { Reviews } from './components/reviews-container'
import { Background } from './components/background'

function App() {

  return (
    <main className='relative px-6 py-20 text-[.9375rem] xl:px-[165px]'>
      <Background />
      <div className='mb-12 xl:flex'>
        <Hero />
        <RatingsContainer />
      </div>
        <Reviews />
    </main>
  )
}

export default App
