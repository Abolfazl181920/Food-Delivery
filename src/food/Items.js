import { Link } from 'react-router-dom'

const Items = ({ name, img, price }) => {
    return (
       <div className="inline-block">
            <div className="p-2 mt-10 mobile:ml-14 mobile:mt-4 items-center justify-center flex flex-wrap">
                <div className="bg-white h-80 w-60 tablet:-ml-8 rounded-lg shadow_css">
                    <img src={img} alt="food-img" className="rounded-t-lg h-52 w-full cursor-pointer" />
                    <div className="p-7">
                        <h2 className="font-semibold mb-3 text-xl text-blue-800"> {name} </h2>
                        <Link to="/" className="text-blue-500 italic hover:text-yellow-500 text-sm">Go Recipe 👉</Link>
                        <span className="ml-16 text-sm text-yellow-500"> {price}$ </span>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Items