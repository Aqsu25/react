import React, { useEffect, useState } from 'react'


function Herosection() {

    const slides = [
        { id: 1, img: "https://images.pexels.com/photos/12899191/pexels-photo-12899191.jpeg", text: "Welcome" },
        { id: 2, img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg", text: "CSS" },
        { id: 3, img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg", text: "Hello" },

    ]
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }
    const previous = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev =>
                prev === slides.length - 1 ? 0 : prev + 1
            )
        }, 1000)
        return () => clearInterval(interval)

    })
    return (

        <div id="" className="relative w-full h-96">
            <img
                src={slides[current].img}
                className="w-full h-full opacity-60" />
            <h5 className='absolute flex justify-center items-center font-bold inset-0 text-gray-200 '>{slides[current].text}</h5>

            <div className="absolute left-5 text-white right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" onClick={previous} className="text-white">❮</a>
                <a href="#slide4" onClick={next} className="text-white">❯</a>
            </div>
        </div>


    )
}
export default Herosection
