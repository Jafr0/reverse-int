module.exports = function reverse(n) {
	let arr = n.toString().split('')
	if (arr[0] == '-') {
		let arrm = arr.shift()
		let revarr = [arr.reverse().join('') / 1];
		return revarr
	}
	let revarr = [arr.reverse().join('') / 1]
	return revarr
}
