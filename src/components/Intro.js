import React, { useState, useEffect } from 'react';
import './Intro.scss';
import lottie from 'lottie-web';
import corgi from './utils/animation/corgibloon.json';
import videoDesign from './utils/animation/video-design.json';
import dev from './utils/animation/work-from-home.json';
import codeDebug from './utils/animation/usability-testing.json';
import dog from './utils/animation/dog.json';
import rightCloud  from './utils/images/rightCloud.png';
import leftCloud  from './utils/images/leftCloud.png';

export function Intro() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        // dev animation
        const animationA = lottie.loadAnimation({
            container: document.querySelector('.Parallax__background__animation__Dev'),
            animationData: dev,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            rendererSettings: {
            progressiveLoad: false
            }
        }) 
        let cavasA = document.querySelector('.Parallax__background__animation__Dev');
        cavasA.addEventListener('mouseenter', ()=>{
          animationA.play();
        });
        animationA.onComplete= function() {
          animationA.stop();
        }

        // codeDebug Animation
        const animationB = lottie.loadAnimation({
            container: document.querySelector('.Parallax__background__animation__codeDebug'),
            animationData: codeDebug,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            rendererSettings: {
            progressiveLoad: false
            }
        })
        let cavasB = document.querySelector('.Parallax__background__animation__codeDebug');
        cavasB.addEventListener('mouseenter', (e)=>{
            animationB.play();
        })
        animationB.onComplete= function() {
        animationB.stop();
        }
        // videoDesign animation
        const animationC = lottie.loadAnimation({
        container: document.querySelector('.Parallax__background__animation__videoDesign'),
        animationData: videoDesign,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
        progressiveLoad: false
        }
        })
        let cavasC = document.querySelector('.Parallax__background__animation__videoDesign');
        cavasC.addEventListener('mouseenter', (e)=>{
            // lottie.setSpeed(2);
            animationC.play();
        })
        animationC.onComplete= function() {
        animationC.stop();
        }
        // dog animation
        const animationD = lottie.loadAnimation({
        container: document.querySelector('.Parallax__background__animation__dog'),
        animationData: dog,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        rendererSettings: {
        progressiveLoad: false
        }
        })
        let cavasD = document.querySelector('.Parallax__background__animation__dog');
        cavasD.addEventListener('mouseenter', (e)=>{
        animationD.play();
        })
        animationD.onComplete= function() {
        animationD.stop();
        }
    
        // gear animation
        const animationE = lottie.loadAnimation({
        container: document.querySelector('.Parallax__background__animation__corgi'),
        animationData: corgi,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        rendererSettings: {
        progressiveLoad: false
        }
        })
        let cavasE = document.querySelector('.Parallax__background__animation__corgi');
        cavasE.addEventListener('mouseenter', (e)=>{
        animationE.play();
        })
        animationE.onComplete= function() {
        animationE.stop();
        }

        // set scroll speed
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);


    },[])

    const renderContent = () => (
        <>
        <div className="Parallax__content__cloud">
            <img src ={leftCloud} alt='' className='Parallax__content__cloud__leftBLC' ></img>
            <img src ={leftCloud} alt='' className='Parallax__content__cloud__leftBRC' ></img>
            <img src ={rightCloud} alt='' className='Parallax__content__cloud__rightBRC' ></img>
            <img src ={rightCloud} alt='' className='Parallax__content__cloud__rightBLC' ></img>
            <img src ={rightCloud} alt='' className='Parallax__content__cloud__rightBMC' ></img>
        </div>
        </>
    );

    const send = (e) => {
        e.preventDefault();
    }

    const backgroundContent = () => (
        <>
        <div className="Parallax__background__cloud">
            <img src ={rightCloud} alt='' className='Parallax__background__cloud__rightTC' ></img>
            <img src ={leftCloud} alt='' className='Parallax__background__cloud__leftTC' ></img>
            <img src ={rightCloud} alt='' className='Parallax__background__cloud__leftBC' ></img>    
            <img src ={rightCloud} alt='' className='Parallax__background__cloud__rightBC' ></img>
        </div>
        <div className="Parallax__background__animation"> 
            <div className="Parallax__background__animation__Dev" > </div>  
            <div className="Parallax__background__animation__codeDebug" ></div>   
            <div className="Parallax__background__animation__videoDesign"></div> 
            <div className="Parallax__background__animation__dog" > </div>   
            <div className="Parallax__background__animation__corgi" > </div>  
        </div>
        <div className="Parallax__background__content">
            <div className="Parallax__background__content__title">
                <h1>Inova Games</h1>
            </div>
            <div className="Parallax__background__content__body">
                <h6>Execute with excellence, dare to dream</h6>
                <div  className="input-field col s12">
                    <label htmlFor="email"></label>
                    <input id="email" type="email" 
                    placeholder="Enter your email to get the latest release" className="browser-default email-input" />
                    <a id="btnn" className="btn-floating btn-large waves-effect waves-light light-blue accent-4" onClick={send} href="/"><i className="material-icons">arrow_forward</i></a>
                </div>
                <div className="sponsor">
                    <h6>Interested in joining?</h6>
                </div>

            </div>

        </div>
        </>
    );

    return (
        <>

        <section className="Parallax">
          <div
            className="Parallax__background"
            style={{ transform: `translateY(${offsetY * 0.22}px)` }}
          >
            {backgroundContent()}
          </div>


          <div className="Parallax__content" >
              {renderContent()}
          </div>
        </section>
        </>
    );
}
