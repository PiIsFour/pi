import React from 'react'
import Store from './store'
import reducerFactory from './pi.reducer'
import {create} from './pi.actions'
import dist from '../model/dist'

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

export function Pi ({state, dispatch}) {
	return <div id="pi" style={{
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gridGap: '10px'
	}}>
		{!state && <Card style={{textAlign: 'center'}}>
			<a className="button" onClick={() => dispatch(create())}>Start</a>
		</Card>}
	</div>
}

export default function () {
	return <Store reducer={reducerFactory(dist)}>
		<Pi />
	</Store>
}
