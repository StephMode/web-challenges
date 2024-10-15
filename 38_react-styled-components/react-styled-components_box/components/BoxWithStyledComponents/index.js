import styled from "styled-components";

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox $isBlack={isBlack}></StyledBox>;
}

const StyledBox = styled.div`
  width: ${({ $isBlack }) => ($isBlack ? "100px" : "200px")};
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

/* Plan

Make a comp that has styling in the comp and handles the isBlack prop within the styling


1. import styled components

2. Create a custom comp StyledBox.div

3. delete className? attr

 className={`box-with-classname${
        isBlack ? " box-with-classname--black" : ""
      }`}

4. Add style to class comp

- basic style
- pseudo

5. implement tern op for bcg

My final solution:

export default function BoxWithStyledComponents({ isBlack }) {
  return (
    <>
      <StyledBox></StyledBox>
      <StyledBox $isBlack></StyledBox>
    </>
  );
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

two custom comp calls becuase I had difficulties making use of the prop within HomePage

Final working solution:

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox $isBlack={isBlack}></StyledBox>;
}

const StyledBox = styled.div`
  width: ${({ $isBlack }) => ($isBlack ? "100px" : "200px")};
  height: 100px;
  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

💡 Take Aways:

- props regarding style are being called with leading $
- props (which are params in react) are declared and called upon with {}
- Mind both when using them in custom comps and ternary ops

*/
