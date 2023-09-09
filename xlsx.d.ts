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

/// <reference types="jquery"/>
/// <reference types="node"/>
declare interface IXLSUtil {
    encode_col(col: number): string;
    encode_row(row: any): string;
    encode_cell(): void;
    encode_range(): void;
    decode_col(): void;
    decode_row(): void;
    split_cell(): void;
    decode_cell(): void;
    decode_range(): void;
    format_cell(): void;
    get_formulae(): void;
    make_csv(): void;
    make_json(sheet: any, opts?: NodeJS.Dict<any>): NodeJS.Dict<any>[];
    make_formulae(): void;
    sheet_to_csv(): void;
    sheet_to_json(): void;
    sheet_to_formulae(): void;
    sheet_to_row_object_array(): void;
}
declare interface ICFB {
    read(blob: ArrayBuffer | string, options: NodeJS.Dict<any>)
}
export declare interface IXLS {
    parse_xlscfb(cfb: ICFB, options?: NodeJS.Dict<any>): {
        sheets: NodeJS.Dict<any>;
        SheetNames: string[];
    };
    read(): void;
    readFile(): void;
    utils: IXLSUtil;
    CFB: ICFB;
    SSF: any;
}