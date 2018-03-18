export const type = Object.freeze({
	create: 'CREATE',
	addRndData: 'ADDRNDDATA'
})

export function create () {
	return {
		type: type.create
	}
}

export function addRndData () {
	return {
		type: type.addRndData
	}
}
