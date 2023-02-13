import './buttons.css';

export default function Buttons(props) {
    return (
        <div className='buttonsContainer'>
            {props.states.map((state) => (
                <button onClick={changeState} className='button'>
                {state}
                </button>
            ))}
        </div>
    );
}

function changeState(props) {
    const circleStat = document.querySelectorAll('.circle');
    
    for( let i = 0; i < circleStat.length; i++) {
        // circleStat[i].textContent = props.frameworks.surveys
    }
    
}