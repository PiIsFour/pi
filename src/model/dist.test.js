import dist from './dist'

describe('dist', () => {
	it('creates an even distribution', () => {
		expect(dist.create(0, 1, 1)).toEqual([
			{param: 0, prob: 0.5},
			{param: 1, prob: 0.5}
		])
	})
})
