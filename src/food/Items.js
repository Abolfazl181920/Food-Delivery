const Items = ({ name, type, price }) => {
    return (
        <div className="h-72 w-full bg-gray-500">
            <h4> {name} </h4>
            <span> {type} </span>
            <img src={img} alt="food-img" />
            <span> {price} </span>
        </div>
    )
}

export default Items
