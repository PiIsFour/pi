import React from 'react'
import { shallow } from 'enzyme'
import enzymeToJson from 'enzyme-to-json'

import {Pi} from './pi'

describe('pi', () => {
	it('snapshot matches', () => {
		const wrapper = shallow(<Pi />)
		expect(enzymeToJson(wrapper)).toMatchSnapshot()
	})

	it('shows start button if state is undefined', () => {
		const wrapper = shallow(<Pi />)
		expect(wrapper.find('.button')).toExist()
		expect(wrapper.find('.button')).toHaveText('Start')
	})

	it('dispaches the create action when start button is clicked', () => {
		const mockDispatch = jest.fn()
		const wrapper = shallow(<Pi dispatch={mockDispatch}/>)
		wrapper.find('.button').simulate('click')
		expect(mockDispatch).toBeCalledWith({type: 'CREATE'})
	})

	it('shows distGraph when it has a dist node', () => {
		const state = {nodes: [
			{type: 'DIST', dist: 'TestObject'}
		]}
		const wrapper = shallow(<Pi state={state}/>)
		expect(wrapper.find('DistGraph')).toExist()
		expect(wrapper.find('DistGraph')).toHaveProp('dist', state.nodes[0].dist)
	})
})
