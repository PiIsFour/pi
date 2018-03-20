import {type} from './pi.actions'

// initial state is intentionally undefined for now
export default function reducerFactory ({create, simulateData} = {}) {
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
		case type.addRndData:
			return {
				...state,
				nodes: [
					...state.nodes,
					{type: 'DATA', data: simulateData()}
				]
			}
		default:
		}
		return state
	}
}
