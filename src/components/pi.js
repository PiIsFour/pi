import React from 'react'
import Store from './store'

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

export function Pi () {
	return <div id="pi" style={{
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gridGap: '10px'
	}}>
		<Card style={{textAlign: 'center'}}>
			<a className="button">Start</a>
		</Card>
	</div>
}

export default function () {
	return <Store reducer={() => {}}>
		<Pi />
	</Store>
}
