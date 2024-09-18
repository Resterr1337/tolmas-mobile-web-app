const slashCalc = (str) => {
	let acc = 0;
	Array(...str).map((item) => {
		item == "/" ? (acc = acc + 1) : (acc = acc);
	});

	return acc;
};
export { slashCalc };
