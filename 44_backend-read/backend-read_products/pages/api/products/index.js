import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();
    response.status(200).json(products);
    return;
  }
  response.status(404).json({ status: "Method not allowed" });
}

// why the error statement in the vs code terminal

/*
- error Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (node:_http_outgoing:659:11)
    at _res.setHeader (/Users/stephanmodel/neuefische/web-challenges/44_backend-read/backend-read_products/node_modules/next/dist/server/base-server.js:306:24)
    at sendJson (/Users/stephanmodel/neuefische/web-challenges/44_backend-read/backend-read_products/node_modules/next/dist/server/api-utils/node.js:226:9)
    at apiRes.json (/Users/stephanmodel/neuefische/web-challenges/44_backend-read/backend-read_products/node_modules/next/dist/server/api-utils/node.js:445:31)
    at handler (webpack-internal:///(api)/./pages/api/products/index.js:15:26)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: undefined

*/

// because without a return statement the fn tries to change the status again which is not allowed to happen
// with if/else statements or empty return statement in the if statement
