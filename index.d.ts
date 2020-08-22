// Type definitions for sow-web-ui
// Project: https://safeonline.world/
// Definitions by: Rajib Chy <https://github.com/rajibchy>

/// <reference types="jquery"/>
/// <reference types="node"/>

declare interface Dct<T> {
	[id: string]: T | undefined;
}
declare interface ObjectConstructor {
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
declare interface FormData {
	append( name: string, value: number, fileName?: string ): void;
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
	new( message?: string, fileName?: string, lineNumber?: string | number ): Exception;
	( message?: string, fileName?: string, lineNumber?: string | number ): Exception;
	new( message?: string ): Exception;
	( message?: string ): Exception;
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
declare interface JQuery<TElement = HTMLElement> {
	exit(): this;
	enable(): this;
	disable(): this;
	htmla( obj: any ): this;
	slimScroll( cfg: SlimScrollConfig ): this;
	tablesorter(): this;
	fancybox( cfg: any ): this;
	Lazy( cfg: any ): this;
	prop( name: string ): string;
	prop( name: "checked" ): boolean;
	attr( name: string ): string;
	val(): string;
	html( n: number ): this;
	html( val: JQuery<HTMLElement> ): this;
	tablesorter_destroy(): void;
	cloneTo( target: JQuery<HTMLElement> ):this;
	croppie( ...args: any[] ): Promise<HTMLCanvasElement>;
}
declare interface JQueryStatic {
	makeArray<T>( arg1: T[], arg2: T[] ): T[];
	confirm( ...args: any[] ): JQuery<HTMLElement>;
	alert( ...args: any[] ): JQuery<HTMLElement>;
	dialog( ...args: any[] ): JQuery<HTMLElement>;
	contextMenu( ...args: any[] ): JQuery<HTMLElement>;
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
declare namespace JQueryUI {
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
declare type DropzoneParam = { folder_name: string; delete_all?: boolean; generate_thumb?: boolean };
declare interface IDropzoneExtend {
	readonly is_created: boolean;
	create( elem: HTMLElement ): IDropzoneExtend;
	getDropzone(): IDropzoneExtend;
	clean(): IDropzoneExtend;
	has_file(): boolean;
	upload( param: DropzoneParam, next: ( error: boolean, description?: string ) => void ): void;
	delete( param: DropzoneParam, next: ( error: boolean, description?: string ) => void ): void;
	createGrid( path: string, files: File[] ): void;
	load( param: DropzoneParam, next: () => void ): void;
	dispose(): void;
}
declare type DropzoneExtendConfig = {
	drop_zone: {
		url?: string;
		addRemoveLinks?: boolean;
		clickable?: boolean;
		acceptedFiles?: string;
		maxFilesize?: number;
	},
	handler: string;
	directory: string;
	random_fname?: boolean;
	key?: string;
};
declare interface IDropzoneConstructor {
	new( cfg: DropzoneExtendConfig ): IDropzoneExtend;
	readonly prototype: IDropzoneExtend;
	get_template( msg: string ): string;
	export( cfg: { dir: string; key: string; }, pageCtx: import( './sow-core' ).IPageContext ): IDropzoneExtend;
	support: {
		get_file_name( path: string ): string;
		get_ext( path: string ): string;
		get_path( root: string, path: string ): string;
		toBase64( file: File ): string;
	};
}
declare interface IGScript {
	remove( what: string, next?: () => void ): void;
	load( path: string, next?: () => void, isPackage?: boolean, module?: string ): void;
}
declare function _get_route( url: string ): string;
declare function to_number( obj: any ): number;
declare function setInterval( callback: ( ...args: any[] ) => void, ms: number, ...args: any[] ): number;
declare var __script: IGScript;
/** Safe Online World Ltd. Web UI core Framework */
declare var Sow: import( './sow-framework' ).ISow;
declare var emojify: IEmojify;
declare var DropzoneExtend: IDropzoneConstructor;
declare type PageContext = import( './sow-core' ).PageContext;
declare type PageContexConstructor = import( './sow-core' ).PageContexConstructor;
declare type ElementInfo = import( './sow-core' ).ElementInfo;
declare type ElementRules = import( './sow-core' ).ElementRules;
declare type IFormInfo = import( './sow-core' ).IFormInfo;
declare type INavigator = import( './sow-core' ).INavigator;
declare type IRequest = import( './sow-core' ).IRequest;
declare type IPageConfig = import( './sow-core' ).IPageConfig;
declare type ISource = import( './sow-core' ).ISource;
declare type AlertConfig = import( './sow-core' ).AlertConfig;
declare type PromptConfig = import( './sow-core' ).PromptConfig;
declare type ConfirmConfig = import( './sow-core' ).ConfirmConfig
declare type XHRConfig = import( './sow-core' ).XHRConfig;
declare type IPageContext = import( './sow-core' ).IPageContext
declare type IPageRegInfo = import( './sow-core' ).IPageRegInfo
declare type ISQLCommand = import( './sow-core' ).ISQLCommand;
declare type IPageEvent = import( './sow-core' ).IPageEvent
declare type ISqlDef = import( './sow-core' ).ISqlDef;
declare type OpenNewWindowConfig = import( './sow-core' ).OpenNewWindowConfig;
declare type DatabaseRequestConfig = import( './sow-core' ).DatabaseRequestConfig;
declare type IProxyServer = import( './sow-chat-ui' ).IProxyServer;
declare type ChatUICore = import( './sow-chat-ui' ).ICore;
declare interface PageContextConstructor{
	new( req:IRequest, $elm:JQuery<HTMLElement>, __cb:(status:string)=>void, isdialog:boolean, ___$ui:JQueryUI.Dialog|void ): PageContext;
	readonly prototype: PageContext;
}
/** Create new `Web Page Context` */
declare var WebPageContext: PageContexConstructor;
/** ctx can be define in back-end template engine */
declare var ctx: import( 'cwserver' ).IContext;
declare type XHandsontable = import( 'handsontable' ).default;
declare interface HandsontableConstructor {
	new( element: Element, options: import( 'handsontable' ).default.GridSettings ): XHandsontable;
	readonly prototype: XHandsontable;
}
declare var Handsontable: HandsontableConstructor;
declare type IContext = import( 'cwserver' ).IContext;
declare type ISession = import( 'cwserver' ).ISession;
declare type IRequestc = import( 'cwserver' ).IRequest;
declare type ISowServer = import( 'cwserver' ).ISowServer;
declare type IoResult = import( 'cwserver' ).IoResult;
declare type QResult = import( 'cwserver' ).QResult<Dct<any>>;
declare type QueryResult = import( 'cwserver' ).QueryResult<Dct<any>>;
declare type ISowSocketServer = import( 'cwserver' ).ISowSocketServer;
declare type ISowSocketInfo = import( 'cwserver' ).ISowSocketInfo;
declare type IPostedFileInfo = import( 'cwserver' ).IPostedFileInfo;
declare type zlib = typeof import( 'zlib' );
declare type Gzip = import( 'zlib' ).Gzip;
declare type Agent = import( './agent' ).Agent;
declare type SuperAgentStatic = import( 'superagent' ).SuperAgentStatic;
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
	us: IUserSettings
}
declare interface DBConfig {
	sp: string;
	module: string | void;
	validate: boolean;
}
declare type DBConfigNext = ( result: { config: DBConfig; rules: Dct<any> | void, fromObject: Dct<any> } ) => void;
declare interface QueryConfig {
	sp: string;
	form_object: Dct<any>
}
declare type QueryConfigNext = ( result: { config: QueryConfig; rules: Dct<any> | void } ) => void;
declare interface IPages {
	icon: string;
	path: string;
	title: string;
	is_label: boolean;
	label_id: number;
	parent_id: number;
	menu_order: number;
	show_in_nav: boolean;
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