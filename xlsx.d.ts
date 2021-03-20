// Type definitions for sow-web-ui
// Project: https://safeonline.world/
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