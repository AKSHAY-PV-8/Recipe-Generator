
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import YoutubeIcon from "../assets/YoutubeIcon";
import { fetchRecipes } from "../utils/dataService";
import { Ingredients } from "../components/molecules/Ingredients";
import { MethodsToMakeRecipe } from "../components/molecules/MethodsToMakeRecipe";
import { Heading } from "../components/molecules/Heading";
import Footer from "../components/organism/Footer";
import { RotatingLines } from "react-loader-spinner";


const RecipeDetailPage = () => {

  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const recipe = params.recipe;

  useEffect(() => {

    (async function () {
      setIsLoading(true);

      const response = await fetchRecipes(recipe);
      setDetails(response?.[0]);

      setIsLoading(false);
    })();

  }, [recipe]);

  return (
    <>
      {isLoading ?
        <div className='flex justify-center mt-10'>
          <RotatingLines
            visible={true}
            height="60"
            width="60"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div> :
        <main>
          <div className="bg-[#ece6dd] pb-20">
            <article className="flex flex-col lg:flex-row pb-4 md:flex-row">

              <img src={details?.strMealThumb} alt="" className="border-b-4 border-[#c84b2f] sm:h-122.5 " />
              <div className="pl-10 lg:pl-20  bg-white w-full">

                <div className="mt-6">
                  <span className="bg-[#2d4a2d] text-white border-[#2d4a2d] text-[14px] font-medium 
                m-1 border rounded-2xl text-center shadow-2xl px-1 text-ellipsis ">{details.strCategory}</span>
                  <span className="bg-[white] text-[#c84b2f] border-[#c84b2f] text-[14px] font-medium 
                m-1 border rounded-2xl text-center shadow-2xl px-1 text-ellipsis ">{details.strArea}</span>
                </div>

                <div className="relative mt-10">
                  <Heading recipeName={details.strMeal} />

                  <div className="my-10 mr-4 text-[#cec1b6] ">
                    A {details.strArea} classic - {details.strMeal} is a good
                    {" " + details.strCategory} food and it is very unapologetically spicy, and deeply satisfying
                  </div>

                  <hr className="text-[#cec1b6] mr-10 mb-10 lg:mt-30" />

                  <span className="mb-10 px-8 bg-[#c84b2f] cursor-pointer text-white rounded-4xl text-[12px] hover:bg-black hover:scale-105 font-bold flex justify-center items-center w-fit">
                    <YoutubeIcon />
                    <a href={details?.strYoutube}
                      className="">Watch Recipe Video</a>
                  </span>
                </div>
              </div>
            </article>

            <article className=" mt-5 lg:grid lg:grid-cols-2 ">
              <div className=" flex flex-col justify-center items-center">
                <p className="text-[10px] font-normal text-[#c84b2f] ml-4">METHOD</p>
                <h2 className="text-[25px] font-bold my-4 ml-4">HOW TO MAKE:</h2>
                <MethodsToMakeRecipe recipe={details} />
              </div>

              <Ingredients recipe={details} />

            </article>
          </div>
          <Footer />
        </main>}


    </>
  )
}

export default RecipeDetailPage







