"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webSocketClient = void 0;
const ws_1 = require("ws");
function webSocketClient(args) {
    const { wsUrl, events, inactiveTimeout = 10 } = args;
    const socket = {
        ws: new ws_1.WebSocket(wsUrl),
        lastActiveTime: 0,
        interval: setInterval(checkConnection, 1000),
    };
    let timeout;
    function onClose(event) {
        events.close(event);
        clearInterval(socket.interval);
        reconnect();
    }
    function onMessage(event) {
        socket.lastActiveTime = Date.now();
        events.message(event);
    }
    function onError(event) {
        events.error(event);
    }
    function onOpen(event) {
        socket.lastActiveTime = Date.now();
        numberOfAttempts = 0;
        events.open(event);
    }
    function onPing(data) {
        socket.lastActiveTime = Date.now();
        events.ping(data);
    }
    function onPong(data) {
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
    let reconnecting = false;
    let numberOfAttempts = 0;
    function reconnectLogic() {
        reconnecting = true;
        events.onReconnect(numberOfAttempts);
        socket.ws.close();
        socket.lastActiveTime = 0;
        socket.ws = new ws_1.WebSocket(wsUrl);
        registerListeners();
        reconnecting = false;
    }
    function reconnect() {
        if (reconnecting)
            return;
        ++numberOfAttempts;
        if (numberOfAttempts > 5) {
            if (socket.ws) {
                socket.ws.close();
                onError({
                    error: "exceeded_reconnect_attempt",
                    message: "socket could not reconnect after 5 attempts",
                    target: socket.ws,
                    type: "handled",
                });
            }
            clearTimeout(timeout);
            return;
        }
        if (numberOfAttempts === 1) {
            reconnectLogic();
        }
        timeout = setTimeout(reconnectLogic, 1000 * numberOfAttempts);
    }
    function checkConnection() {
        if (!socket.ws) {
            return;
        }
        if (socket.lastActiveTime === 0) {
            return;
        }
        if (Date.now() - socket.lastActiveTime > inactiveTimeout * 1000) {
            reconnect();
            console.log("reconnect", Date.now() - socket.lastActiveTime);
        }
    }
    registerListeners();
    return socket;
}
exports.webSocketClient = webSocketClient;
