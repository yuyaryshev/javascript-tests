function arrayIterator(a) {
	let i=0;
	const it = {
		[Symbol.iterator]: ()=>it,
		next:()=> ({value:a[i], done:i++>=a.length})
	}
	return it;
}

for(const x of arrayIterator([1,2,3])) {
	console.log(x);
}
