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
// at 1:23 PM 11/9/2022
import * as ht from 'handsontable';
interface HandsontableConstructorExt {
    baseVersion: string;
    buildDate: string;
    packageName: 'handsontable';
    version: string;
    cellTypes: ht.default.CellType;
    languages: typeof ht.default.languages;
    dom: typeof ht.default.dom;
    editors: typeof ht.default.editors;
    helper: typeof ht.default.helper;
    hooks: typeof ht.default.hooks;
    plugins: typeof ht.default.plugins;
    renderers: typeof ht.default.renderers;
    validators: typeof ht.default.validators;
    Core: typeof ht.default.Core;
    EventManager: typeof ht.default.EventManager;
    DefaultSettings: ht.default.GridSettings;
}
type Handsontable = ht.default;
export interface HandsontableConstructor extends HandsontableConstructorExt {
    new(element: Element, options: ht.default.GridSettings): Handsontable;
    readonly prototype: Handsontable;
}
export { Handsontable }