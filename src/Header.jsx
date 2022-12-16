import { useState } from "react";

const Header = () => {
    const [mealsData, setMealData] = useState([])

    const handleclick = async (e) =>{
        //cette fonction permet a la page de ne pas se reactualiser , a chaque fois qu'un appuie sur submit
        e.preventDefault();
        const mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.search.value}`)
        const mealRespJson  = await mealResponse.json();

        console.log(mealRespJson);
        setMealData(mealRespJson.meals);
    }

    console.log(mealsData)
    return (
        <>
            <div>
                <form onSubmit={handleclick}> 
                    <input type= "text" name="search" placeholder="Valeur a rechercher" />
                    <button> envoyer </button>
                </form>
            </div>
            <div>
                {mealsData.map((meal) => {
                    return (
                        <h2> {meal.strMeal}</h2>
                    )
                })}
            </div>
        </>
    )
}

export default Header;