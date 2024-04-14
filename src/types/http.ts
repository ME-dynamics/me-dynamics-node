import {
  FastifyRequest,
FastifyReply
} from "fastify";

export type tRequest = FastifyRequest;
// http interfaces start
export type tReply = FastifyReply;
// http interfaces end


export interface IBuildRouteGen {
  version: string;
  service: string;
}

