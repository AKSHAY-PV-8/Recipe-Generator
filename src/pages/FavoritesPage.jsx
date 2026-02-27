import { useState } from "react";
import { Card } from "../components/molecules/Card";

const FavoritesPage = () => {

  const localStoredFavoriteRecipes = JSON.parse(localStorage.getItem("recipe"));
  const [favoriteRecipes, setFavoriteRecipes] = useState(localStoredFavoriteRecipes);
  

  function handleOnClickFavorites(recipes) {
    setFavoriteRecipes(recipes);
  }

  if (favoriteRecipes.length == 0) return (
    <>
      <h2 className="text-3xl font-bold p-6 font-serif">Favorites</h2>
      <p className="p-6 text-gray-600">Favorites Section is empty</p>
    </>
  )

  return (
    <main>

      <h2 className="text-3xl font-bold p-6 font-serif">Favorites</h2>
      <div className="lg:grid-cols-3 md:grid md:grid-cols-3 xl:grid-cols-4 sm:grid sm:grid-cols-2 grid grid-cols-1 gap-6 mx-5 my-8">
        {
          favoriteRecipes.map(recipe =>
            <Card recipe={recipe}
              onSelected={handleOnClickFavorites}
              key={recipe.idMeal}
            />
          )
        }
      </div>

    </main>
  )
}

export default FavoritesPage

