import React  from 'react';
import './InfineteCarousel.scss';
import coralG from './utils/images/CoralGear.png';
import mustardG from './utils/images/MustardGear.png';
import tearG from './utils/images/TealGear.png';


export function InfineteCarousel() {

  return (
    <div className="slider">
      <div className="slider__box">
        <div className="slider__box__track1">
          <div className="slide">
            <img src={coralG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Play</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Build</h1>
          </div>
          <div className="slide">
          <img src={tearG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Fun</h1>
          </div>
          <div className="slide">
            <img src={coralG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>100+ champions</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>1,200+ skins</h1>
          </div>
          <div className="slide">
            <img src={coralG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Play</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Build</h1>
          </div>
          <div className="slide">
          <img src={tearG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Fun</h1>
          </div>
          <div className="slide">
            <img src={coralG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>100+ champions</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>1,200+ skins</h1>
          </div>
        </div>

        <div className="slider__box__track2">
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>30+ patches</h1>
          </div>
          <div className="slide">
            <img src={coralG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Empower</h1>
          </div>
          <div className="slide">
          <img src={tearG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>200 + emoji</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Enjoy</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>30+ patches</h1>
          </div>
          <div className="slide">
            <img src={coralG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Empower</h1>
          </div>
          <div className="slide">
          <img src={tearG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>200 + emoji</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Enjoy</h1>
          </div>
        </div>

        <div className="slider__box__track3">
          <div className="slide">
            <img src={tearG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Connection</h1>
          </div>
          <div className="slide">
            <img src={coralG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>1000+ items</h1>
          </div>
          <div className="slide">
          <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>Good game</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>Team</h1>
          </div>
          <div className="slide">
            <img src={tearG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1 style={{color:'rgba(14,52,86,0.5)'}}>Connection</h1>
          </div>
          <div className="slide">
            <img src={coralG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>1000+ items</h1>
          </div>
          <div className="slide">
          <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>Good game</h1>
          </div>
          <div className="slide">
            <img src={mustardG} alt="" className="slidegear"/>
          </div>
          <div className="slide">
            <h1>Team</h1>
          </div>
        </div>
      </div>

    </div>
  )
}
