import React, {useState} from 'react';
import './Counter.css';

function Counter() {

	const [count, setCount] = useState(0);

	function Increase() {
		setCount(count + 1);
	}

	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={Increase}>Increase</button>
			<div className="Counter__value">{count}</div>
		</div>
	);
}

export default Counter;
