import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
    return (
        <header>
            <Nav />
            <div className="some w-full bg-center bg-cover h-[32rem]">
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-white uppercase lg:text-3xl">Order food <span className="text-blue-400 underline">Know</span></h1>
                        <Link to='/registration'>
                            <button className="w-full px-4 py-3 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-700 rounded-md lg:w-auto hover:bg-blue-600 focus:outline-none focus:bg-blue-800 shadow-2xl animate-pulse">Start ordering</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
