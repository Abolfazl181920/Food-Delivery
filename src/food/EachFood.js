import { useState } from 'react'
import { Pluse, Minuse, Euro } from '../icons/icons'

import PriceBox from './PriceBox'

const EachFood = ({ name, source, price }) => {

    const [ count, setCount ] = useState(0)
    const [ newPrice, setNewPrice ] = useState(0)
    const [ countPurchase, setCountPurchase ] = useState()

    let finalPrice = price

    const addFood = () => {

        setCount(prevState => prevState + 1)
        setNewPrice(newPrice + finalPrice)

        if (count === 9) {
            // alert() use TailwindCss components here(JSX)
            setCount(prevState => prevState -1)
        }
    }

    const removeFood = () => {
        
        setCount(prevState => prevState - 1)
        setNewPrice(newPrice - finalPrice)

        if (count <= 0) {
            // alert() use TailwindCss components here(JSX)
            setCount(0)
        }
    }

    return (
        <div>
            <PriceBox finalPrice={newPrice} />
            <div className="flex justify-center">
                <img className="w-80" src={source} alt="product" />
            </div>
            <div className="flex justify-center gap-4">
                <h3> {name} </h3>
                <span className="text-yellow-500 flex"> {price} <Euro /> </span>
            </div>
            <div className="flex justify-center mt-8">
                <button
                    onClick={addFood}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 text-center inline-flex items-center mr-2">
                <Pluse />
                    {
                        count === 0 ? 'Purchase First' : count + ' Purchase More'
                    }
                </button>
                <button
                    onClick={removeFood}
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 text-center inline-flex items-center mr-2">
                <Minuse />
                    Cancel Purchase
                </button>
            </div>
        </div>
    )
}

export default EachFood
