import reducerFactory from './pi.reducer'

describe('pi reducer', () => {
	it('returns the same state if action is unknowen', () => {
		const state = {}
		expect(reducerFactory()(state)).toBe(state)
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

	it('generates new data on addRndData', () => {
		const dist = 'TEST'
		const oldState = {
			nodes: [
				{type: 'DIST', dist}
			]
		}
		const mockData = 'mocking data here'
		const mockSimulateData = jest.fn().mockReturnValue(mockData)
		expect(reducerFactory({simulateData: mockSimulateData})(oldState, {type: 'ADDRNDDATA'})).toEqual({
			nodes: [
				...oldState.nodes,
				{type: 'DATA', data: mockData}
			]
		})
		expect(mockSimulateData).toBeCalled()
	})
})
