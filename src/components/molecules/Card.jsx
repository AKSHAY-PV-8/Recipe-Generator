import { useNavigate } from "react-router";
import HeartIcon from "../../assets/HeartIcon";
import { PillsList } from "./PillsList";
import ArrowIcon from "../../assets/ArrowIcon";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
export function Card(
  {
    recipe,
    onSelected
  }
) {

  
  const favorites = JSON.parse(localStorage.getItem("recipe"));
  const [selected, setSelected] = useState(favorites);

  const navigate = useNavigate();


  function handleAddFavorite(e, selectedRecipe) {
    e.stopPropagation();
    let localStoredRecipes = JSON.parse(localStorage.getItem("recipe")) || [];

    if (localStoredRecipes.some(item => item?.strMeal === selectedRecipe?.strMeal)) {
      const recipesAfterRemoved = localStoredRecipes?.filter(item => item?.strMeal !== selectedRecipe?.strMeal)
      localStoredRecipes = recipesAfterRemoved;
      toast(`${selectedRecipe?.strMeal} Removed From Favorites`,
        {
          icon: '💨',
          style: {
            borderRadius: '40px',
            background: 'black',
            color: 'white',
          },
        }
      );
    } else {
      localStoredRecipes.push(selectedRecipe);
      toast(`${selectedRecipe?.strMeal} Successfully added!`,
        {
          icon: '👏',
          style: {
            borderRadius: '40px',
            background: 'black',
            color: '#fff',
          },
        }
      );
    }

    onSelected?.(localStoredRecipes);
    setSelected(localStoredRecipes);
    localStorage.setItem("recipe", JSON.stringify(localStoredRecipes));

  }



  return (
    <div className="rounded-2xl relative overflow-hidden shadow-2xl">

      <div className="">
        <div className="absolute right-3 top-3 shadow-2xl z-1 hover:scale-155"
          onClick={(e) => handleAddFavorite(e, recipe)}>
          <HeartIcon color={selected?.some(favoriteItem => favoriteItem?.strMeal === recipe?.strMeal) ? "red" : "black"} />
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>

      <div className="relative">
        <p className="absolute bottom-2 left-2 bg-gray-500 border text-white rounded-4xl px-4">{recipe.strArea}</p>
        <img src={recipe?.strMealThumb} alt="" className="overflow-hidden" />
      </div>

      <div className="m-5 ">
        <div className="bg-gray-100 text-green-950 rounded-4xl px-4 w-32 text-center text-[14px] shadow-2xl">{recipe.strCategory}</div>
        <div className="text-2xl font-bold m-3 italic font-serif ">{recipe?.strMeal}</div>
      </div>

      <hr className="text-[#e8ddd2] mx-6" />
      <PillsList recipe={recipe} />

      <div className="px-3 bg-[#c84b2f] text-white  m-4 font-semibold rounded-4xl cursor-pointer hover:bg-black hover:scale-105 flex justify-center items-center py-2 hover:"
        onClick={() => navigate(`/details/${recipe?.strMeal}`)}>
        <button className="mx-3 cursor-pointer">View Full Recipe</button>
        <ArrowIcon color={"rgb(255, 255, 255)"} />
      </div>

    </div>
  )

}