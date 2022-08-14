
import React, { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Joh2n C.", salary: 800, id: 1 },
				{ name: "Alex3 G.", salary: 3000, id: 2 },
				{ name: "JCarl B.", salary: 5000, id: 3 }
			]
		}
		//this.maxId = 0
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			//спосіб 2    1 спосіб внизу
			return {
				data: data.filter(item => item.id !== id)
			}

		})
	}

	addItem = (name, salary) => {
		console.log(name, salary);
		const newElement = {
			name: name,
			salary: +salary,
			id: this.state.data[this.state.data.length - 1].id + 1
		}
		console.log(newElement)
		this.setState(({ data }) => {
			return {
				data: data.concat(newElement)
			}
		})
	}


	render() {
		return (
			<div className="app">
				<AppInfo />,
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem} /*цей пропс передаэться нижчому по рівню елементу!!!*/ />
				<EmployersAddForm
					addItem={this.addItem} />
			</div>
		);
	}
}


export default App;




/*//спосіб №1 видалити з масиву елемент по його індексу
const index = data.findIndex(elem => elem.id == id);
const before = data.slice(0, index);
const after = data.slice(index + 1);

const newArr = [...before, ...after];   


return {
	data: newArr
}   */