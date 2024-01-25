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

// Type definitions for web-ui
// Project: https://fsys.tech
// Definitions by: Rajib Chy <https://github.com/rajibchy>

/// <reference types="jquery"/>
/// <reference types="node"/>
/// <reference path="web-database.d.ts"/>
/// <reference path="hub.d.ts"/>
/// <reference path="contextmenu.d.ts"/>
declare interface Dct<T> {
	[id: string]: T | undefined;
}
declare type XLSXColInfo = import('./sheetjs').XDEF.ColInfo;
declare type SheetJsXLSX = {
	writeFile: import('./sheetjs').writeFile;
	writeFileAsync: import('./sheetjs').writeFileAsync;
	readonly utils: import('./sheetjs').XDEF.XLSX$Utils;
};
declare type PageContext = import('./core').PageContext;
declare type PageContexConstructor = import('./core').PageContexConstructor;
declare type ElementInfo = import('./core').ElementInfo;
declare type ExternalLink = import('./core').ExternalLink;
declare type IPrintConfig = import('./core').IPrintConfig;
declare type ElementRules = import('./core').ElementRules;
declare type IFormInfo = import('./core').IFormInfo;
declare type INavigator = import('./core').INavigator;
declare type IRequest = import('./core').IRequest;
declare type IPageConfig = import('./core').IPageConfig;
declare type ISource = import('./core').ISource;
declare type AlertConfig = import('./core').AlertConfig;
declare type PromptConfig = import('./core').PromptConfig;
declare type ConfirmConfig = import('./core').ConfirmConfig
declare type XHRConfig = import('./core').XHRConfig;
declare type IPageContext = import('./core').IPageContext;
declare type IPageContextElement = import('./core').IPageContextElement;
declare type IPageRegInfo = import('./core').IPageRegInfo
declare type ISQLCommand = import('./core').ISQLCommand;
declare type IPageEvent = import('./core').IPageEvent
declare type ISqlDef = import('./core').ISqlDef;
declare type DropDef = import('./core').DropDef;
declare type IWebUI = import('./core').IWebUI;
declare type OpenNewWindowConfig = import('./core').OpenNewWindowConfig;
declare type DatabaseRequestConfig = import('./core').DatabaseRequestConfig;
// declare type ISelectizeConfig = import('./core').ISelectizeConfig;
declare type IProxyServer = import('./chat-ui').IProxyServer;
declare type ChatUICore = import('./chat-ui').ICore;
// Extend `Selectize` `Options`
declare namespace Selectize {
	interface IOptions<T, U> {
		dispose?: () => void;
		optgroupLabelViewField?: string;
	}
}
declare type IContext = import('cwserver').IContext;
declare type ISession = import('cwserver').ISession;
declare type IRequestc = import('cwserver').IRequest;
declare type ICwServer = import('cwserver').ICwServer;
declare type IoResult = import('cwserver').IoResult;
declare type QResult = import('cwserver').QResult<Dct<any>>;
declare type QueryResult = import('cwserver').QueryResult<Dct<any>>;
declare type ICwSocketServer = import('cwserver').ICwSocketServer;
declare type ICwSocketInfo = import('cwserver').ICwSocketInfo;
declare type IPostedFileInfo = import('cwserver').IPostedFileInfo;
declare type zlib = typeof import('zlib');
declare type Gzip = import('zlib').Gzip;
declare type Agent = import('./agent').Agent;
declare type SuperAgentStatic = import('superagent').SuperAgentStatic;
declare interface ObjectConstructor {
	extend<T, S>(dest: T, source: S, noCopy?: boolean): T & S;
	clone<T>(source: T): T;
	copy<T, S>(dest: T, source: S): T & S;
	nullify<T>(obj: Dct<T>): Dct<T>;
}
declare interface FunctionConstructor {
	extend<T>(obj: Dct<T>): this;
}
declare interface Array<T> {
	indexOf(searchElement: T, fromIndex?: number): number;
	where(cb: (val: T) => boolean): this;
	_reverse(cb: (val: T) => boolean): this;
	clone(): T[];
}
declare interface Number {
	in(...args: number[]): boolean;
}
declare interface String {
	toInLine(): string;
	toNumber(): number;
	in(...args: string[]): boolean;
}
declare interface StringConstructor {
	format(...args: any[]): string;
}
declare interface Console {
	elog(e: Error | Exception | string, wt?: boolean): void;
}
declare interface FormData {
	append(name: string, value: number, fileName?: string): void;
}
declare interface NodeList {
	remove(): this;
}
declare interface HTMLCollection {
	remove(): this;
}
declare interface Element {
	getAttributes(attrname: string): string | void;
}
declare interface Math {
	abs(x: string): number;
	round(x: string): number;
}
declare function parseInt(s: number, radix?: number): number;
declare interface Exception extends Error { }
interface ExceptionConstructor extends ErrorConstructor {
	new(message?: string, fileName?: string, lineNumber?: string | number): Exception;
	(message?: string, fileName?: string, lineNumber?: string | number): Exception;
	new(message?: string): Exception;
	(message?: string): Exception;
	readonly prototype: Exception;
}
declare var Exception: ExceptionConstructor;
declare interface HTMLElement {
	tablesorter_destroy?: () => void;
	files?: FileList;
	value?: any;
	checked?: boolean;
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
//declare type TElement = HTMLElement;
declare interface JQuery<TElement = HTMLElement> extends Iterable<TElement> {
	/** Destroy current context */
	exit(): this;
	/** Enable `HTMLElement`*/
	enable(): this;
	/** Disable `HTMLElement` */
	disable(): this;
	/** Set `HTML` `object` with `animation`*/
	htmla(obj: any): this;
	/** Skip browser default `Scroll` use `slimScroll`*/
	slimScroll(cfg: SlimScrollConfig): this;
	/** Get `Tablesorter` instance form current `HTMLElement`*/
	tablesorter(): this;
	/** Destroy `Tablesorter` instance*/
	tablesorter_destroy(): void;
	/** Initilize `fancybox` to this `HTMLElement`*/
	fancybox(cfg: any): this;
	/** Initilize `Lazy` to this `HTMLElement`*/
	Lazy(cfg: any): this;
	/** Get  *this `HTMLElement` `Attribute` value*/
	prop(name: string): string;
	/** Get `Checkbox` value*/
	prop(name: "checked"): boolean;
	/** Get `Attribute` value */
	attr(name: string): string;
	/** Get `HTMLInputElement` value */
	val(): string;
	/** Set value to `HTMLDivElement` */
	html(n: number): this;
	/** Set value to `HTMLElement` */
	html(val: JQuery<HTMLElement>): this;
	/** Clone to `HTMLElement` with both of `Event` and `Attributes` */
	cloneTo(target: JQuery<HTMLElement>): this;
	/** Initilize `croppie` to this `HTMLElement`*/
	croppie(...args: any[]): Promise<HTMLCanvasElement>;
	/** Get `checkbox` value */
	checked(): boolean;
	/** Set `checkbox` value */
	checked(val: boolean): this;
	/** Add `File` source from `FileReader` */
	attr(src: 'src', val: string | ArrayBuffer | null): this;
	/**
	* Initialize a clockpicker with the given options
	*/
	clockpicker(options: { donetext?: string; placement?: 'top'; align?: 'left' }): this;
}
declare interface Uint8ArrayConstructor {
	/** Add `File` source from `FileReader` */
	new(buff: string | ArrayBuffer | null): Uint8Array;
}
declare interface JQueryStatic {
	makeArray<T>(arg1: T[], arg2: T[]): T[];
	confirm(...args: any[]): JQuery<HTMLElement>;
	alert(...args: any[]): JQuery<HTMLElement>;
	dialog(...args: any[]): JQuery<HTMLElement>;
	contextMenu(...args: any[]): JQuery<HTMLElement>;
}
declare interface DialogExtendOption {
	closable?: boolean;
	maximizable?: boolean;
	minimizable?: boolean;
	collapsable?: boolean;
	titlebar?: boolean;
	minimizeLocation?: string;
	icons?: Dct<string>;
	load?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
	beforeCollapse?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
	beforeMaximize?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
	beforeMinimize?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
	beforeRestore?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
	collapse?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
	maximize?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
	minimize?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
	restore?: (evt: JQuery.Event, dlg: JQueryUI.Dialog) => void;
}
declare namespace JQueryUI {
	interface Widget {
		(config: JQueryUI.DialogOptions, $container: JQuery<HTMLElement>): Dialog;
	}
	interface UI {
		dialogExtend(opt: DialogExtendOption, elem: JQuery<HTMLElement>): Dialog;
	}
	interface Dialog {
		open(): Dialog;
		element: JQuery<HTMLElement>;
		isOpen(): boolean;
		close(): any;
		destroy(): void;
		state(): 'minimized' | 'collapsed' | 'normal';
		restore(): void;
		___destroy(): void;
	}
}
declare interface IEmojify {
	run($elem: HTMLElement): void;
}
declare type DropzoneParam = { folder_name: string; delete_all?: boolean; generate_thumb?: boolean };
declare interface IDropzoneExtend {
	readonly is_created: boolean;
	create(elem: HTMLElement): IDropzoneExtend;
	getDropzone(): IDropzoneExtend;
	clean(): IDropzoneExtend;
	has_file(): boolean;
	upload(param: DropzoneParam, next: (error: boolean, description?: string) => void): void;
	delete(param: DropzoneParam, next: (error: boolean, description?: string) => void): void;
	createGrid(path: string, files: File[]): void;
	load(param: DropzoneParam, next: () => void): void;
	dispose(): void;
}
declare type DropzoneExtendConfig = {
	drop_zone?: {
		url?: string;
		addRemoveLinks?: boolean;
		clickable?: boolean;
		acceptedFiles?: string;
		maxFilesize?: number;
	},
	handler?: string;
	directory?: string;
	random_fname?: boolean;
	key?: string;
};
declare interface IDropzoneConstructor {
	new(cfg: DropzoneExtendConfig): IDropzoneExtend;
	readonly prototype: IDropzoneExtend;
	get_template(msg?: string): string;
	export(cfg: { config: DropzoneExtendConfig; key: string; }, pageCtx: IPageContext): IDropzoneExtend;
	support: {
		get_file_name(path: string): string;
		get_ext(path: string): string;
		get_path(root: string, path: string): string;
		toBase64(file: File): string;
	};
}
declare interface IGScript {
	remove(what: string, next?: () => void): void;
	load(path: string, next?: () => void, isPackage?: boolean, module?: string): void;
}
declare interface PageContextConstructor {
	new(req: IRequest, $elm: JQuery<HTMLElement>, __cb: (status: string) => void, isdialog: boolean, ___$ui: JQueryUI.Dialog | void): PageContext;
	readonly prototype: PageContext;
}
declare interface IConnectionInfo {
	host: string; port: number; user: string; database: string; password: string;
}
declare interface IUserSettings {
	readonly theme_skin_key: string;
	readonly app_type_const: string;
	readonly menue_type_const: string;
	readonly is_minified?: boolean | void;
	readonly can_menu_modify?: boolean | void;
	readonly user_name: string
}
declare interface IRouteRes {
	total_url: number;
	route: string;
	us: IUserSettings;
	interaction: {
		org_id: string;
		title: string;
	};
}
declare interface DBConfig {
	sp: string;
	module: string | void;
	validate: boolean;
}
declare type DBConfigNext = (result: { config: DBConfig; rules: Dct<any> | void, fromObject: Dct<any> }) => void;
declare interface QueryConfig {
	sp: string;
	form_object: Dct<any>
}
declare type QueryConfigNext = (result: { config: QueryConfig; rules: Dct<any> | void }) => void;
declare interface IPages {
	icon: string;
	path: string;
	title: string;
	is_label: boolean;
	label_id: number;
	parent_id: number;
	menu_order: number;
	show_in_nav: boolean;
	show_in_dashboard: boolean;
	is_enable: boolean;
	content_type: string;
	app_resources_id: number;
	has_shoutcut: boolean;
	shortcut_css: string | void
}
declare interface IRoutObj {
	_pages: IPages[]; _user_settings: IUserSettings;
}
declare interface IDashBoradPathInfo {
	href: string;
	imgDir: string;
	labelId: number;
	isLabel: boolean;
	isShortcuts: boolean;
}
declare interface IReplacedPage {
	path: string; new_icon_path: string, old_icon_path: string;
}
declare interface IAppPage {
	app_resources_id: number;
	path: string;
	ext: string
	content_type: string;
	title: string;
	label_id: any;
	menu_order: any;
	show_in_nav: any;
	nav_module_cd: any;
}
declare interface ILocation {
	is_local: boolean;
	ip: string;
	country_name: string;
	country_code: string;
	continent_name: string;
	zip: string;
	region_name: string;
	city: string;
	location: Dct<any>;
	success: boolean;
	error?: string;
	ret_val: number;
	currency_converter: number;
	browser?: string;
	is_mobile?: boolean;
}
declare interface IGeoPlugin {
	geoplugin_request: string;
	geoplugin_status: number;
	geoplugin_delay: string;
	geoplugin_credit: string;
	geoplugin_city: string;
	geoplugin_region: string;
	geoplugin_regionName: string;
	geoplugin_countryCode: string;
	geoplugin_countryName: string;
	geoplugin_continentName: string;
	geoplugin_currencyConverter: number;
}
declare interface IBrowserInfo {
	name: string; version: number; type: string
}
declare type LinkPreview = {
	title?: string;
	description: string;
	error: boolean;
	image?: string;
	url: string;
}
declare type ExportDataColumn = import('./framework').ExportDataColumn;
declare type IExportDataWorker = import('./framework').IExportDataWorker;
declare type IExportDataWorkerConfig<T> = import('./framework').IExportDataWorkerConfig<T>;
/** FSys Tech Ltd. Web UI core Framework */
declare var wui: import('./framework').IFSys;
/**
 * Create `WebDatabase` instance
 * 
 * default api: /app/database/crud
 */
declare var WebDatabase: IWebDatabaseConstructor;
declare var emojify: IEmojify;
declare var DropzoneExtend: IDropzoneConstructor;
/** This function can be defined while you `webpage-context.js`*/
declare function __getQuery(route: string): IRequest;
declare function _get_route(url: string): string;
declare function to_number(obj: any): number;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;
declare var __script: IGScript;
/** Create new `Web Page Context` */
declare var WebPageContext: PageContexConstructor;
/** ctx can be define in back-end template engine */
declare var ctx: IContext;
declare type XHandsontable = import('./ht').Handsontable;
declare type HandsontableConstructor = import('./ht').HandsontableConstructor;
/**`Handsontable` class `Constructor` Extend `Handsontable Class` */
declare var Handsontable: HandsontableConstructor;
declare interface INumberFormat {
	quantity(val: any): string;
	amount(val: any): string;
	price(val: any): string;
	number: {
		d(val: any, prussian?: number): number;
		f(val: any): {
			format(format: string, roundingFunction?: (num: number) => number): string
		};
	};
	toAcre(val: any): string;
	toSft(val: any): string;
}
declare interface WebNotificationConfig {
	icon?: string; // to be implemented
	caption?: string;
	content: any;
	shadow?: boolean;
	width?: string;
	height?: string;
	style?: boolean | NodeJS.Dict<any>; // {background: '', color: ''}
	position?: string; //right, left
	timeout?: number;
	keepOpen?: boolean;
	type: 'default' | 'success' | 'alert' | 'info' | 'warning';
	IsObjtype?: boolean;
	NotifyHide?: boolean;
}
declare interface IVAPIDKeys {
	readonly publicKey: string;
	readonly isChanged: boolean;
}
declare var format: INumberFormat;
declare var XLS: import('./xlsx').IXLS;
declare var WebWorker: import('./webworker').IWebWorkerConstructor;
declare var WebHttpRequest: import('./web-http-request').IWebHttpRequestConstructor;
declare function _isUnauthorized(status: ApiResponseStatus): boolean;
declare function _isApiResponseOk(status: ApiResponseStatus): boolean;
declare var _PACKAGE_VERSION: string;