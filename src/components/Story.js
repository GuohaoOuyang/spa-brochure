import React, { useEffect } from 'react';
import './Story.scss';
import top1  from './utils/images/ekko.jpeg';
import bot1  from './utils/images/ekkobot.jpeg';
import left1  from './utils/images/Ekko_left.jpeg';
import top2  from './utils/images/kaisatop.jpeg';
import bot2  from './utils/images/KaisaD.png';
import left2  from './utils/images/kaisaleft.png';
import top3  from './utils/images/jihntop.png';
import bot3  from './utils/images/jhinbot.png';
import left3  from './utils/images/Jhin.png';
// import rainbow  from './utils/images/rainbow.png';
import rightCloud  from './utils/images/rightCloud.png';
import cait  from './utils/images/JinxSquare.png';
import sett  from './utils/images/LilliaSquare.png';
import t  from './utils/images/XayahSquare.png';
import f  from './utils/images/SylasSquare.png';
import lottie from 'lottie-web';
import gear  from './utils/animation/47-gears.json';



export function Story() {

    useEffect(() => {


        var index = 1;
      
        var timerU =null;

        var timerD = null;

        var timerM = null;

        const imagesA = document.getElementsByClassName("ig");
        const imagesB = document.getElementsByClassName("bg");
        const imagesC = document.getElementsByClassName("cg");
        const imagesD = document.getElementsByClassName("dg");
        const titles = document.querySelectorAll(".title");

        // manipulate people slider
        const circle = document.querySelector('.story__talker__box__animation__content__circle');
        const slider = document.querySelector('.peopleSlide');
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');
        const line = document.querySelector('.line');
        const quotes = document.querySelectorAll('.quote')
        const names = document.querySelectorAll('#name');
        let direction = -1;
        var id = 1;

        quotes[0].style.display='block';
        names[0].style.display='flex';

        // line.style.setProperty("--width", "100%");
        lineUpdate();
        function lineUpdate() {
            line.style.setProperty("--width", "100%");
            setTimeout(lineUpdate, 0);
        }

        line.addEventListener('transitionend', function(){
            clearTimeout(timerM)
            clearTimeout(timerD)
            if (direction === 1) {
                direction = -1;
                slider.prepend(slider.lastElementChild);
            }
            circle.style.justifyContent = 'flex-start';
            slider.style.transform = 'translate(-120px)';            

            line.style.setProperty("--transition", "none");
            line.style.setProperty("--width", "0%");
            setTimeout(() => {
                line.style.setProperty("--transition", "width 20s linear");
              })

        })

        // function pplUpdateltr () {
        //     if (direction === 1) {
        //         direction = -1;
        //         slider.prepend(slider.lastElementChild);
        //     }
        //     circle.style.justifyContent = 'flex-start';
        //     slider.style.transform = 'translate(-250px)'; 
        //     timerD = setTimeout (pplUpdateltr, 5000);
        // };

        // timerM = setTimeout (pplUpdateltr, 5000);
    
        next.addEventListener('click', goNext);

        function goNext() {
            // clearTimeout(timerM)
            // clearTimeout(timerD)
            if (direction === 1) {
                direction = -1;
                slider.prepend(slider.lastElementChild);
            }
            circle.style.justifyContent = 'flex-start';
            slider.style.transform = 'translate(-120px)';  
            // timerM = setTimeout(pplUpdateltr, 5000);
        }

        prev.addEventListener('click', function(){
            // clearTimeout(timerD);
            // clearTimeout(timerM);
            if (direction === -1) {
                direction = 1;
                slider.appendChild(slider.firstElementChild);
              }
            circle.style.justifyContent = 'flex-end';    
            slider.style.transform = 'translate(120px)';
            // timerM = setTimeout(pplUpdateltr, 5000)
             
        });

        slider.addEventListener('transitionend', function() {            
            if (direction === 1) {
              slider.prepend(slider.lastElementChild);
              id = slider.lastElementChild.getAttribute('data-order');
            } else {
              slider.appendChild(slider.firstElementChild);
              id = slider.firstElementChild.getAttribute('data-order');
            }          
            slider.style.transition = 'none';
            slider.style.transform = 'translate(0)';
            setTimeout(() => {
              slider.style.transition = 'all 0.5s linear';
            })
            document.getElementById('number').innerText=id;

            // quote update
            var j;
            for (j=0 ; j < quotes.length; j++) {
                quotes[j].style.display = 'none';
                names[j].style.display = 'none';
            } 
            quotes[id-1].style.display = 'block';
            names[id-1].style.display = 'flex';
          });


        // autoplay and manual slider 
        const gearplay = lottie.loadAnimation({
            container: document.querySelector('.gearAnimation'),
            animationData: gear,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            rendererSettings: {
            progressiveLoad: false
            }
        })

        slideUpdate(index);

        function manualSlide (n) {
            clearTimeout(timerU);
            slideUpdate(index = n);
        }

        titles.forEach(title=> {
            title.addEventListener("click", () => {
                var key = title.getAttribute("data-key");
                manualSlide(key);
                title.setAttribute('id', 'titleActive');
            })
        })

        function slideUpdate (n)  {
            var i;
            if (n===undefined) {
                n = ++index;
            }
            if(index > titles.length) {
                index = 1;
            }
            for(i = 0; i < titles.length; i++) {
                imagesA[i].style.opacity="0";
                imagesA[i].style.zindex="0";
                imagesB[i].style.opacity="0";
                imagesB[i].style.zindex="0";
                imagesC[i].style.opacity="0";
                imagesC[i].style.zindex="0";
                imagesD[i].style.opacity="0";
                imagesD[i].style.zindex="0";
                titles[i].removeAttribute('id','titleActive');
            }


            imagesA[index-1].style.opacity="1";
            imagesA[index-1].style.zindex="1";
            imagesB[index-1].style.opacity="1";
            imagesB[index-1].style.zindex="1";
            imagesC[index-1].style.opacity="1";
            imagesC[index-1].style.zindex="1";
            imagesD[index-1].style.opacity="1";
            imagesD[index-1].style.zindex="1";
            titles[index-1].setAttribute('id','titleActive');

            gearplay.play();

            gearplay.onComplete= function() {
                gearplay.stop();
                }

            timerU = setTimeout(slideUpdate, 8000);
        }


        
    },[])



    return (
        <div className="story" id="Story">
            {/* <img src ={rainbow} alt='' className="rainbow" ></img> */}
            <div className="story__title">
                <h4>Story of<br></br><span>Design</span></h4>
                <p>The story of extraordinary story behind the scene, find out more. Be open and always enthusiathm</p>
            </div>
            <div className="story__slider">
                <div className="story__slider__title">
                    <h2 className="title A" data-key="1" >Ekko</h2>
                    <h2 className="title B" data-key="2" >Kaisa</h2>
                    <h2 className="title C" data-key="3" >Jhin</h2>
                </div>
                <div className="story__slider__demo">
                    <div className="bigger_box">
                        <div className="story__slider__demo__left">
                            <img src ={left1} alt='' className="ig ig-A" ></img>
                            <img src ={left2} alt='' className="ig ig-B" ></img>           
                            <img src ={left3} alt='' className="ig ig-C" ></img>
                        </div>
                        <div className="gearAnimation"></div>
                    </div>
                    <div className="anotherbox">
                        <div className="story__slider__demo__top">
                            <img src ={top1} alt='' className="bg bg-A" ></img>
                            <img src ={top2} alt='' className="bg bg-B" ></img>           
                            <img src ={top3} alt='' className="bg bg-C" ></img>
                        </div>
                        <div className="story__slider__demo__bottom">
                            <img src ={bot1} alt='' className="cg cg-A" ></img>
                            <img src ={bot2} alt='' className="cg cg-B" ></img>           
                            <img src ={bot3} alt='' className="cg cg-C" ></img>
                        </div>
                    </div>
                    <div className="story__slider__demo__right">
                        <p className="dg" >I love the champion in the game but the style, the personality of the character and the thing that he can travel in time push me to make a fan art of this amazing champ</p>
                        <p className="dg" >Cancelled champion for League of Legends. Husk was eventually split to create Camille and Kai'Sa. She was intended to be a mercenary from Zaun, the leader of a team called "H.I.V.E",</p>           
                        <p className="dg" >When the murderous artist gets you in his sights, when he catches you off-guard, there's not much that'll save you from an inevitable, perfect death. </p>
                    </div>

                </div>

            </div>
            <div className="story__talker">
                <div className="story__talker__background">
                    <img src ={rightCloud} alt='' className="rbCloud" ></img>
                    <img src ={rightCloud} alt='' className="rsCloud" ></img>
                    <img src ={rightCloud} alt='' className="lbCloud" ></img>
                </div>
                <div className="story__talker__box">
                    <div className="story__talker__box__title">
                        <h4>Chose your<br></br><span>Champion</span></h4>
                        <p>With more than 140 champions, you’ll find the perfect match 
                            for your playstyle. Master one, or master them all.
                        </p>
                    </div>
                    <div className="story__talker__box__animation">
                        <div className="story__talker__box__animation__content">
                            <div id="border-top"></div>
                            <div id="border-top-2"></div>
                            <div className="names">
                                <h2 id="name">Jinx</h2>
                                <h2 id="name">Lillia</h2>
                                <h2 id="name">Xayah</h2>
                                <h2 id="name">Sylas</h2>
                            </div>
                            <div className="story__talker__box__animation__content__circle">
                                <div className="peopleSlide">
                                    <img src ={cait} alt='' className="people" data-order="1"></img>
                                    <img src ={sett} alt='' className="people" data-order="2"></img>
                                    <img src ={t} alt='' className="people" data-order="3"></img>
                                    <img src ={f} alt='' className="people" data-order="4"></img>
                                </div>
                            </div>
                            <div className="story__talker__box__animation__content__quote">
                                <div id="border-left"></div>
                                <p className="quote quoteA">A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences.
                                     With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave 
                                     a trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic 
                                     brand of pandemonium wherever she goes.
                                </p>
                                <p className="quote">
                                Intensely shy, the fae fawn Lillia skittishly wanders Ionia's forests. Hiding just out of sight of mortals—whose mysterious natures 
                                have long captivated, but intimidated, her—Lillia hopes to discover why their dreams no longer reach the ancient Dreaming Tree. She 
                                now travels Ionia with a magical branch in hand, in an effort to find people's unrealized dreams. Only then can Lillia herself bloom 
                                and help others untangle their fears to find the sparkle within. Eep!
                                </p>
                                <p className="quote">
                                Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed,
                                 guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover,
                                  Rakan, to protect their dwindling tribe, and restore their race to her vision of its former glory.
                                </p>
                                <p className="quote">
                                Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the 
                                Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers,
                                 who eventually imprisoned him for turning those same powers against them. Having now broken free, Sylas lives 
                                 as a hardened revolutionary, using the magic of those around him to destroy the kingdom he once served… and 
                                 his band of outcast mage followers seems to grow by the day.
                                </p>

                            </div>
                        </div>
                        <div className="story__talker__box__animation__indicator">
                            <div><h5 id='number'>1</h5><h5>/4</h5></div>
                            <div className="line"></div>
                            <div className="arrows">
                                <i className="material-icons small prev">navigate_before</i>
                                <i className="material-icons small next">navigate_next</i>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    )
}
