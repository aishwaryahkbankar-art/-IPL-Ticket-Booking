import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./MatchCard";
import "./App.css";
import Footer from "./components/Footer";
function App() {
   const [selectedCount, setSelectedCount] = useState(0);
    const matches = [
        {
            matchNumber: 1,
            team1: "RCB",
            team2: "CSK",
            venue: "Bengaluru",
            date: "20 March 2026"
        },
        {
            matchNumber: 2,
            team1: "MI",
            team2: "KKR",
            venue: "Mumbai",
            date: "21 March 2026"
        },
        {
            matchNumber: 3,
            team1: "SRH",
            team2: "RR",
            venue: "Hyderabad",
            date: "22 March 2026"
        }
    ];

    return (
        <>
            <Navbar />
            <Hero />

            <h2 className="section-title">Upcoming IPL Matches</h2>
            <p className="selected-count">
    Selected Matches: {selectedCount}
</p>
<div className="booking-summary">
    <h3>Booking Summary</h3>
    <p>Total Selected Matches: {selectedCount}</p>
</div>
            <div className="match-grid">
                {matches.map((match) => (
                    <MatchCard
                        key={match.matchNumber}
                        matchNumber={match.matchNumber}
                        team1={match.team1}
                        team2={match.team2}
                        venue={match.venue}
                        date={match.date}
                        onSelectionChange={(isSelected) =>
    setSelectedCount((prev) => isSelected ? prev + 1 : prev - 1)
}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default App;