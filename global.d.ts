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

// 4:06 PM 10/26/2021
// by rajib chy
/// <reference types="node"/>
/// <reference path="index.d.ts"/>
/// re-create on 4:09 PM 9/17/2021
export { }
declare interface IVAPIDKeys {
    readonly publicKey: string;
    readonly isChanged: boolean;
}
declare global {
    var ThemeName: string;
    var __viewstate: string;
    function locationReload(force?: boolean): void;
    /**
     * Voluntary Application Server Identification for Web Push
     * @see {@link go https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid}
     */
    var vapid: IVAPIDKeys;
    var registration: ServiceWorkerRegistration;
    /** If you inside of `ServiceWorker` */
    function skipWaiting(): Promise<void>;
}