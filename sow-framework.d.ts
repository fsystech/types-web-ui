// @ts-check
//#!/usr/bin/env node
/**
* Copyright (c) 2018, SOW ( https://safeonline.world, https://www.facebook.com/safeonlineworld). (https://github.com/safeonlineworld/cwserver) All rights reserved.
* Copyrights licensed under the New BSD License.
* See the accompanying LICENSE file for terms.
*/
// 11:18 PM 7/18/2020
export declare interface Dct<T> {
	[id: string]: T | undefined;
}
export declare interface HTMLElement{}
declare interface IAssembler {
	Class<T>( ...args: T[] ): T;
	Class<T>( arg1: T ): T;
	Class<T, S>( arg1: T, arg2: S ): T & S;
	Class<T, S, Z>( arg1: T, arg2: S, arg3: S ): T & S & Z;
	aggregate<T>( ...args: ( () => T )[] ): T;
	aggregate<T, S>( arg1: () => T, arg2: () => S ): T & S;
	aggregate<T, S, Z>( arg1: () => T, arg2: () => S, arg3: () => Z ): T & S & Z;
	extend<T, S>( dest: T | ( () => T ), source: S | ( () => S ) ): T & S;
	Closure( ...args: ( () => void )[] ): IAssembler;
}
declare class Assembler {
	public readonly Create: IAssembler;
	constructor();
}
declare interface IHook {
	hook( schema?: string ): IHook;
	add( name: string, fn: ( ...args: any[] ) => void ): IHook;
	fire( evt: string, args: any[] ): IHook;
	firea( evt: string, args: any[] ): IHook;
}
declare interface IHookFunc {
	( name: string ): IHook;
	remove( evt: string ): IHook;
}
declare interface Ihub {
	getServerProxy(): string[];
	socket(): any;
}
declare interface IShow {
	/** Hide all open notification */
	h(): IShow;
	/** Show information notification
	 * @param {string|void} msg
	 * @returns {IShow}
	 */
	i( msg?: string ): this;
	/** Show success notification
	 * @param {string|void} msg
	 * @returns {IShow}
	 */
	s( msg?: string ): this;
	/** Show error notification
	 * @param {string|void} msg
	 * @returns {IShow}
	 */
	e( msg?: string ): this;
}
declare type ModuleRequire = ( name: string ) => any;
declare type IModules = { [id: string]: [( require: ModuleRequire, module: IAssembler, exports: Dct<any> ) => Dct<any>, Dct<any>] };
export declare interface ISow {
	OS: 'Windows' | 'Mobile' | 'Linux';
	hub: Ihub;
	async( callback: ( ...args: any[] ) => void, ms: number | void ): void;
	registerNamespace( name: string, callback: () => [IModules, Dct<any>, string[]] ): ISow;
	mapPageNamespace(): void;
	define<T>( name: string, fun: ( () => T ) | Dct<T> ): ISow;
	Web: import( './sow-core' ).IWeb;
	usingNamespace( name: string ): ISow;
	Assembler: Assembler;
	hook: IHookFunc;
	App: {
		name: string;
		app_type_const: string;
		theme_skin_key: string;
	};
	/** Show notification */
	Show: IShow;
	/** Loading animation */
	loader: {
		/** Show loading animation */
		show(): void;
		/** Hide loading animation */
		hide(): void;
	};
	check_privacy(): void;
	onXHRError( jqXHR: JQueryXHR, statusCode: number, textStatus: string ): {
		fw: boolean; emsg?: string; status_code: number; status_description?: string;
	};
}