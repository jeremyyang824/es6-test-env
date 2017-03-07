class Destructuring {
	show() {
		let foo = {
			a: 'aaa',
			b: 'bbb'
		};

		let bar = {
			...foo,
			b: 'ccc',
		}

		console.log(bar);
	}
}

export default Destructuring;