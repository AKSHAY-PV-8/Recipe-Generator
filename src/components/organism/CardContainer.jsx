import { Card } from '../molecules/Card';
import { RotatingLines } from "react-loader-spinner";
import Footer from './Footer';

const CardContainer = (
    {
        isLoading,
        recipes = [],
    }
) => {

    return (
        <article>
            <div>{isLoading ?
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
                <div>
                    <div className="lg:grid-cols-3 md:grid md:grid-cols-3 xl:grid-cols-4 sm:grid sm:grid-cols-2 grid grid-cols-1 gap-6 mx-5 my-8">
                        {recipes?.map(recipe =>
                            <Card recipe={recipe} key={recipe?.idMeal} />
                        )}
                    </div>
                    <Footer />
                </div>
            }</div>

        </article>
    )
}

export default CardContainer
