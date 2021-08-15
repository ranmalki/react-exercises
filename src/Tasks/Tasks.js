import React, {useState} from 'react';
import './Tasks.css';
import NewTask from './NewTask/NewTask';


function Tasks() {

	const [tasks, setTasks] = useState([]);
	const [userInput, setUserInput] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (!userInput.trim().length) {
			return;
		}
		setTasks([...tasks, userInput]);
		setUserInput('');
	}
	return (
		<div className="Tasks">
			<h3>Tasks:</h3>
			<p>Make a Todo list (add only):</p>
			<form onSubmit={onSubmit}>
				<input placeholder="Your task..." onChange={(e) => setUserInput(e.target.value)} value={userInput} /> <button>Add task</button>
			</form>
			<ul>
			{tasks.map((userInput, i) => <NewTask key={i}>{userInput}</NewTask>)}
			</ul>
		</div>
	);
}

export default Tasks;