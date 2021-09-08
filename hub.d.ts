/////////////////////////////////////////////////////////////////
// Type definitions for Symbol Fundamental information
// Project: https://safeonline.world/
// Definitions by: Rajib Chy <https://github.com/rajibchy>
// 12:04 PM 9/8/2021
// by rajib chy
/// <reference types="node"/>
////////////////////////////////////////////////////////////////
declare type ISocketHubConfig = {
    needMsgInit?: boolean;
    socket?: SocketIOClient.ConnectOpts;
} | boolean;
declare interface Ihub {
    /** return `Socket` Id, if initialized ! */
    readonly id: string;
    /** return `ServerProxy` string[] */
    getServerProxy(): string[];
    /** return `SocketIOClient.Socket`, if initialized !  */
    socket(): SocketIOClient.Socket;
    /** initialized `SocketIOClient.Socket` & return `SocketIOClient.Socket` */
    init(cfg?: ISocketHubConfig): SocketIOClient.Socket;
}