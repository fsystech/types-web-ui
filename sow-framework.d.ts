// @ts-check
//#!/usr/bin/env node
/**
* Copyright (c) 2018, SOW ( https://safeonline.world, https://www.facebook.com/safeonlineworld). (https://github.com/safeonlineworld/cwserver) All rights reserved.
* Copyrights licensed under the New BSD License.
* See the accompanying LICENSE file for terms.
*/
// 11:18 PM 7/18/2020
import { OpenNewWindowConfig } from './sow-core';
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
	hook( schema: "__web__page" ): IHook;
	hook( schema?: string ): IHook;
	add( name: "__open__new", fn: ( cfg: OpenNewWindowConfig ) => void ): IHook;
	add( name: "on_route_change", fn: ( a: string, $b: JQuery<HTMLElement>, script?: string, c?: ( status: string ) => void, isdialog?: boolean, $ui?: JQueryUI.Dialog ) => void ): IHook;
	add( name: string, fn: ( ...args: any[] ) => void ): IHook;
	fire( evt: string, args: any[] ): IHook;
	fire( evt: "__open__new", args: OpenNewWindowConfig[] ): IHook;
	firea( evt: "on_route_change", a: string, $b: JQuery<HTMLElement>, script?: string, c?: ( status: string ) => void, isdialog?: boolean, $ui?: JQueryUI.Dialog );
	firea( ...args: any[] ): IHook;
}
declare interface IHookFunc {
	( name: string ): IHook;
	remove( evt: string ): IHook;
}
declare interface Ihub {
	getServerProxy(): string[];
	socket(): any;
	init( needMsgInit?: boolean ): void;
}
declare interface IDataMap {
	set<T>( mom: T, child?: any, value?: any ): IDataMap;
	get( mom?: string, child?: any, deep?: boolean, deeper?: boolean ): any;
	push( mom: string, child: any, value?: any ): IDataMap;
	clean(): IDataMap;
	clear(): IDataMap;
}
declare interface IShow {
	/** Hide all open notification */
	h(): IShow;
	/** Show information notification
	 * @param {any} msg
	 * @returns {IShow}
	 */
	i( msg?: any ): this;
	/** Show success notification
	 * @param {any} msg
	 * @returns {IShow}
	 */
	s( msg?: any ): this;
	/** Show error notification
	 * @param {any} msg
	 * @returns {IShow}
	 */
	e( msg?: any ): this;
}
declare type ModuleRequire = ( name: string ) => any;
declare type IModules = { [id: string]: [( require: ModuleRequire, module: IAssembler, exports: Dct<any> ) => Dct<any>, Dct<any>] };
declare interface IDate {
	get(): string;
	getLocal( offset: string, now?: Date ): Date;
	getMap(): {
		month: { [id: number]: string };
		day: { [id: number]: string };
	}
}
declare interface IData {
	export(): IDataMap;
}
export declare interface ISow {
	OS: 'Windows' | 'Mobile' | 'Linux';
	hub: Ihub;
	async( callback: ( ...args: any[] ) => void, ms: number | void ): void;
	registerNamespace( name: string, callback: () => [IModules, Dct<any>, string[]] ): ISow;
	mapPageNamespace(): void;
	reRegisterNamespace( name: string ): ISow;
	exportNamespace( name: string ): any;
	define<T>( name: string, fun: ( () => T ) | Dct<T> ): ISow;
	Web: import( './sow-core' ).IWeb;
	usingNamespace( name: string ): ISow;
	unloadNamespace( name: string ): ISow;
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
	checkPrivacy(): string;
	onXHRError( jqXHR: JQueryXHR, statusCode: number, textStatus?: string ): {
		fw: boolean; emsg?: string; status_code: number; status_description?: string;
	};
	JSON( obj: any ): any[];
	parseParam( obj: any ): Dct<any>;
	date: IDate;
	currentPage(): string;
	sound: {
		message(): this;
		notification(): this;
	};
	store: IDataMap;
	Data: {
		new(): IData;
		readonly prototype: IData;
	};
}