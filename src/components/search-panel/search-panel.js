import { Component } from 'react';
import React from 'react';
import './search-panel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
	}

	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({ term })
		this.props.onUpdateSearch(term)
	}

	render() {
		const { term } = this.state;
		return (
			<input type="text"
				className="form-control search-input"
				placeholder="Знайти співробітника"
				onChange={this.onUpdateSearch}
				value={term} />)

	}
}

export default SearchPanel;