import React from 'react'
import './Body.css'
import cat from '../../Assets/Images/cG0Y6Phau7pL44s6Ld51mXRCIE.avif'

import one from '../../Assets/Images/one.avif'
import two from '../../Assets/Images/two.avif'
import three from '../../Assets/Images/three.avif'
import four from '../../Assets/Images/four.avif'
import five from '../../Assets/Images/five.avif'
import six from '../../Assets/Images/six.avif'
import seven from '../../Assets/Images/seven.avif'
import eight from '../../Assets/Images/eight.avif'
import nine from '../../Assets/Images/nine.avif'

import sick from '../../Assets/Images/sick.avif'
import girl from '../../Assets/Images/girl.avif'
import fish from '../../Assets/Images/fish.avif'
import big from '../../Assets/Images/big.avif'
import grey from '../../Assets/Images/grey.avif'
import sam from '../../Assets/Images/sam.avif'
import daumen from '../../Assets/Images/daumen.avif'
import rat from '../../Assets/Images/rat.avif'
import last from '../../Assets/Images/last.avif'
import mitch from '../../Assets/Images/mitch.avif'


import relax from '../../Assets/Images/relax.avif'

const Body = () => {
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];


  return (
    <div style={{paddingBottom:"50vh"}}>
      <div className='D'>
      <div className='DA'><img src={cat} style={{height:"100%",width:"100%"}}/></div>
      <div className='DB'>
        <h1 className='DC'>About Moon</h1>
        <p className='DD'>
           Moon is an alien cat that was sent on a mission to retrieve information from planet earth,
           however he crashed his spacecraft 
           upon arrival and has no way back home… help us find his way back to the Moon!</p>
      </div>
      </div>
      {/* new section starts here ///////////////////////////////////////////// */}

      <div className='E'>
        <div className='EA'>
          <h1 className='EB'>How To Buy $Moon</h1>
        </div>
        <div className='EC'>
          <div className='ED'>
            <h1 className='EF'>Buy Solana</h1>
            <p className='EG'>Buy solana form your favourite exchange then send it to your wallet of preference.
              Make sure to have enough for the fees!
            </p>
          </div>

          <div className='ED'>
            <h1 className='EF'>Head To Pump.fun</h1>
            <p className='EG'>Head to pump.fun and lookup for our official token address in the search bar!
              Or join directly,through our official links.
            </p>
          </div>

          <div className='ED'>
            <h1 className='EF'>Swap for $Moon</h1>
            <p className='EG'>Connect your wallet to the website,choose your desired amount to buy and click buy.
              Sign with your phantom wallet the prompt.
            </p>
          </div>
        </div>
      </div>
      {/* new section starts here///////// */}

      <div className='F'>
      <div className="FA">
            <div className='FZ'><img src={sick} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@SOLBigBrain</p>
            <p className="FD"></p>
            </div>
        </div>
        <div className="FA">
            <div className='FZ'><img src={mitch} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@SOLBigBrain</p>
            <p className="FD"></p>
            </div>
        </div>

        <div className="FA">
            <div className='FZ'><img src={fish} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@PattyIce</p>
            <p className="FD">goat</p>
            </div>
        </div>
        <div className="FA">
            <div className='FZ'><img src={big} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@Meow</p>
            <p className="FD">jup founder</p>
            </div>
        </div>
        <div className="FA">
            <div className='FZ'><img src={grey} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@JS</p>
            <p className="FD">goat trader</p>
            </div>
        </div>
        <div className="FA">
            <div className='FZ'><img src={sam} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@Chonky</p>
            <p className="FD">oh lawd</p>
            </div>
        </div>
        <div className="FA">
            <div className='FZ'><img src={daumen} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@daumen.eth</p>
            <p className="FD">trench warrior</p>
            </div>
        </div>
        <div className="FA">
            <div className='FZ'><img src={rat} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@ChartFu</p>
            <p className="FD">Space og</p>
            </div>
        </div>
        <div className="FA">
            <div className='FZ'><img src={last} style={{height: "100%",width: "100%",borderBlockEnd:"50px"}}/></div>
            <div className="FB">
            <p className="FC">@Gake</p>
            <p className="FD">Shit Coin Addict</p>
            </div>
        </div>
      </div>

    {/* New sevtion */}

    <div className='G'>
    <div className='GA'>
          <h1 className='GB'>Why Pumpfun?</h1>
          <p className='GC'>Beginning of our journey</p>
        </div>

        <div className='GD'>
          <div className='GE'><img src={relax} className='GF'/></div>

          <div className='GG'>
            <div className='GH'>
            <h1 className='GI'>01. Our fair launch</h1>
            <p>No pre-sales nor insiders.
               Owner renounced, immutable contract.
               Fully audited smart contracts.</p>
            </div>

            <div className='GH'>
              <hr style={{marginBottom:"37vh"}} className='OT'></hr>
              <hr></hr>
            
            </div>

            <div className='GH'>
            <h1>02. Our vision</h1>
            <p>Our vision goes beyond migration and reaching "X" marketcap. 
              We want to give birth to a timeless brand centered around the community. Win by helping others win. .</p>
            </div>
          </div>

        </div>
    </div>


    </div>
  )
}

export default Body