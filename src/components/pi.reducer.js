import {type} from './pi.actions'

// initial state is intentionally undefined for now
export default function reducerFactory ({create}) {
	return (state, action = {type: undefined}) => {
		switch (action.type) {
		case type.create:
			return {
				nodes: [
					{
						type: 'DIST',
						dist: create(0, 7, 0.1)
					}
				]
			}
		default:
		}
		return state
	}
}
