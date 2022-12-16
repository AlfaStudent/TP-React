import  { useEffect,useState} from  "react" ;
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AllMeals from "./AllMeals";
import Header from "./Header"
import Footer from "./Footer"

const Home = () => {
    const  [mealData ,  setMealData]  =  useState(null) ;

    useEffect (()  =>  {
        (async ()  =>  {
            const  mealResponse  = await fetch("https://www.themealdb.com/api/json/v1/1/random.php") ;
            const  mealsResponseData  =  await mealResponse.json() ;
            setMealData(mealsResponseData.meals[0]) ;
        })() ;
    },[])
    
    return (
        <>
            {mealData && (
                <div>
                    <h1> {mealData.strMeal} </h1>
                    <a href = "/recettes"> Voir Plus </a> 
                </div>
            )}
        </>
    )
}
export default Home