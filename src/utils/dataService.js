import { axiosInstance } from "./axios";

export async function fetchRecipes(search){
    try {
        const response =  await axiosInstance.get(`/search.php?s=${search}`);
        if(response.data.meals == null) {
            return []
        }else{
            return response?.data?.meals
        }
    }
    catch (e) {
        console.log(e.message);
        return Error;
    }
}



