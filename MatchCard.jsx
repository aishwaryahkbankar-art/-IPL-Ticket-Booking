import { useState } from "react";
function MatchCard({ matchNumber, team1, team2, venue, date, onSelectionChange }) {
    const [selected, setSelected] = useState(false);
    return (
        <div className="match-card">
           <h3>Match {matchNumber}</h3>
            <h2>{team1} vs {team2}</h2>

            <p>Venue: {venue}</p>
            <p>Date: {date}</p>

            <div className="ticket-prices">
                <p>General: ₹800</p>
                <p>Premium: ₹1500</p>
                <p>VIP: ₹3000</p>
            </div>

            <button onClick={() => {
    const newStatus = !selected;
    setSelected(newStatus);
    onSelectionChange(newStatus);
}}>
    {selected ? "Selected ✓" : "Book Ticket"}
</button>
        </div>
    );
}

export default MatchCard;