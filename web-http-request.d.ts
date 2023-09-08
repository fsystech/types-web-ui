// Type definitions for web-ui
// Project: https://fsys.tech
// Definitions by: Rajib Chy <https://github.com/rajibchy>
// 11:46 PM 3/20/2021
/// <reference types="jquery"/>
/// <reference types="node"/>
declare interface IHttpRequestOpetions {
    type: "POST" | "GET";
    contentType: string;
    async: boolean;
    cache: boolean;
    dataType: string;
    url: string;
    data: any;
}
declare interface IWebHttpRequest {
    done(next: (data: any) => void): IWebHttpRequest;
    fail(next: (xhr: XMLHttpRequest, textStatus: string, error: string) => void): IWebHttpRequest;
    send(): IWebHttpRequest;
    abort(): IWebHttpRequest;
    dispose(): void;
}
export declare interface IWebHttpRequestConstructor {
    new(opt: IHttpRequestOpetions): IWebHttpRequest;
    readonly prototype: IWebHttpRequest;
}