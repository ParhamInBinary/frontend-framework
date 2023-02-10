import './app.css';
import { frameworks } from '../data';
import Year from './Year/Year';
import Frameworks from './Frameworks/Frameworks';



export function App() {
  return (
    <>
      <header>
        <h1>State of Javascript</h1>
      </header>

      <main>
        <Year years={[2016, 2017, 2018, 2019, 2020, 2021, 2022]}/>
        <Frameworks frameworks={frameworks}/>
      </main>

      <footer>
      </footer>
    </>
  );
}
