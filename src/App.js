import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact.js";
import About from "./Components/about.js";
import Carousel from "./Components/Carousel";
import PremierLeague from "./Components/PremierLeague";
import LaLiga from "./Components/LaLiga";
import Ligue1 from "./Components/Ligue1";
import SerieA from "./Components/SerieA";
import Bundesliga from "./Components/Bundesliga";
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

  const imagesBundesliga = [
    "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0810%2Fsoc_bundesliga%2Dv2_16x9.jpg&w=1140&cquality=40&format=jpg",
    "https://media.dfl.de/sites/3/2018/02/BL_Teaser_BL-Logo_Pitch_HD.jpg",
    "https://e0.365dm.com/23/08/2048x1152/skysports-bundesliga-preview_6252553.jpg?20230816123342",
  ];

  const imagesSeriaA = [
    "https://wwwimage-us.pplusstatic.com/base/files/seo/saitl_social_1200x627_3.jpg",
    "https://www.sportsadda.com/static-assets/waf-images/d3/d4/98/16-9/634hsXlhS5.jpg?v=1.6&w=1000",
  ];

  const imagesLaLiga = [
    "https://1000marcas.net/wp-content/uploads/2020/03/Spanish-La-Liga-logo.png",
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0fa8f784e8bcfb2b/62f492bb479be96a6e6b6dd9/League_Cover_La_Liga.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    "https://s.france24.com/media/display/4873aa64-f2a3-11ed-a482-005056bf30b7/w:980/p:16x9/AP23134771763157.jpg",
  ];
  const imagesLigue1 = [
    "https://www.scisports.com/wp-content/uploads/2021/09/NeedForSpeed-SciSports-Edition-header-Ligue1-1280x720.jpg",
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt718e425bed50870e/626479469b4e3056e414b24e/PSG_Lens_Ligue_1_celebration_2021-22.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-04/Lionel%20Messi%20PSG%20Ligue%201%20trophy%20split%20042022.png?itok=iggOHnAx",
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
            </div>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/PremierLeague"
          element={
            <div>
              <Carousel images={imagesPrem} />
              <PremierLeague />
            </div>
          }
        />
        <Route
          path="/LaLiga"
          element={
            <div>
              <Carousel images={imagesLaLiga} />
              <LaLiga />
            </div>
          }
        />
        <Route
          path="/Ligue1"
          element={
            <div>
              <Carousel images={imagesLigue1} />
              <Ligue1 />
            </div>
          }
        />
        <Route
          path="/SerieA"
          element={
            <div>
              <Carousel images={imagesSeriaA} />
              <SerieA />
            </div>
          }
        />
        <Route
          path="/Bundesliga"
          element={
            <div>
              <Carousel images={imagesBundesliga} />
              <Bundesliga />
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
