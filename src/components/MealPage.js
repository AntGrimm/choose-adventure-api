import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MealPage = () => {
  const [recipeCategory, setRecipeCategory] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    )
    console.log(resp.data)
    setRecipeCategory(resp.data.categories)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {/* Making a recipes site */}
      <main>
        <section>
          {/* Top bar will have food categories and pictures, will be a button to that list of meals */}
          {/* Clicking on category will take to a list of recipes in that category */}
          <ul className="category-list">
            {recipeCategory.map((item, i) => {
              return (
                <li className="category-specific" key={i}>
                  {item.strCategory}
                  <img
                    className="category-image"
                    src={item.strCategoryThumb}
                    alt="Recipe Category Thumbnails"
                  />
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default MealPage
