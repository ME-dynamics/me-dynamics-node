/// <reference types="node" />
/// <reference types="node" />
import type { WebSocket, CloseEvent, MessageEvent, ErrorEvent, Event, RawData } from "ws";
export interface IWebSocketClient {
    wsUrl: string;
    events: {
        close: (event: CloseEvent) => void;
        message: (event: RawData) => void;
        error: (event: ErrorEvent) => void;
        open: (event: Event) => void;
        ping: (data: Buffer) => void;
        pong: (data: Buffer) => void;
        onReconnect: (numberOfAttempts: number) => void;
    };
    inactiveTimeout: number | undefined;
}
export interface ISocket {
    ws: tWebSocket;
    lastActiveTime: number;
    interval: NodeJS.Timer;
}
export type tCloseEvent = CloseEvent;
export type tMessageEvent = MessageEvent;
export type tErrorEvent = ErrorEvent;
export type tEvent = Event;
export type tWebSocket = WebSocket;
export type tRawData = RawData;
