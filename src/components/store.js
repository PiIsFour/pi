import React, { Component } from 'react'

class Store extends Component {
	constructor (props) {
		super(props)
		this.state = props.reducer()
	}

	render () {
		const dispatch = (action) => {
			if (typeof (action) === 'function') {
				action(dispatch)
			} else {
				this.setState(this.props.reducer(this.state, action))
			}
		}
		return <React.Fragment>
			{React.Children.map(this.props.children, child => React.cloneElement(child, {
				state: this.state,
				dispatch
			}))}
		</React.Fragment>
	}
}

export default Store
