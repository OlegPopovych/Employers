import React from 'react';

import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

const EmployersList = ({ data, onDelete }) => {
	const elements = data.map(item => {
		return (
			<EmployersListItem
				key={item.id}
				name={item.name}
				salary={item.salary}
				onDelete={() => onDelete(item.id)} //цей пропс передаэться нижчому по рівню елементу!!!
			/>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployersList;