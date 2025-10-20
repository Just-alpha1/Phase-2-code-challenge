import React from "react";

function BotCard({ bot, onClick, onDelete, isArmy }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p> {bot.health} ⚔️ {bot.damage} 🛡️ {bot.armor}</p>
      <p className="catchphrase">"{bot.catchphrase}"</p>
      {isArmy && (
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(bot.id);
          }}
        >
          
        </button>
      )}
    </div>
  );
}

export default BotCard;
