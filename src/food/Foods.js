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
            />

            {
                foods && foods.map(food => <Items />)
            }

            <BlueFood />
        </div>
    )
}

export default Foods
