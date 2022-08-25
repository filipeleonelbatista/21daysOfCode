import React from 'react';
import './App.css';

import ExplodingHead from "./assets/ExplodingHead.png";
import HeartSuit from "./assets/HeartSuit.png";
import NerdFace from "./assets/NerdFace.png";
import PartyingFace from "./assets/PartyingFace.png";
import SmilingFaceWithHearts from "./assets/SmilingFaceWithHearts.png";
import Sparkles from "./assets/Sparkles.png";
import SpilingFaceWithSunglasses from "./assets/SpilingFaceWithSunglasses.png";
import ZanyFace from "./assets/ZanyFace.png";

function App() {

  function mouseMoveParallaxEffect(event: React.MouseEventHandler<HTMLDivElement>) {
    let allImages = document.querySelectorAll('.parallaxEffect');

    allImages.forEach((image) => {

      let XAxisMovement = (event.clientX * image.getAttribute('data-movment')) / 230;
      let YAxisMovement = (event.clientY * image.getAttribute('data-movment')) / 220;

      image.style.transform = `translate(${XAxisMovement}px, ${YAxisMovement}px)`;
    })


    let titleAndParagraph = document.querySelectorAll('.TitleAndParagraph');
    titleAndParagraph.forEach((element) => {

      let XAxisMovement = (event.clientX * element.getAttribute('data-movment')) / 270;
      let YAxisMovement = (event.clientY * element.getAttribute('data-movment')) / 290;

      element.style.transform = `translate(${XAxisMovement}px, ${YAxisMovement}px)`;
  })

  }

  return (
    <div onMouseMoveCapture={mouseMoveParallaxEffect}>
      <article>
        <h1 className="TitleAndParagraph" data-movment="8">Olá mundo!</h1>
        <p className="TitleAndParagraph" data-movment="4">Desenvolvido em React JS <br /> com <span title="amor">❤️</span> por {" "}
          <a href="http://linkedin.com/in/filipeleonelbatista" target="_blank" rel="noopener noreferrer">
            Filipe Batista
          </a>.
        </p>
      </article>

      <img data-movment="-9" className="parallaxEffect" src={SmilingFaceWithHearts} alt="Emoji Smiling Face With Hearts" id="SmilingFaceWithHearts" />
      <img data-movment="2" className="parallaxEffect" src={PartyingFace} alt="Emoji Partying Face" id="PartyingFace" />
      <img data-movment="8" className="parallaxEffect" src={Sparkles} alt="Emoji Sparkles" id="Sparkles" />
      <img data-movment="-6" className="parallaxEffect" src={SpilingFaceWithSunglasses} alt="Emoji Spiling Face With Sunglasses" id="SpilingFaceWithSunglasses" />
      <img data-movment="4" className="parallaxEffect" src={ZanyFace} alt="Emoji Zany Face" id="ZanyFace" />
      <img data-movment="10" className="parallaxEffect" src={HeartSuit} alt="Emoji Heart Suit" id="HeartSuit" />
      <img data-movment="-2" className="parallaxEffect" src={ExplodingHead} alt="Emoji Exploding Head" id="ExplodingHead" />
      <img data-movment="5" className="parallaxEffect" src={NerdFace} alt="Emoji Nerd Face" id="NerdFace" />

    </div>
  )
}

export default App
