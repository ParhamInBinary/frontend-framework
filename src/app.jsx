import { route, Router } from "preact-router";
import { useEffect } from "preact/hooks";
import { frameworks } from "../data";
import "./app.css";
import Buttons from "./Buttons/Buttons";
import Frameworks from "./Frameworks/frameworks";
import Year from "./Year/year";

export function App() {
  useEffect(() => {
    route("/retention")
  })

  return (
    <>
      <header>
        <h1>State of Javascript</h1>
      </header>

      <main>
        <table>
        <Year years={[2016, 2017, 2018, 2019, 2020, 2021, 2022]} />
        
        <Router>
          <Frameworks path="/:id" frameworks={frameworks} />
        </Router>
        </table>
      </main>

      <footer>
        <Buttons
          frameworks={frameworks}
          states={["Retention", "Interest", "Usage", "Awareness"]}
        />
      </footer>
    </>
  );
}
