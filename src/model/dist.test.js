import {create, normalize, interval} from './dist'

describe('dist', () => {
	it('creates an even distribution', () => {
		expect(create(0, 1, 1)).toEqual([
			{param: 0, prob: 0.5},
			{param: 1, prob: 0.5}
		])
	})

	it('normalizes a distribution', () => {
		expect(normalize([
			{param: 0, prob: 1},
			{param: 0.3, prob: 2},
			{param: 1, prob: 1}
		])).toEqual([
			{param: 0, prob: 0.25},
			{param: 0.3, prob: 0.5},
			{param: 1, prob: 0.25}
		])
	})

	it('calculates the smallest intervall with given prob', () => {
		expect(interval([
			{param: 0, prob: 0.25},
			{param: 0.3, prob: 0.5},
			{param: 1, prob: 0.25}
		], 0.7)).toEqual({start: 0, end: 0.3, prob: 0.75})
	})

	it('intervall favors heigher prob when same lenght', () => {
		expect(interval([
			{param: 0, prob: 0.2},
			{param: 0.5, prob: 0.5},
			{param: 1, prob: 0.3}
		], 0.6)).toEqual({start: 0.5, end: 1, prob: 0.8})
	})
})
