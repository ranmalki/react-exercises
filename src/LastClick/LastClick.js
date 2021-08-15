import React, { useState } from 'react';
import './LastClick.css';

function LastClick() {

	const [num, setNum] = useState(null);

	return (
		<div className="LastClick">
			<p>
				There are <b>3</b> buttons.<br />
				Make the box show the number of the last clicked button.
			</p>
			<div className="LastClick__buttons">
				<button onClick={() => setNum(1)}>1</button>
				<button onClick={() => setNum(2)}>2</button>
				<button onClick={() => setNum(3)}>3</button>
			</div>
			<div className="LastClick__box">
				{num}
			</div>
		</div>
	)
}

export default LastClick;
