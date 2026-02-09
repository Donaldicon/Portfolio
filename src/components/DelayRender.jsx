import { useState, useEffect } from "react"

const DelayRender = ({delay = 1000, children}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), delay)
        return () => clearTimeout(timer)
    }, [delay])
  return (
    <div className={`transition-opacity duration-500 ${ show ? 'opacity-100' : 'opacity-0'}`}>
        {show && children}
    </div>
  )
}

export default DelayRender