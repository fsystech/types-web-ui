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
// 7:21 PM 11/2/2023
// by rajib chy
/// <reference types="node"/>
////////////////////////////////////////////////////////////////
declare interface CtxEvent extends MouseEvent {
    readonly target: HTMLElement;
}
declare type ContextMenuEvent = {
    readonly handled: boolean;
    readonly target: HTMLElement;
    readonly data: ContextMenuItem;
    readonly instance: IContextMenu;
}

declare type ContextMenuItem = {
    text: string;
    color?: string;
    value?: string;
    disabled?: boolean;
    submenu?: any;
    hotkey?: string;
    subitems?: ContextMenuItem[];
    onclick?: (e: ContextMenuEvent) => void;
};

declare interface IContextMenu {
    hide(): void;
    install(): void;
    uninstall(): void;
    readonly shown: boolean;
    readonly items: ContextMenuItem[];
}
declare interface ContextMenuConstructor {
    new(container: HTMLElement, items: ContextMenuItem[]): IContextMenu;
    readonly prototype: IContextMenu;
}
declare var ContextMenu: ContextMenuConstructor;