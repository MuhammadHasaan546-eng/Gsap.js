import { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css'

function App() {

const gsapRef = useRef()

useGSAP(() => {
  gsap.to(gsapRef.current, {
    x: 100,
    duration: 1,
    repeat: -1,
    yoyo: true
  })
})

  return (

    <>
  <div className="box" ref={gsapRef}>

  </div>
    </>
  )
}

export default App
