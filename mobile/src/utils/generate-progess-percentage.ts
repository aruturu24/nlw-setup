export function generateProgressPercentage(value: number, total: number) {
	return Math.round((value / total) * 100)
}