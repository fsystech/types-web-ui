// @ts-check
//#!/usr/bin/env node
/**
* Copyright (c) 2018, SOW ( https://safeonline.world, https://www.facebook.com/safeonlineworld). (https://github.com/safeonlineworld/cwserver) All rights reserved.
* Copyrights licensed under the New BSD License.
* See the accompanying LICENSE file for terms.
*/
// 11:18 PM 7/18/2020
import * as JQuery from 'jquery';
import { Dct, HTMLElement } from './sow-framework';
declare type ReqFunc = { ( run: () => void ): void };
declare interface IPageRegInfo {
    window_interactive?: boolean;
    window?: ( pageCtx: IPageContext ) => {
        maximize( evt: any, dlg: any ): void;
        minimize( evt: any, dlg: any ): void;
        restore( evt: any, dlg: any ): void;
    };
    event_arry: string[];
    route: string;
    key: string;
    icon?: string;
    title: string;
    info: {
        primary_key: {
            id: undefined;
            value: string | number;
        };
        src_key: string[];
        navigator?: boolean;
        has_master: boolean;
        has_detail: boolean;
        search_detail: {
            show: boolean;
            template: string;
            header?: string[];
            poperty?: string[];
            detail_event?: boolean;
            onRender(): void;
            beforeRender?: ( data: any ) => void;
        };
    };
    toolbar?: boolean;
    button: {
        footer: {
            align: string;
            title: string;
            callback: ( e: any ) => void;
        };
    } | Dct<any>;
    dynamic_report: boolean;
    report: ( event: any ) => void;
}
declare interface IPageConfig {
    readonly reg: IPageRegInfo;
    readonly cmd: ISQLCommand;
    readonly fm: IFormInfo;
    customEvent( req: ReqFunc ): void;
    onReady( pageCtx: IPageContext, query: Dct<any> ): void;
    onDispose( pageCtx: IPageContext ): void;
}
declare interface ISQLCommand {
    iu: Dct<any>;
    d: Dct<any>;
    s: {
        type: string;
        sp: string;
        validate: boolean;
        module: string;
    } | Dct<any>;
    __dd: Dct<any>;
    lq: Dct<any>;
}
declare interface IFormInfo {
    tabs: {
        header: Dct<any>;
        footer: Dct<any>;
    };
    header: any[];
    footer: any[];
}
declare type AlertConfig = {
    icon?: string;
    title?: string; content: string;
    text?: string;
    btnClass?: string;
    ok?: () => void;
};
declare type PromptConfig = {
    icon?: string;
    title?: string;
    required?: boolean;
    content?: string[] | string;
    ok: ( val: any ) => void;
    cancel: () => void;
};
declare type ConfirmConfig = {
    icon?: string;
    title?: string;
    required?: boolean;
    content?: string[] | string;
    confirm: ( inst: JQuery<HTMLElement> ) => void;
    onContentReady?: () => void;
    cancel: ( msg: string, inst: JQuery<any> ) => void;
};
declare type XHRConfig = {
    uri: string;
    def: Dct<any>;
    sp: string;
    validate: boolean;
    module: string;
    done( rs: { ret_val: number; ret_msg: string; ret_data_table: any; } ): void;
    fail( rs: { ret_val: number; ret_msg: string; ret_data_table: any; } | string ): void;
};
declare interface INotification {
    clean(): void;
    exit( $el?: JQuery<HTMLElement> ): void;
    show( msg: string, cls?: string, interval?: number ): void;
}
declare interface IPageContext {
    readonly isdialog: boolean;
    readonly $ui: JQuery<HTMLElement>;
    readonly reg: IPageRegInfo;
    readonly elements: Dct<{ $elm: JQuery<HTMLElement>; value: any; }>;
    readonly _query: Dct<any>;
    getElem(): JQuery<HTMLElement>;
    onSearch( data?: any, cb?: ( ...args: any[] ) => void ): void;
    onRender( req: ReqFunc, query: Dct<any> ): void;
    onDispose(): void;
    getDependancy(): IPageContext[];
    enableDisable( t: 'enable' | 'disable', field?: string[] ): void;
    dumpObj( obj: Dct<any> ): void;
    dependancy_resolve( params: any ): void;
    onTransportRequest( request: any ): void;
    quoteLiteral( value?: string ): string;
    createQuery( obj: Dct<string> ): string;
    setDisposeProp( keys: ( Dct<any>[] ) | string, type?: string ): this;
    lockUnlockElm( lock: boolean ): this;
    alert( cfg: AlertConfig ): void;
    prompt( cfg: PromptConfig ): void;
    confirm( cfg: ConfirmConfig ): void;
    validate( $arg?: JQuery<HTMLElement>, allow_invalid?: boolean ): Dct<any> | void;
    validateKeyup( $arg: JQuery<HTMLElement>, async?: boolean ): void;
    createDropDown( obj: string | { id: string; title: string }[] ): string;
    _xhr( cfg: JQuery.AjaxSettings, s: ( rs: {
        error: boolean;
        response: any;
    } ) => void, e: ( rs: {
        error: boolean;
        response: any;
        jqXHR?: JQuery.jqXHR<any>;
        textStatus?: string;
    } ) => void ): JQuery.jqXHR<any>;
    xhr( config: XHRConfig ): JQuery.jqXHR<any>;
    populateDetail( data: Dct<any>, cb?: ( status: string, $owner: JQuery<HTMLElement> ) => void, $owner?: JQuery<HTMLElement> ): void;
    populateMaster( row: Dct<any> ): void;
    printPreview( id: string | ( ( pctx: IPageContext ) => void ), val: any ): IPageContext;
    print( cb: ( pctx: IPageContext, status: string, index: any ) => void, index: any ): void;
    delete( cb: ( pctx: IPageContext, status: string, index: number | string ) => void ): void;
    clear(): IPageContext;
    getSearchObj( $inst?: JQuery<HTMLElement>, type?: string ): void;
    searchObjModify?: ( obj: any[] | Dct<any> ) => void;
    clean( cb?: () => void ): IPageContext;
    save( cb: () => void, formobj?: Dct<any>, confirmMsg?: string ): void;
    search( cb: ( status: string ) => void, obj?: Dct<any>, def?: Dct<any> ): void;
    __onSearchDataModify?: ( data: Dct<any>[] ) => void;
    loadDropDown( cb: ( status: string ) => void, sdestroy?: boolean ): void;
    readonly notification: INotification;
}
export declare class PageContext implements IPageContext {
    public readonly _query: Dct<any>;
    public readonly isdialog: boolean;
    public readonly $ui: JQuery<HTMLElement>;
    public readonly reg: IPageRegInfo;
    public readonly elements: Dct<{ $elm: JQuery<HTMLElement>; value: any; }>;
    public readonly notification: INotification;
    private readonly ___callback: ( () => void )[];
    private readonly destroy_event: ( () => void )[];
    private readonly drop_srch_map: Dct<string>;
    private readonly dispose_prop: { key: string; type: string; }[];
    private readonly source: { param: any[]; map: Dct<any> }[];
    private readonly children: Dct<any>;
    constructor();
    private postmortem(): void;
    private get_interactive(): JQuery<HTMLElement>;
    private getMap( key: string ): void;
    private _: {
        event: {
            fire( evt: string ): ( e: any ) => void;
        }
    };
    private readonly __data_navigate: boolean;
    public getElem(): JQuery<HTMLElement>;
    public onSearch( data?: any, cb?: ( ...args: any[] ) => void ): void;
    public onRender( req: ReqFunc, query: Dct<any> ): void;
    public onDispose(): void;
    public getDependancy(): IPageContext[];
    public enableDisable( t: 'enable' | 'disable', field?: string[] ): void;
    public dumpObj( obj: Dct<any> ): void;
    public dependancyResolve( params: any ): void;
    public onTransportRequest( request: any ): void;
    public quoteLiteral( value?: string ): string;
    public createQuery( obj: Dct<string> ): string;
    public setDisposeProp( keys: ( Dct<any>[] ) | string, type?: string ): this;
    public lockUnlockElm( lock: boolean ): this;
    public alert( cfg: AlertConfig ): void;
    public prompt( cfg: PromptConfig ): void;
    public confirm( cfg: ConfirmConfig ): void;
    public validate( $arg?: JQuery<HTMLElement>, allow_invalid?: boolean ): Dct<any> | void;
    public validateKeyup( $arg: JQuery<HTMLElement>, async?: boolean ): void;
    public createDropDown( obj: string | { id: string; title: string }[] ): string;
    public _xhr( cfg: JQuery.AjaxSettings, s: ( rs: {
        error: boolean;
        response: any;
    } ) => void, e: ( rs: {
        error: boolean;
        response: any;
        jqXHR?: JQuery.jqXHR<any>;
        textStatus?: string;
    } ) => void ): JQuery.jqXHR<any>;
    public xhr( config: XHRConfig ): JQuery.jqXHR<any>;
    public populateDetail( data: Dct<any>, cb?: ( status: string, $owner: JQuery<HTMLElement> ) => void, $owner?: JQuery<HTMLElement> ): void;
    public populateMaster( row: Dct<any> ): void;
    public printPreview( id: string | ( ( pctx: IPageContext ) => void ), val: any ): IPageContext;
    public print( cb: ( pctx: IPageContext, status: string, index: any ) => void, index: any ): void;
    public delete( cb: ( pctx: IPageContext, status: string, index: number | string ) => void ): void;
    public clear(): IPageContext;
    public getSearchObj( $inst?: JQuery<HTMLElement>, type?: string ): void;
    public searchObjModify?: ( obj: any[] | Dct<any> ) => void;
    public clean( cb?: () => void ): IPageContext;
    public save( cb: () => void, formobj?: Dct<any>, confirmMsg?: string ): void;
    public search( cb: ( status: string ) => void, obj?: Dct<any>, def?: Dct<any> ): void;
    public __onSearchDataModify?: ( data: Dct<any>[] ) => void;
    public loadDropDown( cb: ( status: string ) => void, sdestroy?: boolean ): void;
}
export declare interface IWeb {
    page( config: IPageConfig ): void;
}