import React from 'react'
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
    <div className='flex flex-col gap-3 w-full h-screen background overflow-x-hidden'>
      <h1 className='flex justify-center items-center mt-4 bg-white text-3xl ml-6 mr-6 pt-2 pb-2 rounded-lg'>RANDOM GIF</h1>
      <div className='flex flex-col w-full items-center gap-10'>
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App;
