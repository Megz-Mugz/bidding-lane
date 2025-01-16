import { useState, useEffect } from "react";
import Countdown from 'react-countdown';


interface Props {
  auctionDate: string;
}

function AuctionCountdown(props : Props) {
    return (
      <Countdown
        date={new Date(props.auctionDate)} // Target date
        renderer={({ days, hours, minutes, seconds, completed }) => {
          

          return completed 
                  ? <span>Auction Ended!</span> 
                  : 
                    <span>
                      {days}d {hours}h {minutes}m {seconds}s
                    </span>
        }}
      />
    );
  }

export default AuctionCountdown;