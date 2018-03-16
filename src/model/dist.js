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

export function interval (dist, minProb) {
	function * generator (dist, minProb) {
		let array = dist.slice(0)
		let cut = 0
		while (cut + minProb <= 1) {
			yield array
			cut += array[0].prob
			array = array.slice(1)
		}
	}
	return [...generator(dist, minProb)]
		.map(dist => dist.reduce(
			(interval, curr) => {
				if (interval.prob >= minProb) {
					return interval
				} else {
					return {
						...interval,
						end: curr.param,
						prob: interval.prob + curr.prob
					}
				}
			}, {start: dist[0].param, prob: 0}))
		.sort((first, second) => first.prob < second.prob)
		.sort((first, second) => first.end - first.start > second.end - second.start)[0]
}
