import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel"; 
import SearchBar from "./Components/SearchBar";
import PremierLeague from "./Components/PremierLeague";
import { Route, Routes } from "react-router-dom";

function App() {
  const imagesHome = [
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0fa8f784e8bcfb2b/62f492bb479be96a6e6b6dd9/League_Cover_La_Liga.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    "https://e0.365dm.com/20/05/2048x1152/skysports-premier-league-return_5000805.jpg?20200528144054",
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt057868eb47d891ea/62f4da0add55ae10995228b9/League_Cover_Bundesliga.jpeg?auto=webp&format=pjpg&width=1200&quality=60",
    "https://media.squawka.com/images/en/2021/04/09125843/1199117_1199117_feature_header-%E2%80%93-fixture-1.png",
    "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w1920-q80/marquee/1047317/saitl_us_2023_sp_hero_landscape_2880x1620.jpg",
  ];
  const imagesPrem = [
    "https://e0.365dm.com/22/09/2048x1152/skysports-premier-league-promo_5897092.png?20220913083410",
    "https://e0.365dm.com/20/05/2048x1152/skysports-premier-league-return_5000805.jpg?20200528144054",
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt202a22b1f0b61eb9/61c493983a65c33ff461ccc4/Premier_League_Team_of_the_Season_so_far_GFX.jpg?auto=webp&format=pjpg&width=1200&quality=60",
  ];

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Carousel images={imagesHome} />
              <SearchBar />
            </div>
          }
        />
        <Route path="/about" element={<h1>SOBRE NOSOTROS</h1>} />
        <Route path="/contact" element={<h1>Contactanos</h1>} />
        <Route
          path="/PremierLeague"
          element={
            <div>
              <Carousel images={imagesPrem} />
              <PremierLeague />
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
