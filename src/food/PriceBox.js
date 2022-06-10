import { Link } from 'react-router-dom'
import { Eye } from '../icons/icons'

const PriceBox = ({ finalPrice }) => {
    return (
        <>
            <div className="p-3 ml-3 mt-3 w-36 bg-blue-100 rounded-xl dark:bg-blue-200" role="alert">
                <div className="mt-1 mb-2 text-sm text-blue-700 dark:text-blue-800">
                    <span> final price is: {finalPrice} </span>
                </div>
                <div className="flex">
                    <Link to="">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900">
                            <Eye />
                            Go To Buy
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PriceBox
