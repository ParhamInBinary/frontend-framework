import FrameworkLine from './FrameworkLine/FrameworkLine'
import './Frameworks.css'

export default function Frameworks(props) {
    return (
    
        <div className='frameworkList'>
          {props.frameworks.map((framework) => (
            <div className='framework' data-cy="chart-row">

                <h2 style={{color:framework.color}}>{framework.name}</h2>
                <FrameworkLine framework={framework}/>
                <h2 style={{color:framework.color}}>{framework.name}</h2>
            </div>
          ))}
        </div>
    
    )
  }