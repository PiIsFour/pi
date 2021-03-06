import React from 'react'
import Store from './store'
import reducerFactory from './pi.reducer'
import {create} from './pi.actions'
import dist from '../model/dist'
import DistGraph from './distGraph'

function Card ({children, width = 1, height = 1, style = {}}) {
	return <div style={{
		...style,
		gridColumn: 'span ' + width,
		gridRow: 'span ' + height,
		backgroundColor: '#424242',
		boxShadow: '2px 2px 5px 0px #000000'
	}}>
		{children}
	</div>
}

function showStartButton (dispatch) {
	return <Card style={{textAlign: 'center'}}>
		<a className="button" onClick={() => dispatch(create())}>Start</a>
	</Card>
}

function showDist (dist, key) {
	return <Card width={2} key={'dist' + key}>
		<DistGraph dist={dist} />
	</Card>
}

function showNodes (nodes) {
	return nodes.map((node, index) => {
		switch (node.type) {
		case 'DIST':
			return showDist(node.dist, index)
		default:
			return null
		}
	})
}

export function Pi ({state, dispatch}) {
	return <div id="pi" style={{
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gridGap: '10px'
	}}>
		{!state && showStartButton(dispatch)}
		{state && state.nodes && showNodes(state.nodes)}
	</div>
}

export default function () {
	return <Store reducer={reducerFactory(dist)}>
		<Pi />
	</Store>
}
