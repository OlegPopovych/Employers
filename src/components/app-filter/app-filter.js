import React, { Component } from 'react';
import './app-filter.css';




class AppFilter extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	filterToggle = (e) => {
		const criterium = e.currentTarget.getAttribute("data-filter");
		console.log(criterium);
		this.props.filterToggle(criterium);
	}

	render() {
		return (
			<div className="btn-group">
				<button className="btn btn-light"
					type='button'
					onClick={this.filterToggle}
					data-filter="allEmployees">
					Всі співробітники
				</button>
				<button className="btn btn-outline-light"
					type='button'
					onClick={this.filterToggle}
					data-filter="toRiseEmployees">
					На підвищення
				</button>
				<button className="btn btn-outline-light"
					type='button'
					onClick={this.filterToggle}
					data-filter="salaryOverThousand">
					ЗП більше 1000$
				</button>
			</div>
		)
	}

}
export default AppFilter;