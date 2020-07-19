// @ts-check
/// <reference no-default-lib="true"/>
//#!/usr/bin/env node
/**
* Copyright (c) 2018, SOW ( https://safeonline.world, https://www.facebook.com/safeonlineworld). (https://github.com/safeonlineworld/cwserver) All rights reserved.
* Copyrights licensed under the New BSD License.
* See the accompanying LICENSE file for terms.
*/
// 11:18 PM 7/18/2020
import * as JQuery from 'jquery';
import { Dct, HTMLElement } from './index';
declare type ReqFunc = { ( run: () => void ): void };
declare interface IPageRegInfo {
    window_interactive?: boolean;
    window?: ( pageCtx: PageContext ) => {
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
type AlertConfig = {
    icon?: string;
    title?: string; content: string;
    text?: string;
    btnClass?: string;
    ok?: () => void;
};
type PromptConfig = {
    icon?: string;
    title?: string;
    required?: boolean;
    content?: string[] | string;
    ok: ( val: any ) => void;
    cancel: () => void;
};
type ConfirmConfig = {
    icon?: string;
    title?: string;
    required?: boolean;
    content?: string[] | string;
    confirm: ( inst: JQuery<HTMLElement> ) => void;
    onContentReady?: () => void;
    cancel: ( msg: string, inst: JQuery<any> ) => void;
};
type XHRConfig = {
    uri: string;
    def: Dct<any>;
    sp: string;
    validate: boolean;
    module: string;
    done( rs: { ret_val: number; ret_msg: string; ret_data_table: any; } ): void;
    fail( rs: { ret_val: number; ret_msg: string; ret_data_table: any; } | string ): void;
};
export declare class PageContext {
    public readonly isdialog: boolean;
    public readonly $ui: JQuery<HTMLElement>;
    public readonly reg: IPageRegInfo;
    public readonly elements: Dct<{ $elm: JQuery<HTMLElement>; value: any; }>;
    private readonly destroy_event: ( () => void )[];
    private readonly drop_srch_map: Dct<string>;
    private readonly dispose_prop: { key: string; type: string; }[];
    private readonly source: { param: any[]; map: Dct<any> }[];
    constructor();
    private postmortem(): void;
    private get_interactive(): JQuery<HTMLElement>;
    private getMap( key: string ): void;
    private _: {
        event: {
            fire( evt: string ): ( e: any ) => void;
        }
    };
    public getElem(): JQuery<HTMLElement>;
    public onSearch( data?: any, cb?: ( ...args: any[] ) => void ): void;
    public onRender( req: ReqFunc, query: Dct<any> ): void;
    public onDispose(): void;
    public getDependancy(): PageContext[];
    public enable_disable( t: 'enable' | 'disable', field?: string[] ): void;
    public dump_obj( obj: Dct<any> ): void;
    public dependancy_resolve( params: any ): void;
    public onTransportRequest( request: any ): void;
    public quote_literal( value?: string ): string;
    public create_query( obj: Dct<string> ): string;
    public set_dispose_prop( keys: ( Dct<any>[] ) | string, type?: string ): this;
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
}
declare class PageConfig extends PageContext {
    private readonly cmd: ISQLCommand;
    private readonly fm: IFormInfo;
    constructor();
    private customEvent( req: ReqFunc ): void;
    public onReady( pageCtx: PageContext, query: Dct<any> ): void;
}
export declare interface IWeb {
    page( config: PageConfig ): void;
}