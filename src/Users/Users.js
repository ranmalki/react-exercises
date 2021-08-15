import React, {useEffect, useState} from 'react';
import './Users.css';

function Users() {

	const [users, setUsers] = useState([]);

	useEffect(() => {
	fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/users.json')
	.then(res => res.json())
	.then(data => setUsers(data));
	}, []);

	return (
		<div className="Users">
			<h3>Users:</h3>
			<p>
				Use the following API to make a list of user names:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/users.json</code>
			</p>
                <ul>
					{users.map((user, i) => (
                    <li>{user.name}</li>
				))}
                </ul>
           
		</div>
	);
}

export default Users;
