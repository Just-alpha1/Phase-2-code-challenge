import React from "react";

function BotCard({ bot, onClick, onDelete, isArmy, onAddToArmy, onRelease }) {
  return (
    <div className="bot-card" onClick={onClick || (() => {})}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p> {bot.health} | {bot.damage}| {bot.armor}</p>
      <p className="catchphrase">"{bot.catchphrase}"</p>
      {!isArmy && onAddToArmy && (
        <button
          className="add-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddToArmy(bot);
          }}
        >
          Add to Army.
        </button>
      )}
      {isArmy && (
        <>
          <button
            className="remove-btn"
            onClick={(e) => {
              e.stopPropagation();
              onRelease(bot);
            }}
          >
            Remove from Army
          </button>
          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(bot.id);
            }}
          >
            X
          </button>
        </>
      )}
    </div>
  );
}

export default BotCard;
