import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import EachFood from './EachFood'

const FoodDetails = () => {

    const [ data, setData ] = useState()
    const { foodId } = useParams()

    useEffect(() => {
        async function fetchData() {
            const fetchData = await fetch (
                `http://localhost:3002/foods/${foodId}`
            )
            const response = await fetchData.json()
            setData(response)
        }
        fetchData()

    }, [])

    return (
        <>
            <EachFood
                name={data?.foodName}
                source={data?.source}
                price={data?.price}
            />
        </>
    )
}

export default FoodDetails
