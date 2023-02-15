import FrameworkRow from "./FrameworkRow/FrameworkRow";

export default function Frameworks(props) {
  return (
    <tbody>
      {props.frameworks.map((framework) => (
          <FrameworkRow framework={framework} />
      ))}
    </tbody>
  );
}
