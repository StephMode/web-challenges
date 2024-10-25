import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  // handler function for editing a product
  async function handleEditProduct(event) {
    event.preventDefault();

    // collect data from for editing and store them
    const fromData = new FormData(event.target);
    const productData = Object.fromEntries(fromData);

    // send PUT request
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  // handler for deleting a product
  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    // send DELETE request to the server for a specific product
    if (response.ok) {
      // of the response is successful redirect to the home page
      router.push("/"); // ist das nicht ne array method???
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <ProductForm formType={"Edit"} onSubmit={handleEditProduct} />
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <button type="button" onClick={() => handleDeleteProduct(id)}>
        Delete Product
      </button>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
