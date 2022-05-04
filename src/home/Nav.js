import Brand from './Brand'
import Items from './Items'
import Mobile from './Mobile'

const Nav = () => {
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Brand />
                        <Mobile />
                    </div>
                <Items />
                </div>
            </div>
        </nav>
    )
}

export default Nav
