import {create, type} from './pi.actions'

describe('pi actions', () => {
	it('has a create action', () => {
		expect(create()).toEqual({
			type: type.create
		})
	})
})
