import { ParseError } from '../exceptions/parse-error';
import { isDigit } from './isDigit';
import { isEndStr } from './isEndStr';
import { removeSpaces } from './removeSpaces';

class Calc {
	n: number;
	err: string;

	constructor() {
		this.n = 0;
		this.err = '';
	}

	calculate = (st: string): any => {
		this.n = 0;
		this.err = '';

		const exp = this.parse(st);
		
		// console.log(st);
		console.log(exp);
		// console.log(this.calc(exp))
		// console.log(this.err);

		return this.calc(exp);
	}

	calc = (exp: any): any => {
		switch(exp.op) {
			case 'N': 
				return exp.lf;
			case '+': 
				return this.calc(exp.lf) + this.calc(exp.rt);
			case '-': 
				return this.calc(exp.lf) - this.calc(exp.rt);
			case '×': 
				return this.calc(exp.lf) * this.calc(exp.rt);
			case '/': 
				return this.calc(exp.lf) / this.calc(exp.rt);
			case 'M': 
				return -this.calc(exp.lf);
			case 'S': {
				return Math.sqrt(this.calc(exp.lf));
			}
		}
	}
	
	parse = (st: string) => {
		this.n = 0;
		this.err = '';
		return this.parseE(removeSpaces(st));
	}

	parseE = (st: string):any => {
		let t1 = this.parseT1(st);
		if(isEndStr(st, this.n))
			return t1;
		
		switch(st.charAt(this.n)){
			case "+":
				this.n += 1;
				return {op: "+", lf: t1,  rt: this.parseE(st)};
			case "-":
				this.n += 1;
				return {op: "-", lf: t1,  rt:this.parseE(st)};
		}
		// no + or - after term T1
		return t1; 
	}

	parseT1 = (st: string): any => {
		let t2 = this.parseT2(st);
		
		if(isEndStr(st, this.n))
			return t2;
		
		switch(st.charAt(this.n)){
			case "×":
				this.n += 1;
				return {op: "×", lf: t2,  rt: this.parseT1(st) };
			case "/":
				this.n += 1;
				return {op: "/",  lf: t2,  rt: this.parseT1(st) };
		}
		return t2;
	}

	parseT2 = (st: string): any => {
		if(isEndStr(st, this.n)) {
			// this.err += "\nn="+this.n+"> parseT2: empty term";
			throw ParseError.EmptyTerm(this.n);
		}
		
		if(st.charAt(this.n) === "-") {
			this.n += 1;
			return {op: "M", lf: this.parseT3(st) };
		}
		if(st.charAt(this.n) === '√') {
			this.n++;
			return {op: "S", lf: this.parseT3(st) };
		}
		
		return this.parseT3(st);
	}

	parseT3 = (st: string): any => {
		if(isEndStr(st, this.n)) {
			// this.err += "\nn="+this.n+"> parseT3: empty after unary minus";
			throw ParseError.EmptyTerm(this.n);
		}
		
		if(st.charAt(this.n)==="(" ) {
			this.n += 1;
			let expr = this.parseE(st);
			if(isEndStr(st, this.n) || st.charAt(this.n)!==")")
				this.err += "\nn="+this.n+"> parseT3: no close bracket )";
			else
				this.n += 1;
			return expr;
		}
		
		if(isDigit(st, this.n)){
			const number = this.parseNumber(st, this.n);
			return { op:"N", lf: number};
		}
		
		throw ParseError.UnknowError(this.n);
	}

	parseNumber = (st: string, n: number): number => {
		let start = n;

		do {
			this.n += 1;
		} while(this.n < st.length && isDigit(st, this.n))

		if (this.n < st.length && st.charAt(n) === "."){
			this.n += 1;
			while(this.n < st.length && isDigit(st, this.n))
				this.n++;
		}

		return parseFloat(st.substring(start, this.n))
	}
}

const itemCalc = new Calc().calculate;

export {itemCalc as calculate};