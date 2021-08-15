import React, {useState} from 'react';
import './SmartParagraph.css';

function SmartParagraph() {
	const [isToggled, setIsToggled] = useState(false);
	const [text] = useState(
		`I must explain to you how all this mistaken idea of
		denouncing pleasure and praising pain was born and I will give
		you a complete account of the system and expound the actual
		teachings of great explorers.`
	);

	return (
		<div className="SmartParagraph">
			<p className="SmartParagraph__explanation">
				When clicking on "Toggle" button,
				the following paragraph should display only 100 characters.
				The challenge is cutting between words!
				Clicking again should show all of the text back.
			</p>
			<p className="SmartParagraph__value">
				{isToggled ? text : text.substr(0, text.lastIndexOf(' ', 100)) + '...'}<br />
				<button onClick={() => setIsToggled(!isToggled)}>
				{!isToggled ? "Toggle" : "Untoggle"}</button>
			</p>
		</div>
	);
}

export default SmartParagraph;