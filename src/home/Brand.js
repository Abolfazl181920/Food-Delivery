import { Link } from 'react-router-dom'

const Brand = () => {
    return (
        <div className="text-xl font-semibold text-gray-700">
            <Link to='/' className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-blue-500 dark:hover:text-gray-300" href="/">FoodDelivery</Link>
        </div>
    )
}

export default Brand
