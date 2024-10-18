import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights }) {
  return (
    <StyledLights>
      <li>
        <Light name="Living Room" lights={lights} />
      </li>
      <li>
        <Light name="Kitchen" lights={lights} />
      </li>
      <li>
        <Light name="Bedroom" lights={lights} />
      </li>
      <li>
        <Light name="Bathroom" lights={lights} />
      </li>
      <li>
        <Light name="Garage" lights={lights} />
      </li>
      <li>
        <Light name="Porch" lights={lights} />
      </li>
      <li>
        <Light name="Garden" lights={lights} />
      </li>
      <li>
        <Light name="Office" lights={lights} />
      </li>
    </StyledLights>
  );
}
