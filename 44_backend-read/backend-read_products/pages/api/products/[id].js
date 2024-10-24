// 1) & 2)
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
// import Product from "@/pages/[id]"; // 💡 reason why my implementation was not working was due to this wrong import statement

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id);

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }
    response.status(200).json(product);
    return;
  }
  response.status(405).json({ status: "Method not allowed" });
}

/* Action Plan

1) delete import of the hard coded lib

2) import dbConnect
3) import the product model to have the data from the db here

4) make the handler fn asynch

5) implement await dbConnect() statement

6) swap const products.find() for Products, becaue we need the model from the driver (mongoose)
🟡 ==> yes and no, we need an if statement here to check wether method === "GET"
also wie don't need the array method find() anymore since we are now having a noSQL database which has the structure of an object

*/
