export const roundTo = (val: number, to: number) => {
	return Math.round(val * to) / to;
}