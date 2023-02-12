import "./frameworkLine.css";

export default function FrameworkRow(props) {
  normalizeSurvey(props);
  return (
    <tr className="frameworkRow">
      <td style={{color: props.framework.color}}>{props.framework.name}</td>
      <div className="line" style={{borderColor: props.framework.color}}></div>
        {props.framework.surveys.map((survey) => (
          <td className="circle" style={{borderColor: props.framework.color}}>
              {survey.retention + "%"}
            </td>
        ))}
      <td style={{color: props.framework.color}}>{props.framework.name}</td>
    </tr>
  );
}

function normalizeSurvey(props) {
  const missingYears = 7 - props.framework.surveys.length;

  if(missingYears > 0) {
    for ( let i = 0; i < missingYears; i++) {
      props.framework.surveys.unshift( {retention: ""});
    }
  }
}