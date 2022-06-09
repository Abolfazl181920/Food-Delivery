import { useState } from 'react'

import KILLILLU from '../assests/KILLILLU.png'
import BlueFoodImg from '../assests/bluefood.png'

const BlueFoodPage = () => {

    const [ randomNumber, setRandomNumber ] = useState(0)
    const [ chanceCount, setChanceCount ] = useState(0)
    const [ foodPrice, setFoodPrice ] = useState(900)

    const randomNumberRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const handleClick = () => {
        setRandomNumber(randomNumberRange(200, 500))
        setChanceCount(prevState => prevState + 1)
        if (chanceCount === 3) {
            alert()
        }
    }

    return (
        <>
            <img className="w-10 rounded-2xl" src={KILLILLU} alt="Kill Illuminati" />
            <div className="flex justify-center block">
                <img className="w-60" src={BlueFoodImg} alt="Iranian Koofte" />
            </div>
            <div className="flex justify-center mt-10">
                <button onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Try to get Off</button>
                <span className="bg-yellow-500 h-10 w-10 rounded-lg text-center"> {randomNumber} </span>
            </div>
        </>
    )
}

export default BlueFoodPage
