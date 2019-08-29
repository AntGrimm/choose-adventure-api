import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Meals = props => {
  const [actualRecipe, setActualRecipe] = useState([])
  const [mealSearchTerm, setMealSearchTerm] = useState(props.match.params.meals)

  const fetchDataMeals = async () => {
    const resp = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearchTerm}`
    )
    console.log(resp.data)
    setActualRecipe(resp.data.meals)
  }

  useEffect(() => {
    fetchDataMeals()
  }, [])

  return (
    <>
      <main>
        <section>
          <ul className="meal-list">
            {actualRecipe.map((item, i) => {
              return (
                <li className="actual-meal" key={i}>
                  {/* <img
                    className="meal-image"
                    src={item.strMealThumb}
                    alt="Actual Meal Thumbnails"
                    value={mealSearchTerm}
                  /> */}
                  <p className="meal-text"> {item.strInstructions}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Meals
