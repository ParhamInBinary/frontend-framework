import "./year.css";

export default function Year(props) {
  return (
    <>
      <div colSpan={1} className="yearList" data-cy="chart-header">
        {props.years.map((year) => (
          <span>{year}</span>
        ))}
      </div>
    </>
  );
}
