import Pills from "../atoms/Pills";


export function Ingredients({
  recipe
}){

  const ingredients = [];
  let id = 0;
  
  for (let i = 1; i <= 20; i++) {
    let ingredient = recipe[`strIngredient${i}`];
    let ingredientCount = recipe[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({ item: ingredient, count: ingredientCount });
    }
  }

  return(
    <div className="lg:m-20">
        <div className="bg-[#1e1e1e] text-white rounded-2xl m-4 p-4">
          <p className="text-[#e26e38] text-[10px] font-medium pt-3">WHAT YOU'LL NEED</p>
          <h2 className="text-3xl font-serif my-5">Ingredient</h2>

          {ingredients.map(item => (
            <div key={id++}>
              <div className="flex justify-between py-3">
                <div className="text-[16px] text-[#ddddc5]">{item.item}</div>
                <Pills title={item.count} style={"text-[#bb6927] bg-[#432d20] border-[#1e1e1e]"}/>
              </div>
              <hr className="text-[#303030]" />
            </div>
          ))}
        </div>
      </div>
  )
}
