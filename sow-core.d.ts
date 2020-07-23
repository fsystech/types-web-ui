// @ts-check
// Type definitions for sow-web-ui
// Project: https://safeonline.world/
// Definitions by: Rajib Chy <https://github.com/rajibchy>

/// <reference types="jquery"/>

import * as JQuery from 'jquery';
import { Dct, HTMLElement } from './sow-framework';
declare type ReqFuncs = { xhr: JQueryXHR };
declare type ReqFunc = { ( name?: string, b?: string ): void };
declare type SearchDetail = {
    show: boolean;
    template: string;
    header?: string[];
    poperty?: string[];
    tablesorter?: boolean;
    detail_event?: boolean | {
        on_page_ready: ( pagctx: IPageContext ) => void;
    };
    onRender(): void;
    beforeRender?: ( data: any ) => void;
    dump?: ( pagctx: IPageContext, $owner: JQuery<HTMLDivElement>, resp: Dct<any> ) => void;
};
export declare interface IPageRegInfo {
    template?: string;
    window_interactive?: boolean;
    window?: ( pageCtx: IPageContext ) => {
        maximize( evt: any, dlg: any ): void;
        minimize( evt: any, dlg: any ): void;
        restore( evt: any, dlg: any ): void;
    };
    event_array?: string[];
    route: string;
    key: string;
    icon?: string;
    title: string;
    info: {
        primary_key: {
            id: string;
            value: string | number;
        };
        src_key: string[];
        navigator?: boolean;
        has_master: boolean;
        has_detail: boolean;
        search_detail: SearchDetail | ( ( pageCtx: IPageContext ) => SearchDetail );
    };
    toolbar?: {
        disabled?: boolean;
        buttons?: string[];
        disabledButtons?: string[];
        enabled?: string[];
        reload?: ( ( cb: ( pagctx: IPageContext ) => void, pagctx: IPageContext ) => void ) | boolean;
        clean?: {
            before?: ( pagctx: IPageContext, $owner: JQuery<HTMLElement> ) => void;
            after?: ( pagctx: IPageContext ) => void
        };
        save?: {
            before?: ( pagctx: IPageContext, $owner: JQuery<HTMLElement> ) => void;
            after?: ( pagctx: IPageContext, resp: any, isUpdate: boolean ) => void;
        };
    };
    button: {
        footer: {
            align: string;
            title: string;
            callback: ( e: any ) => void;
        };
    } | Dct<any>;
    dynamic_report: boolean;
    report: ( event: any ) => void;
    print_settings: () => void;
}
declare interface IPageConfig {
    readonly reg: IPageRegInfo;
    readonly cmd: ISQLCommand;
    readonly fm: IFormInfo;
    customEvent( pageCtx: IPageContext ): void;
    onReady( pageCtx: IPageContext ): void;
    onDispose( pageCtx: IPageContext ): void;
}
export declare interface IPageEvent {
    customEvent( pageCtx: IPageContext ): void;
    onReady( pageCtx: IPageContext ): void;
    onDispose( pageCtx: IPageContext ): void;
}
declare type CommandConf = {
    sp?: string;
    module?: string;
    validate?: boolean;
};
export declare interface ISQLCommand {
    readonly iu?: CommandConf;
    readonly d?: CommandConf;
    readonly s?: {
        def_type?: string;
        type: string;
        sp?: string;
        sql?: string | ( ( pageCtx: IPageContext, obj?: Dct<any> ) => string );
        validate: boolean;
        module: string;
        table?: string;
        schema?: string;
    };
    readonly __dd?: CommandConf;
    readonly lq?: CommandConf;
}
export declare type ExternalLink = {
    param: string[];
    dependency?: string;
    route: string;
    width: string;
    height: string;
    position?: { my?: string, at?: string },
    modal: boolean;
    resizable: boolean,
    done?: ( t: string ) => void;
    fail?: () => void;
}
export declare type ElementInfo = {
    /** Define the type of element */
    readonly t: 'input' | 'textarea' | 'dropdown' | 'date' | 'switch' | 'html' | 'widget';
    /** this is element name */
    readonly name: string;
    /** Can use this element when search tigger ? */
    readonly src?: boolean;
    /** Use this rules for this element validation */
    readonly rules?: { m?: string, max?: number, min?: number, required?: boolean };
    /** Custom style for this element */
    readonly style?: string;
    /** Define sql field name. It will use while perform search/update/insert (Like as your db table column name e.g. id or schema.id) */
    readonly sql?: string;
    /** Define this element width (bootstrap col width 12/1) */
    readonly w: number;
    /** this element accept drop */
    readonly dropable?: boolean;
    /** this element accept drag */
    readonly dragable?: boolean;
    /** this element custom class */
    readonly cls?: string;
    /** This is element label */
    readonly title: string;
    /** Cust element HTML */
    readonly html?: string | ( () => string );
    /** Element attribute */
    readonly attr?: string;
    /** It will use while you allow dragable or dropable this element */
    readonly z_index?: number;
    /** Is this element disabled ? */
    readonly disabled?: boolean;
    /** each value add custom data-event-your-value attribute  */
    readonly event?: Dct<( pageCtx: IPageContext, e: JQueryEventObject, $owner: JQuery<HTMLElement> ) => void>;
    /** it will use while your element type is switch. You can use on|off */
    readonly text?: string;
    /** Element placeholder */
    readonly p?: string;
    /** Define this element is read only */
    readonly read_only?: boolean;
    /** Use this external link for this element */
    readonly external_link?: string | ( ( conf: ExternalLink, pageCtx: IPageContext ) => ExternalLink );
    /** Set default value for this element */
    readonly default_value?: string;
    /** widget key. It will be effect in widget element */
    readonly widget?: string;
    /** It will be effect while your element type is dropdown*/
    readonly source?: ( ( pageCtx: IPageContext ) => SourceType ) | 'OWN' | SourceType;
    readonly drop_type: "select" | "selectize" | string;
};
declare type DropDef = { method: "GET" | "POST", url: string, sp: ( ( pageCtx: IPageContext ) => void ) | string };
declare type SourceType = {
    add_new: string;
    search_poperty: string;
    drop_type?: "selectize"; load?: boolean;
    drop_def?: DropDef | ( ( obj: Dct<any>, pageCtx: IPageContext, def: ( look: DropDef ) => void ) => void );
};
export declare interface IWidget {
    readonly title: string;
    readonly key: string;
    readonly collapse: boolean;
    readonly fields: Dct<ElementInfo>[];
}
export declare interface IFormInfo {
    readonly tabs?: {
        readonly header?: Dct<ElementInfo>[];
        readonly footer?: Dct<ElementInfo>[];
    };
    readonly header?: Dct<ElementInfo>[];
    readonly footer?: Dct<ElementInfo>[];
    readonly widget?: {
        readonly header?: IWidget;
        readonly footer?: IWidget;
    };
}
declare type AlertConfig = {
    readonly icon?: string;
    readonly title?: string; content: string;
    readonly text?: string;
    readonly btnClass?: string;
    ok?: () => void;
};
declare type PromptConfig = {
    readonly icon?: string;
    readonly title?: string;
    readonly required?: boolean;
    readonly content?: string[] | string;
    ok: ( val: any ) => void;
    cancel: () => void;
};
declare type ConfirmConfig = {
    readonly icon?: string;
    readonly title?: string;
    readonly required?: boolean;
    readonly content?: string[] | string;
    confirm: ( inst: JQuery<HTMLElement> ) => void;
    readonly onContentReady?: () => void;
    cancel: ( msg: string, inst: JQuery<any> ) => void;
};
declare type XHRConfig = {
    readonly uri: string;
    readonly def: Dct<any>;
    readonly sp: string;
    readonly validate: boolean;
    readonly module: string;
    readonly data_required?: boolean;
    abort?: ( status: string, xhr: JQueryXHR, textStatus?: string, error?: string ) => void;
    done( rs: { ret_val: number; ret_msg: string; ret_data_table: any; } ): void;
    fail( rs: { ret_val: number; ret_msg: string; ret_data_table: any; } | string, xhr?: JQueryXHR, textStatus?: string, error?: string ): void;
};
declare interface INotification {
    clean(): void;
    exit( $el?: JQuery<HTMLDivElement> ): void;
    show( msg: string, cls?: string, interval?: number ): void;
}
export declare type IRequest = {
    route: string; original: string; param: Dct<any>;
    populate: <T>( reqObj: Dct<T> ) => Dct<T>;
};
declare interface IPageContext {
    readonly isdialog: boolean;
    readonly reg: IPageRegInfo;
    readonly elements: Dct<{ $elm: JQuery<HTMLInputElement>; value: any; }>;
    readonly _query: IRequest;
    readonly __data_navigate: boolean;
    readonly notification: INotification;
    $ui(): Dialog | void;
    // require( fn: string | ( () => void ), b?: string ): any;
    getElem(): JQuery<HTMLDivElement>;
    onSearch( data?: any, cb?: ( ...args: any[] ) => void ): void;
    onDispose(): void;
    getDependancy(): string[];
    enableDisable( t: 'enable' | 'disable', field?: string[] ): void;
    dumpObj( obj: Dct<any> ): void;
    dependancyResolve( params: any ): void;
    onTransportRequest( request: IRequest ): void;
    quoteLiteral( value?: string ): string;
    createQuery( obj: Dct<string> ): string;
    setDisposeProp( keys: ( Dct<any>[] ) | string, type?: string ): this;
    lockUnlockElm( lock: boolean ): this;
    alert( cfg: AlertConfig ): void;
    prompt( cfg: PromptConfig ): void;
    confirm( cfg: ConfirmConfig ): void;
    validate( $arg?: JQuery<HTMLDivElement>, allow_invalid?: boolean ): Dct<any> | void;
    validateKeyup( $arg: JQuery<HTMLInputElement>, async?: boolean ): void;
    createDropDown( obj: string | { id: string; title: string }[] ): string;
    _xhr( cfg: JQueryAjaxSettings, s: ( rs: {
        error: boolean;
        response: any;
    } ) => void, e: ( rs: {
        error: boolean;
        response: any;
        jqXHR?: JQueryXHR;
        textStatus?: string;
    } ) => void ): JQueryXHR;
    xhr( config: XHRConfig ): JQueryXHR;
    populateDetail( data: Dct<any>, cb?: ( status: string, $owner: JQuery<HTMLDivElement> ) => void, $owner?: JQuery<HTMLDivElement> ): void;
    populateMaster( row: Dct<any> ): void;
    printPreview( id: string | ( ( pctx: IPageContext ) => void ), val: any ): IPageContext;
    print( cb: ( pctx: IPageContext, status: string, index?: any ) => void, index: any ): void;
    delete( cb: ( pctx: IPageContext, status: string, index: number | string ) => void ): void;
    clear(): IPageContext;
    getSearchObj( $inst?: JQuery<HTMLDivElement>, type?: string ): void;
    searchObjModify?: ( obj: any[] | Dct<any> ) => void;
    clean( cb?: ( status: string ) => void ): IPageContext;
    save( cb: () => void, formobj?: Dct<any>, confirmMsg?: string ): void;
    search( cb: ( status: string ) => void, obj?: Dct<any>, def?: Dct<any> ): void;
    __onSearchDataModify?: <T>( data: Dct<T>[] ) => Dct<T>[];
    loadDropDown( cb: ( status: string ) => void, sdestroy?: boolean ): void;
    saveObjModify?: <T>( obj: Dct<T> ) => { error: boolean };
    beforeSearch?: <T>( obj: Dct<T> ) => Dct<T>;
}
export declare interface INavigator {
    getData(): Dct<any>;
    populate(): INavigator;
    populate_row( row: Dct<any>, cb: () => void ): INavigator;
    update( row: Dct<any> ): INavigator;
    getDetail$(): JQuery<HTMLDivElement> | void;
    reset(): INavigator;
    setData( data: Dct<any>[], $tabel: JQuery<HTMLDivElement>, nPopulate?: boolean ): INavigator;
    enable(): INavigator;
    disable(): INavigator;
    changeIndex( row: number, cb: () => void, is_table?: boolean ): INavigator;
    delete(): void;
    data_backward( $el: JQuery<HTMLElement> ): INavigator;
    data_backward_last( $el: JQuery<HTMLElement> ): INavigator;
    data_forward( $el: JQuery<HTMLElement> ): INavigator;
    data_forward_last( $el: JQuery<HTMLElement> ): INavigator;
    dispose(): INavigator;
}
export declare type ISource = {
    param: any[];
    map: Dct<{
        add_new: string;
        owner: string;
        drop_type: "select" | string;
        drop_def: DropDef;
    }[]>
};
export declare class PageContext implements IPageContext {
    public readonly _query: IRequest;
    public readonly isdialog: boolean;
    public readonly isDisposed: boolean;
    public $ui(): Dialog | void;
    public readonly reg: IPageRegInfo;
    private readonly cmd: ISQLCommand;
    private readonly pageEvent: IPageEvent;
    public readonly elements: Dct<{ $elm: JQuery<HTMLInputElement>; value: any; }>;
    public readonly notification: INotification;
    private readonly sql_def: Dct<ISqlDef>;
    private readonly ___callback: ( () => void )[];
    private readonly _cb: ( status: string ) => void;
    private readonly destroy_event: ( () => void )[];
    private readonly drop_srch_map: Dct<string>;
    private readonly dispose_prop: { key: string; type: string; }[];
    private readonly source: ISource;
    private readonly children: Dct<{
        click?: ( pageCtx: IPageContext ) => void;
        param?: string[] | ( ( pageCtx: IPageContext ) => string[] );
        route?: string;
    }>;
    private readonly _navigator?: INavigator;
    private readonly fm: Dct<ElementInfo>;
    constructor( route: string, $elm: JQuery<HTMLDivElement>, __cb: ( status: string ) => void, isdialog: boolean, ___$ui?: Dialog );
    private postmortem(): void;
    private getInteractive(): Dialog;
    private _: {
        event: {
            fire( evt: string ): ( e: JQueryEventObject ) => void;
        }
    };
    private readonly ajax: JQueryXHR[];
    private readonly data_map?: Dct<any>;
    public __data_navigate: boolean;
    public prepare( containerKey: string ): this;
    // public require( name?: string, b?: string ): any;
    public getElem(): JQuery<HTMLDivElement>;
    public onSearch( data?: any, cb?: ( ...args: any[] ) => void ): void;
    public onDispose(): void;
    public getDependancy(): string[];
    public enableDisable( t: 'e' | 'd' | 'enable' | 'disable', field?: string[] ): void;
    public dumpObj( obj: Dct<any> ): void;
    public dependancyResolve( params: any ): void;
    public onTransportRequest( request: IRequest ): void;
    public quoteLiteral( value?: string ): string;
    public createQuery( obj: Dct<string> ): string;
    public setDisposeProp( keys: ( Dct<any>[] ) | string, type?: string ): this;
    public lockUnlockElm( lock: boolean ): this;
    public alert( cfg: AlertConfig ): void;
    public prompt( cfg: PromptConfig ): void;
    public confirm( cfg: ConfirmConfig ): void;
    public validate( $arg?: JQuery<HTMLDivElement>, allow_invalid?: boolean ): Dct<any> | void;
    public validateKeyup( $arg: JQuery<HTMLInputElement>, async?: boolean ): void;
    public createDropDown( obj: string | { id: string; title: string }[] ): string;
    public _xhr( cfg: JQueryAjaxSettings, s: ( rs: {
        error: boolean;
        response: any;
    } ) => void, e: ( rs: {
        error: boolean;
        response: any;
        jqXHR?: JQueryXHR;
        textStatus?: string;
    } ) => void ): JQueryXHR;
    public xhr( config: XHRConfig ): JQueryXHR;
    public populateDetail( data: Dct<any>, cb?: ( status: string, $owner: JQuery<HTMLDivElement> ) => void, $owner?: JQuery<HTMLDivElement> ): void;
    public populateMaster( row: Dct<any> ): void;
    public printPreview( id: string | ( ( pctx: IPageContext ) => void ), val: any ): IPageContext;
    public print( cb: ( pctx: IPageContext, status: string, index: any ) => void, index: any ): void;
    public delete( cb: ( pctx: IPageContext, status: string, index: number | string ) => void ): void;
    public clear(): IPageContext;
    public getSearchObj( $inst?: JQuery<HTMLDivElement>, type?: string ): Dct<any>;
    public searchObjModify?: ( obj: any[] | Dct<any> ) => void;
    public clean( cb?: () => void ): IPageContext;
    public save( cb: () => void, formobj?: Dct<any>, confirmMsg?: string ): void;
    public search( cb: ( status: string ) => void, obj?: Dct<any>, def?: Dct<any> ): void;
    public __onSearchDataModify?: <T>( data: Dct<T>[] ) => Dct<T>[];
    public loadDropDown( cb: ( status: string ) => void, sdestroy?: boolean ): void;
    public dispose(): void;
    private dragable: {
        keys: JQuery<HTMLElement>[];
        invalid_count: number;
        isValid: ( key: string ) => boolean;
    };
    private regWidget( selector: string ): void;
    public saveObjModify?: <T>( obj: Dct<T> ) => { error: boolean };
    public beforeSearch?: <T>( obj: Dct<T> ) => Dct<T>;
    public resolve( opt: { url: string; route: string; done: () => void } ): void;
}
declare interface InternalWorker {
    [id: string]: ( ...args: any[] ) => InternalWorker;
}
export declare type ISqlDef = { ( pageCtx: IPageContext, pv: string, obj: Dct<any> ):void | Dct<any> | string};
export declare interface IWebUI {
    renderView( route: string, $elm: JQuery<HTMLDivElement>, __cb: ( status: string ) => void, isdialog?: boolean, ___$ui?: Dialog, __container_key?: string ): void;
    getTemplateName( route ): string | void;
    transportRequest( route: string, obj?: IRequest ): IWebUI;
    resolve( opt: { url: string; route: string; done: () => void } ): boolean;
    routeIsRegistred( route: string ): boolean;
    getRouteCtx( route: string, check?: boolean ): boolean | IPageContext;
    regDependency( opt: { dependency: string; url: string } ): void;
    assign( opt: IPageConfig, dependency: string ): IWebUI;
    postmortem(): IWebUI;
    dispose( route: string, cb: void | ( ( status: string ) => void ) ): IWebUI;
    destroy( route: string, cb: void | ( ( status: string ) => void ) ): IWebUI;
    script: {
        remove( route: string ): void;
        append( route: string, script?: string, cb?: ( status: string ) => void ): void;
    };
    openNew( opt: OpenNewWindowConfig ): void;
    getTemplate( templ?: string, cb: ( status: string, template: string ) => void ): void;
}
export declare type OpenNewWindowConfig = {
    dependency?: string;
    draggable?: boolean;
    modal?: boolean;
    resizable?: boolean;
    autoOpen?: boolean;
    url?: string;
    route: string;
    height?: string;
    width?: string;
    position?: { my?: string, at?: string };
    done?: ( ...args: any[] ) => void;
    fail?: ( ...args: any[] ) => void;
};
export declare interface IWeb {
    page( config: IPageConfig ): void;
    UI: IWebUI;
    Template: {
        script: {
            has( identity: string ): boolean;
            remove( identity: string ): boolean;
            parse( identity: string, text: string, cb: () => void ): void;
            register( identity: string, func: () => void ): void;
            run( identity: string, data: string, cb: ( str: string ) => void ): this;
            parse( tname: string, data: string, next: () => void ): void
        }
    };
    userInfo: {
        roleId: string;
        loginId: string;
    };
    Ext: {
        export( need?: string[] ): InternalWorker;
    };
    errorResponse( errorCode: string, $container: JQuery<HTMLElement>, oldResponse: string, cb?: () => void ): void;
    onUnload( route: string, cb: void | ( ( status: string ) => void ) ): this;
    destroy( route: string, cb: void | ( ( status: string ) => void ) ): this;
}