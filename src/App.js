import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
	table: {
		borderCollapse: 'collapse'
	},
	tableCell: {
		border: '1px solid gray',
		margin: 0,
		padding: '5px 10px',
		width: 'max-content',
		minWidth: '150px'
	},
	form: {
		container: {
			padding: '20px',
			border: '1px solid #F0F8FF',
			borderRadius: '15px',
			width: 'max-content',
			marginBottom: '40px'
		},
		inputs: {
			marginBottom: '5px',
			display: 'block'
		},
		submitBtn: {
			marginTop: '10px',
			padding: '10px 15px',
			border: 'none',
			backgroundColor: 'lightseagreen',
			fontSize: '14px',
			borderRadius: '5px',
			color: '#fff'
		}
	}
};

const PhoneBookForm = ({ addEntry }) => {
	const initState = {
		id: null,
		userFirstname: 'Coder',
		userLastname: 'byte',
		userPhone: '0000'
	};
	const [ userData, setUserData ] = useState(initState);

	const handleChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addEntry({ userData });
	};

	return (
		<form style={style.form.container} onSubmit={handleSubmit}>
			<br />
			<label>First Name</label>
			<input
				type="text"
				style={style.form.inputs}
				name="userFirstname"
				value={userData.userFirstname}
				onChange={handleChange}
			/>
			<label>Last Name</label>
			<input
				type="text"
				style={style.form.inputs}
				name="userLastname"
				value={userData.userLastname}
				onChange={handleChange}
			/>
			<label>Phone</label>
			<input
				type="text"
				style={style.form.inputs}
				name="userPhone"
				value={userData.userPhone}
				onChange={handleChange}
			/>
			<input type="submit" style={style.form.submitBtn} value="Add User" />
		</form>
	);
};

const InformationTable = ({ entries }) => {
	return (
		<table style={style.table}>
			<thead>
				<tr>
					<th style={style.tableCell}>First name</th>
					<th style={style.tableCell}>Last name</th>
					<th style={style.tableCell}>Phone</th>
				</tr>
			</thead>

			<tbody>
				{entries.map((entry, index) => {
					console.log('tbody-entry', entry);
					return (
						<tr key={index}>
							<td style={style.tableCell}>{entry.userData.userFirstname}</td>
							<td style={style.tableCell}>{entry.userData.userLastname}</td>
							<td style={style.tableCell}>{entry.userData.userPhone}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default function App(props) {
	const [ entries, setEntries ] = useState([]);

	const addEntry = (entry) => {
		const newItem = [ ...entries, ...[ entry ] ];
		const list = newItem.sort(
			(a, b) => (a.userData.userLastname.toLowerCase() > b.userData.userLastname.toLowerCase() ? 1 : -1)
		);
		setEntries(list);

		// console.log('App-list', list);
		// console.log('App-newItem', newItem);
	};

	console.log('App-entries', entries);
	return (
		<section>
			<PhoneBookForm addEntry={addEntry} />
			<InformationTable entries={entries} />
		</section>
	);
}
