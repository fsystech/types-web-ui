// Type definitions for sow-web-ui
// Project: https://safeonline.world/
// Definitions by: Rajib Chy <https://github.com/rajibchy>

declare interface Dct<T> {
	[id: string]: T | undefined;
}
declare interface Object {
	extend<T, S>( dest: T, source: S, noCopy?: boolean ): T & S;
	clone<T>( source: T ): T;
	copy<T, S>( dest: T, source: S ): T & S;
	nullify<T>( obj: Dct<T> ): Dct<T>;
}
declare interface FunctionConstructor {
	extend<T>( obj: Dct<T> ): this;
}
declare interface Array<T> {
	indexOf( searchElement: T, fromIndex?: number ): number;
	where( cb: ( val: T ) => boolean ): this;
	_reverse( cb: ( val: T ) => boolean ): this;
	clone(): T[];
}
declare interface Number {
	in( ...args: number[] ): boolean;
}
declare interface String {
	toInLine(): string;
	toNumber(): number;
	in( ...args: string[] ): boolean;
}
declare interface StringConstructor {
	format( ...args: any[] ): string;
}
declare interface Console {
	elog( e: Error, wt: boolean ): void;
}
declare interface NodeList {
	remove(): this;
}
declare interface HTMLCollection {
	remove(): this;
}
declare interface Element {
	getAttributes( attrname: string ): string | void;
}
declare interface Exception extends Error { }
interface ExceptionConstructor extends ErrorConstructor {
	new( message?: string, fileName?: string, lineNumber: string | number ): Exception;
	( message?: string, fileName?: string, lineNumber: string | number ): Exception;
	new( message?: string ): Exception;
	( message?: string ): Exception;
	readonly prototype: Exception;
}
declare var Exception: ExceptionConstructor;
declare interface HTMLElement {}
declare interface JQuery<TElement = HTMLElement> {
	exit(): this;
	enable(): this;
	disable(): this;
	htmla( obj: any ): this;
}
declare function _get_route( url: string ): string;
declare function to_number( obj: any ): number;
declare var Sow: import( './sow-framework' ).ISow;