import React, { useState, useEffect } from 'react';
import Majima from '../Images/majima.jpg';
import Rude from '../Images/rude.jpg';
import Vergil from '../Images/vergil.jpg';

const Instructors = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      // wrap back to the first
      if (newIndex > 3) { 
        newIndex = 1; 
      }
      // wrap back to the last
      if (newIndex < 1) { 
        newIndex = 3; 
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
  };

  return (
    <div className='slides-container'>
      <h2 className='writing-inst'>Meet our Instructors</h2>
      
     <div>
          <div className="mySlides">
            <img src={Majima} alt="Majima" className='instructor-img'  />
            <h4 className='text-blue-400'>Goro Majima</h4>
            <p className='inst-info'>
            Goro Majima, the man who once roamed the streets of Kamurocho has traded in his 
                snakeskin suit for a pair of roller skates. Yes, thats right. He's now the most feared 
                and sleek roller skate 
                    instructor in town! (don't tell that to our other instructors!)
            </p>
          </div>
          <div className="mySlides">
            <img src={Rude} alt="Rude" className='instructor-img '/>
            <h4 className='text-blue-400'>Rude</h4>
            <p className='inst-info'>
            When he's not busy blowing things up with his partner, Reno, Rude spends his weekends 
                teaching the joys of roller skating. You'd think a guy who used to work for Shinra would be 
                more into, say, blowing up roller 
                    rinks, but Rude's got a surprising passion 
                for teaching the "Turks two-Slide" – a move that involves a lot of explosive starts 
                and sudden stops. 

            </p>
          </div>
          <div className="mySlides">
            <img src={Vergil} alt="Vergil" className='instructor-img'/>
            <h4 className='text-blue-400'>Vergil</h4>
            <p className='inst-info'>
            After long years of fighting demons in the underworld and endless battles with his brother 
                Dante, Virgil took it upon himself to add some balance to his life, and that was to develop 
                a passion for skating.
                    With his background in fighting, he is always ready to unleash his 
                    inner demon... in the roller rink of course! 
            </p>
          </div>
          

          <button className='nav-btns' id='back-btn' onClick={() => plusSlides(-1)}>❮</button>
          <button className='nav-btns' id='for-btn' onClick={() => plusSlides(1)}>❯</button>

          <div>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
          </div>
          </div>
    </div>
  );
};

export default Instructors;