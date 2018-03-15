import React from 'react'
import { shallow } from 'enzyme'
import enzymeToJson from 'enzyme-to-json'

import Store from './store'

describe('store', () => {
	it('snapshot matches', () => {
		const wrapper = shallow(<Store reducer={() => {}}><div/></Store>)
		expect(enzymeToJson(wrapper)).toMatchSnapshot()
	})

	it('renders the children', () => {
		const wrapper = shallow(<Store reducer={() => {}}><div className="testchild"/></Store>)
		expect(wrapper.find('div')).toHaveClassName('testchild')
	})

	it('passes initial state to children', () => {
		const initialState = {
			test: 'init'
		}
		const wrapper = shallow(<Store reducer={() => initialState}><div/></Store>)
		expect(wrapper.find('div')).toHaveProp('state', initialState)
	})

	it('passes dispatch to children', () => {
		const initialState = {
			test: 'dispatch'
		}
		const mockReducer = jest.fn().mockReturnValue(initialState)
		const wrapper = shallow(<Store reducer={mockReducer}><div/></Store>)
		expect(wrapper.find('div')).toHaveProp('dispatch')
	})

	it('dispatch updates state and children', () => {
		const initialState = {
			test: 'init'
		}
		const updatedState = {
			test: 'update'
		}
		const mockReducer = jest.fn()
			.mockReturnValueOnce(initialState)
			.mockReturnValue(updatedState)
		const action = {type: 'test'}
		const wrapper = shallow(<Store reducer={mockReducer}><div/></Store>)
		wrapper.find('div').prop('dispatch')(action)
		expect(mockReducer).toHaveBeenCalledWith(initialState, action)
		wrapper.update()
		expect(wrapper.find('div')).toHaveProp('state', updatedState)
	})

	it('dispatch calls async actions', () => {
		const initialState = {
			test: 'init'
		}
		const mockReducer = jest.fn()
			.mockReturnValue(initialState)
		const mockAsyncAction = jest.fn()
		const wrapper = shallow(<Store reducer={mockReducer}><div/></Store>)
		const dispatch = wrapper.find('div').prop('dispatch')
		dispatch(mockAsyncAction)
		expect(mockAsyncAction).toHaveBeenCalledWith(dispatch)
	})
})
