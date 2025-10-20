import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleAddToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8002/bots/${id}`, { method: "DELETE" });
    setBots(bots.filter((b) => b.id !== id));
    setArmy(army.filter((b) => b.id !== id));
  };

  const handleSort = (type) => setSortType(type);

  const sortedBots = [...bots].sort((a, b) => {
    if (sortType === "health") return b.health - a.health;
    if (sortType === "damage") return b.damage - a.damage;
    if (sortType === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={handleRelease} onDelete={handleDelete} />
      <SortBar onSort={handleSort} />
      <BotCollection bots={sortedBots} onAddToArmy={handleAddToArmy} />
    </div>
  );
}

export default App;
