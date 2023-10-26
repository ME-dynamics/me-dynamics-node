import {
HttpRequest, HttpResponse
} from "uWebSockets.js";

export type tRequest = HttpRequest;
// http interfaces start
export type tReply = HttpResponse;
// http interfaces end


export interface IBuildRouteGen {
  version: string;
  service: string;
}

