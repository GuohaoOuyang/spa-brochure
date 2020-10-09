import React  from 'react';
import './Team.scss';
import leftCloud  from './utils/images/leftCloud.png';
import Guinsoo from './utils/images/Guinsoo.png';
import rod from './utils/images/Rod_of_Ages.png';
import vest from './utils/images/Bramble_Vest.png';
import excutioner from './utils/images/Executioner.png';
import Kindlegem from './utils/images/Kindlegem.png';
import Sheen from './utils/images/Sheen.png';

export function Team() {
    return (
        <div className="team" id="Team">
            <img src={leftCloud} alt=''></img>
            <div className="team__content">
                <div className="team__content__title">
                    <h3>Items and Equipments</h3>
                </div>
                <div className="team__content__sub">
                    <p>An item is an artifact or object from Runeterran history and are featured in-game as enhancements for champions.
                    A champion can only carry six items and a trinket at a time, making the selection of items an important part of achieving victory.
                    </p>
                </div>
            </div>
            <div className="team__sliderBox">
                <div className="team__sliderBox__track">
                    <div className="item">
                        <div className="imagebox">
                            <img src={Guinsoo} alt="" className="Guinsoo"/>
                        </div>
                        <p>Guinsoo's Rageblade</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={vest} alt="" className="vest"/>
                        </div>
                        <p>Bramble Vest</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={excutioner} alt="" className="excutioner"/>
                        </div>
                        <p>Executioner's Calling</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={Kindlegem} alt="" className="Kindlegem"/>
                        </div>
                        <p>Kindlegem</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={rod} alt="" className="rod"/>
                        </div>
                        <p>Rod of Ages</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={Sheen} alt="" className="Sheen"/>
                        </div>
                        <p>Sheen</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={Guinsoo} alt="" className="Guinsoo"/>
                        </div>
                        <p>Guinsoo's Rageblade</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={vest} alt="" className="vest"/>
                        </div>
                        <p>Bramble Vest</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={excutioner} alt="" className="excutioner"/>
                        </div>
                        <p>Executioner's Calling</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={Kindlegem} alt="" className="Kindlegem"/>
                        </div>
                        <p>Kindlegem</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={rod} alt="" className="rod"/>
                        </div>
                        <p>Rod of Ages</p>
                    </div>
                    <div className="item">
                        <div className="imagebox">
                            <img src={Sheen} alt="" className="Sheen"/>
                        </div>
                        <p>Sheen</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

