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
// 11:46 PM 3/20/2021
/// <reference types="jquery"/>
/// <reference types="node"/>
export interface IWebWorker {
    terminate(): void;
    postMessage(msg: string): void;
    /**
     * This functions takes at least one argument, the method name we want to query.
     * Then we can pass in the arguments that the method needs.
     * @param methodName 
     * @param methodArgs 
     */
    sendQuery(methodName: string, ...methodArgs: any[]): void;
    addListener(name: string, listener: (...args: any[]) => void): IWebWorker;
    removeListener(name?: string): IWebWorker;
    onUnauthorized(): void;
}
export interface IWebWorkerConstructor {
    new(url: string, defaultListener?: (...args: any[]) => void, onError?: (ev: ErrorEvent) => void, workerName?: string): IWebWorker;
    readonly prototype: IWebWorker;
}