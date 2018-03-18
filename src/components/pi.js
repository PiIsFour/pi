import React from 'react'
import Store from './store'
import reducerFactory from './pi.reducer'
import {create} from './pi.actions'
import dist, {interval} from '../model/dist'
import DistGraph from './distGraph'

function Card ({children, width = 1, height = 1, style = {}}) {
	return <div style={{
		...style,
		gridColumn: 'span ' + width,
		gridRow: 'span ' + height,
		backgroundColor: '#424242',
		boxShadow: '2px 2px 5px 0px #000000',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center'
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

function showResult (interval, dist, key) {
	let {start, end} = interval(dist, 0.95)
	const precision = -Math.floor(Math.log10(end - start))
	start = Math.floor(start * 10 ** precision) * 10 ** -precision
	end = Math.ceil(end * 10 ** precision) * 10 ** -precision
	return <Card key={'result' + key}>
		<div className="range-start">{start}</div>
		<div className="range-end">{end}</div>
	</Card>
}

function showNodes (interval, nodes) {
	return nodes.map((node, index) => {
		switch (node.type) {
		case 'DIST':
			return [showDist(node.dist, index), showResult(interval, node.dist, index)]
		default:
			return null
		}
	})
}

export function Pi ({state, dispatch, interval}) {
	return <div id="pi" style={{
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gridGap: '10px'
	}}>
		{!state && showStartButton(dispatch)}
		{state && state.nodes && showNodes(interval, state.nodes)}
	</div>
}

export default function () {
	return <Store reducer={reducerFactory(dist)}>
		<Pi interval={interval}/>
	</Store>
}
