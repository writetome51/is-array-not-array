export const isArray = Array.isArray;

export function notArray(arg) {
	return !(isArray(arg));
}
