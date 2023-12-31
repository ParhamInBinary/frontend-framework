import "./frameworkRow.css";
import { useRouter } from "preact-router";

export default function FrameworkRow(props) {
  normalizeSurvey(props);
  const [router] = useRouter();
  
  return (
    <tr className="frameworkRow" data-cy="chart-row">
      <td style={{color: props.framework.color}} data-cy="chart-cell">{props.framework.name}</td>
      <div className="line" style={{color: props.framework.color, backgroundColor: props.framework.color}} data-cy="row-line"></div>
        {props.framework.surveys.map((survey) => (
          <>
            {survey.retention !== "" ? (
              <td data-cy="chart-cell">
                <div className="circle" style={{borderColor: props.framework.color}} data-cy="chart-circle">
                  {survey[router.matches.id] + "%"}
                </div>
              </td>
            ) : (
              <td className="empty-cell" data-cy="chart-cell"></td>
            )}
          </>
        ))}
      <td style={{color: props.framework.color}} data-cy="chart-cell">{props.framework.name}</td>
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