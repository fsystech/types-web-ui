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
	elog( e: Error | Exception | string , wt?: boolean ): void;
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
declare interface HTMLElement {
	tablesorter_destroy(): void;
}
declare type SlimScrollConfig = {
	width?: string;
	height?: string;
	start?: string;
	scrollTo?: string;
	size?: string;
	color?: string;
	position?: string;
	distance?: string;
	opacity?: number;
	alwaysVisible?: boolean;
	disableFadeOut?: boolean;
	railVisible?: boolean;
	railColor?: string;
	railOpacity?: number;
	railDraggable?: boolean;
	railClass?: string;
	barClass?: string;
	wrapperClass?: string;
	allowPageScroll?: boolean;
	wheelStep?: number;
	touchScrollStep?: number;
	borderRadius?: string;
	railBorderRadius?: string;
};
declare interface JQuery<TElement = any> {
	exit(): this;
	enable(): this;
	disable(): this;
	htmla( obj: any ): this;
	slimScroll( cfg: SlimScrollConfig ): this;
	tablesorter(): this;
	fancybox( cfg: any ): this;
	Lazy( cfg: any ): this;
	prop( name: string ): string | void;
	prop( name: "checked" ): boolean;
	attr( name: string ): string | void;
	val(): string | void;
	html( n: number ): this;
	html( val: JQuery<HTMLElement> ): this;
	tablesorter_destroy(): void;
}
interface JQueryStatic {
	makeArray<T>( arg1: T[], arg2: T[] ): T[];
	confirm( ...args: any[] ): JQuery<HTMLElement>;
	alert( ...args: any[] ): JQuery<HTMLElement>;
	dialog( ...args: any[] ): JQuery<HTMLElement>;
}
declare interface DialogExtendOption {
	closable?: boolean;
	maximizable?: boolean;
	minimizable?: boolean;
	collapsable?: boolean;
	titlebar?: boolean;
	minimizeLocation?: string;
	icons?: Dct<string>;
	load?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
	beforeCollapse?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
	beforeMaximize?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
	beforeMinimize?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
	beforeRestore?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
	collapse?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
	maximize?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
	minimize?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
	restore?: ( evt: JQueryEventObject, dlg: JQueryUI.Dialog ) => void;
}
namespace JQueryUI {
	interface Widget {
		( config: JQueryUI.DialogOptions, $container: JQuery<HTMLElement> ): Dialog;
	}
	interface UI {
		dialogExtend( opt: DialogExtendOption, elem: JQuery<HTMLElement> ): Dialog;
	}
	interface Dialog {
		open(): Dialog;
		element: JQuery<HTMLElement>;
		isOpen(): boolean;
		close(): any;
		destroy(): void;
		state(): "minimized" | "collapsed";
		restore(): void;
		___destroy(): void;
	}
}
declare interface IEmojify {
	run( $elem: HTMLElement ): void;
}
declare interface IContext { }
declare function _get_route( url: string ): string;
declare function to_number( obj: any ): number;
declare var Sow: import( './sow-framework' ).ISow;
declare var emojify: IEmojify;
declare var ctx: IContext;