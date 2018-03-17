export const type = Object.freeze({
	create: 'CREATE'
})

export function create () {
	return {
		type: type.create
	}
}
