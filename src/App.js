import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeals from "./AllMeals";
import Home from "./Home";
import MealDetails from "./MealDetails"
import Footer from "./Footer"



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recettes" element={<AllMeals />} />
                    <Route path="/recettes/:id" element={<MealDetails/>} />
                </Routes>
      </BrowserRouter>
      <Footer/>
      
      
      
    
    </div>
  );
}

export default App;
