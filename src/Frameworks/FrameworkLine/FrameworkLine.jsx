import './frameworkLine.css'

export default function FrameworkLine(props) {
    return (
        <div className='frameworkLine' style={{borderColor: props.framework.color}} data-cy="row-line">

            <div className='circleContainer'>
                {props.framework.surveys.map((survey) => (

                    <div className='circleStat' style={{borderColor: props.framework.color}} data-cy="chart-circle">
                        {survey.retention + "%"}
                    </div>  
                ))}
            </div>
        </div>

    )
}