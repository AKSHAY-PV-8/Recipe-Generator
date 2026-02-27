
export function MethodsToMakeRecipe(
  {
    recipe
  }
) {
  
  const stepsToMakeRecipe = recipe?.strInstructions?.split("\r\n").filter(item => item !== "" && item.length > 10);
  let id = 0;

  return (
      <div className="ml-8">
        {stepsToMakeRecipe?.map((step, index) => (
          <div className="flex my-8" key={id++}>
            <div className="bg-[#c84b2f] text-white font-serif text-[18px] w-11 h-11 rounded-full flex  justify-center items-center mr-10">
              {index + 1}
            </div>
            <div className="w-fit mr-4">
              {step}
            </div>
          </div>
        ))}
      </div>
  )

}