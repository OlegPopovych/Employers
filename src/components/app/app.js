
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
				{ name: "Joh2n C.", salary: 800, increase: false, rise: true, id: 1 },
				{ name: "Alex3 G.", salary: 3000, increase: true, rise: false, id: 2 },
				{ name: "JCarl B.", salary: 5000, increase: false, rise: false, id: 3 }
			],
			term: '',
			filter: '',
		}
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
		const name1 = name,
			salary1 = salary;
		if (!this.state.data.find(({ name }) => name === name1) && name1 && salary1) {

			const newElement = {
				name: name,
				salary: +salary,
				increase: false,
				rise: false,
				id: (this.state.data[this.state.data.length - 1] ? this.state.data[this.state.data.length - 1].id + 1 : 1)
			}

			this.setState(({ data }) => {
				return {
					data: data.concat(newElement)
				}
			})

		} else if (!name1 || !salary1) {
			alert("enter name or salary")
		} else {
			alert(`name ${name1} is reserved`);
			console.log(this.state.data);
		}
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term,) => {  // формуємо дані для рендеру з фільтром чи без
		if (term.length === 0) {
			return items
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1 // if item.name === term return -1, alse return item
		})
	}

	onUpdateSearch = (term) => {
		this.setState({ term })
	}

	filterToggle = (criterium) => {
		this.setState({
			filter: criterium
		})
	}

	filterCase = (items, filter) => {
		switch (filter) {
			case "toRiseEmployees":
				return items.filter(item => item.rise);
			case "salaryOverThousand":
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	}

	render() {
		const { data, term, filter } = this.state;
		const visibleData = this.filterCase(this.searchEmp(data, term), filter);

		const increseCount = this.state.data.filter(item => item.increase !== false).length;
		const employeesCount = this.state.data.length;

		return (
			<div className="app">
				<AppInfo
					employeesCount={employeesCount}
					increseCount={increseCount} />
				<div className="search-panel">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch} />
					<AppFilter
						filterToggle={this.filterToggle} />
				</div>
				<EmployersList
					data={visibleData}
					onDelete={this.deleteItem} /*цей пропс передаэться нижчому по рівню елементу!!!*/
					onToggleProp={this.onToggleProp}
				/>
				<EmployersAddForm
					addItem={this.addItem} />
			</div>
		);
	}
}


export default App;

/*   // 1 спосіб змінювати стейт в класі
onToggleIncrease = (id) => {
	this.setState(({ data }) => {
		const index = data.findIndex(elem => elem.id === id);

		const old = data[index];
		const newItem = { ...old, increase: !old.increase }; //open the "old" and replase its "increase" if it contains it
		const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

		return {
			data: newArr
		}
	})
}
*/

/*//
onToggleIncrease = (id) => {
	this.setState(({ data }) => ({ // одразу створюємо новий об'єкт
		data: data.map(item => { // перебираємо дату через мап створюючи новий масив
			if (item.id === id) { // якщо ...
				return { ...item, increase: !item.increase } //в підходящому ітемі змінюємо значення і повертаємо
			}
			return item; // повертаємо ітеми в новий масив
		})
	}))
}

onToggleRise = (id) => {
	this.setState(({ data }) => ({ // одразу створюємо новий об'єкт
		data: data.map(item => { // перебираємо дату через мап створюючи новий масив
			if (item.id === id) { // якщо ...
				return { ...item, rise: !item.rise } //в підходящому ітемі змінюємо значення і повертаємо
			}
			return item; // повертаємо ітеми в новий масив
		})
	}))
}
*/

/*//спосіб №1 видалити з масиву елемент по його індексу
const index = data.findIndex(elem => elem.id == id);
const before = data.slice(0, index);
const after = data.slice(index + 1);

const newArr = [...before, ...after];


return {
	data: newArr
}   */







//  {
// 	console.log(name, salary);
// 	const newElement = {
// 		name: name,
// 		salary: +salary,
// 		id: this.state.data[this.state.data.length - 1].id + 1
// 	}
// 	console.log(newElement)

// 	const nameValidation = this.state.data.find(({ name }) => name === newElement.name);

// 	if (!nameValidation) {
// 		console.log(`перевірене ім'я ${nameValidation}`);

// 	} else {
// 		alert(`name ${newElement.name} is reserved`);
// 	}

// 	this.setState(({ data }) => {
// 		return {
// 			data: data.concat(newElement)
// 		}
// 	})

// }










// const	state1 = [
// 		{ name: "Joh2n C.", salary: 800, increase: false, rise: true, id: 1 },
// 		{ name: "Alex3 G.", salary: 3000, increase: true, rise: false, id: 2 },
// 		{ name: "JCarl B.", salary: 5000, increase: false, rise: false, id: 3 }
// 	]


// const filteState1 = state1.filter(item => {
// 	if (item.rise !== false) {
// 		return true;
// 	}
// });

// console.log(filteState1);