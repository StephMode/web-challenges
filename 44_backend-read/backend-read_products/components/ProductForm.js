import styled from "styled-components";

export default function ProductForm({ onSubmit, formType }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      {formType === "Add" ? <StyledHeading>Add a new Fish</StyledHeading> : ""}
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name"></input>
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description"></input>
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price"></input>
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>

      <button type="submit">{formType} Product</button>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

/* Action Plan

✅ 1) create component and KISS in the beginning

✅ 2) add all neccessary fields

✅ 3) add submit handler fn


xx>
4) add post route

5) switch to product list where useSWR is initialized and set POST request there using SWR mutate
<xx

or maybe pivot and try including both in the form

*/
