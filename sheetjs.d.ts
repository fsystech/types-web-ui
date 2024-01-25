/*
* Copyright FSys Tech Limited [FSys]. All rights reserved.
*
* This software owned by FSys Tech Limited [FSys] and is protected by copyright law
* and international copyright treaties.
*
* Access to and use of the software is governed by the terms of the applicable FSys Software
* Services Agreement (the Agreement) and Customer end user license agreements granting
* a non-assignable, non-transferable and non-exclusive license to use the software
* for it's own data processing purposes under the terms defined in the Agreement.
*
* Except as otherwise granted within the terms of the Agreement, copying or reproduction of any part
* of this source code or associated reference material to any other location for further reproduction
* or redistribution, and any amendments to this copyright notice, are expressly prohibited.
*
* Any reproduction or redistribution for sale or hiring of the Software not in accordance with
* the terms of the Agreement is a violation of copyright law.
*/
/////////////////////////////////////////////////////////////////
// Type definitions for Live Trade
// Project: https://fsys.tech/
// Definitions by: Rajib Chy <https://github.com/rajibchy>
// 10:39 PM 1/23/2024
// by rajib chy
/// <reference types="node"/>
////////////////////////////////////////////////////////////////
import * as XLSX_DEF from './sheetjs/index';
export {
    default as XDEF
} from './sheetjs/index';
export type writeFile = (data: XLSX_DEF.WorkBook, filename: string, opts?: XLSX_DEF.WritingOptions) => any;
export type writeFileAsync = (filename: string, data: XLSX_DEF.WorkBook, opts: XLSX_DEF.WritingOptions | XLSX_DEF.CBFunc, cb?: XLSX_DEF.CBFunc) => any;
