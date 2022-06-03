import { useState } from 'react'
import { Pluse, Minuse } from '../icons/icons'

const EachFood = ({ name, source, price }) => {

    const [ count, setCount ] = useState(0)

    return (
        <div>
            <div className="flex justify-center">
                <img className="w-96" src={source} alt="product" />
            </div>
            <div className="flex justify-center gap-4">
                <h3> {name} </h3>
                <span className="text-yellow-500"> {price}$ </span>
            </div>
            <div className="flex justify-center mt-10">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 text-center inline-flex items-center mr-2">
                <Pluse />
                    Buy First
                </button>
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 text-center inline-flex items-center mr-2">
                <Minuse />
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EachFood
