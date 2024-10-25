export default function ProductForm({ onSubmit, formType }) {
  return (
    <form onSubmit={onSubmit}>
      {formType === "Add" ? <h2>Add a new Fish</h2> : ""}
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name"></input>
      </label>
      <label htmlFor="description">
        Description:
        <input type="text" id="description" name="description"></input>
      </label>
      <label htmlFor="price">
        Price:
        <input type="number" id="price" name="price"></input>
      </label>
      <label htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </label>

      <button type="submit">{formType} Product</button>
    </form>
  );
}

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
