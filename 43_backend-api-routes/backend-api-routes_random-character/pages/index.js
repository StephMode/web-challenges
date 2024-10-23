import useSWR from "swr";
import styled from "styled-components";

export default function HomePage() {
  async function fetcher(url) {
    const response = await fetch(url);
    return await response.json();
  }

  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <p>🚨 Error</p>;
  if (isLoading) return <p>⏳ Is Loading</p>;

  console.log(data);

  return (
    <>
      <h1>Hello from Next.js!</h1>
      <CharacterCard>
        <p>
          <span>First Name: </span>
          {data.firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {data.lastName}
        </p>
        <p>
          <span>Age: </span>
          {data.age}
        </p>
        <p>
          <span>Twitter: </span>
          {data.twitter}
        </p>
      </CharacterCard>
    </>
  );
}

const CharacterCard = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  background-color: goldenrod;
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 0px 20px;
`;
