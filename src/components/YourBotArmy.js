import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDelete }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army.</h2>
      <div className="bot-list">
        {army.length === 0 ? (
          <p>No bots added to the Army</p>
        ) : (
          army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onDelete={() => onDelete(bot.id)}
              onRelease={onRelease}
              isArmy={true}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;
