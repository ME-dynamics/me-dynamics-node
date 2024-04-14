import { FastifyRequest, FastifyReply } from "fastify";
export type tRequest = FastifyRequest;
export type tReply = FastifyReply;
export interface IBuildRouteGen {
    version: string;
    service: string;
}
