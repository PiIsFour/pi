export function create (start, end, step) {
	function * generator (start, end, step) {
		let i = start
		while (i <= end) {
			yield i
			i += step
		}
	}
	return [...generator(start, end, step)]
		.map((param, index, arr) => ({
			param,
			prob: 1 / arr.length
		}))
}

export function normalize (dist) {
	const sum = dist.reduce((sum, curr) => sum + curr.prob, 0)
	return dist.map(o => ({...o, prob: o.prob / sum}))
}
