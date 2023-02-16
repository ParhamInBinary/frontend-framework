import './buttons.css';
import { Link } from 'preact-router/match';

export default function Buttons(props) {

    return (
        <div className='buttonsContainer'>
            {props.states.map((state) => (
                <Link className='button' activeClassName="active" href={"/" + state.toLowerCase()}>
                {state}
              </Link>
            ))}
        </div>
    );
}