function create (start, end, step) {
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

export default {
	create
}
