// Type definitions for sow.mobile.trade.plus
// Project: https://fsys.tech
// Definitions by: Rajib Chy <https://github.com/rajibchy>
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