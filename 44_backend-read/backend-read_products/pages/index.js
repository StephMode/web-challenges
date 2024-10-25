import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";
import styled from "styled-components";
import useSWR from "swr";

export default function HomePage() {
  // swr hook for the post request to have access to mut
  const { mutate } = useSWR("/api/products/");

  // submit handler for adding new product
  async function handleAddProduct(event) {
    event.preventDefault();

    // collect data from the form for submission and store them in an object
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    // send the post request
    const response = await fetch("/api/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} formType={"Add"} />
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
