const Items = ({ name, type, img, price }) => {
    return (
        <div>
            <h4> {name} </h4>
            <span> {type} </span>
            <img src={img} alt="food-img" />
            <span> {price} </span>
        </div>
    )
}

export default Items