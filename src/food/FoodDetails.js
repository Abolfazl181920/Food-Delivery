import { useParams } from 'react-router-dom'

const FoodDetails = () => {

    const foodId = useParams()

    return (
        <div>
            This is FoodDetails for each foods ... : {JSON.stringify(foodId)}
        </div>
    )
}

export default FoodDetails
