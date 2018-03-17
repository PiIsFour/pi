import React, { Component } from 'react'
import './App.css'

import Pi from './components/pi'

class App extends Component {
	render () {
		return (
			<div className="App">
				<h1>Pi - Day</h1>
				<Pi />
			</div>
		)
	}
}

export default App
