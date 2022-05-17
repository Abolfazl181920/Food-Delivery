import { useState, useEffect } from 'react'
import Items from 'food/Items'
import BlueFood from './BlueFood'

const Foods = () => {

    const [ foods, setFoods ] = useState([])

    const fetchData = () => {
        fetch('http://localhost:3003/foods')

        .then(function(response) {
            return response.json()
        })
        
        .then(function(myJson) {
            setFoods(myJson)
        })
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {
                foods.map((item, key) => {
                    return(
                        <Items
                            key={key}
                            name={item.foodName}
                            price={item.price}
                            img={item.source}
                        />
                    )
                })
            }
            <BlueFood />
        </div>
    )
}

export default Foods
