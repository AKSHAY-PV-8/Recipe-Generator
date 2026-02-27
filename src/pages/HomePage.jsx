import { useEffect, useState } from 'react';
import HeroSection from '../components/organism/HeroSection';
import CardContainer from '../components/organism/CardContainer';
import { fetchRecipes } from '../utils/dataService';
import { useDebounce } from '../hooks/useDebounce';
import Footer from '../components/organism/Footer';

const HomePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchDebounce = useDebounce(searchText);

  function handleOnSearch(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const recipes = await fetchRecipes(searchDebounce);
      recipes != undefined ? setRecipes(recipes) : "";

      setIsLoading(false);
    })()
  },[searchDebounce]);


  return (
    <main>
      <HeroSection onSearch={handleOnSearch} />
      <CardContainer isLoading={isLoading} recipes={recipes} />

    </main>
  )
}

export default HomePage
