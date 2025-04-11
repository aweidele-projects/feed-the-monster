import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Monster } from "./components/Monster";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="p-8">
        <h1 className="text-center text-5xl font-light uppercase">Feed the monster!</h1>
      </header>
      <main>
        <div className="max-w-5xl p-5 border m-auto">
          <div className="flex gap-5 w-full">
            <div className="flex-1">
              <Monster />
            </div>
            <div className="flex-1">Food?</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
