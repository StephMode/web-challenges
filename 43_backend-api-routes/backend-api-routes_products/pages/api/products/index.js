import { getAllProducts } from "@/services/productServices";

// the export default keywords makes the function available for nextJS when the route of this API endpoint is accesses.
export default function handler(request, response) {
  // in this case it's necessary to store the return value of the getAllProducts()-fn in a variable so that the API endpoint we create may contain the values from our "database"
  const allProducts = getAllProducts();
  response.status(200).json(allProducts);
  // this statement tells the API to make a response of all values in const allProducts in json format
}
