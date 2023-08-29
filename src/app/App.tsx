import React, { useEffect } from "react";
import { GamePage } from "../pages/game";
import { Menu } from "../widgets/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">DatsTeam test</header>
      <main>
        <Menu />
        <GamePage />
      </main>
    </div>
  );
}

export default App;
