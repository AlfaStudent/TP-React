import MealDetails from "./MealDetails"
import  {useEffect,useState} from  "react" ;
import { Link } from "react-router-dom";
const AllMeals = () => {
    const  [mealData ,  setMealData]  =  useState([]) ;

    useEffect (()  =>  {
        (async ()  =>  {
            const  mealResponse  = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=") ;
            const  mealsResponseData  =  await mealResponse.json() ;
            setMealData(mealsResponseData.meals) ;
        })() ;
    },[])
    return (
        <div>
            {mealData.map((meal)  =>  {
                return  (
                    <div>
                        <h2><Link to={"/recettes/" + meal.idMeal}>{meal.strMeal}</Link></h2 >
                    </div>
                )
            })}

        </div>
       
            
    )
}
export default AllMeals