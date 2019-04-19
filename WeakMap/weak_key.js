// This won't kill your browser, because WeakMap is "weak" for keys
// Look for mem usage with Process Explorer and you'll see that garbage collection is done.
(()=>{
	console.log('Starting test 1');
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
		m.set(makeBigObiect(i),i);
	}
	return 'finished';
})();

