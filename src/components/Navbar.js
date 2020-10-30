import React, { useEffect } from 'react';
import './Navbar.scss';
import * as Scroll from 'react-scroll';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { LinkedinIcon, FacebookSquareIcon, TwitterSquareIcon, CubeIcon } from 'react-line-awesome';


export function Navbar () {

  useEffect(()=>{

    let prevPo = window.pageYOffset;
    const about = document.querySelector('#About');
    const aboutPos = about.offsetTop;
    const story = document.querySelector('#Story');
    const storyPos = story.offsetTop;
    const team = document.querySelector('#Team');
    const teamPos = team.offsetTop;
    const contact = document.querySelector('#Contact');
    const contactPos = contact.offsetTop;
    const faq = document.querySelector('#Faq');
    const faqPos = faq.offsetTop;
    const footer = document.querySelector('#Footer');
    const footerPos = footer.offsetTop;
    const arrows = document.querySelector('#arrow');
    const arrowSub = document.querySelector('#arrowSub');

    window.addEventListener('scroll', ()=> {
      const win = window.pageYOffset;

      // trackable navbar
      if (win < aboutPos) {
        document.querySelector('.nav-A').removeAttribute('id', 'active');
        document.querySelector('.nav-B').removeAttribute('id', 'active');
        document.querySelector('.nav-C').removeAttribute('id', 'active');
        document.querySelector('.nav-D').removeAttribute('id', 'active');
        document.querySelector('.nav-E').removeAttribute('id', 'active');
        arrows.style.visibility = 'hidden';
        arrowSub.style.visibility = 'hidden';

      } else if (win >= aboutPos && win < storyPos) {
        document.querySelector('.nav-A').setAttribute('id', 'active');
        document.querySelector('.nav-B').removeAttribute('id', 'active');
        document.querySelector('.nav-C').removeAttribute('id', 'active');
        document.querySelector('.nav-D').removeAttribute('id', 'active');
        document.querySelector('.nav-E').removeAttribute('id', 'active');
        arrows.style.visibility = 'hidden';
        arrowSub.style.visibility = 'hidden';
      } else if (win >= storyPos && win < teamPos) {
        document.querySelector('.nav-B').setAttribute('id', 'active');
        document.querySelector('.nav-A').removeAttribute('id', 'active');
        document.querySelector('.nav-C').removeAttribute('id', 'active');
        document.querySelector('.nav-D').removeAttribute('id', 'active');
        document.querySelector('.nav-E').removeAttribute('id', 'active');
        arrows.style.visibility = 'hidden';
        arrowSub.style.visibility = 'hidden';
      } else if ( win >= teamPos && win < contactPos) {
        document.querySelector('.nav-C').setAttribute('id', 'active');
        document.querySelector('.nav-A').removeAttribute('id', 'active');
        document.querySelector('.nav-B').removeAttribute('id', 'active');
        document.querySelector('.nav-D').removeAttribute('id', 'active');
        document.querySelector('.nav-E').removeAttribute('id', 'active');
        arrows.style.visibility = 'hidden';
        arrowSub.style.visibility = 'hidden';
      } else if ( win >= contactPos && win < faqPos) {
        document.querySelector('.nav-D').setAttribute('id', 'active');
        document.querySelector('.nav-A').removeAttribute('id', 'active');
        document.querySelector('.nav-B').removeAttribute('id', 'active');
        document.querySelector('.nav-C').removeAttribute('id', 'active');
        document.querySelector('.nav-E').removeAttribute('id', 'active');
        arrows.style.visibility = 'hidden';
        arrowSub.style.visibility = 'hidden';
      } else if( win >= faqPos && win < footerPos) {
        document.querySelector('.nav-E').setAttribute('id', 'active');
        document.querySelector('.nav-A').removeAttribute('id', 'active');
        document.querySelector('.nav-B').removeAttribute('id', 'active');
        document.querySelector('.nav-C').removeAttribute('id', 'active');
        document.querySelector('.nav-D').removeAttribute('id', 'active');
        arrows.style.visibility = 'visible';
        arrowSub.style.visibility = 'visible';
      } else if (win >= footerPos) {
        document.querySelector('.nav-A').removeAttribute('id', 'active');
        document.querySelector('.nav-B').removeAttribute('id', 'active');
        document.querySelector('.nav-C').removeAttribute('id', 'active');
        document.querySelector('.nav-D').removeAttribute('id', 'active');
        document.querySelector('.nav-E').removeAttribute('id', 'active');
        arrows.style.visibility = 'visible';
        arrowSub.style.visibility = 'visible';
      }

      // hide navbar background color when reach top
      var y = document.scrollingElement.scrollTop;
      let currPo = window.pageYOffset;
      if(y > 0 ) {
        document.querySelector('.navbar').style.backgroundColor = '#fceee1';

      } if ( y === 0) {
        document.querySelector('.navbar').style.backgroundColor = 'transparent';
      }
      // hide navbar scrolldown, show scroll up
      if (prevPo > currPo) {
        document.querySelector('.navbar').style.top = '0'; 
      } else {
        document.querySelector('.navbar').style.top = '-6vh';
      }
      prevPo = currPo;
    })
  })

  let Link = Scroll.Link;
  let scroll = Scroll.animateScroll;

  const scrollToTop = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  }
  const toggleCheckbox = () => {
    const checkbox = document.querySelector('.setPlain');
    checkbox.checked = false;
  }
  
  return (
    <>
      <div className='navbar'>
        <div className='navbar-container'>
          <div onClick={scrollToTop} className='logo'>
            <CubeIcon style={{fontSize:'2.5rem'}}/>
          </div>
          <input type="checkbox" id='checkMenu' className='setPlain'/>
          <div className='menu-icon'>
            <div></div>
          </div>
          <div className='nav-section'>
            <div>
              <div>
                <ul className='nav-menu'>
                  <li className='nav-item' >
                    <Link activeClass="active" to="About" onClick={toggleCheckbox} className='nav-links nav-A' spy={true} smooth={true} offset={0} duration={500}>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link activeClass="active" to="Story" onClick={toggleCheckbox} className='nav-links nav-B' spy={true} smooth={true} offset={0} duration={500}>
                      Story
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link activeClass="active" to="Team" onClick={toggleCheckbox} className='nav-links nav-C' spy={true} smooth={true} offset={0} duration={500}>
                      Item
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link activeClass="active" to="Contact" onClick={toggleCheckbox} className='nav-links nav-D' spy={true} smooth={true} offset={0} duration={500}>
                      Contact
                    </Link>
                  </li>
                  <li className='nav-item' >
                    <Link activeClass="active" to="Faq" onClick={toggleCheckbox} className='nav-links nav-E' spy={true} smooth={true} offset={0} duration={500}>
                      FAQ
                    </Link>
                  </li>
                </ul>
                <ul className="social-media nav-E">
                  <li>
                    <Link to='/' className='smLogo' >
                        <FacebookSquareIcon style={{color:'#4267B2'}}/>
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='smLogo' style={{fontSize:'1.4rem', paddingTop:'0.7rem'}}>
                      <div className='gradientIcon'>
                        <FontAwesomeIcon icon= { faInstagram }/>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='smLogo' >
                      <TwitterSquareIcon style={{color:'#1DA1F2'}}/>
                    </Link>
                  </li>
                  <li>
                    <Link to='/' className='smLogo' >
                      <LinkedinIcon style={{color:'#2867B2'}}/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
          {/* gradient plate for instagramIcon*/}
      <svg width="0" height="0">
        <radialGradient id="rg" r="150%" cx="30%" cy="107%">
          <stop stopColor="#fdf497" offset="0" />
          <stop stopColor="#fdf497" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#285AEB" offset="0.9" />
        </radialGradient>
      </svg>
    </>
  )
}
