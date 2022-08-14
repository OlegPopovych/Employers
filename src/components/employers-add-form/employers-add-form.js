import React, { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value // 2. підвставляє в стейт значення з полів вводу
		}) // 1. витягує значення атрибута, нейм чи саларі, які співпадаються з назвами в стейті!!
	}

	onSubmit = (e) => {
		e.preventDefault();
	}

	render() {
		const { addItem } = this.props;
		const { name, salary } = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					onSubmit={this.onSubmit}

					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Ім'я співробітника?"
						name="name" // атрибут до цього імпута
						value={name}/*
						стейт викликає рендер і якщо у велью стоїть значення зі стейта то у велью записуєтсья 
						актуальне значення компонента, отже значення велью форми буде контролюватись реактом і цей 
						елемент імпут буде називатись керованим елементом */
						onChange={this.onValueChange} />
					<input type="number"
						className="form-control new-post-label"
						placeholder="ЗП в $?"
						name="salary"  // атрибут до цього імпута
						value={salary}
						onChange={this.onValueChange} />

					<button type="submit"
						onClick={() => addItem(this.state.name, this.state.salary)}
						className="btn btn-outline-light">Додати</button>
				</form>
			</div>
		)
	}
}

export default EmployersAddForm;