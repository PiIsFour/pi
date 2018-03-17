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
})
