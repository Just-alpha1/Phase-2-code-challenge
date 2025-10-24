import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterClass, setFilterClass] = useState("");

  useEffect(() => {
    fetch("https://json-server-vercel-sepia-eight.vercel.app/bots")
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
    fetch(`https://json-server-vercel-sepia-eight.vercel.app/bots/${id}`, { method: "DELETE" });
    setBots(bots.filter((b) => b.id !== id));
    setArmy(army.filter((b) => b.id !== id));
  };

  const handleSort = (type) => setSortType(type);

  const handleFilter = (botClass) => setFilterClass(botClass);

  const filteredBots = filterClass ? bots.filter((bot) => bot.bot_class === filterClass) : bots;

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortType === "health") return b.health - a.health;
    if (sortType === "damage") return b.damage - a.damage;
    if (sortType === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="App">
      <h1>🤖 Bot Battlr.</h1>
      <YourBotArmy army={army} onRelease={handleRelease} onDelete={handleDelete} />
      <SortBar onSort={handleSort} />
      <FilterBar onFilter={handleFilter} />
      <BotCollection bots={sortedBots} onAddToArmy={handleAddToArmy} />
    </div>
  );
}

export default App;
