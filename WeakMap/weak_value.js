// This WILL kill your browser, because WeakMap isn't "weak" for values
// Look for mem usage with Process Explorer and you'll see that NO garbage collection is done.
(()=>{
	console.log('Starting test 2');
	const makeBigObiect = (j)=> {
		let a = [];
		for(let i=0;i<10000;i++)
			a[i] = "ikasdfsfgnkiasnd;klandfinsldkfinsdlikn"+i+j;
		return {a}
	}

	let m = new WeakMap();
	for(let i=0;i<100000; i++) {
		if(!(i%1000)) 
			console.log(`Done ${i}`);
		m.set(i, makeBigObiect(i));
	}
	return 'finished';
})();
