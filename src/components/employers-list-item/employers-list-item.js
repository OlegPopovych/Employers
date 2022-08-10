import React, { Component } from 'react';

import './employers-list-item.css';

class EmployersListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			like: false
		}
	}

	onIncrease = () => {
		this.setState(({ increase }) => ({  // дужки навколо тіла функції {} щоб не писати return
			increase: !increase      // increase початковий береться із this.state
		}))
	}

	onStar = () => {
		this.setState(({ like }) => ({
			like: !like
		}))
	}

	render() {
		const { name, salary, onDelete } = this.props;
		const { increase, like } = this.state;

		let classses = "list-group-item d-flex justify-content-between";
		if (increase) {
			classses += " increase";
		}
		if (like) {
			classses += " like";
		}
		return (
			//"list-group-item d-flex justify-content-between "
			<li className={classses}>
				<span className="list-group-item-label"
					onClick={this.onStar}>{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm "
						onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm "
						onClick={onDelete}
					>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}

export default EmployersListItem;