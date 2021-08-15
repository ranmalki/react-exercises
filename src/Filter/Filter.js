import React, {useState} from 'react';
import './Filter.css';

function Filter() {

	const [userInput, setUserInput] = useState('');
	const [items] = useState([
		'Big fox',
		'Small elephant',
		'Big ant',
		'Small dinosaur',
		'Medium dog'
	]);

	
	function Filter(event){
		setUserInput(event.target.value);
	}

	return (
		<div className="Filter">
			<p>Filter the list as you type.</p>
			<input placeholder="Search..." className="Filter__textbox" onChange={Filter} />
			<ul>
				{items.map((item, index) => {
					if(item.trim().length)
						if(item.toLowerCase().includes(userInput.toLowerCase()))
							return <li key={index}>{item}</li>;					
				})}
			</ul>
		</div>
	)
}

export default Filter;