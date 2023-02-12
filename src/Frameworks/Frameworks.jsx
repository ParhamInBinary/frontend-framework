import FrameworkRow from "./FrameworkLine/FrameworkLine";
import "./frameworks.css";

export default function Frameworks(props) {
  return (
    <tbody>
      {props.frameworks.map((framework) => (
          <FrameworkRow framework={framework} />
      ))}
    </tbody>
  );
}
