import React from 'react'

export default function DistGraph ({dist}) {
	const {min, max, top} = dist.reduce(({min, max, top}, curr) => ({
		min: curr.param < min ? curr.param : min,
		max: curr.param > max ? curr.param : max,
		top: curr.prob > top ? curr.prob : top
	}), {
		min: dist[0].param,
		max: dist[0].param,
		top: dist[0].prob
	})
	const command = (function * () {
		yield 'M '
		while (true) {
			yield ' L '
		}
	})()
	return <svg viewBox="-10 -5 220 110">
		<path d={dist.reduce((output, curr) => output + command.next().value + (curr.param / (max - min) * 200) + ' ' + (100 - curr.prob / top * 100), '')}
			fill="transparent" stroke="black" stroke-width="0.5" />
	</svg>
}
