import { createServer, request } from "node:http";

export const server = createServer((request, Response) => {
  Response.statusCode = 200;
  Response.end("Hello Stephan");
});
