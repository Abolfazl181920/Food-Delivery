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
            This is BlueFoodPage ...
            number is : {randomNumber}
            <br/>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default BlueFoodPage
