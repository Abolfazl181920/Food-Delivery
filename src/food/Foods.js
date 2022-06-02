import { useState, useEffect } from 'react'
import Items from 'food/Items'
import BlueFood from './BlueFood'

const Foods = () => {

    const [ foods, setFoods ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState('')

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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        
        const filterFoods = foods.filter(food => food.foodName.toLowerCase().includes(e.target.value.toLowerCase()))

        setFoods(filterFoods)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="search ..."
                onChange={handleSearch}
                value={searchTerm}
                className="flex ml-10 mt-10 border-2 border-gray-300 p-2 rounded-lg focus:border-0"
            />

            {
                foods.length != 0 && foods.map((food, key) => (
                    <>
                        <Items
                            name={food.foodName}
                            img={food.source}
                            price={food.price}
                            key={key.id}
                            id={food.id}
                        />
                    </>
                ))
            }

            <BlueFood />
        </div>
    )
}

export default Foods
