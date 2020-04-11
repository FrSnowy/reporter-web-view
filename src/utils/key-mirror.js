export default (types, prefix) => {
	return Object.keys(types).reduce((p, c) => ({ ...p, [c]: `${prefix}/${c}` }), {});
}