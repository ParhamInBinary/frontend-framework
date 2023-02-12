import FrameworkLine from "./FrameworkLine/FrameworkLine";
import "./frameworks.css";

export default function Frameworks(props) {
  return (
    <div className="frameworkList">
      {props.frameworks.map((framework) => (
        <div className="framework" data-cy="chart-row">
          <h3 style={{ color: framework.color }}>{framework.name}</h3>
          <FrameworkLine framework={framework} />
          <h3 style={{ color: framework.color }}>{framework.name}</h3>
        </div>
      ))}
    </div>
  );
}
