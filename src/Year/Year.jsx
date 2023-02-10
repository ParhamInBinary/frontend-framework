import './year.css';

export default function Year(props) {
    return (
      <>
        <div className='yearList' data-cy="chart-header">
          {props.years.map((year) => (
          <div>{year}</div>
          ))}
        </div>
      </>
    )
  }