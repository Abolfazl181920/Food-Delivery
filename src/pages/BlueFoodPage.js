import { useState } from 'react'

const BlueFoodPage = () => {

    const [ randomNumber, setRandomNumber ] = useState(0)

    const randomNumberRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const handleClick = () => {
        setRandomNumber(randomNumberRange(200, 700))
    }

    return (
        <div>
            number is : {randomNumber}
            <br/>
            <button onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Try to get Off</button>
        </div>
    )
}

export default BlueFoodPage
