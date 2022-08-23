import React from 'react';
import './app-info.css';

const AppInfo = (props) => {
	const { employeesCount, increseCount } = props
	return (
		<div className="app-info">
			<h1>Облік співробітників в компанії</h1>
			<h2>Загальна кількість співробітників: {employeesCount}</h2>
			<h2>Премію отримають: {increseCount}</h2>
		</div>
	)
}

export default AppInfo;