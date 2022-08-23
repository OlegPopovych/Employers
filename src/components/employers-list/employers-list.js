import React from 'react';

import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

const EmployersList = ({ data, onDelete, onToggleProp }) => {
	const elements = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			<EmployersListItem
				key={item.id}
				{...itemProps}
				onDelete={() => onDelete(id)} //цей пропс передаэться нижчому по рівню елементу!!!
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-prop'))}
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