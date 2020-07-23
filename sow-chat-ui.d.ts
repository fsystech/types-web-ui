// @ts-check
// Type definitions for sow-web-ui
// Project: https://safeonline.world/
// Definitions by: Rajib Chy <https://github.com/rajibchy>

export interface IProxyServer {
	[id: string]: ( ...args: any[] ) => void;
}
export interface ICore {
	onConnect( server: IProxyServer, token: string, hash: string, loginId: string, data: any ): void;
	online( hash: string ): void;
	offline( hash: string ): void;
	run( event: any, config?: any ): void;
	regGlobalEvent(): void;
	onPrivateMessage( hash: string, userName: string, message: string, msg_date: string, message_id: string, msg_key: string ): void;
	onLoadPrivateMessage( toHash: string, data: any ): void;
	onPrivateMessageKeyup( hash: string ): void;
	onLoadMembar( data: any ): void;
	onReconnected( connectionId: string, hash: string, name: string, data: any ): void;
	onLoadCheckInPrivateMessage( total: string | number ): void;
	onCheckOutPrivateMessage( toHash: string, message_id: string, check_out?: string, msg_key?: string ): void;
	onReadPrivateMessage( toHash: string, msg_key: string ): void;
	onReadPrivateMessageAll( toHash: string, msg_key: string ): void;
	unread( toHash: string, $user_elm: JQuery<HTMLElement>, total?: number ): void;
	isOnline( hash: string ): boolean;
	getHtml( row: Dct<string> ): string;
	onReadPrivateMessage( toHash: string ): void;
	writeMessage( $chat_elm: JQuery<HTMLElement>, message: string ): void;
	getMsgHtml( row: Dct<string> ): string;
	loader: {
		out( $chat_elm: JQuery<HTMLElement>, $msg: JQuery<HTMLElement>, inf: { message_id?: string; msg_key?: string; msg: string; msg_time?: string } ): void;
		in( who: string, $el: JQuery<HTMLElement> ): JQuery<HTMLElement>;
	};
}