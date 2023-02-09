import './app.css';
import FrameworkName from './FrameworkName';

export function App() {

  return (
    <>
      <header>State of Javascript</header>

      <main>
        <ul data-cy="chart-header">
          <li>2016</li>
          <li>2017</li>
          <li>2018</li>
          <li>2019</li>
          <li>2020</li>
          <li>2021</li>
        </ul>

        <FrameworkName />

      </main>
    </>
  );
}
