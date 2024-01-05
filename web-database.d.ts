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

// Type definitions for Symbol Fundamental information
// Project: https://fsys.tech
// Definitions by: Rajib Chy <https://github.com/rajibchy>
// 12:18 PM 9/2/2021
// by rajib chy
/// <reference types="node"/>
declare type ApiResponseStatus = 'SUCCESS' | 'ERROR' | 'ABORTED' | 'TIMEOUT' | 'NETWORK_ERROR' | 'LOGOUT';
declare interface IWebDatabaseResponse {
    ret_val: number;
    ret_msg: string;
    ret_data_table?: any;
    status?: ApiResponseStatus;
}
declare interface IDatabaseConfig {
    module: string; sp: string; validate?: boolean;
}
declare interface IWebDatabaseRequestConfig {
    conf?: string;
    data?: string | FormData;
    content_type?: string;
    timeout?: number;
}
declare interface HttpRequestInit extends RequestInit {
    timeout?: number;
    controller?: AbortController;
}
declare interface PostRequestConfig {
    conf?: string | NodeJS.Dict<any>;
    data?: string | FormData;
    content_type?: string;
    timeout?: number;
}
declare interface IApi {
    readonly userAgent: string;
    /** Close all active connection */
    closeAllConn(): IApi;
    postRequestAsync(conf: PostRequestConfig, url?: string): Promise<IWebDatabaseResponse>;
    getDataAsync(formObject?: NodeJS.Dict<any>): Promise<IWebDatabaseResponse>;
    /**
     * 
     * @param data Not required. Request param ?x=1 param shoud be `NodeJS.Dict<any>`
     * @param url Not required. If pass url, the initilized url will be skip
     * @return `Promise<IWebDatabaseResponse>`
     */
    getRequestAsync(data?: NodeJS.Dict<any>, url?: string): Promise<IWebDatabaseResponse>;
    postDataAsync(payload: NodeJS.Dict<any>): Promise<IWebDatabaseResponse>;
    getAsync(config: IDatabaseConfig, formObject?: NodeJS.Dict<any>): Promise<IWebDatabaseResponse>;
    postAsync(config: IDatabaseConfig, payload: NodeJS.Dict<any>): Promise<IWebDatabaseResponse>;
    uploadDataAsync(conf: IWebDatabaseRequestConfig): Promise<IWebDatabaseResponse>;
    getAsync(url: string, data: NodeJS.Dict<any>): Promise<IWebDatabaseResponse>;
    postAsync(url: string, data: NodeJS.Dict<any>): Promise<IWebDatabaseResponse>;
    postAsync(url: string, data: NodeJS.Dict<any>, def: NodeJS.Dict<any>): Promise<IWebDatabaseResponse>;
    /** 
     * Execute `stored procedure` to `database`.
     * It will communicate with http get `request`.
     * @param obj This is `quary` object of this `request`
     * @param endPoint If `undefined` then we'll use `endPoint`:`/app/database/crud`
     * @param validate Force validation request to database
     */
    executeAsync(sp: string, obj: any[] | NodeJS.Dict<any>, endPoint?: string, validate?: boolean): Promise<IWebDatabaseResponse>;
    /** 
     * ```ts 
     * Execute stored procedure to database.
     * If `endPoint` is `undefined` then we will use endPoint:`/app/database/crud`
     * ```
    */
    executeIOAsync(sp: string, obj: any[] | NodeJS.Dict<any>, endPoint?: string, validate?: boolean): Promise<IWebDatabaseResponse>;
    /** Dispose current `dbContext` */
    dispose(): void;
}
declare interface IWebDatabase extends IApi {
    closeAllConn(): IWebDatabase;
    /** Close Connection */
    close(key: string): void;
    /** 
     * ```ts 
     * Execute stored procedure to database.
     * It will communicate with http get request
     * ```
     */
    execute(sp: string, obj: any[] | NodeJS.Dict<any>, validate?: boolean): Promise<IWebDatabaseResponse>;
    /** Execute stored procedure to database */
    executeIO(query: string, obj: any[] | NodeJS.Dict<any>, validate?: boolean): Promise<IWebDatabaseResponse>;
    /** Execute plain text query */
    executeQuery(query: string, arr: any[], next: (res: IWebDatabaseResponse) => void): string;
    /** 
     * ```ts 
     * Execute stored procedure to database.
     * It will communicate with http get request
     * ```
     */
    execute(query: string, obj: any[] | Dct<any>, next: (res: IWebDatabaseResponse) => void, validate?: boolean): string;
    /** Execute stored procedure to database */
    executeIO(query: string, obj: any[] | Dct<any>, next: (res: IWebDatabaseResponse) => void, validate?: boolean): string;
}
declare interface IWebDatabaseConstructor {
    /**
     * ```ts 
     * Create `WebDatabase` instance
     * default api: /app/database/crud
     * ```
     */
    new(api?: string, timeout?: number): IWebDatabase;
    new(api?: string, viewstate?: string): IWebDatabase;
    new(api?: string, timeout?: number, viewstate?: string): IWebDatabase;
    readonly prototype: IWebDatabase;
}
declare type ApiRequestSettings = IWebDatabaseRequestConfig;
declare interface IApiRequestHandler {
    readonly key: string;
    close(key?: string): void;
    dispose(): void;
    postAsync(settings: PostRequestConfig, url?: string): Promise<IWebDatabaseResponse>;
    post(settings: ApiRequestSettings, def?: string, url?: string): Promise<IWebDatabaseResponse>;
    request(settings: ApiRequestSettings, def?: string, url?: string): Promise<IWebDatabaseResponse>;
    /** Communicate with with db server */
    getAsync(qParam?: NodeJS.Dict<string>, timeout?: number, url?: string): Promise<IWebDatabaseResponse>;
}