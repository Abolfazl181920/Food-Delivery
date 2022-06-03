import { Pluse, Minuse } from '../icons/icons'

const EachFood = ({ id, name, source, price }) => {
    return (
        <>
            <div className="flex justify-center">
                <img className="w-96" src={source} alt="product" />
            </div>
            <div className="flex justify-center">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2 text-center inline-flex items-center mr-2">
                <Pluse />
                    Add
                </button>
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-4 py-2 text-center inline-flex items-center mr-2">
                <Minuse />
                    Minuse
                </button>
            </div>
        </>
    )
}

export default EachFood
