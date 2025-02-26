import React from 'react'
import BattleSquare from '../Images/battlesquare.jpg';
import ClubSunShine from '../Images/clubsunshine.jpg';

function Events() {
  return (
    <div className='container-event'>
        <h2 className='text-pink-600'>Upcomming Events</h2>
        <div class="event-container">
            <div class="events">
                <h2 className='event-name'>Battle Square</h2>
                <img className="eventimg" src={BattleSquare}
             
            alt="Battle Square"></img>
            
            <div className='event-info-container'>
            <p class="event-info">
            Battle Square is calling all challengers for a night of high-octane competition in the heart
             of the Gold Saucer. Prepare to face off against fellow skaters, wielding the weapon of your
              choice, in a test of strength, might, and unparalleled skating skills.
Think you have what it takes to dominate the rink? Then step into the arena and prove your worth!
                
            </p>
            </div>
            <button className="event btn event-button">Buy Tickets</button>
        </div>

        
        <div class="events">
            <h2 className='event-name'>Club Sun Shine</h2>
            <img className="eventimg" src={ClubSunShine} alt="ClubSunShine">
            </img>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            
            <div className='event-info-container'>
            <p class="event-info">
            Get ready to roll into a world of glitz, glamour, and good times at Club Sunshine, 
            the hottest new cabaret club in Sotenbori! Forget your worries and let loose on the 
            dance floor, gliding alongside the dazzling hostesses who'll make your night unforgettable. 
            Club Sunshine is renowned for its electrifying atmosphere and drinks that are as smooth as the 
            skating rink itself, all at prices that won't break the bank. So grab your skates, put on 
            your dancing shoes, and prepare for a night of pure fun and excitement! 
            </p>
            </div>
            <button className="event btn event-button">Buy Tickets</button>
        </div>
    </div>


    </div>
    
  )
}

export default Events