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
		const wrapper = shallow(<Pi state={state} interval={() => ({})}/>)
		expect(wrapper.find('DistGraph')).toExist()
		expect(wrapper.find('DistGraph')).toHaveProp('dist', state.nodes[0].dist)
	})

	it('shows a numerical range for pi', () => {
		const state = {nodes: [
			{type: 'DIST', dist: 'TestObject'}
		]}
		const mockInterval = jest.fn().mockReturnValue({start: 0.2, end: 6.899})
		const wrapper = shallow(<Pi state={state} interval={mockInterval}/>)
		expect(mockInterval).toBeCalledWith(state.nodes[0].dist, 0.95)
		expect(wrapper.find('.range-start')).toExist()
		expect(wrapper.find('.range-end')).toExist()
		expect(wrapper.find('.range-start')).toIncludeText('0')
		expect(wrapper.find('.range-end')).toIncludeText('7')
	})

	it('shows continue button if it has a state', () => {
		const state = {nodes: [
			{type: 'DIST', dist: 'TestObject'}
		]}
		const wrapper = shallow(<Pi state={state} interval={() => ({})}/>)
		expect(wrapper.find('.button')).toExist()
		expect(wrapper.find('.button')).toHaveText('Continue')
	})

	it('dispaches the addRndData action when continue button is clicked', () => {
		const mockDispatch = jest.fn()
		const state = {nodes: [
			{type: 'DIST', dist: 'TestObject'}
		]}
		const wrapper = shallow(<Pi dispatch={mockDispatch} state={state} interval={() => ({})}/>)
		wrapper.find('.button').simulate('click')
		expect(mockDispatch).toBeCalledWith({type: 'ADDRNDDATA'})
	})
})
