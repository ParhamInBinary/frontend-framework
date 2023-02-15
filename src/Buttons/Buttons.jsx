import './buttons.css';

export default function Buttons(props) {
    return (
        <div className='buttonsContainer'>
            {props.states.map((state) => (
                <button className='button'>
                {state}
                </button>
            ))}
        </div>
    );
}