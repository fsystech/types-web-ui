// @ts-check
//#!/usr/bin/env node
// MIT License

// Copyright (c) 2022 FSys Tech Ltd.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// 11:18 PM 7/18/2020
import { OpenNewWindowConfig } from './core';
import HandsonTable from 'handsontable';
declare interface IAssembler {
	Class<T>(...args: T[]): T;
	Class<T>(arg1: T): T;
	Class<T, S>(arg1: T, arg2: S): T & S;
	Class<T, S, Z>(arg1: T, arg2: S, arg3: S): T & S & Z;
	aggregate<T>(...args: (() => T)[]): T;
	aggregate<T, S>(arg1: () => T, arg2: () => S): T & S;
	aggregate<T, S, Z>(arg1: () => T, arg2: () => S, arg3: () => Z): T & S & Z;
	extend<T, S>(dest: T | (() => T), source: S | (() => S)): T & S;
	Closure(...args: (() => void)[]): IAssembler;
}
declare class Assembler {
	public readonly Create: IAssembler;
}
export declare interface AssemblerConstructor {
	new(): Assembler;
	readonly prototype: Assembler;
}
declare interface IHook {
	hook(schema: "__web__page"): IHook;
	hook(schema: "internal"): IHook;
	hook(schema?: string): IHook;
	add(name: "__open__new", fn: (cfg: OpenNewWindowConfig) => void): IHook;
	add(name: "on_route_change", fn: (a: string, $b: JQuery<HTMLElement>, script?: string, c?: (status: string) => void, isdialog?: boolean, $ui?: JQueryUI.Dialog) => void): IHook;
	add(name: string, fn: (...args: any[]) => void): IHook;
	fire(evt: string, args: any[]): IHook;
	fire(evt: "__open__new", args: OpenNewWindowConfig[]): IHook;
	add(name: "on-offline", fn: () => void): IHook;
	add(name: "on-online", fn: () => void): IHook;
	fire(evt: "on-offline", args: any[]): IHook;
	firea(evt: "on-offline"): IHook;
	fire(evt: "on-online", args: any[]): IHook;
	firea(evt: "on-online"): IHook;
	firea(evt: "on_route_change", a: string, $b: JQuery<HTMLElement>, script?: string, c?: (status: string) => void, isdialog?: boolean, $ui?: JQueryUI.Dialog): IHook;
	firea(...args: any[]): IHook;
}
declare interface IHookFunc {
	(name: string): IHook;
	remove(evt: string): IHook;
}
declare interface IDataMap {
	set<T>(mom: T, child?: any, value?: any): IDataMap;
	get(mom?: string, child?: any, deep?: boolean, deeper?: boolean): any;
	push(mom: string, child: any, value?: any): IDataMap;
	clean(): IDataMap;
	remove(key?: string): IDataMap;
	clear(key: string): IDataMap;
}
declare interface IWebNotification {
	/** Hide all open notification */
	h(): IWebNotification;
	/** Show information notification
	 * @param {any} msg
	 * @returns {IWebNotification}
	 */
	i(msg?: any): this;
	/** Show success notification
	 * @param {any} msg
	 * @returns {IWebNotification}
	 */
	s(msg?: any): this;
	/** Show error notification
	 * @param {any} msg
	 * @returns {IWebNotification}
	 */
	e(msg?: any): this;
}
declare type ModuleRequire = (name: string) => any;
declare type IModules = { [id: string]: [(require: ModuleRequire, module: IAssembler, exports: Dct<any>) => any, Dct<any>] };
declare interface IDate {
	get(): string;
	getLocal(offset: string, now?: Date): Date;
	getMap(): {
		readonly month: { [id: number]: string };
		readonly day: { [id: number]: string };
	};
	format(...args: any[]): string;
}
declare interface IData {
	export(): IDataMap;
}
declare interface IBrowserCookies {
	get(name: string): string | void;
	create(name: string, value: string, path?: string, days?: number): IBrowserCookies;
	delete(name: string, path?: string): boolean;
}
interface IBrowser {
	readonly Promise: {
		readonly support: boolean;
	};
	readonly blob: {
		readonly support: boolean;
	};
	readonly workerThread: {
		readonly support: boolean;
	};
	readonly compatibility: {
		readonly cssTransforms: boolean;
		readonly lineClamp: boolean;
	};
	readonly dom: number;
	readonly name: string;
	readonly type: string;
	readonly version: number;
	/** Random number of UserAgent */
	readonly identity: number;
	readonly cookies: IBrowserCookies;
	support(cfg: Dct<any>): void;
}
declare interface IBrowserWindow {
	/** Reg/Remove browser window resize event */
	onResize(type: string | (() => void)): string | void;
}
declare interface IHotTable {
	createColumnWidth(hotSettings: HandsonTable.GridSettings, containerWidth: number): number[];
	/** Resize Handsontable after 300ms */
	resize(hot: HandsonTable, orgWidths: number[], $elm: JQuery<HTMLElement>): void;
	/**Create `HandsonTable` instance and Extend `cleanHandsonTable`, `loadDetail` and `createEmptyDataSet` in `IPageContext.IExHandsonTable` -> `accessor` `IPageContext.hot`*/
	create(pageCtx: IPageContext, selector: string, settings: import('handsontable').default.GridSettings, minLength: number): XHandsontable;
}
declare interface IWebConnection {
	/** return `readonly` network `conneciton` status (`true` or `false`)*/
	readonly isOnline: boolean;
	/** check network conneciton is offline. If offline we'll show notification*/
	offline(): boolean;
	/** check network conneciton is online. If online we'll show notification*/
	online(): boolean;
}
declare type ExportDataColumn = {
	readonly prop: string;
	next(val: any): string;
};
interface IExportDataWorkerConfig<T> {
	readonly filenName: string;
	readonly columns: (string | ExportDataColumn)[],
	readonly headers: string[];
	getData(): T[];
}
declare interface IExportDataWorker {
	exportInstance<T>(config: IExportDataWorkerConfig<T>): {
		bind($button: JQuery<HTMLElement>): void;
	}
	readonly button: {
		$get($container: JQuery<HTMLElement>): JQuery<HTMLElement>;
		template(): string;
	};
}
export declare interface IFSys {
	OS: 'Windows' | 'Mobile' | 'Linux';
	hub: Ihub;
	Window: IBrowserWindow;
	/** check network conneciton */
	connection: IWebConnection;
	async(callback: (...args: any[]) => void, ms: number | void): void;
	registerNamespace(name: string, callback: () => [IModules, Dct<any>, string[]]): IFSys;
	mapPageNamespace(...args: any[]): IFSys;
	exportModule(name: string): any;
	reRegisterNamespace(name: string): IFSys;
	exportNamespace(name: string): any;
	mapNamespace(parent: string, child: string): IFSys;
	namespaceExists(name: string): boolean;
	requirePublicModule(namespaceName: string, moduleName?: string): any;
	/** Type cast from `T` to `any` */
	toAny<T>(obj: T): any;
	define<T>(name: string, fun: (() => T) | Dct<T>): IFSys;
	Web: import('./core').IWeb;
	usingNamespace(name: string): IFSys;
	unloadNamespace(name: string): IFSys;
	Assembler: AssemblerConstructor;
	hook: IHookFunc;
	App: {
		name: string;
		app_type_const: string;
		theme_skin_key: string;
		interaction: {
			org_id: string;
			title: string;
			role_id: string;
		}
	};
	getNext($btn: JQuery<HTMLElement>): (key?: string, msg?: string) => void;
	/** Show notification */
	notify: IWebNotification;
	/** Loading animation */
	loader: {
		/** Show loading animation */
		show(): void;
		/** Hide loading animation */
		hide(): void;
	};
	checkPrivacy(): string;
	onXHRError(jqXHR: JQueryXHR, statusCode: number, textStatus?: string): {
		fw: boolean; emsg?: string; status_code: number; status_description?: string;
	};
	JSON(obj: any): any[];
	parseParam(obj: any): Dct<any>;
	date: IDate;
	currentPage(): string;
	sound: {
		message(): void;
		notification(): void;
	};
	store: IDataMap;
	Data: {
		new(): IData;
		readonly prototype: IData;
	};
	Static: {
		all(obj: Dct<any>): any;
		define(obj: Dct<any>, poperty: string, value: any): any;
		change(obj: Dct<any>, poperty: string, value: any): any;
	};
	browser: IBrowser;
	dom: {
		isDesktop: boolean;
		isHighDensity: boolean;
		isRetina: boolean;
		isSmartPhone: boolean;
		isTablet: boolean;
	};
	export(nam: string): any;
	isArrayLike<T>(obj?: any): obj is T[];
	isDate(val: any): val is Date;
	isError(obj: any): obj is Error;
	isPlainObject<T>(obj?: any): obj is Dct<T>;
	multi: {
		inherit(...args: any[]): any;
	};
	readonly exportData: IExportDataWorker;
	onRouterChange(event: Dct<any>): void;
	remove(name: string): IFSys;
	require(name: string): any;
	hot: IHotTable;
	widgetTemplate(): string;
	/**
	 * decode encoded messages
	 * @param obj e.g. ['text', '2=PUBLIC|12=25|35=33580.8|10=552|18=192|20=360|1=DSE']
	 */
	decodeMessage<T>(obj: T): T;
}