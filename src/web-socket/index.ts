import { WebSocket as WS } from "ws";
import type {
  IWebSocketClient,
  ISocket,
  tCloseEvent,
  tRawData,
  tErrorEvent,
  tEvent,
} from "../types";

export function webSocketClient(args: IWebSocketClient) {
  const { wsUrl, events, inactiveTimeout = 10 } = args;
  const socket: ISocket = {
    ws: new WS(wsUrl),
    lastActiveTime: 0,
    interval: setInterval(checkConnection, 1000),
  };
  function onClose(event: tCloseEvent) {
    events.close(event);
    reconnect();
  }
  function onMessage(event: tRawData) {
    socket.lastActiveTime = Date.now();
    events.message(event);
  }
  function onError(event: tErrorEvent) {
    events.error(event);
  }
  function onOpen(event: tEvent) {
    socket.lastActiveTime = Date.now();
    events.open(event);
  }
  function onPing(data: Buffer) {
    socket.lastActiveTime = Date.now();
    events.ping(data);
  }
  function onPong(data: Buffer) {
    socket.lastActiveTime = Date.now();
    events.pong(data);
  }
  function registerListeners() {
    socket.ws.on("close", onClose);
    socket.ws.on("message", onMessage);
    socket.ws.on("error", onError);
    socket.ws.on("open", onOpen);
    socket.ws.on("ping", onPing);
    socket.ws.on("pong", onPong);
  }
  // reconnect the socket
  let reconnecting: boolean;
  let numberOfAttempts = 0;
  function reconnect() {
    if (reconnecting) return;
    ++numberOfAttempts;
    if (numberOfAttempts > 10) {
      return;
    }
    setTimeout(() => {
      reconnecting = true;
      events.onReconnect(numberOfAttempts);
      socket.ws.close();
      socket.lastActiveTime = 0;
      socket.ws = new WS(wsUrl);
      registerListeners();
      reconnecting = false;
    }, 1000 * numberOfAttempts);
  }
  function checkConnection() {
    if (!socket.ws) {
      return;
    }
    if (socket.lastActiveTime === 0) {
      return;
    }
    if (Date.now() - socket.lastActiveTime > inactiveTimeout * 1000) {
      //   reconnect();
      console.log("reconnect", Date.now() - socket.lastActiveTime);
    }
  }
  registerListeners();
  return socket;
}
