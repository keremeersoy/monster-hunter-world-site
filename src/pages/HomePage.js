import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mhw1 from "../images/mhw1.jpg";
import mhw2 from "../images/mhw2.jpg";
import mhw3 from "../images/mhw3.jpg";

export default function HomePage() {
  return (
    <div className="">
      <div className="flex items-center justify-center bg-gray-200">
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
          <div className="relative">
            <img src={mhw1} className="h-160 object-cover" />
            {/* <p className="legend">Legend 1</p> */}
            <h1 className="absolute left-6 bottom-32 font-bold text-3xl text-black bg-gradient-to-r from-green-500 to-green-100 p-2 rounded-lg">
              Fall Seasonal Events: Seliana Fun Fright Fest & Astera Autumn
              Harvest Fest!
            </h1>
            <p className="absolute left-6 bottom-20 mr-6 rounded-lg font-bold text-left text-white bg-gradient-to-r from-gray-800 to-gray-400 p-2">
              The Astera Autumn Harvest Fest is joined by the new Seliana Fun
              Fright Fest! Visit both Gathering Hubs to experience twice the
              amount of seasonal celebration!
            </p>
          </div>
          <div>
            <img src={mhw2} className="h-160 object-cover" />
            {/* <p className="legend">Legend 2</p> */}
            <h1 className="absolute left-6 bottom-32 font-bold text-3xl text-black bg-gradient-to-r from-green-500 to-green-100 p-2 rounded-lg">
              Slay the Toughest Tempered Monsters Yet: Arch-Tempered Monsters!
            </h1>
            <p className="absolute left-6 bottom-12 mr-6 font-bold rounded-lg text-left text-white bg-gradient-to-r from-gray-800 to-gray-400 p-2">
              What's more dangerous than a tempered monster? Only an
              Arch-tempered monster, of course! Easily identified by their
              metallic sheen and unrivaled ferocity, Arch-tempered monsters are
              a colossal challenge even for experienced hunters. Two new elder
              dragons will soon menace hunters around the world – Kulve Taroth
              and Nergigante!”
            </p>
          </div>
          <div>
            <img src={mhw3} className="h-160 object-cover" />
            {/* <p className="legend">Legend 3</p> */}
            <h1 className="absolute left-6 bottom-32 font-bold text-3xl text-black bg-gradient-to-r from-green-500 to-green-100 p-2 rounded-lg">
              The Nergigante Dynamic Theme for the PS4™ system is now available
              for purchase!
            </h1>
            <p className="absolute left-6 bottom-20 mr-6 font-bold rounded-lg text-left text-white bg-gradient-to-r from-gray-800 to-gray-400 p-2">
              Customize your PS4™ system with the feral beauty of Nergigante!
              Features the Monster Hunter: World main theme "Stars at Our
              Backs."
            </p>
          </div>
        </Carousel>
      </div>
      <div>sad</div>
    </div>
  );
}
