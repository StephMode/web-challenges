const { getProductById } = require("@/services/productServices");

// the export default keywords makes the function available for nextJS when the route of this API endpoint is accesses.
export default function handler(request, response) {
  // store the ids of the array in a destructured variable

  // 💡💡💡💡
  // the request query object is a URL like "3000/api/products/5"
  // this program is executed because of the folder structure: ./api/products/id
  // from that we can destructure the id of the query
  const { id } = request.query;
  console.log(id);

  // store return value of getProductById in a const
  // the function stored in the const returns one product out of the array of objects
  // the function nows which product to find/look for based on the id of the request object ==> which is the id of the URL
  const productById = getProductById(id);

  // declare statements for the repsonse of the handler fn
  // 👆🏻 refine by adding logic if productById can't be found by the respective fn in the const

  if (!productById) {
    response.status(404).json({ message: "Product not found" });
  } else {
    response.status(200).json(productById);
  }
}

/* Optimization

Implement logic for an error case in case the client tries to access the endpoint with an id that doesn't exist in the database

if productById has a return value that doesn't match the database: return 404 not found

else return response.status(200) ...


*/

/* Issues I ran into implementing this function

1) not declaring the fn as export default
Without export default, the function will not be passed and would need to be called elsewhere in the app.
Since we want to run it upon mounting, it should be export default

2) Server Error

TypeError: Cannot destructure property 'id' of 'request.query' as it is undefined.

My assumption: there is something missing the destructured const { id }, because in my code there is something missing which tells the const from what to destructure the id exactly

Solution: there was nothing missing. My mistake was that I wrongly declared the function like this

export default function handler(response, request) {

When it actually should be:

export default function handler(request, response) {

✅ ==> with my initial implementation, the arguments of the function where in the wrong order and so the request couldn't have been executed prior to the response statement.


*/
