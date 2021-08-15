import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {

	const [action, setAction] = useState('Pause');
	const [timer, setTimer] = useState(0);
	
	
	useEffect(() => {
		const actions = setInterval(() => {

			if (action === 'Play') {
				setTimer(previous => previous + 1)
			}

			if (action === 'Reset') {
				setTimer(0);
			}

		}, 1000)
		return () => clearInterval(actions);

	}, [action])

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<ul className="Timer__explanation">
				<li><b>Play:</b> the timer should count the seconds and keep updating</li>
				<li><b>Pause:</b> the timer freeze the timer</li>
				<li><b>Reset:</b> should set the timer to 0</li>
			</ul>
			<div className="Timer__actions">
				<button onClick={() => setAction('Play')}>Play</button>
				<button onClick={() => setAction('Pause')}>Pause</button>
				<button onClick={() => setAction('Reset')}>Reset</button>
			</div>
			<div className="Timer__value">{timer}</div>
		</div>
	);
}

export default Timer;