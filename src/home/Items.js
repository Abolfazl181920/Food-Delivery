import { Link } from 'react-router-dom'

const Items = () => {
    return (
        <div className="-mx-4 lg:flex lg:items-center">
            <Link to="/test1" className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Test1</Link>
        </div>
    )
}

export default Items
