import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hey = () => {
  return (
    <div>
        <Typewriter 
        words={["<\u2009Hey, I'm Donald /\u2009>"]}
        cursor
        cursorStyle = '_'
        typeSpeed={150}
        deleteSpeed={150}
        delaySpeed={500}
        />
    </div>
  )
}

export default Hey