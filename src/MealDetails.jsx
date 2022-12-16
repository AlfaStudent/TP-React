import  { useEffect,useState} from  "react" ;
import { useParams } from "react-router-dom";



const MealDetails = () => {
    const { id } = useParams();
    const  [mealData ,  setMealData]  =  useState({}) ;

    useEffect (()  =>  {
        (async ()  =>  {
            const  mealResponse  = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`) ;
            const  mealsResponseData  =  await mealResponse.json() ;
            setMealData(mealsResponseData.meals[0]) ;
        })() ;
    },[id])
    return (
        <>
            <main>
                <h1> Voici les details de la recette </h1>
                {mealData && (
                    <div>
                        <h1>{mealData.strMeal}</h1>
                        <img src={mealData.strMealThumb} alt={mealData.strMeal}/>
                        <h2> {mealData.strInstructions}</h2>
                    </div>
                )}
            </main>
        

        </>

    )
}
export default MealDetails;