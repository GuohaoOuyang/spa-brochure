import React, { useEffect } from 'react';
import './About.scss';
import rightCloud  from './utils/images/rightCloud.png';
import leftCloud  from './utils/images/leftCloud.png';
import circle  from './utils/images/circle-gradient.svg';
import lottie from 'lottie-web';
import school from './utils/animation/flower.json';
import puzzle from './utils/animation/puzzle-animation.json';
import { numberWithCommas } from './utils/fotmat';

export function About() {

    useEffect (()=> {
        // loading animation
        lottie.loadAnimation({
            container: document.querySelector('.about__animation__school'),
            animationData: school,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            rendererSettings: {
            progressiveLoad: false
            }
        })
        lottie.loadAnimation({
            container: document.querySelector('.about__animation__puzzle'),
            animationData: puzzle,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            rendererSettings: {
            progressiveLoad: false
            }
        })
        lottie.setSpeed(0.2); 

        // animated counter
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        const ac = document.querySelector('#animatedCounter');
        const acPos = ac.offsetTop;


        window.addEventListener('scroll', ()=> {
            let win = window.pageYOffset;
            // console.log(acPos);
            if(acPos-100 <= win) {
                counters.forEach(counter=>{
                    const updateCount = () => {
                      const target = +counter.getAttribute('data-target');
                      const count = +counter.innerText;
        
                      const inc = target / speed;
        
                      if(count < target) {
                        counter.innerText = count + inc;
                        setTimeout(updateCount, 1);
                      } else {
                        counter.innerText = numberWithCommas(target);
                      }
                    }
                    updateCount();
                })
            }
        })

    },[])

    return (
        <>
        <div className="about" id="About">
            <div className="about__animation">
                <div className="about__animation__school" ></div>  
                <img src ={leftCloud} alt='' className='about__animation__leftcloud' ></img>
                <div className="about__animation__puzzle" ></div>  
                <img src ={rightCloud} alt='' className='about__animation__rightcloud' ></img>
                <img src ={circle} alt='' className='about__animation__circle' ></img>
                <img src ={rightCloud} alt='' className='about__animation__rightcloud2' ></img>
            </div>
            <div className="about__content">
                <div className="about__content__dialog">
                    <p>Inova Games was founded in 2006 to develop, publish, and support the most player-focused games in 
                        the world. In 2009, we released our debut title, League of Legends, to worldwide acclaim. League has 
                        gone on to be the most-played PC game in the world and a key driver of the explosive growth of esports. 
                    </p>
                </div>
                <div className="about__content__section1">
                    <h3>Biggest Esport Tournament</h3>
                    <p>The League of Legends World Championships has gained tremendous success and popularity, making it among the 
                        world's most prestigious and watched tournaments, as well as the most watched video game in the world. Due 
                        to its success, esports scenes became prominent and widely seen as a potential Olympics event, already being 
                        included as a medal event in 2022 Asian Games
                    </p>
                </div>
                <div className="about__content__section2">
                    <div className="about__content__section2__title">
                        <h3>Social Impact</h3>
                        <h3>Value</h3>
                    </div>
                    <p>
                    We believe that anyone with passion, vision, and perseverance can make a positive impact. As part of that ethos, 
                    we also believe that there are ways where we, as a company, can provide long-term value and positive impact to the 
                    players, partners, Rioters, and communities we serve. Through corporate social responsibility, we hope to help build
                     a more positive world for the players and our communities. To do this, we focus on creating equal access to education, 
                     skills development, and the promotion of positive citizenship across the world.  
                    </p>
                </div>
            </div>
            <div className="section3" id="animatedCounter">    
                <h4>Dare to<br></br><div id="dream">Dream and Thrive</div></h4>
                <div className="section3__box">
                    <div>
                        <h4 className="counter" data-target="1000">0</h4>
                        <h5>Skins</h5>
                    </div>
                    <div>
                        <h4 className="counter" data-target="5000">0</h4>
                        <h5>Items</h5>
                    </div>
                    <div>
                        <h4 className="counter" data-target="3000">0</h4>
                        <h5>Staffs</h5>
                    </div>
                    <div>
                        <h4 className="counter" data-target="2000000">0</h4>
                        <h5>Players</h5>
                    </div>
                </div>         
            </div>
            <div className="section4" id="video">
                    <h2>Start your journey here</h2>
                    <div className="videobox">
                        <div className="videoContainer">
                            <iframe title="rise" width="560" height="315" src="https://www.youtube.com/embed/fB8TyLTD7EE" 
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
