import React from 'react'
import { useNavigate } from 'react-router'
import heroImg from '../assets/landing.jpg'

const Home = () => {
    const navigate = useNavigate()

    return (
        <section className="relative flex flex-1 items-center justify-center overflow-hidden">

            <img
                src={heroImg}
                alt="Hero"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <button
                onClick={() => navigate('/products')}
                className="relative z-10 px-6 py-3 text-lg font-light rounded-lg bg-amber-200 hover:bg-amber-300  cursor-pointer active:scale-95 transition-all duration-300"
            >
                Go to Products
            </button>

        </section>
    )
}

export default Home
