import { Card } from '../molecules/Card';
import { RotatingLines } from "react-loader-spinner";
import Footer from './Footer';

const CardContainer = (
    {
        isLoading,
        recipes = [],
        isError
    }


) => {

    

    if (isLoading) return (
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
        </div>
    );

    if(isError ) return <p className='text-4xl font-serif font-bold flex justify-center my-20'>Network Error</p>
    if (recipes.length === 0) return <p className='text-4xl font-serif font-bold flex justify-center my-20'>Result not found</p>

    return (
        <article>
            <div>
                <div className="lg:grid-cols-3 md:grid md:grid-cols-3 xl:grid-cols-4 sm:grid sm:grid-cols-2 grid grid-cols-1 gap-6 mx-5 my-8">
                    {recipes?.map(recipe =>
                        <Card recipe={recipe} key={recipe?.idMeal} />
                    )}
                </div>
                <Footer />
            </div>
        </article>
    )
}

export default CardContainer
