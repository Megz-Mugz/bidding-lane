import { useState } from "react"
import './styles.css';
import Countdown from "../AuctionCountdown/AuctionCountdown";
import AuctionCountdown from "../AuctionCountdown/AuctionCountdown";

function Admin() {

    const getTodayDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
        const dd = String(today.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
    };

    const [eventDate, setEventDate] = useState(getTodayDate());
    const [auctionPosted, setAuctionPosted] = useState(false);


    const handleEventDateChange = (event : any) => {
        
        setEventDate(event.target.value); 
        
    }


    const handleSubmit = (e : any) => {
        e.preventDefault(); // Prevents page reload on form submission
        setAuctionPosted(true);
      };


      return (
         <>
            {auctionPosted && (
                <div>
                    <AuctionCountdown auctionDate={eventDate} />
                </div>
            )}

            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                <label htmlFor="event-date">Auction Date: &nbsp;</label>
                <input
                    type="date"
                    id="event-date"
                    onChange={handleEventDateChange}
                    value={eventDate}
                />
                </div>
        
                <div className="post-auction">
                <button type="submit" className="post-auction-button">
                    Post Auction
                </button>
                </div>
            </form>
            </div>
         </>
        
      );
    
}


export default Admin