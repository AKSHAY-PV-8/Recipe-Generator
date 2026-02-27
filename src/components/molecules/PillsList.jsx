import Pills from "../atoms/Pills";

export function PillsList({
  recipe
}) {

  const ingredients = [];
  const limit = 4;
  let id = 0;
 
  

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    if (ingredient !== "" && ingredient) {
      ingredients.push(ingredient);
    }
  }

  return (
    <div className="h-20">
      <div className="flex flex-wrap p-3 ">
        {ingredients.slice(0, 4).map(item => (
          <Pills title={item}
          style={"bg-[#fdf6ee] border-[#e8ddd2] text-[#7c6254]"} key={id++}/>
        ))}

        {ingredients.length - limit != 0?
          <div className="m-1 bg-[#fdf6ee] border-[#e8ddd2] border rounded-2xl text-[#cd5c43] text-center text-[13px] shadow-2xl font-medium">
            +{ingredients.length - limit} More
          </div> : ""}

      </div>
    </div>

  )
}
