const triangle = 8;
for (let a = 1; a <= triangle; a++){
	let row = '';
	for (let b = 1; b <= a; b++){
		row += '*';
	}
	console.log(row)
}