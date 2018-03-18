import {create, addRndData, type} from './pi.actions'

describe('pi actions', () => {
	it('has a create action', () => {
		expect(create()).toEqual({
			type: type.create
		})
	})

	it('has a addRndData action', () => {
		expect(addRndData()).toEqual({
			type: type.addRndData
		})
	})
})
