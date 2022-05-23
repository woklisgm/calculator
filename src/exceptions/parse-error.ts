export class ParseError extends Error {
	position: number;

	constructor(message: string, position: number) {
		super(message);
		this.position = position;
	}

	static EmptyTerm(position: number) {
		return new ParseError('Empty term', position);
	}

	static UnknowError(position: number) {
		return new ParseError('UnknowError', position);
	}	
}