import { useState } from 'react'

import { Eye, Info } from '../icons/icons'
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

            <div className="flex items-center">
                <Info />
                <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">This is a info alert</h3>
            </div>
                <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
                More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                </div>
                <div className="flex">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900">
                         <Eye />
                    View more
                    </button>
                    <button className="text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
                    Dismiss
                    </button>
                </div>
            </>
    )
}

export default BlueFoodPage
