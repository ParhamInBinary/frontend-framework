import "./year.css";

export default function Year(props) {
  return (
    <thead>
      <tr className="yearRow">
        <th></th>
        {props.years.map((year) => (
          <th className="yearBox">{year}</th>
        ))}
        <th></th>
      </tr>
    </thead>
  );
}