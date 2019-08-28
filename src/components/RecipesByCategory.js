import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RecipesByCategory = props => {
  const [recipeMeal, setRecipeMeal] = useState([])
  const [recipeSearchTerm, setRecipeSearchTerm] = useState(
    props.match.params.category
  )

  const fetchDataRecipes = async () => {
    const resp = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipeSearchTerm}`
    )
    console.log(resp.data)
    setRecipeMeal(resp.data.meals)
  }

  useEffect(() => {
    fetchDataRecipes()
  }, [])

  return (
    <>
      <main>
        <section>
          <ul className="recipe-list">
            {recipeMeal.map((item, i) => {
              return (
                <li className="recipe-meal" key={i}>
                  <img
                    className="recipe-image"
                    src={item.strMealThumb}
                    alt="Recipe Meal Thumbnails"
                    value={recipeSearchTerm}
                  />
                  <p className="recipe-text"> {item.strMeal}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default RecipesByCategory
