import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddToArmy }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
