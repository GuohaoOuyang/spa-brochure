import React , { useEffect } from 'react';
import './Faq.scss';
import  M from 'materialize-css';

export function Faq() {

    useEffect(()=> {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems, {});
          });
    })
    return (
        <div className="faq" id="Faq">
            <div className="faq__title">
                <h3>Frequently asked questions</h3>
            </div>
            <div className="faq__column1">
                <ul className="collapsible">
                    <li className="active">
                    <div className="collapsible-header">The Music of League of Legends</div>
                    <div className="collapsible-body"><span>In the past, we’ve released our login themes on 
                        YouTube for the ease of access of our players. However, we’ve created so much music over 
                        the last decade that we think it’s time to make it available on multiple platforms. That 
                        way, no matter where you are, you can rock out to our music whenever you want!
                        </span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">Linking Your Riot Account to Twitch.TV</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">What's New in TFT?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">How Many People Can be on a Team?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">How Much Money Have I Spent in League of Legends?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">How to Check on a Support Ticket?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>
            <div className="faq__column2">
                <ul className="collapsible">
                    <li className="active">
                    <div className="collapsible-header">WHAT ARE ETERNALS?</div>
                    <div className="collapsible-body"><span>Eternals track both unique and general gameplay milestones on a per-champion 
                        basis. When you reach a milestone for an Eternal, you'll see a callout pop up in-game on the side of the screen
                         that Eternal.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">HOW DO I PURCHASE ETERNALS?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">WHAT SKINS ARE ELIGIBLE FOR MYSTERY GIFTING?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">WHICH CHAMPIONS ARE ELIGIBLE FOR A MYSTERY CHAMPION GIFT?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">WHAT ARE SKIN BOOSTS?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                    <div className="collapsible-header">WHICH SKINS ARE AVAILABLE TO UNLOCK FOR A CHAMPION?</div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
