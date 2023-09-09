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