import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDelete }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDelete={() => onDelete(bot.id)}
            isArmy={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
