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

const PhoneBookForm = () => {
	return (
		<form style={style.form.container}>
			<br />
			<label>First Name</label>
			<input type="text" style={style.form.inputs} name="userFirstname" />
			<label>Last Name</label>
			<input type="text" style={style.form.inputs} name="userLastname" />
			<label>Phone</label>
			<input type="text" style={style.form.inputs} name="userPhone" />
			<input type="submit" style={style.form.submitBtn} value="Add User" />
		</form>
	);
};

const InformationTable = () => {
	return (
		<table style={style.table}>
			<thead>
				<tr style={style.tableCell}>First Name</tr>
				<tr style={style.tableCell}>Last Name</tr>
				<tr style={style.tableCell}>Phone</tr>
			</thead>
		</table>
	);
};

export default function App(props) {
	return (
		<section>
			<PhoneBookForm />
			<InformationTable />
		</section>
	);
}
