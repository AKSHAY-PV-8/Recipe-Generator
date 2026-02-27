import { axiosInstance } from "./axios";

export async function fetchRecipes(search){
    try {
        const response =  await axiosInstance.get(`/search.php?s=${search}`);
        return response.data.meals
    }
    catch (e) {
        console.log(e);
        return e.message;
    }
}



