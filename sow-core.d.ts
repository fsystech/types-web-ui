// @ts-check
// Type definitions for sow-web-ui
// Project: https://safeonline.world/
// Definitions by: Rajib Chy <https://github.com/rajibchy>

/// <reference types="jquery"/>
/// <reference types="node"/>
import * as JQuery from 'jquery';
// import { Dct } from './sow-framework';

declare type ReqFuncs = { xhr: JQueryXHR };
declare type ReqFunc = { (name?: string, b?: string): void };
declare type SearchDetail = {
    [id: string]: any;
    show: boolean;
    template: string;
    header?: any[];
    poperty?: any[];
    tablesorter?: boolean;
    jQDataTable?: {
        addDefaultButtons?: boolean;
        settings?: DataTables.Settings;
        table?: DataTables.Api;
    };
    detail_event?: boolean | {
        on_page_ready: (pagctx: IPageContext) => void;
    };
    onRender(pagctx: IPageContext, $owner: JQuery<HTMLElement>): void;
    beforeRender?: (pagctx: IPageContext, data: any) => void;
    dump?: (pagctx: IPageContext, $owner: JQuery<HTMLElement>, resp: any) => void;
};
export declare interface IPageRegInfo {
    template?: string | 'SRC__DEFAULT__';
    /** Keep Enabled Parent Window While Opening Child By Me */
    keepMeEnable?: boolean;
    window_interactive?: boolean;
    window?: (pageCtx: IPageContext) => {
        maximize(evt: JQuery.Event, dlg: JQueryUI.Dialog): void;
        minimize(evt: JQuery.Event, dlg: JQueryUI.Dialog): void;
        restore(evt: JQuery.Event, dlg: JQueryUI.Dialog): void;
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
        search_detail: SearchDetail;
    };
    toolbar?: {
        disabled?: boolean;
        buttons?: string[];
        disabledButtons?: string[];
        enabled?: string[];
        reload?: ((cb: (pagctx: IPageContext) => void, pagctx: IPageContext) => void) | boolean;
        clean?: {
            before?: (pagctx: IPageContext) => void;
            after?: (pagctx: IPageContext) => void
        };
        save?: {
            before?: (pagctx: IPageContext, $owner: JQuery<HTMLElement>) => void;
            after?: (pagctx: IPageContext, resp: any, isUpdate: boolean) => void;
        };
        delete?: {
            before?: (pagctx: IPageContext, $owner: JQuery<HTMLElement>) => void;
            after?: (pagctx: IPageContext, resp: any) => void;
        };
        search?: {
            before?: (pagctx: IPageContext, $owner: JQuery<HTMLElement>) => void;
            after?: (pagctx: IPageContext, resp: any) => void;
        };
    };
    button?: {
        footer: {
            align: string;
            title: string;
            callback: (e: any) => void;
        };
    } | Dct<any>;
    dynamic_report: boolean;
    report: (event: any) => void;
    /**
     *  Create `Print Preview` accordingly `IPrintConfig`
     *  
     * `url: string;`
     * `name?: string;`
     * `specs?: string;`
     * 
     * `parent_window?: boolean;`
     * `self_print?: boolean;`
    */
    print_settings?: (pagctx: IPageContext, primaryKey: string, index: any) => IPrintConfig;
}
export declare interface IPrintConfig {
    url: string; name?: string;
    specs?: string;
    parent_window?: boolean;
    self_print?: boolean;
}
declare interface IPageConfig {
    readonly reg: IPageRegInfo;
    readonly cmd: ISQLCommand;
    readonly fm: IFormInfo;
    beforeRegEvent?: (pageCtx: IPageContext) => void;
    customEvent(pageCtx: IPageContext): void;
    onReady(pageCtx: IPageContext): void;
    onDispose(pageCtx: IPageContext): void;
}
export declare interface IPageEvent {
    customEvent(pageCtx: IPageContext): void;
    onReady(pageCtx: IPageContext): void;
    onDispose(pageCtx: IPageContext): void;
    beforeRegEvent(pageCtx: IPageContext): void;
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
        def_type?: 'query';
        type?: 'SQL' | 'SP';
        sp?: string;
        sql?: string | ((pageCtx: IPageContext, obj?: Dct<any>) => string);
        validate: boolean;
        module: string;
        table?: string;
        schema?: string;
    };
    readonly __dd?: CommandConf;
    readonly lq?: CommandConf;
}
export declare type ExternalLink = {
    param?: string[] | ((pageCtx: IPageContext) => string[]);
    paramName?: string;
    dependency?: string;
    route: string;
    width: string;
    height: string;
    position?: { my?: string, at?: string },
    modal: boolean;
    resizable: boolean;
    click?: (pageCtx: IPageContext) => void;
    done?: (t: string) => void;
    fail?: () => void;
}
export declare type ElementRules = {
    /** Ensure this value data type*/
    m?: 'text' | 'numeric' | 'boolean' | 'url' | 'date' | 'email' | 'mobile' | 'multiple',
    /** Maximum length of value */
    max?: number,
    /** Minimum length of value */
    min?: number,
    /** Is this required */
    required?: boolean
}
/** Form element config */
export declare type ElementInfo = {
    /** Define the type of `element` */
    readonly t: 'input' | 'textarea' | 'dropdown' | 'date' | 'switch' | 'html' | 'widget' | 'multiple';
    /** this is element name */
    readonly name?: string;
    /** Can use this element when search tigger ? */
    readonly src?: boolean;
    /** Use this rules for this element `validation` */
    readonly rules?: ElementRules;
    /** Custom `style` for this element */
    readonly style?: string;
    /** Define sql field name. It will use while perform `search/update/insert` (Like as your db table column name e.g. `id` or `schema.id`) */
    readonly sql?: string;
    /** If value type `string` then you can allow `ilike=%value%` in sql statement. */
    readonly ilike?: boolean;
    /** Define this element width (`bootstrap col width 12/1`) */
    readonly w: number;
    /** this element accept `drop` */
    readonly dropable?: boolean;
    /** this element accept drag */
    readonly dragable?: boolean;
    /** this element custom `class` */
    readonly cls?: string;
    /** This is element label */
    readonly title?: string;
    /** Cust element HTML */
    readonly html?: string | (() => string);
    /** Element attribute */
    readonly attr?: string;
    /** It will use while you allow `dragable` or `dropable` this `element` */
    readonly z_index?: number;
    /** Is this element disabled ? */
    readonly disabled?: boolean;
    /** each value add custom `data-event-your-value` attribute  */
    readonly event?: Dct<(pageCtx: IPageContext, e: JQuery.Event, $owner: JQuery<HTMLElement>) => void>;
    /** it will use while your element type is switch. You can use on|off */
    readonly text?: string;
    /** Element `placeholder` */
    readonly p?: string;
    /** Define this element is `read only` */
    readonly read_only?: boolean;
    /** Use this external link for this element */
    readonly external_link?: string | ((conf: ExternalLink, pageCtx: IPageContext) => ExternalLink);
    /** Set default value for this `element`. If this is true then this attribute `data-default-value="false"` will be set in element */
    readonly default_value?: boolean;
    /** widget key. It will be effect in `widget element` */
    readonly widget?: string;
    /** Default dropdown source data */
    readonly data?: { id: any; title: any; selected?: boolean }[];
    /** It will be effect while your element type is `dropdown`*/
    readonly source?: ((pageCtx: IPageContext) => SourceType) | 'OWN' | SourceType;
    /** Define the dropdown type. It will be effect while your element type is `dropdown` */
    readonly drop_type?: "select" | "selectize" | string;
};
export declare interface ISelectizeConfig {
    options?: any[];
    optgroups?: any[];
    maxItems?: number;
    valueField?: string;
    labelField?: string;
    searchField?: string | any[];
    create?: boolean;
    preload?: boolean;
    persist?: boolean;
    delimiter?: string;
    optgroupField?: string;
    optgroupLabelField?: string;
    optgroupValueField?: string;
    lockOptgroupOrder?: boolean;
    plugins?: string[];
}
export declare type DropDef = {
    url?: string; sp: ((pageCtx: IPageContext) => void) | string;
    param?: (obj: Dct<any>) => Dct<any>;
    selectize_config?: ISelectizeConfig;
};
declare type SourceType = {
    query?: string;
    schema?: string;
    table?: string;
    /** If this element auto load enable. Then it's should be provide. */
    poperty?: string;
    type?: "SQL" | "SP" | "TABLE";
    add_new?: string;
    search_poperty?: string;
    drop_type?: "selectize";
    /** Define this `element` can be auto load. `If false` it's can be `KeyUp` */
    load?: boolean;
    drop_def?: DropDef | ISelectizeConfig | ((obj: Dct<any>, pageCtx: IPageContext, lookup: (look: DropDef) => Selectize.IOptions<any, any>) => void);
};
export declare interface IWidget {
    readonly title: string;
    readonly key: string;
    readonly collapse: boolean;
    readonly fields: Dct<ElementInfo>[];
}
declare interface ITypeofTabs {
    title: string;
    key?: string;
    active?: boolean;
    fields: Dct<ElementInfo>[];
}
export declare interface IFormInfo {
    tabs?: {
        header?: ITypeofTabs[];
        footer?: ITypeofTabs[];
    };
    header?: Dct<ElementInfo>[];
    footer?: Dct<ElementInfo>[];
    widget?: {
        header?: IWidget[];
        footer?: IWidget[];
        settings?: {
            header: Dct<{ title: string; collapse: boolean; }>;
            footer: Dct<{ title: string; collapse: boolean; }>;
        }
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
    readonly required?: boolean | Dct<any>;
    readonly content?: string[] | string;
    ok: (val: any) => void;
    cancel: () => void;
};
declare type ConfirmConfig = {
    readonly icon?: string;
    readonly title?: string;
    readonly required?: boolean;
    readonly content?: string[] | string;
    confirm: (inst: JQuery<HTMLElement>) => void;
    readonly onContentReady?: () => void;
    cancel: (msg: string, inst: JQuery<any>) => void;
};
declare type XHRConfig = {
    readonly uri?: string;
    readonly def: Dct<any>;
    readonly sp: string;
    readonly validate: boolean;
    readonly module: string;
    readonly data_required?: boolean;
    abort?: (status: string, xhr: JQueryXHR, textStatus?: string, error?: string) => void;
    done(rs: { ret_val: number; ret_msg: string; ret_data_table: any; }): void;
    fail(rs: { ret_val: number; ret_msg: string; ret_data_table: any; } | string, xhr?: JQueryXHR, textStatus?: string, error?: string): void;
};
export declare type DatabaseRequestConfig = {
    route: string;
    uri?: string;
    def: Dct<any>;
    conf?: CommandConf;
    done(data: { ret_val: number; ret_msg: string; ret_data_table: any }): void;
    fail(jqXHR: JQueryXHR, textStatus?: string, error?: string): void;
};
declare interface INotification {
    /** Clean notification */
    clean(): void;
    /** Exit notification */
    exit(): void;
    /** Show notificaton */
    show(msg: string, cls?: string, interval?: number): void;
}
export declare type IRequest = {
    route: string;
    original: string;
    param: Dct<any>;
    populate: <T>(reqObj?: Dct<T>) => Dct<T>;
};
export declare interface IExHandsonTable {
    /** Clean `HandsonTable` with empty `dataSet` */
    cleanHandsonTable(): void;
    /** Invoke `hot.loadData`. If `data.length` < `minLength` then create remaining empty line*/
    loadDetail(data: any[]): void;
    /** create empty `DataSet` for `handsontable` */
    createEmptyDataSet(count: number, data: any[]): void;
    /** Resize `HandsonTable` */
    resize(): void;
}
export declare interface IWebDatabase {
    /** Close all active connection */
    closeAllConn(): void;
    /** Close Connection */
    close(key: string): void;
    /** Execute plain text query */
    executeQuery(query: string, arr: any[], next: (res: IWebDatabaseResponse) => void): string;
    /** Execute stored procedure to database */
    executeIO(query: string, obj: any[] | Dct<any>, next: (res: IWebDatabaseResponse) => void, validate?: boolean): string;
    /** Dispose current `dbContext` */
    dispose(): void;
}
export declare interface IPageContextElement {
    /** This `context` `InputElement` `JQuery<HTMLInputElement>` */
    $elm: JQuery<HTMLInputElement>;
    /** Any type of value this `HTMLInputElement` */
    value: any;
}
export declare interface IPageContext {
    readonly isdialog: boolean;
    readonly reg: IPageRegInfo;
    /** Current `IPageContext` `HTMLElement`s */
    readonly elements: Dct<IPageContextElement>;
    readonly _query: IRequest;
    readonly notification: INotification;
    /** Page container */
    readonly $container: JQuery<HTMLElement>;
    readonly destroy_event: (() => void)[];
    __data_navigate: boolean;
    isDisabled: boolean;
    msgBoxOpenCount: number;
    hot: IExHandsonTable;
    /** Create communication with database by `XMLHTTPRequest` */
    db: IWebDatabase;
    prepare(containerKey: string): void;
    $ui(): JQueryUI.Dialog | void;
    getInteractive(): JQueryUI.Dialog;
    onSearch(data?: any, cb?: (...args: any[]) => void): void;
    onDispose(): void;
    destroyDetailTable(): void;
    getDependency(): string[];
    enableDisable(t: 'enable' | 'disable', field?: string[]): void;
    dumpObj(obj: Dct<any>): void;
    dependencyResolve(params: any): void;
    onTransportRequest(request: IRequest): void;
    quoteLiteral(value?: string): string;
    /** Create `SQL Statement` from `Dct<any>` */
    createQuery(obj: Dct<string>, sqlDef?: Dct<ISqlDef>): string;
    setDisposeProp(keys: (Dct<any>[]) | string, type?: string): void;
    lockUnlockElm(lock: boolean): void;
    alert(cfg: AlertConfig): void;
    prompt(cfg: PromptConfig): void;
    confirm(cfg: ConfirmConfig): void;
    validate($arg?: JQuery<HTMLElement>, allow_invalid?: boolean): Dct<any> | void;
    validateKeyup($arg: JQuery<HTMLElement>, async?: boolean): void;
    createDropDown(obj: string | { id: string; title: string }[]): string;
    _xhr(cfg: JQueryAjaxSettings, s: (rs: {
        error: boolean;
        response: any;
    }) => void, e: (rs: {
        error: boolean;
        response: any;
        jqXHR?: JQueryXHR;
        textStatus?: string;
    }) => void): JQueryXHR;
    xhr(config: XHRConfig): JQueryXHR;
    populateDetail(data: Dct<any>, cb?: (status: string, $owner?: JQuery<HTMLElement>) => void, $owner?: JQuery<HTMLElement>): void;
    populateMaster(row: Dct<any>): void;
    printPreview(id: string | ((pctx: IPageContext) => void), val: any): IPageContext;
    print(cb: (pctx: IPageContext, status: string, index?: any) => void, index?: any): void;
    delete(cb: (status: string, index: number | string) => void): void;
    clear($elem?: JQuery<HTMLElement>): IPageContext;
    getSearchObj($inst?: JQuery<HTMLElement>, type?: string): Dct<any> | any[];
    searchObjModify?: (obj: any[] | Dct<any>) => void;
    clean(cb?: (status: string) => void): IPageContext;
    save(cb: (status: string, retVal?: number, isUpdate?: boolean) => void, formobj?: Dct<any>, confirmMsg?: string, afterSave?: (res: { ret_val: number; isUpdate: boolean; }, next: () => void) => void): void;
    search(cb: (status: string) => void, obj?: Dct<any>, def?: Dct<any>): void | JQuery.jqXHR<any>;
    __onSearchDataModify?: (data: Dct<any>[]) => Dct<any>[];
    loadDropDown(cb: (status: string) => void, sdestroy?: boolean): void;
    saveObjModify?: (obj: Dct<any>) => { error: boolean; msg?: string };
    beforeSearch?: (obj: Dct<any>) => Dct<any>;
    /** This method will be throw if `DropzoneExtend.export` does not invoked yet */
    clean_dropzone(): void;
    /** This method will be throw if `DropzoneExtend.export` does not invoked yet */
    dropzone_dispose(): void;
    /** If this `window` is `child` then `window` will be `shake` */
    shake(): void;
    /** Build `search` `param` with after */
    buildSearchParam(arr: { poperty: string; value: any }[]): { param: { poperty: string; value: any }[], after_subquery?: string; };
}
export declare interface INavigator {
    getData(): Dct<any>;
    populate(): INavigator;
    populate_row(row: Dct<any>, cb: () => void): INavigator;
    update(row: Dct<any>): INavigator;
    getDetail$(): JQuery<HTMLElement> | void;
    reset(): INavigator;
    setData(data: Dct<any>[], $tabel?: JQuery<HTMLElement>, nPopulate?: boolean): INavigator;
    enable(): INavigator;
    disable(): INavigator;
    changeIndex(row?: number, cb?: () => void, is_table?: boolean): INavigator;
    delete(obj: Dct<any>): void;
    data_backward($el: JQuery<HTMLElement>): INavigator;
    data_backward_last($el: JQuery<HTMLElement>): INavigator;
    data_forward($el: JQuery<HTMLElement>): INavigator;
    data_forward_last($el: JQuery<HTMLElement>): INavigator;
    dispose(): INavigator;
}
export declare type ISource = {
    param: any[];
    map: Dct<{
        add_new: string;
        owner: string;
        drop_type: "select" | string;
        drop_def: DropDef | ISelectizeConfig;
    }[]>
};
export declare interface PageContexConstructor {
    new(req: IRequest, $elm: JQuery<HTMLElement>, cb: (status: string) => void, isdialog?: boolean, $ui?: JQueryUI.Dialog): PageContext;
    readonly prototype: PageContext;
}

export declare class PageContext implements IPageContext {
    public readonly _query: IRequest;
    public readonly isdialog: boolean;
    public readonly isDisposed: boolean;
    public $ui(): JQueryUI.Dialog | void;
    public readonly $container: JQuery<HTMLElement>;
    public readonly reg: IPageRegInfo;
    public readonly destroy_event: (() => void)[];
    private cmd: ISQLCommand;
    private pageEvent: IPageEvent;
    public elements: Dct<IPageContextElement>;
    public notification: INotification;
    private sql_def: Dct<ISqlDef>;
    private ___callback: (() => void)[];
    private _cb: (status: string) => void;
    private drop_srch_map: Dct<string>;
    private dispose_prop: { key: string; type: string; }[];
    private source: ISource;
    private children: Dct<{
        click?: (pageCtx: IPageContext) => void;
        param?: string[] | ((pageCtx: IPageContext) => string[]);
        route?: string;
    }>;
    private _navigator?: INavigator;
    private fm: Dct<ElementInfo>;
    private isShaking: boolean;
    constructor(route: string, $elm: JQuery<HTMLElement>, __cb: (status: string) => void, isdialog: boolean, ___$ui?: JQueryUI.Dialog);
    private postmortem(): void;
    private _: {
        event: {
            fire(evt: string): (e: JQuery.Event) => void;
        }
    };
    private readonly ajax: JQueryXHR[];
    private readonly data_map?: Dct<any>;
    public hot: IExHandsonTable;
    public db: IWebDatabase;
    public msgBoxOpenCount: number;
    public isDisabled: boolean;
    public __data_navigate: boolean;
    public getInteractive(): JQueryUI.Dialog;
    public prepare(containerKey: string): void;
    public onSearch(data?: any, cb?: (...args: any[]) => void): void;
    public onDispose(): void;
    public destroyDetailTable(): void;
    public getDependency(): string[];
    public enableDisable(t: 'e' | 'd' | 'enable' | 'disable', field?: string[]): void;
    public dumpObj(obj: Dct<any>): void;
    public dependencyResolve(params: any): void;
    public onTransportRequest(request: IRequest): void;
    public quoteLiteral(value?: string): string;
    /** Create `SQL Statement` from `Dct<any>` */
    public createQuery(obj: Dct<string>, sqlDef?: Dct<ISqlDef>): string;
    public setDisposeProp(keys: (Dct<any>[]) | string, type?: string): void;
    public lockUnlockElm(lock: boolean): void;
    public alert(cfg: AlertConfig): void;
    public prompt(cfg: PromptConfig): void;
    public confirm(cfg: ConfirmConfig): void;
    public validate($arg?: JQuery<HTMLElement>, allow_invalid?: boolean): Dct<any> | void;
    public validateKeyup($arg: JQuery<HTMLInputElement>, async?: boolean): void;
    public createDropDown(obj: string | { id: string; title: string }[]): string;
    public _xhr(cfg: JQueryAjaxSettings, s: (rs: {
        error: boolean;
        response: any;
    }) => void, e: (rs: {
        error: boolean;
        response: any;
        jqXHR?: JQueryXHR;
        textStatus?: string;
    }) => void): JQueryXHR;
    public xhr(config: XHRConfig): JQueryXHR;
    public populateDetail(data: Dct<any>, cb?: (status: string, $owner?: JQuery<HTMLElement>) => void, $owner?: JQuery<HTMLElement>): void;
    public populateMaster(row: Dct<any>): void;
    public printPreview(id: string | ((pctx: IPageContext) => void), val: any): IPageContext;
    public print(cb: (pctx: IPageContext, status: string, index: any) => void, index: any): void;
    public delete(cb: (status: string, index: number | string) => void): void;
    public clear($elem?: JQuery<HTMLElement>): IPageContext;
    public getSearchObj($inst?: JQuery<HTMLElement>, type?: string): Dct<any> | any[];
    public searchObjModify?: (obj: any[] | Dct<any>) => void;
    public clean(cb?: (status: string) => void): IPageContext;
    public save(cb: (status: string, retVal?: number, isUpdate?: boolean) => void, formobj?: Dct<any>, confirmMsg?: string, afterSave?: (res: { ret_val: number; isUpdate: boolean; }, next: () => void) => void): void;
    public search(cb: (status: string) => void, obj?: Dct<any>, def?: Dct<any>): void | JQuery.jqXHR<any>;
    public __onSearchDataModify?: (data: Dct<any>[]) => Dct<any>[];
    public loadDropDown(cb: (status: string) => void, sdestroy?: boolean): void;
    public dispose(): void;
    private dragable: {
        keys: JQuery<HTMLElement>[];
        invalid_count: number;
        isValid: (key: string) => boolean;
    };
    private regWidget(selector: string): void;
    public saveObjModify?: (obj: Dct<any>) => { error: boolean; msg?: string };
    public beforeSearch?: (obj: Dct<any>) => Dct<any>;
    public resolve(opt: { url: string; route: string; done: () => void }): void;
    public clean_dropzone(): void;
    public dropzone_dispose(): void;
    public shake(): void;
    /** Build `search` `param` with after */
    public buildSearchParam(arr: { poperty: string; value: any }[]): { param: { poperty: string; value: any }[], after_subquery?: string; };
}
declare interface InternalWorker {
    [id: string]: (...args: any[]) => InternalWorker;
}
export declare type ISqlDef = { (pageCtx: IPageContext, pv: string, obj: Dct<any>): void | Dct<any> | string };
// 12:37 AM 11/12/2020 by rajib chy
export declare interface IWatermark {
    /** Clear `Watermark` from given `HTMLElement`*/
    clear($elem: JQuery<HTMLElement>): void;
    /** Set `Accepted` `Watermark` in given `HTMLElement`*/
    accepted($elem: JQuery<HTMLElement>): void;
    /** Set `Rejected` `Watermark` in given `HTMLElement`*/
    rejected($elem: JQuery<HTMLElement>): void;
    /** Set `Transferred` `Watermark` in given `HTMLElement`*/
    transferred($elem: JQuery<HTMLElement>): void;
    /** Set `Checked` `Watermark` in given `HTMLElement`*/
    checked($elem: JQuery<HTMLElement>): void;
    /** Set `Verified` `Watermark` in given `HTMLElement`*/
    verified($elem: JQuery<HTMLElement>): void;
    /** Set `Approved` `Watermark` in given `HTMLElement`*/
    approved($elem: JQuery<HTMLElement>): void;
    /** Set `Authorized` `Watermark` in given `HTMLElement`*/
    authorized($elem: JQuery<HTMLElement>): void;
}
interface IWebForm {
    /** Generate `form` from `Dct<ElementInfo>[]` */
    generate(fm: Dct<ElementInfo>[]): { fields: Dct<ElementInfo>; sql_def: Dct<ISqlDef>; body: string; };
    /** Render `form` according to `IFormInfo` in given `container` */
    render(fm: IFormInfo, $elm: JQuery<HTMLElement>): { fields: Dct<ElementInfo>; sql_def: Dct<ISqlDef> };
}
interface IPageContextScript {
    /** Remove given `route` `script` `context` from `global` `isolate` */
    remove(route: string): void;
    /** Run given `script` in current `document` with `global` `context`  */
    append(route: string, script?: string, cb?: (status: string) => void): void;
}
export declare interface IWebUI {
    /** Render given `route`, if already been registered */
    renderView(route: string, $elm: JQuery<HTMLElement>, __cb: (status: string) => void, isdialog?: boolean, ___$ui?: JQueryUI.Dialog, __container_key?: string): void;
    /** Get given `route` template name */
    getTemplateName(route): string | void;
    /** Communicate current `IPageContext` to given `route` `IPageContext` */
    transportRequest(route: string, obj?: IRequest): IWebUI;
    /** Reslove given `route`. If already has `IPageContext`  */
    resolve(opt: { url: string; route: string; done: () => void }): boolean;
    /** Check given `route` is registred ? */
    routeIsRegistred(route: string): boolean;
    /** Set this route is `IPageContext` */
    active(route: string, e?: JQuery.ClickEvent): void;
    /** Get active `route` */
    active(): string;
    /** Get Active `IPageContext` */
    getActiveCtx(): IPageContext;
    /** Get Active `route` */
    getActiveRoute(): string;
    /** Check this `route` is exists */
    isRouteExists(route: string): boolean;
    /** Check this `route`  `IPageContext`*/
    getRouteCtx(route: string): IPageContext;
    /** Register current `route` dependency. */
    regDependency(opt: { dependency: string; url: string }): void;
    /** Add new web-page config */
    assign(opt: IPageConfig, dependency: string): IWebUI;
    /** postmortem all `IPageContext` */
    postmortem(): IWebUI;
    /** Dispose given `route` `IPageContext` with dependency */
    dispose(route: string, cb: void | ((status: string) => void)): IWebUI;
    /** Destroy given `route` `IPageContext` with dependency */
    destroy(route: string, cb: void | ((status: string) => void)): IWebUI;
    script: IPageContextScript;
    /** Create new `Child Window` */
    openNew(opt: OpenNewWindowConfig): void;
    /** Fetch the given template from server or mem cache */
    getTemplate(templ?: string, cb?: (status: string, template: string) => void): void;
    /** Check this route has any dependency */
    hasDependency(route: string): boolean;
    /** Get dependancy of current page context */
    getDependency(route: string): string[];
    /** Remove Page Config */
    removeConfig(route: string): void;
    /** Get the given route  `IPageConfig`*/
    getConfig(route: string): IPageConfig | void;
    /** Open alert window. Initilized by `$.confirm` */
    alert(cfg: AlertConfig): void;
    /** Open prompt window. Initilized by `$.confirm` */
    prompt(cfg: PromptConfig): void;
    /** Open confirm window. Initilized by `$.confirm` */
    confirm(cfg: ConfirmConfig): void;
    /** Add or Remove `Watermark` in `HTMLElement`*/
    watermark: IWatermark;
    /** `Web UI` Form generator */
    form: IWebForm;
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
    done?: (...args: any[]) => void;
    fail?: (...args: any[]) => void;
};
declare interface ITemplateScript {
    has(identity: string): boolean;
    remove(identity: string): boolean;
    parse(identity: string, text: string, cb: () => void): void;
    register(identity: string, func: () => void): void;
    run(identity: string, data: any, cb: (str: string) => void): ITemplateScript;
    parse(tname: string, data: string, next: () => void): void
}
export declare interface IWeb {
    page(config: IPageConfig): void;
    UI: IWebUI;
    Template: {
        script: ITemplateScript;
        getSet: {
            [id: string]: ($elm?: JQuery<HTMLElement>) => undefined | string
        }
    };
    userInfo: {
        roleId: string;
        loginId: string;
    };
    Ext: {
        export(need?: string[]): InternalWorker;
    };
    errorResponse(errorCode: string, $container: JQuery<HTMLElement>, oldResponse: string, cb?: () => void): void;
    onUnload(route: string, cb: void | ((status: string) => void)): this;
    destroy(route: string, cb: void | ((status: string) => void)): this;
}