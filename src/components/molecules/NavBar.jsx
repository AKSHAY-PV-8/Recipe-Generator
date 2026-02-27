import { useNavigate } from "react-router"
import heartIcon from "../../../public/white-heart-svgrepo-com.svg"

const NavBar = () => {

    let navigate = useNavigate();

    function handleNavigateToHome(e){
        e.stopPropagation();
        navigate("/");
    }

    function handleNavigateToFavorites(){
        navigate("/favorites");
    }

    return (
        <nav className="bg-[#ece6dd] flex justify-between items-center px-2 shadow-xl/20 sticky top-0 z-100">
            <div className="lg:pl-20 text-2xl cursor-pointer" onClick={handleNavigateToHome}>
                <span className="text-[#1e1e1e] font-extrabold font-serif">Food</span>
                <span className="text-[#c84b2f] font-bold italic font-serif"> Court</span>
            </div>

            <div className="flex px-3  bg-black text-white  m-4 
            rounded-2xl justify-between items-center hover:bg-[#c84b2f] hover:scale-105 cursor-pointer
            lg:mr-30 lg:px-5">
                <img src={heartIcon} alt="" className="w-4 px-1" />
                <button className="text-[12px] py-2 px-2 cursor-pointer" onClick={handleNavigateToFavorites}>Favorites</button>
            </div>
        </nav>
    )
}

export default NavBar
