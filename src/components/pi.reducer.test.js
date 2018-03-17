import reducerFactory from './pi.reducer'

describe('pi reducer', () => {
	it('returns the same state if action is unknowen', () => {
		const state = {}
		expect(reducerFactory({})(state)).toBe(state)
	})

	it('creates a new state with dist.create', () => {
		const dist = 'TEST'
		const mockDist = {
			create: jest.fn().mockReturnValue(dist)
		}
		expect(reducerFactory(mockDist)(undefined, {type: 'CREATE'})).toEqual({
			nodes: [
				{type: 'DIST', dist}
			]
		})
		expect(mockDist.create).toBeCalledWith(0, 7, 0.1)
	})
})
