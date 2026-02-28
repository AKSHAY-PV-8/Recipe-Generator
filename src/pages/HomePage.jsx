import { useEffect, useState } from 'react';
import HeroSection from '../components/organism/HeroSection';
import CardContainer from '../components/organism/CardContainer';
import { fetchRecipes } from '../utils/dataService';
import { useDebounce } from '../hooks/useDebounce';
import Footer from '../components/organism/Footer';

const HomePage = () => {

  const [visibleRecipes, setVisibleRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const searchDebounce = useDebounce(searchText);

  function handleOnSearch(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const fetchedRecipes = await fetchRecipes(searchDebounce);
      if(fetchedRecipes === Error) setError(true);
      fetchedRecipes != undefined ? setVisibleRecipes(fetchedRecipes) : "";
      setIsLoading(false);
    })()
  },[searchDebounce]);



  return (
    <main>
      <HeroSection onSearch={handleOnSearch} />
      <CardContainer isLoading={isLoading} recipes={visibleRecipes} isError={isError}/>

    </main>
  )
}

export default HomePage
