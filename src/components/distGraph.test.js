import React from 'react'
import { shallow } from 'enzyme'
import enzymeToJson from 'enzyme-to-json'

import DistGraph from './distGraph'

describe('distGraph', () => {
	it('snapshot matches', () => {
		const dist = [
			{param: 0, prob: 0.25},
			{param: 0.3, prob: 0.5},
			{param: 1, prob: 0.25}
		]
		const wrapper = shallow(<DistGraph dist={dist}/>)
		expect(enzymeToJson(wrapper)).toMatchSnapshot()
	})

	it('renders a svg', () => {
		const dist = [
			{param: 0, prob: 0.25},
			{param: 0.3, prob: 0.5},
			{param: 1, prob: 0.25}
		]
		const wrapper = shallow(<DistGraph dist={dist}/>)
		expect(wrapper).toHaveTagName('svg')
	})

	it('has a path with the right instructions', () => {
		const dist = [
			{param: 0, prob: 0.25},
			{param: 0.3, prob: 0.5},
			{param: 1, prob: 0.25}
		]
		const wrapper = shallow(<DistGraph dist={dist}/>)
		expect(wrapper.find('path')).toHaveProp('d', 'M 0 50 L 60 0 L 200 50')
	})
})
