import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FoodDetails = () => {

    const [ data, setData ] = useState()
    const { foodId } = useParams()

    useEffect(() => {
        async function fetchData() {
            const fetchData = await fetch (
                `http://localhost:3003/foods/${foodId}`
            )
            const response = await fetchData.json()
            setData(response)
        }
        fetchData()

    }, [ data ])

    return (
        <div>
            {/* This is {JSON.stringify(data)} */}
        </div>
    )
}

export default FoodDetails
