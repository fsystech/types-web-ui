// Type definitions for sow-web-ui
// Project: https://safeonline.world/
// Definitions by: Rajib Chy <https://github.com/rajibchy>

export declare interface Dct<T> {
	[id: string]: T | undefined;
}
declare interface Object {
	extend<T, S>( dest: T, source: S ): T & S;
	clone<T>( source: T ): T;
}
declare interface String {
	toInLine(): string;
}
declare interface StringConstructor {
	format( ...args: any[] ): string;
}
export declare interface HTMLElement {

}
export declare interface JQuery<TElement = HTMLElement> {
	exit(): this;
	enable(): this;
	disable(): this;
	htmla( obj: any ): this;
}
declare var Sow: import( './sow-framework' ).ISow;