import { HttpRequest, HttpResponse } from "uWebSockets.js";
export type tRequest = HttpRequest;
export type tReply = HttpResponse;
export interface IBuildRouteGen {
    version: string;
    service: string;
}
