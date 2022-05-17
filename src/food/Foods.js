import { useState, useEffect } from 'react'
import Items from 'food/Items'

const Foods = () => {

    const [ foods, setFoods ] = useState([])

    const fetchData = () => {
        fetch('http://localhost:3001/foods')

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
                            type={item.foodType}
                            price={item.price}
                            img={item.source}
                        />
                    )
                })
            }
        </div>
    )
}

export default Foods
