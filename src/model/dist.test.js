import {create, normalize} from './dist'

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
})
