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