import NavBar from "./components/molecules/NavBar"
import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import FavoritesPage from "./pages/FavoritesPage"
import { Toaster } from "react-hot-toast"

function App() {

  return (

    <div>
      <BrowserRouter>
      <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:recipe" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App

