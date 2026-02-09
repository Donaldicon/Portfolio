import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Name = () => {
  return (
    <div>
        <Typewriter 
        words={['Donald...', 'Developer']}
        loop = {true}
        cursor
        cursorStyle = '|'
        typeSpeed={150}
        deleteSpeed={150}
        delaySpeed={800}
        />
    </div>
  )
}

export default Name